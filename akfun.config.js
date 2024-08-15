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
      extensions: ['.js', '.jsx', '.vue', 'json'], // 用于配置webpack在尝试过程中用到的后缀列表
      alias: {
        '@': resolve('src'),
        $components: resolve('src/components'),
        $pages: resolve('src/pages'),
        $plugins: resolve('src/plugins'),
        $utils: resolve('src/utils'),
        $assets: resolve('src/assets'),
        $public: resolve('public'),
        $router: resolve('src/router'),
        $store: resolve('src/store'),
        $data: resolve('src/data'),
        $config: resolve('src/config'),
        $mixins: resolve('src/mixins'),
      },
    },
    // createDeclaration: true, // 打包时是否创建ts声明文件
    ignoreNodeModules: false, // 打包时是否忽略 node_modules
    allowList: [], // ignoreNodeModules为true时生效
    externals: [],
    projectDir: ['src'],
    plugins: [], // 用于配置自定义plugins
    template: resolve('./src/index.html'), // 默认html模板
    // sassResources中的sass文件会自动注入每一个sass文件中
    sassResources: [
      resolve('./src/assets/css/common.scss'),
      resolve('./src/assets/css/mixin.scss')
    ],
  },
  dev: {
    entry: {
      index: './src/demo1.js',
    },
    NODE_ENV: 'development',
    port: 80,
    autoOpenBrowser: true,
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '',
    hostname: 'localhost',
    cssSourceMap: false,
  },
  build2lib: {
    entry: {
      index: './src/main.js',
    },
    output: {
      filename: '[name].js'
    },
    NODE_ENV: 'production',
    libraryName: 'JSONEditor', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('./lib'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    ignoreNodeModules: true,
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  },
  build1: {
    entry: {
      index: './src/demo1.js',
    },
    NODE_ENV: 'production',
    assetsRoot: resolve('./demo/demo1'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/json-editor/demo/demo1/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  },
  build: {
    entry: {
      index: './src/demo2.js',
    },
    NODE_ENV: 'production',
    assetsRoot: resolve('./demo/demo2'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/json-editor/demo/demo2/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  }
};
