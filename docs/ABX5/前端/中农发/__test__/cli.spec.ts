import {expect, describe, it} from 'vitest'
import {sortDependencies} from '../src/utils/sortDependencies'
import {deepMerge, deepMergeDep} from '../src/utils/deepMerge'

describe('单测', () => {
  let origin = {
    name: 'mal',
    "devDependencies": {
      "@types/inquirer": "^9.0.7",
      "@types/minimist": "^1.2.5",
      "@types/prompts": "^2.4.9",
      "ejs": "^3.1.9",
      "kolorist": "^1.8.0",
      "minimist": "^1.2.8",
      "prompts": "^2.4.2",
      "rollup": "^4.9.6",
      "rollup-plugin-typescript2": "^0.36.0",
      "typescript": "^5.3.3",
      "vitest": "^1.2.2"
    }
  }

  let pkg2 = {
    "dependencies": {
      "pinia": "^2.1.7",
      "vue": "^3.4.15"
    }
  }

  let pkg3 = {
    "dependencies": {
      "vue": "^3.4.15",
      "vue-router": "^4.2.5"
    },
    devDependencies: {
      'mal': "1.0.0"
    }
  }

  let pkg4 = {
    test: 'mal-test',
    "dependencies": {
      "vue": "^3.4.15",
      "vue-router": "^4.2.5"
    },
    devDependencies: {
      'mal': "1.0.0"
    }
  }

  it('单测一 测试 sort 排序：', () => {

    let targetObj = {
      name: 'mal',
      "devDependencies": {
        "typescript": "^5.3.3",
        "vitest": "^1.2.2",
        "minimist": "^1.2.8",
        "prompts": "^2.4.2",
        "ejs": "^3.1.9",
        "kolorist": "^1.8.0",
        "@types/inquirer": "^9.0.7",
        "@types/minimist": "^1.2.5",
        "@types/prompts": "^2.4.9",
        "rollup": "^4.9.6",
        "rollup-plugin-typescript2": "^0.36.0"
      }
    }
    let result = sortDependencies(targetObj)
    console.log('>>> ', result)
    expect(result).toEqual(origin)
  })


  it('单测二 测试 merge 合并 package.json：', () => {
    // let result = deepMerge(origin, pkg2)

    // let equalResult = {
    //   name: 'mal',
    //   dependencies: {
    //     "pinia": "^2.1.7",
    //     "vue": "^3.4.15",
    //   },
    //   "devDependencies": {
    //     "@types/inquirer": "^9.0.7",
    //     "@types/minimist": "^1.2.5",
    //     "@types/prompts": "^2.4.9",
    //     "ejs": "^3.1.9",
    //     "kolorist": "^1.8.0",
    //     "minimist": "^1.2.8",
    //     "prompts": "^2.4.2",
    //     "rollup": "^4.9.6",
    //     "rollup-plugin-typescript2": "^0.36.0",
    //     "typescript": "^5.3.3",
    //     "vitest": "^1.2.2",
    //   }
    // }

    // expect(result).toEqual(equalResult)


    // let result2 = deepMerge(origin, pkg3)
    // let equalResult2 = {
    //   name: 'mal',
    //   dependencies: {
    //     "vue": "^3.4.15",
    //     "vue-router": "^4.2.5"
    //   },
    //   "devDependencies": {
    //     "@types/inquirer": "^9.0.7",
    //     "@types/minimist": "^1.2.5",
    //     "@types/prompts": "^2.4.9",
    //     "ejs": "^3.1.9",
    //     "kolorist": "^1.8.0",
    //     "minimist": "^1.2.8",
    //     "prompts": "^2.4.2",
    //     "rollup": "^4.9.6",
    //     "rollup-plugin-typescript2": "^0.36.0",
    //     "typescript": "^5.3.3",
    //     "vitest": "^1.2.2",
    //     'mal': "1.0.0"
    //   }
    // }
    // expect(result2).toEqual(equalResult2)

    let p1 = {
      devDependencies: {
        "@types/inquirer": "^9.0.7"
      }
    }
    let p2 = {
      dependencies: {
        "vue": "^3.4.15",
        "vue-router": "^4.2.5"
      },
      devDependencies: {
        "@types/minimist": "^1.2.5",
        "@types/inquirer": "^9.0.7"
      }
    }
    let p3 = {
      scripts: {
        format: 'premiter'
      }
    }

    let result = sortDependencies(deepMerge(deepMerge(p1, p2), p3))
    console.log('result : ', result)
  })  

  it('单测三 测试 merge dep 合并, 仅合并 dep : ', () => {
    let equalResult = {
      "dependencies": {
        "pinia": "^2.1.7",
        "vue": "^3.4.15",
        "vue-router": "^4.2.5"
      },
      devDependencies: {
        'mal': "1.0.0"
      }
    }

    expect(deepMergeDep(pkg2, pkg4)).toEqual(equalResult)
  })
})