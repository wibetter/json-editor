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
    enableStyleLintFix: false, // 是否需要StyleLint自动修正代码格式
  },
  webpack: {
    resolve: {
      extensions: ['.js', '.jsx', 'json'],
      alias: {
        '@': resolve('src'),
        $function: resolve('src/function'),
        $utils: resolve('src/utils'),
        $data: resolve('src/data'),
      },
    },
  },
  build2lib: {
    entry: {
      index: './src/main.js', // 构建lib的入口
    },
    output: {
      filename: '[name].js',
    },
    // 用于构建生产环境代码的相关配置信息
    NODE_ENV: 'production', // development / production
    libraryName: 'JSONUtils', // 构建第三方功能包时最后导出的引用变量名
    assetsRoot: resolve('./dist'), // 打包后的文件绝对路径（物理路径）
    assetsPublicPath: '/', // 设置静态资源的引用路径（根域名+路径）
    assetsSubDirectory: '', // 资源引用二级路径
    ignoreNodeModules: true,
    additionalModuleDirs: ['../../node_modules'], // ignoreNodeModules开启后生效
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css', 'json'],
    bundleAnalyzerReport: false,
  },
  build2esm: {
    type: 'js',
    input: resolve('src/main.js'),
    fileName: 'index',
  },
};
