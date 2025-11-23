/**
 *  将数据缓存到sessionStorage中
 * */
export function saveJSONEditorCache(
  key: string,
  value: any,
  cacheMark: string = 'json-editor-cache',
): void {
  if (window.sessionStorage) {
    let cacheData: Record<string, any> = {};
    let cacheDataStr = window.sessionStorage.getItem(cacheMark);
    if (cacheDataStr) {
      cacheData = JSON.parse(cacheDataStr);
    }
    if (key) {
      cacheData[key] = value;
    }
    window.sessionStorage.setItem(cacheMark, JSON.stringify(cacheData));
  }
}

/**
 *  从sessionStorage中读取此前缓存的数据
 * */
export function getJSONEditorCache(
  valueKey: string,
  cacheMark: string = 'json-editor-cache',
): any {
  let curKeyValue: any;
  if (window.sessionStorage) {
    let cacheData: Record<string, any> = {};
    let cacheDataStr = window.sessionStorage.getItem(cacheMark);
    if (cacheDataStr) {
      cacheData = JSON.parse(cacheDataStr);
    }
    if (valueKey) {
      curKeyValue = cacheData[valueKey];
    }
  }
  return curKeyValue;
}

/**
 *  从sessionStorage中删除此前缓存的数据
 * */
export function deleteJSONEditorCache(
  valueKey: string,
  cacheMark: string = 'json-editor-cache',
): void {
  if (window.sessionStorage) {
    let cacheData: Record<string, any> = {};
    let cacheDataStr = window.sessionStorage.getItem(cacheMark);
    if (cacheDataStr) {
      cacheData = JSON.parse(cacheDataStr);
    }
    if (valueKey) {
      cacheData[valueKey] = undefined;
    }
  }
}
