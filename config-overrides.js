// config-overrides.js文件内容：
const path = require('path')
const { override, addPostcssPlugins, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')]),
  addWebpackAlias({
    src: path.resolve(__dirname, 'src'),
    '@': path.resolve(__dirname, 'src'),
  }),
)
