/** js对象数据深拷贝，避免数据联动 */
export function objClone(targetObj) {
  const newObj = JSON.stringify(targetObj);
  return JSON.parse(newObj);
}

/** 对比两个json数据是否相等 */
export function isEqual(targetObj, nextTargetObj) {
  return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
export function exitPropertie(targetPropertie) {
  let exitPropertie = false;
  if (targetPropertie !== undefined && targetPropertie !== null) {
    // targetPropertie 等于""、0、false时均认为是存在的属性
    exitPropertie = true;
  }
  return exitPropertie;
}
