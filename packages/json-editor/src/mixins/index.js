import { getWebCacheData, deleteWebCacheData } from '$utils/index';

/** 从WebCache中获取jsonData数据
 * 备注：引用catchJsonDataByWebCache前，请确保当前组件的props中包含以下属性：
 * keyRoute、targetJsonSchema、updateFormValueData
 * getJSONDataByKeyRoute、getInitJsonDataByKeyRoute
 * */
export function catchJsonDataByWebCache(curKeyRoute) {
  const { targetJsonSchema } = this.props;
  const {
    getJSONDataByKeyRoute,
    getInitJsonDataByKeyRoute,
    updateFormValueData,
  } = this.props.jsonStore || {};
  const curType = targetJsonSchema.type;
  const keyRoute = curKeyRoute || this.props.keyRoute;
  const backUpKeyRoute = getWebCacheData(`${keyRoute}-${curType}`);
  if (backUpKeyRoute) {
    // 1. 先尝试从jsonData中获取数据
    let beckUpJsonData = getJSONDataByKeyRoute(backUpKeyRoute);
    if (!beckUpJsonData) {
      // 2. 再尝试从jsonDataTemp中获取数据
      beckUpJsonData = getInitJsonDataByKeyRoute(backUpKeyRoute);
    }
    if (beckUpJsonData) {
      // 删除前端缓存后立即更新到jsonData中
      deleteWebCacheData(`${keyRoute}-${curType}`);
      updateFormValueData(keyRoute, beckUpJsonData); // 更新数值
    }
  }
}
