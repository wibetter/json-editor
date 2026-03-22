import { getWebCacheData } from '$utils/index';

/** 从WebCache中获取jsonData数据
 * 备注：引用catchJsonDataByWebCache前，请确保当前组件的props中包含以下属性：
 * keyRoute、targetJsonSchema、updateFormValueData
 * getJSONDataByKeyRoute、getInitJsonDataByKeyRoute
 * */

export function catchJsonDataByWebCache(this: any, curKeyRoute: string) {
  const { targetJsonSchema } = this.props;
  const {
    editorKey = 'json-editor',
    lastUpdateTime = 0,
    getJSONDataByKeyRoute,
    getInitJsonDataByKeyRoute,
    updateFormValueData,
  } = this.props.jsonStore || {};
  const curType = targetJsonSchema.type;
  const keyRoute = curKeyRoute || this.props.keyRoute;

  // 缓存key格式：${editorKey}-${keyRoute}-${type}，通过 editorKey 隔离不同实例的缓存
  // 缓存结构：{ value, timestamp }，通过 editorKey 隔离不同实例的缓存
  const cacheEntry = getWebCacheData(`${editorKey}-${keyRoute}-${curType}`);

  if (
    !cacheEntry ||
    cacheEntry.value === undefined ||
    cacheEntry.value === null
  ) {
    return;
  }

  if (cacheEntry.timestamp > lastUpdateTime) {
    // 缓存比 jsonData 更新（用户的修改发生在最近一次数据刷新之后），优先使用缓存数值
    const curValue = getJSONDataByKeyRoute(keyRoute);
    if (JSON.stringify(curValue) !== JSON.stringify(cacheEntry.value)) {
      updateFormValueData(keyRoute, cacheEntry.value);
    }
  } else {
    // jsonData 比缓存更新（外部传入了新数据），优先保留 jsonData 数值
    // 仅在 jsonData 中该字段无值时才兜底填入缓存数值
    // 1. 先尝试从jsonData中获取数据
    let curValue = getJSONDataByKeyRoute(keyRoute);
    if (curValue === undefined || curValue === null) {
      // 2. 再尝试从jsonDataTemp中获取数据
      curValue = getInitJsonDataByKeyRoute(keyRoute);
    }
    if (curValue === undefined || curValue === null) {
      // 3. 将缓存中的数值更新到jsonData中
      updateFormValueData(keyRoute, cacheEntry.value);
    }
  }
}
