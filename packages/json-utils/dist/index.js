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
          return q;
        },
        KeyWordList: function () {
          return ye;
        },
        TypeDataList: function () {
          return j;
        },
        dataRoute2dataPath: function () {
          return oe;
        },
        dynamicDataAnalyzer: function () {
          return ae;
        },
        getCurPosition: function () {
          return M;
        },
        getCurrentFormat: function () {
          return C;
        },
        getExpectType: function () {
          return le;
        },
        getJsonDataByKeyRoute: function () {
          return o;
        },
        getNextIndexRoute: function () {
          return W;
        },
        getParentIndexRoute: function () {
          return z;
        },
        getParentIndexRoute_CurIndex: function () {
          return H;
        },
        getParentKeyRoute: function () {
          return se;
        },
        getParentKeyRoute_CurKey: function () {
          return ce;
        },
        getSchemaByIndexRoute: function () {
          return p;
        },
        getSchemaByKeyRoute: function () {
          return u;
        },
        hasProperties: function () {
          return a;
        },
        indexRoute2keyRoute: function () {
          return l;
        },
        isArray: function () {
          return w;
        },
        isBoolean: function () {
          return D;
        },
        isBoxSchemaData: function () {
          return L;
        },
        isColor: function () {
          return $;
        },
        isDateStr: function () {
          return k;
        },
        isDateTimeStr: function () {
          return F;
        },
        isEmptySchema: function () {
          return I;
        },
        isEqual: function () {
          return n;
        },
        isFunction: function () {
          return B;
        },
        isNewSchemaData: function () {
          return K;
        },
        isNumber: function () {
          return N;
        },
        isObject: function () {
          return J;
        },
        isQuantity: function () {
          return E;
        },
        isSameParent: function () {
          return _;
        },
        isSelect: function () {
          return P;
        },
        isString: function () {
          return S;
        },
        isStructuredSchema: function () {
          return U;
        },
        isTimeStr: function () {
          return T;
        },
        isURL: function () {
          return R;
        },
        json2schema: function () {
          return A;
        },
        json2treeData: function () {
          return pe;
        },
        keyRoute2indexRoute: function () {
          return d;
        },
        metaElemAnalyzer: function () {
          return G;
        },
        moveBackward: function () {
          return V;
        },
        moveForward: function () {
          return Q;
        },
        objClone: function () {
          return i;
        },
        oldSchemaToNewSchema: function () {
          return Y;
        },
        oldSchemaToNewSchemaV1: function () {
          return X;
        },
        registerExpectType: function () {
          return de;
        },
        schema2json: function () {
          return ie;
        },
        schemaMetaList: function () {
          return ne;
        },
      });
    var r = require('lodash');
    function i(e) {
      return (0, r.cloneDeep)(e);
    }
    function n(e, t) {
      return (0, r.isEqual)(e, t);
    }
    function a(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function o(e, t, r) {
      var n = t;
      if ((r && (n = i(t)), e))
        for (var a = e.split('-'), o = 0, p = a.length; o < p; o++) {
          var u = a[o];
          u && (n = n && n[u]);
        }
      return n;
    }
    function p(e, t, r) {
      var n = t;
      if ((r && (n = i(t)), e))
        for (var a = e.split('-'), o = 0, p = a.length; o < p; o++) {
          var u = a[o];
          if (
            '0' !== u ||
            ('array' !== n.type &&
              'radio' !== n.type &&
              'single-select' !== n.type &&
              'select' !== n.type) ||
            (!n.options && !n.items)
          ) {
            if (u) {
              var l = '0';
              n.propertyOrder
                ? (l = n.propertyOrder[u])
                : n.properties && (l = Object.keys(n.properties)[u]),
                (n = n.properties[l]);
            }
          } else n = n.options || n.items;
        }
      return n;
    }
    function u(e, t, r) {
      var n = t;
      if ((r && (n = i(t)), e && n))
        for (var a = e.split('-'), o = 0, p = a.length; o < p; o++) {
          var u = a[o];
          u && n.properties && (n = n.properties[u]);
        }
      return n;
    }
    function l(e, t) {
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
    function d(e, t) {
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
    var s,
      c,
      y,
      f,
      m,
      v = {
        type: 'object',
        title: '对象Object',
        description: '',
        isRequired: !1,
        readOnly: !1,
        properties: {
          a:
            ((s = { type: 'string', title: '单文本框' }),
            (s.type = 'input'),
            (s.default = ''),
            (s.description = ''),
            (s.placeholder = ''),
            (s.isRequired = !1),
            (s.readOnly = !1),
            s),
        },
        propertyOrder: ['a'],
      },
      b = {
        type: 'event',
        title: '事件',
        isRequired: !1,
        readOnly: !1,
        properties: {
          type: {
            default: 'emit',
            type: 'typeSelect',
            enum: ['on', 'emit'],
            enumextra: ['on', 'emit'],
            title: '事件类型',
            isRequired: !1,
            readOnly: !1,
          },
          trigger: {
            type: 'input',
            default: 'eventName',
            title: '触发事件',
            description: '用于输入触发事件的名称',
            placeholder: '请输入触发事件的名称',
            isRequired: !1,
            readOnly: !1,
          },
          eventData: {
            title: '事件数据',
            type: 'json',
            default: '{}',
            description: '传递给触发事件的数据对象',
            isRequired: !1,
            readOnly: !1,
          },
        },
        propertyOrder: ['type', 'trigger', 'eventData'],
      },
      g = {
        type: 'datasource',
        title: '数据源',
        readOnly: !1,
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
      O =
        (((m = { type: 'object' }).type = 'datasource'),
        (m.title = '数据源'),
        (m.readOnly = !1),
        (m.properties = {
          type:
            ((c = { type: 'string', default: 'remote' }),
            (c.type = 'typeSelect'),
            (c.enum = ['local', 'remote']),
            (c.enumextra = ['local', 'remote']),
            (c.title = '数据源类型'),
            c),
          data:
            ((y = {
              type: 'string',
              title: '远程json数据',
              placeholder: '请输入远程json数据源地址',
            }),
            (y.type = 'url'),
            (y.default = 'http://xxx'),
            (y.isRequired = !0),
            (y.description = '用于设置获取元素数据的请求地址'),
            y),
          filter:
            ((f = { type: 'string', title: '过滤器' }),
            (f.type = 'codearea'),
            (f.default = '() => {}'),
            (f.description = '用于定义过滤当前数据的函数'),
            (f.isRequired = !0),
            f),
        }),
        (m.propertyOrder = ['type', 'data', 'filter']),
        m),
      h = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      j = {
        jsonschema: {
          type: 'object',
          title: 'jsonSchemaObject',
          properties: {
            func: {
              type: 'object',
              title: '功能设置',
              readOnly: !0,
              properties: {
                a: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                  readOnly: !1,
                },
              },
              propertyOrder: ['a'],
            },
            style: {
              type: 'object',
              title: '样式设置',
              readOnly: !0,
              properties: {
                b: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                  readOnly: !1,
                },
              },
              propertyOrder: ['b'],
            },
            data: {
              type: 'data',
              title: '数据设置',
              readOnly: !0,
              properties: {
                c: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                  readOnly: !1,
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
          isRequired: !1,
          readOnly: !1,
        },
        boolean: {
          type: 'boolean',
          title: '布尔值',
          default: !1,
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        object: v,
        array: {
          type: 'array',
          title: '数组Array',
          description: '',
          isRequired: !1,
          readOnly: !1,
          items: {
            type: 'object',
            title: '数组项',
            description: '',
            isRequired: !1,
            readOnly: !1,
            properties: {
              name: {
                type: 'input',
                title: '名字',
                default: '',
                description: '',
                placeholder: '',
                isRequired: !1,
                readOnly: !1,
              },
            },
            propertyOrder: ['name'],
          },
        },
        'empty-array': {
          type: 'array',
          title: '数组Array',
          description: '',
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
          isRequired: !1,
          readOnly: !1,
        },
        textarea: {
          type: 'textarea',
          title: '多行文本框',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        color: {
          type: 'color',
          title: '颜色color',
          default: '#ffffff',
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        image: {
          title: '图片',
          type: 'image',
          default: '',
          description: '上传图片',
          imgWidth: 200,
          imgHeight: 200,
          imgRatioReadOnly: !0,
          templateId: '',
          isRequired: !1,
        },
        number: {
          type: 'number',
          title: '数量number',
          default: 1,
          minimum: 0,
          maximum: 1e3,
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        json: {
          title: 'json数据',
          type: 'json',
          default: '{}',
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        codearea: {
          type: 'codearea',
          title: '函数类型',
          placeholder: '请输入函数方法',
          default: 'function func() { console.log("hello, world!"); }',
          description: '用于定义函数方法',
          isRequired: !1,
          readOnly: !1,
        },
        htmlarea: {
          title: '富文本',
          type: 'htmlarea',
          placeholder: '请输入html代码片段',
          default: '<p>hello,world!</p>',
          description: '用于放置html代码片段',
          isRequired: !1,
          readOnly: !1,
        },
        'text-editor': {
          type: 'text-editor',
          title: '富文本',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        date: {
          type: 'date',
          title: '日期Date',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        'date-time': {
          type: 'date-time',
          title: '日期时间',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        time: {
          type: 'time',
          title: '时间Time',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        quantity: {
          type: 'quantity',
          title: '单位计量',
          isRequired: !1,
          readOnly: !1,
          properties: {
            unit: {
              type: 'number',
              title: '单位数值',
              default: 50,
              minimum: 0,
              maximum: 1e3,
              description: '',
              isRequired: !1,
              readOnly: !1,
            },
            quantity: {
              type: 'typeSelect',
              default: 'px',
              enum: ['px', 'rem', 'em', '%'],
              enumextra: ['px', 'rem', 'em', '%'],
              title: '单位类型',
              isRequired: !1,
              readOnly: !1,
            },
          },
          propertyOrder: ['unit', 'quantity'],
        },
        'box-style': {
          type: 'box-style',
          title: '盒子模型',
          isRequired: !1,
          readOnly: !1,
          properties: {
            unit: {
              title: '单位数值',
              type: 'string',
              default: '0',
              description: '',
              isRequired: !1,
              readOnly: !1,
            },
            quantity: {
              type: 'typeSelect',
              default: 'px',
              enum: ['px', 'rem', 'em', '%'],
              enumextra: ['px', 'rem', 'em', '%'],
              title: '单位类型',
              isRequired: !1,
              readOnly: !1,
            },
          },
          propertyOrder: ['unit', 'quantity'],
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
          isRequired: !1,
          readOnly: !1,
        },
        'single-select': {
          type: 'single-select',
          title: '下拉单选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: 'a',
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        select: {
          type: 'select',
          title: '多选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: ['a'],
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        'dynamic-data': {
          type: 'dynamic-data',
          title: '动态数据源',
          readOnly: !1,
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
              isRequired: !0,
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
        event: b,
      },
      q = {
        on: {
          type: 'event',
          title: '事件',
          isRequired: !1,
          readOnly: !1,
          properties: {
            type: {
              default: 'on',
              type: 'typeSelect',
              enum: ['on', 'emit'],
              enumextra: ['on', 'emit'],
              title: '事件类型',
              isRequired: !1,
              readOnly: !1,
            },
            register: {
              type: 'input',
              default: 'eventName',
              title: '注册事件',
              description: '用于输入注册事件的名称',
              placeholder: '请输入注册事件的名称',
              isRequired: !1,
              readOnly: !1,
            },
            actionFunc: {
              title: '执行函数',
              type: 'codearea',
              default: '() => {}',
              description: '',
              isRequired: !1,
              readOnly: !1,
            },
          },
          propertyOrder: ['type', 'register', 'actionFunc'],
        },
        emit: b,
      },
      x = { local: g, remote: O };
    function R(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function S(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function N(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function D(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function k(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function F(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function T(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function w(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function P(e) {
      if (!w(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!S(e[t])) return !1;
      return !0;
    }
    function J(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function E(e) {
      var t = !1;
      return j.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function $(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function B(e) {
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
          e && J(e)
            ? (function (e) {
                var t;
                if (J(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = w(e.data) || J(e.data) ? i(x.local) : i(x.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = i(q.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = i(q.on))
                        : e.quantity && E(e.quantity) && 2 === r.length
                          ? (t = i(j.quantity))
                          : ((t = i(j['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = A(i);
                            }));
                }
                return t;
              })(e)
            : e && w(e)
              ? (function (e) {
                  var t;
                  if (e && w(e))
                    if (P(e)) {
                      (t = i(j.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        n = e.length;
                      if (n > r)
                        for (var a = r, o = n; a < o; a++)
                          t.items.enumextra.push('选项' + e(a));
                    } else {
                      t = i(j['empty-array']);
                      var p = A(e[0]);
                      t.items.properties = p.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (D(e)) t = i(j.boolean);
                  else if (N(e)) t = i(j.number);
                  else if (R(e)) t = i(j.url);
                  else if (k(e)) t = i(j.date);
                  else if (F(e)) t = i(j['date-time']);
                  else if (T(e)) t = i(j.time);
                  else if ($(e)) t = i(j.color);
                  else
                    try {
                      t = N(JSON.parse(e)) ? i(j.input) : i(j.json);
                    } catch (r) {
                      t = e && e.length > 30 ? i(j.textarea) : i(j.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function C(e) {
      var t = e && e.type;
      return t || (t = e && e.type ? e.type : 'input'), t;
    }
    function I(e) {
      var t = !0;
      if (!e) return t;
      var r = C(e);
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
    function K(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function L(e) {
      var t = !1;
      return (
        ('object' !== e &&
          'func' !== e &&
          'style' !== e &&
          'data' !== e &&
          'func-schema' !== e &&
          'style-schema' !== e &&
          'data-schema' !== e &&
          'event-schema' !== e) ||
          (t = !0),
        t
      );
    }
    function U(e) {
      var t = !0;
      return (
        'object' === (e.type || C(e)) && e.propertyOrder && e.properties
          ? e.propertyOrder.map(function (r) {
              var i = e.properties[r];
              ('object' === (e.type || C(i)) &&
                i.propertyOrder &&
                i.properties) ||
                (t = !1);
            })
          : (t = !1),
        t
      );
    }
    function _(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function M(e, t) {
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
    function z(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function W(e) {
      var t = e.split('-'),
        r = t.pop(),
        i = Number(r) + 1;
      return t.push('' + i), t.join('-');
    }
    function H(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function Q(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function V(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function Z(e, t) {
      var r = t || {};
      return (
        J(e) &&
          'object' === e.type &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = G(i, r);
            },
          ),
        r
      );
    }
    function G(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var n = C(e);
        'object' === n || 'func' === n || 'style' === n || 'data' === n
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = Z(e, i)))
          : 'array' === n
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = Z((e = e.items), i)))
            : !r && i[n]
              ? (i[n] += 1)
              : r || (i[n] = 1);
      }
      return i;
    }
    function X(e) {
      var t = i(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = C(t)),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type &&
          'radio' !== t.type &&
          'select' !== t.type) ||
          !a(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: i(t.enum),
              enumextra: i(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          n = i(j.quantity);
        if (r.quantity && J(r.quantity) && r.quantity.default) {
          var o = r.quantity.default;
          n.properties.quantity.default = 'percent' === o ? '%' : o;
        }
        t = n;
      }
      if ('datasource' === t.type) {
        var p = t.properties,
          u = p.type && p.type.default,
          l = p.data && p.data.default,
          d = p.filter && p.filter.default;
        'local' === u
          ? ((t = i(x.local)).properties.data.default = l ? i(l) : '{}')
          : ((t = i(x.remote)).properties.data.default = l
              ? i(l)
              : 'http://xxx'),
          (t.properties.filter.default = d ? i(d) : '() => {}');
      }
      if ('event' === t.type) {
        var s = t.properties,
          c = s.type && s.type.default;
        if ('in' === c || 'on' === c) {
          var y = (s.filter && s.filter.default) || '() => {}';
          (t = i(q.on)),
            s.actionFunc &&
              J(s.actionFunc) &&
              (t.properties.actionFunc.default = s.actionFunc.default || i(y));
        } else {
          var f = (s.filter && s.filter.default) || '{}';
          (t = i(q.emit)),
            s.eventData &&
              J(s.eventData) &&
              (t.properties.eventData.default = s.eventData.default || i(f));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = Y(t.properties[e]);
          })),
        t.items && (t.items = Y(t.items)),
        t
      );
    }
    function Y(e) {
      var t = i(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type &&
          'radio' !== t.type &&
          'select' !== t.type) ||
          !a(t.default) ||
          delete t.default,
        ('radio' !== t.type &&
          'select' !== t.type &&
          'single-select' !== t.type) ||
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
            t.properties[e] = Y(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = Y(t.items)),
        t
      );
    }
    function ee(e, t) {
      var r = '',
        i = t;
      a(i) && a(e.default) && typeof i != typeof e.default && (i = void 0);
      var n = a(i) ? i : e.default;
      switch (e.type) {
        case 'string':
          if ('typeSelect' === e.type) r = e.default;
          else if ('color' === e.type)
            ('#fff' !== n && '#FFF' !== n) || (n = '#ffffff'),
              (r = n || '#ffffff');
          else if ('json' === e.type) {
            var o = '';
            if (J(t) || w(t)) o = t;
            else if (B(t) || '' === t) o = {};
            else
              try {
                o = JSON.parse(t);
              } catch (e) {
                o = {};
              }
            r = o;
          } else r = a(n) ? n : '';
          break;
        case 'boolean':
          r = !!a(n) && n;
          break;
        case 'number':
          r = a(n) ? n : 1;
          break;
        default:
          r = a(n) ? n : '';
      }
      return r;
    }
    function te(e, t) {
      var r = {},
        n = C(e);
      if (J(e) && 'object' === e.type) {
        var o = e,
          p = t;
        a(p) && a(o.default) && typeof p != typeof o.default && (p = void 0);
        var u = a(p) ? p : o.default;
        'dynamic-data' === n
          ? ((r = i(h)),
            u &&
              J(u) &&
              '{}' !== JSON.stringify(u) &&
              (r = Object.assign(r, u)))
          : 'datasource' === n
            ? o.properties &&
              o.properties.type &&
              o.properties.type.default &&
              'local' === o.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                u && u.data && (r.data = u.data),
                u && u.filter && (r.filter = u.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                u && u.data && (r.data = u.data),
                u && u.filter && (r.filter = u.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === n
              ? o.properties &&
                o.properties.type &&
                o.properties.type.default &&
                'emit' === o.properties.type.default
                ? u && 'out' === u.type
                  ? (r = {
                      trigger: (u && u.filter) || 'eventName',
                      eventData: '{}',
                    })
                  : ((r = { trigger: 'eventName', eventData: '{}' }),
                    u && u.trigger && (r.trigger = u.trigger),
                    u && u.eventData && (r.eventData = u.eventData))
                : u && 'in' === u.type
                  ? (r = {
                      register: 'eventName',
                      actionFunc: (u && u.filter) || '() => {}',
                    })
                  : ((r = { register: 'eventName', actionFunc: '() => {}' }),
                    u && u.register && (r.register = u.register),
                    u && u.actionFunc && (r.actionFunc = u.actionFunc))
              : e.properties &&
                (e.propertyOrder
                  ? e.propertyOrder
                  : Object.keys(e.properties)
                ).map(function (i) {
                  var n = e.properties[i],
                    a = t && t[i];
                  switch (n.type) {
                    case 'array':
                      r[i] = re(n, a);
                      break;
                    case 'object':
                      r[i] = te(n, a);
                      break;
                    default:
                      r[i] = ee(n, a);
                  }
                });
      }
      return r;
    }
    function re(e, t) {
      var r = [];
      if (e && 'array' === e.type) {
        var i = t;
        a(i) && a(e.default) && typeof i != typeof e.default && (i = void 0);
        var n = a(i) ? i : e.default;
        if ('array' === e.type)
          if (w(n))
            n.map(function (t) {
              r.push(te(e.items, t));
            });
          else {
            var o = te(e.items, n);
            r.push(o);
          }
        else r = a(n) ? n : [];
      }
      return r;
    }
    function ie(e, t) {
      return 'object' === e.type
        ? te(e, t)
        : 'array' === e.type
          ? re(e, t)
          : ee(e, t);
    }
    var ne = j;
    function ae(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (J(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            J(e.config) &&
            e.config.dataName &&
            a(e.localFilter) &&
            a(e.data)
          ) {
            var i = e.config.body;
            if (i && !J(i))
              try {
                i = JSON.parse(i);
              } catch (e) {
                i = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: i });
          } else
            Object.keys(e).map(function (t) {
              ae(e[t], r);
            });
        else
          w(e) &&
            e.map(function (e) {
              ae(e, r);
            });
      return r;
    }
    function oe(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function pe(e, t) {
      var r = [];
      return (
        J(e)
          ? Object.keys(e).map(function (i) {
              var n = e[i],
                a = t ? t + '-' + i : i;
              J(n) || w(n)
                ? r.push({ title: i, value: a, key: a, children: pe(n, a) })
                : r.push({ title: i, value: a, key: a });
            })
          : w(e) &&
            e.map(function (e, i) {
              var n = i.toString(),
                a = t ? t + '-' + i : n;
              J(e) || w(e)
                ? r.push({ title: n, value: a, key: a, children: pe(e, a) })
                : r.push({ title: n, value: a, key: a });
            }),
        r
      );
    }
    var ue = {
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
    function le(e) {
      return ue[e] || e;
    }
    function de(e, t) {
      ue[e]
        ? console.warn('当前已经存在' + e + '(' + ue[e] + ')，暂时不支持覆盖。')
        : (ue[e] = t);
    }
    function se(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ce(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var ye = [
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
    return t;
  })();
});
