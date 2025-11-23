import { objClone } from '$utils/index';
/**
 * getSchemaByKeyRoute: 根据key值路径获取对应的schema数据
 * 【方法参数说明】
 * keyRoute: key值路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
export function getSchemaByKeyRoute(
  keyRoute: string,
  targetJsonSchemaObj: any,
  useObjClone?: boolean,
) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (keyRoute && curJsonSchemaObj) {
    const keyRouteArr = keyRoute.split('-');
    for (let index = 0, size = keyRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
      const curKey = keyRouteArr[index];
      if (curKey && curJsonSchemaObj.properties) {
        // 根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKey];
      }
    }
  }
  return curJsonSchemaObj;
}
