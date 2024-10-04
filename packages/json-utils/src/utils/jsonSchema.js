/**
 * JSONSchema(json格式)对象的通用操作方法【非响应式数据操作方法集合】
 */

/**
 * 获取当前字段的类型（format）
 * 如果当前字段没有format字段，则根据type字段赋予默认的类型
 */
export function getCurrentFormat(targetJsonData) {
  let currentType = targetJsonData && targetJsonData.type;
  if (!currentType) {
    if (targetJsonData && targetJsonData.type) {
      currentType = targetJsonData.type;
    } else {
      currentType = 'input';
    }
  }
  return currentType;
}

/** 判断是否为空的Schema
 * 包括 通用schema和组件配置专用的schema
 * */
export function isEmptySchema(targetJsonSchema) {
  let isEmpty = true;
  if (!targetJsonSchema) {
    return isEmpty;
  }
  const curType = getCurrentFormat(targetJsonSchema);
  if (
    curType === 'object' &&
    targetJsonSchema.properties &&
    targetJsonSchema.propertyOrder &&
    targetJsonSchema.propertyOrder.length > 0
  ) {
    // Object对象类型
    isEmpty = false;
  } else if (
    curType === 'array' &&
    targetJsonSchema.items &&
    targetJsonSchema.items.properties &&
    targetJsonSchema.items.propertyOrder &&
    targetJsonSchema.items.propertyOrder.length > 0
  ) {
    // Array数组类型
    isEmpty = false;
  } else if (
    (targetJsonSchema.type &&
      targetJsonSchema.type !== 'array' &&
      targetJsonSchema.type !== 'object') ||
    targetJsonSchema.type
  ) {
    // 其他基本类型
    isEmpty = false;
  }
  return isEmpty;
}

/**
 *  判断是否是最新版的schema数据
 *  备注：确保当前schema数据是通过@wibetter/json-schema-editor生成的
 * */
export function isNewSchemaData(schemaData) {
  let isNewVersion = false;
  const { lastUpdateTime } = schemaData;
  // 从那一刻开始就认为是新版JSONSchema
  // const newVersionTime = new Date('2020-07-29T07:30:00.691Z').getTime();
  const newVersionTime = new Date('2024-10-05T00:01:00.691Z').getTime();
  if (lastUpdateTime && new Date(lastUpdateTime).getTime() >= newVersionTime) {
    isNewVersion = true;
  }
  return isNewVersion;
}

/** 根据format判断是否是容器类型字段
 *  容器类型字段：func、style、data、object
 *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
 *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
 * */
export function isBoxSchemaData(format) {
  let isBoxSchema = false;
  if (
    format === 'object' ||
    format === 'func' ||
    format === 'style' ||
    format === 'data' ||
    format === 'func-schema' ||
    format === 'style-schema' ||
    format === 'data-schema' ||
    format === 'event-schema'
  ) {
    isBoxSchema = true;
  }
  return isBoxSchema;
}

/** 判断是否是结构化的schema数据，
 *  判定条件：一级schema为object类型，其所有二级schema也为object类型
 * */
export function isStructuredSchema(jsonSchema) {
  let isStructured = true;
  const currentType = jsonSchema.type || getCurrentFormat(jsonSchema);
  if (
    currentType !== 'object' ||
    !jsonSchema.propertyOrder ||
    !jsonSchema.properties
  ) {
    isStructured = false;
  } else {
    jsonSchema.propertyOrder.map((key) => {
      /** 1. 获取当前schema对象 */
      const curSchemaData = jsonSchema.properties[key];
      /** 2. 判断是否是容器类型元素，如果是则禁止选中 */
      const curType = jsonSchema.type || getCurrentFormat(curSchemaData);
      if (
        curType !== 'object' ||
        !curSchemaData.propertyOrder ||
        !curSchemaData.properties
      ) {
        isStructured = false;
      }
    });
  }
  return isStructured;
}

/**
 * 判断是否是同一个父元素
 * 备注：用于判断两个元素是否在同一个父级容器中
 */
export function isSameParent(curIndex, targetIndex) {
  const curIndexArr = curIndex.split('-');
  const targetIndexArr = targetIndex.split('-');
  curIndexArr.pop();
  targetIndexArr.pop();
  if (curIndexArr.join('-') === targetIndexArr.join('-')) {
    return true;
  }
  return false;
}

/**
 * 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
 */
export function getCurPosition(curIndex, targetIndex) {
  const curIndexArr = curIndex.split('-');
  const targetIndexArr = targetIndex.split('-');
  let curPosition = 'before'; // 默认在目标元素的前面
  // 使用短的路径进行遍历（避免空指针）
  const forEachArr =
    curIndexArr.length > targetIndexArr.length ? targetIndexArr : curIndexArr;
  for (let index = 0, size = forEachArr.length; index < size; index += 1) {
    const curIndexItem = Number(curIndexArr[index]);
    const targetIndexItem = Number(targetIndexArr[index]);
    if (curIndexItem > targetIndexItem) {
      curPosition = 'after'; // 表示当前元素在目标元素的后面
    }
  }
  return curPosition;
}

/**
 * 获取父元素的路径值
 */
export function getParentIndexRoute(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  curIndexArr.pop();
  return curIndexArr.join('-');
}

/**
 * 获取下一个兄弟元素的路径值
 */
export function getNextIndexRoute(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const lastIndex = curIndexArr.pop();
  const endIndex = Number(lastIndex) + 1;
  curIndexArr.push(`${endIndex}`);
  return curIndexArr.join('-');
}

/**
 * 获取父元素的路径值和当前index
 */
export function getParentIndexRoute_CurIndex(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  return [curIndexArr.join('-'), curIndex];
}

/**
 * 将当前路径值向前移动一位
 */
export function moveForward(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) - 1);
  return curIndexArr.join('-');
}

/**
 * 将当前路径值向后移动一位
 */
export function moveBackward(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) + 1);
  return curIndexArr.join('-');
}
