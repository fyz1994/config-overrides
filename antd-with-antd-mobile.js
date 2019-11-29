const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  fixBabelImports('antd-mobile', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#0A54FF', // 定义 antd 的主题色
      "@brand-primary": '#0A54FF', // 定义 antd-mobile 的主题色
    },
  }),
)
