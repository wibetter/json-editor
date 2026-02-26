'use strict';
const path = require('path');
// 统一路径解析
function resolve(dir) {
  return path.resolve(__dirname, dir);
}

// 包括生产和开发的环境配置信息
module.exports = {
  settings: {
    enableESLint: false, // 调试模式是否开启ESLint，默认开启ESLint检测代码格式
    enableESLintFix: false, // 是否自动修正代码格式，默认不自动修正
    enableStyleLint: false, // 是否开启StyleLint，默认开启ESLint检测代码格式
    enableStyleLintFix: false // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    resolve: {
      extensions: ['.js', '.jsx', '.vue', '.json'], // 用于配置webpack在尝试过程中用到的后缀列表
    },
    // createDeclaration: true, // 打包时是否创建ts声明文件
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    externals: [],
    projectDir: ['.'],
    plugins: [], // 用于配置自定义plugins
    template: resolve('./index.html'), // 默认html模板
  },
  dev: {
    entry: {
      index: './demo.jsx',
    },
    NODE_ENV: 'development',
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    productionSourceMap: false,
  },
  build: {
    entry: {
      index: './demo.jsx',
    },
    NODE_ENV: 'production',
    assetsRoot: resolve('./online-demo/7.0.0'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/json-editor/online-demo/7.0.0/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  }
};
