const fs = require('fs');
const path = require('path');
const { isArray, isObject } = require('../dist/index.js');

// 写入到到测试文件中
const writeFile = function (fileDir, curJsonStr) {
  fs.writeFile(fileDir, curJsonStr, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('已输出json测试数据至jsonData.json中');
  });
};

// 输出json数据到测试文件中
const console2file = function (curJson) {
  // 默认的测试输出文件地址
  const jsonDataFileDir = path.resolve(__dirname, './jsonData.json');

  let curJsonStr = curJson;
  if (isArray(curJson) || isObject(curJson)) {
    curJsonStr = JSON.stringify(curJson, null, 2); // 字符串格式化
  } else {
    // 当前curJson是一个字符串，判断是否能转换成对应的json对象
    try {
      // json数据类型：进行格式化（检查是否是合格的json字符串数据）
      const jsonDataObj = JSON.parse(curJson);
      curJsonStr = JSON.stringify(jsonDataObj, null, 2); // 字符串格式化
    } catch (err) {
      console.log('当前的json字符串不能转换成一个合法的json对象');
    }
  }
  writeFile(jsonDataFileDir, curJsonStr);
};

module.exports = console2file;
