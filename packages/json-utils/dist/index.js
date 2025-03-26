/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define([], t)
      : 'object' == typeof exports
        ? (exports.JSONUtils = t())
        : (e.JSONUtils = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {
        n: function (t) {
          var r =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return e.d(r, { a: r }), r;
        },
        d: function (t, r) {
          for (var i in r)
            e.o(r, i) &&
              !e.o(t, i) &&
              Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        r: function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        },
      },
      t = {};
    e.r(t),
      e.d(t, {
        DataSourceTypeList: function () {
          return d;
        },
        EventTypeDataList: function () {
          return s;
        },
        KeyWordList: function () {
          return ve;
        },
        TypeDataList: function () {
          return c;
        },
        dataRoute2dataPath: function () {
          return de;
        },
        dynamicDataAnalyzer: function () {
          return se;
        },
        evalExpression: function () {
          return F;
        },
        getCurPosition: function () {
          return G;
        },
        getDefaultOptionVal: function () {
          return le;
        },
        getExpectType: function () {
          return z;
        },
        getJsonDataByKeyRoute: function () {
          return P;
        },
        getNextIndexRoute: function () {
          return te;
        },
        getParentIndexRoute: function () {
          return ee;
        },
        getParentIndexRoute_CurIndex: function () {
          return re;
        },
        getParentKeyRoute: function () {
          return be;
        },
        getParentKeyRoute_CurKey: function () {
          return me;
        },
        getSchemaByIndexRoute: function () {
          return I;
        },
        getSchemaByKeyRoute: function () {
          return M;
        },
        hasProperties: function () {
          return E;
        },
        indexRoute2keyRoute: function () {
          return _;
        },
        isArray: function () {
          return C;
        },
        isBoolean: function () {
          return m;
        },
        isColor: function () {
          return x;
        },
        isContainerSchema: function () {
          return Z;
        },
        isDateStr: function () {
          return v;
        },
        isDateTimeStr: function () {
          return h;
        },
        isEmptySchema: function () {
          return X;
        },
        isEqual: function () {
          return R;
        },
        isEqualByIdT: function () {
          return q;
        },
        isFunction: function () {
          return T;
        },
        isNewSchemaData: function () {
          return Y;
        },
        isNumber: function () {
          return b;
        },
        isObject: function () {
          return O;
        },
        isQuantity: function () {
          return S;
        },
        isSameParent: function () {
          return Q;
        },
        isSelect: function () {
          return j;
        },
        isString: function () {
          return f;
        },
        isStructuredSchema: function () {
          return H;
        },
        isTimeStr: function () {
          return g;
        },
        isURL: function () {
          return y;
        },
        json2schema: function () {
          return B;
        },
        json2treeData: function () {
          return ye;
        },
        keyRoute2indexRoute: function () {
          return U;
        },
        metaElemAnalyzer: function () {
          return V;
        },
        moveBackward: function () {
          return ae;
        },
        moveForward: function () {
          return ie;
        },
        objClone: function () {
          return N;
        },
        oldSchemaToNewSchema: function () {
          return $;
        },
        oldSchemaToNewSchemaV1: function () {
          return L;
        },
        registerExpectType: function () {
          return W;
        },
        schema2conditionValue: function () {
          return fe;
        },
        schema2json: function () {
          return ue;
        },
        schemaMetaList: function () {
          return ce;
        },
        truncate: function () {
          return k;
        },
        urlParse: function () {
          return w;
        },
        urlStringify: function () {
          return D;
        },
      });
    var r,
      i = require('lodash'),
      a = require('qs'),
      l = e.n(a),
      n = {
        type: 'event',
        title: '事件',
        isContainer: !1,
        properties: {
          type: {
            default: 'emit',
            type: 'select',
            options: [
              { label: 'on', value: 'on' },
              { label: 'emit', value: 'emit' },
            ],
            title: '事件类型',
          },
          trigger: {
            type: 'input',
            default: 'eventName',
            title: '触发事件',
            description: '用于输入触发事件的名称',
            placeholder: '请输入触发事件的名称',
          },
          eventData: {
            title: '事件数据',
            type: 'json',
            default: '{}',
            description: '传递给触发事件的数据对象',
          },
        },
        propertyOrder: ['type', 'trigger', 'eventData'],
      },
      o = {
        type: 'datasource',
        title: '数据源',
        isContainer: !1,
        properties: {
          type: {
            default: 'local',
            type: 'select',
            options: [
              { label: '本地数据', value: 'local' },
              { label: '接口数据', value: 'remote' },
            ],
            title: '数据源类型',
          },
          data: {
            title: '本地json数据',
            placeholder: '请输入静态json数据',
            type: 'json',
            default: '{}',
            description: '用于设置本地的静态json数据',
            isRequired: !0,
          },
          filter: {
            title: '过滤器',
            type: 'codearea',
            default: '() => {}',
            description: '用于定义过滤当前数据的函数',
            isRequired: !0,
          },
        },
        propertyOrder: ['type', 'data', 'filter'],
      },
      p =
        (((r = { type: 'object' }).type = 'datasource'),
        (r.title = '数据源'),
        (r.isContainer = !1),
        (r.properties = {
          type: {
            type: 'select',
            default: 'remote',
            options: [
              { label: '本地数据', value: 'local' },
              { label: '接口数据', value: 'remote' },
            ],
            title: '数据源类型',
          },
          data: {
            type: 'url',
            title: '远程json数据',
            placeholder: '请输入远程json数据源地址',
            default: 'http://xxx',
            isRequired: !0,
            description: '用于设置获取元素数据的请求地址',
          },
          filter: {
            type: 'codearea',
            title: '过滤器',
            default: '() => {}',
            description: '用于定义过滤当前数据的函数',
            isRequired: !0,
          },
        }),
        (r.propertyOrder = ['type', 'data', 'filter']),
        r),
      u = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      c = {
        jsonschema: {
          type: 'object',
          title: 'jsonSchemaObject',
          properties: {
            func: {
              type: 'object',
              title: '功能设置',
              properties: {
                a: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                },
              },
              propertyOrder: ['a'],
            },
            style: {
              type: 'object',
              title: '样式设置',
              properties: {
                b: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
              },
              propertyOrder: ['b'],
            },
            data: {
              type: 'data',
              title: '数据设置',
              properties: {
                c: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                },
              },
              propertyOrder: ['c'],
            },
          },
          propertyOrder: ['func', 'style', 'data'],
        },
        input: {
          title: '单文本框',
          type: 'input',
          default: '',
          description: '',
          placeholder: '',
        },
        boolean: {
          type: 'boolean',
          title: '布尔值',
          default: !1,
          description: '',
        },
        object: {
          type: 'object',
          title: '对象Object',
          description: '',
          properties: {
            a: {
              type: 'input',
              title: '单文本框',
              default: '',
              description: '',
              placeholder: '',
            },
          },
          propertyOrder: ['a'],
        },
        array: {
          type: 'array',
          title: '数组Array',
          description: '',
          items: {
            type: 'object',
            title: '数组项',
            description: '',
            properties: {
              name: {
                type: 'input',
                title: '名字',
                default: '',
                description: '',
                placeholder: '',
              },
            },
            propertyOrder: ['name'],
          },
        },
        'empty-array': {
          type: 'array',
          title: '数组Array',
          description: '',
          default: [],
          items: {
            type: 'object',
            title: '数组项',
            description: '',
            properties: {},
          },
        },
        'empty-object': {
          type: 'object',
          title: '对象Object',
          description: '',
          properties: {},
        },
        url: {
          type: 'url',
          title: '链接地址url',
          default: '',
          description: '',
          placeholder: '',
        },
        textarea: {
          type: 'textarea',
          title: '多行文本框',
          default: '',
          description: '',
          placeholder: '',
        },
        color: {
          type: 'color',
          title: '颜色color',
          default: '#ffffff',
          description: '',
        },
        image: {
          title: '图片',
          type: 'image',
          default: '',
          description: '上传图片',
          imgWidth: 200,
          imgHeight: 200,
          imgRatioReadOnly: !0,
        },
        number: {
          type: 'number',
          title: '数量number',
          default: 1,
          minimum: 0,
          maximum: 1e3,
          description: '',
        },
        'input-image': {
          title: '图片地址',
          type: 'input-image',
          description: '',
          accept: '.jpeg,.jpg,.png',
          multiple: !0,
        },
        json: {
          title: 'json数据',
          type: 'json',
          default: '{}',
          description: '',
        },
        codearea: {
          type: 'codearea',
          title: '函数类型',
          placeholder: '请输入函数方法',
          default: 'function func() { console.log("hello, world!"); }',
          description: '用于定义函数方法',
        },
        htmlarea: {
          title: '富文本',
          type: 'htmlarea',
          placeholder: '请输入html代码片段',
          default: '<p>hello,world!</p>',
          description: '用于放置html代码片段',
        },
        'text-editor': {
          type: 'text-editor',
          title: '富文本',
          default: '',
          description: '',
          placeholder: '',
        },
        date: {
          type: 'date',
          title: '日期Date',
          default: '',
          description: '',
          placeholder: '',
        },
        'date-time': {
          type: 'date-time',
          title: '日期时间',
          default: '',
          description: '',
          placeholder: '',
        },
        time: {
          type: 'time',
          title: '时间Time',
          default: '',
          description: '',
          placeholder: '',
        },
        quantity: {
          type: 'quantity',
          title: '单位计量',
          isContainer: !1,
          properties: {
            unit: {
              type: 'number',
              title: '单位数值',
              default: 50,
              minimum: 0,
              maximum: 1e3,
              description: '',
            },
            quantity: {
              type: 'select',
              default: 'px',
              options: [
                { label: 'px', value: 'px' },
                { label: 'rem', value: 'rem' },
                { label: 'em', value: 'em' },
                { label: '%', value: '%' },
              ],
              title: '单位类型',
            },
          },
          propertyOrder: ['unit', 'quantity'],
        },
        'box-style': {
          type: 'box-style',
          title: '盒子模型',
          isContainer: !1,
          properties: {
            unit: {
              title: '单位数值',
              type: 'input',
              default: '0',
              description: '',
            },
            quantity: {
              type: 'select',
              default: 'px',
              options: [
                { label: 'px', value: 'px' },
                { label: 'rem', value: 'rem' },
                { label: 'em', value: 'em' },
                { label: '%', value: '%' },
              ],
              title: '单位类型',
            },
          },
          propertyOrder: ['unit', 'quantity'],
        },
        'padding-margin': {
          type: 'padding-margin',
          title: '边距设置',
          isContainer: !1,
          properties: {
            margin: {
              title: '外边距',
              type: 'input',
              default: '0',
              description: '',
            },
            padding: {
              title: '内边距',
              type: 'input',
              default: '0',
              description: '',
            },
            quantity: {
              type: 'select',
              default: 'px',
              options: [
                { label: 'px', value: 'px' },
                { label: 'rem', value: 'rem' },
                { label: 'em', value: 'em' },
                { label: '%', value: '%' },
              ],
              title: '单位类型',
            },
          },
          propertyOrder: ['margin', 'padding', 'quantity'],
        },
        radio: {
          type: 'radio',
          title: '单选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          description: '',
        },
        select: {
          type: 'select',
          title: '下拉选择',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          description: '',
        },
        cascader: {
          type: 'cascader',
          title: '级联选择',
          options: [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [{ value: 'xihu', label: 'West Lake' }],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
                },
              ],
            },
          ],
          default: 'a',
          description: '',
          showSearch: !0,
          allowClear: !0,
        },
        checkboxes: {
          type: 'checkboxes',
          title: '多选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: ['a'],
          description: '',
        },
        'dynamic-data': {
          type: 'dynamic-data',
          title: '动态数据源',
          isContainer: !1,
          properties: {
            type: {
              default: 'local',
              type: 'select',
              options: [
                { label: '本地数据', value: 'local' },
                { label: '接口数据', value: 'remote' },
              ],
              title: '数据类型',
            },
            config: {
              title: '接口配置',
              type: 'object',
              description: '用于存放接口的配置数据(url、请求参数等)',
              isRequired: !0,
              properties: {
                dataName: {
                  default: 'local',
                  type: 'select',
                  options: [
                    { label: '本地数据', value: 'local' },
                    { label: '接口数据', value: 'remote' },
                  ],
                  title: '数据类型',
                },
                body: {
                  type: 'object',
                  title: '请求参数配置',
                  description: '用于配置当前接口的请求参数数值',
                  isRequired: !0,
                },
                filter: {
                  title: '过滤器函数体',
                  type: 'codearea',
                  default: 'return data;',
                  description: '用于定义过滤接口数据',
                  isRequired: !0,
                },
              },
              propertyOrder: ['dataName', 'body', 'filter'],
            },
            data: {
              title: '数据内容',
              type: 'json',
              default: '{}',
              description: '用于存放DynamicData的数据内容',
              isRequired: !0,
            },
            localFilter: {
              title: '过滤器',
              type: 'codearea',
              default: 'return data;',
              description: '用于定义过滤本地数据',
              isRequired: !0,
            },
          },
          propertyOrder: ['type', 'config', 'data', 'localFilter'],
        },
        datasource: o,
        event: n,
        'dynamic-config': {
          type: 'dynamic-config',
          title: '动态配置',
          description: '',
          isContainer: !1,
          properties: {
            type: {
              type: 'select',
              title: '数据来源',
              options: [
                { label: '模板直接设置', value: 'DevDefaults' },
                { label: 'mp后台配置', value: 'ContentStaticConfig' },
                { label: '内容Meta数据', value: 'Content' },
                { label: '全局配置数据', value: 'RuntimeConst' },
                { label: '资源中心配置', value: 'ResourceCenter' },
              ],
              default: 'DevDefaults',
              isConditionProp: !0,
              description:
                '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
            },
            value: {
              title: '数据值',
              type: 'input',
              default: '',
              description: '',
              placeholder: '',
              onShow:
                'type === "DevDefaults" || type === "Content" || type === "RuntimeConst"',
            },
            description: {
              title: '属性名称',
              type: 'input',
              default: '',
              description: '',
              placeholder: '',
              onShow:
                'type === "ContentStaticConfig" || type === "ResourceCenter"',
            },
            valueType: {
              type: 'radio',
              title: '配置方式',
              options: [
                { label: '填写', value: 'string' },
                { label: '选择', value: 'select' },
              ],
              default: 'string',
              isConditionProp: !0,
              description: '在MP后台或资源中心配置时的交互方式，推荐使用"选择"',
              onShow:
                'type === "ContentStaticConfig" || type === "ResourceCenter"',
            },
            range: {
              type: 'select',
              title: '可选项',
              multiple: !0,
              options: [],
              onShow:
                '(type === "ContentStaticConfig" || type === "ResourceCenter") && valueType === "select"',
              description: '这里会使用value中的配置选项作为options',
            },
          },
          propertyOrder: ['type', 'value', 'description', 'valueType', 'range'],
          showCodeViewBtn: !1,
        },
        'dynamic-object': {
          type: 'dynamic-object',
          title: '动态配置',
          description: '',
          isContainer: !1,
          properties: {
            type: {
              type: 'select',
              title: '数据来源',
              options: [
                { label: '模板直接设置', value: 'DevDefaults' },
                { label: 'mp后台配置', value: 'ContentStaticConfig' },
                { label: '内容Meta数据', value: 'Content' },
                { label: '全局配置数据', value: 'RuntimeConst' },
                { label: '资源中心配置', value: 'ResourceCenter' },
              ],
              default: 'DevDefaults',
              isConditionProp: !0,
              description:
                '目前支持的数据来源包括： 1)模版直接设置: 在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置: 选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据: 支持内容meta数据的获取，页面meta数据。 4)全局配置数据: 目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
            },
            value: {
              title: '数据值',
              type: 'input',
              default: '',
              description: '',
              placeholder: '',
              onShow: 'type === "Content" || type === "RuntimeConst"',
            },
            description: {
              title: '自定义配置名称',
              type: 'input',
              default: '主题包配置',
              description: '',
              placeholder: '',
              onShow:
                'type === "ContentStaticConfig" || type === "ResourceCenter"',
            },
            attrs: {
              type: 'array',
              title: '属性列表',
              description: 'Tab需要配置的属性',
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  attr: {
                    type: 'input',
                    title: '属性Key',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  description: {
                    title: '描述',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  value: {
                    title: '数值',
                    typeOn:
                      "type === 'image' ? 'input-image' : type === 'number' ? 'number' : 'input'",
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  type: {
                    type: 'select',
                    title: '属性类型',
                    options: [
                      { label: '图片类型', value: 'image' },
                      { label: '字符串', value: 'string' },
                      { label: '数字', value: 'number' },
                    ],
                    default: 'string',
                    description: '',
                  },
                },
                propertyOrder: ['attr', 'description', 'type', 'value'],
              },
              'minimum-child': 1,
              showCodeViewBtn: !1,
              onShow:
                'type === "DevDefaults" || type === "ContentStaticConfig" || type === "ResourceCenter"',
            },
          },
          propertyOrder: ['type', 'description', 'attrs', 'value'],
          showCodeViewBtn: !1,
          showKey: !0,
        },
        'dynamic-array': {
          type: 'dynamic-array',
          title: '动态数组',
          description: '',
          isContainer: !1,
          properties: {
            type: {
              type: 'select',
              title: '数据来源',
              options: [
                { label: '模板直接设置', value: 'DevDefaults' },
                { label: 'mp后台配置', value: 'ContentStaticConfig' },
                { label: '资源中心配置', value: 'ResourceCenter' },
              ],
              default: 'DevDefaults',
              isConditionProp: !0,
              description:
                '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
            },
            description: {
              title: '自定义配置名称',
              type: 'input',
              default: 'Tab全局配置',
              description: '',
              placeholder: '',
              onShow:
                'type === "ContentStaticConfig" || type === "ResourceCenter"',
            },
            tabNums: {
              title: 'Tab配置数',
              type: 'number',
              default: 1,
              description: '需要配置的Tab数量',
              placeholder: '',
              onShow:
                "type === 'ContentStaticConfig' || type === 'ResourceCenter'",
            },
            attrs: {
              type: 'array',
              title: 'Tab属性',
              description: 'Tab需要配置的属性',
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  attr: {
                    type: 'input',
                    title: '属性Key',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  description: {
                    title: '描述',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  tipText: {
                    title: '提示说明',
                    type: 'textarea',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                },
                propertyOrder: ['attr', 'description', 'tipText'],
              },
              'minimum-child': 1,
              onShow:
                "type === 'ContentStaticConfig' || type === 'ResourceCenter'",
              showCodeViewBtn: !1,
            },
            value: {
              type: 'array',
              title: 'Tab配置',
              description: '',
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  title: {
                    type: 'input',
                    title: '名称',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  id: {
                    title: 'id',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  value: {
                    title: '数值',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                },
                propertyOrder: ['title', 'value', 'id'],
              },
              'minimum-child': 1,
              onShow: "type === 'DevDefaults'",
              showCodeViewBtn: !1,
            },
          },
          propertyOrder: ['type', 'value', 'description', 'tabNums', 'attrs'],
          showCodeViewBtn: !1,
          showKey: !0,
        },
        'sohu-source': {
          type: 'sohu-source',
          title: '数据源',
          description: '',
          isContainer: !1,
          properties: {
            mainConfig: {
              type: 'object',
              title: '主要配置',
              description: '',
              isContainer: !1,
              properties: {
                type: {
                  type: 'select',
                  title: '数据来源',
                  isConditionProp: !0,
                  options: [
                    {
                      label: '模板自定义数据源',
                      value: 'RuntimeDataSelfDefine',
                    },
                    { label: 'mp后台配置', value: 'ContentStaticConfig' },
                    {
                      label: '请求当前页面数据',
                      value: 'RuntimeDataSelfContent',
                    },
                    { label: '资源中心配置', value: 'ResourceCenter' },
                  ],
                  default: 'RuntimeDataSelfDefine',
                  description: '',
                },
                description: {
                  title: '数据源名称',
                  type: 'input',
                  description: '',
                  placeholder: '',
                  onShow: 'type === "ContentStaticConfig"',
                },
                dataType: {
                  type: 'radio',
                  title: '请求方式',
                  default: !1,
                  options: [
                    { label: '批量请求', value: 'FROMCIS' },
                    { label: '组件内部请求', value: 'FROMCOMPCIS' },
                    { label: '不请求', value: !1 },
                  ],
                  description: '',
                },
                CONTENTID: {
                  title: '数据源ID',
                  type: 'input',
                  description: '',
                  placeholder: '',
                  onShow: 'type === "RuntimeDataSelfDefine"',
                },
                CONTENTTYPE: {
                  type: 'select',
                  title: '数据源类型',
                  options: [
                    { label: 'channel', value: 'channel' },
                    { label: 'topic', value: 'topic' },
                    { label: 'block', value: 'block' },
                  ],
                  description: '',
                  onShow: 'type === "RuntimeDataSelfDefine"',
                },
              },
              propertyOrder: [
                'type',
                'description',
                'dataType',
                'CONTENTID',
                'CONTENTTYPE',
              ],
              showCodeViewBtn: !1,
            },
            outConfig: {
              type: 'object',
              title: '出流配置',
              description: '',
              isContainer: !1,
              properties: {
                PRO: {
                  type: 'select',
                  title: '内容类型',
                  options: [
                    { label: '置顶+加精', value: '4' },
                    { label: '长效置顶', value: '5' },
                  ],
                  description: '',
                },
                FEEDTYPE: {
                  type: 'select',
                  title: '排序类型',
                  options: [
                    { label: '综合', value: 'XTOPIC_SYNTHETICAL' },
                    { label: '最新', value: 'XTOPIC_LATEST' },
                    { label: '相关', value: 'XTOPIC_RELATED' },
                  ],
                  description: '',
                },
                VIEW: {
                  type: 'select',
                  title: '数据裁剪',
                  options: [
                    { label: '相关推荐模式', value: 'articleFeedMode' },
                    { label: '文字链裁剪方式', value: 'textMode' },
                    { label: '短内容摘录方式', value: 'excerptMode' },
                    {
                      label: '互动（点赞/评论）裁剪方式',
                      value: 'interactMode',
                    },
                    { label: '评论文字链裁剪方式', value: 'commentTextMode' },
                    {
                      label: '摘录方式（无点赞）',
                      value: 'excerptCommentMode',
                    },
                    { label: '无限流卡片模式', value: 'dynamicFeedMode' },
                    { label: '时间线模式', value: 'timeLineMode' },
                    { label: '复合内容流模式', value: 'multiFeedMode' },
                    { label: '搜狐号推荐模式', value: 'recommendFeedMode' },
                    { label: '作者页内容流模式', value: 'operateFeedMode' },
                    { label: '标签内容流模式', value: 'tagsFeedMode' },
                    { label: '评论链裁剪方式', value: 'commentMode' },
                    { label: '标签摘录方式', value: 'excerptTagsMode' },
                    { label: '内容流模式', value: 'feedMode' },
                  ],
                  description: '',
                },
                CONTENTCONTEXT: {
                  type: 'select',
                  title: 'mKey参数',
                  options: [
                    {
                      label: '作者ID+栏目ID',
                      value: 'authorColumnId_${#authorColumnId}',
                    },
                    {
                      label: '账号ID',
                      value: 'accountId_${#contentData_account_id}',
                    },
                    { label: 'mkeyID', value: 'mid_${#mkeyConst_mid}' },
                    { label: 'mkey名称', value: 'mname_${#mkeyConst_mname}' },
                    {
                      label: '城市Code码',
                      value: 'cityCode_${#cityInfo_cityCode}',
                    },
                    {
                      label: '城市名称',
                      value: 'cityName_${#cityInfo_cityName}',
                    },
                    {
                      label: '焦点城市Code码',
                      value: 'focusCityCode_${#focusCityInfo_cityCode}',
                    },
                  ],
                  description: '',
                },
                CONTENTPARAMS: {
                  title: '动态参数',
                  type: 'json',
                  description: '请填写JSON格式的参数',
                  placeholder: '',
                },
              },
              propertyOrder: [
                'PRO',
                'FEEDTYPE',
                'VIEW',
                'CONTENTCONTEXT',
                'CONTENTPARAMS',
              ],
              showCodeViewBtn: !1,
            },
            otherConfig: {
              type: 'object',
              title: '选配内容',
              description: '',
              isContainer: !1,
              properties: {
                SIZE: {
                  type: 'number',
                  title: '容量',
                  minimum: 0,
                  maximum: 1e3,
                  description: '该位置区块需要的内容条数',
                },
                TITLE: {
                  title: '标题',
                  type: 'input',
                  description: '',
                  placeholder: '',
                },
                URL: {
                  type: 'url',
                  title: '更多跳转链接',
                  description: '该区块下点击“更多或箭头图标”后的跳转链接',
                  placeholder: '',
                },
                CODE: {
                  title: 'Code参数',
                  type: 'input',
                  description: '',
                  placeholder: '',
                  onShow: !1,
                },
              },
              propertyOrder: ['SIZE', 'TITLE', 'URL', 'CODE'],
              showCodeViewBtn: !1,
            },
          },
          propertyOrder: ['mainConfig', 'otherConfig', 'outConfig'],
          showCodeViewBtn: !1,
        },
        'sohu-event': {
          type: 'sohu-event',
          title: 'sohu组件事件',
          showCodeViewBtn: !1,
          isContainer: !1,
          properties: {
            globalEventMap: {
              type: 'object',
              title: '全局事件Map',
              description: '',
              properties: {
                eventCode: {
                  type: 'input',
                  title: '事件名称',
                  default: '',
                  description: '',
                  placeholder: '',
                  readOnly: !0,
                },
              },
              propertyOrder: ['eventCode'],
              showCodeViewBtn: !1,
            },
            event: {
              type: 'array',
              title: '监听事件',
              description: '当前组件监听事件列表',
              default: [],
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  name: {
                    type: 'input',
                    title: '事件',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  code: {
                    title: '事件code',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  listenName: {
                    title: '事件名称',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  desc: {
                    title: '事件描述',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                },
                propertyOrder: ['name', 'code', 'listenName', 'desc'],
              },
              showCodeViewBtn: !1,
            },
          },
          propertyOrder: ['globalEventMap', 'event'],
        },
        'sohu-ad': {
          type: 'object',
          title: '广告配置',
          description: '',
          properties: {
            type: {
              type: 'select',
              title: '数据源类型',
              isConditionProp: !0,
              options: [
                { label: '模板直接设置', value: 'DevDefaults' },
                { label: '资源中心配置', value: 'ResourceCenter' },
              ],
              description: '',
            },
            value: {
              type: 'object',
              title: '广告规则',
              description: '',
              onShow: 'type === "DevDefaults"',
              properties: {
                id: {
                  title: '广告ID',
                  type: 'number',
                  description: '',
                  placeholder: '',
                },
                rule: {
                  type: 'radio',
                  title: '规则类型',
                  isConditionProp: !0,
                  options: [
                    { label: '固定位置', value: 1 },
                    { label: '隔几出几', value: 2 },
                    { label: '固定位置隔几出几', value: 3 },
                  ],
                  description: '',
                },
                fixArray: {
                  type: 'select',
                  title: '固定位置',
                  description: '',
                  multiple: !0,
                  onShow: 'rule === 1 || rule === 3',
                  options: [
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7', value: 7 },
                    { label: '8', value: 8 },
                    { label: '9', value: 9 },
                    { label: '10', value: 10 },
                    { label: '11', value: 11 },
                    { label: '12', value: 12 },
                    { label: '13', value: 13 },
                    { label: '14', value: 14 },
                    { label: '15', value: 15 },
                    { label: '16', value: 16 },
                    { label: '17', value: 17 },
                    { label: '18', value: 18 },
                    { label: '19', value: 19 },
                    { label: '20', value: 20 },
                    { label: '21', value: 21 },
                    { label: '22', value: 22 },
                    { label: '23', value: 23 },
                    { label: '24', value: 24 },
                    { label: '25', value: 25 },
                    { label: '26', value: 26 },
                    { label: '27', value: 27 },
                    { label: '28', value: 28 },
                    { label: '29', value: 29 },
                    { label: '30', value: 30 },
                    { label: '31', value: 31 },
                    { label: '32', value: 32 },
                    { label: '33', value: 33 },
                    { label: '34', value: 34 },
                    { label: '35', value: 35 },
                    { label: '36', value: 36 },
                    { label: '37', value: 37 },
                    { label: '38', value: 38 },
                    { label: '39', value: 39 },
                    { label: '40', value: 40 },
                    { label: '41', value: 41 },
                    { label: '42', value: 42 },
                    { label: '43', value: 43 },
                    { label: '44', value: 44 },
                    { label: '45', value: 45 },
                    { label: '46', value: 46 },
                    { label: '47', value: 47 },
                    { label: '48', value: 48 },
                    { label: '49', value: 49 },
                    { label: '50', value: 50 },
                  ],
                },
                begin: {
                  type: 'number',
                  title: '开始位置',
                  minimum: '1',
                  maximum: '50',
                  description: '',
                  onShow: 'rule === 2 || rule === 3',
                },
                turn: {
                  type: 'number',
                  title: '间隔/隔',
                  minimum: '1',
                  maximum: '50',
                  description: '',
                  onShow: 'rule === 2 || rule === 3',
                },
                number: {
                  type: 'number',
                  title: '间隔/出',
                  minimum: '1',
                  maximum: '50',
                  description: '',
                  onShow: 'rule === 2 || rule === 3',
                },
                mergeType: {
                  type: 'radio',
                  title: '插入规则',
                  options: [
                    { label: '覆盖', value: 0 },
                    { label: '插入', value: 1 },
                  ],
                  description: '',
                },
              },
              propertyOrder: [
                'id',
                'rule',
                'fixArray',
                'begin',
                'turn',
                'number',
                'mergeType',
              ],
            },
            range: {
              type: 'array',
              title: '广告规则列表',
              description: '',
              onShow: 'type === "ResourceCenter"',
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  rule: {
                    type: 'radio',
                    title: '规则类型',
                    isConditionProp: !0,
                    options: [
                      { label: '固定位置', value: 1 },
                      { label: '隔几出几', value: 2 },
                      { label: '固定位置隔几出几', value: 3 },
                    ],
                    description: '',
                  },
                  fixArray: {
                    type: 'select',
                    title: '固定位置',
                    description: '',
                    onShow: 'rule === 1 || rule === 3',
                    multiple: !0,
                    options: [
                      { label: '1', value: 1 },
                      { label: '2', value: 2 },
                      { label: '3', value: 3 },
                      { label: '4', value: 4 },
                      { label: '5', value: 5 },
                      { label: '6', value: 6 },
                      { label: '7', value: 7 },
                      { label: '8', value: 8 },
                      { label: '9', value: 9 },
                      { label: '10', value: 10 },
                      { label: '11', value: 11 },
                      { label: '12', value: 12 },
                      { label: '13', value: 13 },
                      { label: '14', value: 14 },
                      { label: '15', value: 15 },
                      { label: '16', value: 16 },
                      { label: '17', value: 17 },
                      { label: '18', value: 18 },
                      { label: '19', value: 19 },
                      { label: '20', value: 20 },
                      { label: '21', value: 21 },
                      { label: '22', value: 22 },
                      { label: '23', value: 23 },
                      { label: '24', value: 24 },
                      { label: '25', value: 25 },
                      { label: '26', value: 26 },
                      { label: '27', value: 27 },
                      { label: '28', value: 28 },
                      { label: '29', value: 29 },
                      { label: '30', value: 30 },
                      { label: '31', value: 31 },
                      { label: '32', value: 32 },
                      { label: '33', value: 33 },
                      { label: '34', value: 34 },
                      { label: '35', value: 35 },
                      { label: '36', value: 36 },
                      { label: '37', value: 37 },
                      { label: '38', value: 38 },
                      { label: '39', value: 39 },
                      { label: '40', value: 40 },
                      { label: '41', value: 41 },
                      { label: '42', value: 42 },
                      { label: '43', value: 43 },
                      { label: '44', value: 44 },
                      { label: '45', value: 45 },
                      { label: '46', value: 46 },
                      { label: '47', value: 47 },
                      { label: '48', value: 48 },
                      { label: '49', value: 49 },
                      { label: '50', value: 50 },
                    ],
                  },
                  begin: {
                    type: 'number',
                    title: '开始位置',
                    minimum: '1',
                    maximum: '50',
                    description: '',
                    onShow: 'rule === 2 || rule === 3',
                  },
                  turn: {
                    type: 'number',
                    title: '间隔/隔',
                    minimum: '1',
                    maximum: '50',
                    description: '',
                    onShow: 'rule === 2 || rule === 3',
                  },
                  number: {
                    type: 'number',
                    title: '间隔/出',
                    minimum: '1',
                    maximum: '50',
                    description: '',
                    onShow: 'rule === 2 || rule === 3',
                  },
                  mergeType: {
                    type: 'radio',
                    title: '插入规则',
                    options: [
                      { label: '覆盖', value: 0 },
                      { label: '插入', value: 1 },
                    ],
                    description: '',
                  },
                },
                propertyOrder: [
                  'rule',
                  'fixArray',
                  'begin',
                  'turn',
                  'number',
                  'mergeType',
                ],
              },
            },
          },
          propertyOrder: ['type', 'value', 'range'],
        },
      },
      s = {
        on: {
          type: 'event',
          title: '事件',
          isContainer: !1,
          properties: {
            type: {
              default: 'on',
              type: 'select',
              options: [
                { label: 'on', value: 'on' },
                { label: 'emit', value: 'emit' },
              ],
              title: '事件类型',
            },
            register: {
              type: 'input',
              default: 'eventName',
              title: '注册事件',
              description: '用于输入注册事件的名称',
              placeholder: '请输入注册事件的名称',
            },
            actionFunc: {
              title: '执行函数',
              type: 'codearea',
              default: '() => {}',
              description: '',
            },
          },
          propertyOrder: ['type', 'register', 'actionFunc'],
        },
        emit: n,
      },
      d = { local: o, remote: p };
    function y(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function f(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function b(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function m(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function v(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function h(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function g(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function C(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function j(e) {
      if (!C(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!f(e[t])) return !1;
      return !0;
    }
    function O(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function S(e) {
      var t = !1;
      return c.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function x(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function T(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function w() {
      var e = {};
      return (
        location.search && (e = l().parse(location.search.substring(1))), e
      );
    }
    function D(e) {
      var t = '';
      return url && (t = l().stringify(e)), t;
    }
    function N(e) {
      return (0, i.cloneDeep)(e);
    }
    function R(e, t) {
      if ((E(e) && !E(t)) || (!E(e) && E(t)) || typeof e != typeof t) return !1;
      if (O(e) && (e.id !== t.id || e.lastUpdateTime !== t.lastUpdateTime))
        return !1;
      var r = new Date().getTime();
      return (
        !!(
          O(e) &&
          e.lastUpdateTime &&
          e.lastUpdateTime === t.lastUpdateTime &&
          r - e.lastUpdateTime < 500
        ) || (0, i.isEqual)(e, t)
      );
    }
    function q(e, t) {
      if ((E(e) && !E(t)) || (!E(e) && E(t)) || typeof e != typeof t) return !1;
      if (O(e) && (e.id !== t.id || e.lastUpdateTime !== t.lastUpdateTime))
        return !1;
      var r = new Date().getTime();
      return (
        !!(
          O(e) &&
          e.lastUpdateTime &&
          e.lastUpdateTime === t.lastUpdateTime &&
          r - e.lastUpdateTime < 500
        ) ||
        !(
          !O(e) ||
          !(
            (E(e.id) && e.id === t.id) ||
            (E(e.lastUpdateTime) && e.lastUpdateTime === t.lastUpdateTime)
          )
        ) ||
        (0, i.isEqual)(e, t)
      );
    }
    function E(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function k(e, t) {
      return (0, i.truncate)(e, t);
    }
    function F(e, t) {
      var r = t || {};
      if (!e) return !1;
      var i = new Function('data', 'with(data) { return (' + e + ');}'),
        a = '';
      try {
        a = i(r);
      } catch (t) {
        return console.warn('表达式运算出错: ' + e + '，报错信息：', t), a;
      }
      return a;
    }
    function P(e, t, r) {
      var i = t;
      if ((r && (i = N(t)), e))
        for (var a = e.split('-'), l = 0, n = a.length; l < n; l++) {
          var o = a[l];
          o && (i = i && i[o]);
        }
      return i;
    }
    function I(e, t, r) {
      var i = t;
      if ((r && (i = N(t)), e))
        for (var a = e.split('-'), l = 0, n = a.length; l < n; l++) {
          var o = a[l];
          if (
            '0' !== o ||
            ('array' !== i.type &&
              'radio' !== i.type &&
              'select' !== i.type &&
              'checkboxes' !== i.type) ||
            (!i.options && !i.items)
          ) {
            if (o) {
              var p = '0';
              i.propertyOrder
                ? (p = i.propertyOrder[o])
                : i.properties && (p = Object.keys(i.properties)[o]),
                (i = i.properties[p]);
            }
          } else i = i.options || i.items;
        }
      return i;
    }
    function M(e, t, r) {
      var i = t;
      if ((r && (i = N(t)), e && i))
        for (var a = e.split('-'), l = 0, n = a.length; l < n; l++) {
          var o = a[l];
          o && i.properties && (i = i.properties[o]);
        }
      return i;
    }
    function _(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), l = 0, n = a.length;
        l < n;
        l++
      ) {
        var o = a[l];
        if ('0' === o && r.items)
          (r = r.items), (i = i ? i + '-items' : 'items');
        else if ('0' === o && r.options)
          (r = r.options), (i = i ? i + '-options' : 'options');
        else if (o) {
          var p = '0';
          r.propertyOrder
            ? (p = r.propertyOrder[o])
            : r.properties && (p = Object.keys(r.properties)[o]),
            (r = r.properties[p]),
            (i = i ? i + '-' + p : p);
        }
      }
      return i;
    }
    function U(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), l = 0, n = a.length;
        l < n;
        l++
      ) {
        var o = a[l];
        if (o) {
          var p = -1;
          r.propertyOrder
            ? ((p = r.propertyOrder.indexOf(o)), (r = r.properties[o]))
            : r.properties
              ? ((p = Object.keys(r.properties).indexOf(o)),
                (r = r.properties[o]))
              : r.items
                ? ((p = 0), (r = r.items))
                : r.options && ((p = 0), (r = r.options)),
            (i = i ? i + '-' + p : p.toString());
        }
      }
      return i;
    }
    function B(e) {
      var t;
      return (
        (t =
          e && O(e)
            ? (function (e) {
                var t;
                if (O(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = C(e.data) || O(e.data) ? N(d.local) : N(d.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = N(s.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = N(s.on))
                        : e.quantity && S(e.quantity) && 2 === r.length
                          ? (t = N(c.quantity))
                          : ((t = N(c['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = B(i);
                            }));
                }
                return t;
              })(e)
            : e && C(e)
              ? (function (e) {
                  var t;
                  if (e && C(e))
                    if (j(e)) {
                      (t = N(c.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        i = e.length;
                      if (i > r)
                        for (var a = r, l = i; a < l; a++)
                          t.items.enumextra.push('选项' + e(a));
                    } else {
                      t = N(c['empty-array']);
                      var n = B(e[0]);
                      t.items.properties = n.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (m(e)) t = N(c.boolean);
                  else if (b(e)) t = N(c.number);
                  else if (y(e)) t = N(c.url);
                  else if (v(e)) t = N(c.date);
                  else if (h(e)) t = N(c['date-time']);
                  else if (g(e)) t = N(c.time);
                  else if (x(e)) t = N(c.color);
                  else
                    try {
                      t = b(JSON.parse(e)) ? N(c.input) : N(c.json);
                    } catch (r) {
                      t = e && e.length > 30 ? N(c.textarea) : N(c.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function A(e, t) {
      var r = t || {};
      return (
        O(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = V(i, r);
            },
          ),
        r
      );
    }
    function V(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var a = e.type;
        'object' === a || 'func' === a || 'style' === a || 'data' === a
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = A(e, i)))
          : 'array' === a
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = A((e = e.items), i)))
            : !r && i[a]
              ? (i[a] += 1)
              : r || (i[a] = 1);
      }
      return i;
    }
    function L(e) {
      var t = N(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !E(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: N(t.enum),
              enumextra: N(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          i = N(c.quantity);
        if (r.quantity && O(r.quantity) && r.quantity.default) {
          var a = r.quantity.default;
          i.properties.quantity.default = 'percent' === a ? '%' : a;
        }
        t = i;
      }
      if ('datasource' === t.type) {
        var l = t.properties,
          n = l.type && l.type.default,
          o = l.data && l.data.default,
          p = l.filter && l.filter.default;
        'local' === n
          ? ((t = N(d.local)).properties.data.default = o ? N(o) : '{}')
          : ((t = N(d.remote)).properties.data.default = o
              ? N(o)
              : 'http://xxx'),
          (t.properties.filter.default = p ? N(p) : '() => {}');
      }
      if ('event' === t.type) {
        var u = t.properties,
          y = u.type && u.type.default;
        if ('in' === y || 'on' === y) {
          var f = (u.filter && u.filter.default) || '() => {}';
          (t = N(s.on)),
            u.actionFunc &&
              O(u.actionFunc) &&
              (t.properties.actionFunc.default = u.actionFunc.default || N(f));
        } else {
          var b = (u.filter && u.filter.default) || '{}';
          (t = N(s.emit)),
            u.eventData &&
              O(u.eventData) &&
              (t.properties.eventData.default = u.eventData.default || N(b));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = $(t.properties[e]);
          })),
        t.items && (t.items = $(t.items)),
        t
      );
    }
    function $(e) {
      var t = N(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !E(t.default) ||
          delete t.default,
        ('radio' !== t.type &&
          'checkboxes' !== t.type &&
          'select' !== t.type) ||
          (t.items &&
            t.items.enum &&
            t.items.enumextra &&
            ((t.options = []),
            t.items.enum.forEach(function (e, r) {
              t.options.push({ label: t.items.enumextra[r] || e, value: e });
            }),
            delete t.items)),
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = $(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = $(t.items)),
        t
      );
    }
    require('mobx');
    var J,
      K =
        (((J = {
          array: 'array',
          boolean: 'boolean',
          'box-style': 'object',
          'padding-margin': 'object',
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
          'input-image': 'string',
          object: 'object',
          quantity: 'object',
          radio: 'string',
          select: 'array',
        }).select = 'string'),
        (J.textarea = 'string'),
        (J['text-editor'] = 'string'),
        (J.time = 'string'),
        (J.url = 'string'),
        (J['dynamic-config'] = 'object'),
        (J['dynamic-object'] = 'object'),
        (J['dynamic-array'] = 'object'),
        (J['sohu-source'] = 'object'),
        (J['sohu-event'] = 'object'),
        J);
    function z(e) {
      return K[e] || e;
    }
    function W(e, t) {
      K[e]
        ? console.warn('当前已经存在' + e + '(' + K[e] + ')，暂时不支持覆盖。')
        : (K[e] = t);
    }
    function X(e) {
      var t = !0;
      if (!e) return t;
      var r = e.type;
      return (
        (('object' === r &&
          e.properties &&
          e.propertyOrder &&
          e.propertyOrder.length > 0) ||
          ('array' === r &&
            e.items &&
            e.items.properties &&
            e.items.propertyOrder &&
            e.items.propertyOrder.length > 0) ||
          (e.type && 'array' !== e.type && 'object' !== e.type) ||
          e.type) &&
          (t = !1),
        t
      );
    }
    function Y(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function Z(e) {
      var t = !1,
        r = z(e.type),
        i = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && i && (t = !0), t;
    }
    function H(e) {
      var t = !0;
      return (
        'object' === e.type && e.propertyOrder && e.properties
          ? e.propertyOrder.map(function (r) {
              var i = e.properties[r];
              ('object' === e.type && i.propertyOrder && i.properties) ||
                (t = !1);
            })
          : (t = !1),
        t
      );
    }
    function Q(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function G(e, t) {
      for (
        var r = e.split('-'),
          i = t.split('-'),
          a = 'before',
          l = 0,
          n = (r.length > i.length ? i : r).length;
        l < n;
        l += 1
      )
        Number(r[l]) > Number(i[l]) && (a = 'after');
      return a;
    }
    function ee(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function te(e) {
      var t = e.split('-'),
        r = t.pop(),
        i = Number(r) + 1;
      return t.push('' + i), t.join('-');
    }
    function re(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function ie(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function ae(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function le(e, t) {
      var r = '',
        i = !1;
      if (!1 !== e.defaultActiveFirstOption && e.defaultActiveFirstOption)
        return (
          e.options && e.options[0] && ((r = e.options[0].value), (i = !0)),
          (t || e.multiple) && (r = i ? [r] : []),
          r
        );
    }
    function ne(e, t) {
      var r,
        i,
        a = void 0,
        l = t;
      E(l) &&
        E(e.default) &&
        (typeof l != typeof e.default ||
          ((r = l), (i = e.default), O(r) + '-' + C(r) != O(i) + '-' + C(i))) &&
        (l = void 0);
      var n = E(l) ? l : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          a = null != n ? n : le(e);
          break;
        case 'checkboxes':
          a = null != n ? n : le(e, !0);
          break;
        case 'color':
          ('#fff' !== n && '#FFF' !== n) || (n = '#ffffff'),
            (a = E(n) ? n : '#ffffff');
          break;
        case 'boolean':
          a = !!E(n) && n;
          break;
        case 'number':
          a = E(n) ? n : void 0;
          break;
        case 'json':
          var o = '';
          if (O(n) || C(n)) o = n;
          else if (T(n) || '' === n) o = {};
          else
            try {
              o = JSON.parse(n);
            } catch (e) {
              o = {};
            }
          a = o;
          break;
        default:
          a =
            'input' === e.type && '0' === e.default
              ? n || e.default
              : E(n)
                ? n
                : void 0;
      }
      return a;
    }
    function oe(e, t) {
      var r = {},
        i = e.type;
      if (O(e) && 'object' === z(e.type)) {
        var a = e,
          l = t;
        E(l) &&
          ((E(a.default) && typeof l != typeof e.default) || !O(l)) &&
          (l = void 0);
        var n = E(l) ? l : a.default;
        'dynamic-data' === i
          ? ((r = N(u)),
            n &&
              O(n) &&
              '{}' !== JSON.stringify(n) &&
              (r = Object.assign(r, n)))
          : 'datasource' === i
            ? a.properties &&
              a.properties.type &&
              a.properties.type.default &&
              'local' === a.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                n && n.data && (r.data = n.data),
                n && n.filter && (r.filter = n.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                n && n.data && (r.data = n.data),
                n && n.filter && (r.filter = n.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === i
              ? a.properties &&
                a.properties.type &&
                a.properties.type.default &&
                'emit' === a.properties.type.default
                ? n && 'out' === n.type
                  ? (r = {
                      trigger: (n && n.filter) || 'eventName',
                      eventData: '{}',
                    })
                  : ((r = { trigger: 'eventName', eventData: '{}' }),
                    n && n.trigger && (r.trigger = n.trigger),
                    n && n.eventData && (r.eventData = n.eventData))
                : n && 'in' === n.type
                  ? (r = {
                      register: 'eventName',
                      actionFunc: (n && n.filter) || '() => {}',
                    })
                  : ((r = { register: 'eventName', actionFunc: '() => {}' }),
                    n && n.register && (r.register = n.register),
                    n && n.actionFunc && (r.actionFunc = n.actionFunc))
              : !1 === e.isContainer && n && O(n) && '{}' !== JSON.stringify(n)
                ? (r = Object.assign(r, n))
                : void 0 === l && a.default && O(a.default)
                  ? (r = a.default)
                  : e.properties &&
                    (e.propertyOrder
                      ? e.propertyOrder
                      : Object.keys(e.properties)
                    ).map(function (i) {
                      var a = e.properties[i],
                        l = t && t[i];
                      switch (z(a.type)) {
                        case 'array':
                          r[i] = pe(a, l);
                          break;
                        case 'object':
                          r[i] = oe(a, l);
                          break;
                        default:
                          r[i] = ne(a, l);
                      }
                    });
      }
      return r;
    }
    function pe(e, t) {
      var r = [];
      if (e && 'array' === z(e.type)) {
        var i = t;
        E(i) &&
          ((E(e.default) && typeof i != typeof e.default) || !C(i)) &&
          (i = void 0);
        var a = E(i) ? i : e.default;
        if ('array' === z(e.type))
          if (C(a))
            a.map(function (t) {
              r.push(oe(e.items, t));
            });
          else if (a) r = a;
          else {
            var l = oe(e.items, a);
            r.push(l);
          }
        else r = E(a) ? a : [];
      }
      return r;
    }
    function ue(e, t) {
      return 'object' === z(e.type)
        ? oe(e, t)
        : 'array' === z(e.type)
          ? pe(e, t)
          : ne(e, t);
    }
    var ce = c;
    function se(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (O(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            O(e.config) &&
            e.config.dataName &&
            E(e.localFilter) &&
            E(e.data)
          ) {
            var i = e.config.body;
            if (i && !O(i))
              try {
                i = JSON.parse(i);
              } catch (e) {
                i = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: i });
          } else
            Object.keys(e).map(function (t) {
              se(e[t], r);
            });
        else
          C(e) &&
            e.map(function (e) {
              se(e, r);
            });
      return r;
    }
    function de(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function ye(e, t) {
      var r = [];
      return (
        O(e)
          ? Object.keys(e).map(function (i) {
              var a = e[i],
                l = t ? t + '-' + i : i;
              O(a) || C(a)
                ? r.push({ title: i, value: l, key: l, children: ye(a, l) })
                : r.push({ title: i, value: l, key: l });
            })
          : C(e) &&
            e.map(function (e, i) {
              var a = i.toString(),
                l = t ? t + '-' + i : a;
              O(e) || C(e)
                ? r.push({ title: a, value: l, key: l, children: ye(e, l) })
                : r.push({ title: a, value: l, key: l });
            }),
        r
      );
    }
    function fe(e, t) {
      var r = '';
      return (
        'object' === z(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (i) {
              var a = e.properties[i],
                l = t[i];
              ('array' === z(a.type) && 'object' === z(a.type)) ||
                (l &&
                  a.isConditionProp &&
                  (r.indexOf('-') > 0 ? (r += '-' + l) : (r = l)));
            },
          ),
        r
      );
    }
    function be(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function me(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var ve = [
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
      'select',
      'checkboxes',
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
    return t;
  })();
});
