# ts 声明文件模板

## 平台声明文件

```typescript
import { FocusManager } from '@agree/ab-manager-focus2'
import Vue from "vue"
import { DM, SDM } from './Module'

declare module "vue/types/vue" {
  interface Vue
  {
    [propname: string]: any
    //平台级
    focusManager: typeof FocusManager
    _activeFocus(arg?: object): void
    $aui: any
    /**
     * @description: 发送消息
     * @type:
     * @param {*}
     * @return {*}
     */
    $sendMessage(tranPath: string, data: any, isCache?: boolean): Promise<{ result: string, msg: string }>

    /**
     * @description:获取交易入参
     * @param {*}
     * @return {*}
     */
    $getTradeImportVar(): any
    /**
     * @description: 设置交易出参
     * @param {any} exportVar 交易出参对象
     * @return {*}
     */
    $putTradeExportVar(exportVar: any): void
    /**
     * @description: 获取页面入参
     * @param {*}
     * @return {*}
     */
    $getPanelImportVar(): any
    /**
     * @description: 设置页面出参
     * @param {*}
     * @return {*}
     */
    $putPanelExportVar(exportVar: any): void
    /**
     * @description: 获取当前交易打开targetId
     * @return {*}
     */
    $getTargetId(): any

    /**
     * @description: 获取sdm对象
     * @param {*}
     * @return {*}
     */
    $getSdmObject(key: string): any
    /**
     * @description: 获取dm对象
     * @param {*}
     * @return {*}
     */
    $getDmObject(): any
    /**
     * @description: 交易数据区
     * @param {*}
     * @return {*}
     */
    dm: DM
    /**
     * @description: 共享数据
     * @type:
     * @param {string} name  共享数据分区名
     * @return {*}
     */
    sdm: SDM
    /**
     * @description: 持久化数据
     * @type:
     * @param
     * @return {*}
     */
    localData: any
    /**
     * @description: 重置sdm的值
     * @param {*}
     * @return {*}
     */
    $resetSDM(key: string, data?: any): any
    /**
     * @description: 删除localData
     * @param {*}
     * @return {*}
     */
    $removeLocalData(key: string): Promise<any>
    /**
     * @description: 同步打开交易
     * @type:
     * @param {string} url 交易vue路径,例'@/module/trade/test/test01.vue'
     * @param {string} title 交易签页名称
     * @param {string} targetId  交易打开位置 customerPanel：对客视图 internalPanel：对内视图 window：弹窗
     * @param {any} importVar 交易入参
     * @param {any} exportVar 交易出参
     * @return {*}
     */
    $syncOpenTrade(url: string, title: string, targetId: string, importVar: any, exportVar: any, options: any): any
    /**
     * @description: 异步打开交易
     * @type:
     * @param {string} url 交易vue路径,例'@/module/trade/test/test01.vue'
     * @param {string} title 交易签页名称
     * @param {string} targetId  交易打开位置 customerPanel：对客视图 internalPanel：对内视图 window：弹窗
     * @param {any} importVar 交易入参
     * @return {*}
     */
    $asyncOpenTrade(url: string, title: string, targetId: string, importVar: any, options: any): any

    /**
     * @description: 异步打开交易
     * @type:
     * @param {string} url 交易vue路径,例'@/module/trade/test/test01.vue'
     * @param {string} title 交易签页名称
     * @param {string} targetId 交易打开位置 customerPanel：对客视图 internalPanel：对内视图 window：弹窗
     * @param {any} importVar 交易入参
     * @param {any} options 画面参数
     * @return {*}
     */
    $openPanel(url: string, title: string, targetId: string, importVar?: any, options?: any): any

    /**
     * @description: 退出交易
     * @type:
     * @param {*}
     * @return {*}
     */
    $exitTrade(): any
    /**
     * @description: 关闭画面
     * @type:
     * @param {*}
     * @return {*}
     */
    $exitPanel(): any
    /**
     * @description: 获取一个traceId
     * @type:
     * @param {*}
     * @return {*}
     */
    $getTraceId(): string
    /**
     * @description:
     * @type:
     * @param {*}
     * @return {*}
     */
    $getDomainPanel(): any
    /**
     * @description debug方式输出日志
     * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
     * @throws 无
     * @returns
     */
    _debug(...message: any[]): void;

    /**
    * @description info方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    _info(...message: any[]): void;

    /**
    * @description warn方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    _warn(...message: any[]): void;

    /**
    * @description error方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    _error(...message: any[]): void;

    /**
    * @description 获取交易数据
    * @param key
    * @throws 无
    * @returns {*}
    */
    _getModel(key: string): any
    /**
    * @description 设置交易数据
    * @param key val
    * @throws 无
    * @returns
    */
    _setModel(key: string, val: any): void
    /**
    * @description 获取全局数据
    * @param key
    * @throws 无
    * @returns {*}
    */
    _getGlobalModel(key: string): any
    /**
    * @description 设置全局数据
    * @param key val
    * @throws 无
    * @returns
    */
    _setGlobalModel(key: string, val: any): void
  }
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue>
  {
    /**
     * @description: 数据字典声明选项
     */
    metadata?: METADATA,
    /**
     * @description: 组件标签
     */
    _componentTag?: string
  }
}
interface METADATA
{
  caption?: string,
  globalArgs: { [propname: string]: any }
  inArgs?: { [propname: string]: any },
  outArgs?: { [propname: string]: any },
  outlets?: { [propname: string]: any }
}

declare global
{
  interface Window
  {
    abx: {
      [propname: string]: any,
      Store: any,
      i18n: any,
      registry: {
        [propname: string]: any,
        frameRegistry: Object,
        tradeRegistry: {
          tradesQueue: Array<any>,
          frameQueues: Array<any>,
          destroyQueues: Array<any>,
        },
        requiredResource: Object,
        globalResource: Object,
        preResource: Object,
        modules: {
          [propname: string]: any,
          trade: {
            [propname: string]: any,
            __type__: string,
            deps: Object,
          }
        },
        externals: {
          [propname: string]: any,
          __type__: string,
        },
        resolver: Object,
        rejecter: Object,
        mountedModule: Array<any>,
        loadedModule: Array<any>,
        initializedProject: Array<any>,
        notNeedCacheModule: Array<any>
      }
      hooks: any,
      externalHooks: any,
      logModules: Array<any>,
      interceptors: Object,
      createTrade: Function,
      createPanel: Function,
      createNoFlowTradeAsync: Function,
      createMultiTradeAsync: Function,
      getTrade: Function,
      destroyTrade: Function,
      runtimeInitialize: Function,
      setGlobalData: Function,
      getGlobalData: Function,
      setTradeData: Function,
      getTradeData: Function,
      loadAssets: Function,
      convertGlobalData: Function,
      pageMixins: Function,
      destroyAdjust: Function,
      getFileContentAsync: Function,
      interceptorsRequest: Function,
      interceptorsResponse: Function,
      createFrame: Function,
      registryEvent: Function,
      removeEvent: Function,
      registryEventCallback: Function,
      removeEventCallback: Function,
      dispatchCustomEvent: Function,
      eventCallbackQueue: Object,
      eventListenerQueue: Array<any>,
      eventCallback: Function,
      openFrame: Function,
      createSubTradeAsync: Function,
      createSubTrade: Function,
      destroySubTrade: Function,
      subTradeQueue: Array<any>,
      dialogQueue: Array<any>,
      handleVue: Function,
      flowSocket: Object,
      platformError: {
        [propname: string]: any,
        errorExecLogic: Object,
        setErrorExecLogic: Function,
        getErrorExecLogic: Function,
      },
      getModuleEntryPath: Function,
      mode: String,
      publicData: Object,
      abxLoad: Function,
      requirejs: Function,
      getResource: Function,
      loadResource: Function,
      abxInstall: Function,
      abxImport: Function,
      getLoader: Function,
      register: Function,
      projectEnvRegister: Function,
      getArgsType: Function,
      postAsync: Function,
      getAsync: Function,
      getJsonDataAsync: Function,
      abxDynImport: Function,
      mountedModule: Function,
      resolveResourcePath: Function,
      mixins: any,
      defaultMixins: any,
      handleSocketMessage: Function,
      getTradeModuleAsync: Function,
      manifest: {
        [propname: string]: any,
        dynParseRecords: Object,
        dependencies: Object,
      },
      devMode: any,
      prodMode: any,
      getAlias: Function,
      getModuleName: Function
    }
    loadPage: Function,
    loadPageData: Function,
    x5: {
      [propname: string]: any,
      launcher: {
        [propname: string]: any,
        registerLauncherFn: Function,
        launcherFn: Array<any>
      },
      getTradeModuleAsync: Function
    },
    utils: {
      [propname: string]: any,
      getAbsolutePath: Function,
      isRelativePath: Function,
    },
    require: Function,
    undefAll: Function,
  }
}
```

## 工程 ts 声明文件模板

``` typescript
import Vue from "vue"
import {
  flowInterfaces, ResultInfo, AppInfo, DeviceInfo, LegalInfo
} from 'agree-public-client'

// 由开发人员自定义工程内的 info 接口实例
// import { CommunResult } from "@Bank/pages/common/entities/commun-result"
// import { UserInfo } from "@Bank/pages/common/entities/user-info"
// import { BranchInfo } from '@Bank/pages/common/entities/branch-info'
// import { CustomerInfo, AgentInfo } from '@Bank/pages/common/entities/customer-info'
// import { QueueInfo } from "@Bank/pages/common/entities/queue-info"
// import { MediaInfo } from '@Bank/pages/common/entities/media-info'
// import { CurrentTrade } from "@Bank/pages/common/entities/current-trade"
// import { AuthInfo } from "@Bank/pages/common/entities/auth-info"
// import { CheckInfo } from "@Bank/pages/common/entities/check-info"
// import { TradeRuleCodeInfo } from "@Bank/pages/common/entities/trade-rulecode-info"
// import { CstCheckInfo, AgentCheckInfo } from "@Bank/pages/common/entities/cst-check-info"
// import { DgCustomerInfo } from "@Bank/pages/common/entities/dg-customer-info"
// import { TradeInfo, TradeSerialInfo } from '@BankUtil/trade-info'
// import { DevGwqInfo } from '@Bank/pages/common/entities/dev-gwq-info'
// import { EsbResult } from "@BankUtil/comm-utils"
// import { UserHabit } from '@BankUtil/instance/instance'

type ShowType = "success" | "warning" | "info" | "error"

interface AlertParam {
  /**
  * @description: 消息类型，用于显示图标
  */
  type?: ShowType
  /**
  * @description: MessageBox 标题
  */
  title?: string
  /**
   * @description: MessageBox 是否显示右上角关闭按钮
   */
  showClose?: boolean
  /**
 * @description:是否可拖动（拖动触发在头部）
 */
  drag?: boolean
  /**
  * @description:确认按钮文字
  */
  confirmButtonText?: string
  /**
   * @description: 是否将 content 属性作为 HTML 片段处理
   */
  dangerouslyUseHTMLString?: boolean
  /**
   * @description: 是否可通过点击遮罩关闭 MessageBox
   */
  closeOnClickModal?: boolean
  /**
   * @description: 是否在 hashchange 时关闭 MessageBox
   */
  closeOnHashChange?: boolean
  /**
   * @description:是否可通过按下 ESC 键关闭 MessageBox
   */
  closeOnPressEscape?: boolean
}

/**
* @description: 轻提示以及侧边通知的参数
*/
interface MessageParam {
  customClass?: string
  /**
   * @description: 自定义图标的类名
   */
  iconClass?: string
  /**
   * @description:  是否显示关闭按钮
   */
  showClose?: boolean
  /**
   * @description: 是否将 content 属性作为 HTML 片段处理
   */
  dangerouslyUseHTMLString?: boolean
  /**
   * @description: 显示时间, 毫秒。设为 0 则不会自动关闭
   */
  duration?: number,
  /**
   * @description: 文字是否居中
   */
  center?: boolean
  /**
   * @description: 关闭时的回调函数
   */
  onClose?: object
  /**
   * @description: 距离窗口顶部的偏移量
   */
  offset?: number
}

interface LoadParam {
  /**
   * @description: 同 v-loading 指令中的 lock 修饰符
   */
  lock?: boolean,
  /**
   * @description: 显示在加载图标下方的加载文案
   */
  text?: string,
  /**
   * @description: 自定义加载图标类名
   */
  spinner?: string
  /**
   * @description: 遮罩背景色
   */
  background?: string
  /**
   * @description: Loading 需要覆盖的 DOM 节点
   */
  target?: HTMLElement | null | undefined
}

declare module "vue/types/vue" {
  interface Vue {
    debug(...message: any[]): void;

    /**
    * @description info方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    info(...message: any[]): void;

    /**
    * @description warn方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    warn(...message: any[]): void;

    /**
    * @description error方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    error(...message: any[]): void;

    /**
    * @description fatal方式输出日志
    * @param message 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)
    * @throws 无
    * @returns
    */
    fatal(...message: any[]): void;
    [propname: string]: any
    pushInfo(message: string, params?: AlertParam, ...i18nParam: (string | undefined)[]): Promise<any>
    /**
    * @description: 双按钮弹出确认框
    * @param {string} message
    * @param {any} confirmButtonText
    * @param {any} cancelButtonText
    * @param {array} param 弹窗参数
    * @param {array} i18nParam 国际化参数
    * @return {*}
    */
    pushConfirm(message: string, confirmButtonText?: string, cancelButtonText?: string, param?: AlertParam, ...i18nParam: any[]): Promise<any>

    /**
     * @description: 关闭弹窗提示
     * @param {Vue} trade vue对象
     * @param {Vue} target 弹窗容器
     * @return {*}
     */
    hideMsgBox(target?: any): any
    /**
     * @description: 消息弹出框
     * @param {ShowType} type 消息类型 "success"|"warning"|"info"|"error";
     * @param {string} message 提示信息
     * @param {MessageParm} param 提示消息参数
     * @param {array} i18nParam 国际化参数
     * @return {*}
     */
    showMessage(type: ShowType, message: string, param?: MessageParam, ...i18nParam: any[]): any
    /**
     * @description: 隐藏弹框
     * @param {string} message 轻提示实例
     * @return {*}
     */
    hideMessage(message?: any): any
    /**
     * 多按钮提示框
     * @param message 提示信息
     * @param btns 按钮
     */
    pushMutiBtnInfo(message: string, btns: string[]): Promise<number>
    /**
     * @description: 消息弹出框
     * @param {ShowType} type 消息类型 "success"|"warning"|"info"|"error";
     * @param {ShowType} title 标题
     * @param {string} message 提示信息
     * @param {MessageParm} param 提示消息参数
     * @param {array} i18nParam 国际化参数
     * @return {*}
     */
    showNotification(type: ShowType, title: string, message: string, param?: MessageParam, ...i18nParam: any[]): any

    /**
    * @description: 关闭侧边通知
    * @param {ShowType} notification 侧边通知实例
    * @return {*}
    */
    closeNotification(notification: any): any
    /**
    * @description: 展示loading框
    * @param {LoadParam} param loading参数
    * @return {*}
    */
    showLoading(param?: LoadParam): any
    /**
    * @description: 隐藏Loading框
    * @return {*}
    */
    hideLoading(loading?: any): any
    /**
    * @description: 无按钮提示框
    * @param {string} message
    * @return {*}
    */
    pushInfoWithoutButton(message: string): Promise<any>
    /**
    * @description: 服务请求
    * @param {string} serviceName 服务名称
    * @param {any} data 请求数据
    * @param {boolean} isShowError 是否展示错误信息
    * @param {boolean} isShowLoading 是否展示loading
    * @return {Promise<CommunResult<any>>}
    */
    communication(serviceName: string, data: any, isShowError?: boolean, isShowLoading?: boolean): Promise<any>
    /**
     * @description: esb服务请求
     * @param {any} sendData 发送报文体
     * @param {any} mapping 映射到报文体数据
     * @param {boolean} isAutoParseDm 映射到报文体数据
     * @param {boolean} isShowError 是否显示错误提示
     * @param {boolean} isShowLoading 是否显示loading
     */
    esbComm(sendData: any, mapping?: any, isAutoParseDm?: boolean, isShowError?: boolean, isShowLoading?: boolean): Promise<any>
    /**
    * @description: esb服务请求
    * @param {any} sendData 发送报文体
    * @param {string} consmServCd afa服务码
    * @param {string} consmSceneCd afa场景码
    * @param {boolean} isShowError 是否显示错误提示
    * @param {boolean} isShowLoading 是否显示loading
    */
    afaComm(sendData: any, consmServCd: string, consmSceneCd: string, isShowError?: boolean, isShowLoading?: boolean): Promise<any>
    /**
     * @description: 设置控件可用状态
     * @param {string} ref 控件ref值
     * @param {boolean} val true/false
     * @return {*}
     */
    setDisabled(ref: string, val: boolean): void
    /**
     * @description: 设置控件可见状态
     * @param {string} ref 控件ref值
     * @param {boolean} val true/false
     * @return {*}
     */
    setVisible(ref: string, val: boolean): void
    /**
    * @description: 设置控件只读状态
    * @param {string} ref 控件ref值
    * @param {boolean} val true/false
    * @return {*}
    */
    setReadonly(ref: string, val: boolean): void
    /**
    * @description: 设置控件必输状态
    * @param {string} ref 控件ref值
    * @param {boolean} val true/false
    * @return {*}
    */
    setRequisite(ref: string, val: boolean): void
    /**
     * @description: 批量设置设置控件可用状态
     * @param {string[]} refs 控件ref集合
     * @param {boolean | boolean[]} val
     * @return {*}
     */
    batchSetDisabled(refs: string[], val: boolean | boolean[]): void
    /**
     * @description: 批量设置设置控件可见状态
     * @param {string[]} refs 控件ref集合
     * @param {boolean | boolean[]} val
     * @return {*}
     */
    batchSetVisible(refs: string[], val: boolean | boolean[]): void
    /**
     * @description: 批量设置设置控件必输状态
     * @param {string[]} refs 控件ref集合
     * @param {boolean | boolean[]} val
     * @return {*}
     */
    batchSetRequisite(refs: string[], val: boolean | boolean[]): void
    /**
     * @description: 批量设置设置控件只读状态
     * @param {string[]} refs 控件ref集合
     * @param {boolean | boolean[]} val
     * @return {*}
     */
    batchSetReadonly(refs: string[], val: boolean | boolean[]): void
    /**
     * @description: 批量执行控件方法
     * @param {string[]} refs 控件ref集合
     * @param {string[]} methods 控件方法集合
     * @param {boolean[]} val 控件状态值集合
     * @return {*}
     */
    batchExecutionControlMethod(refs: string[], methods: string[], val: boolean[]): void
    /**
     * @description: 批量清空表达式 只适用于字符串类型
     * @param {string[]} exprs 表达式数组 ['dm.xx1','dm.xxx2','pp']
     * @return {*}
     */
    batchClearValue(exprs: string[]): void
    /**
     * @description: 移动焦点
     * @param {string} ref  焦点ref
     * @param {string} childRef?  子组件获取焦点ref
     * @return {*}
     */
    setFocus(ref: string, childRef?: string): void
    /**
     * @description: 设置贪婪焦点
     * @param {string} ref  焦点ref
     * @param {string} childRef?  子组件贪婪焦点ref
     * @return {*}
     */
    setGreedy(ref: string | string[], childRef?: string): void
    /**
     * @description: 判断运行环境
     * @param {string} true:柜面/新创/移动柜面柜面模式 false:移动柜面调试 pad
     * @return {*}
     */
    getEnvironment(): boolean
    /**
    * @description: 交易流程
    */
    Trade: flowInterfaces.Trade
    tradeInit(): void
    tradePreSubmit(): Promise<ResultInfo<any>>
    tradeComm(): Promise<ResultInfo<any>>
    tradeAfterPrint(): Promise<ResultInfo<any>>
    tradePreQuery(): Promise<ResultInfo<any>>
    getTradeQueryCondData(): any
    openSelectTableColExport(): any
    getPrintData(): any
    _getTradeData(): any
    batchGetInputData(): Array<any>
  }
  interface Element {
    style: any;
    cloneNode: any
    /**
     * @description: 设置悬浮提示
     * @type:
     */
    setPopover(popoverTitle: string, popoverContent: string): any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    /**
     * @description: 组件类型 项目级组件使用此选项 part:片段级组件(多输入域组件基于原子组件和fc组件封装) atom:原子组件(单输入域组件基于fc封装)
     */
    type?: 'part' | 'atom' | 'container',
  }
}

export interface SDM {
  [propname: string]: any
  AppInfo: AppInfo
  // BranchInfo: BranchInfo
  DeviceInfo: DeviceInfo
  LegalInfo: LegalInfo
  // UserInfo: UserInfo
  // QueueInfo: QueueInfo,
  // AgentInfo: AgentInfo,
  // CustomerInfo: CustomerInfo,
  // DgCustomerInfo: DgCustomerInfo,
  // MediaInfo: MediaInfo,
  // CurrentTrade: CurrentTrade,
  // TradeSerialInfo: TradeSerialInfo,
  // CstCheckInfo: CstCheckInfo,
  // AgentCheckInfo: AgentCheckInfo,
  // TransferCheckInfo: TransferCheckInfo,
  // OtherCheckInfo: OtherCheckInfo,
  // DevGwqInfo: DevGwqInfo,
  // UserHabit: UserHabit,
  // TradeInfo: TradeInfo
}

export interface DM {
  [propName: string]: any,
  __OpenType__: string,
  // __TradeInfo__: TradeInfo,
  // __TradeSerialInfo__: TradeSerialInfo,
  // __CheckInfo__: CheckInfo,
  // __AuthInfo__: AuthInfo,
  __ScreenShow__: any,
  __TaskInfo__: any,
  __PubDataMapping__: any,
  canSetSDM: boolean
}

```