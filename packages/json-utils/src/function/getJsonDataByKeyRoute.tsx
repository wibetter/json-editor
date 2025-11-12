import { objClone } from '$utils/index';
/**
 * getJSONDataByKeyRoute: 根据key值路径获取对应的json数据
 * 【方法参数说明】
 * keyRoute: key值索引路径
 * targetJsonDataObj: json数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
export function getJsonDataByKeyRoute(
  keyRoute: string,
  targetJsonDataObj: any,
  useObjClone: boolean,
) {
  let curJsonDataObj = targetJsonDataObj;
  if (useObjClone) {
    curJsonDataObj = objClone(targetJsonDataObj); // 进行深拷贝，避免影响原有数据
  }
  if (keyRoute) {
    const keyRouteArr = keyRoute.split('-');
    for (let index = 0, size = keyRouteArr.length; index < size; index++) {
      // 1、获取当前的jsonKey值
      const curKey = keyRouteArr[index];
      if (curKey) {
        // 只有curKey不为空的时候才进行赋值
        // 2、根据key值获取对应的数据对象
        curJsonDataObj = curJsonDataObj && curJsonDataObj[curKey];
      }
    }
  }
  return curJsonDataObj;
}
