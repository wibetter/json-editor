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
          return h;
        },
        EventTypeDataList: function () {
          return g;
        },
        KeyWordList: function () {
          return le;
        },
        TypeDataList: function () {
          return v;
        },
        dataRoute2dataPath: function () {
          return ae;
        },
        dynamicDataAnalyzer: function () {
          return ne;
        },
        getCurPosition: function () {
          return V;
        },
        getDefaultOptionVal: function () {
          return X;
        },
        getExpectType: function () {
          return K;
        },
        getJsonDataByKeyRoute: function () {
          return o;
        },
        getNextIndexRoute: function () {
          return H;
        },
        getParentIndexRoute: function () {
          return W;
        },
        getParentIndexRoute_CurIndex: function () {
          return Q;
        },
        getParentKeyRoute: function () {
          return pe;
        },
        getParentKeyRoute_CurKey: function () {
          return ue;
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
          return D;
        },
        isBoolean: function () {
          return S;
        },
        isColor: function () {
          return w;
        },
        isContainerSchema: function () {
          return _;
        },
        isDateStr: function () {
          return q;
        },
        isDateTimeStr: function () {
          return k;
        },
        isEmptySchema: function () {
          return I;
        },
        isEqual: function () {
          return n;
        },
        isFunction: function () {
          return P;
        },
        isNewSchemaData: function () {
          return U;
        },
        isNumber: function () {
          return x;
        },
        isObject: function () {
          return F;
        },
        isQuantity: function () {
          return T;
        },
        isSameParent: function () {
          return z;
        },
        isSelect: function () {
          return R;
        },
        isString: function () {
          return O;
        },
        isStructuredSchema: function () {
          return M;
        },
        isTimeStr: function () {
          return N;
        },
        isURL: function () {
          return j;
        },
        json2schema: function () {
          return E;
        },
        json2treeData: function () {
          return oe;
        },
        keyRoute2indexRoute: function () {
          return c;
        },
        metaElemAnalyzer: function () {
          return $;
        },
        moveBackward: function () {
          return G;
        },
        moveForward: function () {
          return Z;
        },
        objClone: function () {
          return i;
        },
        oldSchemaToNewSchema: function () {
          return B;
        },
        oldSchemaToNewSchemaV1: function () {
          return A;
        },
        registerExpectType: function () {
          return L;
        },
        schema2json: function () {
          return re;
        },
        schemaMetaList: function () {
          return ie;
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
              'select' !== n.type &&
              'checkboxes' !== n.type) ||
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
    function c(e, t) {
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
      d,
      f = {
        type: 'event',
        title: '事件',
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
      y = {
        type: 'datasource',
        title: '数据源',
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
      m =
        (((s = { type: 'object' }).type = 'datasource'),
        (s.title = '数据源'),
        (s.properties = {
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
        (s.propertyOrder = ['type', 'data', 'filter']),
        s),
      b = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      v = {
        jsonschema: {
          type: 'object',
          title: 'jsonSchemaObject',
          properties: {
            func: {
              type: 'object',
              title: '功能设置',
              isFixed: !0,
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
              isFixed: !0,
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
              isFixed: !0,
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
          title: '下拉单选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: 'a',
          description: '',
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
        datasource: y,
        event: f,
      },
      g = {
        on: {
          type: 'event',
          title: '事件',
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
        emit: f,
      },
      h = { local: y, remote: m };
    function j(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function O(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function x(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function S(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function q(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function k(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function N(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function D(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function R(e) {
      if (!D(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!O(e[t])) return !1;
      return !0;
    }
    function F(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function T(e) {
      var t = !1;
      return v.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function w(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function P(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function E(e) {
      var t;
      return (
        (t =
          e && F(e)
            ? (function (e) {
                var t;
                if (F(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = D(e.data) || F(e.data) ? i(h.local) : i(h.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = i(g.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = i(g.on))
                        : e.quantity && T(e.quantity) && 2 === r.length
                          ? (t = i(v.quantity))
                          : ((t = i(v['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = E(i);
                            }));
                }
                return t;
              })(e)
            : e && D(e)
              ? (function (e) {
                  var t;
                  if (e && D(e))
                    if (R(e)) {
                      (t = i(v.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        n = e.length;
                      if (n > r)
                        for (var a = r, o = n; a < o; a++)
                          t.items.enumextra.push('选项' + e(a));
                    } else {
                      t = i(v['empty-array']);
                      var p = E(e[0]);
                      t.items.properties = p.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (S(e)) t = i(v.boolean);
                  else if (x(e)) t = i(v.number);
                  else if (j(e)) t = i(v.url);
                  else if (q(e)) t = i(v.date);
                  else if (k(e)) t = i(v['date-time']);
                  else if (N(e)) t = i(v.time);
                  else if (w(e)) t = i(v.color);
                  else
                    try {
                      t = x(JSON.parse(e)) ? i(v.input) : i(v.json);
                    } catch (r) {
                      t = e && e.length > 30 ? i(v.textarea) : i(v.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function J(e, t) {
      var r = t || {};
      return (
        F(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = $(i, r);
            },
          ),
        r
      );
    }
    function $(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var n = e.type;
        'object' === n || 'func' === n || 'style' === n || 'data' === n
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = J(e, i)))
          : 'array' === n
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = J((e = e.items), i)))
            : !r && i[n]
              ? (i[n] += 1)
              : r || (i[n] = 1);
      }
      return i;
    }
    function A(e) {
      var t = i(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
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
          n = i(v.quantity);
        if (r.quantity && F(r.quantity) && r.quantity.default) {
          var o = r.quantity.default;
          n.properties.quantity.default = 'percent' === o ? '%' : o;
        }
        t = n;
      }
      if ('datasource' === t.type) {
        var p = t.properties,
          u = p.type && p.type.default,
          l = p.data && p.data.default,
          c = p.filter && p.filter.default;
        'local' === u
          ? ((t = i(h.local)).properties.data.default = l ? i(l) : '{}')
          : ((t = i(h.remote)).properties.data.default = l
              ? i(l)
              : 'http://xxx'),
          (t.properties.filter.default = c ? i(c) : '() => {}');
      }
      if ('event' === t.type) {
        var s = t.properties,
          d = s.type && s.type.default;
        if ('in' === d || 'on' === d) {
          var f = (s.filter && s.filter.default) || '() => {}';
          (t = i(g.on)),
            s.actionFunc &&
              F(s.actionFunc) &&
              (t.properties.actionFunc.default = s.actionFunc.default || i(f));
        } else {
          var y = (s.filter && s.filter.default) || '{}';
          (t = i(g.emit)),
            s.eventData &&
              F(s.eventData) &&
              (t.properties.eventData.default = s.eventData.default || i(y));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = B(t.properties[e]);
          })),
        t.items && (t.items = B(t.items)),
        t
      );
    }
    function B(e) {
      var t = i(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !a(t.default) ||
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
            t.properties[e] = B(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = B(t.items)),
        t
      );
    }
    var C =
      (((d = {
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
        quantity: 'object',
        radio: 'string',
        select: 'array',
      }).select = 'string'),
      (d.textarea = 'string'),
      (d['text-editor'] = 'string'),
      (d.time = 'string'),
      (d.url = 'string'),
      d);
    function K(e) {
      return C[e] || e;
    }
    function L(e, t) {
      C[e]
        ? console.warn('当前已经存在' + e + '(' + C[e] + ')，暂时不支持覆盖。')
        : (C[e] = t);
    }
    function I(e) {
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
    function U(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function _(e) {
      var t = !1;
      return 'object' === K(e.type) && (t = !0), t;
    }
    function M(e) {
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
    function z(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function V(e, t) {
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
    function W(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function H(e) {
      var t = e.split('-'),
        r = t.pop(),
        i = Number(r) + 1;
      return t.push('' + i), t.join('-');
    }
    function Q(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function Z(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function G(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function X(e, t) {
      var r = '';
      return (
        e.options && (r = e.options[0].value), (t || e.multiple) && (r = [r]), r
      );
    }
    function Y(e, t) {
      var r = '',
        i = t;
      a(i) && a(e.default) && typeof i != typeof e.default && (i = void 0);
      var n = a(i) ? i : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          r = n || X(e);
          break;
        case 'checkboxes':
          r = n || X(e, !0);
          break;
        case 'color':
          ('#fff' !== n && '#FFF' !== n) || (n = '#ffffff'),
            (r = n || X(e, !0));
          break;
        case 'json':
          var o = '';
          if (F(n) || D(n)) o = n;
          else if (P(n) || '' === n) o = {};
          else
            try {
              o = JSON.parse(n);
            } catch (e) {
              o = {};
            }
          r = o;
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
    function ee(e, t) {
      var r = {},
        n = e.type;
      if (F(e) && 'object' === K(e.type)) {
        var o = e,
          p = t;
        a(p) && a(o.default) && typeof p != typeof o.default && (p = void 0);
        var u = a(p) ? p : o.default;
        'dynamic-data' === n
          ? ((r = i(b)),
            u &&
              F(u) &&
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
                  switch (K(n.type)) {
                    case 'array':
                      r[i] = te(n, a);
                      break;
                    case 'object':
                      r[i] = ee(n, a);
                      break;
                    default:
                      r[i] = Y(n, a);
                  }
                });
      }
      return r;
    }
    function te(e, t) {
      var r = [];
      if (e && 'array' === K(e.type)) {
        var i = t;
        a(i) && a(e.default) && typeof i != typeof e.default && (i = void 0);
        var n = a(i) ? i : e.default;
        if ('array' === K(e.type))
          if (D(n))
            n.map(function (t) {
              r.push(ee(e.items, t));
            });
          else {
            var o = ee(e.items, n);
            r.push(o);
          }
        else r = a(n) ? n : [];
      }
      return r;
    }
    function re(e, t) {
      return 'object' === K(e.type)
        ? ee(e, t)
        : 'array' === K(e.type)
          ? te(e, t)
          : Y(e, t);
    }
    var ie = v;
    function ne(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (F(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            F(e.config) &&
            e.config.dataName &&
            a(e.localFilter) &&
            a(e.data)
          ) {
            var i = e.config.body;
            if (i && !F(i))
              try {
                i = JSON.parse(i);
              } catch (e) {
                i = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: i });
          } else
            Object.keys(e).map(function (t) {
              ne(e[t], r);
            });
        else
          D(e) &&
            e.map(function (e) {
              ne(e, r);
            });
      return r;
    }
    function ae(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function oe(e, t) {
      var r = [];
      return (
        F(e)
          ? Object.keys(e).map(function (i) {
              var n = e[i],
                a = t ? t + '-' + i : i;
              F(n) || D(n)
                ? r.push({ title: i, value: a, key: a, children: oe(n, a) })
                : r.push({ title: i, value: a, key: a });
            })
          : D(e) &&
            e.map(function (e, i) {
              var n = i.toString(),
                a = t ? t + '-' + i : n;
              F(e) || D(e)
                ? r.push({ title: n, value: a, key: a, children: oe(e, a) })
                : r.push({ title: n, value: a, key: a });
            }),
        r
      );
    }
    function pe(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ue(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var le = [
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
