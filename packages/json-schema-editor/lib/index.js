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
        264: function () {},
        286: function () {},
        382: function () {},
        961: function () {},
        80: function () {},
        707: function () {},
        975: function (e, t, n) {
          var a = n(264);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('b8de86ae', a, !1, { sourceMap: !1 });
        },
        915: function (e, t, n) {
          var a = n(286);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('5e9c0933', a, !1, { sourceMap: !1 });
        },
        23: function (e, t, n) {
          var a = n(382);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('adbe60da', a, !1, { sourceMap: !1 });
        },
        40: function (e, t, n) {
          var a = n(961);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('405d88dc', a, !1, { sourceMap: !1 });
        },
        617: function (e, t, n) {
          var a = n(80);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('9c82b91a', a, !1, { sourceMap: !1 });
        },
        790: function (e, t, n) {
          var a = n(707);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('2b121068', a, !1, { sourceMap: !1 });
        },
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
            c = 0,
            l = !1,
            p = function () {},
            d = null,
            m = 'data-vue-ssr-id',
            u =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, n, o) {
            (l = n), (d = o || {});
            var i = a(e, t);
            return (
              y(i),
              function (t) {
                for (var n = [], o = 0; o < i.length; o++) {
                  var s = i[o];
                  (c = r[s.id]).refs--, n.push(c);
                }
                for (
                  t ? y((i = a(e, t))) : (i = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var c;
                  if (0 === (c = n[o]).refs) {
                    for (var l = 0; l < c.parts.length; l++) c.parts[l]();
                    delete r[c.id];
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
                for (; o < n.parts.length; o++) a.parts.push(f(n.parts[o]));
                a.parts.length > n.parts.length &&
                  (a.parts.length = n.parts.length);
              } else {
                var i = [];
                for (o = 0; o < n.parts.length; o++) i.push(f(n.parts[o]));
                r[n.id] = { id: n.id, refs: 1, parts: i };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), i.appendChild(e), e;
          }
          function f(e) {
            var t,
              n,
              a = document.querySelector('style[' + m + '~="' + e.id + '"]');
            if (a) {
              if (l) return p;
              a.parentNode.removeChild(a);
            }
            if (u) {
              var o = c++;
              (a = s || (s = g())),
                (t = b.bind(null, a, o, !1)),
                (n = b.bind(null, a, o, !0));
            } else
              (a = g()),
                (t = S.bind(null, a)),
                (n = function () {
                  a.parentNode.removeChild(a);
                });
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
            x =
              ((v = []),
              function (e, t) {
                return (v[e] = t), v.filter(Boolean).join('\n');
              });
          function b(e, t, n, a) {
            var o = n ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, o);
            else {
              var r = document.createTextNode(o),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
            }
          }
          function S(e, t) {
            var n = t.css,
              a = t.media,
              o = t.sourceMap;
            if (
              (a && e.setAttribute('media', a),
              d.ssrId && e.setAttribute(m, t.id),
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
      },
      t = {};
    function n(a) {
      var o = t[a];
      if (void 0 !== o) return o.exports;
      var r = (t[a] = { id: a, exports: {} });
      return e[a](r, r.exports, n), r.exports;
    }
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
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
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var a = {};
    return (
      (function () {
        'use strict';
        n.r(a),
          n.d(a, {
            default: function () {
              return ut;
            },
          });
        var e,
          t = require('@babel/runtime/helpers/inheritsLoose'),
          o = n.n(t),
          r = require('react'),
          i = n.n(r),
          s = require('react-dom'),
          c = n.n(s),
          l = require('mobx-react'),
          p = require('prop-types'),
          d = n.n(p),
          m = require('@babel/runtime/helpers/extends'),
          u = n.n(m),
          h = require('@babel/runtime/helpers/initializerDefineProperty'),
          y = n.n(h),
          g = require('@babel/runtime/helpers/createClass'),
          f = n.n(g),
          v = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          x = n.n(v),
          b =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            require('mobx')),
          S = require('antd'),
          E = require('lodash');
        function O(e) {
          var t = JSON.stringify(e);
          return JSON.parse(t);
        }
        function C(e, t) {
          return JSON.stringify(e) === JSON.stringify(t);
        }
        function j(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var N,
          w,
          I,
          R,
          K,
          k,
          T,
          J,
          D,
          B,
          P,
          V,
          L,
          F,
          q,
          A,
          _,
          M,
          W,
          z,
          G,
          U,
          H,
          X,
          Q,
          Y,
          Z,
          $,
          ee,
          te,
          ne,
          ae,
          oe,
          re,
          ie,
          se,
          ce,
          le,
          pe,
          de,
          me,
          ue,
          he,
          ye,
          ge,
          fe,
          ve = [
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
          xe = ['object'].concat([
            'datasource',
            'event',
            'dynamic-data',
            'dynamic-config',
            'dynamic-object',
            'dynamic-array',
            'sohu-source',
            'sohu-event',
          ]),
          be = [
            'quantity',
            'box-style',
            'padding-margin',
            'text-editor',
            'json',
            'codearea',
            'htmlarea',
            'array',
          ].concat(xe),
          Se = [].concat(ve, be),
          Ee = ['string'],
          Oe =
            (((e = {
              object: Se,
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
              radio: Ee,
              select: Ee,
            }).select = ['string']),
            (e.all = Se),
            e),
          Ce = require('@wibetter/json-utils'),
          je = Ce.TypeDataList.jsonschema,
          Ne = Ce.TypeDataList.input,
          we = {
            schemaStore:
              ((N = b.action.bound),
              (w = b.action.bound),
              (I = b.action.bound),
              (R = b.action.bound),
              (K = b.action.bound),
              (k = b.action.bound),
              (T = b.action.bound),
              (J = b.action.bound),
              (D = b.action.bound),
              (B = b.action.bound),
              (P = b.action.bound),
              (V = b.action.bound),
              (L = b.action.bound),
              (F = b.action.bound),
              (q = b.action.bound),
              (A = b.action.bound),
              (_ = b.action.bound),
              (M = b.action.bound),
              (W = b.action.bound),
              (z = b.action.bound),
              (G = b.action.bound),
              (U = b.action.bound),
              (H = b.action.bound),
              (X = b.action.bound),
              (Q = b.action.bound),
              (Y = b.action.bound),
              (Z = b.action.bound),
              ($ = b.action.bound),
              (ee = b.action.bound),
              (te = b.action.bound),
              (ne = b.action.bound),
              (ae = b.action.bound),
              (oe = b.action.bound),
              (re = b.action.bound),
              (ie = b.action.bound),
              (se = b.action.bound),
              (ce = b.action.bound),
              (le = b.action.bound),
              (pe = b.action.bound),
              (de = b.action.bound),
              (me = (function () {
                function e() {
                  (this.curJsonKeyIndex = 1),
                    y()(this, 'triggerChange', ue, this),
                    y()(this, 'jsonSchema', he, this),
                    y()(this, 'SchemaTypeList', ye, this),
                    y()(this, 'onChange', ge, this),
                    y()(this, 'childElemSort', fe, this);
                }
                var t = e.prototype;
                return (
                  (t.triggerChangeAction = function () {
                    this.triggerChange = !this.triggerChange;
                  }),
                  (t.initSchemaTypeList = function (e) {
                    var t = this;
                    e &&
                      '{}' !== JSON.stringify(e) &&
                      (C(e, this.SchemaTypeList) ||
                        (e &&
                          Object.keys(e).map(function (n) {
                            t.SchemaTypeList[n] = e[n];
                          })));
                  }),
                  (t.initJSONSchemaData = function (e) {
                    if (e && '{}' !== JSON.stringify(e)) {
                      if (!C(e, this.JSONSchemaObj))
                        if (e && (0, Ce.isNewSchemaData)(e))
                          this.jsonSchema = e;
                        else {
                          var t = (0, Ce.oldSchemaToNewSchema)(e);
                          this.jsonSchema = t;
                        }
                    } else this.jsonSchema = O(je);
                  }),
                  (t.initOnChange = function (e) {
                    var t, n;
                    (e ||
                      ((t = e),
                      (n = !1),
                      'Function' ===
                        Object.prototype.toString.call(t).slice(8, -1) &&
                        (n = !0),
                      n)) &&
                      (this.onChange = e);
                  }),
                  (t.jsonSchemaChange = function (e) {
                    (this.jsonSchema.lastUpdateTime = new Date()),
                      e || this.onChange(this.JSONSchemaObj);
                  }),
                  (t.indexRoute2keyRoute = function (e) {
                    return (0, Ce.indexRoute2keyRoute)(e, this.jsonSchema);
                  }),
                  (t.keyRoute2indexRoute = function (e) {
                    return (0, Ce.keyRoute2indexRoute)(e, this.jsonSchema);
                  }),
                  (t.getSchemaByIndexRoute = function (e) {
                    return (0, Ce.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                  }),
                  (t.getSchemaByKeyRoute = function (e) {
                    return (0, Ce.getSchemaByKeyRoute)(e, this.jsonSchema, !0);
                  }),
                  (t.getNewJsonKeyIndex = function (e, t) {
                    var n = (t || 'field') + '_' + this.curJsonKeyIndex;
                    return (
                      e.propertyOrder.indexOf(n) >= 0 &&
                        ((this.curJsonKeyIndex += 1),
                        (n = this.getNewJsonKeyIndex(e))),
                      (this.curJsonKeyIndex += 1),
                      n
                    );
                  }),
                  (t.isExitJsonKey = function (e, t) {
                    var n = (0, Ce.getParentIndexRoute)(e),
                      a = this.getSchemaByIndexRoute(n);
                    return (
                      !!(a.propertyOrder && a.propertyOrder.indexOf(t) >= 0) ||
                      (Ce.KeyWordList &&
                        Ce.KeyWordList.indexOf(t) >= 0 &&
                        S.message.warning(
                          t +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      t &&
                        t.indexOf('-') > -1 &&
                        S.message.warning(
                          t +
                            '含特殊字符（‘-’），会影响后续数据获取和更新，建议您换一个数值。',
                        ),
                      !1)
                    );
                  }),
                  (t.isSupportCurType = function (e, t) {
                    var n = (0, Ce.getParentIndexRoute)(e),
                      a = this.getSchemaByIndexRoute(n),
                      o = this.SchemaTypeList[a.type];
                    return !!(o && o.indexOf(t) >= 0);
                  }),
                  (t.addChildJson = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if ((0, Ce.isContainerSchema)(n)) {
                      var a = this.getNewJsonKeyIndex(n);
                      n.propertyOrder.push(a),
                        (n.properties[a] = Ne),
                        this.jsonSchemaChange(t);
                    } else S.message.warning('非对象类型字段不允许插入子元素');
                  }),
                  (t.changeType = function (e, t, n, a, o) {
                    var r = (0, Ce.getParentIndexRoute)(e),
                      i = (0, Ce.getSchemaByIndexRoute)(r, this.jsonSchema),
                      s = Object.assign(
                        {},
                        n,
                        (0, E.pick)(a, [
                          'title',
                          'description',
                          'isConditionProp',
                          'showKey',
                          'showCodeViewBtn',
                          'onShow',
                        ]),
                      );
                    i.properties && i.properties[t]
                      ? (i.properties[t] = O(s))
                      : i[t] && (i[t] = O(s)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.updateSchemaData = function (e, t, n) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    Object.assign(a, O(t)), this.jsonSchemaChange(n);
                  }),
                  (t.editSchemaData = function (e, t, n, a) {
                    var o = (0, Ce.getParentIndexRoute)(e),
                      r = (0, Ce.getSchemaByIndexRoute)(o, this.jsonSchema);
                    (r.properties[t] = u()({}, O(r.properties[t]), n)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.editJsonKey = function (e, t, n) {
                    var a = (0, Ce.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                    this.insertJsonData(e, t, a, '', !0),
                      this.deleteJsonByIndex(e, !0),
                      this.jsonSchemaChange(n);
                  }),
                  (t.addNextJsonData = function (e) {
                    var t = (0, Ce.getParentIndexRoute)(e),
                      n = (0, Ce.getSchemaByIndexRoute)(t, this.jsonSchema),
                      a = this.getNewJsonKeyIndex(n);
                    this.insertJsonData(e, a, Ne);
                  }),
                  (t.insertJsonData = function (e, t, n, a, o) {
                    var r = (0, Ce.getParentIndexRoute_CurIndex)(e),
                      i = r[0],
                      s = r[1],
                      c = (0, Ce.getSchemaByIndexRoute)(i, this.jsonSchema);
                    c.properties[t] = n;
                    var l = c.propertyOrder,
                      p = 'before' === a ? Number(s) : Number(s) + 1,
                      d = l.slice(0, p),
                      m = l.slice(p);
                    (c.propertyOrder = [].concat(d, [t], m)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteJsonByIndex_CurKey = function (e, t, n) {
                    var a = (0, Ce.getParentIndexRoute)(e),
                      o = (0, Ce.getSchemaByIndexRoute)(a, this.jsonSchema);
                    delete o.properties[t];
                    var r = o.propertyOrder.indexOf(t);
                    o.propertyOrder.splice(r, 1), this.jsonSchemaChange(n);
                  }),
                  (t.deleteJsonByIndex = function (e, t) {
                    var n = (0, Ce.getParentIndexRoute_CurIndex)(e),
                      a = n[0],
                      o = n[1],
                      r = (0, Ce.getSchemaByIndexRoute)(a, this.jsonSchema),
                      i = r.propertyOrder[o];
                    delete r.properties[i];
                    var s = r.propertyOrder.indexOf(i);
                    r.propertyOrder.splice(s, 1), this.jsonSchemaChange(t);
                  }),
                  (t.updateEnumItem = function (e, t, n, a, o) {
                    var r = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.enum &&
                      r.enumextra &&
                      ((r.enum[t] = n), (r.enumextra[t] = a)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.isExitEnumKey = function (e, t, n) {
                    var a = !1,
                      o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (o.enum) {
                      var r = O(o.enum);
                      t >= 0 && r.splice(t, 1), r.indexOf(n) >= 0 && (a = !0);
                    }
                    return (
                      Ce.KeyWordList &&
                        Ce.KeyWordList.indexOf(n) >= 0 &&
                        S.message.warning(
                          n +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      a
                    );
                  }),
                  (t.updateEnumKey = function (e, t, n, a) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enum && (o.enum[t] = n), this.jsonSchemaChange(a);
                  }),
                  (t.updateEnumText = function (e, t, n, a) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enumextra && (o.enumextra[t] = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteEnumItem = function (e, t, n) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enum &&
                      a.enumextra &&
                      (a.enum.splice(t, 1), a.enumextra.splice(t, 1)),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertEnumItem = function (e, t, n, a, o, r) {
                    var i = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (i.enum && i.enumextra) {
                      var s = 'before' === o ? Number(t) : Number(t) + 1,
                        c = i.enum.slice(0, s),
                        l = i.enum.slice(s);
                      i.enum = [].concat(c, [n], l);
                      var p = i.enumextra.slice(0, s),
                        d = i.enumextra.slice(s);
                      i.enumextra = [].concat(p, [a], d);
                    }
                    this.jsonSchemaChange(r);
                  }),
                  (t.getNewEnumIndex = function (e, t) {
                    var n = (t || 'enum') + '_' + this.curJsonKeyIndex;
                    return (
                      e.indexOf(n) >= 0 &&
                        ((this.curJsonKeyIndex += 1),
                        (n = this.getNewEnumIndex(e, t))),
                      (this.curJsonKeyIndex += 1),
                      n
                    );
                  }),
                  (t.addEnumItem = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var a = this.getNewEnumIndex(n.enum),
                        o = '选项' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, a, o);
                    }
                  }),
                  (t.copyEnumItem = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var a = n.enum[t],
                        o = n.enumextra[t],
                        r = this.getNewEnumIndex(n.enum, a),
                        i = o + '_' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, r, i);
                    }
                  }),
                  (t.updateOptionItem = function (e, t, n, a, o) {
                    var r = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.options &&
                      r.options[t] &&
                      ((r.options[t].label = n), (r.options[t].value = a)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.isExitOptionLabel = function (e, t) {
                    var n = !1,
                      a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    return (
                      a.options &&
                        a.options.find(function (e) {
                          return e.label === t;
                        }) &&
                        (n = !0),
                      Ce.KeyWordList &&
                        Ce.KeyWordList.indexOf(t) >= 0 &&
                        S.message.warning(
                          t + '是JSONSchema的保留关键字，建议您换一个名称。',
                        ),
                      n
                    );
                  }),
                  (t.updateOptionLabel = function (e, t, n, a) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.options && o.options[t] && (o.options[t].label = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.updateOptionValue = function (e, t, n, a) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.options && o.options[t] && (o.options[t].value = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteOptionItem = function (e, t, n) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.options && a.options[t] && a.options.splice(t, 1),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertOption = function (e, t, n, a, o, r) {
                    var i = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (i.options) {
                      var s = 'before' === o ? Number(t) : Number(t) + 1,
                        c = i.options.slice(0, s),
                        l = i.options.slice(s),
                        p = { label: n, value: a };
                      i.options = [].concat(c, [p], l);
                    }
                    this.jsonSchemaChange(r);
                  }),
                  (t.getNewOptionValue = function (e) {
                    return e && e.length > 0
                      ? e[e.length - 1].value + '_' + (e.length + 1)
                      : 'value1';
                  }),
                  (t.addOptionItem = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.options) {
                      var a = this.getNewOptionValue(n.options),
                        o = '选项' + (n.options.length + 1);
                      this.insertOption(e, t, o, a);
                    }
                  }),
                  (t.copyOptionItem = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.options) {
                      n.options[t];
                      var a = this.getNewOptionValue(n.options),
                        o = (label, name + '_copy');
                      this.insertOption(e, t, o, a);
                    }
                  }),
                  f()(e, [
                    {
                      key: 'JSONSchemaObj',
                      get: function () {
                        return (0, b.toJS)(this.jsonSchema);
                      },
                    },
                  ])
                );
              })()),
              (ue = x()(me.prototype, 'triggerChange', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (he = x()(me.prototype, 'jsonSchema', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return {};
                },
              })),
              (ye = x()(me.prototype, 'SchemaTypeList', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return Oe;
                },
              })),
              (ge = x()(me.prototype, 'onChange', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return function () {};
                },
              })),
              x()(
                me.prototype,
                'triggerChangeAction',
                [N],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'triggerChangeAction',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'initSchemaTypeList',
                [w],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'initSchemaTypeList',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'initJSONSchemaData',
                [I],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'initJSONSchemaData',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'JSONSchemaObj',
                [b.computed],
                Object.getOwnPropertyDescriptor(me.prototype, 'JSONSchemaObj'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'initOnChange',
                [R],
                Object.getOwnPropertyDescriptor(me.prototype, 'initOnChange'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'jsonSchemaChange',
                [K],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'jsonSchemaChange',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'indexRoute2keyRoute',
                [k],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'indexRoute2keyRoute',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'keyRoute2indexRoute',
                [T],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'keyRoute2indexRoute',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'getSchemaByIndexRoute',
                [J],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'getSchemaByIndexRoute',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'getSchemaByKeyRoute',
                [D],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'getSchemaByKeyRoute',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'getNewJsonKeyIndex',
                [B],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'getNewJsonKeyIndex',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'isExitJsonKey',
                [P],
                Object.getOwnPropertyDescriptor(me.prototype, 'isExitJsonKey'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'isSupportCurType',
                [V],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'isSupportCurType',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'addChildJson',
                [L],
                Object.getOwnPropertyDescriptor(me.prototype, 'addChildJson'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'changeType',
                [F],
                Object.getOwnPropertyDescriptor(me.prototype, 'changeType'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateSchemaData',
                [q],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'updateSchemaData',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'editSchemaData',
                [A],
                Object.getOwnPropertyDescriptor(me.prototype, 'editSchemaData'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'editJsonKey',
                [_],
                Object.getOwnPropertyDescriptor(me.prototype, 'editJsonKey'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'addNextJsonData',
                [M],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'addNextJsonData',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'insertJsonData',
                [W],
                Object.getOwnPropertyDescriptor(me.prototype, 'insertJsonData'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'deleteJsonByIndex_CurKey',
                [z],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'deleteJsonByIndex_CurKey',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'deleteJsonByIndex',
                [G],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'deleteJsonByIndex',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateEnumItem',
                [U],
                Object.getOwnPropertyDescriptor(me.prototype, 'updateEnumItem'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'isExitEnumKey',
                [H],
                Object.getOwnPropertyDescriptor(me.prototype, 'isExitEnumKey'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateEnumKey',
                [X],
                Object.getOwnPropertyDescriptor(me.prototype, 'updateEnumKey'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateEnumText',
                [Q],
                Object.getOwnPropertyDescriptor(me.prototype, 'updateEnumText'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'deleteEnumItem',
                [Y],
                Object.getOwnPropertyDescriptor(me.prototype, 'deleteEnumItem'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'insertEnumItem',
                [Z],
                Object.getOwnPropertyDescriptor(me.prototype, 'insertEnumItem'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'getNewEnumIndex',
                [$],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'getNewEnumIndex',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'addEnumItem',
                [ee],
                Object.getOwnPropertyDescriptor(me.prototype, 'addEnumItem'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'copyEnumItem',
                [te],
                Object.getOwnPropertyDescriptor(me.prototype, 'copyEnumItem'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateOptionItem',
                [ne],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'updateOptionItem',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'isExitOptionLabel',
                [ae],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'isExitOptionLabel',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateOptionLabel',
                [oe],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'updateOptionLabel',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'updateOptionValue',
                [re],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'updateOptionValue',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'deleteOptionItem',
                [ie],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'deleteOptionItem',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'insertOption',
                [se],
                Object.getOwnPropertyDescriptor(me.prototype, 'insertOption'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'getNewOptionValue',
                [ce],
                Object.getOwnPropertyDescriptor(
                  me.prototype,
                  'getNewOptionValue',
                ),
                me.prototype,
              ),
              x()(
                me.prototype,
                'addOptionItem',
                [le],
                Object.getOwnPropertyDescriptor(me.prototype, 'addOptionItem'),
                me.prototype,
              ),
              x()(
                me.prototype,
                'copyOptionItem',
                [pe],
                Object.getOwnPropertyDescriptor(me.prototype, 'copyOptionItem'),
                me.prototype,
              ),
              (fe = x()(me.prototype, 'childElemSort', [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  var e = this;
                  return function (t) {
                    for (
                      var n = (0, Ce.getSchemaByIndexRoute)(t, e.jsonSchema),
                        a = n.propertyOrder,
                        o = [],
                        r = [],
                        i = [],
                        s = [],
                        c = [],
                        l = [],
                        p = [],
                        d = [],
                        m = 0,
                        u = a.length;
                      m < u;
                      m++
                    ) {
                      var h = a[m];
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
                          c.push(h);
                          break;
                        case 'image':
                          l.push(h);
                          break;
                        case 'object':
                        case 'array':
                          p.push(h);
                          break;
                        default:
                          d.push(h);
                      }
                    }
                    (n.propertyOrder = [].concat(o, r, i, s, l, c, p, d)),
                      e.jsonSchemaChange();
                  };
                },
              })),
              me),
          },
          Ie = require('@ant-design/icons'),
          Re = require('react-ace'),
          Ke = n.n(Re),
          ke =
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
                      (0, Ce.isFunction)(n.props.onChange) &&
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
                o()(t, e),
                (t.prototype.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.jsonData,
                    a = t.readOnly,
                    o = n || {},
                    i = this.state,
                    s = i.isShowWarn,
                    c = i.warnText,
                    l = (i.curJSONDataTemp, a || !1);
                  return (
                    (o = void 0 !== o ? o : o || '{}'),
                    ((0, Ce.isObject)(o) || (0, Ce.isArray)(o)) &&
                      (o = JSON.stringify(o, null, 2)),
                    r.createElement(
                      'div',
                      { className: 'json-view-box' },
                      l &&
                        r.createElement(
                          'div',
                          { className: 'readOnly-btn' },
                          '[只读]',
                        ),
                      s &&
                        r.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          r.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          r.createElement(
                            'div',
                            { className: 'warning-text' },
                            c,
                          ),
                        ),
                      r.createElement(Ke(), {
                        id: 'json_area_ace',
                        defaultValue: o,
                        className: 'json-view-ace',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
                        fontSize: 14,
                        showPrintMargin: !0,
                        showGutter: !0,
                        highlightActiveLine: !0,
                        readOnly: l,
                        minLines: 5,
                        maxLines: 33,
                        width: '100%',
                        setOptions: {
                          useWorker: !1,
                          showLineNumbers: !0,
                          tabSize: 2,
                        },
                        onChange: function (t) {
                          try {
                            var n = JSON.parse(t);
                            e.handleValueChange(n),
                              e.setState({
                                isShowWarn: !1,
                                curJSONDataTemp: void 0,
                              });
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
            })(r.PureComponent));
        ke.propTypes = { jsonData: d().any };
        var Te = ke,
          Je = (n(975), S.Input.TextArea),
          De =
            (S.Select.Option,
            (function (e) {
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
                      (s[e] = t), a(r, i, s);
                    }
                  }),
                  (n.renderDefaultContent = function (e, t, a) {
                    if ('boolean' === e)
                      return r.createElement(S.Switch, {
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
                      return r.createElement(
                        S.Checkbox.Group,
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
                            return r.createElement(
                              S.Checkbox,
                              { value: e.value, key: n },
                              e.label || e.name,
                            );
                          }),
                      );
                    }
                    if ('radio' === e || 'select' === e) {
                      var i = t.options;
                      return r.createElement(
                        S.Radio.Group,
                        {
                          style: { display: 'inline-block' },
                          defaultValue: t.default,
                          onChange: function (e) {
                            var t = e.target.value;
                            n.handleValueChange('default', t);
                          },
                        },
                        i &&
                          i.length > 0 &&
                          i.map(function (e, t) {
                            var n = a + '-options-' + t;
                            return r.createElement(
                              S.Radio,
                              { value: e.value, key: n },
                              e.label || e.name,
                            );
                          }),
                      );
                    }
                    return 'color' === e
                      ? r.createElement(S.Input, {
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
                        ? r.createElement(Je, {
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
                          ? r.createElement(S.InputNumber, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + t.title + '的默认值',
                              defaultValue: t.default,
                              onChange: function (e) {
                                n.handleValueChange('default', e);
                              },
                            })
                          : r.createElement(S.Input, {
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
                o()(t, e),
                (t.prototype.render = function () {
                  var e,
                    t = this,
                    n = (this.props.schemaStore || {}).indexRoute2keyRoute,
                    a = this.props,
                    o = a.nodeKey,
                    i = a.indexRoute,
                    s = a.targetJsonSchema,
                    c = s.type,
                    l = (n(i), s.isConditionProp);
                  return r.createElement(
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
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-isConditionProp',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title:
                                '设置为条件字段后，其他字段可根据其数值变化进行实时联动',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '条件字段',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            {
                              className: 'form-item-box',
                              key: o + '-isConditionProp-switch',
                            },
                            r.createElement(S.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: l,
                              checkedChildren: '是',
                              unCheckedChildren: '否',
                              onChange: function (e) {
                                t.handleValueChange('isConditionProp', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    ('select' === c || 'cascader' === c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-selectConfig',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title:
                                '开启多选后，select下拉列表支持选择多个选项。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '支持多选',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            {
                              className: 'form-item-box',
                              key: o + '-selectConfig-multiple',
                            },
                            r.createElement(S.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.multiple,
                              checkedChildren: '多选',
                              unCheckedChildren: '单选',
                              onChange: function (e) {
                                t.handleValueChange('multiple', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return ['select', 'radio'].indexOf(e) > -1;
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-defaultActiveFirstOption',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title: '是否默认高亮第一个选项。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '选中第一项',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            {
                              className: 'form-item-box',
                              key: o + '-selectConfig-defaultActiveFirstOption',
                            },
                            r.createElement(S.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.defaultActiveFirstOption,
                              checkedChildren: '开启',
                              unCheckedChildren: '关闭',
                              onChange: function (e) {
                                t.handleValueChange(
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
                          .concat(ve, [
                            'quantity',
                            'text-editor',
                            'json',
                            'codearea',
                            'htmlarea',
                          ])
                          .indexOf(e) > -1
                      );
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-readOnly-' + s.readOnly,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title:
                                '当前属性设置为只读后，用户不能对其进行任何编辑操作',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '是否只读',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            r.createElement(S.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.readOnly,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                t.handleValueChange('readOnly', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(ve, [
                            'quantity',
                            'text-editor',
                            'json',
                            'codearea',
                            'htmlarea',
                          ])
                          .indexOf(e) > -1
                      );
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-isRequired-' + s.isRequired,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title:
                                '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '是否必填项',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            r.createElement(S.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.isRequired,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                t.handleValueChange('isRequired', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(ve, ['json', 'codearea', 'htmlarea'])
                          .indexOf(e) > -1
                      );
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-default',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            { placement: 'top' },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '默认值',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            this.renderDefaultContent(c, s, o),
                          ),
                        ),
                      ),
                    'cascader' === c &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-cascader-options',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title: '用于添加 级联选择 组件的 options 数据。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              'options 配置',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(Te, {
                            jsonData: s.options,
                            onChange: function (e) {
                              t.handleValueChange('options', e);
                            },
                          }),
                        ),
                      ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: o + '-description',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          S.Tooltip,
                          {
                            title:
                              '字段描述内容将作为Title的补充信息提供给用户',
                            placement: 'top',
                          },
                          r.createElement(
                            'span',
                            { className: 'title-text' },
                            '字段描述',
                          ),
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: 'content-item' },
                        r.createElement(
                          'div',
                          { className: 'form-item-box' },
                          r.createElement(S.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + s.title + '的字段描述',
                            defaultValue: s.description,
                            onPressEnter: function (e) {
                              var n = e.target.value;
                              t.handleValueChange('description', n);
                            },
                            onBlur: function (e) {
                              var n = e.target.value;
                              t.handleValueChange('description', n);
                            },
                          }),
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: o + '-showKey',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          S.Tooltip,
                          {
                            title:
                              '开启后，在JSONEditor端会展示当前Key值，以便增加辨识度。',
                            placement: 'top',
                          },
                          r.createElement(
                            'span',
                            { className: 'title-text' },
                            '展示Key值',
                          ),
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: 'content-item' },
                        r.createElement(
                          'div',
                          { className: 'form-item-box' },
                          r.createElement(S.Switch, {
                            style: { display: 'inline-block' },
                            defaultChecked: s.showKey,
                            checkedChildren: 'true',
                            unCheckedChildren: 'false',
                            onChange: function (e) {
                              t.handleValueChange('showKey', e);
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
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-placeholder',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title:
                                '输入提示内容将作为输入区域的提示信息展示给用户',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '输入提示',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            r.createElement(S.Input, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + s.title + '的输入提示',
                              defaultValue: s.placeholder,
                              onPressEnter: function (e) {
                                var n = e.target.value;
                                t.handleValueChange('placeholder', n);
                              },
                              onBlur: function (e) {
                                var n = e.target.value;
                                t.handleValueChange('placeholder', n);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return [].concat(xe, ['array']).indexOf(e) > -1;
                    })(c) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-showCodeViewBtn-' + s.showCodeViewBtn,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            S.Tooltip,
                            {
                              title:
                                '用于控制是否显示源码模式切换按钮，默认显示',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '源码模式',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            r.createElement(S.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked:
                                null == (e = s.showCodeViewBtn) || e,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                t.handleValueChange('showCodeViewBtn', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    'number' === (0, Ce.getExpectType)(c) &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: o + '-minimum-' + s.minimum,
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              S.Tooltip,
                              {
                                title:
                                  '设置最小值后，用户输入的数值必须大于当前最小值',
                                placement: 'top',
                              },
                              r.createElement(
                                'span',
                                { className: 'title-text' },
                                '最小值',
                              ),
                            ),
                          ),
                          r.createElement(
                            'div',
                            { className: 'content-item' },
                            r.createElement(
                              'div',
                              { className: 'form-item-box' },
                              r.createElement(S.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s.minimum,
                                onPressEnter: function (e) {
                                  var n = e.target.value;
                                  t.handleValueChange('minimum', n);
                                },
                                onBlur: function (e) {
                                  var n = e.target.value;
                                  t.handleValueChange('minimum', n);
                                },
                              }),
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: o + '-maximum-' + s.maximum,
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              S.Tooltip,
                              {
                                title:
                                  '设置最大值后，用户输入的数值必须大于当前最大值',
                                placement: 'top',
                              },
                              r.createElement(
                                'span',
                                { className: 'title-text' },
                                '最大值',
                              ),
                            ),
                          ),
                          r.createElement(
                            'div',
                            { className: 'content-item' },
                            r.createElement(
                              'div',
                              { className: 'form-item-box' },
                              r.createElement(S.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s.maximum,
                                onPressEnter: function (e) {
                                  var n = e.target.value;
                                  t.handleValueChange('maximum', n);
                                },
                                onBlur: function (e) {
                                  var n = e.target.value;
                                  t.handleValueChange('maximum', n);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    'array' === (0, Ce.getExpectType)(c) &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: o + '-minimum-child',
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              S.Tooltip,
                              {
                                title: '用于限制数据项最小个数',
                                placement: 'top',
                              },
                              r.createElement(
                                'span',
                                { className: 'title-text' },
                                '最小数据项',
                              ),
                            ),
                          ),
                          r.createElement(
                            'div',
                            { className: 'content-item' },
                            r.createElement(
                              'div',
                              { className: 'form-item-box' },
                              r.createElement(S.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s['minimum-child'],
                                onChange: function (e) {
                                  t.handleValueChange('minimum-child', e);
                                },
                              }),
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: o + '-maximum-child',
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              S.Tooltip,
                              {
                                title: '用于限制数据项最多个数',
                                placement: 'top',
                              },
                              r.createElement(
                                'span',
                                { className: 'title-text' },
                                '最多数据项',
                              ),
                            ),
                          ),
                          r.createElement(
                            'div',
                            { className: 'content-item' },
                            r.createElement(
                              'div',
                              { className: 'form-item-box' },
                              r.createElement(S.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s['maximum-child'],
                                onChange: function (e) {
                                  t.handleValueChange('maximum-child', e);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: o + '-onShow',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          S.Tooltip,
                          {
                            title:
                              '用于设置显隐表达式（onShow），比如设置 "dataType === 1"，则表示当数据域中 dataType 为 1 时显示当前配置项。',
                            placement: 'top',
                          },
                          r.createElement(
                            'span',
                            { className: 'title-text' },
                            '显隐表达式',
                          ),
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: 'content-item' },
                        r.createElement(
                          'div',
                          { className: 'form-item-box' },
                          r.createElement(S.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入显隐表达式',
                            defaultValue: s.onShow,
                            onPressEnter: function (e) {
                              var n = e.target.value;
                              t.handleValueChange('onShow', n);
                            },
                            onBlur: function (e) {
                              var n = e.target.value;
                              t.handleValueChange('onShow', n);
                            },
                          }),
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: o + '-titleStyle',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          S.Tooltip,
                          {
                            title: '可用于设置标题展示样式。',
                            placement: 'top',
                          },
                          r.createElement(
                            'span',
                            { className: 'title-text' },
                            '标题样式',
                          ),
                        ),
                      ),
                      r.createElement(
                        'div',
                        { className: 'content-item' },
                        r.createElement(Te, {
                          jsonData: s.titleStyle,
                          onChange: function (e) {
                            t.handleValueChange('titleStyle', e);
                          },
                        }),
                      ),
                    ),
                  );
                }),
                t
              );
            })(r.PureComponent));
        De.propTypes = {
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
        };
        var Be = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(De)),
          Pe = (n(915), S.Select.Option),
          Ve = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleTypeChange = function (e) {
                  var t = (n.props.schemaStore || {}).changeType,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.targetJsonSchema;
                  i.type !== e && t(o, r, Ce.TypeDataList[e], i);
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
                      ? S.message.warning('当前key已存在，请换一个吧。')
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
                  return (a && 0 !== a.length) || (a = t.all), a;
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props.schemaStore || {},
                    t = e.addChildJson,
                    a = e.addNextJsonData,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.targetJsonSchema;
                  (0, Ce.isContainerSchema)(i) ? t(r) : a(r);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.targetJsonSchema,
                    o = e.jsonKey,
                    r = n.props.schemaStore || {},
                    i = r.getSchemaByIndexRoute,
                    s = r.indexRoute2keyRoute,
                    c = r.insertJsonData,
                    l = r.getNewJsonKeyIndex,
                    p = O(a),
                    d = (0, Ce.getParentIndexRoute)(t),
                    m = l(i(d), o),
                    u = a.type;
                  j(s(d) + '-' + m + '-' + u, s(t)), c(t, m, p);
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
                  e.preventDefault(), e.stopPropagation();
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
              o()(t, e),
              (t.prototype.render = function () {
                var e,
                  t,
                  n = this,
                  a = (this.props.schemaStore || {}).getSchemaByIndexRoute,
                  o = this.props,
                  i = o.parentType,
                  s = o.indexRoute,
                  c = o.jsonKey,
                  l = o.nodeKey,
                  p = o.targetJsonSchema,
                  d = this.state.showAdvanceConfig,
                  m = s ? (0, Ce.getParentIndexRoute)(s) : '',
                  u = m ? a(m) : {},
                  h = null == (e = u && u.isContainer) || e,
                  y = p.isFixed || this.props.isFixed || !1,
                  g =
                    (this.props.readOnly || p.readOnly,
                    void 0 !== this.props.keyIsFixed
                      ? this.props.keyIsFixed
                      : !h || y),
                  f =
                    void 0 !== this.props.typeIsFixed
                      ? this.props.typeIsFixed
                      : y,
                  v =
                    void 0 !== this.props.titleIsFixed
                      ? this.props.titleIsFixed
                      : y,
                  x = this.props.hideOperaBtn || !h,
                  b = null == (t = this.props.showAdvanceBtn) || t,
                  E = this.getCurrentTypeList(i),
                  O = p.type,
                  C = (0, Ce.isContainerSchema)(p);
                return r.createElement(
                  r.Fragment,
                  null,
                  p &&
                    r.createElement(
                      'div',
                      { className: 'base-schema-box', id: l },
                      r.createElement(
                        'div',
                        {
                          className: 'key-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        r.createElement(S.Input, {
                          defaultValue: c || 'key值不存在',
                          disabled: g,
                          onPressEnter: this.handleJsonKeyChange,
                          onBlur: this.handleJsonKeyChange,
                        }),
                      ),
                      r.createElement(
                        'div',
                        {
                          className: 'type-select-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        r.createElement(
                          S.Select,
                          {
                            showSearch: !0,
                            defaultValue: O,
                            style: { width: 150 },
                            onChange: this.handleTypeChange,
                            disabled: f,
                          },
                          E.map(function (e) {
                            return r.createElement(Pe, { key: e, value: e }, e);
                          }),
                        ),
                      ),
                      r.createElement(
                        'div',
                        {
                          className: 'title-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        r.createElement(S.Input, {
                          defaultValue: p.title,
                          disabled: v,
                          onPressEnter: this.handleTitleChange,
                          onBlur: this.handleTitleChange,
                        }),
                      ),
                      r.createElement(
                        'div',
                        { className: 'operate-item' },
                        !x &&
                          r.createElement(
                            r.Fragment,
                            null,
                            !y &&
                              r.createElement(
                                S.Tooltip,
                                { title: '删除' },
                                r.createElement(Ie.CloseOutlined, {
                                  className: 'operate-btn delete-operate',
                                  onClick: this.onDeleteBtnEvent,
                                }),
                              ),
                            r.createElement(
                              S.Tooltip,
                              { title: C ? '新增子元素' : '新增同级元素' },
                              r.createElement(Ie.PlusOutlined, {
                                className: 'operate-btn',
                                onClick: this.onAddBtnEvent,
                              }),
                            ),
                            C &&
                              r.createElement(
                                S.Tooltip,
                                { title: '数据项排序' },
                                r.createElement(Ie.SortAscendingOutlined, {
                                  className: 'operate-btn',
                                  onClick: this.childElemSort,
                                }),
                              ),
                            !y &&
                              r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(
                                  S.Tooltip,
                                  { title: '复制' },
                                  r.createElement(Ie.CopyOutlined, {
                                    className: 'operate-btn',
                                    onClick: this.onCopyBtnEvent,
                                  }),
                                ),
                                r.createElement(
                                  S.Tooltip,
                                  { title: '按住进行拖拽' },
                                  r.createElement(Ie.DragOutlined, {
                                    className: 'operate-btn drag-btn',
                                  }),
                                ),
                              ),
                          ),
                        b &&
                          r.createElement(
                            S.Tooltip,
                            { title: '高级设置' },
                            r.createElement(Ie.SettingOutlined, {
                              className: 'operate-btn',
                              onClick: function () {
                                n.setState({ showAdvanceConfig: !0 });
                              },
                            }),
                          ),
                      ),
                      d &&
                        r.createElement(
                          S.Modal,
                          {
                            visible: !0,
                            title:
                              '高级设置 / 当前字段：' + p.title + '(' + c + ')',
                            onCancel: function () {
                              n.setState({ showAdvanceConfig: !1 });
                            },
                            footer: [
                              r.createElement(
                                S.Button,
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
                          r.createElement(Be, {
                            indexRoute: s,
                            jsonKey: c,
                            targetJsonSchema: p,
                          }),
                        ),
                    ),
                  !p &&
                    r.createElement(
                      'div',
                      { className: 'base-schema-box' },
                      r.createElement(
                        'div',
                        { className: 'warn-text' },
                        c,
                        '：数据元素为空',
                      ),
                    ),
                );
              }),
              t
            );
          })(r.PureComponent);
        Ve.propTypes = {
          parentType: d().string,
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          isFixed: d().bool,
          hideOperaBtn: d().bool,
          showAdvanceBtn: d().bool,
          keyIsFixed: d().bool,
          typeIsFixed: d().bool,
          titleIsFixed: d().bool,
        };
        var Le = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(Ve)),
          Fe = S.Tree.TreeNode,
          qe = function (e) {
            return i().createElement(Le, e);
          },
          Ae = function (e) {
            var t = e.jsonKey,
              n = e.indexRoute,
              a = e.nodeKey,
              o = e.targetJsonSchema,
              r = o.type,
              s = n ? n + '-0' : '0',
              c = 'items',
              l = a ? a + '-' + c : c,
              p = o[c] || {};
            return i().createElement(
              Fe,
              {
                className: r + '-schema schema-item-form',
                id: a,
                key: a,
                indexRoute: n,
                jsonKey: t,
                title: qe(u()({}, e)),
              },
              (function (e) {
                var t = e.parentType,
                  n = e.jsonKey,
                  a = e.indexRoute,
                  o = e.nodeKey,
                  r = e.targetJsonSchema;
                return i().createElement(
                  Fe,
                  {
                    className: 'array-item-schema schema-item-form',
                    id: o,
                    key: o,
                    indexRoute: a,
                    jsonKey: n,
                    disabled: !0,
                    title: qe({
                      indexRoute: a,
                      jsonKey: n,
                      targetJsonSchema: r,
                      parentType: t,
                      nodeKey: o,
                      isFixed: !0,
                      typeIsFixed: !1,
                    }),
                  },
                  'object' === r.type &&
                    (function (e) {
                      var t = e.properties,
                        n = e.parentIndexRoute,
                        a = e.parentNodeKey,
                        o = e.parentType;
                      return e.propertyOrder.map(function (e, r) {
                        var i = n ? n + '-' + r : '' + r,
                          s = e,
                          c = t[s],
                          l = c.type,
                          p = (a ? a + '-' : '') + l + '-' + s;
                        return st({
                          parentType: o,
                          jsonKey: s,
                          indexRoute: i,
                          key: p,
                          nodeKey: p,
                          targetJsonSchema: c,
                        });
                      });
                    })({
                      propertyOrder: r.propertyOrder,
                      properties: r.properties,
                      parentIndexRoute: a,
                      parentNodeKey: o,
                      parentType: t,
                    }),
                );
              })({
                parentType: 'array',
                jsonKey: c,
                indexRoute: s,
                nodeKey: l,
                targetJsonSchema: p,
              }),
            );
          },
          _e = (n(790), S.Select.Option),
          Me = (function (e) {
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
                    c = r.targetJsonSchema,
                    l = r.typeSelectData;
                  if (c.default !== e) {
                    if ((a(i, s, { default: e }), l)) {
                      var p = l[e];
                      p &&
                        '数据源类型' === c.title &&
                        a((0, Ce.getNextIndexRoute)(i), 'data', p);
                    }
                    if (Ce.EventTypeDataList) {
                      var d = Ce.EventTypeDataList[e];
                      '事件类型' === c.title &&
                        d &&
                        o((0, Ce.getParentIndexRoute)(i), d);
                    }
                  }
                }),
                (n.typeChange = n.typeChange.bind(n)),
                n
              );
            }
            return (
              o()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  n = e.targetJsonSchema,
                  a = n.type,
                  o = n.options || [];
                return r.createElement(
                  'div',
                  { className: 'typeSelect-schema-box', id: t },
                  r.createElement(
                    'div',
                    { className: 'key-input-item' },
                    r.createElement(
                      S.Select,
                      {
                        defaultValue: n.default || 'local',
                        onChange: this.typeChange,
                      },
                      o.map(function (e, t) {
                        return r.createElement(
                          _e,
                          { key: t, value: e.value },
                          e.label || e.name,
                        );
                      }),
                    ),
                  ),
                  r.createElement(
                    'div',
                    { className: 'type-select-item' },
                    r.createElement(
                      S.Select,
                      { defaultValue: a, style: { width: 120 }, disabled: !0 },
                      r.createElement(_e, { key: a, value: a }, a),
                    ),
                  ),
                  r.createElement(
                    'div',
                    { className: 'title-input-item' },
                    r.createElement(S.Input, {
                      defaultValue: n.title,
                      disabled: !0,
                    }),
                  ),
                  r.createElement('div', { className: 'operate-item' }, ' '),
                );
              }),
              t
            );
          })(r.PureComponent);
        Me.propTypes = {
          parentType: d().string,
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          typeSelectData: d().any,
          isFixed: d().any,
        };
        var We = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(Me)),
          ze = S.Tree.TreeNode,
          Ge = function (e) {
            return i().createElement(Le, e);
          },
          Ue = {
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
          He = S.Tree.TreeNode,
          Xe = function (e) {
            return i().createElement(Le, e);
          },
          Qe = S.Tree.TreeNode,
          Ye = function (e) {
            return i().createElement(Le, e);
          },
          Ze = S.Tree.TreeNode,
          $e = function (e) {
            return i().createElement(Le, e);
          },
          et = (n(617), S.Select.Option),
          tt = (function (e) {
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
                    c = i.optionIndex;
                  r !== i.optionLabel &&
                    (a(s, r)
                      ? S.message.warning(
                          '对不起，存在相同的Label值，请重新设置。',
                        )
                      : o(s, c, r));
                }),
                (n.handleValueChange = function (e) {
                  var t = (n.props.schemaStore || {}).updateOptionValue,
                    a = e.target.value,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.optionIndex,
                    s = o.optionValue;
                  if (a !== s) {
                    var c = a;
                    if ((0, Ce.isObject)(s) && (0, Ce.isString)(c))
                      try {
                        c = JSON.parse(c);
                      } catch (e) {
                        console.warn('option 数值转换失败：', c), (c = s);
                      }
                    t(r, i, c);
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
                    t = e.getSchemaByIndexRoute,
                    a = e.deleteOptionItem,
                    o = n.props,
                    r = o.indexRoute,
                    i = o.optionIndex,
                    s = t(r);
                  s.options && s.options.length > 1
                    ? a(r, i)
                    : S.message.warning('删除失败，至少保留一个可选项。');
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
              o()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.optionLabel,
                  n = e.optionValue,
                  a = (e.optionNodeKey, n);
                return (
                  ((0, Ce.isObject)(n) || (0, Ce.isArray)(n)) &&
                    (a = JSON.stringify(n)),
                  r.createElement(
                    'div',
                    { className: 'option-schema-box', id: t },
                    r.createElement(
                      'div',
                      { className: 'key-input-item' },
                      r.createElement(S.Input, {
                        defaultValue: a,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                    r.createElement(
                      'div',
                      { className: 'type-select-item' },
                      r.createElement(
                        S.Select,
                        { defaultValue: 'string', style: { width: 120 } },
                        r.createElement(
                          et,
                          { key: 'string', value: 'string' },
                          'string',
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      { className: 'title-input-item' },
                      r.createElement(S.Input, {
                        defaultValue: t,
                        onPressEnter: this.handleLabelChange,
                        onBlur: this.handleLabelChange,
                      }),
                    ),
                    r.createElement(
                      'div',
                      { className: 'operate-item' },
                      r.createElement(
                        S.Tooltip,
                        { title: '删除' },
                        r.createElement(Ie.CloseOutlined, {
                          className: 'operate-btn delete-operate',
                          onClick: this.onDeleteBtnEvent,
                        }),
                      ),
                      r.createElement(
                        S.Tooltip,
                        { title: '新增可选项' },
                        r.createElement(Ie.PlusOutlined, {
                          className: 'operate-btn',
                          onClick: this.onAddBtnEvent,
                        }),
                      ),
                      r.createElement(
                        S.Tooltip,
                        { title: '复制' },
                        r.createElement(Ie.CopyOutlined, {
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
          })(r.PureComponent);
        tt.propTypes = {
          indexRoute: d().string,
          optionIndex: d().any,
          optionLabel: d().string,
          optionValue: d().string,
          optionNodeKey: d().string,
        };
        var nt = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(tt)),
          at = S.Tree.TreeNode,
          ot = function (e) {
            return i().createElement(nt, e);
          },
          rt = S.Tree.TreeNode,
          it = function (e) {
            return i().createElement(Le, e);
          },
          st = function (e) {
            switch (e.targetJsonSchema.type) {
              case 'object':
              case 'func':
              case 'style':
              case 'data':
              case 'dynamic-config':
              case 'dynamic-object':
              case 'dynamic-array':
              case 'sohu-source':
              case 'sohu-event':
              case 'padding-margin':
                return pt(e);
              case 'array':
                return Ae(e);
              case 'datasource':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.properties.data || {};
                  return i().createElement(
                    ze,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: Ge(u()({}, e)),
                    },
                    i().createElement(ze, {
                      className: 'dataSource-type-item-schema schema-item-form',
                      id: o + '-type',
                      key: o + '-type',
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: 'type',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: r.properties.type,
                          parentType: s,
                          nodeKey: o + '-type',
                          typeSelectData: Ue,
                        }),
                        i().createElement(We, t)),
                    }),
                    i().createElement(ze, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + c.type,
                      key: o + '-data-' + c.type,
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Ge({
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'data',
                        targetJsonSchema: c,
                        parentType: s,
                        nodeKey: o + '-data-' + c.type,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    i().createElement(ze, {
                      className:
                        'dataSource-filter-item-schema schema-item-form',
                      id: o + '-filter',
                      key: o + '-filter',
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'filter',
                      disabled: !0,
                      title: Ge({
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'filter',
                        targetJsonSchema: r.properties.filter,
                        parentType: s,
                        nodeKey: o + '-filter',
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                  );
                })(e);
              case 'dynamic-data':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.properties.config || {},
                    l = r.properties.data || {};
                  return i().createElement(
                    He,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: Xe(u()({}, e)),
                    },
                    i().createElement(He, {
                      className: 'dataSource-type-item-schema schema-item-form',
                      id: o + '-type',
                      key: o + '-type',
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: 'type',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: r.properties.type,
                          parentType: s,
                          nodeKey: o + '-type',
                        }),
                        i().createElement(We, t)),
                    }),
                    i().createElement(He, {
                      className:
                        'dataSource-config-item-schema schema-item-form',
                      id: o + '-config-' + l.type,
                      key: o + '-config-' + l.type,
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'config',
                      disabled: !0,
                      title: Xe({
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'config',
                        targetJsonSchema: c,
                        parentType: s,
                        nodeKey: o + '-config-' + c.type,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    i().createElement(He, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + l.type,
                      key: o + '-data-' + l.type,
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Xe({
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'data',
                        targetJsonSchema: l,
                        parentType: s,
                        nodeKey: o + '-data-' + l.type,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                  );
                })(e);
              case 'event':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.properties.type || {},
                    l = r.properties.register || {},
                    p = r.properties.actionFunc || {},
                    d = r.properties.trigger || {},
                    m = r.properties.eventData || {};
                  return i().createElement(
                    Qe,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: Ye(u()({}, e)),
                    },
                    i().createElement(Qe, {
                      className: 'event-type-item-schema schema-item-form',
                      id: o + '-type',
                      key: o + '-type',
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: 'type',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: a ? a + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: c,
                          parentType: s,
                          nodeKey: o + '-type',
                        }),
                        i().createElement(We, t)),
                    }),
                    'on' === c.default &&
                      l &&
                      i().createElement(Qe, {
                        className:
                          'event-register-item-schema schema-item-form',
                        id: o + '-register-' + c.default,
                        key: o + '-register-' + c.default,
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'register',
                        disabled: !0,
                        title: Ye({
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'register',
                          targetJsonSchema: l,
                          parentType: s,
                          nodeKey: o + '-register-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'on' === c.default &&
                      p &&
                      i().createElement(Qe, {
                        className:
                          'event-actionFunc-item-schema schema-item-form',
                        id: o + '-actionFunc-' + c.default,
                        key: o + '-actionFunc-' + c.default,
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'actionFunc',
                        disabled: !0,
                        title: Ye({
                          indexRoute: a ? a + '-2' : '2',
                          jsonKey: 'actionFunc',
                          targetJsonSchema: p,
                          parentType: s,
                          nodeKey: o + '-actionFunc-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'emit' === c.default &&
                      d &&
                      i().createElement(Qe, {
                        className: 'event-trigger-item-schema schema-item-form',
                        id: o + '-trigger-' + c.default,
                        key: o + '-trigger-' + c.default,
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'trigger',
                        disabled: !0,
                        title: Ye({
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'trigger',
                          targetJsonSchema: d,
                          parentType: s,
                          nodeKey: o + '-trigger-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'emit' === c.default &&
                      m &&
                      i().createElement(Qe, {
                        className:
                          'event-eventData-item-schema schema-item-form',
                        id: o + '-eventData-' + c.default,
                        key: o + '-eventData-' + c.default,
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'eventData',
                        disabled: !0,
                        title: Ye({
                          indexRoute: a ? a + '-2' : '2',
                          jsonKey: 'eventData',
                          targetJsonSchema: m,
                          parentType: s,
                          nodeKey: o + '-eventData-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                  );
                })(e);
              case 'quantity':
              case 'box-style':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.propertyOrder[0],
                    l = r.properties[c];
                  return i().createElement(
                    Ze,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: $e(u()({}, e)),
                    },
                    i().createElement(Ze, {
                      className: 'quantity-unit-item-schema schema-item-form',
                      id: o + '-' + c,
                      key: o + '-' + c,
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: c,
                      disabled: !0,
                      title: $e({
                        indexRoute: a ? a + '-0' : '0',
                        jsonKey: c,
                        targetJsonSchema: l,
                        parentType: s,
                        nodeKey: o + '-' + c,
                        hideOperaBtn: !0,
                        showAdvanceBtn: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    i().createElement(Ze, {
                      className:
                        'quantity-typeSelect-item-schema schema-item-form',
                      id: o + '-quantity',
                      key: o + '-quantity',
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'quantity',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'quantity',
                          targetJsonSchema: r.properties.quantity,
                          parentType: s,
                          nodeKey: o + '-quantity',
                        }),
                        i().createElement(We, t)),
                    }),
                  );
                })(e);
              case 'radio':
              case 'checkboxes':
              case 'select':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.options,
                    l = a || '0';
                  return i().createElement(
                    at,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: ((t = u()({}, e)), i().createElement(Le, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = e.label || e.name,
                          a = e.value,
                          r = '' + o + s + '-' + n;
                        return i().createElement(at, {
                          className: 'enum-item-schema schema-item-form',
                          id: r,
                          key: r,
                          indexRoute: l,
                          disabled: !0,
                          title: ot({
                            indexRoute: l,
                            optionIndex: t,
                            optionLabel: n,
                            optionValue: a,
                            optionNodeKey: r,
                          }),
                        });
                      }),
                  );
                })(e);
              default:
                return (function (e) {
                  var t = e.jsonKey,
                    n = e.indexRoute,
                    a = e.nodeKey,
                    o = e.targetJsonSchema.type;
                  return i().createElement(rt, {
                    className: o + '-schema schema-item-form',
                    id: a,
                    key: a,
                    indexRoute: n,
                    jsonKey: t,
                    title: it(e),
                  });
                })(e);
            }
          },
          ct = S.Tree.TreeNode,
          lt = function (e) {
            return i().createElement(Le, e);
          },
          pt = function (e) {
            var t,
              n,
              a,
              o,
              r,
              s = e.jsonKey,
              c = e.indexRoute,
              l = e.nodeKey,
              p = e.targetJsonSchema,
              d = e.isOnlyShowChild,
              m = p.type,
              h = p.isFixed,
              y =
                ((t = {
                  propertyOrder: p.propertyOrder,
                  properties: p.properties,
                  parentIndexRoute: c,
                  parentNodeKey: l,
                  parentType: m,
                  isOnlyShowChild: d,
                }),
                (n = t.properties),
                (a = t.parentIndexRoute),
                (o = t.parentNodeKey),
                (r = t.parentType),
                t.propertyOrder.map(function (e, t) {
                  var i = a ? a + '-' + t : '' + t,
                    s = e,
                    c = n[s],
                    l = c.type,
                    p = (o ? o + '-' : '') + l + '-' + s;
                  return st({
                    parentType: r,
                    jsonKey: s,
                    indexRoute: i,
                    key: p,
                    nodeKey: p,
                    targetJsonSchema: c,
                  });
                })),
              g = i().createElement(
                ct,
                {
                  className: m + '-schema schema-item-form',
                  id: l,
                  key: l,
                  indexRoute: c,
                  jsonKey: s,
                  disabled: h,
                  title: lt(u()({}, e)),
                },
                y,
              );
            return d ? y : g;
          },
          dt =
            (n(23),
            (function (e) {
              function t(t) {
                var n;
                ((n = e.call(this, t) || this).onDragStart = function (e) {
                  (0, (n.props.schemaStore || {}).getSchemaByIndexRoute)(
                    e.node.indexRoute,
                  ).isFixed && S.message.warning('当前元素不支持拖拽哦。');
                }),
                  (n.onDrop = function (e) {
                    var t = e.dragNode,
                      a = e.node,
                      o = n.props.schemaStore || {},
                      r = o.getSchemaByIndexRoute,
                      i = o.indexRoute2keyRoute,
                      s = o.insertJsonData,
                      c = o.deleteJsonByIndex,
                      l = o.isExitJsonKey,
                      p = o.isSupportCurType,
                      d = t.indexRoute,
                      m = t.jsonKey,
                      u = r(d);
                    if (!u.isFixed) {
                      var h = a.indexRoute,
                        y = (0, Ce.isSameParent)(d, h),
                        g = (0, Ce.getCurPosition)(d, h);
                      if (y)
                        c(d, !0),
                          'before' === g && (h = (0, Ce.moveForward)(h)),
                          a.dragOverGapTop
                            ? s(h, m, u, 'before')
                            : (a.dragOver || a.dragOverGapBottom) && s(h, m, u);
                      else {
                        if (l(h, m))
                          return void S.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var f = u.type;
                        if (!p(h, f))
                          return void S.message.warning(
                            '目标位置不支持' + f + '类型元素',
                          );
                        var v = i(d),
                          x = (0, Ce.getParentIndexRoute)(h),
                          b = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(v + '-' + f);
                        j(i(x) + '-' + m + '-' + f, b || v),
                          a.dragOverGapTop
                            ? 'after' === g
                              ? (c(d, !0), s(h, m, u, 'before'))
                              : (s(h, m, u, 'before', !0), c(d))
                            : (a.dragOver || a.dragOverGapBottom) &&
                              ('after' === g
                                ? (c(d, !0), s(h, m, u))
                                : (s(h, m, u, '', !0), c(d)));
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
                  });
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
              o()(t, e);
              var n = t.prototype;
              return (
                (n.componentWillReceiveProps = function (e) {
                  var t = this.props.schemaStore || {},
                    n = t.initJSONSchemaData,
                    a = t.initOnChange,
                    o = t.initSchemaTypeList;
                  C(e.data, this.props.data) || n(e.data),
                    C(e.onChange, this.props.onChange) || a(e.onChange),
                    C(e.typeList, this.props.typeList) || o(e.typeList);
                }),
                (n.render = function () {
                  var e = this.props.jsonView,
                    t = (this.props.schemaStore || {}).jsonSchema,
                    n = (0, Ce.isEmptySchema)(t),
                    a = t.type;
                  return r.createElement(
                    'div',
                    { className: 'json-schema-container' },
                    !n &&
                      !e &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          S.Tree,
                          {
                            draggable: !0,
                            selectable: !1,
                            onDragStart: this.onDragStart,
                            onDrop: this.onDrop,
                            defaultExpandedKeys:
                              'object' !== a || n
                                ? []
                                : this.catchExpandedKeys(t),
                          },
                          'object' === a &&
                            pt({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: '',
                              targetJsonSchema: t,
                              isOnlyShowChild: !0,
                            }),
                          'object' !== a &&
                            st({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: 'first-schema',
                              targetJsonSchema: t,
                              key: 'schema',
                              isFirstSchema: !0,
                            }),
                        ),
                      ),
                    !n &&
                      e &&
                      r.createElement(Te, { jsonData: t, readOnly: !0 }),
                    n &&
                      r.createElement(
                        'p',
                        { className: 'json-schema-empty' },
                        '当前jsonSchema没有数据内容',
                      ),
                  );
                }),
                t
              );
            })(r.PureComponent));
        dt.propTypes = {
          onChange: d().func,
          data: d().object,
          typeList: d().object,
          jsonView: d().any,
        };
        var mt = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(dt)),
          ut = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  schemaStore: new we.schemaStore(),
                }),
                n
              );
            }
            return (
              o()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = (e.data, e.typeList, e.onChange, e.element),
                  n = (e.wideScreen, this.state.schemaStore),
                  a = r.createElement(
                    l.Provider,
                    { schemaStore: n },
                    r.createElement(mt, this.props),
                  );
                return t ? (c().render(a, t), '') : a;
              }),
              t
            );
          })(r.PureComponent);
        ut.propTypes = {
          wideScreen: d().any,
          onChange: d().func,
          data: d().any,
          typeList: d().any,
          element: d().any,
          jsonView: d().any,
        };
      })(),
      a
    );
  })();
});
