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
          return c;
        },
        KeyWordList: function () {
          return ve;
        },
        TypeDataList: function () {
          return s;
        },
        dataRoute2dataPath: function () {
          return ce;
        },
        evalExpression: function () {
          return C;
        },
        getCurPosition: function () {
          return Y;
        },
        getDefaultOptionVal: function () {
          return ne;
        },
        getExpectType: function () {
          return H;
        },
        getJsonDataByKeyRoute: function () {
          return w;
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
          return ye;
        },
        getParentKeyRoute_CurKey: function () {
          return me;
        },
        getSchemaByIndexRoute: function () {
          return E;
        },
        getSchemaByKeyRoute: function () {
          return A;
        },
        hasProperties: function () {
          return U;
        },
        indexRoute2keyRoute: function () {
          return L;
        },
        isArray: function () {
          return j;
        },
        isBoolean: function () {
          return v;
        },
        isColor: function () {
          return T;
        },
        isContainerSchema: function () {
          return G;
        },
        isDateStr: function () {
          return b;
        },
        isDateTimeStr: function () {
          return g;
        },
        isEmptySchema: function () {
          return W;
        },
        isEqual: function () {
          return F;
        },
        isEqualByIdT: function () {
          return N;
        },
        isFunction: function () {
          return S;
        },
        isNewSchemaData: function () {
          return Z;
        },
        isNumber: function () {
          return m;
        },
        isObject: function () {
          return x;
        },
        isQuantity: function () {
          return q;
        },
        isSameParent: function () {
          return X;
        },
        isSelect: function () {
          return O;
        },
        isString: function () {
          return y;
        },
        isStructuredSchema: function () {
          return Q;
        },
        isTimeStr: function () {
          return h;
        },
        isURL: function () {
          return f;
        },
        json2schema: function () {
          return I;
        },
        json2treeData: function () {
          return de;
        },
        keyRoute2indexRoute: function () {
          return J;
        },
        metaElemAnalyzer: function () {
          return B;
        },
        moveBackward: function () {
          return ae;
        },
        moveForward: function () {
          return ie;
        },
        objClone: function () {
          return R;
        },
        oldSchemaToNewSchema: function () {
          return _;
        },
        oldSchemaToNewSchemaV1: function () {
          return K;
        },
        registerExpectType: function () {
          return V;
        },
        schema2conditionValue: function () {
          return fe;
        },
        schema2json: function () {
          return ue;
        },
        schemaMetaList: function () {
          return se;
        },
        truncate: function () {
          return P;
        },
        urlParse: function () {
          return k;
        },
        urlStringify: function () {
          return D;
        },
      });
    var r,
      i = require('lodash'),
      a = require('qs'),
      n = e.n(a),
      o = {
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
      p = {
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
      l =
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
        config: {
          url: '',
          method: 'get',
          headers: {},
          data: {},
          dataType: 'json',
        },
        data: '{}',
        localFilter: 'return data;',
      },
      s = {
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
              type: 'api',
              description: '用于存放接口的配置数据(url、请求参数等)',
              isRequired: !0,
              properties: {
                url: {
                  type: 'url',
                  title: '请求地址',
                  default: '',
                  description: 'API 的 URL',
                  isRequired: !0,
                },
                method: {
                  type: 'select',
                  title: '请求方式',
                  default: 'get',
                  options: [
                    { label: 'GET', value: 'get' },
                    { label: 'POST', value: 'post' },
                    { label: 'PUT', value: 'put' },
                    { label: 'PATCH', value: 'patch' },
                    { label: 'DELETE', value: 'delete' },
                  ],
                  isRequired: !0,
                },
                headers: {
                  type: 'json',
                  title: '请求头',
                  default: '{}',
                  description: '请求头对象',
                },
                data: {
                  type: 'json',
                  title: '请求参数',
                  default: '{}',
                  description: '请求体或查询参数',
                },
                dataType: {
                  type: 'select',
                  title: '数据格式',
                  default: 'json',
                  options: [
                    { label: 'JSON', value: 'json' },
                    { label: 'FormData', value: 'form-data' },
                    { label: 'Form', value: 'form' },
                  ],
                },
                cache: {
                  type: 'number',
                  title: '缓存时间',
                  default: void 0,
                  description: '缓存时间（ms），不设置则不缓存',
                },
              },
              propertyOrder: [
                'url',
                'method',
                'headers',
                'data',
                'dataType',
                'cache',
              ],
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
        datasource: p,
        event: o,
        api: {
          type: 'api',
          title: 'API 配置',
          isContainer: !1,
          properties: {
            url: {
              type: 'url',
              title: '请求地址',
              default: '',
              description: 'API 的 URL',
              isRequired: !0,
            },
            method: {
              type: 'select',
              title: '请求方式',
              default: 'get',
              options: [
                { label: 'GET', value: 'get' },
                { label: 'POST', value: 'post' },
                { label: 'PUT', value: 'put' },
                { label: 'DELETE', value: 'delete' },
              ],
              isRequired: !0,
            },
            headers: {
              type: 'json',
              title: '请求头',
              default: '{}',
              description: '请求头对象',
            },
            data: {
              type: 'json',
              title: '请求参数',
              default: '{}',
              description: '请求体或查询参数',
            },
          },
          propertyOrder: ['url', 'method', 'headers', 'data'],
        },
      },
      c = {
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
        emit: o,
      },
      d = { local: p, remote: l };
    function f(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function y(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function m(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function v(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function b(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function g(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function h(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function j(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function O(e) {
      if (!j(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!y(e[t])) return !1;
      return !0;
    }
    function x(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function q(e) {
      var t = !1;
      return s.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function T(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function S(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function k() {
      var e = {};
      return (
        location.search && (e = n().parse(location.search.substring(1))), e
      );
    }
    function D(e) {
      var t = '';
      return url && (t = n().stringify(e)), t;
    }
    function R(e) {
      return (0, i.cloneDeep)(e);
    }
    function F(e, t) {
      if ((U(e) && !U(t)) || (!U(e) && U(t)) || typeof e != typeof t) return !1;
      if (x(e) && (e.id !== t.id || e.lastUpdateTime !== t.lastUpdateTime))
        return !1;
      var r = new Date().getTime();
      return (
        !!(
          x(e) &&
          e.lastUpdateTime &&
          e.lastUpdateTime === t.lastUpdateTime &&
          r - e.lastUpdateTime < 500
        ) || (0, i.isEqual)(e, t)
      );
    }
    function N(e, t) {
      if ((U(e) && !U(t)) || (!U(e) && U(t)) || typeof e != typeof t) return !1;
      if (x(e) && (e.id !== t.id || e.lastUpdateTime !== t.lastUpdateTime))
        return !1;
      var r = new Date().getTime();
      return (
        !!(
          x(e) &&
          e.lastUpdateTime &&
          e.lastUpdateTime === t.lastUpdateTime &&
          r - e.lastUpdateTime < 500
        ) ||
        !(
          !x(e) ||
          !(
            (U(e.id) && e.id === t.id) ||
            (U(e.lastUpdateTime) && e.lastUpdateTime === t.lastUpdateTime)
          )
        ) ||
        (0, i.isEqual)(e, t)
      );
    }
    function U(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function P(e, t) {
      return (0, i.truncate)(e, t);
    }
    function C(e, t) {
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
    function w(e, t, r) {
      var i = t;
      if ((r && (i = R(t)), e))
        for (var a = e.split('-'), n = 0, o = a.length; n < o; n++) {
          var p = a[n];
          p && (i = i && i[p]);
        }
      return i;
    }
    function E(e, t, r) {
      var i = t;
      if ((r && (i = R(t)), e))
        for (var a = e.split('-'), n = 0, o = a.length; n < o; n++) {
          var p = a[n];
          if (
            '0' !== p ||
            ('array' !== i.type &&
              'radio' !== i.type &&
              'select' !== i.type &&
              'checkboxes' !== i.type) ||
            (!i.options && !i.items)
          ) {
            if (p) {
              var l = '0';
              i.propertyOrder
                ? (l = i.propertyOrder[p])
                : i.properties && (l = Object.keys(i.properties)[p]),
                (i = i.properties[l]);
            }
          } else i = i.options || i.items;
        }
      return i;
    }
    function A(e, t, r) {
      var i = t;
      if ((r && (i = R(t)), e && i))
        for (var a = e.split('-'), n = 0, o = a.length; n < o; n++) {
          var p = a[n];
          p && i.properties && (i = i.properties[p]);
        }
      return i;
    }
    function L(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), n = 0, o = a.length;
        n < o;
        n++
      ) {
        var p = a[n];
        if ('0' === p && r.items)
          (r = r.items), (i = i ? i + '-items' : 'items');
        else if ('0' === p && r.options)
          (r = r.options), (i = i ? i + '-options' : 'options');
        else if (p) {
          var l = '0';
          r.propertyOrder
            ? (l = r.propertyOrder[p])
            : r.properties && (l = Object.keys(r.properties)[p]),
            (r = r.properties[l]),
            (i = i ? i + '-' + l : l);
        }
      }
      return i;
    }
    function J(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), n = 0, o = a.length;
        n < o;
        n++
      ) {
        var p = a[n];
        if (p) {
          var l = -1;
          r.propertyOrder
            ? ((l = r.propertyOrder.indexOf(p)), (r = r.properties[p]))
            : r.properties
              ? ((l = Object.keys(r.properties).indexOf(p)),
                (r = r.properties[p]))
              : r.items
                ? ((l = 0), (r = r.items))
                : r.options && ((l = 0), (r = r.options)),
            (i = i ? i + '-' + l : l.toString());
        }
      }
      return i;
    }
    function I(e) {
      var t;
      return (
        (t =
          e && x(e)
            ? (function (e) {
                var t;
                if (x(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = j(e.data) || x(e.data) ? R(d.local) : R(d.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = R(c.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = R(c.on))
                        : e.quantity && q(e.quantity) && 2 === r.length
                          ? (t = R(s.quantity))
                          : ((t = R(s['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = I(i);
                            }));
                }
                return t;
              })(e)
            : e && j(e)
              ? (function (e) {
                  var t;
                  if (e && j(e))
                    if (O(e)) {
                      (t = R(s.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        i = e.length;
                      if (i > r)
                        for (var a = r, n = i; a < n; a++)
                          t.items.enumextra.push('选项' + e(a));
                    } else {
                      t = R(s['empty-array']);
                      var o = I(e[0]);
                      t.items.properties = o.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (v(e)) t = R(s.boolean);
                  else if (m(e)) t = R(s.number);
                  else if (f(e)) t = R(s.url);
                  else if (b(e)) t = R(s.date);
                  else if (g(e)) t = R(s['date-time']);
                  else if (h(e)) t = R(s.time);
                  else if (T(e)) t = R(s.color);
                  else
                    try {
                      t = m(JSON.parse(e)) ? R(s.input) : R(s.json);
                    } catch (r) {
                      t = e && e.length > 30 ? R(s.textarea) : R(s.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function $(e, t) {
      var r = t || {};
      return (
        x(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = B(i, r);
            },
          ),
        r
      );
    }
    function B(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var a = e.type;
        'object' === a || 'func' === a || 'style' === a || 'data' === a
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = $(e, i)))
          : 'array' === a
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = $((e = e.items), i)))
            : !r && i[a]
              ? (i[a] += 1)
              : r || (i[a] = 1);
      }
      return i;
    }
    function K(e) {
      var t = R(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !U(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: R(t.enum),
              enumextra: R(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          i = R(s.quantity);
        if (r.quantity && x(r.quantity) && r.quantity.default) {
          var a = r.quantity.default;
          i.properties.quantity.default = 'percent' === a ? '%' : a;
        }
        t = i;
      }
      if ('datasource' === t.type) {
        var n = t.properties,
          o = n.type && n.type.default,
          p = n.data && n.data.default,
          l = n.filter && n.filter.default;
        'local' === o
          ? ((t = R(d.local)).properties.data.default = p ? R(p) : '{}')
          : ((t = R(d.remote)).properties.data.default = p
              ? R(p)
              : 'http://xxx'),
          (t.properties.filter.default = l ? R(l) : '() => {}');
      }
      if ('event' === t.type) {
        var u = t.properties,
          f = u.type && u.type.default;
        if ('in' === f || 'on' === f) {
          var y = (u.filter && u.filter.default) || '() => {}';
          (t = R(c.on)),
            u.actionFunc &&
              x(u.actionFunc) &&
              (t.properties.actionFunc.default = u.actionFunc.default || R(y));
        } else {
          var m = (u.filter && u.filter.default) || '{}';
          (t = R(c.emit)),
            u.eventData &&
              x(u.eventData) &&
              (t.properties.eventData.default = u.eventData.default || R(m));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = _(t.properties[e]);
          })),
        t.items && (t.items = _(t.items)),
        t
      );
    }
    function _(e) {
      var t = R(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !U(t.default) ||
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
            t.properties[e] = _(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = _(t.items)),
        t
      );
    }
    require('mobx');
    var z,
      M =
        (((z = {
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
        (z.textarea = 'string'),
        (z['text-editor'] = 'string'),
        (z.time = 'string'),
        (z.url = 'string'),
        z);
    function H(e) {
      return M[e] || e;
    }
    function V(e, t) {
      M[e]
        ? console.warn('当前已经存在' + e + '(' + M[e] + ')，暂时不支持覆盖。')
        : (M[e] = t);
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
    function Z(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function G(e) {
      var t = !1,
        r = H(e.type),
        i = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && i && (t = !0), t;
    }
    function Q(e) {
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
    function X(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function Y(e, t) {
      for (
        var r = e.split('-'),
          i = t.split('-'),
          a = 'before',
          n = 0,
          o = (r.length > i.length ? i : r).length;
        n < o;
        n += 1
      )
        Number(r[n]) > Number(i[n]) && (a = 'after');
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
    function ne(e, t) {
      var r = '',
        i = !1;
      if (!1 !== e.defaultActiveFirstOption && e.defaultActiveFirstOption)
        return (
          e.options && e.options[0] && ((r = e.options[0].value), (i = !0)),
          (t || e.multiple) && (r = i ? [r] : []),
          r
        );
    }
    function oe(e, t) {
      var r,
        i,
        a = void 0,
        n = t;
      U(n) &&
        U(e.default) &&
        (typeof n != typeof e.default ||
          ((r = n), (i = e.default), x(r) + '-' + j(r) != x(i) + '-' + j(i))) &&
        (n = void 0);
      var o = U(n) ? n : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          a = null != o ? o : ne(e);
          break;
        case 'checkboxes':
          a = null != o ? o : ne(e, !0);
          break;
        case 'color':
          ('#fff' !== o && '#FFF' !== o) || (o = '#ffffff'),
            (a = U(o) ? o : '#ffffff');
          break;
        case 'boolean':
          a = !!U(o) && o;
          break;
        case 'number':
          a = U(o) ? o : void 0;
          break;
        case 'json':
          var p = '';
          if (x(o) || j(o)) p = o;
          else if (S(o) || '' === o) p = {};
          else
            try {
              p = JSON.parse(o);
            } catch (e) {
              p = {};
            }
          a = p;
          break;
        default:
          a =
            'input' === e.type && '0' === e.default
              ? o || e.default
              : U(o)
                ? o
                : void 0;
      }
      return a;
    }
    function pe(e, t) {
      var r = {},
        i = e.type;
      if (x(e) && 'object' === H(e.type)) {
        var a = e,
          n = t;
        U(n) &&
          ((U(a.default) && typeof n != typeof e.default) || !x(n)) &&
          (n = void 0);
        var o = U(n) ? n : a.default;
        'dynamic-data' === i
          ? ((r = R(u)),
            o &&
              x(o) &&
              '{}' !== JSON.stringify(o) &&
              (r = Object.assign(r, o)))
          : 'datasource' === i
            ? a.properties &&
              a.properties.type &&
              a.properties.type.default &&
              'local' === a.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                o && o.data && (r.data = o.data),
                o && o.filter && (r.filter = o.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                o && o.data && (r.data = o.data),
                o && o.filter && (r.filter = o.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === i
              ? a.properties &&
                a.properties.type &&
                a.properties.type.default &&
                'emit' === a.properties.type.default
                ? o && 'out' === o.type
                  ? (r = {
                      trigger: (o && o.filter) || 'eventName',
                      eventData: '{}',
                    })
                  : ((r = { trigger: 'eventName', eventData: '{}' }),
                    o && o.trigger && (r.trigger = o.trigger),
                    o && o.eventData && (r.eventData = o.eventData))
                : o && 'in' === o.type
                  ? (r = {
                      register: 'eventName',
                      actionFunc: (o && o.filter) || '() => {}',
                    })
                  : ((r = { register: 'eventName', actionFunc: '() => {}' }),
                    o && o.register && (r.register = o.register),
                    o && o.actionFunc && (r.actionFunc = o.actionFunc))
              : !1 === e.isContainer && o && x(o) && '{}' !== JSON.stringify(o)
                ? (r = Object.assign(r, o))
                : void 0 === n && a.default && x(a.default)
                  ? (r = a.default)
                  : e.properties &&
                    (e.propertyOrder
                      ? e.propertyOrder
                      : Object.keys(e.properties)
                    ).map(function (i) {
                      var a = e.properties[i],
                        n = t && t[i];
                      switch (H(a.type)) {
                        case 'array':
                          r[i] = le(a, n);
                          break;
                        case 'object':
                          r[i] = pe(a, n);
                          break;
                        default:
                          r[i] = oe(a, n);
                      }
                    });
      }
      return r;
    }
    function le(e, t) {
      var r = [];
      if (e && 'array' === H(e.type)) {
        var i = t;
        U(i) &&
          ((U(e.default) && typeof i != typeof e.default) || !j(i)) &&
          (i = void 0);
        var a = U(i) ? i : e.default;
        if ('array' === H(e.type))
          if (j(a))
            a.map(function (t) {
              r.push(pe(e.items, t));
            });
          else if (a) r = a;
          else {
            var n = pe(e.items, a);
            r.push(n);
          }
        else r = U(a) ? a : [];
      }
      return r;
    }
    function ue(e, t) {
      return 'object' === H(e.type)
        ? pe(e, t)
        : 'array' === H(e.type)
          ? le(e, t)
          : oe(e, t);
    }
    var se = s;
    function ce(e, t) {
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
        x(e)
          ? Object.keys(e).map(function (i) {
              var a = e[i],
                n = t ? t + '-' + i : i;
              x(a) || j(a)
                ? r.push({ title: i, value: n, key: n, children: de(a, n) })
                : r.push({ title: i, value: n, key: n });
            })
          : j(e) &&
            e.map(function (e, i) {
              var a = i.toString(),
                n = t ? t + '-' + i : a;
              x(e) || j(e)
                ? r.push({ title: a, value: n, key: n, children: de(e, n) })
                : r.push({ title: a, value: n, key: n });
            }),
        r
      );
    }
    function fe(e, t) {
      var r = '';
      return (
        'object' === H(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (i) {
              var a = e.properties[i],
                n = t[i];
              ('array' === H(a.type) && 'object' === H(a.type)) ||
                (n &&
                  a.isConditionProp &&
                  (r.indexOf('-') > 0 ? (r += '-' + n) : (r = n)));
            },
          ),
        r
      );
    }
    function ye(e) {
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
