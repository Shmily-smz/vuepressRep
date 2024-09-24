import {defineConfig} from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'

export default defineConfig({
  input: './src/index.ts',
  output: {
    file: './dist/index.mjs',
    format: 'esm'
  },
  plugins: [
    cjs(),
    typescript()
  ]
})