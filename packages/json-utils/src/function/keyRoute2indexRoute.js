/**
 * keyRoute2indexRoute：根据key值路径获取对应的index索引路径
 * 【方法参数说明】
 * keyRoute: key值路径
 * targetJsonSchemaObj: schema数据对象
 * */
export function keyRoute2indexRoute(keyRoute, targetJsonSchemaObj) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  let curIndexRoute = '';
  const keyRouteArr = keyRoute.split('-');
  for (let index = 0, size = keyRouteArr.length; index < size; index++) {
    const curKey = keyRouteArr[index];
    if (curKey) {
      // 1、先根据路径值获取key值
      let curIndex = -1;
      // 1、先根据路径值获取key值
      if (curJsonSchemaObj.propertyOrder) {
        curIndex = curJsonSchemaObj.propertyOrder.indexOf(curKey);
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      } else if (curJsonSchemaObj.properties) {
        const propertyOrder = Object.keys(curJsonSchemaObj.properties);
        curIndex = propertyOrder.indexOf(curKey);
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      } else if (curJsonSchemaObj.items) {
        // 兼容数组类型
        curIndex = 0; // curKey;
        curJsonSchemaObj = curJsonSchemaObj.items; // 对象类型数据引用
      }
      curIndexRoute = curIndexRoute
        ? `${curIndexRoute}-${curIndex}`
        : curIndex.toString();
    }
  }
  return curIndexRoute;
}
