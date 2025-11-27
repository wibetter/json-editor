/**
 * json-utils: json工具集合
 * 【提供的工具方法清单】
 *
 * 【12个主要的json工具方法】
 * getJsonDataByKeyRoute: 根据key索引路径获取对应的数值
 * getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
 * getSchemaByKeyRoute: 根据key值路径获取对应的schema数据
 * indexRoute2keyRoute: 根据index索引路径获取对应的key值路径
 * keyRoute2indexRoute：根据key值路径获取对应的index索引路径
 * json2schema: 根据json数据内容获取对应的schema数据
 * oldSchemaToNewSchema: 旧版jsonSchema转新版jsonSchema
 * schema2json: 根据schema数据内容生成一份对应的json数据
 * schemaMetaList: 当前JSON数据可视化提供的元数据清单
 * metaElemAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的元数据情况
 *
 * 【其他较小的json工具方法】
 *
 * 【json数据内容相关的操作方法】
 * getParentKeyRoute: 获取父元素的key路径值
 * getParentKeyRoute_CurKey: 获取父元素的key路径值和当前key
 *
 * 【schema相关的操作方法】
 * isEmptySchema: 判断是否为空的Schema
 * isNewSchemaData: 判断是否是最新版的schema数据
 * isContainerSchema: 判断是否是容器类型元素，用于确认是否能添加子元素
 * isStructuredSchema: 判断是否是结构化schema数据（一级schema为object类型，其所有二级schema为object类型）
 * isSameParent: 判断是否是同一个父元素
 * getCurPosition: 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
 * getParentIndexRoute: 获取父元素的路径值
 * getNextIndexRoute: 获取下一个兄弟元素的路径值
 * getParentIndexRoute_CurIndex: 获取父元素的路径值和当前index
 * moveForward: 将当前路径值向前移动一位
 * moveBackward: 将当前路径值向后移动一位
 *
 * 【纯工具方法】
 * objClone: js对象数据深拷贝，避免数据联动
 * isEqual: 对比两个json数据是否相等
 * hasProperties: 判断当前属性是否存在(识别数值为false、0、null)
 *
 * 【基础元数据类型判断】
 * isURL
 * isString
 * isNumber
 * isBoolean
 * isDateStr
 * isDateTimeStr
 * isTimeStr
 * isArray
 * isSelect
 * isObject
 * isQuantity
 * isColor
 * isFunction
 */
export * from './function/getJsonDataByKeyRoute';
export * from './function/getSchemaByIndexRoute';
export * from './function/getSchemaByKeyRoute';
export * from './function/indexRoute2keyRoute';
export * from './function/keyRoute2indexRoute';
export * from './function/json2schema';
export * from './function/metaElemAnalyzer';
export * from './function/oldSchemaToNewSchema';
export * from './function/schema2json';
export * from './function/schemaMetaList';
export * from './function/json2treeData';
export * from './function/getExpectType';
export * from './function/schema2conditionValue';
export * from './utils/index';
export * from './utils/jsonData';
export * from './utils/jsonSchema';
export * from './utils/typeof';
export * from './data/KeyWordList';
export * from './data/TypeDataList';
