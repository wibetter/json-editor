/**
 * 获取父元素的key路径值
 */
export function getParentKeyRoute(curKeyRoute: string) {
  const curKeyArr = curKeyRoute.split('-');
  curKeyArr.pop();
  return curKeyArr.join('-');
}

/**
 * 获取父元素的key路径值和当前key
 */
export function getParentKeyRoute_CurKey(
  curKeyRoute: string,
): [string, string] {
  const curKeyArr: string[] = curKeyRoute.split('-');
  const curKey: string = curKeyArr.pop() || '';
  return [curKeyArr.join('-'), curKey];
}
