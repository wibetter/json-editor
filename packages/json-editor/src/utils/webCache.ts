/**
 *  将数据缓存到sessionStorage中
 * */
export function saveJSONEditorCache(
  key,
  value,
  cacheMark = 'json-editor-cache',
) {
  if (window.sessionStorage) {
    let cacheData = {};
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
export function getJSONEditorCache(valueKey, cacheMark = 'json-editor-cache') {
  let curKeyValue;
  if (window.sessionStorage) {
    let cacheData = {};
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
  valueKey,
  cacheMark = 'json-editor-cache',
) {
  if (window.sessionStorage) {
    let cacheData = {};
    let cacheDataStr = window.sessionStorage.getItem(cacheMark);
    if (cacheDataStr) {
      cacheData = JSON.parse(cacheDataStr);
    }
    if (valueKey) {
      cacheData[valueKey] = undefined;
    }
  }
}
