import {depTypes} from './depTypes'

export function sortDependencies(packageJson: {[key in string]: any}) {
  let result = {...packageJson}
  for(let type of depTypes) {
    if(result[type]) {
      let keys = Object.keys(result[type]).sort()
      let temp: {[key in string]: any} = {}

      // 按照顺序一个一个添加
      keys.forEach(key => {
        temp[key] = result[type][key]
      })

      result[type] = temp
    }
  }
  return result
}