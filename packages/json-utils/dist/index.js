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
          return be;
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
          return U;
        },
        getCurPosition: function () {
          return Y;
        },
        getDefaultOptionVal: function () {
          return ae;
        },
        getExpectType: function () {
          return H;
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
          return me;
        },
        getParentKeyRoute_CurKey: function () {
          return ve;
        },
        getSchemaByIndexRoute: function () {
          return E;
        },
        getSchemaByKeyRoute: function () {
          return J;
        },
        hasProperties: function () {
          return w;
        },
        indexRoute2keyRoute: function () {
          return A;
        },
        isArray: function () {
          return j;
        },
        isBoolean: function () {
          return v;
        },
        isColor: function () {
          return S;
        },
        isContainerSchema: function () {
          return Q;
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
          return R;
        },
        isEqualByIdT: function () {
          return F;
        },
        isFunction: function () {
          return k;
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
          return G;
        },
        isTimeStr: function () {
          return h;
        },
        isURL: function () {
          return f;
        },
        json2schema: function () {
          return B;
        },
        json2treeData: function () {
          return fe;
        },
        keyRoute2indexRoute: function () {
          return $;
        },
        metaElemAnalyzer: function () {
          return z;
        },
        moveBackward: function () {
          return ne;
        },
        moveForward: function () {
          return ie;
        },
        objClone: function () {
          return D;
        },
        oldSchemaToNewSchema: function () {
          return K;
        },
        oldSchemaToNewSchemaV1: function () {
          return I;
        },
        registerExpectType: function () {
          return V;
        },
        schema2conditionValue: function () {
          return ye;
        },
        schema2json: function () {
          return le;
        },
        schemaMetaList: function () {
          return ce;
        },
        truncate: function () {
          return C;
        },
        urlParse: function () {
          return T;
        },
        urlStringify: function () {
          return N;
        },
      });
    var r,
      i = require('lodash'),
      n = require('qs'),
      a = e.n(n),
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
      u =
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
      l = {
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
        datasource: p,
        event: o,
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
        emit: o,
      },
      d = { local: p, remote: u };
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
      return c.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function S(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function k(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function T() {
      var e = {};
      return (
        location.search && (e = a().parse(location.search.substring(1))), e
      );
    }
    function N(e) {
      var t = '';
      return url && (t = a().stringify(e)), t;
    }
    function D(e) {
      return (0, i.cloneDeep)(e);
    }
    function R(e, t) {
      if ((w(e) && !w(t)) || (!w(e) && w(t)) || typeof e != typeof t) return !1;
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
    function F(e, t) {
      if ((w(e) && !w(t)) || (!w(e) && w(t)) || typeof e != typeof t) return !1;
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
            (w(e.id) && e.id === t.id) ||
            (w(e.lastUpdateTime) && e.lastUpdateTime === t.lastUpdateTime)
          )
        ) ||
        (0, i.isEqual)(e, t)
      );
    }
    function w(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function C(e, t) {
      return (0, i.truncate)(e, t);
    }
    function U(e, t) {
      var r = t || {};
      if (!e) return !1;
      var i = new Function('data', 'with(data) { return (' + e + ');}'),
        n = '';
      try {
        n = i(r);
      } catch (t) {
        return console.warn('表达式运算出错: ' + e + '，报错信息：', t), n;
      }
      return n;
    }
    function P(e, t, r) {
      var i = t;
      if ((r && (i = D(t)), e))
        for (var n = e.split('-'), a = 0, o = n.length; a < o; a++) {
          var p = n[a];
          p && (i = i && i[p]);
        }
      return i;
    }
    function E(e, t, r) {
      var i = t;
      if ((r && (i = D(t)), e))
        for (var n = e.split('-'), a = 0, o = n.length; a < o; a++) {
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
    function J(e, t, r) {
      var i = t;
      if ((r && (i = D(t)), e && i))
        for (var n = e.split('-'), a = 0, o = n.length; a < o; a++) {
          var p = n[a];
          p && i.properties && (i = i.properties[p]);
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
        if ('0' === p && r.items)
          (r = r.items), (i = i ? i + '-items' : 'items');
        else if ('0' === p && r.options)
          (r = r.options), (i = i ? i + '-options' : 'options');
        else if (p) {
          var u = '0';
          r.propertyOrder
            ? (u = r.propertyOrder[p])
            : r.properties && (u = Object.keys(r.properties)[p]),
            (r = r.properties[u]),
            (i = i ? i + '-' + u : u);
        }
      }
      return i;
    }
    function $(e, t) {
      for (
        var r = t, i = '', n = e.split('-'), a = 0, o = n.length;
        a < o;
        a++
      ) {
        var p = n[a];
        if (p) {
          var u = -1;
          r.propertyOrder
            ? ((u = r.propertyOrder.indexOf(p)), (r = r.properties[p]))
            : r.properties
              ? ((u = Object.keys(r.properties).indexOf(p)),
                (r = r.properties[p]))
              : r.items
                ? ((u = 0), (r = r.items))
                : r.options && ((u = 0), (r = r.options)),
            (i = i ? i + '-' + u : u.toString());
        }
      }
      return i;
    }
    function B(e) {
      var t;
      return (
        (t =
          e && x(e)
            ? (function (e) {
                var t;
                if (x(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = j(e.data) || x(e.data) ? D(d.local) : D(d.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = D(s.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = D(s.on))
                        : e.quantity && q(e.quantity) && 2 === r.length
                          ? (t = D(c.quantity))
                          : ((t = D(c['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = B(i);
                            }));
                }
                return t;
              })(e)
            : e && j(e)
              ? (function (e) {
                  var t;
                  if (e && j(e))
                    if (O(e)) {
                      (t = D(c.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        i = e.length;
                      if (i > r)
                        for (var n = r, a = i; n < a; n++)
                          t.items.enumextra.push('选项' + e(n));
                    } else {
                      t = D(c['empty-array']);
                      var o = B(e[0]);
                      t.items.properties = o.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (v(e)) t = D(c.boolean);
                  else if (m(e)) t = D(c.number);
                  else if (f(e)) t = D(c.url);
                  else if (b(e)) t = D(c.date);
                  else if (g(e)) t = D(c['date-time']);
                  else if (h(e)) t = D(c.time);
                  else if (S(e)) t = D(c.color);
                  else
                    try {
                      t = m(JSON.parse(e)) ? D(c.input) : D(c.json);
                    } catch (r) {
                      t = e && e.length > 30 ? D(c.textarea) : D(c.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function L(e, t) {
      var r = t || {};
      return (
        x(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = z(i, r);
            },
          ),
        r
      );
    }
    function z(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var n = e.type;
        'object' === n || 'func' === n || 'style' === n || 'data' === n
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = L(e, i)))
          : 'array' === n
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = L((e = e.items), i)))
            : !r && i[n]
              ? (i[n] += 1)
              : r || (i[n] = 1);
      }
      return i;
    }
    function I(e) {
      var t = D(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !w(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: D(t.enum),
              enumextra: D(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          i = D(c.quantity);
        if (r.quantity && x(r.quantity) && r.quantity.default) {
          var n = r.quantity.default;
          i.properties.quantity.default = 'percent' === n ? '%' : n;
        }
        t = i;
      }
      if ('datasource' === t.type) {
        var a = t.properties,
          o = a.type && a.type.default,
          p = a.data && a.data.default,
          u = a.filter && a.filter.default;
        'local' === o
          ? ((t = D(d.local)).properties.data.default = p ? D(p) : '{}')
          : ((t = D(d.remote)).properties.data.default = p
              ? D(p)
              : 'http://xxx'),
          (t.properties.filter.default = u ? D(u) : '() => {}');
      }
      if ('event' === t.type) {
        var l = t.properties,
          f = l.type && l.type.default;
        if ('in' === f || 'on' === f) {
          var y = (l.filter && l.filter.default) || '() => {}';
          (t = D(s.on)),
            l.actionFunc &&
              x(l.actionFunc) &&
              (t.properties.actionFunc.default = l.actionFunc.default || D(y));
        } else {
          var m = (l.filter && l.filter.default) || '{}';
          (t = D(s.emit)),
            l.eventData &&
              x(l.eventData) &&
              (t.properties.eventData.default = l.eventData.default || D(m));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = K(t.properties[e]);
          })),
        t.items && (t.items = K(t.items)),
        t
      );
    }
    function K(e) {
      var t = D(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !w(t.default) ||
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
            t.properties[e] = K(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = K(t.items)),
        t
      );
    }
    require('mobx');
    var _,
      M =
        (((_ = {
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
        (_.textarea = 'string'),
        (_['text-editor'] = 'string'),
        (_.time = 'string'),
        (_.url = 'string'),
        _);
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
    function Q(e) {
      var t = !1,
        r = H(e.type),
        i = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && i && (t = !0), t;
    }
    function G(e) {
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
          n = 'before',
          a = 0,
          o = (r.length > i.length ? i : r).length;
        a < o;
        a += 1
      )
        Number(r[a]) > Number(i[a]) && (n = 'after');
      return n;
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
    function ne(e) {
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
    function oe(e, t) {
      var r,
        i,
        n = void 0,
        a = t;
      w(a) &&
        w(e.default) &&
        (typeof a != typeof e.default ||
          ((r = a), (i = e.default), x(r) + '-' + j(r) != x(i) + '-' + j(i))) &&
        (a = void 0);
      var o = w(a) ? a : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          n = null != o ? o : ae(e);
          break;
        case 'checkboxes':
          n = null != o ? o : ae(e, !0);
          break;
        case 'color':
          ('#fff' !== o && '#FFF' !== o) || (o = '#ffffff'),
            (n = w(o) ? o : '#ffffff');
          break;
        case 'boolean':
          n = !!w(o) && o;
          break;
        case 'number':
          n = w(o) ? o : void 0;
          break;
        case 'json':
          var p = '';
          if (x(o) || j(o)) p = o;
          else if (k(o) || '' === o) p = {};
          else
            try {
              p = JSON.parse(o);
            } catch (e) {
              p = {};
            }
          n = p;
          break;
        default:
          n =
            'input' === e.type && '0' === e.default
              ? o || e.default
              : w(o)
                ? o
                : void 0;
      }
      return n;
    }
    function pe(e, t) {
      var r = {},
        i = e.type;
      if (x(e) && 'object' === H(e.type)) {
        var n = e,
          a = t;
        w(a) &&
          ((w(n.default) && typeof a != typeof e.default) || !x(a)) &&
          (a = void 0);
        var o = w(a) ? a : n.default;
        'dynamic-data' === i
          ? ((r = D(l)),
            o &&
              x(o) &&
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
              : !1 === e.isContainer && o && x(o) && '{}' !== JSON.stringify(o)
                ? (r = Object.assign(r, o))
                : void 0 === a && n.default && x(n.default)
                  ? (r = n.default)
                  : e.properties &&
                    (e.propertyOrder
                      ? e.propertyOrder
                      : Object.keys(e.properties)
                    ).map(function (i) {
                      var n = e.properties[i],
                        a = t && t[i];
                      switch (H(n.type)) {
                        case 'array':
                          r[i] = ue(n, a);
                          break;
                        case 'object':
                          r[i] = pe(n, a);
                          break;
                        default:
                          r[i] = oe(n, a);
                      }
                    });
      }
      return r;
    }
    function ue(e, t) {
      var r = [];
      if (e && 'array' === H(e.type)) {
        var i = t;
        w(i) &&
          ((w(e.default) && typeof i != typeof e.default) || !j(i)) &&
          (i = void 0);
        var n = w(i) ? i : e.default;
        if ('array' === H(e.type))
          if (j(n))
            n.map(function (t) {
              r.push(pe(e.items, t));
            });
          else if (n) r = n;
          else {
            var a = pe(e.items, n);
            r.push(a);
          }
        else r = w(n) ? n : [];
      }
      return r;
    }
    function le(e, t) {
      return 'object' === H(e.type)
        ? pe(e, t)
        : 'array' === H(e.type)
          ? ue(e, t)
          : oe(e, t);
    }
    var ce = c;
    function se(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (x(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            x(e.config) &&
            e.config.dataName &&
            w(e.localFilter) &&
            w(e.data)
          ) {
            var i = e.config.body;
            if (i && !x(i))
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
          j(e) &&
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
    function fe(e, t) {
      var r = [];
      return (
        x(e)
          ? Object.keys(e).map(function (i) {
              var n = e[i],
                a = t ? t + '-' + i : i;
              x(n) || j(n)
                ? r.push({ title: i, value: a, key: a, children: fe(n, a) })
                : r.push({ title: i, value: a, key: a });
            })
          : j(e) &&
            e.map(function (e, i) {
              var n = i.toString(),
                a = t ? t + '-' + i : n;
              x(e) || j(e)
                ? r.push({ title: n, value: a, key: a, children: fe(e, a) })
                : r.push({ title: n, value: a, key: a });
            }),
        r
      );
    }
    function ye(e, t) {
      var r = '';
      return (
        'object' === H(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (i) {
              var n = e.properties[i],
                a = t[i];
              ('array' === H(n.type) && 'object' === H(n.type)) ||
                (a &&
                  n.isConditionProp &&
                  (r.indexOf('-') > 0 ? (r += '-' + a) : (r = a)));
            },
          ),
        r
      );
    }
    function me(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ve(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var be = [
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
