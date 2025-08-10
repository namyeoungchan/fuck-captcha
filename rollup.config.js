import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
  // ES Module build
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ outDir: 'dist/types' }),
      production && terser()
    ],
    external: ['react', 'react-dom']
  },
  
  // CommonJS build
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      production && terser()
    ],
    external: ['react', 'react-dom']
  },
  
  // UMD build (includes vanilla loader)
  {
    input: 'src/vanilla/loader.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'GameCaptchaLoader',
      sourcemap: true
    },
    plugins: [
      resolve(),
      commonjs(),
      production && terser()
    ]
  }
];
