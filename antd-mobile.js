const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('antd-mobile', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@brand-primary": '#0A54FF', // 定义 antd-mobile 的主题色
    },
  }),
)
