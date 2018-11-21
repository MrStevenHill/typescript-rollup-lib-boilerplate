import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json'

export default {
  input: 'lib/main.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    resolve({
      jsnext: true,
    }),
    typescript({
      typescript: require("typescript")
    }),
    peerDepsExternal()
  ]
}
