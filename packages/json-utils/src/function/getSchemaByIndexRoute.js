import { objClone } from '$utils/index';
/**
 * getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
export function getSchemaByIndexRoute(
  indexRoute,
  targetJsonSchemaObj,
  useObjClone,
) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (indexRoute) {
    const indexRouteArr = indexRoute.split('-');
    for (let index = 0, size = indexRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
      const curIndex = indexRouteArr[index];
      if (
        curIndex === '0' &&
        (curJsonSchemaObj.format === 'array' ||
          curJsonSchemaObj.format === 'radio' ||
          curJsonSchemaObj.format === 'single-select' ||
          curJsonSchemaObj.format === 'select') &&
        (curJsonSchemaObj.options || curJsonSchemaObj.items)
      ) {
        // 从items中获取数据
        curJsonSchemaObj = curJsonSchemaObj.options || curJsonSchemaObj.items;
      } else if (curIndex) {
        let curKeyTemp = '0';
        // 1、先根据路径值获取key值
        if (curJsonSchemaObj.propertyOrder) {
          curKeyTemp = curJsonSchemaObj.propertyOrder[curIndex];
        } else if (curJsonSchemaObj.properties) {
          const propertyOrder = Object.keys(curJsonSchemaObj.properties);
          curKeyTemp = propertyOrder[curIndex];
        }
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }
  return curJsonSchemaObj;
}
