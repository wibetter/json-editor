import { getWebCacheData } from '$utils/index';

/** 从WebCache中获取jsonData数据
 * 备注：引用catchJsonDataByWebCache前，请确保当前组件的props中包含以下属性：
 * keyRoute、targetJsonSchema、updateFormValueData
 * getJSONDataByKeyRoute、getInitJsonDataByKeyRoute
 * */

export function catchJsonDataByWebCache(this: any, curKeyRoute: string) {
  const { targetJsonSchema } = this.props;
  const {
    getJSONDataByKeyRoute,
    getInitJsonDataByKeyRoute,
    updateFormValueData,
  } = this.props.jsonStore || {};
  const curType = targetJsonSchema.type;
  const keyRoute = curKeyRoute || this.props.keyRoute;
  const cacheValue = getWebCacheData(`${keyRoute}-${curType}`); // 确保仅缓存同类型的数值
  if (cacheValue) {
    // 1. 先尝试从jsonData中获取数据
    let curValue = getJSONDataByKeyRoute(keyRoute);
    if (curValue === undefined || curValue === null) {
      // 2. 再尝试从jsonDataTemp中获取数据
      curValue = getInitJsonDataByKeyRoute(keyRoute);
    }
    if (curValue === undefined || curValue === null) {
      // 3. 将缓存中的数值更新到jsonData中
      updateFormValueData(keyRoute, cacheValue);
    }
  }
}
