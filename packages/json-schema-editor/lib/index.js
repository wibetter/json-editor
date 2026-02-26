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
              return m;
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
            d = !1,
            p = function () {},
            c = null,
            u = 'data-vue-ssr-id',
            h =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function m(e, t, n, o) {
            ((d = n), (c = o || {}));
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
                    for (var d = 0; d < l.parts.length; d++) l.parts[d]();
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
              if (d) return p;
              a.parentNode.removeChild(a);
            }
            if (h) {
              var o = l++;
              ((a = s || (s = f())),
                (t = b.bind(null, a, o, !1)),
                (n = b.bind(null, a, o, !0)));
            } else
              ((a = f()),
                (t = x.bind(null, a)),
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
            S =
              ((v = []),
              function (e, t) {
                return ((v[e] = t), v.filter(Boolean).join('\n'));
              });
          function b(e, t, n, a) {
            var o = n ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = S(t, o);
            else {
              var r = document.createTextNode(o),
                i = e.childNodes;
              (i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(r, i[t]) : e.appendChild(r));
            }
          }
          function x(e, t) {
            var n = t.css,
              a = t.media,
              o = t.sourceMap;
            if (
              (a && e.setAttribute('media', a),
              c.ssrId && e.setAttribute(u, t.id),
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
            buildPropsSchema: function () {
              return I;
            },
            default: function () {
              return Ve;
            },
            registerSchema: function () {
              return O;
            },
            schemaRegistry: function () {
              return C;
            },
          }));
        var e = require('@babel/runtime/helpers/extends'),
          t = n.n(e),
          o = require('@babel/runtime/helpers/inheritsLoose'),
          r = n.n(o),
          i = require('react'),
          s = n.n(i),
          l = require('react-dom'),
          d = n.n(l),
          p = require('mobx-react'),
          c = require('@babel/runtime/helpers/createClass'),
          u = n.n(c),
          h = require('tslib'),
          m = require('mobx'),
          y = require('antd'),
          f = require('lodash'),
          g = require('@wibetter/json-utils');
        function v(e) {
          return (0, g.objClone)(e);
        }
        function S(e, t) {
          return (0, g.isEqual)(e, t);
        }
        function b(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var x = (function () {
          function e() {
            this.descriptors = new Map();
          }
          e.getInstance = function () {
            return (e.instance || (e.instance = new e()), e.instance);
          };
          var t = e.prototype;
          return (
            (t.register = function (e) {
              this.descriptors.set(e.type, e);
            }),
            (t.registerAll = function (e) {
              var t = this;
              e.forEach(function (e) {
                return t.register(e);
              });
            }),
            (t.get = function (e) {
              return this.descriptors.get(e);
            }),
            (t.getAllTypes = function () {
              return Array.from(this.descriptors.keys());
            }),
            (t.getAll = function () {
              return Array.from(this.descriptors.values());
            }),
            (t.has = function (e) {
              return this.descriptors.has(e);
            }),
            (t.getDefaultSchema = function (e) {
              var t;
              return null === (t = this.descriptors.get(e)) || void 0 === t
                ? void 0
                : t.defaultSchema;
            }),
            e
          );
        })();
        x.instance = void 0;
        var C = x.getInstance(),
          O = function (e, t) {
            (void 0 === t && (t = !1),
              !C.has(e.type) || t
                ? C.register(e)
                : console.warn(
                    '[JSONSchemaEditor] 已存在 ' + e.type + ' 类型的描述:',
                    e,
                  ));
          },
          E = {
            description: {
              type: 'input',
              title: '字段描述',
              description: '字段描述内容将作为 Title 的补充信息提供给用户',
              placeholder: '请输入字段描述',
            },
            showKey: {
              type: 'boolean',
              title: '展示Key值',
              description:
                '开启后，在 JSONEditor 端会展示当前 Key 值，以便增加辨识度',
            },
            onShow: {
              type: 'input',
              title: '显隐表达式',
              description:
                '设置显隐表达式，例如 "dataType === 1" 表示当 dataType 为 1 时显示当前项',
              placeholder: '请输入显隐表达式',
            },
            titleStyle: {
              type: 'json',
              title: '标题样式',
              description: '可用于设置标题展示样式',
            },
          },
          R = ['description', 'showKey', 'onShow', 'titleStyle'],
          j = {
            readOnly: {
              type: 'boolean',
              title: '是否只读',
              description: '当前属性设置为只读后，用户不能对其进行任何编辑操作',
            },
            isRequired: {
              type: 'boolean',
              title: '是否必填项',
              description:
                '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示',
            },
            isConditionProp: {
              type: 'boolean',
              title: '条件字段',
              description:
                '设置为条件字段后，其他字段可根据其数值变化进行实时联动',
            },
          };
        function I(e, n) {
          return {
            type: 'object',
            wrapWithPanel: !1,
            properties: t()({}, e, E),
            propertyOrder: [].concat(n, R),
          };
        }
        var N = g.TypeDataList.jsonschema;
        function K() {
          return C.getDefaultSchema('input');
        }
        var _ = (function () {
          function e() {
            var e = this;
            ((this.curJsonKeyIndex = 1),
              (this.triggerChange = !1),
              (this.jsonSchema = {}),
              (this.SchemaTypeList = {}),
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
                    d = [],
                    p = [],
                    c = [],
                    u = 0,
                    h = a.length;
                  u < h;
                  u++
                ) {
                  var m = a[u];
                  switch (n.properties[m].type) {
                    case 'input':
                    case 'url':
                      o.push(m);
                      break;
                    case 'number':
                    case 'quantity':
                      r.push(m);
                      break;
                    case 'radio':
                    case 'checkboxes':
                    case 'boolean':
                    case 'color':
                      i.push(m);
                      break;
                    case 'date':
                    case 'date-time':
                    case 'time':
                      s.push(m);
                      break;
                    case 'textarea':
                    case 'json':
                    case 'codearea':
                    case 'htmlarea':
                      l.push(m);
                      break;
                    case 'image':
                      d.push(m);
                      break;
                    case 'object':
                    case 'array':
                      p.push(m);
                      break;
                    default:
                      c.push(m);
                  }
                }
                ((n.propertyOrder = [].concat(o, r, i, s, d, l, p, c)),
                  e.jsonSchemaChange(!1));
              }),
              (0, m.makeObservable)(this));
          }
          var n = e.prototype;
          return (
            (n.triggerChangeAction = function () {
              this.triggerChange = !this.triggerChange;
            }),
            (n.initSchemaTypeList = function (e) {}),
            (n.initJSONSchemaData = function (e) {
              if (e && '{}' !== JSON.stringify(e)) {
                if (!S(e, this.JSONSchemaObj))
                  if (e && (0, g.isNewSchemaData)(e)) this.jsonSchema = e;
                  else {
                    var t = (0, g.oldSchemaToNewSchema)(e);
                    this.jsonSchema = t;
                  }
              } else this.jsonSchema = v(N);
            }),
            (n.initOnChange = function (e) {
              var t, n;
              (e ||
                ((t = e),
                (n = !1),
                'Function' === Object.prototype.toString.call(t).slice(8, -1) &&
                  (n = !0),
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
            (n.addChildJson = function (e, t) {
              var n = (0, g.getSchemaByIndexRoute)(e, this.jsonSchema, !1),
                a = null == n ? void 0 : n.type,
                o = a ? C.get(a) : void 0;
              if (null != o && o.isContainer) {
                var r = this.getNewJsonKeyIndex(n);
                (n.propertyOrder.push(r),
                  (n.properties[r] = K()),
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
              this.insertJsonData(e, a, K(), '', !1);
            }),
            (n.insertJsonData = function (e, t, n, a, o) {
              var r = (0, g.getParentIndexRoute_CurIndex)(e),
                i = r[0] || '',
                s = r[1],
                l = (0, g.getSchemaByIndexRoute)(i, this.jsonSchema, !1);
              l.properties[t] = n;
              var d = l.propertyOrder,
                p = 'before' === a ? Number(s) : Number(s) + 1,
                c = d.slice(0, p),
                u = d.slice(p);
              ((l.propertyOrder = [].concat(c, [t], u)),
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
              (r.enum && r.enumextra && ((r.enum[t] = n), (r.enumextra[t] = a)),
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
                  d = i.enum.slice(s);
                i.enum = [].concat(l, [n], d);
                var p = i.enumextra.slice(0, s),
                  c = i.enumextra.slice(s);
                i.enumextra = [].concat(p, [a], c);
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
                  d = i.options.slice(s),
                  p = { label: n, value: a };
                i.options = [].concat(l, [p], d);
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
                  return (0, m.toJS)(this.jsonSchema);
                },
              },
            ])
          );
        })();
        ((0, h.__decorate)(
          [m.observable],
          _.prototype,
          'triggerChange',
          void 0,
        ),
          (0, h.__decorate)([m.observable], _.prototype, 'jsonSchema', void 0),
          (0, h.__decorate)(
            [m.observable],
            _.prototype,
            'SchemaTypeList',
            void 0,
          ),
          (0, h.__decorate)([m.observable], _.prototype, 'onChange', void 0),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'triggerChangeAction',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'initSchemaTypeList',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'initJSONSchemaData',
            null,
          ),
          (0, h.__decorate)([m.computed], _.prototype, 'JSONSchemaObj', null),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'initOnChange',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'schemaChange',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'jsonSchemaChange',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'indexRoute2keyRoute',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'keyRoute2indexRoute',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'getSchemaByIndexRoute',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'getSchemaByKeyRoute',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'getNewJsonKeyIndex',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'isExitJsonKey',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'addChildJson',
            null,
          ),
          (0, h.__decorate)([m.action.bound], _.prototype, 'changeType', null),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateSchemaData',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'editSchemaData',
            null,
          ),
          (0, h.__decorate)([m.action.bound], _.prototype, 'editJsonKey', null),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'addNextJsonData',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'insertJsonData',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'deleteJsonByIndex_CurKey',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'deleteJsonByIndex',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateEnumItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'isExitEnumKey',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateEnumKey',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateEnumText',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'deleteEnumItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'insertEnumItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'getNewEnumIndex',
            null,
          ),
          (0, h.__decorate)([m.action.bound], _.prototype, 'addEnumItem', null),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'copyEnumItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateOptionItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'isExitOptionLabel',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateOptionLabel',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'updateOptionValue',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'deleteOptionItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'insertOption',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'getNewOptionValue',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'addOptionItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'copyOptionItem',
            null,
          ),
          (0, h.__decorate)(
            [m.action.bound],
            _.prototype,
            'childElemSort',
            void 0,
          ));
        var w = { schemaStore: _ },
          B = require('@babel/runtime/helpers/objectWithoutPropertiesLoose'),
          J = n.n(B),
          T = require('@ant-design/icons'),
          q = require('@wibetter/json-editor'),
          k = n.n(q),
          P = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              r()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.indexRoute,
                  n = e.jsonKey,
                  a = e.targetJsonSchema,
                  o = (this.props.schemaStore || {}).editSchemaData,
                  r = null == a ? void 0 : a.type;
                if (!r || !a)
                  return i.createElement(
                    'div',
                    { className: 'advance-config-empty' },
                    '暂无高级配置',
                  );
                var s = C.get(r),
                  l = null == s ? void 0 : s.propsSchema;
                return l && 0 !== Object.keys(l.properties || {}).length
                  ? i.createElement(
                      'div',
                      { className: 'advance-config-model' },
                      i.createElement(k(), {
                        wideScreen: !0,
                        schemaData: l,
                        jsonData: a,
                        onChange: function (e) {
                          if (e && o) {
                            var a = {};
                            (Object.keys(l.properties || {}).forEach(
                              function (t) {
                                void 0 !== e[t] && (a[t] = e[t]);
                              },
                            ),
                              o(t, n, a));
                          }
                        },
                      }),
                    )
                  : i.createElement(
                      'div',
                      { className: 'advance-config-empty' },
                      '当前类型暂无高级配置',
                    );
              }),
              t
            );
          })(i.PureComponent),
          D = (0, p.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, p.observer)(P)),
          A = (n(915), y.Select.Option),
          L = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleTypeChange = function (e) {
                  var t = (n.props.schemaStore || {}).changeType,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.targetJsonSchema;
                  i.type !== e && t(o, r, C.getDefaultSchema(e), i);
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
                (n.getAllTypeList = function () {
                  return C.getAllTypes();
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props.schemaStore || {},
                    t = e.addChildJson,
                    a = e.addNextJsonData,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.targetJsonSchema,
                    s = null == i ? void 0 : i.type,
                    l = s ? C.get(s) : void 0;
                  null != l && l.isContainer ? t(r) : a(r);
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
                    d = r.getNewJsonKeyIndex,
                    p = v(a),
                    c = (0, g.getParentIndexRoute)(t),
                    u = d(i(c), o),
                    h = a.type;
                  (b(s(c) + '-' + u + '-' + h, s(t)), l(t, u, p));
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
                  r = (o.parentType, o.indexRoute),
                  s = o.jsonKey,
                  l = o.nodeKey,
                  d = o.targetJsonSchema,
                  p = this.state.showAdvanceConfig,
                  c = r ? (0, g.getParentIndexRoute)(r) : '',
                  u = c ? a(c) : {},
                  h = null === (e = u && u.isContainer) || void 0 === e || e,
                  m = null == d ? void 0 : d.type,
                  f = m ? C.get(m) : void 0,
                  v = (null == f ? void 0 : f.isFixed) || !1,
                  S =
                    (null == f || f.readOnly,
                    void 0 !== this.props.keyIsFixed
                      ? this.props.keyIsFixed
                      : void 0 !== (null == f ? void 0 : f.keyIsFixed)
                        ? f.keyIsFixed
                        : !h || v),
                  b =
                    void 0 !== this.props.typeIsFixed
                      ? this.props.typeIsFixed
                      : void 0 !== (null == f ? void 0 : f.typeIsFixed)
                        ? f.typeIsFixed
                        : v,
                  x =
                    void 0 !== this.props.titleIsFixed
                      ? this.props.titleIsFixed
                      : void 0 !== (null == f ? void 0 : f.titleIsFixed)
                        ? f.titleIsFixed
                        : v,
                  O =
                    void 0 !== this.props.hideOperaBtn
                      ? this.props.hideOperaBtn
                      : void 0 !== (null == f ? void 0 : f.hideOperaBtn)
                        ? f.hideOperaBtn
                        : !h,
                  E =
                    void 0 !== this.props.showAdvanceBtn
                      ? this.props.showAdvanceBtn
                      : void 0 === (null == f ? void 0 : f.showAdvanceBtn) ||
                        f.showAdvanceBtn,
                  R = this.getAllTypeList(),
                  j =
                    null !== (t = null == f ? void 0 : f.isContainer) &&
                    void 0 !== t &&
                    t;
                return i.createElement(
                  i.Fragment,
                  null,
                  d &&
                    i.createElement(
                      'div',
                      { className: 'base-schema-box', id: l },
                      i.createElement(
                        'div',
                        {
                          className: 'key-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        i.createElement(y.Input, {
                          defaultValue: s || 'key值不存在',
                          disabled: S,
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
                            defaultValue: m,
                            style: { width: 150 },
                            onChange: this.handleTypeChange,
                            disabled: b,
                            filterOption: function (e, t) {
                              return !!(
                                (t && t.value.indexOf(e) > -1) ||
                                (t.children && t.children.indexOf(e) > -1)
                              );
                            },
                          },
                          R.map(function (e) {
                            var t;
                            return i.createElement(
                              A,
                              { key: e, value: e },
                              (null === (t = C.get(e)) || void 0 === t
                                ? void 0
                                : t.label) || e,
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
                        !O &&
                          i.createElement(
                            i.Fragment,
                            null,
                            !v &&
                              i.createElement(
                                y.Tooltip,
                                { title: '删除' },
                                i.createElement(T.CloseOutlined, {
                                  className: 'operate-btn delete-operate',
                                  onClick: this.onDeleteBtnEvent,
                                }),
                              ),
                            i.createElement(
                              y.Tooltip,
                              { title: j ? '新增子元素' : '新增同级元素' },
                              i.createElement(T.PlusOutlined, {
                                className: 'operate-btn',
                                onClick: this.onAddBtnEvent,
                              }),
                            ),
                            j &&
                              i.createElement(
                                y.Tooltip,
                                { title: '数据项排序' },
                                i.createElement(T.SortAscendingOutlined, {
                                  className: 'operate-btn',
                                  onClick: this.childElemSort,
                                }),
                              ),
                            !v &&
                              i.createElement(
                                i.Fragment,
                                null,
                                i.createElement(
                                  y.Tooltip,
                                  { title: '复制' },
                                  i.createElement(T.CopyOutlined, {
                                    className: 'operate-btn',
                                    onClick: this.onCopyBtnEvent,
                                  }),
                                ),
                                i.createElement(
                                  y.Tooltip,
                                  { title: '按住进行拖拽' },
                                  i.createElement(T.DragOutlined, {
                                    className: 'operate-btn drag-btn',
                                  }),
                                ),
                              ),
                          ),
                        E &&
                          i.createElement(
                            y.Tooltip,
                            { title: '高级设置' },
                            i.createElement(T.SettingOutlined, {
                              className: 'operate-btn',
                              onClick: function () {
                                n.setState({ showAdvanceConfig: !0 });
                              },
                            }),
                          ),
                      ),
                      p &&
                        i.createElement(
                          y.Modal,
                          {
                            open: !0,
                            title:
                              '高级设置 / 当前字段：' + d.title + '(' + s + ')',
                            width: 800,
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
                          i.createElement(D, {
                            indexRoute: r,
                            jsonKey: s,
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
                        s,
                        '：数据元素为空',
                      ),
                    ),
                );
              }),
              t
            );
          })(i.PureComponent),
          F = (0, p.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, p.observer)(L)),
          V = y.Tree.TreeNode,
          M = function (e) {
            return s().createElement(F, t()({}, e));
          },
          W = function (e) {
            var t = e.jsonKey,
              n = e.indexRoute,
              a = e.nodeKey,
              o = e.targetJsonSchema.type;
            return s().createElement(V, {
              className: o + '-schema schema-item-form',
              id: a,
              key: a,
              'data-indexRoute': n,
              'data-jsonKey': t,
              title: M(e),
            });
          },
          U = function (e) {
            var t = e.targetJsonSchema,
              n = t.type,
              a = C.get(n);
            return a && a.renderer
              ? a.renderer(e)
              : t.properties && Object.keys(t.properties).length > 0
                ? Z(e)
                : W(e);
          },
          z = [
            'propertyOrder',
            'properties',
            'parentIndexRoute',
            'parentNodeKey',
            'parentType',
            'isOnlyShowChild',
          ],
          G = y.Tree.TreeNode,
          H = function (e) {
            return s().createElement(F, t()({}, e));
          },
          Z = function (e) {
            var n,
              a,
              o,
              r,
              i,
              l,
              d,
              p = e.jsonKey,
              c = e.indexRoute,
              u = e.nodeKey,
              h = e.targetJsonSchema,
              m = e.isOnlyShowChild,
              y = h.type,
              f = C.get(y),
              g = null == f ? void 0 : f.isFixed,
              v =
                ((a = (n = t()({}, e, {
                  propertyOrder: h.propertyOrder,
                  properties: h.properties,
                  parentIndexRoute: c,
                  parentNodeKey: u,
                  parentType: y,
                  isOnlyShowChild: m,
                })).propertyOrder),
                (o = n.properties),
                (r = n.parentIndexRoute),
                (i = n.parentNodeKey),
                (l = n.parentType),
                n.isOnlyShowChild,
                (d = J()(n, z)),
                a.map(function (e, n) {
                  var a = r ? r + '-' + n : '' + n,
                    s = e,
                    p = o[s],
                    c = p.type,
                    u = (i ? i + '-' : '') + c + '-' + s;
                  return U(
                    t()({}, d, {
                      parentType: l,
                      jsonKey: s,
                      indexRoute: a,
                      key: u,
                      nodeKey: u,
                      targetJsonSchema: p,
                    }),
                  );
                })),
              S = s().createElement(
                G,
                {
                  className: y + '-schema schema-item-form',
                  id: u,
                  key: u,
                  'data-indexRoute': c,
                  'data-jsonKey': p,
                  disabled: g,
                  title: H(t()({}, e)),
                },
                v,
              );
            return m ? v : S;
          },
          X = require('react-ace'),
          Q = n.n(X),
          Y =
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
                    d = s.warnText,
                    p = (s.curJSONDataTemp, a || !1);
                  return (
                    (r = void 0 !== r ? r : r || '{}'),
                    ((0, g.isObject)(r) || (0, g.isArray)(r)) &&
                      (r = JSON.stringify(r, null, 2)),
                    i.createElement(
                      'div',
                      { className: 'json-view-box' },
                      p &&
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
                            d,
                          ),
                        ),
                      i.createElement(Q(), {
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
                        readOnly: p,
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
          $ =
            (n(23),
            (function (e) {
              function n(t) {
                var n;
                (((n = e.call(this, t) || this).onDragStart = function (e) {
                  var t = (n.props.schemaStore || {}).getSchemaByIndexRoute,
                    a = e.node,
                    o = t(a.indexRoute || a['data-indexRoute']),
                    r = C.get(o.type);
                  null != r &&
                    r.isFixed &&
                    y.message.warning('当前元素不支持拖拽哦。');
                }),
                  (n.onDrop = function (e) {
                    var t = e.dragNode,
                      a = e.node,
                      o = n.props.schemaStore || {},
                      r = o.getSchemaByIndexRoute,
                      i = o.indexRoute2keyRoute,
                      s = o.insertJsonData,
                      l = o.deleteJsonByIndex,
                      d = o.isExitJsonKey,
                      p = t.indexRoute || t['data-indexRoute'],
                      c = t.jsonKey || t['data-jsonKey'],
                      u = r(p),
                      h = C.get(u.type);
                    if (null == h || !h.isFixed) {
                      var m = a.indexRoute || a['data-indexRoute'],
                        f = (0, g.isSameParent)(p, m),
                        v = (0, g.getCurPosition)(p, m);
                      if (f)
                        (l(p, !0),
                          'before' === v && (m = (0, g.moveForward)(m)),
                          a.dragOverGapTop
                            ? s(m, c, u, 'before')
                            : (a.dragOver || a.dragOverGapBottom) &&
                              s(m, c, u));
                      else {
                        if (d(m, c))
                          return void y.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var S = u.type,
                          x = i(p),
                          O = (0, g.getParentIndexRoute)(m),
                          E = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(x + '-' + S);
                        (b(i(O) + '-' + c + '-' + S, E || x),
                          a.dragOverGapTop
                            ? 'after' === v
                              ? (l(p, !0), s(m, c, u, 'before'))
                              : (s(m, c, u, 'before', !0), l(p))
                            : (a.dragOver || a.dragOverGapBottom) &&
                              ('after' === v
                                ? (l(p, !0), s(m, c, u))
                                : (s(m, c, u, '', !0), l(p))));
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
                  r = a.initOnChange;
                return (t.data && o(t.data), t.onChange && r(t.onChange), n);
              }
              r()(n, e);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = this.props.schemaStore || {},
                    n = t.initJSONSchemaData,
                    a = t.initOnChange;
                  (S(e.data, this.props.data) || n(e.data),
                    S(e.onChange, this.props.onChange) || a(e.onChange));
                }),
                (a.render = function () {
                  var e = this.props,
                    n = e.jsonView,
                    a = e.jsonViewReadOnly,
                    o = this.props.schemaStore || {},
                    r = o.jsonSchema,
                    s = o.schemaChange,
                    l = (0, g.isEmptySchema)(r),
                    d = r.type;
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
                              'object' !== d || l
                                ? []
                                : this.catchExpandedKeys(r),
                          },
                          'object' === d &&
                            Z(
                              t()({}, this.props, {
                                parentType: '',
                                jsonKey: '',
                                indexRoute: '',
                                nodeKey: '',
                                targetJsonSchema: r,
                                isOnlyShowChild: !0,
                              }),
                            ),
                          'object' !== d &&
                            U(
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
                      i.createElement(Y, {
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
          ee = (0, p.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, p.observer)($)),
          te = {
            type: 'input',
            label: '字符串/单行文本',
            isContainer: !1,
            defaultSchema: {
              type: 'input',
              title: '单文本框',
              default: '',
              description: '',
              placeholder: '',
            },
            renderer: W,
            propsSchema: I(
              t()({}, j, {
                isConditionProp: j.isConditionProp,
                default: {
                  type: 'input',
                  title: '默认值',
                  placeholder: '请输入默认值',
                },
                placeholder: {
                  type: 'input',
                  title: '输入提示',
                  description: '输入提示内容将作为输入区域的提示信息展示给用户',
                  placeholder: '请输入输入提示',
                },
                autoComplete: {
                  type: 'boolean',
                  title: '开启可选项',
                  description: '开启后支持添加可选项，并支持 autoComplete',
                },
                options: {
                  type: 'json',
                  title: '可选项',
                  description:
                    '开启可选项后，可在此设置可选数据列表（数组格式）',
                  onShow: 'autoComplete === true',
                },
              }),
              [
                'isConditionProp',
                'readOnly',
                'isRequired',
                'default',
                'placeholder',
                'autoComplete',
                'options',
              ],
            ),
          };
        C.register(te);
        var ne = {
          type: 'boolean',
          label: 'Boolean/开关',
          isContainer: !1,
          defaultSchema: {
            type: 'boolean',
            title: '布尔值',
            default: !1,
            description: '',
          },
          renderer: W,
          propsSchema: I(
            {
              isConditionProp: j.isConditionProp,
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: { type: 'boolean', title: '默认值' },
            },
            ['isConditionProp', 'readOnly', 'isRequired', 'default'],
          ),
        };
        C.register(ne);
        var ae = {
          type: 'number',
          label: 'Number数值',
          isContainer: !1,
          defaultSchema: {
            type: 'number',
            title: '数量number',
            default: 1,
            description: '',
            placeholder: '',
          },
          renderer: W,
          propsSchema: I(
            {
              isConditionProp: j.isConditionProp,
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: {
                type: 'number',
                title: '默认值',
                placeholder: '请输入默认数值',
              },
              placeholder: {
                type: 'input',
                title: '输入提示',
                placeholder: '请输入输入提示',
              },
              minimum: {
                type: 'number',
                title: '最小值',
                description: '设置最小值后，用户输入的数值必须大于当前最小值',
              },
              maximum: {
                type: 'number',
                title: '最大值',
                description: '设置最大值后，用户输入的数值必须小于当前最大值',
              },
            },
            [
              'isConditionProp',
              'readOnly',
              'isRequired',
              'default',
              'placeholder',
              'minimum',
              'maximum',
            ],
          ),
        };
        C.register(ae);
        var oe = {
          type: 'color',
          label: '颜色数值',
          isContainer: !1,
          defaultSchema: {
            type: 'color',
            title: '颜色color',
            default: '#ffffff',
            description: '',
          },
          renderer: W,
          propsSchema: I(
            {
              isConditionProp: j.isConditionProp,
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: { type: 'color', title: '默认颜色值' },
            },
            ['isConditionProp', 'readOnly', 'isRequired', 'default'],
          ),
        };
        C.register(oe);
        var re = {
          type: 'url',
          label: 'URL数值',
          isContainer: !1,
          defaultSchema: {
            type: 'url',
            title: '链接地址url',
            default: '',
            description: '',
            placeholder: '',
          },
          renderer: W,
          propsSchema: I(
            {
              isConditionProp: j.isConditionProp,
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: {
                type: 'input',
                title: '默认值',
                placeholder: '请输入默认 URL',
              },
              placeholder: {
                type: 'input',
                title: '输入提示',
                placeholder: '请输入输入提示',
              },
            },
            [
              'isConditionProp',
              'readOnly',
              'isRequired',
              'default',
              'placeholder',
            ],
          ),
        };
        C.register(re);
        var ie = {
          type: 'textarea',
          label: '多行文本',
          isContainer: !1,
          defaultSchema: {
            type: 'textarea',
            title: '多行文本框',
            default: '',
            description: '',
            placeholder: '',
          },
          renderer: W,
          propsSchema: I(
            {
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: {
                type: 'textarea',
                title: '默认值',
                placeholder: '请输入默认值',
              },
              placeholder: {
                type: 'input',
                title: '输入提示',
                placeholder: '请输入输入提示',
              },
            },
            ['readOnly', 'isRequired', 'default', 'placeholder'],
          ),
        };
        C.register(ie);
        var se = {
          type: 'text-editor',
          label: '富文本内容',
          isContainer: !1,
          defaultSchema: {
            type: 'text-editor',
            title: '富文本',
            default: '',
            description: '',
            placeholder: '',
          },
          renderer: W,
          propsSchema: I(
            {
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: {
                type: 'text-editor',
                title: '默认值',
                placeholder: '请输入默认富文本内容',
              },
              placeholder: {
                type: 'input',
                title: '输入提示',
                placeholder: '请输入输入提示',
              },
            },
            ['readOnly', 'isRequired', 'default', 'placeholder'],
          ),
        };
        C.register(se);
        var le = function (e) {
            return (
              void 0 === e && (e = 'textarea'),
              I(
                {
                  readOnly: j.readOnly,
                  isRequired: j.isRequired,
                  default: {
                    type: e,
                    title: '默认值',
                    placeholder: '请输入默认值',
                  },
                  placeholder: {
                    type: 'input',
                    title: '输入提示',
                    placeholder: '请输入输入提示',
                  },
                },
                ['readOnly', 'isRequired', 'default', 'placeholder'],
              )
            );
          },
          de = {
            type: 'json',
            label: 'json内容',
            isContainer: !1,
            defaultSchema: {
              type: 'json',
              title: 'json数据',
              default: '{}',
              description: '',
              placeholder: '',
            },
            renderer: W,
            propsSchema: le('json'),
          },
          pe = {
            type: 'codearea',
            label: 'code内容',
            isContainer: !1,
            defaultSchema: {
              type: 'codearea',
              title: '函数类型',
              default: 'function func() { console.log("hello, world!"); }',
              description: '用于定义函数方法',
              placeholder: '请输入函数方法',
            },
            renderer: W,
            propsSchema: le('codearea'),
          },
          ce = {
            type: 'htmlarea',
            label: 'html内容',
            isContainer: !1,
            defaultSchema: {
              type: 'htmlarea',
              title: '富文本',
              default: '<p>hello,world!</p>',
              description: '用于放置html代码片段',
              placeholder: '请输入html代码片段',
            },
            renderer: W,
            propsSchema: le('htmlarea'),
          };
        C.registerAll([de, pe, ce]);
        var ue = function (e) {
            return (
              void 0 === e && (e = 'date'),
              I(
                {
                  isConditionProp: j.isConditionProp,
                  readOnly: j.readOnly,
                  isRequired: j.isRequired,
                  default: {
                    type: e,
                    title: '默认值',
                    placeholder: '请输入默认日期值',
                  },
                  placeholder: {
                    type: 'input',
                    title: '输入提示',
                    placeholder: '请输入输入提示',
                  },
                },
                [
                  'isConditionProp',
                  'readOnly',
                  'isRequired',
                  'default',
                  'placeholder',
                ],
              )
            );
          },
          he = {
            type: 'date',
            label: '日期',
            isContainer: !1,
            defaultSchema: {
              type: 'date',
              title: '日期Date',
              default: '',
              description: '',
              placeholder: '',
            },
            renderer: W,
            propsSchema: ue(),
          },
          me = {
            type: 'date-time',
            label: '日期时间',
            isContainer: !1,
            defaultSchema: {
              type: 'date-time',
              title: '日期时间',
              default: '',
              description: '',
              placeholder: '',
            },
            renderer: W,
            propsSchema: ue('date-time'),
          },
          ye = {
            type: 'time',
            label: '时间',
            isContainer: !1,
            defaultSchema: {
              type: 'time',
              title: '时间Time',
              default: '',
              description: '',
              placeholder: '',
            },
            renderer: W,
            propsSchema: ue('time'),
          };
        C.registerAll([he, me, ye]);
        var fe = {
          type: 'input-image',
          label: '图片上传',
          isContainer: !1,
          defaultSchema: {
            type: 'input-image',
            title: '图片地址',
            default: '',
            description: '',
          },
          renderer: W,
          propsSchema: I(
            {
              isConditionProp: j.isConditionProp,
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: {
                type: 'input',
                title: '默认图片URL',
                placeholder: '请输入默认图片地址',
              },
            },
            ['isConditionProp', 'readOnly', 'isRequired', 'default'],
          ),
        };
        (C.register(fe), n(617));
        var ge = y.Select.Option,
          ve = (function (e) {
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
                          ge,
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
                        i.createElement(T.CloseOutlined, {
                          className: 'operate-btn delete-operate',
                          onClick: this.onDeleteBtnEvent,
                        }),
                      ),
                      i.createElement(
                        y.Tooltip,
                        { title: '新增可选项' },
                        i.createElement(T.PlusOutlined, {
                          className: 'operate-btn',
                          onClick: this.onAddBtnEvent,
                        }),
                      ),
                      i.createElement(
                        y.Tooltip,
                        { title: '复制' },
                        i.createElement(T.CopyOutlined, {
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
          Se = (0, p.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, p.observer)(ve)),
          be = y.Tree.TreeNode,
          xe = function (e) {
            return s().createElement(Se, t()({}, e));
          },
          Ce = function (e) {
            var n,
              a = e.jsonKey,
              o = e.indexRoute,
              r = e.nodeKey,
              i = e.targetJsonSchema,
              l = i.type,
              d = i.options,
              p = o || '0';
            return s().createElement(
              be,
              {
                className: l + '-schema schema-item-form',
                id: r,
                key: r,
                'data-indexRoute': o || '0',
                'data-jsonKey': a,
                title: ((n = t()({}, e)), s().createElement(F, t()({}, n))),
              },
              d &&
                d.length > 0 &&
                d.map(function (e, t) {
                  var n = e.label || e.name,
                    a = e.value,
                    o = '' + r + l + '-' + n;
                  return s().createElement(be, {
                    className: 'enum-item-schema schema-item-form',
                    id: o,
                    key: o,
                    'data-indexRoute': p,
                    disabled: !0,
                    title: xe({
                      indexRoute: p,
                      optionIndex: t,
                      optionLabel: n,
                      optionValue: a,
                      optionNodeKey: o,
                    }),
                  });
                }),
            );
          },
          Oe = {
            type: 'radio',
            label: '单选',
            isContainer: !1,
            defaultSchema: {
              type: 'radio',
              title: '单选',
              options: [
                { label: '选项a', value: 'a' },
                { label: '选项b', value: 'b' },
                { label: '选项c', value: 'c' },
              ],
              default: '',
              description: '',
            },
            renderer: Ce,
            propsSchema: I(
              {
                isConditionProp: j.isConditionProp,
                readOnly: j.readOnly,
                isRequired: j.isRequired,
                defaultActiveFirstOption: {
                  type: 'boolean',
                  title: '选中第一项',
                  description: '是否默认高亮第一个选项',
                },
                default: {
                  type: 'input',
                  title: '默认值',
                  placeholder: '请输入默认选中项的 value 值',
                },
              },
              [
                'isConditionProp',
                'readOnly',
                'isRequired',
                'defaultActiveFirstOption',
                'default',
              ],
            ),
          };
        C.register(Oe);
        var Ee = {
          type: 'select',
          label: '下拉选择/多选',
          isContainer: !1,
          defaultSchema: {
            type: 'select',
            title: '下拉选择',
            options: [
              { label: '选项a', value: 'a' },
              { label: '选项b', value: 'b' },
              { label: '选项c', value: 'c' },
            ],
            description: '',
          },
          renderer: Ce,
          propsSchema: I(
            {
              isConditionProp: j.isConditionProp,
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              multiple: {
                type: 'boolean',
                title: '支持多选',
                description: '开启多选后，select 下拉列表支持选择多个选项',
              },
              defaultActiveFirstOption: {
                type: 'boolean',
                title: '选中第一项',
                description: '是否默认高亮第一个选项',
              },
              withLabel: {
                type: 'boolean',
                title: '附带label数值',
                description:
                  '开启后，选中选项时，其数值会带上当前选项的 label 数值',
              },
              default: {
                type: 'input',
                title: '默认值',
                placeholder: '请输入默认选中项的 value 值',
              },
            },
            [
              'isConditionProp',
              'readOnly',
              'isRequired',
              'multiple',
              'defaultActiveFirstOption',
              'withLabel',
              'default',
            ],
          ),
        };
        C.register(Ee);
        var Re = {
          type: 'cascader',
          label: '级联选择',
          isContainer: !1,
          defaultSchema: {
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
                    children: [
                      { value: 'zhonghuamen', label: 'Zhong Hua Men' },
                    ],
                  },
                ],
              },
            ],
            default: 'a',
            description: '',
          },
          renderer: W,
          propsSchema: I(
            {
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              multiple: {
                type: 'boolean',
                title: '支持多选',
                description: '开启多选后，级联选择支持选择多个选项',
              },
              options: {
                type: 'json',
                title: 'options 配置',
                description: '用于添加级联选择组件的 options 数据',
              },
              default: {
                type: 'input',
                title: '默认值',
                placeholder: '请输入默认值',
              },
            },
            ['readOnly', 'isRequired', 'multiple', 'options', 'default'],
          ),
        };
        C.register(Re);
        var je = {
          type: 'checkboxes',
          label: '多选框',
          isContainer: !1,
          defaultSchema: {
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
          renderer: Ce,
          propsSchema: I(
            {
              readOnly: j.readOnly,
              isRequired: j.isRequired,
              default: {
                type: 'json',
                title: '默认值',
                description:
                  '默认选中的选项值数组，格式为 ["value1", "value2"]',
              },
            },
            ['readOnly', 'isRequired', 'default'],
          ),
        };
        (C.register(je), n(790));
        var Ie = y.Select.Option,
          Ne = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).typeChange = function (e) {
                  var t = n.props.schemaStore || {},
                    a = t.editSchemaData,
                    o = (t.updateSchemaData, n.props),
                    r = o.indexRoute,
                    i = o.jsonKey,
                    s = o.targetJsonSchema;
                  (o.typeSelectData,
                    s.default !== e && a(r || '', i, { default: e }));
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
                          Ie,
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
                      i.createElement(Ie, { key: a, value: a }, a),
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
          Ke = (0, p.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, p.observer)(Ne)),
          _e = y.Tree.TreeNode,
          we = function (e) {
            return s().createElement(F, t()({}, e));
          },
          Be = function (e) {
            var n,
              a = e.jsonKey,
              o = e.indexRoute,
              r = e.nodeKey,
              i = e.targetJsonSchema,
              l = i.type,
              d = i.propertyOrder[0],
              p = i.properties[d];
            return s().createElement(
              _e,
              {
                className: l + '-schema schema-item-form',
                id: r,
                key: r,
                'data-indexRoute': o,
                'data-jsonKey': a,
                title: we(t()({}, e)),
              },
              s().createElement(_e, {
                className: 'quantity-unit-item-schema schema-item-form',
                id: r + '-' + d,
                key: r + '-' + d,
                'data-indexRoute': o ? o + '-0' : '0',
                'data-jsonKey': d,
                disabled: !0,
                title: we(
                  t()({}, e, {
                    indexRoute: o ? o + '-0' : '0',
                    jsonKey: d,
                    targetJsonSchema: p,
                    parentType: l,
                    nodeKey: r + '-' + d,
                    hideOperaBtn: !0,
                    showAdvanceBtn: !0,
                    typeIsFixed: !0,
                  }),
                ),
              }),
              s().createElement(_e, {
                className: 'quantity-typeSelect-item-schema schema-item-form',
                id: r + '-quantity',
                key: r + '-quantity',
                'data-indexRoute': o ? o + '-1' : '1',
                'data-jsonKey': 'quantity',
                disabled: !0,
                title:
                  ((n = t()({}, e, {
                    indexRoute: o ? o + '-1' : '1',
                    jsonKey: 'quantity',
                    targetJsonSchema: i.properties.quantity,
                    parentType: l,
                    nodeKey: r + '-quantity',
                  })),
                  s().createElement(Ke, t()({}, n))),
              }),
            );
          },
          Je = {
            type: 'quantity',
            label: '数值单位设置',
            isContainer: !1,
            defaultSchema: {
              type: 'quantity',
              title: '单位计量',
              description: '',
              properties: {
                unit: { type: 'number', title: '单位数值', default: 50 },
                quantity: {
                  type: 'select',
                  title: '单位类型',
                  options: [
                    { label: 'px', value: 'px' },
                    { label: 'rem', value: 'rem' },
                    { label: 'em', value: 'em' },
                    { label: '%', value: '%' },
                  ],
                  default: 'px',
                },
              },
              propertyOrder: ['unit', 'quantity'],
            },
            showAdvanceBtn: !1,
            renderer: Be,
            propsSchema: I(
              {
                readOnly: j.readOnly,
                isRequired: j.isRequired,
                autoComplete: {
                  type: 'boolean',
                  title: '开启可选项',
                  description: '开启后支持添加可选项，并支持 autoComplete',
                },
                options: {
                  type: 'json',
                  title: '可选项',
                  description: '可选项数据列表（数组格式）',
                  onShow: 'autoComplete === true',
                },
              },
              ['readOnly', 'isRequired', 'autoComplete', 'options'],
            ),
          };
        C.register(Je);
        var Te = {
          type: 'box-style',
          label: '盒子模型/边距设置',
          isContainer: !1,
          defaultSchema: {
            type: 'box-style',
            title: '盒子模型',
            description: '',
            properties: {
              unit: {
                title: '单位数值',
                type: 'input',
                default: '0',
                description: '',
              },
              quantity: {
                type: 'select',
                title: '单位类型',
                options: [
                  { label: 'px', value: 'px' },
                  { label: 'rem', value: 'rem' },
                  { label: 'em', value: 'em' },
                  { label: '%', value: '%' },
                ],
                default: 'px',
              },
            },
            propertyOrder: ['unit', 'quantity'],
          },
          propsSchema: I({}, []),
          renderer: Be,
        };
        C.register(Te);
        var qe = {
          type: 'padding-margin',
          label: '边距设置',
          isContainer: !1,
          defaultSchema: {
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
          propsSchema: I(
            {
              autoComplete: {
                type: 'boolean',
                title: '开启可选项',
                description: '开启后支持添加可选项，并支持 autoComplete',
              },
            },
            ['autoComplete'],
          ),
          renderer: Z,
        };
        C.register(qe);
        var ke = {
          type: 'object',
          label: '对象(Object)',
          isContainer: !0,
          wrapWithPanel: !0,
          defaultSchema: {
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
          propsSchema: I(
            {
              showCodeViewBtn: {
                type: 'boolean',
                title: '源码模式',
                description: '用于控制是否显示源码模式切换按钮，默认显示',
              },
            },
            ['showCodeViewBtn'],
          ),
          renderer: Z,
        };
        C.register(ke);
        var Pe = y.Tree.TreeNode,
          De = function (e) {
            return s().createElement(F, t()({}, e));
          },
          Ae = {
            type: 'array',
            label: '数组(Array)',
            isContainer: !1,
            defaultSchema: {
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
            propsSchema: I(
              {
                showCodeViewBtn: {
                  type: 'boolean',
                  title: '源码模式',
                  description: '用于控制是否显示源码模式切换按钮，默认显示',
                },
                'minimum-child': {
                  type: 'number',
                  title: '最小数据项',
                  description: '用于限制数据项最小个数',
                },
                'maximum-child': {
                  type: 'number',
                  title: '最多数据项',
                  description: '用于限制数据项最多个数',
                },
              },
              ['showCodeViewBtn', 'minimum-child', 'maximum-child'],
            ),
            renderer: function (e) {
              var n = e.jsonKey,
                a = e.indexRoute,
                o = e.nodeKey,
                r = e.targetJsonSchema,
                i = r.type,
                l = a ? a + '-0' : '0',
                d = 'items',
                p = o ? o + '-' + d : d,
                c = r[d] || {};
              return s().createElement(
                Pe,
                {
                  className: i + '-schema schema-item-form',
                  id: o,
                  key: o,
                  'data-indexRoute': a,
                  'data-jsonKey': n,
                  title: De(t()({}, e)),
                },
                (function (e) {
                  var n = e.parentType,
                    a = e.jsonKey,
                    o = e.indexRoute,
                    r = e.nodeKey,
                    i = e.targetJsonSchema;
                  return s().createElement(
                    Pe,
                    {
                      className: 'array-item-schema schema-item-form',
                      id: r,
                      key: r,
                      'data-jsonKey': a,
                      disabled: !0,
                      title: De(
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
                            d = n,
                            p = a[d],
                            c = p.type,
                            u = (r ? r + '-' : '') + c + '-' + d;
                          return U(
                            t()({}, e, {
                              parentType: i,
                              jsonKey: d,
                              indexRoute: l,
                              key: u,
                              nodeKey: u,
                              targetJsonSchema: p,
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
                    jsonKey: d,
                    indexRoute: l,
                    nodeKey: p,
                    targetJsonSchema: c,
                  }),
                ),
              );
            },
          };
        C.register(Ae);
        var Le = y.Tree.TreeNode,
          Fe = {
            type: 'api',
            label: 'API 配置',
            isContainer: !1,
            isFixed: !1,
            keyIsFixed: !1,
            typeIsFixed: !1,
            defaultSchema: {
              type: 'api',
              title: 'API 配置',
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
            propsSchema: I({}, []),
            renderer: function (e) {
              var n = e.jsonKey,
                a = e.indexRoute,
                o = e.nodeKey,
                r = e.targetJsonSchema,
                i = r.type,
                l = r.properties.url || {},
                d = r.properties.method || {},
                p = r.properties.headers || {},
                c = r.properties.data || {};
              return s().createElement(
                Le,
                {
                  className: i + '-schema schema-item-form',
                  id: o,
                  key: o,
                  'data-indexRoute': a,
                  'data-jsonKey': n,
                  title: s().createElement(F, t()({}, e)),
                },
                s().createElement(Le, {
                  className: 'api-url-item-schema schema-item-form',
                  id: o + '-url',
                  key: o + '-url',
                  'data-indexRoute': a ? a + '-0' : '0',
                  'data-jsonKey': 'url',
                  title: s().createElement(
                    F,
                    t()({}, e, {
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: 'url',
                      targetJsonSchema: l,
                      parentType: i,
                      nodeKey: o + '-url',
                      hideOperaBtn: !0,
                      keyIsFixed: !0,
                      typeIsFixed: !0,
                    }),
                  ),
                }),
                s().createElement(Le, {
                  className: 'api-method-item-schema schema-item-form',
                  id: o + '-method',
                  key: o + '-method',
                  'data-indexRoute': a ? a + '-1' : '1',
                  title: s().createElement(
                    F,
                    t()({}, e, {
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'method',
                      targetJsonSchema: d,
                      parentType: i,
                      nodeKey: o + '-method',
                      hideOperaBtn: !0,
                      keyIsFixed: !0,
                      typeIsFixed: !0,
                    }),
                  ),
                }),
                s().createElement(Le, {
                  className: 'api-headers-item-schema schema-item-form',
                  id: o + '-headers',
                  key: o + '-headers',
                  'data-indexRoute': a ? a + '-2' : '2',
                  'data-jsonKey': 'headers',
                  title: s().createElement(
                    F,
                    t()({}, e, {
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'headers',
                      targetJsonSchema: p,
                      parentType: i,
                      nodeKey: o + '-headers',
                      hideOperaBtn: !0,
                      keyIsFixed: !0,
                      typeIsFixed: !0,
                    }),
                  ),
                }),
                s().createElement(Le, {
                  className: 'api-data-item-schema schema-item-form',
                  id: o + '-data',
                  key: o + '-data',
                  'data-indexRoute': a ? a + '-3' : '3',
                  'data-jsonKey': 'data',
                  title: s().createElement(
                    F,
                    t()({}, e, {
                      indexRoute: a ? a + '-3' : '3',
                      jsonKey: 'data',
                      targetJsonSchema: c,
                      parentType: i,
                      nodeKey: o + '-data',
                      hideOperaBtn: !0,
                      keyIsFixed: !0,
                      typeIsFixed: !0,
                    }),
                  ),
                }),
              );
            },
          };
        C.register(Fe);
        var Ve = (function (e) {
          function n(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                schemaStore: new w.schemaStore(),
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
                  p.Provider,
                  { schemaStore: n },
                  i.createElement(ee, t()({}, this.props)),
                );
              return e ? (d().render(a, e), null) : a;
            }),
            n
          );
        })(i.PureComponent);
      })(),
      a
    );
  })();
});
