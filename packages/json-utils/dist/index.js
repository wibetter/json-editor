/*! For license information please see index.js.LICENSE.txt */
!(function (e, o) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = o())
    : 'function' == typeof define && define.amd
      ? define([], o)
      : 'object' == typeof exports
        ? (exports.JSONUtils = o())
        : (e.JSONUtils = o());
})(this, function () {
  return (
    (function () {
      throw new Error(
        'Module build failed (from ../../node_modules/ts-loader/index.js):\nError: TypeScript emitted no output for /Users/liudan/mygit/json-editor/packages/json-utils/src/main.ts.\n    at makeSourceMapAndFinish (/Users/liudan/mygit/json-editor/node_modules/ts-loader/dist/index.js:55:18)\n    at successLoader (/Users/liudan/mygit/json-editor/node_modules/ts-loader/dist/index.js:42:5)\n    at Object.loader (/Users/liudan/mygit/json-editor/node_modules/ts-loader/dist/index.js:23:5)',
      );
    })(),
    {}
  );
});
