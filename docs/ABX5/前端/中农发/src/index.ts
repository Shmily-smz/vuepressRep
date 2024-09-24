import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import {reset} from 'kolorist'
import minimist from 'minimist'
import type {PromptObject, Answers,} from 'prompts'
import prompts from 'prompts'
import ejs from 'ejs'
import {renderTemplate} from './utils/renderTemplate'
import renderEslint from './utils/renderEsLint'
import {preOrderDirectoryTraverse} from './utils/directoryTraverse'
import {deepMergeDep} from './utils/deepMerge'
import {sortDependencies} from './utils/sortDependencies'

const argv = minimist(process.argv.slice(2), {string: '_'})
const cwd = process.cwd()

type ProjectAnswers = Answers<'projectName' | 'template' | 'typescript' | 'jsx' | 'vueRouter' | 'pinia' | 'next'>

// cli 路径 ：相对于 dist 来说的
const __cliDirname = path.resolve(fileURLToPath(import.meta.url), '../..')

// 工作空间名、工作空间目录
let workspaceName: string, workspace:string;
// 创建的工程数量、所有工程
let projectNum = 0, projects: ProjectAnswers[] = [];


// 创建工程信息收集
async function createProject() {
  projectNum++
  const defaultProjectName = `znf-project-${projectNum}`

  let result: Answers<'projectName' | 'template' | 'typescript' | 'jsx' | 'vueRouter' | 'pinia' | 'next'>
  let questions: PromptObject[] = [
    {
      type: 'text',
      name: 'projectName',
      message: 'Project Name: ',
      initial: defaultProjectName,
      // 格式化输入
      format(val, values) {
        let resultValue = formatTargetDir(val)
        return resultValue
      }
    },
    {
      type: "select",
      name: 'template',
      message: "Pick a template",
      choices: [
        { title: 'web-micro', description: 'Create a macro application', value: 'web-micro' }
      ]
    },
    {
      type: 'toggle',
      name: 'typescript',
      message: 'Add TypeScript?',
      initial: false,
      active: 'No',
      inactive: 'Yes',
      // 状态与样式切换了，值要取反
      format(val) {
        return !val
      }
    },
    {
      type: 'toggle',
      name: 'jsx',
      message: 'Add JSX Support?',
      initial: false,
      active: 'No',
      inactive: 'Yes',
      // 状态与样式切换了，值要取反
      format(val) {
        return !val
      }
    },
    {
      type: 'toggle',
      name: 'vueRouter',
      message: 'Add Vue Router for Single Page Application development?',
      initial: false,
      active: 'No',
      inactive: 'Yes',
      // 状态与样式切换了，值要取反
      format(val) {
        return !val
      }
    },
    {
      type: 'toggle',
      name: 'pinia',
      message: 'Add Pinia for state management?',
      initial: false,
      active: 'No',
      inactive: 'Yes',
      // 状态与样式切换了，值要取反
      format(val) {
        return !val
      }
    },
    {
      type: 'toggle',
      name: 'next',
      message: 'Whether to continue to create the project?',
      initial: false,
      active: 'No',
      inactive: 'Yes',
      // 状态与样式切换了，值要取反
      format(val) {
        return !val
      }
    }
  ]

  result = await prompts(questions,)
  // 添加到工程队列中
  projects.push(result)

  return result
}



let renderCliToWorkspace = (templateName: string) => {
  let templateDir = path.join(__cliDirname, templateName)
  renderTemplate(templateDir, workspace, [], workspace)
}

// workspace 工作空间
async function createWorkspace() {
  let result = await prompts({
    type: 'text',
    name: 'workspaceName',
    message: 'Select Workspace: ',
    initial: 'workspace'
  })
  workspaceName = result.workspaceName
  workspace = path.join(cwd, workspaceName)
  // 工作空间
  if(!fs.existsSync(workspace)) {
    fs.mkdirSync(workspace)
  }
  // base下的模板拷贝到workspace下
  renderCliToWorkspace('workspace/base')
  return workspace
}

// 生成工程
async function genProject(callback: () => Promise<any>) {
  const genProjectCallback =async (project: ProjectAnswers) => {
    const {projectName, template, typescript, pinia, vueRouter, jsx} = project

    // 工程根路径
    let root = path.join(workspace, projectName)

    if(!fs.existsSync(root)) {
      fs.mkdirSync(root)
    }

    // 根路径 -> 根据选择的模版类型确定
    let templateRoot = getTemplateDir(template)

    let callbacks: Function[] = []

    let render = (templateName: string) => {
      let templateDir = path.join(templateRoot, templateName)
      renderTemplate(templateDir, root, callbacks, workspace)
    }

    render('base')

    if(pinia) {
      render('config/pinia')
    }

    if(jsx) {
      render('config/jsx')
    }

    if(vueRouter) {
      render('config/router')
    }

    if(typescript) {
      render('config/typescript')

      // project base
      render('tsconfig/base')
    }


    /**
     * eslint 与 Prettier 默认
     */

    // render('eslint')


    const codeTemplate =
      (typescript ? 'typescript-' : '') +
      (vueRouter ? 'router' : 'default')

    render(`code/${codeTemplate}`)

    if(vueRouter && pinia) {
      render('entry/router-and-pinia')
    } else if(vueRouter) {
      render('entry/router')
    } else if(pinia) {
      render('entry/pinia')
    } else {
      render('entry/default')
    }


    if(typescript) {
      // 生成的模版文件后缀转换 -> .js 文件转换为 .ts
      preOrderDirectoryTraverse(root, () => {}, (filepath) => {
        if(path.extname(filepath) === '.js') {
          let wrapperPathTs = filepath.replace(/\.js$/, '.ts')
          if(fs.existsSync(wrapperPathTs)) {
            fs.unlinkSync(filepath)
          } else {
            fs.renameSync(filepath, wrapperPathTs)
          }
        }
      })
    }

    // 处理 .ejs 渲染模版
    let dataStore:{[key in string]: any} = {
      origin: {
        projectName
      }
    }
    for(let cb of callbacks) {
      await cb(dataStore)
    }

    // 前置处理所有模板中的文件
    preOrderDirectoryTraverse(root, () => {}, (filepath) => {
      if(/\.ejs$/.test(filepath)) {
        let dest = filepath.replace(/\.ejs$/, '')  // .ejs 后缀移除
        let data = Object.assign({}, dataStore[dest] || {}, dataStore.origin)
        // 获取模版中的数据
        let content = ejs.render(fs.readFileSync(filepath, {encoding: 'utf-8'}), data)
        // 删除旧的模板
        fs.unlinkSync(filepath)

        let filename = path.basename(dest)
        if(filename === 'package.json' && fs.existsSync(dest)) {
          let prev = JSON.parse(fs.readFileSync(dest, {encoding: 'utf-8'}))
          let newPackage = sortDependencies(deepMergeDep(prev, JSON.parse(JSON.stringify(content))))
          fs.writeFileSync(dest, JSON.stringify(newPackage, null, 2)+'\n', {encoding: 'utf-8'})
          return
        }
        // 重写模版
        fs.writeFileSync(dest, content, {encoding: 'utf-8'})
      }
    })

    return
  }

  // 一个工程一个工程的创建
  let promises = Promise.resolve()
  for(let i = 0; i < projects.length; i++) {
    let project = projects[i]
    promises = promises.then(() => {
      return genProjectCallback(project)
    }).finally(() => {
      if(i + 1 === projectNum) {
        callback()
      }
    })
  }
}

async function init() {
  workspace = workspace || await createWorkspace()
  let result = await createProject()
  while(result.next) {
    result = await createProject()
  }
  // 所有工程结束回调
  let callback: () => Promise<any> = async () => {
    let projectTsNames = projects.filter(item => item.typescript).map(item => item.projectName)
    let projectNames = projects.map(item => item.projectName)
    // 如果存在 ts 选项的工程，则需要将 workspace/tsconfig 拷贝到 workspace 工程下
    if(projectTsNames?.length) {
      renderCliToWorkspace('workspace/tsconfig')
    }
    // Eslint
    renderEslint(workspace, {typescript: projectTsNames && true})

    fs.readdirSync(workspace).forEach(filename => {
      // 整理外层的 .ejs 模板文件 : 主要针对 tsconfig.json
      if(/\.ejs$/.test(filename)) {
        let sourceEjsPath = path.join(workspace, filename)
        let dest = sourceEjsPath.replace(/\.ejs$/, '')
        let payload = {
          projectNames,
          projectTsNames,
        }
        let content = ejs.render(fs.readFileSync(sourceEjsPath, {encoding: 'utf-8'}), payload)
        
        fs.writeFileSync(dest, content, 'utf-8')
        fs.unlinkSync(sourceEjsPath)
      }
    })
    // 合并所有工程内的 package.json 代码
    let workspacePkgPath = path.join(workspace, 'package.json')
    let workspacePkg = JSON.parse(fs.readFileSync(workspacePkgPath, 'utf-8'))
    projectNames.forEach(pName => {
      let projectPkgJson = JSON.parse(fs.readFileSync(path.join(workspace, pName, 'package.json'), 'utf-8'))
      workspacePkg = deepMergeDep(workspacePkg, projectPkgJson)
    })
    let newPackage = sortDependencies(workspacePkg)
    fs.writeFileSync(workspacePkgPath, JSON.stringify(newPackage, null, 2)+'\n', {encoding: 'utf-8'})

    // 合并工程配置
    await mergeCliConfig(projectNames)
  }
  // 合并 cli.config.js
  let mergeCliConfig = async (projectNames: string[]) => {
    let config: {[key in string]: any} = {
      projects: []
    }
    for(let i = 0; i < projectNames.length; i++) {
      let name = projectNames[i],
        projectPath = path.join(workspace, name),
        cliConfigPath = path.join(projectPath, 'cli.config.mjs');
      if(!fs.existsSync(cliConfigPath)){
        continue
      }
      const cliConfig = (await import(pathToFileURL(cliConfigPath).toString())).default;
      {
        (config.projects?.push(name)) || (config.projects = [name]);
        config[name] = cliConfig;
      }
      fs.unlinkSync(cliConfigPath)
    }
    let data = `
      export default ${JSON.stringify(config, null, 2)+'\n'}
    `
    fs.writeFileSync(path.join(workspace, 'cli.config.mjs'), data + '\n', 'utf-8')
  }
  genProject(callback)
}


function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, '')
}

const getTemplateDir = function getTemplateDir(templateName: string) {
  return path.resolve(__cliDirname, `template-${templateName}`)
}

init().catch(error => {
  console.error(error)
})