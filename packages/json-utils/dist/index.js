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
          return g;
        },
        EventTypeDataList: function () {
          return m;
        },
        KeyWordList: function () {
          return oe;
        },
        TypeDataList: function () {
          return y;
        },
        dataRoute2dataPath: function () {
          return re;
        },
        dynamicDataAnalyzer: function () {
          return te;
        },
        getCurPosition: function () {
          return U;
        },
        getCurrentFormat: function () {
          return T;
        },
        getJsonDataByKeyRoute: function () {
          return o;
        },
        getNextIndexRoute: function () {
          return K;
        },
        getParentIndexRoute: function () {
          return A;
        },
        getParentIndexRoute_CurIndex: function () {
          return W;
        },
        getParentKeyRoute: function () {
          return ae;
        },
        getParentKeyRoute_CurKey: function () {
          return ne;
        },
        getSchemaByIndexRoute: function () {
          return p;
        },
        getSchemaByKeyRoute: function () {
          return u;
        },
        hasProperties: function () {
          return n;
        },
        indexRoute2keyRoute: function () {
          return l;
        },
        isArray: function () {
          return R;
        },
        isBoolean: function () {
          return j;
        },
        isBoxSchemaData: function () {
          return C;
        },
        isColor: function () {
          return k;
        },
        isDateStr: function () {
          return h;
        },
        isDateTimeStr: function () {
          return q;
        },
        isEmptySchema: function () {
          return P;
        },
        isEmptyWidgetSchema: function () {
          return J;
        },
        isEqual: function () {
          return a;
        },
        isFirstSchemaData: function () {
          return E;
        },
        isFunction: function () {
          return F;
        },
        isNewSchemaData: function () {
          return B;
        },
        isNumber: function () {
          return O;
        },
        isObject: function () {
          return N;
        },
        isQuantity: function () {
          return D;
        },
        isSameParent: function () {
          return L;
        },
        isSelect: function () {
          return S;
        },
        isString: function () {
          return v;
        },
        isStructuredSchema: function () {
          return I;
        },
        isTimeStr: function () {
          return x;
        },
        isURL: function () {
          return b;
        },
        isUsedToWidgetConfig: function () {
          return $;
        },
        json2schema: function () {
          return w;
        },
        json2treeData: function () {
          return ie;
        },
        keyRoute2indexRoute: function () {
          return s;
        },
        metaElemAnalyzer: function () {
          return H;
        },
        moveBackward: function () {
          return M;
        },
        moveForward: function () {
          return _;
        },
        objClone: function () {
          return i;
        },
        oldSchemaToNewSchema: function () {
          return V;
        },
        oldSchemaToNewSchemaV1: function () {
          return Q;
        },
        schema2json: function () {
          return Y;
        },
        schemaMetaList: function () {
          return ee;
        },
      });
    var r = require('lodash');
    function i(e) {
      return (0, r.cloneDeep)(e);
    }
    function a(e, t) {
      return (0, r.isEqual)(e, t);
    }
    function n(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function o(e, t, r) {
      var a = t;
      if ((r && (a = i(t)), e))
        for (var n = e.split('-'), o = 0, p = n.length; o < p; o++) {
          var u = n[o];
          u && (a = a && a[u]);
        }
      return a;
    }
    function p(e, t, r) {
      var a = t;
      if ((r && (a = i(t)), e))
        for (var n = e.split('-'), o = 0, p = n.length; o < p; o++) {
          var u = n[o];
          if (
            '0' !== u ||
            ('array' !== a.format &&
              'radio' !== a.format &&
              'single-select' !== a.format &&
              'select' !== a.format) ||
            (!a.options && !a.items)
          ) {
            if (u) {
              var l = '0';
              a.propertyOrder
                ? (l = a.propertyOrder[u])
                : a.properties && (l = Object.keys(a.properties)[u]),
                (a = a.properties[l]);
            }
          } else a = a.options || a.items;
        }
      return a;
    }
    function u(e, t, r) {
      var a = t;
      if ((r && (a = i(t)), e && a))
        for (var n = e.split('-'), o = 0, p = n.length; o < p; o++) {
          var u = n[o];
          u && a.properties && (a = a.properties[u]);
        }
      return a;
    }
    function l(e, t) {
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
    function s(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), n = 0, o = a.length;
        n < o;
        n++
      ) {
        var p = a[n];
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
    var d = {
        type: 'object',
        format: 'event',
        title: '事件',
        isRequired: !1,
        readOnly: !1,
        properties: {
          type: {
            type: 'string',
            default: 'emit',
            format: 'typeSelect',
            enum: ['on', 'emit'],
            enumextra: ['on', 'emit'],
            title: '事件类型',
            isRequired: !1,
            readOnly: !1,
          },
          trigger: {
            type: 'string',
            format: 'input',
            default: 'eventName',
            title: '触发事件',
            description: '用于输入触发事件的名称',
            placeholder: '请输入触发事件的名称',
            isRequired: !1,
            readOnly: !1,
          },
          eventData: {
            type: 'string',
            title: '事件数据',
            format: 'json',
            default: '{}',
            description: '传递给触发事件的数据对象',
            isRequired: !1,
            readOnly: !1,
          },
        },
        propertyOrder: ['type', 'trigger', 'eventData'],
      },
      f = {
        type: 'object',
        format: 'datasource',
        title: '数据源',
        readOnly: !1,
        properties: {
          type: {
            type: 'string',
            default: 'local',
            format: 'typeSelect',
            enum: ['local', 'remote'],
            enumextra: ['local', 'remote'],
            title: '数据源类型',
          },
          data: {
            type: 'string',
            title: '本地json数据',
            placeholder: '请输入静态json数据',
            format: 'json',
            default: '{}',
            description: '用于设置本地的静态json数据',
            isRequired: !0,
          },
          filter: {
            type: 'string',
            title: '过滤器',
            format: 'codearea',
            default: '() => {}',
            description: '用于定义过滤当前数据的函数',
            isRequired: !0,
          },
        },
        propertyOrder: ['type', 'data', 'filter'],
      },
      c = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      y = {
        jsonschema: {
          type: 'object',
          title: 'jsonSchemaObject',
          properties: {
            func: {
              type: 'object',
              format: 'func',
              title: '功能设置',
              readOnly: !0,
              properties: {
                a: {
                  type: 'string',
                  title: '单文本框',
                  format: 'input',
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
              format: 'style',
              title: '样式设置',
              readOnly: !0,
              properties: {
                b: {
                  type: 'string',
                  title: '单文本框',
                  format: 'input',
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
              type: 'object',
              format: 'data',
              title: '数据设置',
              readOnly: !0,
              properties: {
                c: {
                  type: 'string',
                  title: '单文本框',
                  format: 'input',
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
          type: 'string',
          title: '单文本框',
          format: 'input',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        boolean: {
          type: 'boolean',
          title: '布尔值',
          format: 'boolean',
          default: !1,
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        object: {
          type: 'object',
          format: 'object',
          title: '对象Object',
          description: '',
          isRequired: !1,
          readOnly: !1,
          properties: {
            a: {
              type: 'string',
              title: '单文本框',
              format: 'input',
              default: '',
              description: '',
              placeholder: '',
              isRequired: !1,
              readOnly: !1,
            },
          },
          propertyOrder: ['a'],
        },
        array: {
          type: 'array',
          format: 'array',
          title: '数组Array',
          description: '',
          isRequired: !1,
          readOnly: !1,
          items: {
            type: 'object',
            format: 'object',
            title: '数组项',
            description: '',
            isRequired: !1,
            readOnly: !1,
            properties: {
              name: {
                type: 'string',
                format: 'input',
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
          format: 'array',
          title: '数组Array',
          description: '',
          items: {
            type: 'object',
            format: 'object',
            title: '数组项',
            description: '',
            properties: {},
          },
        },
        'empty-object': {
          type: 'object',
          format: 'object',
          title: '对象Object',
          description: '',
          properties: {},
        },
        url: {
          type: 'string',
          title: '链接地址url',
          format: 'url',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        textarea: {
          type: 'string',
          title: '多行文本框',
          format: 'textarea',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        color: {
          type: 'string',
          title: '颜色color',
          format: 'color',
          default: '#ffffff',
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        image: {
          type: 'string',
          title: '图片',
          format: 'image',
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
          format: 'number',
          default: 1,
          minimum: 0,
          maximum: 1e3,
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        json: {
          type: 'string',
          title: 'json数据',
          format: 'json',
          default: '{}',
          description: '',
          isRequired: !1,
          readOnly: !1,
        },
        codearea: {
          type: 'string',
          title: '函数类型',
          format: 'codearea',
          placeholder: '请输入函数方法',
          default: 'function func() { console.log("hello, world!"); }',
          description: '用于定义函数方法',
          isRequired: !1,
          readOnly: !1,
        },
        htmlarea: {
          type: 'string',
          title: '富文本',
          format: 'htmlarea',
          placeholder: '请输入html代码片段',
          default: '<p>hello,world!</p>',
          description: '用于放置html代码片段',
          isRequired: !1,
          readOnly: !1,
        },
        'text-editor': {
          type: 'string',
          title: '富文本',
          format: 'text-editor',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        date: {
          type: 'string',
          title: '日期Date',
          format: 'date',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        'date-time': {
          type: 'string',
          title: '日期时间',
          format: 'date-time',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        time: {
          type: 'string',
          title: '时间Time',
          format: 'time',
          default: '',
          description: '',
          placeholder: '',
          isRequired: !1,
          readOnly: !1,
        },
        quantity: {
          type: 'object',
          format: 'quantity',
          title: '单位计量',
          isRequired: !1,
          readOnly: !1,
          properties: {
            unit: {
              type: 'number',
              title: '单位数值',
              format: 'number',
              default: 50,
              minimum: 0,
              maximum: 1e3,
              description: '',
              isRequired: !1,
              readOnly: !1,
            },
            quantity: {
              type: 'string',
              format: 'typeSelect',
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
          type: 'object',
          format: 'box-style',
          title: '盒子模型',
          isRequired: !1,
          readOnly: !1,
          properties: {
            unit: {
              type: 'string',
              title: '单位数值',
              format: 'string',
              default: '0',
              description: '',
              isRequired: !1,
              readOnly: !1,
            },
            quantity: {
              type: 'string',
              format: 'typeSelect',
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
          type: 'string',
          title: '单选',
          format: 'radio',
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
          type: 'string',
          title: '下拉单选',
          format: 'single-select',
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
          type: 'array',
          title: '多选',
          format: 'select',
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
          type: 'object',
          format: 'dynamic-data',
          title: '动态数据源',
          readOnly: !1,
          properties: {
            type: {
              type: 'string',
              default: 'local',
              format: 'typeSelect',
              enum: ['local', 'remote'],
              enumextra: ['本地数据', '接口数据'],
              title: '数据类型',
            },
            config: {
              type: 'object',
              title: '接口配置',
              format: 'object',
              description: '用于存放接口的配置数据(url、请求参数等)',
              isRequired: !0,
              properties: {
                dataName: {
                  type: 'string',
                  default: 'local',
                  format: 'typeSelect',
                  enum: ['local', 'remote'],
                  enumextra: ['本地数据', '接口数据'],
                  title: '数据类型',
                },
                body: {
                  type: 'object',
                  title: '请求参数配置',
                  format: 'object',
                  description: '用于配置当前接口的请求参数数值',
                  isRequired: !0,
                },
                filter: {
                  type: 'string',
                  title: '过滤器函数体',
                  format: 'codearea',
                  default: 'return data;',
                  description: '用于定义过滤接口数据',
                  isRequired: !0,
                },
              },
              propertyOrder: ['dataName', 'body', 'filter'],
            },
            data: {
              type: 'string',
              title: '数据内容',
              format: 'json',
              default: '{}',
              description: '用于存放DynamicData的数据内容',
              isRequired: !0,
            },
            localFilter: {
              type: 'string',
              title: '过滤器',
              format: 'codearea',
              default: 'return data;',
              description: '用于定义过滤本地数据',
              isRequired: !0,
            },
          },
          propertyOrder: ['type', 'config', 'data', 'localFilter'],
        },
        datasource: f,
        event: d,
        widget: {
          type: 'string',
          title: '内嵌组件数据',
          format: 'widget',
          default: '{}',
          description: '用于存放内嵌组件的渲染相关数据',
          isRequired: !1,
          readOnly: !0,
        },
      },
      m = {
        on: {
          type: 'object',
          format: 'event',
          title: '事件',
          isRequired: !1,
          readOnly: !1,
          properties: {
            type: {
              type: 'string',
              default: 'on',
              format: 'typeSelect',
              enum: ['on', 'emit'],
              enumextra: ['on', 'emit'],
              title: '事件类型',
              isRequired: !1,
              readOnly: !1,
            },
            register: {
              type: 'string',
              format: 'input',
              default: 'eventName',
              title: '注册事件',
              description: '用于输入注册事件的名称',
              placeholder: '请输入注册事件的名称',
              isRequired: !1,
              readOnly: !1,
            },
            actionFunc: {
              type: 'string',
              title: '执行函数',
              format: 'codearea',
              default: '() => {}',
              description: '',
              isRequired: !1,
              readOnly: !1,
            },
          },
          propertyOrder: ['type', 'register', 'actionFunc'],
        },
        emit: d,
      },
      g = {
        local: f,
        remote: {
          type: 'object',
          format: 'datasource',
          title: '数据源',
          readOnly: !1,
          properties: {
            type: {
              type: 'string',
              default: 'remote',
              format: 'typeSelect',
              enum: ['local', 'remote'],
              enumextra: ['local', 'remote'],
              title: '数据源类型',
            },
            data: {
              type: 'string',
              title: '远程json数据',
              placeholder: '请输入远程json数据源地址',
              format: 'url',
              default: 'http://xxx',
              isRequired: !0,
              description: '用于设置获取元素数据的请求地址',
            },
            filter: {
              type: 'string',
              title: '过滤器',
              format: 'codearea',
              default: '() => {}',
              description: '用于定义过滤当前数据的函数',
              isRequired: !0,
            },
          },
          propertyOrder: ['type', 'data', 'filter'],
        },
      };
    function b(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function v(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function O(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function j(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function h(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function q(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function x(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function R(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function S(e) {
      if (!R(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!v(e[t])) return !1;
      return !0;
    }
    function N(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function D(e) {
      var t = !1;
      return y.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function k(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function F(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function w(e) {
      var t;
      return (
        (t =
          e && N(e)
            ? (function (e) {
                var t;
                if (N(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = R(e.data) || N(e.data) ? i(g.local) : i(g.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = i(m.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = i(m.on))
                        : e.quantity && D(e.quantity) && 2 === r.length
                          ? (t = i(y.quantity))
                          : ((t = i(y['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = w(i);
                            }));
                }
                return t;
              })(e)
            : e && R(e)
              ? (function (e) {
                  var t;
                  if (e && R(e))
                    if (S(e)) {
                      (t = i(y.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        a = e.length;
                      if (a > r)
                        for (var n = r, o = a; n < o; n++)
                          t.items.enumextra.push('选项' + e(n));
                    } else {
                      t = i(y['empty-array']);
                      var p = w(e[0]);
                      t.items.properties = p.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (j(e)) t = i(y.boolean);
                  else if (O(e)) t = i(y.number);
                  else if (b(e)) t = i(y.url);
                  else if (h(e)) t = i(y.date);
                  else if (q(e)) t = i(y['date-time']);
                  else if (x(e)) t = i(y.time);
                  else if (k(e)) t = i(y.color);
                  else
                    try {
                      t = O(JSON.parse(e)) ? i(y.input) : i(y.json);
                    } catch (r) {
                      t = e && e.length > 30 ? i(y.textarea) : i(y.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function T(e) {
      var t = e && e.format;
      return t || (t = e && e.type ? e.type : 'input'), t;
    }
    function P(e) {
      var t = !0;
      if (!e) return t;
      var r = T(e);
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
          e.format) &&
          (t = !1),
        t
      );
    }
    function J(e) {
      var t = !0;
      if (
        e &&
        'object' === T(e) &&
        e.properties &&
        e.propertyOrder &&
        e.propertyOrder.length > 0
      ) {
        var r = e.properties.func || {},
          i = e.properties.style || {},
          a = e.properties.data || {};
        ((r.propertyOrder && r.propertyOrder.length > 0) ||
          (i.propertyOrder && i.propertyOrder.length > 0) ||
          (a.propertyOrder && a.propertyOrder.length > 0)) &&
          (t = !1);
      }
      return t;
    }
    function $(e) {
      var t = !1;
      return (
        e &&
          'object' === T(e) &&
          e.properties &&
          e.propertyOrder &&
          e.properties.func &&
          e.properties.style &&
          e.properties.data &&
          (t = !0),
        t
      );
    }
    function B(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-03T23:30:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function C(e) {
      var t = !1;
      return (
        ('object' !== e &&
          'func' !== e &&
          'style' !== e &&
          'data' !== e &&
          'widgets' !== e &&
          'func-schema' !== e &&
          'style-schema' !== e &&
          'data-schema' !== e &&
          'event-schema' !== e &&
          'widgets-schema' !== e) ||
          (t = !0),
        t
      );
    }
    function E(e) {
      var t = !1;
      return (
        ('func' !== e &&
          'style' !== e &&
          'data' !== e &&
          'props' !== e &&
          'event-schema' !== e &&
          'widgets' !== e) ||
          (t = !0),
        t
      );
    }
    function I(e) {
      var t = !0;
      return (
        'object' === (e.type || T(e)) && e.propertyOrder && e.properties
          ? e.propertyOrder.map(function (r) {
              var i = e.properties[r];
              ('object' === (e.type || T(i)) &&
                i.propertyOrder &&
                i.properties) ||
                (t = !1);
            })
          : (t = !1),
        t
      );
    }
    function L(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function U(e, t) {
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
    function A(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function K(e) {
      var t = e.split('-'),
        r = t.pop(),
        i = Number(r) + 1;
      return t.push('' + i), t.join('-');
    }
    function W(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function _(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function M(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function z(e, t) {
      var r = t || {};
      return (
        N(e) &&
          'object' === e.type &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = H(i, r);
            },
          ),
        r
      );
    }
    function H(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var a = T(e);
        'object' === a || 'func' === a || 'style' === a || 'data' === a
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = z(e, i)))
          : 'array' === a
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = z((e = e.items), i)))
            : !r && i[a]
              ? (i[a] += 1)
              : r || (i[a] = 1);
      }
      return i;
    }
    function Q(e) {
      var t = i(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.format || (t.format = T(t)),
        ('quantity' !== t.format &&
          'array' !== t.format &&
          'datasource' !== t.format &&
          'event' !== t.format &&
          'object' !== t.format &&
          'radio' !== t.format &&
          'select' !== t.format) ||
          !n(t.default) ||
          delete t.default,
        'radio' === t.format &&
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
        'quantity' === t.format)
      ) {
        var r = t.properties,
          a = i(y.quantity);
        if (r.quantity && N(r.quantity) && r.quantity.default) {
          var o = r.quantity.default;
          a.properties.quantity.default = 'percent' === o ? '%' : o;
        }
        t = a;
      }
      if ('datasource' === t.format) {
        var p = t.properties,
          u = p.type && p.type.default,
          l = p.data && p.data.default,
          s = p.filter && p.filter.default;
        'local' === u
          ? ((t = i(g.local)).properties.data.default = l ? i(l) : '{}')
          : ((t = i(g.remote)).properties.data.default = l
              ? i(l)
              : 'http://xxx'),
          (t.properties.filter.default = s ? i(s) : '() => {}');
      }
      if ('event' === t.format) {
        var d = t.properties,
          f = d.type && d.type.default;
        if ('in' === f || 'on' === f) {
          var c = (d.filter && d.filter.default) || '() => {}';
          (t = i(m.on)),
            d.actionFunc &&
              N(d.actionFunc) &&
              (t.properties.actionFunc.default = d.actionFunc.default || i(c));
        } else {
          var b = (d.filter && d.filter.default) || '{}';
          (t = i(m.emit)),
            d.eventData &&
              N(d.eventData) &&
              (t.properties.eventData.default = d.eventData.default || i(b));
        }
      }
      return (
        t.properties &&
          ((t.required = Object.keys(t.properties)),
          t.propertyOrder || (t.propertyOrder = t.required),
          t.propertyOrder.map(function (e) {
            t.properties[e] = V(t.properties[e]);
          })),
        t.items && (t.items = V(t.items)),
        t
      );
    }
    function V(e) {
      var t = i(e);
      return (
        t.format || (t.format = T(t)),
        t.required || delete t.required,
        ('quantity' !== t.format &&
          'array' !== t.format &&
          'datasource' !== t.format &&
          'event' !== t.format &&
          'object' !== t.format &&
          'radio' !== t.format &&
          'select' !== t.format) ||
          !n(t.default) ||
          delete t.default,
        ('radio' !== t.format &&
          'select' !== t.format &&
          'single-select' !== t.format) ||
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
            t.properties[e] = V(t.properties[e]);
          })),
        'array' === t.format && t.items && (t.items = V(t.items)),
        t
      );
    }
    function Z(e, t) {
      var r = '',
        i = t;
      n(i) && n(e.default) && typeof i != typeof e.default && (i = void 0);
      var a = n(i) ? i : e.default;
      switch (e.type) {
        case 'string':
          if ('typeSelect' === e.format) r = e.default;
          else if ('color' === e.format)
            ('#fff' !== a && '#FFF' !== a) || (a = '#ffffff'),
              (r = a || '#ffffff');
          else if ('json' === e.format || 'widget' === e.format) {
            var o = '';
            if (N(t) || R(t)) o = t;
            else if (F(t) || '' === t) o = {};
            else
              try {
                o = JSON.parse(t);
              } catch (e) {
                o = {};
              }
            r = o;
          } else r = n(a) ? a : '';
          break;
        case 'boolean':
          r = !!n(a) && a;
          break;
        case 'number':
          r = n(a) ? a : 1;
          break;
        default:
          r = n(a) ? a : '';
      }
      return r;
    }
    function G(e, t) {
      var r = {},
        a = T(e);
      if (N(e) && 'object' === e.type) {
        var o = e,
          p = t;
        n(p) && n(o.default) && typeof p != typeof o.default && (p = void 0);
        var u = n(p) ? p : o.default;
        'dynamic-data' === a
          ? ((r = i(c)),
            u &&
              N(u) &&
              '{}' !== JSON.stringify(u) &&
              (r = Object.assign(r, u)))
          : 'datasource' === a
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
            : 'event' === a
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
                  var a = e.properties[i],
                    n = t && t[i];
                  switch (a.type) {
                    case 'array':
                      r[i] = X(a, n);
                      break;
                    case 'object':
                      r[i] = G(a, n);
                      break;
                    default:
                      r[i] = Z(a, n);
                  }
                });
      }
      return r;
    }
    function X(e, t) {
      var r = [];
      if (e && 'array' === e.type) {
        var i = t;
        n(i) && n(e.default) && typeof i != typeof e.default && (i = void 0);
        var a = n(i) ? i : e.default;
        if ('array' === e.format)
          if (R(a))
            a.map(function (t) {
              r.push(G(e.items, t));
            });
          else {
            var o = G(e.items, a);
            r.push(o);
          }
        else r = n(a) ? a : [];
      }
      return r;
    }
    function Y(e, t) {
      return 'object' === e.type
        ? G(e, t)
        : 'array' === e.type
          ? X(e, t)
          : Z(e, t);
    }
    var ee = y;
    function te(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (N(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            N(e.config) &&
            e.config.dataName &&
            n(e.localFilter) &&
            n(e.data)
          ) {
            var i = e.config.body;
            if (i && !N(i))
              try {
                i = JSON.parse(i);
              } catch (e) {
                i = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: i });
          } else
            Object.keys(e).map(function (t) {
              te(e[t], r);
            });
        else
          R(e) &&
            e.map(function (e) {
              te(e, r);
            });
      return r;
    }
    function re(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function ie(e, t) {
      var r = [];
      return (
        N(e)
          ? Object.keys(e).map(function (i) {
              var a = e[i],
                n = t ? t + '-' + i : i;
              N(a) || R(a)
                ? r.push({ title: i, value: n, key: n, children: ie(a, n) })
                : r.push({ title: i, value: n, key: n });
            })
          : R(e) &&
            e.map(function (e, i) {
              var a = i.toString(),
                n = t ? t + '-' + i : a;
              N(e) || R(e)
                ? r.push({ title: a, value: n, key: n, children: ie(e, n) })
                : r.push({ title: a, value: n, key: n });
            }),
        r
      );
    }
    function ae(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ne(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var oe = [
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
      'widget',
      'widgets',
      'widgetUUID',
      'embedWidgetList',
    ];
    return t;
  })();
});
