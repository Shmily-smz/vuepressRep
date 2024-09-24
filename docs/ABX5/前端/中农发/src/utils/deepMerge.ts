import {depTypes} from './depTypes'

type MergeOption = {[key in string]: any}

interface Merge {
  (o1: MergeOption, o2: MergeOption): MergeOption
}

const isObject = (value: any) => typeof value === 'object'

// 合并的目标是：保留原有的、加入新值、冲突的使用新值


export let deepMerge: Merge = function merge(target, obj) {
  for(let key of Object.keys(obj)) {
    let oldValue = target[key]
    let newValue = obj[key]

    if(Array.isArray(oldValue) && Array.isArray(newValue)) {
      target[key] = Array.from(new Set([...oldValue, ...newValue] ))
    } else if(isObject(oldValue) && isObject(newValue)) {
      target[key] = deepMerge(oldValue, newValue)
    }else {
      target[key] = newValue || oldValue
    }
  }
  return target
}

export let deepMergeDep: Merge = function deepMergeDep(target, obj) {
  let result = {...target}
  let wrapperObj: {[key in string]: any} = {}
  Object.keys(obj).filter(key => depTypes.includes(key)).forEach(key => {
    wrapperObj[key] = obj[key]
  })
  return deepMerge(result, wrapperObj)
}

