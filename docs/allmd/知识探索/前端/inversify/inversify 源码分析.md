# inversify 源码分析

![inversify](../../../images/知识探索/前端/inversify/inversify%20源码分析/1.jpg)

下图是 **inversify@6.0.1** 的源码结构：

![inversify source construct](../../../images/知识探索/前端/inversify/inversify%20源码分析/2.png)

inversify 有3个必须的阶段，以及2个可选阶段。

- Annotation
- Planning
- Resolution
- Activation(optional)
- Middleware(optional)

整体5个阶段的执行顺序和关系如下图：

![five phases](../../../images/知识探索/前端/inversify/inversify%20源码分析/3.png)

## 注解(Annotation)实现

根据对 inversify 的使用发现，无论怎样所有的依赖都需要先使用`@injectable()`注解，然后绑定到容器中，才可以被注入，使用`@inejct()`，所以先从这两个注解出发，了解其中的实现原理。

**@injectable()**

从源码结构中可以清晰找到对应代码位置，在文件夹中通过文件名很容易定位到对应源码位置。

```ts
// src/annotation/injectable.ts
function injectable() {
  return function <T extends abstract new (...args: never) => unknown>(target: T) {

    if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
      throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
    }

    const types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
    Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);

    return target;
  };
}
```

源码很简单，只有寥寥数行，`ETADATA_KEY.DESIGN_PARAM_TYPES`用于定义函数(依赖)的参数类型，然后在对应的目标依赖上绑定key为`METADATA_KEY.PARAM_TYPES`的元数据，并且不允许重复绑定，也就是一个`target`只允许使用一次`@injectable()`。根据之前的`reflect-metadata`可以知道，现在是将对应关系放在了一个`WeakMap`中。

**@inject()**

相对于`5.x`版本的 inversify 将`@inejct()`增加了`inject_base.ts`，由`inejct.ts`引用。

```ts
// src/annotation/inject.ts
const inject = injectBase(METADATA_KEY.INJECT_TAG); // "inject"
export { inject };
```

```ts
// src/annotation/inject_base.ts
export function injectBase(metadataKey: string) {
  return <T = unknown>(serviceIdentifier: ServiceIdentifierOrFunc<T>) => {
    return (
      target: DecoratorTarget,
      targetKey?: string | symbol,
      indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<any>,
    ) => {
      if (serviceIdentifier === undefined) {
        const className = typeof target === "function" ? target.name : target.constructor.name;

        throw new Error(UNDEFINED_INJECT_ANNOTATION(className));
      }
      return createTaggedDecorator(
        new Metadata(metadataKey, serviceIdentifier) // { key: metadataKey, value: serviceIdentifier }
      )(target, targetKey, indexOrPropertyDescriptor);
    };
  }
}
```

核心方法是`createTaggedDecorator()`，由于可以给属性可构造函数参数注入依赖，分别调用不同的处理函数，代码如下：

```ts
// src/annotation/decorator_utils.ts
function createTaggedDecorator(
  metadata: interfaces.MetadataOrMetadataArray,
) {
  return <T>(
    target: DecoratorTarget,
    targetKey?: string | symbol,
    indexOrPropertyDescriptor?: number | TypedPropertyDescriptor<T>,
  ) => {
    if (typeof indexOrPropertyDescriptor === "number") {
      tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
    } else {
      tagProperty(target, targetKey as string | symbol, metadata);
    }
  };
}
```

在两个处理函数中，添加了不同的`METADATA_KEY`，格式化参数后又到了统一的处理函数中：

```ts
// src/annotation/decorator_utils.ts
function tagParameter(
  annotationTarget: DecoratorTarget,
  parameterName: string | symbol | undefined,
  parameterIndex: number,
  metadata: interfaces.MetadataOrMetadataArray
) {
  _throwIfMethodParameter(parameterName);
  // METADATA_KEY.TAGGED => "inversify:tagged"
  _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget as ConstructorFunction, parameterIndex.toString(), metadata);
}

function tagProperty(
  annotationTarget: DecoratorTarget,
  propertyName: string | symbol,
  metadata: interfaces.MetadataOrMetadataArray
) {
  if (targetIsConstructorFunction(annotationTarget)) {
    throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
  }
  // METADATA_KEY.TAGGED => "inversify:tagged_props"
  _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
}
```

由于属性和构造函数参数有所不同，所以这里第2、3个参数也有所不同，分别传递第个参数以及属性名。

`_tagParameterOrProperty`实现如下：

```ts
// src/annotation/decorator_utils.ts
function _tagParameterOrProperty(
  metadataKey: string,
  annotationTarget: NewableFunction,
  key: string | symbol,
  metadata: interfaces.MetadataOrMetadataArray,
) {
  const metadatas: interfaces.Metadata[] = _ensureNoMetadataKeyDuplicates(metadata);

  let paramsOrPropertiesMetadata: Record<string | symbol, interfaces.Metadata[] | undefined> = {};
  // read metadata if available
  if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
    paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
  }

  let paramOrPropertyMetadata: interfaces.Metadata[] | undefined = paramsOrPropertiesMetadata[key as string];

  if (paramOrPropertyMetadata === undefined) {
    paramOrPropertyMetadata = [];
  } else {
    // 无法重复定义相同key
    for (const m of paramOrPropertyMetadata) {
      if (metadatas.some(md => md.key === m.key)) {
        throw new Error(`${ERROR_MSGS.DUPLICATED_METADATA} ${m.key.toString()}`);
      }
    }
  }

  // set metadata
  paramOrPropertyMetadata.push(...metadatas);
  paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
  Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);

}
```

在定义元数据时，首先不能有重复的元数据(`metadata`)，然后先获取已有的元数据，然后将新定义的元数据加入。

### 示例说明

下面实际写一段代码，更好的理解上面的代码。假设现在我们需要一个“员工”，员工有一个“薪资”和“性别”属性，“薪资”是通过属性注入的，而“性别”是通过构造函数参数注入的，所以有如下代码。

```ts
@injectable()
class Employee {
    @inject("Salary")
    public salary: Salary;
    public gender: Salary;

    constructor(
        @inject("Gender")
        gender: Gender
    ) {
        this.gender = gender;
    }

    public work() {
        return "Work!";
    }
}

@injectable()
class Salary {
    public get() {
        return "10000";
    }
}

@injectable()
class Gender {
    public get() {
        return "男";
    }
}
```

首先是`@injection()`，源码中`Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target)`，实际上是这样：

```ts
Reflect.defineMetadata("inversify:paramtypes", [undefined], Employee); // 因为在构造函数中使用了@inject()
Reflect.defineMetadata("inversify:paramtypes", [], Salary);
Reflect.defineMetadata("inversify:paramtypes", [], Gender);
```

然后是`@inject()`，最终结果是这样的：

```ts
Reflect.defineMetadata("inversify:tagged_props", {
    salary:[
        {
            key:"inject", value: "Salary"
        }
    ]
}, Employee)  
Reflect.defineMetadata("inversify:tagged", {
    "0":[
        {
            key:"inject", value: "Gender"
        }
    ]
}, Employee)
```

效果就好像在`Employee`上绑定了两个种类型的元数据，如下图：

![inject tagged](../../../images/知识探索/前端/inversify/inversify%20源码分析/4.png)

## 绑定依赖

当前如果要`@inejct()`生效的话，还需要将需要注入的依赖绑定到容器中，因为只有绑定到容器中的依赖才可以被注入。

接着上面的实例代码，我们就使用基本的绑定方法：

```ts
let container = new Container();
container.bind("Salary").to(Salary);
container.bind("Gender").to(Gender);
container.bind("Employee").to(Employee);
```

> 注意这里`bind("Salary").to(Salary)`和`bind(Salary).to(Salary)`是不同的，并且写法都是合法的。

`.bind()`方法会返回一个`BindingToSyntax`类型的数据，表示：*绑定`to`语法*，用于提供后续api，比如：`.to()`、`.toSelf()`和`.toDynamicValue()`等。

```ts
// src/container/container.ts
public bind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T> {
    const scope = this.options.defaultScope || BindingScopeEnum.Transient;
    const binding = new Binding<T>(serviceIdentifier, scope);
    // 将所有的依赖全部保存到一个Map中
    this._bindingDictionary.add(serviceIdentifier, binding as Binding<unknown>);
    return new BindingToSyntax<T>(binding);
}
```

> `_bindingDictionary`中封装了一个Map以及相关操作，源码位置在：`/src/container/lookup.ts`。

```ts
// src/syntax/binding_to_syntax.ts
class BindingToSyntax<T> implements interfaces.BindingToSyntax<T> {
    private _binding: interfaces.Binding<T>;

    public constructor(binding: interfaces.Binding<T>) {
        this._binding = binding;
    }

    public to() {
        // ...
        return new BindingInWhenOnSyntax<T>(this._binding);
    }

    public toSelf() {
        const self = this._binding.serviceIdentifier;
        return this.to(self);
    }

    public toConstantValue() {
        // ...
        return new BindingWhenOnSyntax<T>(this._binding);
    }

    public toDynamicValue() {
        // ...
        return new BindingInWhenOnSyntax<T>(this._binding);
    }
    // ...
}
```

在调用`.toXX()`方法后，返回的实例从名字可以看出后续支持的api类型，如：`BindingInWhenOnSyntax`就是可以使用`.in`、`.when`和`.on`相关api，比较熟悉的有：`.inSingletonScope()`、`.whenTargetTagged()`、`.whenTargetNamed()`和`.onActivation()`。

inversify 支持链式调用，也就是在调用一个方法后仍然可以继续调用其他API，这些都是在代码里面约束的。比如在`.whenTargetTagged()`后还可以调用`.onXX()`，代码如下：

```ts
// src/syntax/binding_when_syntax.ts
class BindingWhenSyntax<T> implements interfaces.BindingWhenSyntax<T> {
    private _binding: interfaces.Binding<T>;

    public constructor(binding: interfaces.Binding<T>) {
        this._binding = binding;
    }

    // ...

    public whenTargetNamed(name: string | number | symbol): interfaces.BindingOnSyntax<T> {
        this._binding.constraint = namedConstraint(name);
        return new BindingOnSyntax<T>(this._binding);
    }

    public whenTargetTagged(tag: string | number | symbol, value: unknown): interfaces.BindingOnSyntax<T> {
        this._binding.constraint = taggedConstraint(tag)(value);
        return new BindingOnSyntax<T>(this._binding);
    }
    // ...
}
```

> `.whenTargetTagged()`可能既包含在`BindingWhenOnSyntax`中，也包含的`BindingInWhenOnSyntax`中。

### 绑定语法对应的API

| to | in | on | when |
| - | - | - | - |
| .to() | .inRequestScope() | .onActivation() | .when() |
| .toSelf() | .inSingletonScope() | .onDeactivation() | .whenTargetNamed() |
| .toConstantValue() | .inTransientScope() |  | .whenTargetIsDefault() |
| .toDynamicValue() |  |  | .whenTargetTagged() |
| .toConstructor() |  |  | .whenInjectedInto() |
| .toFactory() |  |  | .whenParentNamed() |
| .toFunction() |  |  | .whenParentTagged() |
| .toAutoFactory() |  |  | .whenAnyAncestorIs() |
| .toAutoNamedFactory() |  |  | .whenNoAncestorIs() |
| .toProvider() |  |  | .whenAnyAncestorNamed() |
| .toService() |  |  | .whenNoAncestorNamed() |
|  |  |  | .whenAnyAncestorTagged() |
|  |  |  | .whenNoAncestorTagged() |
|  |  |  | .whenAnyAncestorMatches() |
|  |  |  | .whenNoAncestorMatches() |

### 重复绑定

根据链式调用的规则，由源码中各个语法间可以互相调用的关系，可以得到如下的关系：

![binding syntax](../../../images/知识探索/前端/inversify/inversify%20源码分析/5.png)

很容易发现存在一些“圈”，也就是可以循环调用。那么基于上面的实例，可以写出如下代码：

```ts
container.bind(Employee).toSelf().onActivation((context, firstEmployee) => {
    console.log("Employee first activation");
    return firstEmployee;
}).whenTargetNamed("Employee1").onActivation((context, secondEmployee) => {
    console.log("Employee second activation");
    return secondEmployee;
}).whenTargetNamed("Employee2");
```

然后我们尝试获取`Employee`：

```ts
contarin.getNamed("Employee2");
contarin.getNamed("Employee1");
```

结果如下：

```
Employee second activation

Error: No matching bindings found for serviceIdentifier: Employee
 Employee - named: Employee1
```

从结果可以发现，在重复绑定的过程中，**相同语法的api后面的会覆盖前面的**。

> 注意：**相同语法**，也就是`.whenTargetNamed()`和`.whenTargetTagged()`都属于`when`语法，只有后调用的会生效。

对应代码的实现，是因为全程都是操作的同一个`Binding`实例，这个实例在`bind`源码中被实例化，并且被后续所有的绑定语法所使用，可以从上文的`class BindingToSyntax`、`public bind`和`class BindingWhenSyntax`源码中找到。下面只摘取部分关键代码：

```ts
// src/container/container.ts
public bind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T> {
    const binding = new Binding<T>(serviceIdentifier, scope);
    return new BindingToSyntax<T>(binding);
}

// src/syntax/binding_to_syntax.ts
class BindingToSyntax<T> implements interfaces.BindingToSyntax<T> {
    private _binding: interfaces.Binding<T>;
    public constructor(binding: interfaces.Binding<T>) {
        this._binding = binding;
    }
    public to() {
        return new BindingInWhenOnSyntax<T>(this._binding); // 内部直接调用 BindingWhenSyntax 中方法
    }
}

// src/syntax/binding_when_syntax.ts
class BindingWhenSyntax<T> implements interfaces.BindingWhenSyntax<T> {
    private _binding: interfaces.Binding<T>;
    public constructor(binding: interfaces.Binding<T>) {
        this._binding = binding;
    }

    public whenTargetNamed(name: string | number | symbol): interfaces.BindingOnSyntax<T> {
        this._binding.constraint = namedConstraint(name);
        return new BindingOnSyntax<T>(this._binding);
    }

    public whenTargetTagged(tag: string | number | symbol, value: unknown): interfaces.BindingOnSyntax<T> {
        this._binding.constraint = taggedConstraint(tag)(value);
        return new BindingOnSyntax<T>(this._binding);
    }
}
```

## 获取依赖

最后一步就是获取依赖了，因为之后这一步完成了之后，我们才能真正的拿到对应的实例，才能去进行操作，之前的操作都是为了这一步做铺垫。

在代码实现上，这里需要经历`计划(planning)`和`解析(resolution)`两个阶段，这里我们从`.get()`入手，看一下是如何获取对应实例的。

```ts
// src/container/container.ts
private _get<T>(getArgs: GetArgs<T>): interfaces.ContainerResolution<T> {
    const planAndResolveArgs: interfaces.NextArgs<T> = {
        ...getArgs, // 其中包含着依赖的唯一id，这里叫做：serviceIdentifier
        contextInterceptor: (context) => context,
        targetType: TargetTypeEnum.Variable
    }
    if (this._middleware) {
        // ...
    }

    return this._planAndResolve<T>()(planAndResolveArgs);
}
```

在`_planAndResolve`中先创建了一个计划，解析器将计划解析成对应的依赖并且返回。

```ts
// src/container/container.ts
private _planAndResolve<T = unknown>(): (args: interfaces.NextArgs<T>) => interfaces.ContainerResolution<T> {
    return (args: interfaces.NextArgs<T>) => {
        // create a plan
        let context = plan(
            this._metadataReader,
            this,
            args.isMultiInject,
            args.targetType,
            args.serviceIdentifier,
            args.key,
            args.value,
            args.avoidConstraints
        );
        // ...
        // resolve plan
        const result = resolve<T>(context);
        return result;
    };
}
```

### 计划阶段(Planning)

计划阶段中使用了`_metadataReader`，这个实例中的方法用于读取在依赖上绑定的元数据，也就是之前写的`@injectable()`和`@inject()`绑定的元数据，代码如下：

```ts
// src/planning/metadata_reader.ts
class MetadataReader implements interfaces.MetadataReader {

  public getConstructorMetadata(constructorFunc: NewableFunction): interfaces.ConstructorMetadata {

    // TypeScript compiler generated annotations
    const compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);

    // User generated constructor annotations
    const userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);

    return {
      compilerGeneratedMetadata,
      userGeneratedMetadata: userGeneratedMetadata || {}
    };

  }

  public getPropertiesMetadata(constructorFunc: NewableFunction): interfaces.MetadataMap {
    // User generated properties annotations
    const userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
    return userGeneratedMetadata;
  }

}
```

每获取一个依赖，都需要创建一个`plan`，其中会创建一个`Request`，有一个`rootRequest`，如果遇到内部有其他依赖，会继续创建`childRequest`去解析内部的依赖。由此应该可以更好的理解`request`作用域的概念。

```ts
// src/planning/planner.ts
function plan(
  metadataReader: interfaces.MetadataReader,
  container: interfaces.Container,
  isMultiInject: boolean,
  targetType: interfaces.TargetType,
  serviceIdentifier: interfaces.ServiceIdentifier,
  key?: string | number | symbol,
  value?: unknown,
  avoidConstraints = false
): interfaces.Context {
    // ...
    _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
    return context;
}
```

```ts
// src/planning/planner.ts
function _createSubRequests(
  metadataReader: interfaces.MetadataReader,
  avoidConstraints: boolean,
  serviceIdentifier: interfaces.ServiceIdentifier,
  context: interfaces.Context,
  parentRequest: interfaces.Request | null,
  target: interfaces.Target
) {
    // ...
    if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);

        childRequest = new Request(
            serviceIdentifier,
            context,
            null, // 这里null表示根Request
            activeBindings,
            target
        );

        const thePlan = new Plan(context, childRequest);
        context.addPlan(thePlan);

    } else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
    }

    activeBindings.forEach((binding) => {

        let subChildRequest: interfaces.Request | null = null;

        if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        } else {
            if (binding.cache) {
                return;
            }
            subChildRequest = childRequest;
        }

        if (binding.type === BindingTypeEnum.Instance && binding.implementationType !== null) {
            // 这里会解析到内部依赖，如：Salary 和 Gender
            const dependencies = getDependencies(metadataReader, binding.implementationType);
            // ...
            dependencies.forEach((dependency: interfaces.Target) => {
                _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
        }
    });
}
```

整个解析过程和最终的结构大致如下：

![planning](../../../images/知识探索/前端/inversify/inversify%20源码分析/6.png)

### 解析阶段(Resolution)

上面的`planning`完成后，就到了`resolution`，解析阶段拿到计划阶段的结果，调用`resolve()`进行解析。

```ts
// src/resolution/resolver.ts
function resolve<T>(context: interfaces.Context): T | Promise<T> | (T | Promise<T>)[] {
  const _f = _resolveRequest<T>(context.plan.rootRequest.requestScope as interfaces.RequestScope);
  return _f(context.plan.rootRequest) as T | Promise<T> | (T | Promise<T>)[];
}
```

在解析逻辑中，会判断当前依赖绑定的类型（如：`.toConstantValue()`和`.toConstructor()`）进行不同的返回：

```ts
// src/resolution/resolver.ts
const _getResolvedFromBinding = <T = unknown>(
  requestScope: interfaces.RequestScope,
  request: interfaces.Request,
  binding: interfaces.Binding<T>,
): T | Promise<T> => {
  let result: T | Promise<T> | undefined;
  const childRequests = request.childRequests;
  // ...
  switch (binding.type) {
    case BindingTypeEnum.ConstantValue:
    case BindingTypeEnum.Function:
      result = binding.cache as T | Promise<T>;
      break;
    case BindingTypeEnum.Constructor:
      result = binding.implementationType as T;
      break;
    case BindingTypeEnum.Instance:
      result = resolveInstance<T>(
        binding,
        binding.implementationType as interfaces.Newable<T>,
        childRequests,
        _resolveRequest<T>(requestScope)
      );
      break;
    default:
      result = _resolveFactoryFromBinding(binding, request.parentContext);
  }
  return result as T | Promise<T>;
}
```

**postCoustruct**

之前提到的`@postCoustruct()`对应的方法就是在`resolveInstance()`被调用的，是在解析阶段返回具体的实例前被调用。

```ts
// src/resolution/instantiations.ts
function resolveInstance<T>(
  binding: interfaces.Binding<T>,
  constr: interfaces.Newable<T>,
  childRequests: interfaces.Request[],
  resolveRequest: interfaces.ResolveRequestHandler,
): T | Promise<T> {
  // ...
  // 这里的 result 是具体的到的实例
  const result = _createInstance(constr, childRequests, resolveRequest);

  // 在 _getInstanceAfterPostConstruct 方法中调用 @postCoustruct() 绑定方法后返回 result
  if (isPromise(result)) {
    return result.then((resolvedResult) => _getInstanceAfterPostConstruct(constr, resolvedResult));
  } else {
    return _getInstanceAfterPostConstruct(constr, result);
  }
}
```

> `_getInstanceAfterPostConstruct`代码实现比较简单，可以自行查看，也在`src/resolution/instantiations.ts`文件中。

**依赖注入**

最后需要关注的就是，inversify 是如何将依赖注入到对应实例和参数上的，具体实现就在`_createInstance()`方法中。在内部有分为两步：

1. 通过`childRequests`将所有依赖实例化，并保存在不同注入类型（属性和参数）的数组中。
2. 根据不同的类型，将对应的依赖通过不同的方法注入到实例中。

```ts
// src/resolution/instantiations.ts
function _createInstance<T>(
  constr: interfaces.Newable<T>,
  childRequests: interfaces.Request[],
  resolveRequest: interfaces.ResolveRequestHandler,
): T | Promise<T> {
    let result: T | Promise<T>;
    // 获取依赖
    const resolved = _resolveRequests(childRequests, resolveRequest)
    const createInstanceWithInjectionsArg: CreateInstanceWithInjectionArg<T> = { ...resolved, constr }
    // ...
    // 依赖注入
    result = createInstanceWithInjections(createInstanceWithInjectionsArg)

    return result;
}
```

```ts
// src/resolution/instantiations.ts
function _resolveRequests(
  childRequests: interfaces.Request[],
  resolveRequest: interfaces.ResolveRequestHandler
): ResolvedRequests {
  return childRequests.reduce<ResolvedRequests>((resolvedRequests, childRequest) => {
    const injection = resolveRequest(childRequest)
    const targetType = childRequest.target.type
    if (targetType === TargetTypeEnum.ConstructorArgument) {
      resolvedRequests.constructorInjections.push(injection)
    } else {
      resolvedRequests.propertyRequests.push(childRequest)
      resolvedRequests.propertyInjections.push(injection)
    }
    if (!resolvedRequests.isAsync) {
      resolvedRequests.isAsync = isPromiseOrContainsPromise(injection);
    }
    return resolvedRequests
  }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false })
}
```

```ts
// src/resolution/instantiations.ts
function createInstanceWithInjections<T>(
  args: CreateInstanceWithInjectionArg<T>
): T {
  const instance = new args.constr(...args.constructorInjections as never[]);
  args.propertyRequests.forEach((r: interfaces.Request, index: number) => {
    const property = r.target.identifier;
    const injection = args.propertyInjections[index];
    (instance as Record<string | symbol, unknown>)[property] = injection;
  });
  return instance
}
```

整个流程图大致如下：

![resolution](../../../images/知识探索/前端/inversify/inversify%20源码分析/7.png)

> 在`5.x`版本中，实现的方式略有不同，部分代码如下：
> ![create instance in 5.x](../../../images/知识探索/前端/inversify/inversify%20源码分析/8.png)

## 中间件(Middleware)

官方文档对中间件描述如下：

> If we have configured some Middleware it will be executed at some point before or after the planning, resolution and activation phases. —— [Middleware](https://github.com/inversify/InversifyJS/blob/715a3f996e69d85b24487dd74758cb79fb5c5273/wiki/middleware.md#middleware)

中间件可以在这3个阶段的前后做一些事情，这里的3个阶段是一个整体，不能在中间调用中间件，也就是如果原本流程是`A -> B`，那么中间件的逻辑只能添加到`A`前或者`B`后，如：`middleware -> A -> B `和`A -> B -> middleware`，但`A -> middleware -> B`是不行的。

使用`applyMiddleware()`方法注册中间件，注册和使用代码如下：

```ts
// src/container/container.ts
public applyMiddleware(...middlewares: interfaces.Middleware[]): void {
    const initial: interfaces.Next = (this._middleware) ? this._middleware : this._planAndResolve();
    this._middleware = middlewares.reduce(
      (prev, curr) => curr(prev),
      initial);
}
// ...
private _get<T>(getArgs: GetArgs<T>): interfaces.ContainerResolution<T> {
    // ...
    if (this._middleware) {
        const middlewareResult = this._middleware(planAndResolveArgs);
        // ...
        return middlewareResult;
    }

    return this._planAndResolve<T>()(planAndResolveArgs);
}
```

## Activation

会在解析阶段被执行（参考开头的各个阶段的关系图），代码如下：

```ts
// src/resoluton/resolver.ts
const _bindingActivation = <T>(context: interfaces.Context, binding: interfaces.Binding<T>, previousResult: T): T | Promise<T> => {
  let result: T | Promise<T>;

  // use activation handler if available
  if (typeof binding.onActivation === "function") {
    result = binding.onActivation(context, previousResult);
  } else {
    result = previousResult;
  }

  return result;
}
```

`onActivation`来自于前面提到过的`.onActivation()`方法：

```ts
// src/syntax/binding_on_syntax.tx
class BindingOnSyntax<T> implements interfaces.BindingOnSyntax<T> {

  private _binding: interfaces.Binding<T>;

  public constructor(binding: interfaces.Binding<T>) {
    this._binding = binding;
  }

  public onActivation(handler: interfaces.BindingActivation<T>): interfaces.BindingWhenSyntax<T> {
    this._binding.onActivation = handler;
    return new BindingWhenSyntax<T>(this._binding);
  }

  public onDeactivation(handler: interfaces.BindingDeactivation<T>): interfaces.BindingWhenSyntax<T> {
    this._binding.onDeactivation = handler;
    return new BindingWhenSyntax<T>(this._binding);
  }

}
```

## 其他

### Context

在使用和源码中发现有的地方使用了`context`，下面是具体的代码实现，其中可以获取到当前的容器实例、plan实例和当前正在进行的request，可以让我们注册的回调函数中进行更多样和灵活的操作。

```ts
// src/planning/context.ts
class Context implements interfaces.Context {

  public id: number;
  public container: interfaces.Container;
  public plan!: interfaces.Plan;
  public currentRequest!: interfaces.Request;

  public constructor(
    container: interfaces.Container) {
    this.id = id();
    this.container = container;
  }

  public addPlan(plan: interfaces.Plan) {
    this.plan = plan;
  }

  public setCurrentRequest(currentRequest: interfaces.Request) {
    this.currentRequest = currentRequest;
  }

}
```

### 作用域

### toService

```ts
// src/syntax/binding_to_syntax.ts
class BindingToSyntax<T> implements interfaces.BindingToSyntax<T> {
    // ...
    public toService(service: string | symbol | interfaces.Newable<T> | interfaces.Abstract<T>): void {
        this.toDynamicValue(
            (context) => context.container.get<T>(service)
        );
    }
}
```

## 小结

inversify 有5个阶段，其中3个必须和2个可选，介绍了其中运行情况和包含关系。由一个小例子开始，引出`Annotation`的实现，接着是`Planning`和`Resolution`，从源码的角度解释了整个 inversify 流程的实现。后面对2个可选阶段，`Middleware`和`Activation`的源码也进行了分析。当然，这并不是一个100%的源码分析，看完这些应该对后续阅读源码有所帮助，对 inversify 的实现有个大概的认识，在更深入的学习过程中针对不同的细节，可以再详细学习。