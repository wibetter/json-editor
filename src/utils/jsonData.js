/**
 * JSONSchema数据对象的通用操作方法【非响应式数据操作方法集合】
 */
import { objClone } from '$utils/index';

/**
 * 获取父元素的key路径值
 */
export function getParentKeyRoute(curKeyRoute) {
  const curKeyArr = curKeyRoute.split('-');
  curKeyArr.pop();
  return curKeyArr.join('-');
}

/**
 * 获取父元素的key路径值和当前key
 */
export function getParentKeyRoute_CurKey(curKeyRoute) {
  const curKeyArr = curKeyRoute.split('-');
  const curKey = curKeyArr.pop();
  return [curKeyArr.join('-'), curKey];
}

/** 根据key索引路径获取对应的数值  */
export function getJSONDataByKeyRoute(
  keyRoute,
  targetJsonDataObj,
  useObjClone,
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
      // 2、先根据路径值获取key值
      curJsonDataObj = curJsonDataObj && curJsonDataObj[curKey];
    }
  }
  return curJsonDataObj;
}
