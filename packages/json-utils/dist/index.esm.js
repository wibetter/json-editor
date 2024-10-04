import { cloneDeep, isEqual as isEqual$1 } from 'lodash';

/** js对象数据深拷贝，避免数据联动 */
function objClone(targetObj) {
  // const newObj = JSON.stringify(targetObj);
  // return JSON.parse(newObj);
  return cloneDeep(targetObj);
}

/** 对比两个json数据是否相等 */
function isEqual(targetObj, nextTargetObj) {
  // return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
  return isEqual$1(targetObj, nextTargetObj);
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
function hasProperties(targetProperties) {
  var hasProperties = false;
  if (targetProperties !== undefined && targetProperties !== null) {
    // targetProperties 等于""、0、false时均认为是存在的属性
    hasProperties = true;
  }
  return hasProperties;
}

/**
 * getJSONDataByKeyRoute: 根据key值路径获取对应的json数据
 * 【方法参数说明】
 * keyRoute: key值索引路径
 * targetJsonDataObj: json数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
function getJsonDataByKeyRoute(keyRoute, targetJsonDataObj, useObjClone) {
  var curJsonDataObj = targetJsonDataObj;
  if (useObjClone) {
    curJsonDataObj = objClone(targetJsonDataObj); // 进行深拷贝，避免影响原有数据
  }
  if (keyRoute) {
    var keyRouteArr = keyRoute.split('-');
    for (var index = 0, size = keyRouteArr.length; index < size; index++) {
      // 1、获取当前的jsonKey值
      var curKey = keyRouteArr[index];
      if (curKey) {
        // 只有curKey不为空的时候才进行赋值
        // 2、根据key值获取对应的数据对象
        curJsonDataObj = curJsonDataObj && curJsonDataObj[curKey];
      }
    }
  }
  return curJsonDataObj;
}

/**
 * getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
function getSchemaByIndexRoute(indexRoute, targetJsonSchemaObj, useObjClone) {
  var curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (indexRoute) {
    var indexRouteArr = indexRoute.split('-');
    for (var index = 0, size = indexRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
      var curIndex = indexRouteArr[index];
      if (
        curIndex === '0' &&
        (curJsonSchemaObj.type === 'array' ||
          curJsonSchemaObj.type === 'radio' ||
          curJsonSchemaObj.type === 'single-select' ||
          curJsonSchemaObj.type === 'select') &&
        (curJsonSchemaObj.options || curJsonSchemaObj.items)
      ) {
        // 从items中获取数据
        curJsonSchemaObj = curJsonSchemaObj.options || curJsonSchemaObj.items;
      } else if (curIndex) {
        var curKeyTemp = '0';
        // 1、先根据路径值获取key值
        if (curJsonSchemaObj.propertyOrder) {
          curKeyTemp = curJsonSchemaObj.propertyOrder[curIndex];
        } else if (curJsonSchemaObj.properties) {
          var propertyOrder = Object.keys(curJsonSchemaObj.properties);
          curKeyTemp = propertyOrder[curIndex];
        }
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }
  return curJsonSchemaObj;
}

/**
 * getSchemaByKeyRoute: 根据key值路径获取对应的schema数据
 * 【方法参数说明】
 * keyRoute: key值路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
function getSchemaByKeyRoute(keyRoute, targetJsonSchemaObj, useObjClone) {
  var curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (keyRoute && curJsonSchemaObj) {
    var keyRouteArr = keyRoute.split('-');
    for (var index = 0, size = keyRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
      var curKey = keyRouteArr[index];
      if (curKey && curJsonSchemaObj.properties) {
        // 根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKey];
      }
    }
  }
  return curJsonSchemaObj;
}

/**
 * indexRoute2keyRoute：根据index索引路径获取对应的key值路径
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * */
function indexRoute2keyRoute(indexRoute, targetJsonSchemaObj) {
  var curJsonSchemaObj = targetJsonSchemaObj;
  var curKeyRoute = '';
  var indexRouteArr = indexRoute.split('-');
  for (var index = 0, size = indexRouteArr.length; index < size; index++) {
    // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
    var curIndex = indexRouteArr[index];
    if (curIndex === '0' && curJsonSchemaObj.items) {
      // 从items中获取数据
      curJsonSchemaObj = curJsonSchemaObj.items; // 对象类型数据引用
      curKeyRoute = curKeyRoute ? curKeyRoute + '-items' : 'items';
    } else if (curIndex === '0' && curJsonSchemaObj.options) {
      // 从options中获取数据
      curJsonSchemaObj = curJsonSchemaObj.options;
      curKeyRoute = curKeyRoute ? curKeyRoute + '-options' : 'options';
    } else if (curIndex) {
      // 1、先根据路径值获取key值
      var curKey = '0';
      // 1、先根据路径值获取key值
      if (curJsonSchemaObj.propertyOrder) {
        curKey = curJsonSchemaObj.propertyOrder[curIndex];
      } else if (curJsonSchemaObj.properties) {
        var propertyOrder = Object.keys(curJsonSchemaObj.properties);
        curKey = propertyOrder[curIndex];
      }
      // 2、根据key值获取对应的json数据对象
      curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      curKeyRoute = curKeyRoute ? curKeyRoute + '-' + curKey : curKey;
    }
  }
  return curKeyRoute;
}

/**
 * keyRoute2indexRoute：根据key值路径获取对应的index索引路径
 * 【方法参数说明】
 * keyRoute: key值路径
 * targetJsonSchemaObj: schema数据对象
 * */
function keyRoute2indexRoute(keyRoute, targetJsonSchemaObj) {
  var curJsonSchemaObj = targetJsonSchemaObj;
  var curIndexRoute = '';
  var keyRouteArr = keyRoute.split('-');
  for (var index = 0, size = keyRouteArr.length; index < size; index++) {
    var curKey = keyRouteArr[index];
    if (curKey) {
      // 1、先根据路径值获取key值
      var curIndex = -1;
      // 1、先根据路径值获取key值
      if (curJsonSchemaObj.propertyOrder) {
        curIndex = curJsonSchemaObj.propertyOrder.indexOf(curKey);
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      } else if (curJsonSchemaObj.properties) {
        var propertyOrder = Object.keys(curJsonSchemaObj.properties);
        curIndex = propertyOrder.indexOf(curKey);
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      } else if (curJsonSchemaObj.items) {
        // 兼容数组类型
        curIndex = 0; // curKey;
        curJsonSchemaObj = curJsonSchemaObj.items; // 对象类型数据引用
      } else if (curJsonSchemaObj.options) {
        // 兼容数组类型
        curIndex = 0;
        curJsonSchemaObj = curJsonSchemaObj.options;
      }
      curIndexRoute = curIndexRoute
        ? curIndexRoute + '-' + curIndex
        : curIndex.toString();
    }
  }
  return curIndexRoute;
}

/** 新版JSONSchema一级字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initJSONSchemaData = {
  type: 'object',
  title: 'jsonSchemaObject',
  properties: {
    func: {
      type: 'object',
      title: '功能设置',
      readOnly: true,
      properties: {
        a: {
          title: '单文本框',
          type: 'input',
          default: '',
          // 默认值
          description: '',
          // 字段项的说明和描述
          placeholder: '',
          // 输入提示
          isRequired: false,
          readOnly: false,
        },
      },
      propertyOrder: ['a'],
    },
    style: {
      type: 'object',
      title: '样式设置',
      readOnly: true,
      properties: {
        b: {
          title: '单文本框',
          type: 'input',
          default: '',
          // 默认值
          description: '',
          // 字段项的说明和描述
          placeholder: '',
          // 输入提示
          isRequired: false,
          readOnly: false,
        },
      },
      propertyOrder: ['b'],
    },
    data: {
      type: 'data',
      title: '数据设置',
      readOnly: true,
      properties: {
        c: {
          title: '单文本框',
          type: 'input',
          default: '',
          // 默认值
          description: '',
          // 字段项的说明和描述
          placeholder: '',
          // 输入提示
          isRequired: false,
          readOnly: false,
        },
      },
      propertyOrder: ['c'],
    },
  },
  propertyOrder: ['func', 'style', 'data'],
};

/* input类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initInputData = {
  title: '单文本框',
  type: 'input',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/* boolean类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的UI展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initBooleanData = {
  type: 'boolean',
  title: '布尔值',
  default: false,
  // 默认值
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

/* textarea类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initTextareaData = {
  type: 'textarea',
  title: '多行文本框',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/* 富文本类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initTextEditorData = {
  type: 'text-editor',
  title: '富文本',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/* number类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的UI展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  minimum：最小值
 *  maximum：最大值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initNumberData = {
  type: 'number',
  title: '数量number',
  default: 1,
  // 默认值
  minimum: 0,
  // 在高级设置中配置
  maximum: 1000,
  // 在高级设置中配置
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

/* radio类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  options：用于设置选择项
 *  isRequired：是否是必填项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initRadioData = {
  type: 'radio',
  title: '单选',
  options: [
    {
      label: '选项a',
      value: 'a',
    },
    {
      label: '选项b',
      value: 'b',
    },
    {
      label: '选项c',
      value: 'c',
    },
  ],
  default: 'a',
  description: '',
  isRequired: false,
  readOnly: false,
};

/* SingleSelect下拉类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  options：用于设置选择项
 *  isRequired：是否是必填项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initSingleSelectData = {
  type: 'single-select',
  title: '下拉单选',
  options: [
    {
      label: '选项a',
      value: 'a',
    },
    {
      label: '选项b',
      value: 'b',
    },
    {
      label: '选项c',
      value: 'c',
    },
  ],
  default: 'a',
  description: '',
  isRequired: false,
  readOnly: false,
};

/* select类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  options：用于设置选择项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initSelectData = {
  type: 'select',
  title: '多选',
  options: [
    {
      label: '选项a',
      value: 'a',
    },
    {
      label: '选项b',
      value: 'b',
    },
    {
      label: '选项c',
      value: 'c',
    },
  ],
  default: ['a'],
  description: '',
  isRequired: false,
  readOnly: false,
};

/* DateTime类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initDateTimeData = {
  type: 'date-time',
  title: '日期时间',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/* Date类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initDateData = {
  type: 'date',
  title: '日期Date',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/* Time类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initTimeData = {
  type: 'time',
  title: '时间Time',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/* color类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initColorData = {
  type: 'color',
  title: '颜色color',
  default: '#ffffff',
  // 默认值
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

/* URL类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initURLData = {
  type: 'url',
  title: '链接地址url',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false,
};

/** image图片类型字段
 *  用户可以使用此组件上传图片，最后返回对应的图片资源地址
 * */
var initIMGData = {
  title: '图片',
  type: 'image',
  default: '',
  // 默认值
  description: '上传图片',
  // 字段项的说明和描述
  imgWidth: 200,
  // 图片默认的宽度，单位默认px
  imgHeight: 200,
  // 图片默认的高度，单位默认px
  imgRatioReadOnly: true,
  // 图片宽高比例是否可调整
  templateId: '',
  // 图片模板ID，用于玲珑制图中选择使用对应的图片模板
  isRequired: false,
};

/* array类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  items：用于设置选择项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initArrayData = {
  type: 'array',
  title: '数组Array',
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
  items: {
    type: 'object',
    title: '数组项',
    description: '',
    // 字段项的说明和描述
    isRequired: false,
    readOnly: false,
    properties: {
      name: {
        type: 'input',
        title: '名字',
        default: '',
        // 默认值
        description: '',
        // 字段项的说明和描述
        placeholder: '',
        // 输入提示
        isRequired: false,
        readOnly: false,
      },
    },
    propertyOrder: ['name'],
  },
};

var _a;
/** Object字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initObjectData = {
  type: 'object',
  title: '对象Object',
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
  properties: {
    a:
      ((_a = {
        type: 'string',
        title: '单文本框',
      }),
      (_a['type'] = 'input'),
      (_a.default = ''),
      (_a.description = ''),
      (_a.placeholder = ''),
      (_a.isRequired = false),
      (_a.readOnly = false),
      _a),
  },
  propertyOrder: ['a'],
};

// 空数组的schema数据
var EmptyArray = {
  type: 'array',
  title: '数组Array',
  description: '',
  items: {
    type: 'object',
    title: '数组项',
    description: '',
    properties: {},
  },
};

// 空对象的schema数据
var EmptyObject = {
  type: 'object',
  title: '对象Object',
  description: '',
  properties: {},
};

/** quantity字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initQuantityData = {
  type: 'quantity',
  title: '单位计量',
  isRequired: false,
  readOnly: false,
  properties: {
    unit: {
      type: 'number',
      title: '单位数值',
      default: 50,
      // 默认值
      minimum: 0,
      // 在高级设置中配置
      maximum: 1000,
      // 在高级设置中配置
      description: '',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
    quantity: {
      type: 'typeSelect',
      // 选择列表
      default: 'px',
      enum: ['px', 'rem', 'em', '%'],
      enumextra: ['px', 'rem', 'em', '%'],
      title: '单位类型',
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['unit', 'quantity'],
};

/** box-style字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initBoxStyleData = {
  type: 'box-style',
  title: '盒子模型',
  isRequired: false,
  readOnly: false,
  properties: {
    unit: {
      title: '单位数值',
      type: 'string',
      default: '0',
      // 默认值为'0'：'0px 0px 0px 0px'；为'5px': '5px 5px 5px 5px'
      description: '',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
    quantity: {
      type: 'typeSelect',
      // 选择列表
      default: 'px',
      enum: ['px', 'rem', 'em', '%'],
      enumextra: ['px', 'rem', 'em', '%'],
      title: '单位类型',
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['unit', 'quantity'],
};

/* json类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initJsonData = {
  title: 'json数据',
  type: 'json',
  default: '{}',
  // 默认值
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

/* CodeArea类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initCodeAreaData = {
  type: 'codearea',
  title: '函数类型',
  placeholder: '请输入函数方法',
  // 输入提示
  default: 'function func() { console.log("hello, world!"); }',
  // 默认值
  description: '用于定义函数方法',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

/* HtmlArea类型字段
 * 【字段属性说明】
 *  title：字段项的label值
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initHtmlAreaData = {
  title: '富文本',
  type: 'htmlarea',
  placeholder: '请输入html代码片段',
  default: '<p>hello,world!</p>',
  // 默认值
  description: '用于放置html代码片段',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

/** event字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */

/** 新版EventData
 * type: emit 的默认数据 */
var initEventData = {
  type: 'event',
  title: '事件',
  isRequired: false,
  readOnly: false,
  properties: {
    type: {
      default: 'emit',
      type: 'typeSelect',
      enum: ['on', 'emit'],
      enumextra: ['on', 'emit'],
      title: '事件类型',
      isRequired: false,
      readOnly: false,
    },
    trigger: {
      type: 'input',
      default: 'eventName',
      title: '触发事件',
      description: '用于输入触发事件的名称',
      placeholder: '请输入触发事件的名称',
      isRequired: false,
      readOnly: false,
    },
    eventData: {
      title: '事件数据',
      type: 'json',
      default: '{}',
      // 默认值
      description: '传递给触发事件的数据对象',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['type', 'trigger', 'eventData'],
};

/** 新版EventData
 * type: on 的默认数据 */
var initEventDataTypeON = {
  type: 'event',
  title: '事件',
  isRequired: false,
  readOnly: false,
  properties: {
    type: {
      default: 'on',
      type: 'typeSelect',
      enum: ['on', 'emit'],
      enumextra: ['on', 'emit'],
      title: '事件类型',
      isRequired: false,
      readOnly: false,
    },
    register: {
      type: 'input',
      default: 'eventName',
      title: '注册事件',
      description: '用于输入注册事件的名称',
      placeholder: '请输入注册事件的名称',
      isRequired: false,
      readOnly: false,
    },
    actionFunc: {
      title: '执行函数',
      type: 'codearea',
      default: '() => {}',
      // 默认值
      description: '',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
  },
  propertyOrder: ['type', 'register', 'actionFunc'],
};

var _type, _data, _filter, _initDataSourceDataV;
/** dataSource字段项
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initDataSourceData = {
  type: 'datasource',
  title: '数据源',
  readOnly: false,
  properties: {
    type: {
      default: 'local',
      type: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['local', 'remote'],
      title: '数据源类型',
    },
    data: {
      title: '本地json数据',
      placeholder: '请输入静态json数据',
      // 输入提示
      type: 'json',
      default: '{}',
      // 默认值
      description: '用于设置本地的静态json数据',
      isRequired: true,
    },
    filter: {
      title: '过滤器',
      type: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true,
    },
  },
  propertyOrder: ['type', 'data', 'filter'],
};

// 默认是用于展示local本地数据源的，如果展示远程数据源使用initDataSourceDataV2
var initDataSourceDataV2 =
  ((_initDataSourceDataV = {
    type: 'object',
  }),
  (_initDataSourceDataV['type'] = 'datasource'),
  (_initDataSourceDataV.title = '数据源'),
  (_initDataSourceDataV.readOnly = false),
  (_initDataSourceDataV.properties = {
    type:
      ((_type = {
        type: 'string',
        default: 'remote',
      }),
      (_type['type'] = 'typeSelect'),
      (_type.enum = ['local', 'remote']),
      (_type.enumextra = ['local', 'remote']),
      (_type.title = '数据源类型'),
      _type),
    data:
      ((_data = {
        type: 'string',
        title: '远程json数据',
        placeholder: '请输入远程json数据源地址',
      }),
      (_data['type'] = 'url'),
      (_data.default = 'http://xxx'),
      (_data.isRequired = true),
      (_data.description = '用于设置获取元素数据的请求地址'),
      _data),
    filter:
      ((_filter = {
        type: 'string',
        title: '过滤器',
      }),
      (_filter['type'] = 'codearea'),
      (_filter.default = '() => {}'),
      (_filter.description = '用于定义过滤当前数据的函数'),
      (_filter.isRequired = true),
      _filter),
  }),
  (_initDataSourceDataV.propertyOrder = ['type', 'data', 'filter']),
  _initDataSourceDataV);

/** dynamic-data: 动态数据
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initDynamicData = {
  type: 'dynamic-data',
  title: '动态数据源',
  readOnly: false,
  properties: {
    type: {
      default: 'local',
      type: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['本地数据', '接口数据'],
      title: '数据类型',
    },
    config: {
      title: '接口配置',
      type: 'object',
      description: '用于存放接口的配置数据(url、请求参数等)',
      isRequired: true,
      properties: {
        dataName: {
          default: 'local',
          type: 'typeSelect',
          enum: ['local', 'remote'],
          enumextra: ['本地数据', '接口数据'],
          title: '数据类型',
        },
        body: {
          type: 'object',
          title: '请求参数配置',
          description: '用于配置当前接口的请求参数数值',
          isRequired: true,
        },
        filter: {
          title: '过滤器函数体',
          type: 'codearea',
          default: 'return data;',
          description: '用于定义过滤接口数据',
          isRequired: true,
        },
      },
      propertyOrder: ['dataName', 'body', 'filter'],
    },
    data: {
      title: '数据内容',
      type: 'json',
      default: '{}',
      // 默认值
      description: '用于存放DynamicData的数据内容',
      isRequired: true,
    },
    localFilter: {
      title: '过滤器',
      type: 'codearea',
      default: 'return data;',
      description: '用于定义过滤本地数据',
      isRequired: true,
    },
  },
  propertyOrder: ['type', 'config', 'data', 'localFilter'],
};

// 动态数据对应的空json数据内容
var EmptyDynamicDataCont = {
  type: 'local',
  config: {
    dataName: '',
    // 动态数据源名称
    body: {},
    // 请求参数相关
    filter: 'return data;',
  },
  data: '{}',
  // 用于存储结果数据
  localFilter: 'return data;',
};

// 类型数据清单
var TypeDataList = {
  jsonschema: initJSONSchemaData,
  input: initInputData,
  boolean: initBooleanData,
  object: initObjectData,
  array: initArrayData,
  'empty-array': EmptyArray,
  'empty-object': EmptyObject,
  url: initURLData,
  textarea: initTextareaData,
  color: initColorData,
  image: initIMGData,
  number: initNumberData,
  json: initJsonData,
  codearea: initCodeAreaData,
  htmlarea: initHtmlAreaData,
  'text-editor': initTextEditorData,
  date: initDateData,
  'date-time': initDateTimeData,
  time: initTimeData,
  quantity: initQuantityData,
  'box-style': initBoxStyleData,
  radio: initRadioData,
  'single-select': initSingleSelectData,
  select: initSelectData,
  'dynamic-data': initDynamicData,
  datasource: initDataSourceData,
  event: initEventData,
};

// 事件类型数据
var EventTypeDataList = {
  on: initEventDataTypeON,
  emit: initEventData,
};

// 数据源类型
var DataSourceTypeList = {
  local: initDataSourceData,
  remote: initDataSourceDataV2,
};

// 判断是否是URL地址类型
function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
}
// 判断是否是字符串类型
function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}
// 判断是否是数字类型
function isNumber(value) {
  return (
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[object Number]'
  );
}
// 判断是否是Boolean类型
function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}

// 判断是否是年月日的时间类型
function isDateStr(dateStr) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

// 判断是否是年月日时分的时间类型
function isDateTimeStr(dateStr) {
  return (
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(dateStr) ||
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateStr)
  );
}

// 判断是否是时分的时间类型
function isTimeStr(dateStr) {
  return /^\d{2}:\d{2}:\d{2}$/.test(dateStr) || /^\d{2}:\d{2}$/.test(dateStr);
}

/**
 *  判断是否是数组类型
 * */
function isArray(curObj) {
  var isArray = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Array') {
    isArray = true;
  }
  return isArray;
}

/**
 *  判断是否是select多选类型(基础类型的array)
 *  select类型一定是一个array类型
 * */
function isSelect(curObj) {
  if (!isArray(curObj)) {
    return false;
  }
  for (var ind = 0, size = curObj.length; ind < size; ind++) {
    var arrItem = curObj[ind];
    if (!isString(arrItem)) {
      // 只要有一个不是string类型就认为不是select
      return false;
    }
  }
  return true;
}

/**
 *  判断是否是对象类型
 * */
function isObject(curObj) {
  var isObject = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是单位类型
 * */
function isQuantity(val) {
  var isObject = false;
  // 获取当前计量单位元素可选的单位类型
  var quantityList = TypeDataList.quantity.properties.quantity.enum;
  if (quantityList.indexOf(val) >= 0) {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是颜色值
 * */
function isColor(colorVal) {
  return /^#[0-9a-f]{6}$/.test(colorVal) || /^#[0-9a-f]{3}$/.test(colorVal);
}

/**
 *  判断是否是函数类型
 * */
function isFunction(curObj) {
  var isFunction = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Function') {
    isFunction = true;
  }
  return isFunction;
}

/**
 * json2schema：根据json数据内容获取对应的schema数据
 * 当前包含三个转换方法：baseJson2Schema、objectJson2Schema、arrayJson2Schema
 * */

/**
 * 基础类型的jsonData转schema
 * 备注：目前可转换Boolean、Number、URL、Date、DateTime、Time、color、json类型
 * 其中textarea、radio、codearea和htmlarea的数值不好和input区分，故均转换为input类型
 * */
function baseJson2Schema(jsonData) {
  var curJsonSchema = '';
  if (isBoolean(jsonData)) {
    // 1、Boolean类型
    curJsonSchema = objClone(TypeDataList.boolean);
  } else if (isNumber(jsonData)) {
    // 2、Number类型
    curJsonSchema = objClone(TypeDataList.number);
  } else if (isURL(jsonData)) {
    // 3、URL类型
    curJsonSchema = objClone(TypeDataList.url);
  } else if (isDateStr(jsonData)) {
    // 4、Date类型
    curJsonSchema = objClone(TypeDataList.date);
  } else if (isDateTimeStr(jsonData)) {
    // 5、DateTime类型
    curJsonSchema = objClone(TypeDataList['date-time']);
  } else if (isTimeStr(jsonData)) {
    // 6、Time类型
    curJsonSchema = objClone(TypeDataList.time);
  } else if (isColor(jsonData)) {
    // 7、Color类型
    curJsonSchema = objClone(TypeDataList.color);
  } else {
    try {
      // json数据类型：进行格式化（检查是否是合格的json字符串数据）
      var jsonDataObj = JSON.parse(jsonData);
      if (isNumber(jsonDataObj)) {
        // 简单数字字符串类型数值统一认为是字符串类型
        curJsonSchema = objClone(TypeDataList.input);
      } else {
        // 排除简单数字字符串类型数值
        curJsonSchema = objClone(TypeDataList.json);
      }
    } catch (err) {
      // textarea类型
      if (jsonData && jsonData.length > 30) {
        // 字符串长度超过50则认为是codearea类型
        curJsonSchema = objClone(TypeDataList.textarea);
      } else {
        // 其他类型(input、radio、codearea、htmlarea)
        curJsonSchema = objClone(TypeDataList.input);
      }
    }
  }
  return curJsonSchema;
}

/**
 * Object类型的jsonData转schema
 * 备注：目前可转换datasource、event、quantity、object四种对象类型
 * */
function objectJson2Schema(jsonData) {
  var curJsonSchema;
  if (isObject(jsonData)) {
    var properties = Object.keys(jsonData);
    if (jsonData.data && jsonData.filter && properties.length === 2) {
      // DataSource数据源类型
      if (isArray(jsonData.data) || isObject(jsonData.data)) {
        // 本地数据源类型
        curJsonSchema = objClone(DataSourceTypeList.local);
      } else {
        // 远程数据源类型
        curJsonSchema = objClone(DataSourceTypeList.remote);
      }
    } else if (
      jsonData.trigger &&
      jsonData.eventData &&
      properties.length === 2
    ) {
      // 触发事件类型（固定格式的Object类型）
      curJsonSchema = objClone(EventTypeDataList.emit);
    } else if (
      jsonData.register &&
      jsonData.actionFunc &&
      properties.length === 2
    ) {
      // 注册事件类型（固定格式的Object类型）
      curJsonSchema = objClone(EventTypeDataList.on);
    } else if (
      jsonData.quantity &&
      isQuantity(jsonData.quantity) &&
      properties.length === 2
    ) {
      // 计量单位类型（固定格式的Object类型）
      curJsonSchema = objClone(TypeDataList.quantity);
    } else {
      // 其他非固定格式的Object类型
      curJsonSchema = objClone(TypeDataList['empty-object']); // 新建空数组对象schema
      // 遍历子数据项目
      Object.keys(jsonData).map(function (jsonKey) {
        var curJsonItem = jsonData[jsonKey];
        curJsonSchema.properties[jsonKey] = json2schema(curJsonItem);
      });
    }
  }
  return curJsonSchema;
}

/**
 * Array类型的jsonData转schema
 * 备注：目前可转换select、array两种数组类型
 * */
function arrayJson2Schema(jsonData) {
  var curJsonSchema;
  // 判断是否是数组类型
  if (jsonData && isArray(jsonData)) {
    // 判断是否select类型（select类型是字符串类型的array）
    if (isSelect(jsonData)) {
      curJsonSchema = objClone(TypeDataList.select);
      // 将当前jsonData的值设置为select的选项值
      curJsonSchema.items.enum = jsonData;
      var enumextraLength = curJsonSchema.items.enumextra.length;
      var arrLength = jsonData.length;
      if (arrLength > enumextraLength) {
        // 如果当前jsonDats的数值个数大于selectSchemaData的选项个数，则需要进行补充
        for (var ind = enumextraLength, size = arrLength; ind < size; ind++) {
          curJsonSchema.items.enumextra.push('\u9009\u9879' + jsonData(ind));
        }
      }
    } else {
      curJsonSchema = objClone(TypeDataList['empty-array']); // 新建空数组对象schema
      // 根据第一个数组项获取items的schema对象
      var arrItemObj = json2schema(jsonData[0]); // 正常情况下，Array的一级子对象是Object类型
      curJsonSchema.items.properties = arrItemObj.properties;
    }
  }
  return curJsonSchema;
}

/**
 * 根据jsonData生成一份对应的jsonSchema
 * */
function json2schema(jsonData) {
  var curJsonSchema = {};
  if (jsonData && isObject(jsonData)) {
    curJsonSchema = objectJson2Schema(jsonData);
  } else if (jsonData && isArray(jsonData)) {
    curJsonSchema = arrayJson2Schema(jsonData);
  } else {
    curJsonSchema = baseJson2Schema(jsonData);
  }
  return curJsonSchema;
}

/**
 * JSONSchema(json格式)对象的通用操作方法【非响应式数据操作方法集合】
 */

/**
 * 获取当前字段的类型（format）
 * 如果当前字段没有format字段，则根据type字段赋予默认的类型
 */
function getCurrentFormat(targetJsonData) {
  var currentType = targetJsonData && targetJsonData.type;
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
function isEmptySchema(targetJsonSchema) {
  var isEmpty = true;
  if (!targetJsonSchema) {
    return isEmpty;
  }
  var curType = getCurrentFormat(targetJsonSchema);
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
function isNewSchemaData(schemaData) {
  var isNewVersion = false;
  var lastUpdateTime = schemaData.lastUpdateTime;
  // 从那一刻开始就认为是新版JSONSchema
  // const newVersionTime = new Date('2020-07-29T07:30:00.691Z').getTime();
  var newVersionTime = new Date('2024-10-05T00:01:00.691Z').getTime();
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
function isBoxSchemaData(format) {
  var isBoxSchema = false;
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
function isStructuredSchema(jsonSchema) {
  var isStructured = true;
  var currentType = jsonSchema.type || getCurrentFormat(jsonSchema);
  if (
    currentType !== 'object' ||
    !jsonSchema.propertyOrder ||
    !jsonSchema.properties
  ) {
    isStructured = false;
  } else {
    jsonSchema.propertyOrder.map(function (key) {
      /** 1. 获取当前schema对象 */
      var curSchemaData = jsonSchema.properties[key];
      /** 2. 判断是否是容器类型元素，如果是则禁止选中 */
      var curType = jsonSchema.type || getCurrentFormat(curSchemaData);
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
function isSameParent(curIndex, targetIndex) {
  var curIndexArr = curIndex.split('-');
  var targetIndexArr = targetIndex.split('-');
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
function getCurPosition(curIndex, targetIndex) {
  var curIndexArr = curIndex.split('-');
  var targetIndexArr = targetIndex.split('-');
  var curPosition = 'before'; // 默认在目标元素的前面
  // 使用短的路径进行遍历（避免空指针）
  var forEachArr =
    curIndexArr.length > targetIndexArr.length ? targetIndexArr : curIndexArr;
  for (var index = 0, size = forEachArr.length; index < size; index += 1) {
    var curIndexItem = Number(curIndexArr[index]);
    var targetIndexItem = Number(targetIndexArr[index]);
    if (curIndexItem > targetIndexItem) {
      curPosition = 'after'; // 表示当前元素在目标元素的后面
    }
  }
  return curPosition;
}

/**
 * 获取父元素的路径值
 */
function getParentIndexRoute(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  curIndexArr.pop();
  return curIndexArr.join('-');
}

/**
 * 获取下一个兄弟元素的路径值
 */
function getNextIndexRoute(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var lastIndex = curIndexArr.pop();
  var endIndex = Number(lastIndex) + 1;
  curIndexArr.push('' + endIndex);
  return curIndexArr.join('-');
}

/**
 * 获取父元素的路径值和当前index
 */
function getParentIndexRoute_CurIndex(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var curIndex = curIndexArr.pop();
  return [curIndexArr.join('-'), curIndex];
}

/**
 * 将当前路径值向前移动一位
 */
function moveForward(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) - 1);
  return curIndexArr.join('-');
}

/**
 * 将当前路径值向后移动一位
 */
function moveBackward(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) + 1);
  return curIndexArr.join('-');
}

/**
 * metaElemAnalyzer: 根据当前的schema，统计当前json里面用到的元数据情况
 * 【方法参数说明】
 * schemaData: 必填项，schema数据
 * 【返回数据格式说明】
 * metaElemAnalyzer: {
 *   input: 3,
 *   color: 1,
 *   event: {
 *     emit: 1,
 *     on: 2
 *   },
 *   datasource: {
 *     local: 1,
 *     remote: 1,
 *     interfaceData: 2
 *   }
 * }
 */

/**
 * Object类型的schema元数据分析
 * */
function objectSchema2JsonData$1(jsonSchema, analyzerResult) {
  var curAnalyzerResult = analyzerResult || {};
  if (
    isObject(jsonSchema) &&
    jsonSchema.type === 'object' &&
    jsonSchema.properties
  ) {
    var curPropertyOrder = [];
    if (jsonSchema.propertyOrder) {
      curPropertyOrder = jsonSchema.propertyOrder;
    } else {
      curPropertyOrder = Object.keys(jsonSchema.properties);
    }
    curPropertyOrder.map(function (jsonKey) {
      var curSchema = jsonSchema.properties[jsonKey];
      curAnalyzerResult = metaElemAnalyzer(curSchema, curAnalyzerResult);
    });
  }
  return curAnalyzerResult;
}

/** 主方法 */
function metaElemAnalyzer(curJsonSchemaObj, analyzerResult) {
  // 根据analyzerResult是否为空，判断是否是最外层的调用
  var isFirstAnalyzer = !analyzerResult ? true : false;
  var curAnalyzerResult = analyzerResult || {};
  // 根据当前schem数据分析使用到的元数据情况
  if (curJsonSchemaObj && JSON.stringify(curJsonSchemaObj) !== '{}') {
    var curFormat = getCurrentFormat(curJsonSchemaObj);
    if (
      curFormat === 'object' ||
      curFormat === 'func' ||
      curFormat === 'style' ||
      curFormat === 'data'
    ) {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['object']) {
        curAnalyzerResult['object'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['object'] = 1;
      }
      curAnalyzerResult = objectSchema2JsonData$1(
        curJsonSchemaObj,
        curAnalyzerResult,
      );
    } else if (curFormat === 'array') {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['array']) {
        curAnalyzerResult['array'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['array'] = 1;
      }
      curJsonSchemaObj = curJsonSchemaObj.items;
      curAnalyzerResult = objectSchema2JsonData$1(
        curJsonSchemaObj,
        curAnalyzerResult,
      );
    } else {
      if (!isFirstAnalyzer && curAnalyzerResult[curFormat]) {
        curAnalyzerResult[curFormat] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult[curFormat] = 1;
      }
    }
  }
  return curAnalyzerResult;
}

/**
 * oldSchemaToNewSchema：旧版jsonSchema转新版jsonSchema
 * 新版新增propertyOrder属性（排序展示需要），因此旧版的required需要根据properties生成对应的propertyOrder属性
 * 备注：新版的title需要从description中获取值（旧版的title值使用的是description字段的值）
 * */

// 2020-07-29
function oldSchemaToNewSchemaV1(oldSchema) {
  var newJSONSchema = objClone(oldSchema); // 进行深拷贝，避免影响原有数据;
  // 1.根据原有的description值生成title值
  if (!newJSONSchema.title && newJSONSchema.description) {
    newJSONSchema.title = newJSONSchema.description;
  }
  // 2.当format为空时重新进行赋值
  if (!newJSONSchema.type) {
    newJSONSchema.type = getCurrentFormat(newJSONSchema);
  }
  // 3.不需要default属性的类型自动删除
  if (
    (newJSONSchema.type === 'quantity' ||
      newJSONSchema.type === 'array' ||
      newJSONSchema.type === 'datasource' ||
      newJSONSchema.type === 'event' ||
      newJSONSchema.type === 'object' ||
      newJSONSchema.type === 'radio' ||
      newJSONSchema.type === 'select') &&
    hasProperties(newJSONSchema.default)
  ) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
  }
  // 转换旧版的radio类型的数据结构
  if (newJSONSchema.type === 'radio') {
    newJSONSchema.type = 'string';
    if (newJSONSchema.enum && newJSONSchema.enumextra) {
      // 统一转换至items
      newJSONSchema.items = {
        type: 'string',
        enum: objClone(newJSONSchema.enum),
        enumextra: objClone(newJSONSchema.enumextra),
      };
      // 删除此前的enum、enumextra
      delete newJSONSchema.enum;
      delete newJSONSchema.enumextra;
    }
  }
  // 转换旧版的quantity类型的数据结构
  if (newJSONSchema.type === 'quantity') {
    var curProperties = newJSONSchema.properties;
    var newQuantitySchema = objClone(TypeDataList.quantity); // 新版quantity的schema数据对象
    if (
      curProperties.quantity &&
      isObject(curProperties.quantity) &&
      curProperties.quantity.default
    ) {
      var oldDefault = curProperties.quantity.default;
      // percent 自动转换成 %
      newQuantitySchema.properties.quantity.default =
        oldDefault === 'percent' ? '%' : oldDefault;
    }
    // 融合新版schema数据
    newJSONSchema = newQuantitySchema;
  }
  // 转换旧版的datasource类型的数据结构
  if (newJSONSchema.type === 'datasource') {
    var _curProperties = newJSONSchema.properties;
    // 先获取旧版的关键数据
    var typeProp = _curProperties.type && _curProperties.type.default;
    var dataProp = _curProperties.data && _curProperties.data.default;
    var filterProp = _curProperties.filter && _curProperties.filter.default;
    if (typeProp === 'local') {
      newJSONSchema = objClone(DataSourceTypeList.local);
      newJSONSchema.properties.data.default = dataProp
        ? objClone(dataProp)
        : '{}';
    } else {
      newJSONSchema = objClone(DataSourceTypeList.remote);
      newJSONSchema.properties.data.default = dataProp
        ? objClone(dataProp)
        : 'http://xxx';
    }
    newJSONSchema.properties.filter.default = filterProp
      ? objClone(filterProp)
      : '() => {}';
  }
  // 转换旧版的event类型的数据结构
  if (newJSONSchema.type === 'event') {
    var _curProperties2 = newJSONSchema.properties;
    // 先获取旧版的关键数据
    var eventType = _curProperties2.type && _curProperties2.type.default;
    // 重构Event的数据结构
    if (eventType === 'in' || eventType === 'on') {
      // 兼容旧版的'in'和新版的'on'
      // 注册类事件: 新版type改成'on'
      var eventFunc =
        (_curProperties2.filter && _curProperties2.filter.default) ||
        '() => {}';
      newJSONSchema = objClone(EventTypeDataList.on);
      if (_curProperties2.actionFunc && isObject(_curProperties2.actionFunc)) {
        newJSONSchema.properties.actionFunc.default =
          _curProperties2.actionFunc.default || objClone(eventFunc);
      }
    } else {
      // 其他，则默认为触发事件
      // 注册类事件: 新版type改成'emit'
      var _eventFunc =
        (_curProperties2.filter && _curProperties2.filter.default) || '{}';
      newJSONSchema = objClone(EventTypeDataList.emit);
      if (_curProperties2.eventData && isObject(_curProperties2.eventData)) {
        newJSONSchema.properties.eventData.default =
          _curProperties2.eventData.default || objClone(_eventFunc);
      }
    }
  }
  // 判断是否有propertyOrder属性
  if (newJSONSchema.properties) {
    if (!newJSONSchema.propertyOrder) {
      // 生成propertyOrder属性
      newJSONSchema.propertyOrder = Object.keys(newJSONSchema.properties);
    }
    // 继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map(function (jsonKey) {
      newJSONSchema.properties[jsonKey] = oldSchemaToNewSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  // 判断是否有items属性
  if (newJSONSchema.items) {
    // 6. 转换items中的数据
    newJSONSchema.items = oldSchemaToNewSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}

// 2024-10-05 之前的旧版转新版schema
function oldSchemaToNewSchema(oldSchema) {
  var newJSONSchema = objClone(oldSchema); // 进行深拷贝，避免影响原有数据;
  // 删除不需要的属性
  if (!newJSONSchema.required) {
    delete newJSONSchema.required;
  }
  if (newJSONSchema.type && newJSONSchema.type) {
    newJSONSchema.type = newJSONSchema.type;
  }
  // 不需要default属性的类型自动删除
  if (
    (newJSONSchema.type === 'quantity' ||
      newJSONSchema.type === 'array' ||
      newJSONSchema.type === 'datasource' ||
      newJSONSchema.type === 'event' ||
      newJSONSchema.type === 'object' ||
      newJSONSchema.type === 'radio' ||
      newJSONSchema.type === 'select') &&
    hasProperties(newJSONSchema.default)
  ) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
  }
  // 转换旧版的选择类型的数据结构
  if (
    newJSONSchema.type === 'radio' ||
    newJSONSchema.type === 'select' ||
    newJSONSchema.type === 'single-select'
  ) {
    if (
      newJSONSchema.items &&
      newJSONSchema.items.enum &&
      newJSONSchema.items.enumextra
    ) {
      newJSONSchema.options = [];
      newJSONSchema.items.enum.forEach(function (option, optionIndex) {
        newJSONSchema.options.push({
          label: newJSONSchema.items.enumextra[optionIndex] || option,
          value: option,
        });
      });
      // 删除此前的items
      delete newJSONSchema.items;
    }
  }
  // 判断是否有propertyOrder属性
  if (newJSONSchema.properties) {
    if (!newJSONSchema.propertyOrder) {
      // 生成propertyOrder属性
      newJSONSchema.propertyOrder = Object.keys(newJSONSchema.properties);
    }
    // 继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map(function (jsonKey) {
      newJSONSchema.properties[jsonKey] = oldSchemaToNewSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  if (newJSONSchema.type === 'array' && newJSONSchema.items) {
    // 转换items中的数据
    newJSONSchema.items = oldSchemaToNewSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}

/**
 * schema2Json：根据schema数据内容生成一份对应的json数据
 * 当前包含三个转换方法：baseSchema2JsonData、objectSchema2JsonData、arraySchema2JsonData
 * 【方法参数说明】
 * jsonSchema: schema数据对象，主要根据此对象生成对应的json数据
 * jsonData: json数据对象，会优先使用此jsonData对应的数值
 * */
/**
 * 基础类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function baseSchema2JsonData(jsonSchema, jsonData) {
  var curJsonData = '';
  var oldValue = jsonData;
  if (
    hasProperties(oldValue) &&
    hasProperties(jsonSchema.default) &&
    typeof oldValue !== typeof jsonSchema.default
  ) {
    // 表示当前数据类型发生变化，则丢弃旧版数据
    oldValue = undefined;
  }
  /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
  var curValue = hasProperties(oldValue) ? oldValue : jsonSchema.default;
  switch (jsonSchema.type) {
    case 'string':
      if (jsonSchema.type === 'typeSelect') {
        // 选择类型的字段直接使用schema中的数值
        curJsonData = jsonSchema.default;
      } else if (jsonSchema.type === 'color') {
        if (curValue === '#fff' || curValue === '#FFF') {
          curValue = '#ffffff'; // 避免出现#fff类型的值，type=color不能识别
        }
        curJsonData = curValue || '#ffffff';
      } else if (jsonSchema.type === 'json') {
        /** 转成json类型进行特殊处理
         * 需要保证json类型的数值是json对象 */
        var curJsonItemData = ''; // 字符串类型的json数据
        // 判断当前jsonData是否是对象类型
        if (isObject(jsonData) || isArray(jsonData)) {
          curJsonItemData = jsonData;
        } else if (isFunction(jsonData) || jsonData === '') {
          // 函数类型自动替换成默认的json数据"{}"
          curJsonItemData = {};
        } else {
          /** 当前的curJsonData是一个字符串，需要判断是否可以系列化成一个json对象
           * 如果不能系列化一个json对象，则自动转换成一个默认的json数据"{}"
           */
          try {
            // 进行格式化（检查是否是合格的json数据）
            curJsonItemData = JSON.parse(jsonData);
          } catch (err) {
            // 不合格的json数据自动转换成一个默认的json数据"{}"
            curJsonItemData = {};
          }
        }
        curJsonData = curJsonItemData;
      } else {
        // 其他类型允许出现空字符串
        curJsonData = hasProperties(curValue) ? curValue : '';
      }
      break;
    case 'boolean':
      curJsonData = hasProperties(curValue) ? curValue : false;
      break;
    case 'number':
      curJsonData = hasProperties(curValue) ? curValue : 1;
      break;
    default:
      curJsonData = hasProperties(curValue) ? curValue : '';
  }
  return curJsonData;
}

/**
 * Object类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function objectSchema2JsonData(jsonSchema, jsonData) {
  var curJsonData = {};
  var curType = getCurrentFormat(jsonSchema);
  if (isObject(jsonSchema) && jsonSchema.type === 'object') {
    var jsonItem = jsonSchema;
    var oldValue = jsonData;
    if (
      hasProperties(oldValue) &&
      hasProperties(jsonItem.default) &&
      typeof oldValue !== typeof jsonItem.default
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    var curValue = hasProperties(oldValue) ? oldValue : jsonItem.default;
    if (curType === 'dynamic-data') {
      // 动态数据源类型（固定格式的Object类型）
      curJsonData = objClone(EmptyDynamicDataCont);
      if (curValue && isObject(curValue) && JSON.stringify(curValue) !== '{}') {
        curJsonData = Object.assign(curJsonData, curValue);
      }
    } else if (curType === 'datasource') {
      // 数据源类型（固定格式的Object类型）
      if (
        jsonItem.properties &&
        jsonItem.properties.type &&
        jsonItem.properties.type.default &&
        jsonItem.properties.type.default === 'local'
      ) {
        // 本地数据源类型
        curJsonData = {
          data: '{}',
          filter: '() => {}',
        };
        // 读取旧值
        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }
        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        }
        // 纠正data中的默认数据
        if (curJsonData.data === 'http://xxx') {
          curJsonData.data = '{}';
        }
      } else {
        // 远程数据类型
        curJsonData = {
          data: 'http://xxx',
          filter: '() => {}',
        };
        // 读取旧值
        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }
        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        }
        // 纠正data中的默认数据
        if (curJsonData.data === '{}') {
          curJsonData.data = 'http://xxx';
        }
      }
    } else if (curType === 'event') {
      // 事件类型（固定格式的Object类型）
      if (
        jsonItem.properties &&
        jsonItem.properties.type &&
        jsonItem.properties.type.default &&
        jsonItem.properties.type.default === 'emit'
      ) {
        // 触发事件类型
        if (curValue && curValue.type === 'out') {
          curJsonData = {
            trigger: (curValue && curValue.filter) || 'eventName',
            // 兼容旧版数据
            eventData: '{}',
          };
        } else {
          curJsonData = {
            trigger: 'eventName',
            // 兼容旧版数据
            eventData: '{}',
          };
          // 读取旧值
          if (curValue && curValue.trigger) {
            curJsonData.trigger = curValue.trigger;
          }
          if (curValue && curValue.eventData) {
            curJsonData.eventData = curValue.eventData;
          }
        }
      } else {
        // 注册事件类型-触发事件类型
        if (curValue && curValue.type === 'in') {
          curJsonData = {
            register: 'eventName',
            actionFunc: (curValue && curValue.filter) || '() => {}', // 兼容旧版数据
          };
        } else {
          curJsonData = {
            register: 'eventName',
            // 兼容旧版数据
            actionFunc: '() => {}',
          };
          // 读取旧值
          if (curValue && curValue.register) {
            curJsonData.register = curValue.register;
          }
          if (curValue && curValue.actionFunc) {
            curJsonData.actionFunc = curValue.actionFunc;
          }
        }
      }
    } else if (jsonSchema.properties) {
      var curPropertyOrder = [];
      if (jsonSchema.propertyOrder) {
        curPropertyOrder = jsonSchema.propertyOrder;
      } else {
        curPropertyOrder = Object.keys(jsonSchema.properties);
      }
      // 其他非固定格式的Object类型
      curPropertyOrder.map(function (jsonKey) {
        var curJsonItem = jsonSchema.properties[jsonKey];
        var curOldValue = jsonData && jsonData[jsonKey];
        switch (curJsonItem.type) {
          case 'array':
            curJsonData[jsonKey] = arraySchema2JsonData(
              curJsonItem,
              curOldValue,
            );
            break;
          case 'object':
            // 普通对象类型
            curJsonData[jsonKey] = objectSchema2JsonData(
              curJsonItem,
              curOldValue,
            );
            break;
          default:
            // 其他基础类型
            curJsonData[jsonKey] = baseSchema2JsonData(
              curJsonItem,
              curOldValue,
            );
        }
      });
    }
  }
  return curJsonData;
}

/**
 * Array类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function arraySchema2JsonData(jsonSchema, jsonData) {
  var curJsonData = [];
  // 判断是否是数组类型
  if (jsonSchema && jsonSchema.type === 'array') {
    // Array数据对象类型
    var oldValue = jsonData;
    if (
      hasProperties(oldValue) &&
      hasProperties(jsonSchema.default) &&
      typeof oldValue !== typeof jsonSchema.default
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    var curValue = hasProperties(oldValue) ? oldValue : jsonSchema.default;
    if (jsonSchema.type === 'array') {
      if (isArray(curValue)) {
        curValue.map(function (arrItem) {
          curJsonData.push(objectSchema2JsonData(jsonSchema.items, arrItem));
        });
      } else {
        var childItems = objectSchema2JsonData(jsonSchema.items, curValue);
        curJsonData.push(childItems);
      }
    } else {
      // 考虑select类型（多选的数值也是以array对象记录）
      curJsonData = hasProperties(curValue) ? curValue : [];
    }
  }
  return curJsonData;
}

/**
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function schema2json(jsonSchema, jsonData) {
  var curJsonData = {};
  if (jsonSchema.type === 'object') {
    curJsonData = objectSchema2JsonData(jsonSchema, jsonData);
  } else if (jsonSchema.type === 'array') {
    curJsonData = arraySchema2JsonData(jsonSchema, jsonData);
  } else {
    curJsonData = baseSchema2JsonData(jsonSchema, jsonData);
  }
  return curJsonData;
}

/**
 * schemaMetaList: 当前JSON数据可视化提供的元数据清单
 * 11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、img、radio、 select）
 * 10个特殊类型组件（Object、Array、Json、datasource、DynamicData、Event、CodeArea、htmlArea、quantity）
 */

// 类型数据清单
var schemaMetaList = TypeDataList;

/**
 * dynamicDataAnalyzer: 根据当前的json，统计当前json里面用到的动态数据源情况
 * 【方法参数说明】
 * jsonData: json数据内容，必填项
 * 【返回数据格式说明】
 * dynamicDataAnalyzer:
 * {
  widget1: [
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        },
        pageId: {
          title: '页面id',
          scope: 'hash',
          name: 'pId',
          value: '111' // 默认值
        }
      },
    },
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        },
        pageId: {
          title: '页面id',
          scope: 'hash',
          name: 'pId',
          value: '111' // 默认值
        }
      }
    }
  ],
  widget2: [
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        }
      }
    }
  ]
}
 */
function dynamicDataAnalyzer(curJsonData, analyzerResult) {
  var curAnalyzerResult = analyzerResult || [];
  // 根据当前schema数据分析使用到的元数据情况
  if (curJsonData && JSON.stringify(curJsonData) !== '{}') {
    if (isObject(curJsonData)) {
      // const curJsonMap = Object.keys(curJsonData); // 动态数据类型的jsonData包含四个数值：type、config（dataName/body/filter）、data、localFilter
      // 判断是否是动态数据类型
      if (
        curJsonData.type &&
        curJsonData.type === 'remote' &&
        curJsonData.config &&
        isObject(curJsonData.config) &&
        curJsonData.config.dataName &&
        hasProperties(curJsonData.localFilter) &&
        hasProperties(curJsonData.data)
      ) {
        var apiParams = curJsonData.config.body;
        if (apiParams && !isObject(apiParams)) {
          try {
            apiParams = JSON.parse(apiParams);
          } catch (e) {
            apiParams = {};
          }
        }
        curAnalyzerResult.push({
          id: curJsonData.config.id,
          dataName: curJsonData.config.dataName,
          body: apiParams,
        });
      } else {
        var curJsonDataList = Object.keys(curJsonData);
        curJsonDataList.map(function (jsonKey) {
          dynamicDataAnalyzer(curJsonData[jsonKey], curAnalyzerResult);
        });
      }
    } else if (isArray(curJsonData)) {
      curJsonData.map(function (jsonDataItem) {
        dynamicDataAnalyzer(jsonDataItem, curAnalyzerResult);
      });
    }
  }
  return curAnalyzerResult;
}

/**
 * json2treeData: 根据当前的json数据，转换成treeData（供antd的TreeSelect使用）
 * 【方法参数说明】
 * mockData: json数据，必填项。
 * 【返回数据格式说明】
 * [
 {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
 {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
 ];
 */

/**
 *  DataRoute转真实数据路径
 * */
function dataRoute2dataPath(dataRoute, baseDataPath) {
  var dataPath = baseDataPath || 'data'; // 默认数据根路径值为data
  var dataRouteArr = dataRoute.split('-');
  dataRouteArr.map(function (path) {
    if (/^\d+$/.test(path)) {
      dataPath = dataPath + '[' + path + ']';
    } else {
      dataPath = dataPath + '.' + path;
    }
  });
  return dataPath;
}

/**
 *  mockData转treeData（供antd的TreeSelect使用）
 * */
function json2treeData(mockData, parentDataRoute) {
  var treeData = [];
  if (isObject(mockData)) {
    var mockDataProps = Object.keys(mockData);
    mockDataProps.map(function (propKey) {
      var mockDataItem = mockData[propKey];
      var curDataRoute = parentDataRoute
        ? parentDataRoute + '-' + propKey
        : propKey;
      if (isObject(mockDataItem) || isArray(mockDataItem)) {
        treeData.push({
          title: propKey,
          value: curDataRoute,
          key: curDataRoute,
          children: json2treeData(mockDataItem, curDataRoute),
        });
      } else {
        treeData.push({
          title: propKey,
          value: curDataRoute,
          key: curDataRoute,
        });
      }
    });
  } else if (isArray(mockData)) {
    mockData.map(function (mockDataItem, index) {
      var indexStr = index.toString();
      var curDataRoute = parentDataRoute
        ? parentDataRoute + '-' + index
        : indexStr;
      if (isObject(mockDataItem) || isArray(mockDataItem)) {
        treeData.push({
          title: indexStr,
          value: curDataRoute,
          key: curDataRoute,
          children: json2treeData(mockDataItem, curDataRoute),
        });
      } else {
        treeData.push({
          title: indexStr,
          value: curDataRoute,
          key: curDataRoute,
        });
      }
    });
  }
  return treeData;
}

// 内置的期望类型值
var valExpectType = {
  array: 'array',
  boolean: 'boolean',
  'box-style': 'object',
  codearea: 'string',
  color: 'string',
  datasource: 'object',
  date: 'string',
  'date-time': 'string',
  'dynamic-data': 'object',
  event: 'object',
  'func-body': 'string',
  htmlarea: 'string',
  image: 'string',
  input: 'string',
  json: 'string',
  number: 'number',
  object: 'object',
  quantity: 'string',
  radio: 'string',
  select: 'array',
  'single-select': 'string',
  textarea: 'string',
  'text-editor': 'string',
  time: 'string',
  url: 'string',
};

// 根据type获取对应元素的期望类型值
function getExpectType(type) {
  return valExpectType[type] || type;
}

// 注册新的期望类型值
function registerExpectType(type, valType) {
  if (valExpectType[type]) {
    console.warn(
      '\u5F53\u524D\u5DF2\u7ECF\u5B58\u5728' +
        type +
        '(' +
        valExpectType[type] +
        ')\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u8986\u76D6\u3002',
    );
    return;
  }
  valExpectType[type] = valType;
}

/**
 * 获取父元素的key路径值
 */
function getParentKeyRoute(curKeyRoute) {
  var curKeyArr = curKeyRoute.split('-');
  curKeyArr.pop();
  return curKeyArr.join('-');
}

/**
 * 获取父元素的key路径值和当前key
 */
function getParentKeyRoute_CurKey(curKeyRoute) {
  var curKeyArr = curKeyRoute.split('-');
  var curKey = curKeyArr.pop();
  return [curKeyArr.join('-'), curKey];
}

// JSONSchema关键字清单
var KeyWordList = [
  'key',
  'enum',
  'enumextra',
  'items',
  'input',
  'boolean',
  'number',
  'color',
  'url',
  'textarea',
  'text-editor',
  'radio',
  'single-select',
  'select',
  'date',
  'date-time',
  'time',
  'json',
  'codearea',
  'htmlarea',
  'quantity',
  'box-style',
  'dynamic-data',
  'datasource',
  'event',
  'array',
  'object',
];

export {
  DataSourceTypeList,
  EventTypeDataList,
  KeyWordList,
  TypeDataList,
  dataRoute2dataPath,
  dynamicDataAnalyzer,
  getCurPosition,
  getCurrentFormat,
  getExpectType,
  getJsonDataByKeyRoute,
  getNextIndexRoute,
  getParentIndexRoute,
  getParentIndexRoute_CurIndex,
  getParentKeyRoute,
  getParentKeyRoute_CurKey,
  getSchemaByIndexRoute,
  getSchemaByKeyRoute,
  hasProperties,
  indexRoute2keyRoute,
  isArray,
  isBoolean,
  isBoxSchemaData,
  isColor,
  isDateStr,
  isDateTimeStr,
  isEmptySchema,
  isEqual,
  isFunction,
  isNewSchemaData,
  isNumber,
  isObject,
  isQuantity,
  isSameParent,
  isSelect,
  isString,
  isStructuredSchema,
  isTimeStr,
  isURL,
  json2schema,
  json2treeData,
  keyRoute2indexRoute,
  metaElemAnalyzer,
  moveBackward,
  moveForward,
  objClone,
  oldSchemaToNewSchema,
  oldSchemaToNewSchemaV1,
  registerExpectType,
  schema2json,
  schemaMetaList,
};
