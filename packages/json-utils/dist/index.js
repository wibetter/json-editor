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
          return x;
        },
        EventTypeDataList: function () {
          return S;
        },
        KeyWordList: function () {
          return ve;
        },
        TypeDataList: function () {
          return O;
        },
        dataRoute2dataPath: function () {
          return se;
        },
        dynamicDataAnalyzer: function () {
          return ce;
        },
        evalExpression: function () {
          return s;
        },
        getCurPosition: function () {
          return Q;
        },
        getDefaultOptionVal: function () {
          return ae;
        },
        getExpectType: function () {
          return z;
        },
        getJsonDataByKeyRoute: function () {
          return d;
        },
        getNextIndexRoute: function () {
          return ee;
        },
        getParentIndexRoute: function () {
          return G;
        },
        getParentIndexRoute_CurIndex: function () {
          return te;
        },
        getParentKeyRoute: function () {
          return fe;
        },
        getParentKeyRoute_CurKey: function () {
          return be;
        },
        getSchemaByIndexRoute: function () {
          return y;
        },
        getSchemaByKeyRoute: function () {
          return f;
        },
        hasProperties: function () {
          return u;
        },
        indexRoute2keyRoute: function () {
          return b;
        },
        isArray: function () {
          return k;
        },
        isBoolean: function () {
          return N;
        },
        isColor: function () {
          return M;
        },
        isContainerSchema: function () {
          return Y;
        },
        isDateStr: function () {
          return R;
        },
        isDateTimeStr: function () {
          return q;
        },
        isEmptySchema: function () {
          return W;
        },
        isEqual: function () {
          return p;
        },
        isFunction: function () {
          return _;
        },
        isNewSchemaData: function () {
          return X;
        },
        isNumber: function () {
          return D;
        },
        isObject: function () {
          return P;
        },
        isQuantity: function () {
          return I;
        },
        isSameParent: function () {
          return H;
        },
        isSelect: function () {
          return F;
        },
        isString: function () {
          return T;
        },
        isStructuredSchema: function () {
          return Z;
        },
        isTimeStr: function () {
          return E;
        },
        isURL: function () {
          return w;
        },
        json2schema: function () {
          return A;
        },
        json2treeData: function () {
          return de;
        },
        keyRoute2indexRoute: function () {
          return v;
        },
        metaElemAnalyzer: function () {
          return V;
        },
        moveBackward: function () {
          return ie;
        },
        moveForward: function () {
          return re;
        },
        objClone: function () {
          return o;
        },
        oldSchemaToNewSchema: function () {
          return $;
        },
        oldSchemaToNewSchemaV1: function () {
          return L;
        },
        registerExpectType: function () {
          return U;
        },
        schema2conditionValue: function () {
          return ye;
        },
        schema2json: function () {
          return pe;
        },
        schemaMetaList: function () {
          return ue;
        },
        truncate: function () {
          return c;
        },
        urlParse: function () {
          return l;
        },
        urlStringify: function () {
          return n;
        },
      });
    var r = require('lodash'),
      i = require('qs'),
      a = e.n(i);
    function l() {
      var e = {};
      return (
        location.search && (e = a().parse(location.search.substring(1))), e
      );
    }
    function n(e) {
      var t = '';
      return url && (t = a().stringify(e)), t;
    }
    function o(e) {
      return (0, r.cloneDeep)(e);
    }
    function p(e, t) {
      return (0, r.isEqual)(e, t);
    }
    function u(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function c(e, t) {
      return (0, r.truncate)(e, t);
    }
    function s(e, t) {
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
    function d(e, t, r) {
      var i = t;
      if ((r && (i = o(t)), e))
        for (var a = e.split('-'), l = 0, n = a.length; l < n; l++) {
          var p = a[l];
          p && (i = i && i[p]);
        }
      return i;
    }
    function y(e, t, r) {
      var i = t;
      if ((r && (i = o(t)), e))
        for (var a = e.split('-'), l = 0, n = a.length; l < n; l++) {
          var p = a[l];
          if (
            '0' !== p ||
            ('array' !== i.type &&
              'radio' !== i.type &&
              'select' !== i.type &&
              'checkboxes' !== i.type) ||
            (!i.options && !i.items)
          ) {
            if (p) {
              var u = '0';
              i.propertyOrder
                ? (u = i.propertyOrder[p])
                : i.properties && (u = Object.keys(i.properties)[p]),
                (i = i.properties[u]);
            }
          } else i = i.options || i.items;
        }
      return i;
    }
    function f(e, t, r) {
      var i = t;
      if ((r && (i = o(t)), e && i))
        for (var a = e.split('-'), l = 0, n = a.length; l < n; l++) {
          var p = a[l];
          p && i.properties && (i = i.properties[p]);
        }
      return i;
    }
    function b(e, t) {
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
    function v(e, t) {
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
    var m,
      h = {
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
      g = {
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
      C =
        (((m = { type: 'object' }).type = 'datasource'),
        (m.title = '数据源'),
        (m.isContainer = !1),
        (m.properties = {
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
        (m.propertyOrder = ['type', 'data', 'filter']),
        m),
      j = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      O = {
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
          default: 'a',
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
          default: 'a',
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
        datasource: g,
        event: h,
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
                },
                propertyOrder: ['attr', 'description'],
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
          title: '组件动态数据',
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
                    { label: '模板直接配置', value: 'RuntimeDataSelfDefine' },
                    { label: 'mp后台配置', value: 'ContentStaticConfig' },
                    {
                      label: '请求当前页面数据',
                      value: 'RuntimeDataSelfContent',
                    },
                    { label: '资源中心配置', value: 'ResourceCenter' },
                  ],
                  default: 'ContentStaticConfig',
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
                  options: [
                    { label: '批量请求', value: 'FROMCIS' },
                    { label: '组件内部请求', value: 'FROMCOMPCIS' },
                    { label: '不请求', value: 'false' },
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
                CODE: {
                  title: 'Code参数',
                  type: 'input',
                  description: '',
                  placeholder: '',
                },
                URL: {
                  type: 'url',
                  title: '跳转链接',
                  description: '',
                  placeholder: '',
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
      S = {
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
        emit: h,
      },
      x = { local: g, remote: C };
    function w(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function T(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function D(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function N(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function R(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function q(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function E(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function k(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function F(e) {
      if (!k(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!T(e[t])) return !1;
      return !0;
    }
    function P(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function I(e) {
      var t = !1;
      return O.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function M(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function _(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function A(e) {
      var t;
      return (
        (t =
          e && P(e)
            ? (function (e) {
                var t;
                if (P(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = k(e.data) || P(e.data) ? o(x.local) : o(x.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = o(S.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = o(S.on))
                        : e.quantity && I(e.quantity) && 2 === r.length
                          ? (t = o(O.quantity))
                          : ((t = o(O['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = A(i);
                            }));
                }
                return t;
              })(e)
            : e && k(e)
              ? (function (e) {
                  var t;
                  if (e && k(e))
                    if (F(e)) {
                      (t = o(O.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        i = e.length;
                      if (i > r)
                        for (var a = r, l = i; a < l; a++)
                          t.items.enumextra.push('选项' + e(a));
                    } else {
                      t = o(O['empty-array']);
                      var n = A(e[0]);
                      t.items.properties = n.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (N(e)) t = o(O.boolean);
                  else if (D(e)) t = o(O.number);
                  else if (w(e)) t = o(O.url);
                  else if (R(e)) t = o(O.date);
                  else if (q(e)) t = o(O['date-time']);
                  else if (E(e)) t = o(O.time);
                  else if (M(e)) t = o(O.color);
                  else
                    try {
                      t = D(JSON.parse(e)) ? o(O.input) : o(O.json);
                    } catch (r) {
                      t = e && e.length > 30 ? o(O.textarea) : o(O.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function B(e, t) {
      var r = t || {};
      return (
        P(e) &&
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
            (i = B(e, i)))
          : 'array' === a
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = B((e = e.items), i)))
            : !r && i[a]
              ? (i[a] += 1)
              : r || (i[a] = 1);
      }
      return i;
    }
    function L(e) {
      var t = o(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !u(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: o(t.enum),
              enumextra: o(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          i = o(O.quantity);
        if (r.quantity && P(r.quantity) && r.quantity.default) {
          var a = r.quantity.default;
          i.properties.quantity.default = 'percent' === a ? '%' : a;
        }
        t = i;
      }
      if ('datasource' === t.type) {
        var l = t.properties,
          n = l.type && l.type.default,
          p = l.data && l.data.default,
          c = l.filter && l.filter.default;
        'local' === n
          ? ((t = o(x.local)).properties.data.default = p ? o(p) : '{}')
          : ((t = o(x.remote)).properties.data.default = p
              ? o(p)
              : 'http://xxx'),
          (t.properties.filter.default = c ? o(c) : '() => {}');
      }
      if ('event' === t.type) {
        var s = t.properties,
          d = s.type && s.type.default;
        if ('in' === d || 'on' === d) {
          var y = (s.filter && s.filter.default) || '() => {}';
          (t = o(S.on)),
            s.actionFunc &&
              P(s.actionFunc) &&
              (t.properties.actionFunc.default = s.actionFunc.default || o(y));
        } else {
          var f = (s.filter && s.filter.default) || '{}';
          (t = o(S.emit)),
            s.eventData &&
              P(s.eventData) &&
              (t.properties.eventData.default = s.eventData.default || o(f));
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
      var t = o(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !u(t.default) ||
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
    function U(e, t) {
      K[e]
        ? console.warn('当前已经存在' + e + '(' + K[e] + ')，暂时不支持覆盖。')
        : (K[e] = t);
    }
    function W(e) {
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
    function X(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function Y(e) {
      var t = !1,
        r = z(e.type),
        i = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && i && (t = !0), t;
    }
    function Z(e) {
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
    function H(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function Q(e, t) {
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
    function G(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ee(e) {
      var t = e.split('-'),
        r = t.pop(),
        i = Number(r) + 1;
      return t.push('' + i), t.join('-');
    }
    function te(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function re(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function ie(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function ae(e, t) {
      var r = '',
        i = !1;
      if (!1 !== e.defaultActiveFirstOption && e.defaultActiveFirstOption)
        return (
          e.options && e.options[0] && ((r = e.options[0].value), (i = !0)),
          (t || e.multiple) && (r = i ? [r] : []),
          r
        );
    }
    function le(e, t) {
      var r,
        i,
        a = '',
        l = t;
      u(l) &&
        u(e.default) &&
        (typeof l != typeof e.default ||
          ((r = l), (i = e.default), P(r) + '-' + k(r) != P(i) + '-' + k(i))) &&
        (l = void 0);
      var n = u(l) ? l : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          a = n || ae(e);
          break;
        case 'checkboxes':
          a = n || ae(e, !0);
          break;
        case 'color':
          ('#fff' !== n && '#FFF' !== n) || (n = '#ffffff'),
            (a = u(n) ? n : '#ffffff');
          break;
        case 'boolean':
          a = !!u(n) && n;
          break;
        case 'number':
          a = u(n) ? n : void 0;
          break;
        case 'json':
          var o = '';
          if (P(n) || k(n)) o = n;
          else if (_(n) || '' === n) o = {};
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
              : u(n)
                ? n
                : void 0;
      }
      return a;
    }
    function ne(e, t) {
      var r = {},
        i = e.type;
      if (P(e) && 'object' === z(e.type)) {
        var a = e,
          l = t;
        u(l) &&
          ((u(a.default) && typeof l != typeof e.default) || !P(l)) &&
          (l = void 0);
        var n = u(l) ? l : a.default;
        'dynamic-data' === i
          ? ((r = o(j)),
            n &&
              P(n) &&
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
              : !1 === e.isContainer && n && P(n) && '{}' !== JSON.stringify(n)
                ? (r = Object.assign(r, n))
                : void 0 === l && a.default && P(a.default)
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
                          r[i] = oe(a, l);
                          break;
                        case 'object':
                          r[i] = ne(a, l);
                          break;
                        default:
                          r[i] = le(a, l);
                      }
                    });
      }
      return r;
    }
    function oe(e, t) {
      var r = [];
      if (e && 'array' === z(e.type)) {
        var i = t;
        u(i) &&
          ((u(e.default) && typeof i != typeof e.default) || !k(i)) &&
          (i = void 0);
        var a = u(i) ? i : e.default;
        if ('array' === z(e.type))
          if (k(a))
            a.map(function (t) {
              r.push(ne(e.items, t));
            });
          else if (a) r = a;
          else {
            var l = ne(e.items, a);
            r.push(l);
          }
        else r = u(a) ? a : [];
      }
      return r;
    }
    function pe(e, t) {
      return 'object' === z(e.type)
        ? ne(e, t)
        : 'array' === z(e.type)
          ? oe(e, t)
          : le(e, t);
    }
    var ue = O;
    function ce(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (P(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            P(e.config) &&
            e.config.dataName &&
            u(e.localFilter) &&
            u(e.data)
          ) {
            var i = e.config.body;
            if (i && !P(i))
              try {
                i = JSON.parse(i);
              } catch (e) {
                i = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: i });
          } else
            Object.keys(e).map(function (t) {
              ce(e[t], r);
            });
        else
          k(e) &&
            e.map(function (e) {
              ce(e, r);
            });
      return r;
    }
    function se(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function de(e, t) {
      var r = [];
      return (
        P(e)
          ? Object.keys(e).map(function (i) {
              var a = e[i],
                l = t ? t + '-' + i : i;
              P(a) || k(a)
                ? r.push({ title: i, value: l, key: l, children: de(a, l) })
                : r.push({ title: i, value: l, key: l });
            })
          : k(e) &&
            e.map(function (e, i) {
              var a = i.toString(),
                l = t ? t + '-' + i : a;
              P(e) || k(e)
                ? r.push({ title: a, value: l, key: l, children: de(e, l) })
                : r.push({ title: a, value: l, key: l });
            }),
        r
      );
    }
    function ye(e, t) {
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
    function fe(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function be(e) {
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
