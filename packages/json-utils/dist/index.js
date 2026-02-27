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
          return (e.d(r, { a: r }), r);
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
          ('undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 }));
        },
      },
      t = {};
    (e.r(t),
      e.d(t, {
        DataSourceTypeList: function () {
          return s;
        },
        EventTypeDataList: function () {
          return u;
        },
        KeyWordList: function () {
          return fe;
        },
        TypeDataList: function () {
          return l;
        },
        dataRoute2dataPath: function () {
          return le;
        },
        evalExpression: function () {
          return U;
        },
        getCurPosition: function () {
          return G;
        },
        getDefaultOptionVal: function () {
          return re;
        },
        getExpectType: function () {
          return I;
        },
        getJsonDataByKeyRoute: function () {
          return P;
        },
        getNextIndexRoute: function () {
          return X;
        },
        getParentIndexRoute: function () {
          return Q;
        },
        getParentIndexRoute_CurIndex: function () {
          return Y;
        },
        getParentKeyRoute: function () {
          return ce;
        },
        getParentKeyRoute_CurKey: function () {
          return de;
        },
        getSchemaByIndexRoute: function () {
          return C;
        },
        getSchemaByKeyRoute: function () {
          return w;
        },
        hasProperties: function () {
          return N;
        },
        indexRoute2keyRoute: function () {
          return E;
        },
        isArray: function () {
          return g;
        },
        isBoolean: function () {
          return y;
        },
        isColor: function () {
          return x;
        },
        isContainerSchema: function () {
          return V;
        },
        isDateStr: function () {
          return m;
        },
        isDateTimeStr: function () {
          return v;
        },
        isEmptySchema: function () {
          return M;
        },
        isEqual: function () {
          return D;
        },
        isEqualByIdT: function () {
          return R;
        },
        isFunction: function () {
          return S;
        },
        isNewSchemaData: function () {
          return H;
        },
        isNumber: function () {
          return f;
        },
        isObject: function () {
          return j;
        },
        isQuantity: function () {
          return O;
        },
        isSameParent: function () {
          return Z;
        },
        isSelect: function () {
          return h;
        },
        isString: function () {
          return d;
        },
        isStructuredSchema: function () {
          return W;
        },
        isTimeStr: function () {
          return b;
        },
        isURL: function () {
          return c;
        },
        json2schema: function () {
          return L;
        },
        json2treeData: function () {
          return ue;
        },
        keyRoute2indexRoute: function () {
          return A;
        },
        metaElemAnalyzer: function () {
          return K;
        },
        moveBackward: function () {
          return te;
        },
        moveForward: function () {
          return ee;
        },
        objClone: function () {
          return k;
        },
        oldSchemaToNewSchema: function () {
          return z;
        },
        oldSchemaToNewSchemaV1: function () {
          return _;
        },
        registerExpectType: function () {
          return $;
        },
        schema2conditionValue: function () {
          return se;
        },
        schema2json: function () {
          return oe;
        },
        schemaMetaList: function () {
          return pe;
        },
        truncate: function () {
          return F;
        },
        urlParse: function () {
          return q;
        },
        urlStringify: function () {
          return T;
        },
      }));
    var r = require('lodash'),
      i = require('qs'),
      n = e.n(i),
      a = {
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
      p = {
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
      l = {
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
        datasource: o,
        event: a,
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
      u = {
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
        emit: a,
      },
      s = {
        local: o,
        remote: {
          type: 'datasource',
          title: '数据源',
          isContainer: !1,
          properties: {
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
          },
          propertyOrder: ['type', 'data', 'filter'],
        },
      };
    function c(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function d(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function f(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function y(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function m(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function v(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function b(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function g(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function h(e) {
      if (!g(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!d(e[t])) return !1;
      return !0;
    }
    function j(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function O(e) {
      var t,
        r = !1;
      return (
        (
          (null === (t = l.quantity.properties.quantity) || void 0 === t
            ? void 0
            : t.enum) || []
        ).indexOf(e) >= 0 && (r = !0),
        r
      );
    }
    function x(e) {
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
    function q() {
      var e = {};
      return (
        location.search && (e = n().parse(location.search.substring(1))),
        e
      );
    }
    function T(e) {
      var t = '';
      return (e && (t = n().stringify(e)), t);
    }
    function k(e) {
      return (0, r.cloneDeep)(e);
    }
    function D(e, t) {
      if ((N(e) && !N(t)) || (!N(e) && N(t)) || typeof e != typeof t) return !1;
      if (j(e) && (e.id !== t.id || e.lastUpdateTime !== t.lastUpdateTime))
        return !1;
      var i = new Date().getTime();
      return (
        !!(
          j(e) &&
          e.lastUpdateTime &&
          e.lastUpdateTime === t.lastUpdateTime &&
          i - e.lastUpdateTime < 500
        ) || (0, r.isEqual)(e, t)
      );
    }
    function R(e, t) {
      if ((N(e) && !N(t)) || (!N(e) && N(t)) || typeof e != typeof t) return !1;
      if (j(e) && (e.id !== t.id || e.lastUpdateTime !== t.lastUpdateTime))
        return !1;
      var i = new Date().getTime();
      return (
        !!(
          j(e) &&
          e.lastUpdateTime &&
          e.lastUpdateTime === t.lastUpdateTime &&
          i - e.lastUpdateTime < 500
        ) ||
        !(
          !j(e) ||
          !(
            (N(e.id) && e.id === t.id) ||
            (N(e.lastUpdateTime) && e.lastUpdateTime === t.lastUpdateTime)
          )
        ) ||
        (0, r.isEqual)(e, t)
      );
    }
    function N(e) {
      var t = !1;
      return (null != e && (t = !0), t);
    }
    function F(e, t) {
      return (0, r.truncate)(e, t);
    }
    function U(e, t) {
      var r = t || {};
      if (!e) return !1;
      var i = new Function('data', 'with(data) { return (' + e + ');}'),
        n = '';
      try {
        n = i(r);
      } catch (t) {
        return (console.warn('表达式运算出错: ' + e + '，报错信息：', t), n);
      }
      return n;
    }
    function P(e, t, r) {
      var i = t;
      if ((r && (i = k(t)), e))
        for (var n = e.split('-'), a = 0, o = n.length; a < o; a++) {
          var p = n[a];
          p && (i = i && i[p]);
        }
      return i;
    }
    function C(e, t, r) {
      var i = t;
      if ((r && (i = k(t)), e))
        for (
          var n = 'string' == typeof e ? e.split('-') : [e.toString()],
            a = 0,
            o = n.length;
          a < o;
          a++
        ) {
          var p = n[a];
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
              (i.propertyOrder
                ? (l = i.propertyOrder[p])
                : i.properties && (l = Object.keys(i.properties)[Number(p)]),
                (i = i.properties[l]));
            }
          } else i = i.options || i.items;
        }
      return i;
    }
    function w(e, t, r) {
      var i = t;
      if ((r && (i = k(t)), e && i))
        for (var n = e.split('-'), a = 0, o = n.length; a < o; a++) {
          var p = n[a];
          p && i.properties && (i = i.properties[p]);
        }
      return i;
    }
    function E(e, t) {
      for (
        var r = t,
          i = '',
          n = 'string' == typeof e ? e.split('-') : [e.toString()],
          a = 0,
          o = n.length;
        a < o;
        a++
      ) {
        var p = n[a];
        if ('0' === p && r.items)
          ((r = r.items), (i = i ? i + '-items' : 'items'));
        else if ('0' === p && r.options)
          ((r = r.options), (i = i ? i + '-options' : 'options'));
        else if (p) {
          var l = '0';
          (r.propertyOrder
            ? (l = r.propertyOrder[p])
            : r.properties && (l = Object.keys(r.properties)[Number(p)]),
            (r = r.properties[l]),
            (i = i ? i + '-' + l : l));
        }
      }
      return i;
    }
    function A(e, t) {
      for (
        var r = t, i = '', n = e.split('-'), a = 0, o = n.length;
        a < o;
        a++
      ) {
        var p = n[a];
        if (p) {
          var l = -1;
          (r.propertyOrder
            ? ((l = r.propertyOrder.indexOf(p)), (r = r.properties[p]))
            : r.properties
              ? ((l = Object.keys(r.properties).indexOf(p)),
                (r = r.properties[p]))
              : r.items
                ? ((l = 0), (r = r.items))
                : r.options && ((l = 0), (r = r.options)),
            (i = i ? i + '-' + l : l.toString()));
        }
      }
      return i;
    }
    function L(e) {
      var t;
      return (
        (t =
          e && j(e)
            ? (function (e) {
                var t = {};
                if (j(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = g(e.data) || j(e.data) ? k(s.local) : k(s.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = k(u.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = k(u.on))
                        : e.quantity && O(e.quantity) && 2 === r.length
                          ? (t = k(l.quantity))
                          : ((t = k(l['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = L(i);
                            }));
                }
                return t;
              })(e)
            : e && g(e)
              ? (function (e) {
                  var t;
                  if (e && g(e))
                    if (h(e)) {
                      (t = k(l.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        i = e.length;
                      if (i > r)
                        for (var n = r, a = i; n < a; n++)
                          t.items.enumextra.push('选项' + e(n));
                    } else {
                      t = k(l['empty-array']);
                      var o = L(e[0]);
                      t.items.properties = o.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (y(e)) t = k(l.boolean);
                  else if (f(e)) t = k(l.number);
                  else if (c(e)) t = k(l.url);
                  else if (m(e)) t = k(l.date);
                  else if (v(e)) t = k(l['date-time']);
                  else if (b(e)) t = k(l.time);
                  else if (x(e)) t = k(l.color);
                  else
                    try {
                      t = f(JSON.parse(e)) ? k(l.input) : k(l.json);
                    } catch (r) {
                      t = e && e.length > 30 ? k(l.textarea) : k(l.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    var J = {
      array: 'array',
      boolean: 'boolean',
      'padding-margin': 'object',
      codearea: 'string',
      color: 'string',
      date: 'string',
      'date-time': 'string',
      'func-body': 'string',
      htmlarea: 'string',
      image: 'string',
      input: 'string',
      json: 'string',
      number: 'number',
      'input-image': 'string',
      object: 'object',
      quantity: 'string',
      radio: 'string',
      select: 'string',
      textarea: 'string',
      'text-editor': 'string',
      time: 'string',
      url: 'string',
      'box-style': 'object',
      datasource: 'object',
      'dynamic-data': 'object',
      event: 'object',
    };
    function I(e) {
      return J[e] || e;
    }
    function $(e, t) {
      J[e]
        ? console.warn('当前已经存在' + e + '(' + J[e] + ')，暂时不支持覆盖。')
        : (J[e] = t);
    }
    function B(e, t) {
      var r = t || {};
      return (
        j(e) &&
          'object' === I(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = K(i, r);
            },
          ),
        r
      );
    }
    function K(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var n = e.type;
        'object' === n || 'func' === n || 'style' === n || 'data' === n
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = B(e, i)))
          : 'array' === n
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = B((e = e.items), i)))
            : !r && i[n]
              ? (i[n] += 1)
              : r || (i[n] = 1);
      }
      return i;
    }
    function _(e) {
      var t = k(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !N(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: k(t.enum),
              enumextra: k(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          i = k(l.quantity);
        if (r.quantity && j(r.quantity) && r.quantity.default) {
          var n = r.quantity.default;
          i.properties.quantity.default = 'percent' === n ? '%' : n;
        }
        t = i;
      }
      if ('datasource' === t.type) {
        var a = t.properties,
          o = a.type && a.type.default,
          p = a.data && a.data.default,
          c = a.filter && a.filter.default;
        ('local' === o
          ? ((t = k(s.local)).properties.data.default = p ? k(p) : '{}')
          : ((t = k(s.remote)).properties.data.default = p
              ? k(p)
              : 'http://xxx'),
          (t.properties.filter.default = c ? k(c) : '() => {}'));
      }
      if ('event' === t.type) {
        var d = t.properties,
          f = d.type && d.type.default;
        if ('in' === f || 'on' === f) {
          var y = (d.filter && d.filter.default) || '() => {}';
          ((t = k(u.on)),
            d.actionFunc &&
              j(d.actionFunc) &&
              (t.properties.actionFunc.default = d.actionFunc.default || k(y)));
        } else {
          var m = (d.filter && d.filter.default) || '{}';
          ((t = k(u.emit)),
            d.eventData &&
              j(d.eventData) &&
              (t.properties.eventData.default = d.eventData.default || k(m)));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = z(t.properties[e]);
          })),
        t.items && (t.items = z(t.items)),
        t
      );
    }
    function z(e) {
      var t = k(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !N(t.default) ||
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
            t.properties[e] = z(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = z(t.items)),
        t
      );
    }
    function M(e) {
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
    function H(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return (r && new Date(r).getTime() >= i && (t = !0), t);
    }
    function V(e) {
      var t = !1,
        r = I(e.type),
        i = void 0 === e.isContainer || e.isContainer;
      return ('object' === r && i && (t = !0), t);
    }
    function W(e) {
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
    function Z(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return (r.pop(), i.pop(), r.join('-') === i.join('-'));
    }
    function G(e, t) {
      for (
        var r = e.split('-'),
          i = t.split('-'),
          n = 'before',
          a = 0,
          o = (r.length > i.length ? i : r).length;
        a < o;
        a += 1
      )
        Number(r[a]) > Number(i[a]) && (n = 'after');
      return n;
    }
    function Q(e) {
      var t = 'string' == typeof e ? e.split('-') : [e.toString()];
      return (t.pop(), t.join('-'));
    }
    function X(e) {
      var t = 'string' == typeof e ? e.split('-') : [e.toString()],
        r = t.pop(),
        i = Number(r) + 1;
      return (t.push('' + i), t.join('-'));
    }
    function Y(e) {
      var t = 'string' == typeof e ? e.split('-') : [e.toString()],
        r = t.pop() || '';
      return [t.join('-'), r];
    }
    function ee(e) {
      var t = 'string' == typeof e ? e.split('-') : [e.toString()],
        r = t.pop();
      return (t.push(Number(r) - 1), t.join('-'));
    }
    function te(e) {
      var t = 'string' == typeof e ? e.split('-') : [e.toString()],
        r = t.pop();
      return (t.push(Number(r) + 1), t.join('-'));
    }
    function re(e, t) {
      var r = '',
        i = !1;
      if (!1 !== e.defaultActiveFirstOption && e.defaultActiveFirstOption)
        return (
          e.options && e.options[0] && ((r = e.options[0].value), (i = !0)),
          (t || e.multiple) && (r = i ? [r] : []),
          r
        );
    }
    function ie(e, t) {
      var r,
        i,
        n,
        a,
        o,
        p = void 0,
        l = t;
      N(l) &&
        N(e.default) &&
        (typeof l != typeof e.default ||
          ((a = l), (o = e.default), j(a) + '-' + g(a) != j(o) + '-' + g(o))) &&
        (l = void 0);
      var u = N(l) ? l : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          p = null != u ? u : re(e);
          break;
        case 'checkboxes':
          p = null != u ? u : re(e, !0);
          break;
        case 'color':
          (('#fff' !== u && '#FFF' !== u) || (u = '#ffffff'),
            (p = N(u) ? u : '#ffffff'));
          break;
        case 'boolean':
          p = !!N(u) && u;
          break;
        case 'number':
          p = N(u) ? u : void 0;
          break;
        case 'quantity':
          var s =
              (null === (r = e.properties) ||
              void 0 === r ||
              null === (r = r.quantity) ||
              void 0 === r
                ? void 0
                : r.default) || 'px',
            c =
              null !==
                (i =
                  null === (n = e.properties) ||
                  void 0 === n ||
                  null === (n = n.unit) ||
                  void 0 === n
                    ? void 0
                    : n.default) && void 0 !== i
                ? i
                : '';
          p = N(u) ? u : '' + c + s;
          break;
        case 'json':
          var d = '';
          if (j(u) || g(u)) d = u;
          else if (S(u) || '' === u) d = {};
          else
            try {
              d = JSON.parse(u);
            } catch (e) {
              d = {};
            }
          p = d;
          break;
        default:
          p =
            'input' === e.type && '0' === e.default
              ? u || e.default
              : N(u)
                ? u
                : void 0;
      }
      return p;
    }
    function ne(e, t) {
      var r = {},
        i = e.type;
      if (j(e) && 'object' === I(e.type)) {
        var n = e,
          a = t;
        N(a) &&
          ((N(n.default) && typeof a != typeof e.default) || !j(a)) &&
          (a = void 0);
        var o = N(a) ? a : n.default;
        'dynamic-data' === i
          ? ((r = k(p)),
            o &&
              j(o) &&
              '{}' !== JSON.stringify(o) &&
              (r = Object.assign(r, o)))
          : 'datasource' === i
            ? n.properties &&
              n.properties.type &&
              n.properties.type.default &&
              'local' === n.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                o && o.data && (r.data = o.data),
                o && o.filter && (r.filter = o.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                o && o.data && (r.data = o.data),
                o && o.filter && (r.filter = o.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === i
              ? n.properties &&
                n.properties.type &&
                n.properties.type.default &&
                'emit' === n.properties.type.default
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
              : !1 === e.isContainer && o && j(o) && '{}' !== JSON.stringify(o)
                ? (r = Object.assign(r, o))
                : void 0 === a && n.default && j(n.default)
                  ? (r = n.default)
                  : e.properties &&
                    (e.propertyOrder
                      ? e.propertyOrder
                      : Object.keys(e.properties)
                    ).map(function (i) {
                      var n = e.properties[i],
                        a = t && t[i];
                      switch (I(n.type)) {
                        case 'array':
                          r[i] = ae(n, a);
                          break;
                        case 'object':
                          r[i] = ne(n, a);
                          break;
                        default:
                          r[i] = ie(n, a);
                      }
                    });
      }
      return r;
    }
    function ae(e, t) {
      var r = [];
      if (e && 'array' === I(e.type)) {
        var i = t;
        N(i) &&
          ((N(e.default) && typeof i != typeof e.default) || !g(i)) &&
          (i = void 0);
        var n = N(i) ? i : e.default;
        if ('array' === I(e.type))
          if (g(n))
            n.map(function (t) {
              r.push(ne(e.items, t));
            });
          else if (n) r = n;
          else {
            var a = ne(e.items, n);
            r.push(a);
          }
        else r = N(n) ? n : [];
      }
      return r;
    }
    function oe(e, t) {
      return 'object' === I(e.type)
        ? ne(e, t)
        : 'array' === I(e.type)
          ? ae(e, t)
          : ie(e, t);
    }
    var pe = l;
    function le(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function ue(e, t) {
      var r = [];
      return (
        j(e)
          ? Object.keys(e).map(function (i) {
              var n = e[i],
                a = t ? t + '-' + i : i;
              j(n) || g(n)
                ? r.push({ title: i, value: a, key: a, children: ue(n, a) })
                : r.push({ title: i, value: a, key: a });
            })
          : g(e) &&
            e.map(function (e, i) {
              var n = i.toString(),
                a = t ? t + '-' + i : n;
              j(e) || g(e)
                ? r.push({ title: n, value: a, key: a, children: ue(e, a) })
                : r.push({ title: n, value: a, key: a });
            }),
        r
      );
    }
    function se(e, t) {
      var r = '';
      return (
        'object' === I(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (i) {
              var n = e.properties[i],
                a = t[i];
              ('array' === I(n.type) && 'object' === I(n.type)) ||
                (a &&
                  n.isConditionProp &&
                  (r.indexOf('-') > 0 ? (r += '-' + a) : (r = a)));
            },
          ),
        r
      );
    }
    function ce(e) {
      var t = e.split('-');
      return (t.pop(), t.join('-'));
    }
    function de(e) {
      var t = e.split('-'),
        r = t.pop() || '';
      return [t.join('-'), r];
    }
    var fe = [
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
