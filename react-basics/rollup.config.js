import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'source/index.jsx',
  dest: 'build/bundle.js',
  plugins: [
    postcss({
      plugins: [
        cssnano({ discardComments: { removeAll: true }, discardUnused: false })
      ]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    nodeResolve({
      jsnext: true
    }),
    commonJS({
      namedExports: {
        'node_modules/react/react.js': ['Component'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['react'],
      plugins: ['external-helpers']
    })
  ],
  format: 'es',
  sourceMap: true
};
