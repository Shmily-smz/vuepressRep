import path from 'node:path'
import fs from 'node:fs'
import {pathToFileURL} from 'node:url'
import {sortDependencies} from './sortDependencies'
import {deepMerge} from './deepMerge'

interface renderTemplate {
  /**
   * @param src {string} cli工程下的模版路径
   * @param dest {string} 项目工程的路径
   * @param callbacks {Function} 用来整理动态数据, 最终会根据这些数据生成 cli.config.ts 
   */
  (src: string, dest: string, callbacks: Function[], workspace: string): void;
}

export let renderTemplate:renderTemplate = function renderTemplate(src, dest, callbacks, workspace) {
  let stats = fs.statSync(src)

  if(stats.isDirectory()) {
    let basename = path.basename(src)

    if(basename === 'node_modules') {
      return
    }
    // 深层次创建文件夹
    fs.mkdirSync(dest, {recursive: true})
    for(let file of fs.readdirSync(src)) {
      renderTemplate(path.join(src, file), path.join(dest, file), callbacks, workspace)
    }
    return
  }

  let filename = path.basename(src)

  // package.json 文件需要放到 workspace 下
  if(filename === 'package.json') {
    if(fs.existsSync(dest)) {
      // project
      // 如果工程下已经存在 package.json 文件了，则需要对 package.json 文件进行合并
      let prev = JSON.parse(fs.readFileSync(dest, {encoding: 'utf-8'}))
      let incomer = JSON.parse(fs.readFileSync(src, {encoding: 'utf-8'}))
      let newPackage = sortDependencies(deepMerge(prev, incomer))
      fs.writeFileSync(dest, JSON.stringify(newPackage, null, 2) + '\n')
      return
    }
  }

  // .gitignore 处理
  if(/^_/.test(filename)) {
    dest = path.resolve(path.dirname(dest), filename.replace(/^_?/, '.'))
  }

  if(/\.data\.mjs$/.test(filename)) {
    dest = dest.replace(/\.data\.mjs/, '')
    callbacks.push(async(dataStore: {[key in string]: any}) => {
      let getData = (await import(pathToFileURL(src).toString())).default
      // 上一个处理数据传递给下一个方法
      dataStore[dest] = getData({
        oldData: dataStore[dest] || {},
        origin: dataStore,
      })
    })
    return
  }

  // 创建文件
  fs.copyFileSync(src, dest)
}