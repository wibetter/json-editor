/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define([], t)
      : 'object' == typeof exports
        ? (exports.JSONSchemaEditor = t())
        : (e.JSONSchemaEditor = t());
})(this, function () {
  return (function () {
    var e = {
        23: function (e, t, n) {
          var a = n(382);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('adbe60da', a, !1, { sourceMap: !1 }));
        },
        40: function (e, t, n) {
          var a = n(961);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('405d88dc', a, !1, { sourceMap: !1 }));
        },
        80: function () {},
        264: function () {},
        286: function () {},
        382: function () {},
        611: function (e, t, n) {
          'use strict';
          function a(e, t) {
            for (var n = [], a = {}, o = 0; o < t.length; o++) {
              var r = t[o],
                i = r[0],
                s = {
                  id: e + ':' + o,
                  css: r[1],
                  media: r[2],
                  sourceMap: r[3],
                };
              a[i]
                ? a[i].parts.push(s)
                : n.push((a[i] = { id: i, parts: [s] }));
            }
            return n;
          }
          n.d(t, {
            A: function () {
              return h;
            },
          });
          var o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var r = {},
            i =
              o && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            l = 0,
            c = !1,
            d = function () {},
            m = null,
            u = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, n, o) {
            ((c = n), (m = o || {}));
            var i = a(e, t);
            return (
              y(i),
              function (t) {
                for (var n = [], o = 0; o < i.length; o++) {
                  var s = i[o];
                  ((l = r[s.id]).refs--, n.push(l));
                }
                for (
                  t ? y((i = a(e, t))) : (i = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var l;
                  if (0 === (l = n[o]).refs) {
                    for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                    delete r[l.id];
                  }
                }
              }
            );
          }
          function y(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                a = r[n.id];
              if (a) {
                a.refs++;
                for (var o = 0; o < a.parts.length; o++) a.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) a.parts.push(g(n.parts[o]));
                a.parts.length > n.parts.length &&
                  (a.parts.length = n.parts.length);
              } else {
                var i = [];
                for (o = 0; o < n.parts.length; o++) i.push(g(n.parts[o]));
                r[n.id] = { id: n.id, refs: 1, parts: i };
              }
            }
          }
          function f() {
            var e = document.createElement('style');
            return ((e.type = 'text/css'), i.appendChild(e), e);
          }
          function g(e) {
            var t,
              n,
              a = document.querySelector('style[' + u + '~="' + e.id + '"]');
            if (a) {
              if (c) return d;
              a.parentNode.removeChild(a);
            }
            if (p) {
              var o = l++;
              ((a = s || (s = f())),
                (t = x.bind(null, a, o, !1)),
                (n = x.bind(null, a, o, !0)));
            } else
              ((a = f()),
                (t = S.bind(null, a)),
                (n = function () {
                  a.parentNode.removeChild(a);
                }));
            return (
              t(e),
              function (a) {
                if (a) {
                  if (
                    a.css === e.css &&
                    a.media === e.media &&
                    a.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = a));
                } else n();
              }
            );
          }
          var v,
            E =
              ((v = []),
              function (e, t) {
                return ((v[e] = t), v.filter(Boolean).join('\n'));
              });
          function x(e, t, n, a) {
            var o = n ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = E(t, o);
            else {
              var r = document.createTextNode(o),
                i = e.childNodes;
              (i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(r, i[t]) : e.appendChild(r));
            }
          }
          function S(e, t) {
            var n = t.css,
              a = t.media,
              o = t.sourceMap;
            if (
              (a && e.setAttribute('media', a),
              m.ssrId && e.setAttribute(u, t.id),
              o &&
                ((n += '\n/*# sourceURL=' + o.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  ' */')),
              e.styleSheet)
            )
              e.styleSheet.cssText = n;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(n));
            }
          }
        },
        617: function (e, t, n) {
          var a = n(80);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('9c82b91a', a, !1, { sourceMap: !1 }));
        },
        707: function () {},
        790: function (e, t, n) {
          var a = n(707);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('2b121068', a, !1, { sourceMap: !1 }));
        },
        915: function (e, t, n) {
          var a = n(286);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('5e9c0933', a, !1, { sourceMap: !1 }));
        },
        961: function () {},
        975: function (e, t, n) {
          var a = n(264);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('b8de86ae', a, !1, { sourceMap: !1 }));
        },
      },
      t = {};
    function n(a) {
      var o = t[a];
      if (void 0 !== o) return o.exports;
      var r = (t[a] = { id: a, exports: {} });
      return (e[a](r, r.exports, n), r.exports);
    }
    ((n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (n.d(t, { a: t }), t);
    }),
      (n.d = function (e, t) {
        for (var a in t)
          n.o(t, a) &&
            !n.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.r = function (e) {
        ('undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 }));
      }));
    var a = {};
    return (
      (function () {
        'use strict';
        (n.r(a),
          n.d(a, {
            default: function () {
              return Se;
            },
          }));
        var e = require('@babel/runtime/helpers/extends'),
          t = n.n(e),
          o = require('@babel/runtime/helpers/inheritsLoose'),
          r = n.n(o),
          i = require('react'),
          s = n.n(i),
          l = require('react-dom'),
          c = n.n(l),
          d = require('mobx-react'),
          m = require('@babel/runtime/helpers/createClass'),
          u = n.n(m),
          p = require('tslib'),
          h = require('mobx'),
          y = require('antd'),
          f = require('lodash'),
          g = require('@wibetter/json-utils');
        function v(e) {
          return (0, g.objClone)(e);
        }
        function E(e, t) {
          return (0, g.isEqual)(e, t);
        }
        function x(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var S = [
            'input',
            'boolean',
            'number',
            'color',
            'url',
            'textarea',
            'radio',
            'select',
            'cascader',
            'checkboxes',
            'date',
            'date-time',
            'time',
            'input-image',
          ],
          b = ['object'].concat(['datasource', 'event', 'dynamic-data', 'api']),
          C = [
            'quantity',
            'box-style',
            'padding-margin',
            'text-editor',
            'json',
            'codearea',
            'htmlarea',
            'array',
          ].concat(b),
          N = [].concat(S, C),
          j = {
            object: N,
            array: [
              'object',
              'array',
              'input',
              'number',
              'select',
              'cascader',
              'color',
              'url',
              'date',
              'date-time',
              'time',
              'input-image',
            ],
            radio: ['string'],
            select: ['string'],
            all: N,
          },
          O = {
            input: '字符串/单行文本',
            boolean: 'Boolean/开关',
            number: 'Number数值',
            color: '颜色数值',
            url: 'URL数值',
            textarea: '多行文本',
            radio: '单选',
            select: '下拉选择/多选',
            cascader: '级联选择',
            checkboxes: '多选框',
            date: '日期',
            'date-time': '日期时间',
            time: '时间',
            'input-image': '图片上传',
            quantity: '数值单位设置',
            'box-style': '盒子模型/边距设置',
            'padding-margin': '边距设置',
            'text-editor': '富文本内容',
            json: 'json内容',
            codearea: 'code内容',
            htmlarea: 'html内容',
            object: '对象(Object)',
            array: '数组(Array)',
            datasource: '静态数据源(旧版)',
            event: '事件(旧版)',
            'dynamic-data': '动态数据源(旧版)',
            api: 'API 配置',
          },
          k = g.TypeDataList.jsonschema,
          I = g.TypeDataList.input,
          w = (function () {
            function e() {
              var e = this;
              ((this.curJsonKeyIndex = 1),
                (this.triggerChange = !1),
                (this.jsonSchema = {}),
                (this.SchemaTypeList = j),
                (this.onChange = function (e) {}),
                (this.childElemSort = function (t) {
                  for (
                    var n = (0, g.getSchemaByIndexRoute)(t, e.jsonSchema, !1),
                      a = n.propertyOrder,
                      o = [],
                      r = [],
                      i = [],
                      s = [],
                      l = [],
                      c = [],
                      d = [],
                      m = [],
                      u = 0,
                      p = a.length;
                    u < p;
                    u++
                  ) {
                    var h = a[u];
                    switch (n.properties[h].type) {
                      case 'input':
                      case 'url':
                        o.push(h);
                        break;
                      case 'number':
                      case 'quantity':
                        r.push(h);
                        break;
                      case 'radio':
                      case 'checkboxes':
                      case 'boolean':
                      case 'color':
                        i.push(h);
                        break;
                      case 'date':
                      case 'date-time':
                      case 'time':
                        s.push(h);
                        break;
                      case 'textarea':
                      case 'json':
                      case 'codearea':
                      case 'htmlarea':
                        l.push(h);
                        break;
                      case 'image':
                        c.push(h);
                        break;
                      case 'object':
                      case 'array':
                        d.push(h);
                        break;
                      default:
                        m.push(h);
                    }
                  }
                  ((n.propertyOrder = [].concat(o, r, i, s, c, l, d, m)),
                    e.jsonSchemaChange(!1));
                }));
            }
            var n = e.prototype;
            return (
              (n.triggerChangeAction = function () {
                this.triggerChange = !this.triggerChange;
              }),
              (n.initSchemaTypeList = function (e) {
                var t = this;
                e &&
                  '{}' !== JSON.stringify(e) &&
                  (E(e, this.SchemaTypeList) ||
                    (e &&
                      Object.keys(e).map(function (n) {
                        t.SchemaTypeList[n] = e[n];
                      })));
              }),
              (n.initJSONSchemaData = function (e) {
                if (e && '{}' !== JSON.stringify(e)) {
                  if (!E(e, this.JSONSchemaObj))
                    if (e && (0, g.isNewSchemaData)(e)) this.jsonSchema = e;
                    else {
                      var t = (0, g.oldSchemaToNewSchema)(e);
                      this.jsonSchema = t;
                    }
                } else this.jsonSchema = v(k);
              }),
              (n.initOnChange = function (e) {
                var t, n;
                (e ||
                  ((t = e),
                  (n = !1),
                  'Function' ===
                    Object.prototype.toString.call(t).slice(8, -1) && (n = !0),
                  n)) &&
                  (this.onChange = e);
              }),
              (n.schemaChange = function (e) {
                ((this.jsonSchema = e), this.jsonSchemaChange(!1));
              }),
              (n.jsonSchemaChange = function (e) {
                ((this.jsonSchema.lastUpdateTime = new Date().getTime()),
                  e || this.onChange(this.JSONSchemaObj));
              }),
              (n.indexRoute2keyRoute = function (e) {
                return (0, g.indexRoute2keyRoute)(e, this.jsonSchema);
              }),
              (n.keyRoute2indexRoute = function (e) {
                return (0, g.keyRoute2indexRoute)(e, this.jsonSchema);
              }),
              (n.getSchemaByIndexRoute = function (e) {
                return (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
              }),
              (n.getSchemaByKeyRoute = function (e) {
                return (0, g.getSchemaByKeyRoute)(e, this.jsonSchema, !0);
              }),
              (n.getNewJsonKeyIndex = function (e, t) {
                var n = (t || 'field') + '_' + this.curJsonKeyIndex;
                return (
                  e.propertyOrder.indexOf(n) >= 0 &&
                    ((this.curJsonKeyIndex += 1),
                    (n = this.getNewJsonKeyIndex(e, t))),
                  (this.curJsonKeyIndex += 1),
                  n
                );
              }),
              (n.isExitJsonKey = function (e, t) {
                var n = (0, g.getParentIndexRoute)(e),
                  a = this.getSchemaByIndexRoute(n);
                return (
                  !!(a.propertyOrder && a.propertyOrder.indexOf(t) >= 0) ||
                  (g.KeyWordList &&
                    g.KeyWordList.indexOf(t) >= 0 &&
                    y.message.warning(
                      t +
                        '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                    ),
                  t &&
                    t.indexOf('-') > -1 &&
                    y.message.warning(
                      t +
                        '含特殊字符（‘-’），会影响后续数据获取和更新，建议您换一个数值。',
                    ),
                  !1)
                );
              }),
              (n.isSupportCurType = function (e, t) {
                var n = (0, g.getParentIndexRoute)(e),
                  a = this.getSchemaByIndexRoute(n),
                  o = this.SchemaTypeList[a.type];
                return !!(o && o.indexOf(t) >= 0);
              }),
              (n.addChildJson = function (e, t) {
                var n = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if ((0, g.isContainerSchema)(n)) {
                  var a = this.getNewJsonKeyIndex(n);
                  (n.propertyOrder.push(a),
                    (n.properties[a] = I),
                    this.jsonSchemaChange(t));
                } else y.message.warning('非对象类型字段不允许插入子元素');
              }),
              (n.changeType = function (e, t, n, a, o) {
                var r = (0, g.getParentIndexRoute)(e),
                  i = (0, g.getSchemaByIndexRoute)(r, this.jsonSchema, !1),
                  s = Object.assign(
                    {},
                    n,
                    (0, f.pick)(a, [
                      'title',
                      'description',
                      'isConditionProp',
                      'showKey',
                      'showCodeViewBtn',
                      'onShow',
                    ]),
                  );
                (i.properties && i.properties[t]
                  ? (i.properties[t] = v(s))
                  : i[t] && (i[t] = v(s)),
                  this.jsonSchemaChange(o));
              }),
              (n.updateSchemaData = function (e, t, n) {
                var a = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (Object.assign(a, v(t)), this.jsonSchemaChange(n));
              }),
              (n.editSchemaData = function (e, n, a, o) {
                var r = (0, g.getParentIndexRoute)(e),
                  i = (0, g.getSchemaByIndexRoute)(r, this.jsonSchema, !1);
                ((i.properties[n] = t()({}, v(i.properties[n]), a)),
                  this.jsonSchemaChange(o));
              }),
              (n.editJsonKey = function (e, t, n) {
                var a = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
                (this.insertJsonData(e, t, a, '', !0),
                  this.deleteJsonByIndex(e, !0),
                  this.jsonSchemaChange(n));
              }),
              (n.addNextJsonData = function (e) {
                var t = (0, g.getParentIndexRoute)(e),
                  n = (0, g.getSchemaByIndexRoute)(t, this.jsonSchema, !1),
                  a = this.getNewJsonKeyIndex(n);
                this.insertJsonData(e, a, I, '', !1);
              }),
              (n.insertJsonData = function (e, t, n, a, o) {
                var r = (0, g.getParentIndexRoute_CurIndex)(e),
                  i = r[0] || '',
                  s = r[1],
                  l = (0, g.getSchemaByIndexRoute)(i, this.jsonSchema, !1);
                l.properties[t] = n;
                var c = l.propertyOrder,
                  d = 'before' === a ? Number(s) : Number(s) + 1,
                  m = c.slice(0, d),
                  u = c.slice(d);
                ((l.propertyOrder = [].concat(m, [t], u)),
                  this.jsonSchemaChange(o));
              }),
              (n.deleteJsonByIndex_CurKey = function (e, t, n) {
                var a = (0, g.getParentIndexRoute)(e),
                  o = (0, g.getSchemaByIndexRoute)(a, this.jsonSchema, !1);
                delete o.properties[t];
                var r = o.propertyOrder.indexOf(t);
                (o.propertyOrder.splice(r, 1), this.jsonSchemaChange(n));
              }),
              (n.deleteJsonByIndex = function (e, t) {
                var n = (0, g.getParentIndexRoute_CurIndex)(e),
                  a = n[0] || '',
                  o = n[1],
                  r = (0, g.getSchemaByIndexRoute)(a, this.jsonSchema, !1),
                  i = r.propertyOrder[o];
                delete r.properties[i];
                var s = r.propertyOrder.indexOf(i);
                (r.propertyOrder.splice(s, 1), this.jsonSchemaChange(t));
              }),
              (n.updateEnumItem = function (e, t, n, a, o) {
                var r = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (r.enum &&
                  r.enumextra &&
                  ((r.enum[t] = n), (r.enumextra[t] = a)),
                  this.jsonSchemaChange(o));
              }),
              (n.isExitEnumKey = function (e, t, n) {
                var a = !1,
                  o = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (o.enum) {
                  var r = v(o.enum);
                  (t >= 0 && r.splice(t, 1), r.indexOf(n) >= 0 && (a = !0));
                }
                return (
                  g.KeyWordList &&
                    g.KeyWordList.indexOf(n) >= 0 &&
                    y.message.warning(
                      n +
                        '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                    ),
                  a
                );
              }),
              (n.updateEnumKey = function (e, t, n, a) {
                var o = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (o.enum && (o.enum[t] = n), this.jsonSchemaChange(a));
              }),
              (n.updateEnumText = function (e, t, n, a) {
                var o = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (o.enumextra && (o.enumextra[t] = n), this.jsonSchemaChange(a));
              }),
              (n.deleteEnumItem = function (e, t, n) {
                var a = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (a.enum &&
                  a.enumextra &&
                  (a.enum.splice(t, 1), a.enumextra.splice(t, 1)),
                  this.jsonSchemaChange(n));
              }),
              (n.insertEnumItem = function (e, t, n, a, o, r) {
                var i = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (i.enum && i.enumextra) {
                  var s = 'before' === o ? Number(t) : Number(t) + 1,
                    l = i.enum.slice(0, s),
                    c = i.enum.slice(s);
                  i.enum = [].concat(l, [n], c);
                  var d = i.enumextra.slice(0, s),
                    m = i.enumextra.slice(s);
                  i.enumextra = [].concat(d, [a], m);
                }
                this.jsonSchemaChange(r);
              }),
              (n.getNewEnumIndex = function (e, t) {
                var n = (t || 'enum') + '_' + this.curJsonKeyIndex;
                return (
                  e.indexOf(n) >= 0 &&
                    ((this.curJsonKeyIndex += 1),
                    (n = this.getNewEnumIndex(e, t))),
                  (this.curJsonKeyIndex += 1),
                  n
                );
              }),
              (n.addEnumItem = function (e, t) {
                var n = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (n.enum) {
                  var a = this.getNewEnumIndex(n.enum),
                    o = '选项' + (this.curJsonKeyIndex - 1);
                  this.insertEnumItem(e, t, a, o, '', !1);
                }
              }),
              (n.copyEnumItem = function (e, t) {
                var n = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (n.enum) {
                  var a = n.enum[t],
                    o = n.enumextra[t],
                    r = this.getNewEnumIndex(n.enum, a),
                    i = o + '_' + (this.curJsonKeyIndex - 1);
                  this.insertEnumItem(e, t, r, i, '', !1);
                }
              }),
              (n.updateOptionItem = function (e, t, n, a, o) {
                var r = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (r.options &&
                  r.options[t] &&
                  ((r.options[t].label = n), (r.options[t].value = a)),
                  this.jsonSchemaChange(o));
              }),
              (n.isExitOptionLabel = function (e, t) {
                var n = !1,
                  a = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                return (
                  a.options &&
                    a.options.find(function (e) {
                      return e.label === t;
                    }) &&
                    (n = !0),
                  g.KeyWordList &&
                    g.KeyWordList.indexOf(t) >= 0 &&
                    y.message.warning(
                      t + '是JSONSchema的保留关键字，建议您换一个名称。',
                    ),
                  n
                );
              }),
              (n.updateOptionLabel = function (e, t, n, a) {
                var o = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (o.options && o.options[t] && (o.options[t].label = n),
                  this.jsonSchemaChange(a));
              }),
              (n.updateOptionValue = function (e, t, n, a) {
                var o = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (o.options && o.options[t] && (o.options[t].value = n),
                  this.jsonSchemaChange(a));
              }),
              (n.deleteOptionItem = function (e, t, n) {
                var a = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                (a.options && a.options[t] && a.options.splice(t, 1),
                  this.jsonSchemaChange(n));
              }),
              (n.insertOption = function (e, t, n, a, o, r) {
                var i = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (i.options) {
                  var s = 'before' === o ? Number(t) : Number(t) + 1,
                    l = i.options.slice(0, s),
                    c = i.options.slice(s),
                    d = { label: n, value: a };
                  i.options = [].concat(l, [d], c);
                }
                this.jsonSchemaChange(r);
              }),
              (n.getNewOptionValue = function (e) {
                return e && e.length > 0
                  ? e[e.length - 1].value + '_' + (e.length + 1)
                  : 'value1';
              }),
              (n.addOptionItem = function (e, t) {
                var n = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (n.options) {
                  var a = this.getNewOptionValue(n.options),
                    o = '选项' + (n.options.length + 1);
                  this.insertOption(e, t, o, a, '', !1);
                }
              }),
              (n.copyOptionItem = function (e, t) {
                var n = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1);
                if (n.options) {
                  var a = n.options[t],
                    o = this.getNewOptionValue(n.options),
                    r = (a.label || a.name) + '_copy';
                  this.insertOption(e, t, r, o, '', !1);
                }
              }),
              u()(e, [
                {
                  key: 'JSONSchemaObj',
                  get: function () {
                    return (0, h.toJS)(this.jsonSchema);
                  },
                },
              ])
            );
          })();
        ((0, p.__decorate)(
          [h.observable],
          w.prototype,
          'triggerChange',
          void 0,
        ),
          (0, p.__decorate)([h.observable], w.prototype, 'jsonSchema', void 0),
          (0, p.__decorate)(
            [h.observable],
            w.prototype,
            'SchemaTypeList',
            void 0,
          ),
          (0, p.__decorate)([h.observable], w.prototype, 'onChange', void 0),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'triggerChangeAction',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'initSchemaTypeList',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'initJSONSchemaData',
            null,
          ),
          (0, p.__decorate)([h.computed], w.prototype, 'JSONSchemaObj', null),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'initOnChange',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'schemaChange',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'jsonSchemaChange',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'indexRoute2keyRoute',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'keyRoute2indexRoute',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'getSchemaByIndexRoute',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'getSchemaByKeyRoute',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'getNewJsonKeyIndex',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'isExitJsonKey',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'isSupportCurType',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'addChildJson',
            null,
          ),
          (0, p.__decorate)([h.action.bound], w.prototype, 'changeType', null),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateSchemaData',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'editSchemaData',
            null,
          ),
          (0, p.__decorate)([h.action.bound], w.prototype, 'editJsonKey', null),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'addNextJsonData',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'insertJsonData',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'deleteJsonByIndex_CurKey',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'deleteJsonByIndex',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateEnumItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'isExitEnumKey',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateEnumKey',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateEnumText',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'deleteEnumItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'insertEnumItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'getNewEnumIndex',
            null,
          ),
          (0, p.__decorate)([h.action.bound], w.prototype, 'addEnumItem', null),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'copyEnumItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateOptionItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'isExitOptionLabel',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateOptionLabel',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'updateOptionValue',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'deleteOptionItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'insertOption',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'getNewOptionValue',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'addOptionItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'copyOptionItem',
            null,
          ),
          (0, p.__decorate)(
            [h.action.bound],
            w.prototype,
            'childElemSort',
            void 0,
          ));
        var R = { schemaStore: w },
          K = require('@babel/runtime/helpers/objectWithoutPropertiesLoose'),
          T = n.n(K),
          _ = require('@ant-design/icons'),
          J = require('rc-switch'),
          B = n.n(J),
          V = require('react-ace'),
          D = n.n(V),
          L =
            (require('ace-builds/src-noconflict/mode-json'),
            require('ace-builds/src-noconflict/theme-solarized_light'),
            n(40),
            (function (e) {
              function t(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    n.props.onChange &&
                      (0, g.isFunction)(n.props.onChange) &&
                      n.props.onChange(e);
                  }),
                  (n.state = {
                    isShowWarn: !1,
                    warnText: '',
                    curJSONDataTemp: void 0,
                  }),
                  (n.handleValueChange = n.handleValueChange.bind(n)),
                  n
                );
              }
              return (
                r()(t, e),
                (t.prototype.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.jsonData,
                    a = t.readOnly,
                    o = t.maxLines,
                    r = n || {},
                    s = this.state,
                    l = s.isShowWarn,
                    c = s.warnText,
                    d = (s.curJSONDataTemp, a || !1);
                  return (
                    (r = void 0 !== r ? r : r || '{}'),
                    ((0, g.isObject)(r) || (0, g.isArray)(r)) &&
                      (r = JSON.stringify(r, null, 2)),
                    i.createElement(
                      'div',
                      { className: 'json-view-box' },
                      d &&
                        i.createElement(
                          'div',
                          { className: 'readOnly-btn' },
                          '[只读]',
                        ),
                      l &&
                        i.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          i.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          i.createElement(
                            'div',
                            { className: 'warning-text' },
                            c,
                          ),
                        ),
                      i.createElement(D(), {
                        key: 'json_area_ace',
                        defaultValue: r,
                        className: 'json-view-ace',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
                        fontSize: 14,
                        showPrintMargin: !0,
                        showGutter: !0,
                        highlightActiveLine: !0,
                        readOnly: d,
                        minLines: 5,
                        maxLines: o || 10,
                        width: '100%',
                        setOptions: {
                          useWorker: !1,
                          showLineNumbers: !0,
                          tabSize: 2,
                        },
                        onChange: function (t) {
                          try {
                            var n = JSON.parse(t);
                            (e.handleValueChange(n),
                              e.setState({
                                isShowWarn: !1,
                                curJSONDataTemp: void 0,
                              }));
                          } catch (n) {
                            e.setState({
                              curJSONDataTemp: t,
                              warnText: n.message,
                              isShowWarn: !0,
                            });
                          }
                        },
                      }),
                    )
                  );
                }),
                t
              );
            })(i.PureComponent)),
          F = (require('rc-switch/assets/index.css'), n(975), y.Input.TextArea),
          P = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var a = (n.props.schemaStore || {}).editSchemaData,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.jsonKey;
                  if (o.targetJsonSchema[e] !== t) {
                    var s = {};
                    ((s[e] = t), a(r, i, s));
                  }
                }),
                (n.renderDefaultContent = function (e, t, a) {
                  if ('boolean' === e)
                    return i.createElement(B(), {
                      style: { display: 'inline-block' },
                      defaultChecked: t.default,
                      checkedChildren: 'true',
                      unCheckedChildren: 'false',
                      onChange: function (e) {
                        n.handleValueChange('default', e);
                      },
                    });
                  if ('checkboxes' === e || ('select' === e && t.multiple)) {
                    var o = t.options;
                    return i.createElement(
                      y.Checkbox.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n.handleValueChange('default', e);
                        },
                        defaultValue: t.default,
                      },
                      o &&
                        o.length > 0 &&
                        o.map(function (e, t) {
                          var n = a + '-options-' + t;
                          return i.createElement(
                            y.Checkbox,
                            { value: e.value, key: n },
                            e.label || e.name,
                          );
                        }),
                    );
                  }
                  if ('radio' === e || 'select' === e) {
                    var r = t.options;
                    return i.createElement(
                      y.Radio.Group,
                      {
                        style: { display: 'inline-block' },
                        defaultValue: t.default,
                        onChange: function (e) {
                          var t = e.target.value;
                          n.handleValueChange('default', t);
                        },
                      },
                      r &&
                        r.length > 0 &&
                        r.map(function (e, t) {
                          var n = a + '-options-' + t;
                          return i.createElement(
                            y.Radio,
                            { value: e.value, key: n },
                            e.label || e.name,
                          );
                        }),
                    );
                  }
                  return 'color' === e
                    ? i.createElement(y.Input, {
                        style: { display: 'inline-block' },
                        className: 'color-item-form',
                        type: 'color',
                        defaultValue: t.default,
                        onChange: function (e) {
                          var t = e.target.value;
                          n.handleValueChange('default', t);
                        },
                      })
                    : 'textarea' === e ||
                        'codearea' === e ||
                        'htmlarea' === e ||
                        'json' === e
                      ? i.createElement(F, {
                          style: { display: 'inline-block' },
                          rows: 4,
                          placeholder: '请输入' + t.title + '的默认值',
                          defaultValue: t.default,
                          onPressEnter: function (e) {
                            var t = e.target.value;
                            n.handleValueChange('default', t);
                          },
                          onBlur: function (e) {
                            var t = e.target.value;
                            n.handleValueChange('default', t);
                          },
                        })
                      : 'number' === e
                        ? i.createElement(y.InputNumber, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + t.title + '的默认值',
                            defaultValue: t.default,
                            onChange: function (e) {
                              n.handleValueChange('default', e);
                            },
                          })
                        : i.createElement(y.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + t.title + '的默认值',
                            defaultValue: t.default,
                            onPressEnter: function (e) {
                              var t = e.target.value;
                              n.handleValueChange('default', t);
                            },
                            onBlur: function (e) {
                              var t = e.target.value;
                              n.handleValueChange('default', t);
                            },
                          });
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            return (
              r()(t, e),
              (t.prototype.render = function () {
                var e,
                  t,
                  n,
                  a,
                  o,
                  r,
                  s,
                  l,
                  c = this,
                  d = this.props,
                  m = d.nodeKey,
                  u = (d.indexRoute, d.targetJsonSchema),
                  p = u.type,
                  h = u.isConditionProp;
                return i.createElement(
                  'div',
                  { className: 'advance-config-model' },
                  (function (e) {
                    return (
                      [
                        'boolean',
                        'input',
                        'number',
                        'color',
                        'url',
                        'radio',
                        'select',
                        'date',
                        'date-time',
                        'time',
                        'input-image',
                      ].indexOf(e) > -1
                    );
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-isConditionProp',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '设置为条件字段后，其他字段可根据其数值变化进行实时联动',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '条件字段',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          {
                            className: 'form-item-box',
                            key: m + '-isConditionProp-switch',
                          },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != h && h,
                            checkedChildren: '是',
                            unCheckedChildren: '否',
                            onChange: function (e) {
                              c.handleValueChange('isConditionProp', e);
                            },
                          }),
                        ),
                      ),
                    ),
                  ('select' === p || 'cascader' === p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-selectConfig',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '开启多选后，select下拉列表支持选择多个选项。',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '支持多选',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          {
                            className: 'form-item-box',
                            key: m + '-selectConfig-multiple',
                          },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != (e = u.multiple) && e,
                            checkedChildren: '多选',
                            unCheckedChildren: '单选',
                            onChange: function (e) {
                              c.handleValueChange('multiple', e);
                            },
                          }),
                        ),
                      ),
                    ),
                  (function (e) {
                    return ['select', 'radio'].indexOf(e) > -1;
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-defaultActiveFirstOption',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title: '是否默认高亮第一个选项。',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '选中第一项',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          {
                            className: 'form-item-box',
                            key: m + '-selectConfig-defaultActiveFirstOption',
                          },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked:
                              null != (t = u.defaultActiveFirstOption) && t,
                            checkedChildren: '开启',
                            unCheckedChildren: '关闭',
                            onChange: function (e) {
                              c.handleValueChange(
                                'defaultActiveFirstOption',
                                e,
                              );
                            },
                          }),
                        ),
                      ),
                    ),
                  (function (e) {
                    return (
                      []
                        .concat(S, [
                          'quantity',
                          'text-editor',
                          'json',
                          'codearea',
                          'htmlarea',
                        ])
                        .indexOf(e) > -1
                    );
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-readOnly-' + u.readOnly,
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '当前属性设置为只读后，用户不能对其进行任何编辑操作',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '是否只读',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          { className: 'form-item-box' },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != (n = u.readOnly) && n,
                            checkedChildren: 'true',
                            unCheckedChildren: 'false',
                            onChange: function (e) {
                              c.handleValueChange('readOnly', e);
                            },
                          }),
                        ),
                      ),
                    ),
                  (function (e) {
                    return (
                      []
                        .concat(S, [
                          'quantity',
                          'text-editor',
                          'json',
                          'codearea',
                          'htmlarea',
                        ])
                        .indexOf(e) > -1
                    );
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-isRequired-' + u.isRequired,
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示。',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '是否必填项',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          { className: 'form-item-box' },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != (a = u.isRequired) && a,
                            checkedChildren: 'true',
                            unCheckedChildren: 'false',
                            onChange: function (e) {
                              c.handleValueChange('isRequired', e);
                            },
                          }),
                        ),
                      ),
                    ),
                  (function (e) {
                    return (
                      []
                        .concat(S, ['json', 'codearea', 'htmlarea'])
                        .indexOf(e) > -1
                    );
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-default',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          { placement: 'top' },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '默认值',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          { className: 'form-item-box' },
                          this.renderDefaultContent(p, u, m),
                        ),
                      ),
                    ),
                  'select' === p &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-withLabel',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '开启后，选中选项时，其数值会带上当前选项的label数值。',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '附带label数值',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(B(), {
                          style: { display: 'inline-block' },
                          defaultChecked: null != (o = u.withLabel) && o,
                          checkedChildren: '开启',
                          unCheckedChildren: '关闭',
                          onChange: function (e) {
                            c.handleValueChange('withLabel', e);
                          },
                        }),
                      ),
                    ),
                  'cascader' === p &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-cascader-options',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title: '用于添加 级联选择 组件的 options 数据。',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            'options 配置',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(L, {
                          jsonData: u.options,
                          onChange: function (e) {
                            c.handleValueChange('options', e);
                          },
                          maxLines: 10,
                        }),
                      ),
                    ),
                  i.createElement(
                    'div',
                    {
                      className: 'wide-screen-element-warp',
                      key: m + '-description',
                    },
                    i.createElement(
                      'div',
                      { className: 'element-title' },
                      i.createElement(
                        y.Tooltip,
                        {
                          title: '字段描述内容将作为Title的补充信息提供给用户',
                          placement: 'top',
                        },
                        i.createElement(
                          'span',
                          { className: 'title-text' },
                          '字段描述',
                        ),
                      ),
                    ),
                    i.createElement(
                      'div',
                      { className: 'content-item' },
                      i.createElement(
                        'div',
                        { className: 'form-item-box' },
                        i.createElement(y.Input, {
                          style: { display: 'inline-block' },
                          placeholder: '请输入' + u.title + '的字段描述',
                          defaultValue: u.description,
                          onPressEnter: function (e) {
                            var t = e.target.value;
                            c.handleValueChange('description', t);
                          },
                          onBlur: function (e) {
                            var t = e.target.value;
                            c.handleValueChange('description', t);
                          },
                        }),
                      ),
                    ),
                  ),
                  i.createElement(
                    'div',
                    {
                      className: 'wide-screen-element-warp',
                      key: m + '-showKey',
                    },
                    i.createElement(
                      'div',
                      { className: 'element-title' },
                      i.createElement(
                        y.Tooltip,
                        {
                          title:
                            '开启后，在JSONEditor端会展示当前Key值，以便增加辨识度。',
                          placement: 'top',
                        },
                        i.createElement(
                          'span',
                          { className: 'title-text' },
                          '展示Key值',
                        ),
                      ),
                    ),
                    i.createElement(
                      'div',
                      { className: 'content-item' },
                      i.createElement(
                        'div',
                        { className: 'form-item-box' },
                        i.createElement(B(), {
                          style: { display: 'inline-block' },
                          defaultChecked: null != (r = u.showKey) && r,
                          checkedChildren: 'true',
                          unCheckedChildren: 'false',
                          onChange: function (e) {
                            c.handleValueChange('showKey', e);
                          },
                        }),
                      ),
                    ),
                  ),
                  (function (e) {
                    return (
                      [
                        'input',
                        'url',
                        'textarea',
                        'text-editor',
                        'date',
                        'date-time',
                        'time',
                        'json',
                        'codearea',
                        'htmlarea',
                      ].indexOf(e) > -1
                    );
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-placeholder',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '输入提示内容将作为输入区域的提示信息展示给用户',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '输入提示',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          { className: 'form-item-box' },
                          i.createElement(y.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + u.title + '的输入提示',
                            defaultValue: u.placeholder,
                            onPressEnter: function (e) {
                              var t = e.target.value;
                              c.handleValueChange('placeholder', t);
                            },
                            onBlur: function (e) {
                              var t = e.target.value;
                              c.handleValueChange('placeholder', t);
                            },
                          }),
                        ),
                      ),
                    ),
                  ('input' === p ||
                    'quantity' === p ||
                    'padding-margin' === p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-autoComplete',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title:
                              '开启后支持添加可选项，并支持 autoComplete。',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '开启可选项',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          { className: 'form-item-box' },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != (s = u.autoComplete) && s,
                            checkedChildren: '开启',
                            unCheckedChildren: '关闭',
                            onChange: function (e) {
                              c.handleValueChange('autoComplete', e);
                            },
                          }),
                        ),
                      ),
                    ),
                  u.autoComplete &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-autoComplete-options',
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          'span',
                          { className: 'title-text' },
                          '可选项',
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(L, {
                          jsonData: u.options || [],
                          onChange: function (e) {
                            (0, g.isArray)(e)
                              ? c.handleValueChange('options', e)
                              : y.message.warning(
                                  '可选项数据格式不正确，可选项数据格式必须为数组格式。',
                                );
                          },
                          maxLines: 10,
                        }),
                      ),
                    ),
                  (function (e) {
                    return [].concat(b, ['array']).indexOf(e) > -1;
                  })(p) &&
                    i.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-showCodeViewBtn-' + u.showCodeViewBtn,
                      },
                      i.createElement(
                        'div',
                        { className: 'element-title' },
                        i.createElement(
                          y.Tooltip,
                          {
                            title: '用于控制是否显示源码模式切换按钮，默认显示',
                            placement: 'top',
                          },
                          i.createElement(
                            'span',
                            { className: 'title-text' },
                            '源码模式',
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        { className: 'content-item' },
                        i.createElement(
                          'div',
                          { className: 'form-item-box' },
                          i.createElement(B(), {
                            style: { display: 'inline-block' },
                            defaultChecked:
                              null == (l = u.showCodeViewBtn) || l,
                            checkedChildren: 'true',
                            unCheckedChildren: 'false',
                            onChange: function (e) {
                              c.handleValueChange('showCodeViewBtn', e);
                            },
                          }),
                        ),
                      ),
                    ),
                  'number' === (0, g.getExpectType)(p) &&
                    i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-minimum-' + u.minimum,
                        },
                        i.createElement(
                          'div',
                          { className: 'element-title' },
                          i.createElement(
                            y.Tooltip,
                            {
                              title:
                                '设置最小值后，用户输入的数值必须大于当前最小值',
                              placement: 'top',
                            },
                            i.createElement(
                              'span',
                              { className: 'title-text' },
                              '最小值',
                            ),
                          ),
                        ),
                        i.createElement(
                          'div',
                          { className: 'content-item' },
                          i.createElement(
                            'div',
                            { className: 'form-item-box' },
                            i.createElement(y.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: u.minimum,
                              onPressEnter: function (e) {
                                var t = e.target.value;
                                c.handleValueChange('minimum', t);
                              },
                              onBlur: function (e) {
                                var t = e.target.value;
                                c.handleValueChange('minimum', t);
                              },
                            }),
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-maximum-' + u.maximum,
                        },
                        i.createElement(
                          'div',
                          { className: 'element-title' },
                          i.createElement(
                            y.Tooltip,
                            {
                              title:
                                '设置最大值后，用户输入的数值必须大于当前最大值',
                              placement: 'top',
                            },
                            i.createElement(
                              'span',
                              { className: 'title-text' },
                              '最大值',
                            ),
                          ),
                        ),
                        i.createElement(
                          'div',
                          { className: 'content-item' },
                          i.createElement(
                            'div',
                            { className: 'form-item-box' },
                            i.createElement(y.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: u.maximum,
                              onPressEnter: function (e) {
                                var t = e.target.value;
                                c.handleValueChange('maximum', t);
                              },
                              onBlur: function (e) {
                                var t = e.target.value;
                                c.handleValueChange('maximum', t);
                              },
                            }),
                          ),
                        ),
                      ),
                    ),
                  'array' === (0, g.getExpectType)(p) &&
                    i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-minimum-child',
                        },
                        i.createElement(
                          'div',
                          { className: 'element-title' },
                          i.createElement(
                            y.Tooltip,
                            {
                              title: '用于限制数据项最小个数',
                              placement: 'top',
                            },
                            i.createElement(
                              'span',
                              { className: 'title-text' },
                              '最小数据项',
                            ),
                          ),
                        ),
                        i.createElement(
                          'div',
                          { className: 'content-item' },
                          i.createElement(
                            'div',
                            { className: 'form-item-box' },
                            i.createElement(y.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: u['minimum-child'],
                              onChange: function (e) {
                                c.handleValueChange('minimum-child', e);
                              },
                            }),
                          ),
                        ),
                      ),
                      i.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-maximum-child',
                        },
                        i.createElement(
                          'div',
                          { className: 'element-title' },
                          i.createElement(
                            y.Tooltip,
                            {
                              title: '用于限制数据项最多个数',
                              placement: 'top',
                            },
                            i.createElement(
                              'span',
                              { className: 'title-text' },
                              '最多数据项',
                            ),
                          ),
                        ),
                        i.createElement(
                          'div',
                          { className: 'content-item' },
                          i.createElement(
                            'div',
                            { className: 'form-item-box' },
                            i.createElement(y.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: u['maximum-child'],
                              onChange: function (e) {
                                c.handleValueChange('maximum-child', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    ),
                  i.createElement(
                    'div',
                    {
                      className: 'wide-screen-element-warp',
                      key: m + '-onShow',
                    },
                    i.createElement(
                      'div',
                      { className: 'element-title' },
                      i.createElement(
                        y.Tooltip,
                        {
                          title:
                            '用于设置显隐表达式（onShow），比如设置 "dataType === 1"，则表示当数据域中 dataType 为 1 时显示当前配置项。',
                          placement: 'top',
                        },
                        i.createElement(
                          'span',
                          { className: 'title-text' },
                          '显隐表达式',
                        ),
                      ),
                    ),
                    i.createElement(
                      'div',
                      { className: 'content-item' },
                      i.createElement(
                        'div',
                        { className: 'form-item-box' },
                        i.createElement(y.Input, {
                          style: { display: 'inline-block' },
                          placeholder: '请输入显隐表达式',
                          defaultValue: u.onShow,
                          onPressEnter: function (e) {
                            var t = e.target.value;
                            c.handleValueChange('onShow', t);
                          },
                          onBlur: function (e) {
                            var t = e.target.value;
                            c.handleValueChange('onShow', t);
                          },
                        }),
                      ),
                    ),
                  ),
                  i.createElement(
                    'div',
                    {
                      className: 'wide-screen-element-warp',
                      key: m + '-titleStyle',
                    },
                    i.createElement(
                      'div',
                      { className: 'element-title' },
                      i.createElement(
                        y.Tooltip,
                        { title: '可用于设置标题展示样式。', placement: 'top' },
                        i.createElement(
                          'span',
                          { className: 'title-text' },
                          '标题样式',
                        ),
                      ),
                    ),
                    i.createElement(
                      'div',
                      { className: 'content-item' },
                      i.createElement(L, {
                        jsonData: u.titleStyle,
                        onChange: function (e) {
                          c.handleValueChange('titleStyle', e);
                        },
                        maxLines: 10,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(i.PureComponent),
          q = (0, d.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, d.observer)(P)),
          A = (n(915), y.Select.Option),
          M = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleTypeChange = function (e) {
                  var t = (n.props.schemaStore || {}).changeType,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.targetJsonSchema;
                  i.type !== e && t(o, r, g.TypeDataList[e], i);
                }),
                (n.handleJsonKeyChange = function (e) {
                  var t = n.props.schemaStore || {},
                    a = t.editJsonKey,
                    o = t.isExitJsonKey,
                    r = e.target.value,
                    i = n.props,
                    s = i.indexRoute;
                  i.jsonKey !== r &&
                    (o(s, r)
                      ? y.message.warning('当前key已存在，请换一个吧。')
                      : a(s, r));
                }),
                (n.handleTitleChange = function (e) {
                  var t = (n.props.schemaStore || {}).editSchemaData,
                    a = e.target.value,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.jsonKey;
                  o.targetJsonSchema.title !== a && t(r, i, { title: a });
                }),
                (n.getCurrentTypeList = function (e) {
                  var t = (n.props.schemaStore || {}).SchemaTypeList,
                    a = t[e || 'all'];
                  return ((a && 0 !== a.length) || (a = t.all), a);
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props.schemaStore || {},
                    t = e.addChildJson,
                    a = e.addNextJsonData,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.targetJsonSchema;
                  (0, g.isContainerSchema)(i) ? t(r) : a(r);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.targetJsonSchema,
                    o = e.jsonKey,
                    r = n.props.schemaStore || {},
                    i = r.getSchemaByIndexRoute,
                    s = r.indexRoute2keyRoute,
                    l = r.insertJsonData,
                    c = r.getNewJsonKeyIndex,
                    d = v(a),
                    m = (0, g.getParentIndexRoute)(t),
                    u = c(i(m), o),
                    p = a.type;
                  (x(s(m) + '-' + u + '-' + p, s(t)), l(t, u, d));
                }),
                (n.onDeleteBtnEvent = function () {
                  var e = n.props,
                    t = e.jsonKey,
                    a = e.indexRoute;
                  (0, (n.props.schemaStore || {}).deleteJsonByIndex_CurKey)(
                    a,
                    t,
                  );
                }),
                (n.ignoreDragEvent = function (e) {
                  (e.preventDefault(), e.stopPropagation());
                }),
                (n.childElemSort = function () {
                  var e = n.props.indexRoute;
                  (0, (n.props.schemaStore || {}).childElemSort)(e);
                }),
                (n.state = { showAdvanceConfig: !1 }),
                (n.onAddBtnEvent = n.onAddBtnEvent.bind(n)),
                (n.onCopyBtnEvent = n.onCopyBtnEvent.bind(n)),
                (n.onDeleteBtnEvent = n.onDeleteBtnEvent.bind(n)),
                (n.handleJsonKeyChange = n.handleJsonKeyChange.bind(n)),
                (n.handleTitleChange = n.handleTitleChange.bind(n)),
                (n.handleTypeChange = n.handleTypeChange.bind(n)),
                (n.childElemSort = n.childElemSort.bind(n)),
                n
              );
            }
            return (
              r()(t, e),
              (t.prototype.render = function () {
                var e,
                  t,
                  n = this,
                  a = (this.props.schemaStore || {}).getSchemaByIndexRoute,
                  o = this.props,
                  r = o.parentType,
                  s = o.indexRoute,
                  l = o.jsonKey,
                  c = o.nodeKey,
                  d = o.targetJsonSchema,
                  m = this.state.showAdvanceConfig,
                  u = s ? (0, g.getParentIndexRoute)(s) : '',
                  p = u ? a(u) : {},
                  h = null == (e = p && p.isContainer) || e,
                  f = d.isFixed || this.props.isFixed || !1,
                  v =
                    (this.props.readOnly || d.readOnly,
                    void 0 !== this.props.keyIsFixed
                      ? this.props.keyIsFixed
                      : !h || f),
                  E =
                    void 0 !== this.props.typeIsFixed
                      ? this.props.typeIsFixed
                      : f,
                  x =
                    void 0 !== this.props.titleIsFixed
                      ? this.props.titleIsFixed
                      : f,
                  S = this.props.hideOperaBtn || !h,
                  b = null == (t = this.props.showAdvanceBtn) || t,
                  C = this.getCurrentTypeList(r),
                  N = d.type,
                  j = (0, g.isContainerSchema)(d);
                return i.createElement(
                  i.Fragment,
                  null,
                  d &&
                    i.createElement(
                      'div',
                      { className: 'base-schema-box', id: c },
                      i.createElement(
                        'div',
                        {
                          className: 'key-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        i.createElement(y.Input, {
                          defaultValue: l || 'key值不存在',
                          disabled: v,
                          onBlur: this.handleJsonKeyChange,
                        }),
                      ),
                      i.createElement(
                        'div',
                        {
                          className: 'type-select-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        i.createElement(
                          y.Select,
                          {
                            showSearch: !0,
                            defaultValue: N,
                            style: { width: 150 },
                            onChange: this.handleTypeChange,
                            disabled: E,
                            filterOption: function (e, t) {
                              return !!(
                                (t && t.value.indexOf(e) > -1) ||
                                (t.children && t.children.indexOf(e) > -1)
                              );
                            },
                          },
                          C.map(function (e) {
                            return i.createElement(
                              A,
                              { key: e, value: e },
                              O[e] || e,
                            );
                          }),
                        ),
                      ),
                      i.createElement(
                        'div',
                        {
                          className: 'title-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        i.createElement(y.Input, {
                          defaultValue: d.title,
                          disabled: x,
                          onBlur: this.handleTitleChange,
                        }),
                      ),
                      i.createElement(
                        'div',
                        { className: 'operate-item' },
                        !S &&
                          i.createElement(
                            i.Fragment,
                            null,
                            !f &&
                              i.createElement(
                                y.Tooltip,
                                { title: '删除' },
                                i.createElement(_.CloseOutlined, {
                                  className: 'operate-btn delete-operate',
                                  onClick: this.onDeleteBtnEvent,
                                }),
                              ),
                            i.createElement(
                              y.Tooltip,
                              { title: j ? '新增子元素' : '新增同级元素' },
                              i.createElement(_.PlusOutlined, {
                                className: 'operate-btn',
                                onClick: this.onAddBtnEvent,
                              }),
                            ),
                            j &&
                              i.createElement(
                                y.Tooltip,
                                { title: '数据项排序' },
                                i.createElement(_.SortAscendingOutlined, {
                                  className: 'operate-btn',
                                  onClick: this.childElemSort,
                                }),
                              ),
                            !f &&
                              i.createElement(
                                i.Fragment,
                                null,
                                i.createElement(
                                  y.Tooltip,
                                  { title: '复制' },
                                  i.createElement(_.CopyOutlined, {
                                    className: 'operate-btn',
                                    onClick: this.onCopyBtnEvent,
                                  }),
                                ),
                                i.createElement(
                                  y.Tooltip,
                                  { title: '按住进行拖拽' },
                                  i.createElement(_.DragOutlined, {
                                    className: 'operate-btn drag-btn',
                                  }),
                                ),
                              ),
                          ),
                        b &&
                          i.createElement(
                            y.Tooltip,
                            { title: '高级设置' },
                            i.createElement(_.SettingOutlined, {
                              className: 'operate-btn',
                              onClick: function () {
                                n.setState({ showAdvanceConfig: !0 });
                              },
                            }),
                          ),
                      ),
                      m &&
                        i.createElement(
                          y.Modal,
                          {
                            visible: !0,
                            title:
                              '高级设置 / 当前字段：' + d.title + '(' + l + ')',
                            onCancel: function () {
                              n.setState({ showAdvanceConfig: !1 });
                            },
                            footer: [
                              i.createElement(
                                y.Button,
                                {
                                  key: 'submit',
                                  type: 'primary',
                                  onClick: function () {
                                    n.setState({ showAdvanceConfig: !1 });
                                  },
                                },
                                '保存并关闭',
                              ),
                            ],
                          },
                          i.createElement(q, {
                            indexRoute: s,
                            jsonKey: l,
                            targetJsonSchema: d,
                          }),
                        ),
                    ),
                  !d &&
                    i.createElement(
                      'div',
                      { className: 'base-schema-box' },
                      i.createElement(
                        'div',
                        { className: 'warn-text' },
                        l,
                        '：数据元素为空',
                      ),
                    ),
                );
              }),
              t
            );
          })(i.PureComponent),
          W = (0, d.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, d.observer)(M)),
          G = y.Tree.TreeNode,
          U = function (e) {
            return s().createElement(W, t()({}, e));
          },
          z = function (e) {
            e.jsonKey;
            var n = e.indexRoute,
              a = e.nodeKey,
              o = e.targetJsonSchema,
              r = o.type,
              i = n ? n + '-0' : '0',
              l = 'items',
              c = a ? a + '-' + l : l,
              d = o[l] || {};
            return s().createElement(
              G,
              {
                className: r + '-schema schema-item-form',
                id: a,
                key: a,
                title: U(t()({}, e)),
              },
              (function (e) {
                var n = e.parentType,
                  a = e.jsonKey,
                  o = e.indexRoute,
                  r = e.nodeKey,
                  i = e.targetJsonSchema;
                return s().createElement(
                  G,
                  {
                    className: 'array-item-schema schema-item-form',
                    id: r,
                    key: r,
                    disabled: !0,
                    title: U(
                      t()({}, e, {
                        indexRoute: o,
                        jsonKey: a,
                        targetJsonSchema: i,
                        parentType: n,
                        nodeKey: r,
                        isFixed: !0,
                        typeIsFixed: !1,
                      }),
                    ),
                  },
                  'object' === i.type &&
                    (function (e) {
                      var n = e.propertyOrder,
                        a = e.properties,
                        o = e.parentIndexRoute,
                        r = e.parentNodeKey,
                        i = e.parentType;
                      return n.map(function (n, s) {
                        var l = o ? o + '-' + s : '' + s,
                          c = n,
                          d = a[c],
                          m = d.type,
                          u = (r ? r + '-' : '') + m + '-' + c;
                        return he(
                          t()({}, e, {
                            parentType: i,
                            jsonKey: c,
                            indexRoute: l,
                            key: u,
                            nodeKey: u,
                            targetJsonSchema: d,
                          }),
                        );
                      });
                    })(
                      t()({}, e, {
                        propertyOrder: i.propertyOrder,
                        properties: i.properties,
                        parentIndexRoute: o,
                        parentNodeKey: r,
                        parentType: n,
                      }),
                    ),
                );
              })(
                t()({}, e, {
                  parentType: 'array',
                  jsonKey: l,
                  indexRoute: i,
                  nodeKey: c,
                  targetJsonSchema: d,
                }),
              ),
            );
          },
          X = (n(790), y.Select.Option),
          H = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).typeChange = function (e) {
                  var t = n.props.schemaStore || {},
                    a = t.editSchemaData,
                    o = t.updateSchemaData,
                    r = n.props,
                    i = r.indexRoute,
                    s = r.jsonKey,
                    l = r.targetJsonSchema,
                    c = r.typeSelectData;
                  if (l.default !== e) {
                    if ((a(i || '', s, { default: e }), c)) {
                      var d = c[e];
                      d &&
                        '数据源类型' === l.title &&
                        a((0, g.getNextIndexRoute)(i), 'data', d);
                    }
                    if (g.EventTypeDataList) {
                      var m = g.EventTypeDataList[e];
                      '事件类型' === l.title &&
                        m &&
                        o((0, g.getParentIndexRoute)(i), m);
                    }
                  }
                }),
                (n.typeChange = n.typeChange.bind(n)),
                n
              );
            }
            return (
              r()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  n = e.targetJsonSchema,
                  a = n.type,
                  o = n.options || [];
                return i.createElement(
                  'div',
                  { className: 'typeSelect-schema-box', id: t },
                  i.createElement(
                    'div',
                    { className: 'key-input-item' },
                    i.createElement(
                      y.Select,
                      {
                        defaultValue: n.default || 'local',
                        onChange: this.typeChange,
                      },
                      o.map(function (e, t) {
                        return i.createElement(
                          X,
                          { key: t, value: e.value },
                          e.label || e.name,
                        );
                      }),
                    ),
                  ),
                  i.createElement(
                    'div',
                    { className: 'type-select-item' },
                    i.createElement(
                      y.Select,
                      { defaultValue: a, style: { width: 120 }, disabled: !0 },
                      i.createElement(X, { key: a, value: a }, a),
                    ),
                  ),
                  i.createElement(
                    'div',
                    { className: 'title-input-item' },
                    i.createElement(y.Input, {
                      defaultValue: n.title,
                      disabled: !0,
                    }),
                  ),
                  i.createElement('div', { className: 'operate-item' }, ' '),
                );
              }),
              t
            );
          })(i.PureComponent),
          Q = (0, d.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, d.observer)(H)),
          Y = y.Tree.TreeNode,
          Z = function (e) {
            return s().createElement(W, t()({}, e));
          },
          $ = {
            local: {
              type: 'json',
              title: '本地json数据',
              default: '{}',
              placeholder: '请输入静态json数据',
              isRequired: !0,
              description: '用于设置本地的静态json数据',
            },
            remote: {
              type: 'url',
              title: '远程json数据',
              default: 'http://xxx',
              placeholder: '请输入远程json数据源地址',
              isRequired: !0,
              description: '用于设置获取元素数据的请求地址',
            },
          },
          ee = y.Tree.TreeNode,
          te = function (e) {
            return s().createElement(W, t()({}, e));
          },
          ne = y.Tree.TreeNode,
          ae = function (e) {
            return s().createElement(W, t()({}, e));
          },
          oe = y.Tree.TreeNode,
          re = function (e) {
            return s().createElement(W, t()({}, e));
          },
          ie = (n(617), y.Select.Option),
          se = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleLabelChange = function (
                  e,
                ) {
                  var t = n.props.schemaStore || {},
                    a = t.isExitOptionLabel,
                    o = t.updateOptionLabel,
                    r = e.target.value,
                    i = n.props,
                    s = i.indexRoute,
                    l = i.optionIndex;
                  r !== i.optionLabel &&
                    (a(s, r)
                      ? y.message.warning(
                          '对不起，存在相同的Label值，请重新设置。',
                        )
                      : o(s, l, r));
                }),
                (n.handleValueChange = function (e) {
                  var t = (n.props.schemaStore || {}).updateOptionValue,
                    a = e.target.value,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.optionIndex,
                    s = o.optionValue;
                  if (a !== s) {
                    var l = a;
                    if ((0, g.isObject)(s) && (0, g.isString)(l))
                      try {
                        l = JSON.parse(l);
                      } catch (e) {
                        (console.warn('option 数值转换失败：', l), (l = s));
                      }
                    t(r, i, l);
                  }
                }),
                (n.onAddBtnEvent = function () {
                  var e = (n.props.schemaStore || {}).addOptionItem,
                    t = n.props;
                  e(t.indexRoute, t.optionIndex);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = (n.props.schemaStore || {}).copyOptionItem,
                    t = n.props;
                  e(t.indexRoute, t.optionIndex);
                }),
                (n.onDeleteBtnEvent = function () {
                  var e = n.props.schemaStore || {},
                    t = (e.getSchemaByIndexRoute, e.deleteOptionItem),
                    a = n.props;
                  t(a.indexRoute, a.optionIndex);
                }),
                (n.onAddBtnEvent = n.onAddBtnEvent.bind(n)),
                (n.onCopyBtnEvent = n.onCopyBtnEvent.bind(n)),
                (n.onDeleteBtnEvent = n.onDeleteBtnEvent.bind(n)),
                (n.handleLabelChange = n.handleLabelChange.bind(n)),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            return (
              r()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.optionLabel,
                  n = e.optionValue,
                  a = (e.optionNodeKey, n);
                return (
                  ((0, g.isObject)(n) || (0, g.isArray)(n)) &&
                    (a = JSON.stringify(n)),
                  i.createElement(
                    'div',
                    { className: 'option-schema-box', id: t },
                    i.createElement(
                      'div',
                      { className: 'key-input-item' },
                      i.createElement(y.Input, {
                        defaultValue: a,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                    i.createElement(
                      'div',
                      { className: 'type-select-item' },
                      i.createElement(
                        y.Select,
                        { defaultValue: 'string', style: { width: 120 } },
                        i.createElement(
                          ie,
                          { key: 'string', value: 'string' },
                          'string',
                        ),
                      ),
                    ),
                    i.createElement(
                      'div',
                      { className: 'title-input-item' },
                      i.createElement(y.Input, {
                        defaultValue: t,
                        onPressEnter: this.handleLabelChange,
                        onBlur: this.handleLabelChange,
                      }),
                    ),
                    i.createElement(
                      'div',
                      { className: 'operate-item' },
                      i.createElement(
                        y.Tooltip,
                        { title: '删除' },
                        i.createElement(_.CloseOutlined, {
                          className: 'operate-btn delete-operate',
                          onClick: this.onDeleteBtnEvent,
                        }),
                      ),
                      i.createElement(
                        y.Tooltip,
                        { title: '新增可选项' },
                        i.createElement(_.PlusOutlined, {
                          className: 'operate-btn',
                          onClick: this.onAddBtnEvent,
                        }),
                      ),
                      i.createElement(
                        y.Tooltip,
                        { title: '复制' },
                        i.createElement(_.CopyOutlined, {
                          className: 'operate-btn',
                          onClick: this.onCopyBtnEvent,
                        }),
                      ),
                    ),
                  )
                );
              }),
              t
            );
          })(i.PureComponent),
          le = (0, d.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, d.observer)(se)),
          ce = y.Tree.TreeNode,
          de = function (e) {
            return s().createElement(le, t()({}, e));
          },
          me = y.Tree.TreeNode,
          ue = function (e) {
            return s().createElement(W, t()({}, e));
          },
          pe = y.Tree.TreeNode,
          he = function (e) {
            switch (e.targetJsonSchema.type) {
              case 'object':
              case 'func':
              case 'style':
              case 'data':
              case 'padding-margin':
                return ve(e);
              case 'array':
                return z(e);
              case 'datasource':
                return (function (e) {
                  e.jsonKey;
                  var n,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    i = r.type,
                    l = r.properties.data || {};
                  return s().createElement(
                    Y,
                    {
                      className: i + '-schema schema-item-form',
                      id: o,
                      key: o,
                      title: Z(t()({}, e)),
                    },
                    s().createElement(Y, {
                      className: 'dataSource-type-item-schema schema-item-form',
                      id: o + '-type',
                      key: o + '-type',
                      disabled: !0,
                      title:
                        ((n = t()({}, e, {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: r.properties.type,
                          parentType: i,
                          nodeKey: o + '-type',
                          typeSelectData: $,
                        })),
                        s().createElement(Q, t()({}, n))),
                    }),
                    s().createElement(Y, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + l.type,
                      key: o + '-data-' + l.type,
                      disabled: !0,
                      title: Z(
                        t()({}, e, {
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'data',
                          targetJsonSchema: l,
                          parentType: i,
                          nodeKey: o + '-data-' + l.type,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                    s().createElement(Y, {
                      className:
                        'dataSource-filter-item-schema schema-item-form',
                      id: o + '-filter',
                      key: o + '-filter',
                      disabled: !0,
                      title: Z(
                        t()({}, e, {
                          indexRoute: a ? a + '-2' : '2',
                          jsonKey: 'filter',
                          targetJsonSchema: r.properties.filter,
                          parentType: i,
                          nodeKey: o + '-filter',
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                  );
                })(e);
              case 'dynamic-data':
                return (function (e) {
                  e.jsonKey;
                  var n,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    i = r.type,
                    l = r.properties.config || {},
                    c = r.properties.data || {};
                  return s().createElement(
                    ee,
                    {
                      className: i + '-schema schema-item-form',
                      id: o,
                      key: o,
                      title: te(t()({}, e)),
                    },
                    s().createElement(ee, {
                      className: 'dataSource-type-item-schema schema-item-form',
                      id: o + '-type',
                      key: o + '-type',
                      disabled: !0,
                      title:
                        ((n = t()({}, e, {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: r.properties.type,
                          parentType: i,
                          nodeKey: o + '-type',
                        })),
                        s().createElement(Q, t()({}, n))),
                    }),
                    s().createElement(ee, {
                      className:
                        'dataSource-config-item-schema schema-item-form',
                      id: o + '-config-' + c.type,
                      key: o + '-config-' + c.type,
                      disabled: !0,
                      title: te(
                        t()({}, e, {
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'config',
                          targetJsonSchema: l,
                          parentType: i,
                          nodeKey: o + '-config-' + l.type,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                    s().createElement(ee, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + c.type,
                      key: o + '-data-' + c.type,
                      disabled: !0,
                      title: te(
                        t()({}, e, {
                          indexRoute: a ? a + '-2' : '2',
                          jsonKey: 'data',
                          targetJsonSchema: c,
                          parentType: i,
                          nodeKey: o + '-data-' + c.type,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                  );
                })(e);
              case 'event':
                return (function (e) {
                  e.jsonKey;
                  var n,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    i = r.type,
                    l = r.properties.type || {},
                    c = r.properties.register || {},
                    d = r.properties.actionFunc || {},
                    m = r.properties.trigger || {},
                    u = r.properties.eventData || {};
                  return s().createElement(
                    ne,
                    {
                      className: i + '-schema schema-item-form',
                      id: o,
                      key: o,
                      title: ae(t()({}, e)),
                    },
                    s().createElement(ne, {
                      className: 'event-type-item-schema schema-item-form',
                      id: o + '-type',
                      key: o + '-type',
                      disabled: !0,
                      title:
                        ((n = t()({}, e, {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: l,
                          parentType: i,
                          nodeKey: o + '-type',
                        })),
                        s().createElement(Q, t()({}, n))),
                    }),
                    'on' === l.default &&
                      c &&
                      s().createElement(ne, {
                        className:
                          'event-register-item-schema schema-item-form',
                        id: o + '-register-' + l.default,
                        key: o + '-register-' + l.default,
                        disabled: !0,
                        title: ae(
                          t()({}, e, {
                            indexRoute: a ? a + '-1' : '1',
                            jsonKey: 'register',
                            targetJsonSchema: c,
                            parentType: i,
                            nodeKey: o + '-register-' + l.default,
                            hideOperaBtn: !0,
                            keyIsFixed: !0,
                            typeIsFixed: !0,
                          }),
                        ),
                      }),
                    'on' === l.default &&
                      d &&
                      s().createElement(ne, {
                        className:
                          'event-actionFunc-item-schema schema-item-form',
                        id: o + '-actionFunc-' + l.default,
                        key: o + '-actionFunc-' + l.default,
                        disabled: !0,
                        title: ae(
                          t()({}, e, {
                            indexRoute: a ? a + '-2' : '2',
                            jsonKey: 'actionFunc',
                            targetJsonSchema: d,
                            parentType: i,
                            nodeKey: o + '-actionFunc-' + l.default,
                            hideOperaBtn: !0,
                            keyIsFixed: !0,
                            typeIsFixed: !0,
                          }),
                        ),
                      }),
                    'emit' === l.default &&
                      m &&
                      s().createElement(ne, {
                        className: 'event-trigger-item-schema schema-item-form',
                        id: o + '-trigger-' + l.default,
                        key: o + '-trigger-' + l.default,
                        disabled: !0,
                        title: ae(
                          t()({}, e, {
                            indexRoute: a ? a + '-1' : '1',
                            jsonKey: 'trigger',
                            targetJsonSchema: m,
                            parentType: i,
                            nodeKey: o + '-trigger-' + l.default,
                            hideOperaBtn: !0,
                            keyIsFixed: !0,
                            typeIsFixed: !0,
                          }),
                        ),
                      }),
                    'emit' === l.default &&
                      u &&
                      s().createElement(ne, {
                        className:
                          'event-eventData-item-schema schema-item-form',
                        id: o + '-eventData-' + l.default,
                        key: o + '-eventData-' + l.default,
                        disabled: !0,
                        title: ae(
                          t()({}, e, {
                            indexRoute: a ? a + '-2' : '2',
                            jsonKey: 'eventData',
                            targetJsonSchema: u,
                            parentType: i,
                            nodeKey: o + '-eventData-' + l.default,
                            hideOperaBtn: !0,
                            keyIsFixed: !0,
                            typeIsFixed: !0,
                          }),
                        ),
                      }),
                  );
                })(e);
              case 'quantity':
              case 'box-style':
                return (function (e) {
                  e.jsonKey;
                  var n,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    i = r.type,
                    l = r.propertyOrder[0],
                    c = r.properties[l];
                  return s().createElement(
                    oe,
                    {
                      className: i + '-schema schema-item-form',
                      id: o,
                      key: o,
                      title: re(t()({}, e)),
                    },
                    s().createElement(oe, {
                      className: 'quantity-unit-item-schema schema-item-form',
                      id: o + '-' + l,
                      key: o + '-' + l,
                      disabled: !0,
                      title: re(
                        t()({}, e, {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: l,
                          targetJsonSchema: c,
                          parentType: i,
                          nodeKey: o + '-' + l,
                          hideOperaBtn: !0,
                          showAdvanceBtn: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                    s().createElement(oe, {
                      className:
                        'quantity-typeSelect-item-schema schema-item-form',
                      id: o + '-quantity',
                      key: o + '-quantity',
                      disabled: !0,
                      title:
                        ((n = t()({}, e, {
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'quantity',
                          targetJsonSchema: r.properties.quantity,
                          parentType: i,
                          nodeKey: o + '-quantity',
                        })),
                        s().createElement(Q, t()({}, n))),
                    }),
                  );
                })(e);
              case 'radio':
              case 'checkboxes':
              case 'select':
                return (function (e) {
                  e.jsonKey;
                  var n,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    i = r.type,
                    l = r.options,
                    c = a || '0';
                  return s().createElement(
                    ce,
                    {
                      className: i + '-schema schema-item-form',
                      id: o,
                      key: o,
                      title:
                        ((n = t()({}, e)), s().createElement(W, t()({}, n))),
                    },
                    l &&
                      l.length > 0 &&
                      l.map(function (e, t) {
                        var n = e.label || e.name,
                          a = e.value,
                          r = '' + o + i + '-' + n;
                        return s().createElement(ce, {
                          className: 'enum-item-schema schema-item-form',
                          id: r,
                          key: r,
                          disabled: !0,
                          title: de({
                            indexRoute: c,
                            optionIndex: t,
                            optionLabel: n,
                            optionValue: a,
                            optionNodeKey: r,
                          }),
                        });
                      }),
                  );
                })(e);
              case 'api':
                return (function (e) {
                  e.jsonKey;
                  var n = e.indexRoute,
                    a = e.nodeKey,
                    o = e.targetJsonSchema,
                    r = o.type,
                    i = o.properties.url || {},
                    l = o.properties.method || {},
                    c = o.properties.headers || {},
                    d = o.properties.data || {};
                  return s().createElement(
                    pe,
                    {
                      className: r + '-schema schema-item-form',
                      id: a,
                      key: a,
                      title: s().createElement(W, t()({}, e)),
                    },
                    s().createElement(pe, {
                      className: 'api-url-item-schema schema-item-form',
                      id: a + '-url',
                      key: a + '-url',
                      title: s().createElement(
                        W,
                        t()({}, e, {
                          indexRoute: n ? n + '-0' : '0',
                          jsonKey: 'url',
                          targetJsonSchema: i,
                          parentType: r,
                          nodeKey: a + '-url',
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                    s().createElement(pe, {
                      className: 'api-method-item-schema schema-item-form',
                      id: a + '-method',
                      key: a + '-method',
                      title: s().createElement(
                        W,
                        t()({}, e, {
                          indexRoute: n ? n + '-1' : '1',
                          jsonKey: 'method',
                          targetJsonSchema: l,
                          parentType: r,
                          nodeKey: a + '-method',
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                    s().createElement(pe, {
                      className: 'api-headers-item-schema schema-item-form',
                      id: a + '-headers',
                      key: a + '-headers',
                      title: s().createElement(
                        W,
                        t()({}, e, {
                          indexRoute: n ? n + '-2' : '2',
                          jsonKey: 'headers',
                          targetJsonSchema: c,
                          parentType: r,
                          nodeKey: a + '-headers',
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                    s().createElement(pe, {
                      className: 'api-data-item-schema schema-item-form',
                      id: a + '-data',
                      key: a + '-data',
                      title: s().createElement(
                        W,
                        t()({}, e, {
                          indexRoute: n ? n + '-3' : '3',
                          jsonKey: 'data',
                          targetJsonSchema: d,
                          parentType: r,
                          nodeKey: a + '-data',
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      ),
                    }),
                  );
                })(e);
              default:
                return (function (e) {
                  (e.jsonKey, e.indexRoute);
                  var t = e.nodeKey,
                    n = e.targetJsonSchema.type;
                  return s().createElement(me, {
                    className: n + '-schema schema-item-form',
                    id: t,
                    key: t,
                    title: ue(e),
                  });
                })(e);
            }
          },
          ye = [
            'propertyOrder',
            'properties',
            'parentIndexRoute',
            'parentNodeKey',
            'parentType',
            'isOnlyShowChild',
          ],
          fe = y.Tree.TreeNode,
          ge = function (e) {
            return s().createElement(W, t()({}, e));
          },
          ve = function (e) {
            e.jsonKey;
            var n,
              a,
              o,
              r,
              i,
              l,
              c,
              d = e.indexRoute,
              m = e.nodeKey,
              u = e.targetJsonSchema,
              p = e.isOnlyShowChild,
              h = u.type,
              y = u.isFixed,
              f =
                ((a = (n = t()({}, e, {
                  propertyOrder: u.propertyOrder,
                  properties: u.properties,
                  parentIndexRoute: d,
                  parentNodeKey: m,
                  parentType: h,
                  isOnlyShowChild: p,
                })).propertyOrder),
                (o = n.properties),
                (r = n.parentIndexRoute),
                (i = n.parentNodeKey),
                (l = n.parentType),
                n.isOnlyShowChild,
                (c = T()(n, ye)),
                a.map(function (e, n) {
                  var a = r ? r + '-' + n : '' + n,
                    s = e,
                    d = o[s],
                    m = d.type,
                    u = (i ? i + '-' : '') + m + '-' + s;
                  return he(
                    t()({}, c, {
                      parentType: l,
                      jsonKey: s,
                      indexRoute: a,
                      key: u,
                      nodeKey: u,
                      targetJsonSchema: d,
                    }),
                  );
                })),
              g = s().createElement(
                fe,
                {
                  className: h + '-schema schema-item-form',
                  id: m,
                  key: m,
                  disabled: y,
                  title: ge(t()({}, e)),
                },
                f,
              );
            return p ? f : g;
          },
          Ee =
            (n(23),
            (function (e) {
              function n(t) {
                var n;
                (((n = e.call(this, t) || this).onDragStart = function (e) {
                  (0, (n.props.schemaStore || {}).getSchemaByIndexRoute)(
                    e.node.indexRoute,
                  ).isFixed && y.message.warning('当前元素不支持拖拽哦。');
                }),
                  (n.onDrop = function (e) {
                    var t = e.dragNode,
                      a = e.node,
                      o = n.props.schemaStore || {},
                      r = o.getSchemaByIndexRoute,
                      i = o.indexRoute2keyRoute,
                      s = o.insertJsonData,
                      l = o.deleteJsonByIndex,
                      c = o.isExitJsonKey,
                      d = o.isSupportCurType,
                      m = t.indexRoute,
                      u = t.jsonKey,
                      p = r(m);
                    if (!p.isFixed) {
                      var h = a.indexRoute,
                        f = (0, g.isSameParent)(m, h),
                        v = (0, g.getCurPosition)(m, h);
                      if (f)
                        (l(m, !0),
                          'before' === v && (h = (0, g.moveForward)(h)),
                          a.dragOverGapTop
                            ? s(h, u, p, 'before')
                            : (a.dragOver || a.dragOverGapBottom) &&
                              s(h, u, p));
                      else {
                        if (c(h, u))
                          return void y.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var E = p.type;
                        if (!d(h, E))
                          return void y.message.warning(
                            '目标位置不支持' + E + '类型元素',
                          );
                        var S = i(m),
                          b = (0, g.getParentIndexRoute)(h),
                          C = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(S + '-' + E);
                        (x(i(b) + '-' + u + '-' + E, C || S),
                          a.dragOverGapTop
                            ? 'after' === v
                              ? (l(m, !0), s(h, u, p, 'before'))
                              : (s(h, u, p, 'before', !0), l(m))
                            : (a.dragOver || a.dragOverGapBottom) &&
                              ('after' === v
                                ? (l(m, !0), s(h, u, p))
                                : (s(h, u, p, '', !0), l(m))));
                      }
                    }
                  }),
                  (n.catchExpandedKeys = function (e) {
                    var t = [];
                    return (
                      e &&
                        e.propertyOrder &&
                        e.properties &&
                        e.propertyOrder.map(function (n, a) {
                          var o = n,
                            r = e.properties[o].type + '-' + o;
                          t.push(r);
                        }),
                      t
                    );
                  }));
                var a = n.props.schemaStore || {},
                  o = a.initJSONSchemaData,
                  r = a.initOnChange,
                  i = a.initSchemaTypeList;
                return (
                  t.data && o(t.data),
                  t.onChange && r(t.onChange),
                  t.typeList && i(t.typeList),
                  n
                );
              }
              r()(n, e);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = this.props.schemaStore || {},
                    n = t.initJSONSchemaData,
                    a = t.initOnChange,
                    o = t.initSchemaTypeList;
                  (E(e.data, this.props.data) || n(e.data),
                    E(e.onChange, this.props.onChange) || a(e.onChange),
                    E(e.typeList, this.props.typeList) || o(e.typeList));
                }),
                (a.render = function () {
                  var e = this.props,
                    n = e.jsonView,
                    a = e.jsonViewReadOnly,
                    o = this.props.schemaStore || {},
                    r = o.jsonSchema,
                    s = o.schemaChange,
                    l = (0, g.isEmptySchema)(r),
                    c = r.type;
                  return i.createElement(
                    'div',
                    { className: 'json-schema-container' },
                    !l &&
                      !n &&
                      i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                          y.Tree,
                          {
                            draggable: !0,
                            selectable: !1,
                            onDragStart: this.onDragStart,
                            onDrop: this.onDrop,
                            defaultExpandedKeys:
                              'object' !== c || l
                                ? []
                                : this.catchExpandedKeys(r),
                          },
                          'object' === c &&
                            ve(
                              t()({}, this.props, {
                                parentType: '',
                                jsonKey: '',
                                indexRoute: '',
                                nodeKey: '',
                                targetJsonSchema: r,
                                isOnlyShowChild: !0,
                              }),
                            ),
                          'object' !== c &&
                            he(
                              t()({}, this.props, {
                                parentType: '',
                                jsonKey: '',
                                indexRoute: '',
                                nodeKey: 'first-schema',
                                targetJsonSchema: r,
                                key: 'schema',
                                isFirstSchema: !0,
                              }),
                            ),
                        ),
                      ),
                    !l &&
                      n &&
                      i.createElement(L, {
                        jsonData: r,
                        readOnly: null == a || a,
                        maxLines: 25,
                        onChange: s,
                      }),
                    l &&
                      i.createElement(
                        'p',
                        { className: 'json-schema-empty' },
                        '当前jsonSchema没有数据内容',
                      ),
                  );
                }),
                n
              );
            })(i.PureComponent)),
          xe = (0, d.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, d.observer)(Ee)),
          Se = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  schemaStore: new R.schemaStore(),
                }),
                n
              );
            }
            return (
              r()(n, e),
              (n.prototype.render = function () {
                var e = this.props.element,
                  n = this.state.schemaStore,
                  a = i.createElement(
                    d.Provider,
                    { schemaStore: n },
                    i.createElement(xe, t()({}, this.props)),
                  );
                return e ? (c().render(a, e), null) : a;
              }),
              n
            );
          })(i.PureComponent);
      })(),
      a
    );
  })();
});
