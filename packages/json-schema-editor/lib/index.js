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
        804: function () {},
        382: function () {},
        80: function () {},
        251: function () {},
        975: function (e, t, n) {
          var o = n(264);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('b8de86ae', o, !1, { sourceMap: !1 });
        },
        915: function (e, t, n) {
          var o = n(286);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('5e9c0933', o, !1, { sourceMap: !1 });
        },
        797: function (e, t, n) {
          var o = n(804);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('c1e4665a', o, !1, { sourceMap: !1 });
        },
        23: function (e, t, n) {
          var o = n(382);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('adbe60da', o, !1, { sourceMap: !1 });
        },
        617: function (e, t, n) {
          var o = n(80);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('9c82b91a', o, !1, { sourceMap: !1 });
        },
        894: function (e, t, n) {
          var o = n(251);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('ee66e464', o, !1, { sourceMap: !1 });
        },
        611: function (e, t, n) {
          'use strict';
          function o(e, t) {
            for (var n = [], o = {}, a = 0; a < t.length; a++) {
              var r = t[a],
                i = r[0],
                s = {
                  id: e + ':' + a,
                  css: r[1],
                  media: r[2],
                  sourceMap: r[3],
                };
              o[i]
                ? o[i].parts.push(s)
                : n.push((o[i] = { id: i, parts: [s] }));
            }
            return n;
          }
          n.d(t, {
            A: function () {
              return h;
            },
          });
          var a = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !a)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var r = {},
            i =
              a && (document.head || document.getElementsByTagName('head')[0]),
            s = null,
            c = 0,
            l = !1,
            d = function () {},
            p = null,
            u = 'data-vue-ssr-id',
            m =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, n, a) {
            (l = n), (p = a || {});
            var i = o(e, t);
            return (
              y(i),
              function (t) {
                for (var n = [], a = 0; a < i.length; a++) {
                  var s = i[a];
                  (c = r[s.id]).refs--, n.push(c);
                }
                for (
                  t ? y((i = o(e, t))) : (i = []), a = 0;
                  a < n.length;
                  a++
                ) {
                  var c;
                  if (0 === (c = n[a]).refs) {
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
                o = r[n.id];
              if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](n.parts[a]);
                for (; a < n.parts.length; a++) o.parts.push(f(n.parts[a]));
                o.parts.length > n.parts.length &&
                  (o.parts.length = n.parts.length);
              } else {
                var i = [];
                for (a = 0; a < n.parts.length; a++) i.push(f(n.parts[a]));
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
              o = document.querySelector('style[' + u + '~="' + e.id + '"]');
            if (o) {
              if (l) return d;
              o.parentNode.removeChild(o);
            }
            if (m) {
              var a = c++;
              (o = s || (s = g())),
                (t = x.bind(null, o, a, !1)),
                (n = x.bind(null, o, a, !0));
            } else
              (o = g()),
                (t = b.bind(null, o)),
                (n = function () {
                  o.parentNode.removeChild(o);
                });
            return (
              t(e),
              function (o) {
                if (o) {
                  if (
                    o.css === e.css &&
                    o.media === e.media &&
                    o.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = o));
                } else n();
              }
            );
          }
          var S,
            v =
              ((S = []),
              function (e, t) {
                return (S[e] = t), S.filter(Boolean).join('\n');
              });
          function x(e, t, n, o) {
            var a = n ? '' : o.css;
            if (e.styleSheet) e.styleSheet.cssText = v(t, a);
            else {
              var r = document.createTextNode(a),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
            }
          }
          function b(e, t) {
            var n = t.css,
              o = t.media,
              a = t.sourceMap;
            if (
              (o && e.setAttribute('media', o),
              p.ssrId && e.setAttribute(u, t.id),
              a &&
                ((n += '\n/*# sourceURL=' + a.sources[0] + ' */'),
                (n +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
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
    function n(o) {
      var a = t[o];
      if (void 0 !== a) return a.exports;
      var r = (t[o] = { id: o, exports: {} });
      return e[o](r, r.exports, n), r.exports;
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
        for (var o in t)
          n.o(t, o) &&
            !n.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
    var o = {};
    return (
      (function () {
        'use strict';
        n.r(o),
          n.d(o, {
            default: function () {
              return St;
            },
          });
        var e = require('@babel/runtime/helpers/inheritsLoose'),
          t = n.n(e),
          a = require('react'),
          r = n.n(a),
          i = require('react-dom'),
          s = n.n(i),
          c = require('mobx-react'),
          l = require('prop-types'),
          d = n.n(l),
          p = require('@babel/runtime/helpers/extends'),
          u = n.n(p),
          m = require('@babel/runtime/helpers/initializerDefineProperty'),
          h = n.n(m),
          y = require('@babel/runtime/helpers/createClass'),
          g = n.n(y),
          f = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          S = n.n(f),
          v =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            require('mobx')),
          x = require('antd');
        function b(e) {
          var t = JSON.stringify(e);
          return JSON.parse(t);
        }
        function E(e, t) {
          return JSON.stringify(e) === JSON.stringify(t);
        }
        function j(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var C,
          O,
          R,
          N,
          I,
          K,
          k,
          P,
          w,
          J,
          D,
          T,
          B,
          V,
          L,
          F,
          q,
          A,
          _,
          M,
          H,
          z,
          G,
          W,
          U,
          Q,
          X,
          Y,
          Z,
          $,
          ee,
          te,
          ne,
          oe,
          ae,
          re,
          ie,
          se,
          ce,
          le,
          de,
          pe,
          ue,
          me,
          he,
          ye,
          ge,
          fe,
          Se,
          ve,
          xe,
          be = [
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
            'quantity',
            'json',
            'codearea',
            'htmlarea',
            'array',
            'object',
            'datasource',
            'dynamic-data',
            'event',
          ],
          Ee = ['string'],
          je = {
            object: be,
            array: [
              'object',
              'input',
              'number',
              'color',
              'url',
              'date',
              'date-time',
              'time',
            ],
            radio: Ee,
            'single-select': Ee,
            select: ['string'],
            all: be,
          },
          Ce = require('@wibetter/json-utils'),
          Oe = Ce.TypeDataList.jsonschema,
          Re = Ce.TypeDataList.input,
          Ne = {
            jsonSchemaStore:
              ((C = v.action.bound),
              (O = v.action.bound),
              (R = v.action.bound),
              (N = v.action.bound),
              (I = v.action.bound),
              (K = v.action.bound),
              (k = v.action.bound),
              (P = v.action.bound),
              (w = v.action.bound),
              (J = v.action.bound),
              (D = v.action.bound),
              (T = v.action.bound),
              (B = v.action.bound),
              (V = v.action.bound),
              (L = v.action.bound),
              (F = v.action.bound),
              (q = v.action.bound),
              (A = v.action.bound),
              (_ = v.action.bound),
              (M = v.action.bound),
              (H = v.action.bound),
              (z = v.action.bound),
              (G = v.action.bound),
              (W = v.action.bound),
              (U = v.action.bound),
              (Q = v.action.bound),
              (X = v.action.bound),
              (Y = v.action.bound),
              (Z = v.action.bound),
              ($ = v.action.bound),
              (ee = v.action.bound),
              (te = v.action.bound),
              (ne = v.action.bound),
              (oe = v.action.bound),
              (ae = v.action.bound),
              (re = v.action.bound),
              (ie = v.action.bound),
              (se = v.action.bound),
              (ce = v.action.bound),
              (le = v.action.bound),
              (de = v.action.bound),
              (pe = v.action.bound),
              (ue = v.action.bound),
              (me = v.action.bound),
              (he = v.action.bound),
              (ye = (function () {
                function e() {
                  (this.curJsonKeyIndex = 1),
                    h()(this, 'triggerChange', ge, this),
                    h()(this, 'jsonSchema', fe, this),
                    h()(this, 'SchemaTypeList', Se, this),
                    h()(this, 'onChange', ve, this),
                    h()(this, 'childElemSort', xe, this);
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
                      (E(e, this.SchemaTypeList) ||
                        (e &&
                          Object.keys(e).map(function (n) {
                            t.SchemaTypeList[n] = e[n];
                          })));
                  }),
                  (t.initJSONSchemaData = function (e) {
                    if (e && '{}' !== JSON.stringify(e)) {
                      if (!E(e, this.JSONSchemaObj))
                        if (e && (0, Ce.isNewSchemaData)(e))
                          this.jsonSchema = e;
                        else {
                          var t = (0, Ce.oldSchemaToNewSchema)(e);
                          this.jsonSchema = t;
                        }
                    } else this.jsonSchema = b(Oe);
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
                      o = this.getSchemaByIndexRoute(n);
                    return (
                      !!(o.propertyOrder && o.propertyOrder.indexOf(t) >= 0) ||
                      (Ce.KeyWordList &&
                        Ce.KeyWordList.indexOf(t) >= 0 &&
                        x.message.warning(
                          t +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      !1)
                    );
                  }),
                  (t.isSupportCurType = function (e, t) {
                    var n = (0, Ce.getParentIndexRoute)(e),
                      o = this.getSchemaByIndexRoute(n),
                      a = this.SchemaTypeList[o.type];
                    return !!(a && a.indexOf(t) >= 0);
                  }),
                  (t.addChildJson = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if ((0, Ce.isContainerSchema)(n)) {
                      var o = this.getNewJsonKeyIndex(n);
                      n.propertyOrder.push(o),
                        (n.properties[o] = Re),
                        this.jsonSchemaChange(t);
                    } else x.message.warning('非对象类型字段不允许插入子元素');
                  }),
                  (t.changeType = function (e, t, n, o) {
                    var a = (0, Ce.getParentIndexRoute)(e),
                      r = (0, Ce.getSchemaByIndexRoute)(a, this.jsonSchema);
                    r.properties && r.properties[t]
                      ? (r.properties[t] = b(n))
                      : r[t] && (r[t] = b(n)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.updateSchemaData = function (e, t, n) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    Object.assign(o, b(t)), this.jsonSchemaChange(n);
                  }),
                  (t.editSchemaData = function (e, t, n, o) {
                    var a = (0, Ce.getParentIndexRoute)(e),
                      r = (0, Ce.getSchemaByIndexRoute)(a, this.jsonSchema);
                    (r.properties[t] = u()({}, b(r.properties[t]), n)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.editJsonKey = function (e, t, n) {
                    var o = (0, Ce.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                    this.insertJsonData(e, t, o, '', !0),
                      this.deleteJsonByIndex(e, !0),
                      this.jsonSchemaChange(n);
                  }),
                  (t.addNextJsonData = function (e) {
                    var t = (0, Ce.getParentIndexRoute)(e),
                      n = (0, Ce.getSchemaByIndexRoute)(t, this.jsonSchema),
                      o = this.getNewJsonKeyIndex(n);
                    this.insertJsonData(e, o, Re);
                  }),
                  (t.insertJsonData = function (e, t, n, o, a) {
                    var r = (0, Ce.getParentIndexRoute_CurIndex)(e),
                      i = r[0],
                      s = r[1],
                      c = (0, Ce.getSchemaByIndexRoute)(i, this.jsonSchema);
                    c.properties[t] = n;
                    var l = c.propertyOrder,
                      d = 'before' === o ? Number(s) : Number(s) + 1,
                      p = l.slice(0, d),
                      u = l.slice(d);
                    (c.propertyOrder = [].concat(p, [t], u)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteJsonByIndex_CurKey = function (e, t, n) {
                    var o = (0, Ce.getParentIndexRoute)(e),
                      a = (0, Ce.getSchemaByIndexRoute)(o, this.jsonSchema);
                    delete a.properties[t];
                    var r = a.propertyOrder.indexOf(t);
                    a.propertyOrder.splice(r, 1), this.jsonSchemaChange(n);
                  }),
                  (t.deleteJsonByIndex = function (e, t) {
                    var n = (0, Ce.getParentIndexRoute_CurIndex)(e),
                      o = n[0],
                      a = n[1],
                      r = (0, Ce.getSchemaByIndexRoute)(o, this.jsonSchema),
                      i = r.propertyOrder[a];
                    delete r.properties[i];
                    var s = r.propertyOrder.indexOf(i);
                    r.propertyOrder.splice(s, 1), this.jsonSchemaChange(t);
                  }),
                  (t.updateEnumItem = function (e, t, n, o, a) {
                    var r = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.enum &&
                      r.enumextra &&
                      ((r.enum[t] = n), (r.enumextra[t] = o)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.isExitEnumKey = function (e, t, n) {
                    var o = !1,
                      a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (a.enum) {
                      var r = b(a.enum);
                      t >= 0 && r.splice(t, 1), r.indexOf(n) >= 0 && (o = !0);
                    }
                    return (
                      Ce.KeyWordList &&
                        Ce.KeyWordList.indexOf(n) >= 0 &&
                        x.message.warning(
                          n +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      o
                    );
                  }),
                  (t.updateEnumKey = function (e, t, n, o) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enum && (a.enum[t] = n), this.jsonSchemaChange(o);
                  }),
                  (t.updateEnumText = function (e, t, n, o) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enumextra && (a.enumextra[t] = n),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteEnumItem = function (e, t, n) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enum &&
                      o.enumextra &&
                      (o.enum.splice(t, 1), o.enumextra.splice(t, 1)),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertEnumItem = function (e, t, n, o, a, r) {
                    var i = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (i.enum && i.enumextra) {
                      var s = 'before' === a ? Number(t) : Number(t) + 1,
                        c = i.enum.slice(0, s),
                        l = i.enum.slice(s);
                      i.enum = [].concat(c, [n], l);
                      var d = i.enumextra.slice(0, s),
                        p = i.enumextra.slice(s);
                      i.enumextra = [].concat(d, [o], p);
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
                      var o = this.getNewEnumIndex(n.enum),
                        a = '选项' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, o, a);
                    }
                  }),
                  (t.copyEnumItem = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var o = n.enum[t],
                        a = n.enumextra[t],
                        r = this.getNewEnumIndex(n.enum, o),
                        i = a + '_' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, r, i);
                    }
                  }),
                  (t.updateOptionItem = function (e, t, n, o, a) {
                    var r = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.options &&
                      r.options[t] &&
                      ((r.options[t].label = n), (r.options[t].value = o)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.isExitOptionLabel = function (e, t) {
                    var n = !1,
                      o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    return (
                      o.options &&
                        o.options.find(function (e) {
                          return e.label === t || e.name === t;
                        }) &&
                        (n = !0),
                      Ce.KeyWordList &&
                        Ce.KeyWordList.indexOf(t) >= 0 &&
                        x.message.warning(
                          t + '是JSONSchema的保留关键字，建议您换一个名称。',
                        ),
                      n
                    );
                  }),
                  (t.updateOptionLabel = function (e, t, n, o) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.options && a.options[t] && (a.options[t].label = n),
                      this.jsonSchemaChange(o);
                  }),
                  (t.updateOptionValue = function (e, t, n, o) {
                    var a = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.options && a.options[t] && (a.options[t].value = n),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteOptionItem = function (e, t, n) {
                    var o = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.options && o.options[t] && o.options.splice(t, 1),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertOption = function (e, t, n, o, a, r) {
                    var i = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (i.options) {
                      var s = 'before' === a ? Number(t) : Number(t) + 1,
                        c = i.options.slice(0, s),
                        l = i.options.slice(s),
                        d = { label: n, value: o };
                      i.options = [].concat(c, [d], l);
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
                      var o = this.getNewOptionValue(n.options),
                        a = '选项' + (n.options.length + 1);
                      this.insertOption(e, t, a, o);
                    }
                  }),
                  (t.copyOptionItem = function (e, t) {
                    var n = (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.options) {
                      n.options[t];
                      var o = this.getNewOptionValue(n.options),
                        a = (label, name + '_copy');
                      this.insertOption(e, t, a, o);
                    }
                  }),
                  (t.checkConditionProp = function (e) {
                    var t = !1;
                    return (
                      (this.jsonSchema && this.jsonSchema.conditionProps
                        ? this.jsonSchema.conditionProps
                        : {})[e] && (t = !0),
                      t
                    );
                  }),
                  (t.addConditionProp = function (e) {
                    if (this.jsonSchema) {
                      this.jsonSchema.conditionProps ||
                        (this.jsonSchema.conditionProps = {});
                      var t = this.jsonSchema.conditionProps;
                      e &&
                        e.keyRoute &&
                        ((t[e.keyRoute] = e), this.jsonSchemaChange());
                    } else x.message.error('当前schema为空');
                  }),
                  (t.removeConditionProp = function (e) {
                    if (this.jsonSchema) {
                      this.jsonSchema.conditionProps ||
                        (this.jsonSchema.conditionProps = {});
                      var t = this.jsonSchema.conditionProps;
                      e && t[e] && (delete t[e], this.jsonSchemaChange());
                    } else x.message.error('当前schema为空');
                  }),
                  (t.cancelConditionProp = function (e, t) {
                    if (this.jsonSchema) {
                      var n = this.getSchemaByKeyRoute(e);
                      n.isConditionProp = !1;
                      var o = this.keyRoute2indexRoute(e);
                      this.editSchemaData(o, t, n);
                    } else x.message.error('当前schema为空');
                  }),
                  (t.deleteSchemaProp = function (e, t, n) {
                    delete (0, Ce.getSchemaByIndexRoute)(e, this.jsonSchema)[t],
                      this.jsonSchemaChange(n);
                  }),
                  g()(e, [
                    {
                      key: 'JSONSchemaObj',
                      get: function () {
                        return (0, v.toJS)(this.jsonSchema);
                      },
                    },
                  ])
                );
              })()),
              (ge = S()(ye.prototype, 'triggerChange', [v.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (fe = S()(ye.prototype, 'jsonSchema', [v.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return {};
                },
              })),
              (Se = S()(ye.prototype, 'SchemaTypeList', [v.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return je;
                },
              })),
              (ve = S()(ye.prototype, 'onChange', [v.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return function () {};
                },
              })),
              S()(
                ye.prototype,
                'triggerChangeAction',
                [C],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'triggerChangeAction',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'initSchemaTypeList',
                [O],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'initSchemaTypeList',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'initJSONSchemaData',
                [R],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'initJSONSchemaData',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'JSONSchemaObj',
                [v.computed],
                Object.getOwnPropertyDescriptor(ye.prototype, 'JSONSchemaObj'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'initOnChange',
                [N],
                Object.getOwnPropertyDescriptor(ye.prototype, 'initOnChange'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'jsonSchemaChange',
                [I],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'jsonSchemaChange',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'indexRoute2keyRoute',
                [K],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'indexRoute2keyRoute',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'keyRoute2indexRoute',
                [k],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'keyRoute2indexRoute',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'getSchemaByIndexRoute',
                [P],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'getSchemaByIndexRoute',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'getSchemaByKeyRoute',
                [w],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'getSchemaByKeyRoute',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'getNewJsonKeyIndex',
                [J],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'getNewJsonKeyIndex',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'isExitJsonKey',
                [D],
                Object.getOwnPropertyDescriptor(ye.prototype, 'isExitJsonKey'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'isSupportCurType',
                [T],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'isSupportCurType',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'addChildJson',
                [B],
                Object.getOwnPropertyDescriptor(ye.prototype, 'addChildJson'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'changeType',
                [V],
                Object.getOwnPropertyDescriptor(ye.prototype, 'changeType'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateSchemaData',
                [L],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'updateSchemaData',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'editSchemaData',
                [F],
                Object.getOwnPropertyDescriptor(ye.prototype, 'editSchemaData'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'editJsonKey',
                [q],
                Object.getOwnPropertyDescriptor(ye.prototype, 'editJsonKey'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'addNextJsonData',
                [A],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'addNextJsonData',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'insertJsonData',
                [_],
                Object.getOwnPropertyDescriptor(ye.prototype, 'insertJsonData'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'deleteJsonByIndex_CurKey',
                [M],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'deleteJsonByIndex_CurKey',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'deleteJsonByIndex',
                [H],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'deleteJsonByIndex',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateEnumItem',
                [z],
                Object.getOwnPropertyDescriptor(ye.prototype, 'updateEnumItem'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'isExitEnumKey',
                [G],
                Object.getOwnPropertyDescriptor(ye.prototype, 'isExitEnumKey'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateEnumKey',
                [W],
                Object.getOwnPropertyDescriptor(ye.prototype, 'updateEnumKey'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateEnumText',
                [U],
                Object.getOwnPropertyDescriptor(ye.prototype, 'updateEnumText'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'deleteEnumItem',
                [Q],
                Object.getOwnPropertyDescriptor(ye.prototype, 'deleteEnumItem'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'insertEnumItem',
                [X],
                Object.getOwnPropertyDescriptor(ye.prototype, 'insertEnumItem'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'getNewEnumIndex',
                [Y],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'getNewEnumIndex',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'addEnumItem',
                [Z],
                Object.getOwnPropertyDescriptor(ye.prototype, 'addEnumItem'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'copyEnumItem',
                [$],
                Object.getOwnPropertyDescriptor(ye.prototype, 'copyEnumItem'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateOptionItem',
                [ee],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'updateOptionItem',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'isExitOptionLabel',
                [te],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'isExitOptionLabel',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateOptionLabel',
                [ne],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'updateOptionLabel',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'updateOptionValue',
                [oe],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'updateOptionValue',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'deleteOptionItem',
                [ae],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'deleteOptionItem',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'insertOption',
                [re],
                Object.getOwnPropertyDescriptor(ye.prototype, 'insertOption'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'getNewOptionValue',
                [ie],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'getNewOptionValue',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'addOptionItem',
                [se],
                Object.getOwnPropertyDescriptor(ye.prototype, 'addOptionItem'),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'copyOptionItem',
                [ce],
                Object.getOwnPropertyDescriptor(ye.prototype, 'copyOptionItem'),
                ye.prototype,
              ),
              (xe = S()(ye.prototype, 'childElemSort', [le], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  var e = this;
                  return function (t) {
                    for (
                      var n = (0, Ce.getSchemaByIndexRoute)(t, e.jsonSchema),
                        o = n.propertyOrder,
                        a = [],
                        r = [],
                        i = [],
                        s = [],
                        c = [],
                        l = [],
                        d = [],
                        p = [],
                        u = 0,
                        m = o.length;
                      u < m;
                      u++
                    ) {
                      var h = o[u];
                      switch (n.properties[h].type) {
                        case 'input':
                        case 'url':
                          a.push(h);
                          break;
                        case 'number':
                        case 'quantity':
                          r.push(h);
                          break;
                        case 'radio':
                        case 'select':
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
                          d.push(h);
                          break;
                        default:
                          p.push(h);
                      }
                    }
                    (n.propertyOrder = [].concat(a, r, i, s, l, c, d, p)),
                      e.jsonSchemaChange();
                  };
                },
              })),
              S()(
                ye.prototype,
                'checkConditionProp',
                [de],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'checkConditionProp',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'addConditionProp',
                [pe],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'addConditionProp',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'removeConditionProp',
                [ue],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'removeConditionProp',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'cancelConditionProp',
                [me],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'cancelConditionProp',
                ),
                ye.prototype,
              ),
              S()(
                ye.prototype,
                'deleteSchemaProp',
                [he],
                Object.getOwnPropertyDescriptor(
                  ye.prototype,
                  'deleteSchemaProp',
                ),
                ye.prototype,
              ),
              ye),
          },
          Ie = require('@ant-design/icons'),
          Ke = x.Select.Option,
          ke = (0, c.inject)(function (e) {
            return {
              getSchemaByKeyRoute: e.jsonSchemaStore.getSchemaByKeyRoute,
            };
          })(
            (0, c.observer)(function (e) {
              var t = e.conditionRule,
                n = e.hiddenRuleConditionValueChange,
                o = e.getSchemaByKeyRoute,
                a = {};
              if (t.conditionProp && t.conditionProp.keyRoute) {
                var i = o(t.conditionProp.keyRoute);
                i.items && (a = i.items);
              }
              return !t.conditionProp ||
                ('radio' !== t.conditionProp.type &&
                  'single-select' !== t.conditionProp.type)
                ? t.conditionProp && 'boolean' === t.conditionProp.type
                  ? r().createElement(
                      x.Radio.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n(e.target.value);
                        },
                        defaultValue: t.conditionValue,
                      },
                      r().createElement(
                        x.Radio,
                        { value: !0, key: !0 },
                        'true',
                      ),
                      r().createElement(
                        x.Radio,
                        { value: !1, key: !1 },
                        'false',
                      ),
                    )
                  : r().createElement(x.Input, {
                      defaultValue: t.conditionValue,
                      onPressEnter: function (e) {
                        return n(e.target.value);
                      },
                      onBlur: function (e) {
                        return n(e.target.value);
                      },
                    })
                : r().createElement(
                    x.Select,
                    {
                      defaultValue: t.conditionValue,
                      style: { width: 150 },
                      onChange: function (e) {
                        n(e);
                      },
                    },
                    a &&
                      a.enum &&
                      a.enum.map(function (e, n) {
                        return r().createElement(
                          Ke,
                          { key: e, value: e, select: e === t.conditionValue },
                          a.enumextra[n],
                        );
                      }),
                  );
            }),
          ),
          Pe = [].concat(
            [
              'input',
              'boolean',
              'number',
              'color',
              'url',
              'textarea',
              'radio',
              'single-select',
              'select',
              'date',
              'date-time',
              'time',
            ],
            [
              'quantity',
              'box-style',
              'text-editor',
              'json',
              'codearea',
              'htmlarea',
              'text-editor',
              'datasource',
              'dynamic-data',
              'event',
              'array',
              'object',
            ],
          );
        function we(e) {
          var t = !1;
          return (
            ('#' + ['number'].join('#') + '#').indexOf('#' + e + '#') >= 0 &&
              (t = !0),
            t
          );
        }
        function Je(e) {
          var t = !1;
          return (
            ('#' + ['array'].join('#') + '#').indexOf('#' + e + '#') >= 0 &&
              (t = !0),
            t
          );
        }
        n(975);
        var De = x.Input.TextArea,
          Te = x.Select.Option,
          Be = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var o = n.props,
                    a = o.indexRoute,
                    r = o.jsonKey,
                    i = o.targetJsonSchema,
                    s = o.editSchemaData;
                  if (i[e] !== t) {
                    var c = {};
                    (c[e] = t), s(a, r, c);
                  }
                }),
                (n.renderDefaultContent = function (e, t, o) {
                  if ('boolean' === e)
                    return a.createElement(x.Switch, {
                      style: { display: 'inline-block' },
                      defaultChecked: t.default,
                      checkedChildren: 'true',
                      unCheckedChildren: 'false',
                      onChange: function (e) {
                        n.handleValueChange('default', e);
                      },
                    });
                  if ('radio' === e || 'single-select' === e) {
                    var r = t.options;
                    return a.createElement(
                      x.Radio.Group,
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
                          var n = o + '-options-' + t;
                          return a.createElement(
                            x.Radio,
                            { value: e.value, key: n },
                            e.label || e.name,
                          );
                        }),
                    );
                  }
                  if ('select' === e) {
                    var i = t.options;
                    return a.createElement(
                      x.Checkbox.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n.handleValueChange('default', e);
                        },
                        defaultValue: t.default,
                      },
                      i &&
                        i.length > 0 &&
                        i.map(function (e, t) {
                          var n = o + '-options-' + t;
                          return a.createElement(
                            x.Checkbox,
                            { value: e.value, key: n },
                            e.label || e.name,
                          );
                        }),
                    );
                  }
                  return 'color' === e
                    ? a.createElement(x.Input, {
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
                      ? a.createElement(De, {
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
                        ? a.createElement(x.InputNumber, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + t.title + '的默认值',
                            defaultValue: t.default,
                            onChange: function (e) {
                              n.handleValueChange('default', e);
                            },
                          })
                        : a.createElement(x.Input, {
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
                (n.curConditionPropChange = function (e, t) {
                  var o = n.props,
                    a = o.indexRoute,
                    r = o.jsonKey,
                    i = o.targetJsonSchema,
                    s = o.addConditionProp,
                    c = o.removeConditionProp,
                    l = o.indexRoute2keyRoute,
                    d = t || l(a);
                  e
                    ? (s({
                        key: r,
                        keyRoute: d,
                        title: i.title,
                        format: i.type,
                        type: i.type,
                      }),
                      n.handleValueChange('isConditionProp', !0))
                    : (c(d), n.handleValueChange('isConditionProp', !1));
                }),
                (n.deleteHiddenRule = function () {
                  var e = n.props,
                    t = e.indexRoute;
                  (0, e.deleteSchemaProp)(t, 'hiddenRule');
                }),
                (n.addHiddenRule = function () {
                  n.handleValueChange('hiddenRule', {});
                }),
                (n.hiddenRuleConditionChange = function (e) {
                  var t = n.props.targetJsonSchema,
                    o = {};
                  t.hiddenRule && (o = (0, v.toJS)(t.hiddenRule)),
                    (o.conditionProp = e),
                    n.handleValueChange('hiddenRule', o);
                }),
                (n.hiddenRuleConditionValueChange = function (e) {
                  var t = n.props.targetJsonSchema,
                    o = {};
                  t.hiddenRule && (o = (0, v.toJS)(t.hiddenRule)),
                    (o.conditionValue = e),
                    n.handleValueChange('hiddenRule', o);
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            return (
              t()(n, e),
              (n.prototype.render = function () {
                var e,
                  t = this,
                  n = this.props,
                  o = n.nodeKey,
                  r = n.indexRoute,
                  i = n.targetJsonSchema,
                  s = n.checkConditionProp,
                  c = n.jsonSchema,
                  l = n.indexRoute2keyRoute,
                  d = i.type,
                  p = l(r);
                e = (0, Ce.hasProperties)(i.isConditionProp)
                  ? i.isConditionProp
                  : s(p);
                var u = {};
                c.conditionProps && (u = c.conditionProps);
                var m = Object.keys(u),
                  h = {};
                return (
                  i.hiddenRule && (h = i.hiddenRule),
                  a.createElement(
                    'div',
                    { className: 'advance-config-model' },
                    (function (e) {
                      var t = !1;
                      return (
                        (
                          '#' +
                          [
                            'boolean',
                            'input',
                            'number',
                            'color',
                            'url',
                            'radio',
                            'single-select',
                            'date',
                            'date-time',
                            'time',
                          ].join('#') +
                          '#'
                        ).indexOf('#' + e + '#') >= 0 && (t = !0),
                        t
                      );
                    })(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-isConditionProp-' + e,
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '当前属性设置为条件字段后，其他字段可以根据其数值做对应的联动',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '条件字段',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            {
                              className: 'form-item-box',
                              key: o + '-isConditionProp-switch-' + e,
                            },
                            a.createElement(x.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: e,
                              checkedChildren: '是',
                              unCheckedChildren: '否',
                              onChange: function (e) {
                                t.curConditionPropChange(e, p);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      var t = !1;
                      return (
                        (
                          '#' +
                          [
                            'input',
                            'number',
                            'url',
                            'textarea',
                            'text-editor',
                            'date',
                            'date-time',
                            'time',
                            'json',
                            'codearea',
                            'htmlarea',
                          ].join('#') +
                          '#'
                        ).indexOf('#' + e + '#') >= 0 && (t = !0),
                        t
                      );
                    })(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-readOnly-' + i.readOnly,
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '当前属性设置为只读后，用户不能对其进行任何编辑操作',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '是否只读',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: i.readOnly,
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
                      var t = !1;
                      return (
                        ('#' + [].join('#') + '#').indexOf('#' + e + '#') >=
                          0 && (t = !0),
                        t
                      );
                    })(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-isRequired-' + i.isRequired,
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示。',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '是否必填项',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: i.isRequired,
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
                      var t = !1;
                      return (
                        (
                          '#' +
                          [
                            'input',
                            'string',
                            'boolean',
                            'number',
                            'color',
                            'url',
                            'textarea',
                            'text-editor',
                            'radio',
                            'single-select',
                            'select',
                            'json',
                            'codearea',
                            'htmlarea',
                          ].join('#') +
                          '#'
                        ).indexOf('#' + e + '#') >= 0 && (t = !0),
                        t
                      );
                    })(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-default',
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            { placement: 'top' },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '默认值',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            this.renderDefaultContent(d, i, o),
                          ),
                        ),
                      ),
                    (function (e) {
                      var t = !1;
                      return (
                        ('#' + Pe.join('#') + '#').indexOf('#' + e + '#') >=
                          0 && (t = !0),
                        t
                      );
                    })(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-description',
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '字段描述内容将作为Title的补充信息提供给用户',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '字段描述',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.Input, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + i.title + '的字段描述',
                              defaultValue: i.description,
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
                    (function (e) {
                      var t = !1;
                      return (
                        (
                          '#' +
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
                          ].join('#') +
                          '#'
                        ).indexOf('#' + e + '#') >= 0 && (t = !0),
                        t
                      );
                    })(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-placeholder',
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '输入提示内容将作为输入区域的提示信息展示给用户',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '输入提示',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.Input, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + i.title + '的输入提示',
                              defaultValue: i.placeholder,
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
                    we(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-minimum-' + i.minimum,
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '设置最小值后，用户输入的数值必须大于当前最小值',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '最小值',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: i.minimum,
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
                    we(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-maximum-' + i.maximum,
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '设置最大值后，用户输入的数值必须大于当前最大值',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '最大值',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: i.maximum,
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
                    Je(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-minimum-child-' + i['minimum-child'],
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '设置最少子项个数后，当前字段的子字段数量必须大于最少子项数',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '最少子项数',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: i['minimum-child'],
                              onChange: function (e) {
                                t.handleValueChange('minimum-child', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    Je(d) &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: o + '-maximum-child-' + i['maximum-child'],
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '设置最多子项个数后，当前字段的子字段数量必须少于最多子项数',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '最多子项数',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: i['maximum-child'],
                              onChange: function (e) {
                                t.handleValueChange('maximum-child', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    !i.hiddenRule &&
                      a.createElement(
                        'div',
                        { className: 'wide-screen-element-warp' },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            'span',
                            { className: 'title-text' },
                            '隐藏规则',
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            x.Button,
                            {
                              size: 'small',
                              className: 'add-rule-condition-btn',
                              onClick: this.addHiddenRule,
                            },
                            '添加隐藏规则',
                          ),
                        ),
                      ),
                    i.hiddenRule &&
                      a.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key:
                            o + '-clearValueOnHidden-' + i.clearValueOnHidden,
                        },
                        a.createElement(
                          'div',
                          { className: 'element-title' },
                          a.createElement(
                            x.Tooltip,
                            {
                              title:
                                '默认隐藏表单项时，会保留其对应的表单项数值。如需隐藏时删除表单项数值，请开启以下配置项。',
                              placement: 'top',
                            },
                            a.createElement(
                              'span',
                              { className: 'title-text' },
                              '隐藏时删除',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'content-item' },
                          a.createElement(
                            'div',
                            { className: 'form-item-box' },
                            a.createElement(x.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: i.clearValueOnHidden,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                t.handleValueChange('clearValueOnHidden', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    i.hiddenRule &&
                      a.createElement(
                        'div',
                        { className: 'hidden-rule-box' },
                        a.createElement(
                          'div',
                          { className: 'rule-title' },
                          a.createElement(
                            'div',
                            { className: 'title' },
                            '隐藏规则：',
                          ),
                          a.createElement(
                            'div',
                            { className: 'btn-box' },
                            a.createElement(
                              x.Button,
                              { size: 'small', onClick: this.deleteHiddenRule },
                              '删除规则',
                            ),
                          ),
                        ),
                        a.createElement(
                          'div',
                          { className: 'rule-condition-box' },
                          a.createElement(
                            'div',
                            { className: 'condition-title' },
                            '隐藏条件：',
                          ),
                          a.createElement(
                            'div',
                            { className: 'condition-prop' },
                            a.createElement(
                              x.Select,
                              {
                                defaultValue: h.conditionProp
                                  ? h.conditionProp.keyRoute
                                  : null,
                                style: { width: 150 },
                                onChange: function (e) {
                                  var n = u[e];
                                  t.hiddenRuleConditionChange(n);
                                },
                              },
                              m.map(function (e) {
                                var t = u[e];
                                return a.createElement(
                                  Te,
                                  {
                                    key: t.keyRoute,
                                    value: t.keyRoute,
                                    disabled: p === t.keyRoute,
                                  },
                                  t.title,
                                  '(',
                                  t.key,
                                  ')',
                                );
                              }),
                            ),
                          ),
                          a.createElement(
                            'div',
                            { className: 'condition-equal' },
                            '等于',
                          ),
                          a.createElement(
                            'div',
                            { className: 'condition-value' },
                            a.createElement(ke, {
                              conditionRule: h,
                              hiddenRuleConditionValueChange:
                                this.hiddenRuleConditionValueChange,
                            }),
                          ),
                        ),
                      ),
                  )
                );
              }),
              n
            );
          })(a.PureComponent);
        Be.propTypes = {
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          checkConditionProp: d().any,
          addConditionProp: d().any,
          removeConditionProp: d().any,
          jsonSchema: d().any,
        };
        var Ve = (0, c.inject)(function (e) {
            return {
              getSchemaByIndexRoute: e.jsonSchemaStore.getSchemaByIndexRoute,
              editSchemaData: e.jsonSchemaStore.editSchemaData,
              checkConditionProp: e.jsonSchemaStore.checkConditionProp,
              addConditionProp: e.jsonSchemaStore.addConditionProp,
              indexRoute2keyRoute: e.jsonSchemaStore.indexRoute2keyRoute,
              removeConditionProp: e.jsonSchemaStore.removeConditionProp,
              deleteSchemaProp: e.jsonSchemaStore.deleteSchemaProp,
              jsonSchema: e.jsonSchemaStore.jsonSchema,
            };
          })((0, c.observer)(Be)),
          Le = (n(915), x.Select.Option),
          Fe = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).selectHandleChange = function (
                  e,
                ) {
                  var t = n.props,
                    o = t.indexRoute,
                    a = t.jsonKey,
                    r = t.changeType;
                  t.targetJsonSchema.type !== e && r(o, a, Ce.TypeDataList[e]);
                }),
                (n.handleJsonKeyChange = function (e) {
                  var t = e.target.value,
                    o = n.props,
                    a = o.indexRoute,
                    r = o.jsonKey,
                    i = o.editJsonKey,
                    s = o.isExitJsonKey;
                  r !== t &&
                    (s(a, t)
                      ? x.message.warning('当前key已存在，请换一个吧。')
                      : i(a, t));
                }),
                (n.handleTitleChange = function (e) {
                  var t = e.target.value,
                    o = n.props,
                    a = o.indexRoute,
                    r = o.jsonKey,
                    i = o.editSchemaData;
                  o.targetJsonSchema.title !== t && i(a, r, { title: t });
                }),
                (n.getCurrentTypeList = function (e) {
                  var t = n.props.SchemaTypeList,
                    o = t[e || 'all'];
                  return (o && 0 !== o.length) || (o = t.all), o;
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    o = e.targetJsonSchema,
                    a = e.addChildJson,
                    r = e.addNextJsonData;
                  (0, Ce.isContainerSchema)(o) ? a(t) : r(t);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    o = e.targetJsonSchema,
                    a = e.getSchemaByIndexRoute,
                    r = e.indexRoute2keyRoute,
                    i = e.jsonKey,
                    s = e.insertJsonData,
                    c = e.getNewJsonKeyIndex,
                    l = b(o),
                    d = (0, Ce.getParentIndexRoute)(t),
                    p = c(a(d), i),
                    u = o.type;
                  j(r(d) + '-' + p + '-' + u, r(t)), s(t, p, l);
                }),
                (n.onDeleteBtnEvent = function () {
                  var e = n.props,
                    t = e.jsonKey,
                    o = e.indexRoute;
                  (0, e.deleteJsonByIndex_CurKey)(o, t);
                }),
                (n.ignoreDragEvent = function (e) {
                  e.preventDefault(), e.stopPropagation();
                }),
                (n.childElemSort = function () {
                  var e = n.props,
                    t = e.indexRoute;
                  (0, e.childElemSort)(t);
                }),
                (n.state = { showAdvanceConfig: !1 }),
                (n.onAddBtnEvent = n.onAddBtnEvent.bind(n)),
                (n.onCopyBtnEvent = n.onCopyBtnEvent.bind(n)),
                (n.onDeleteBtnEvent = n.onDeleteBtnEvent.bind(n)),
                (n.handleJsonKeyChange = n.handleJsonKeyChange.bind(n)),
                (n.handleTitleChange = n.handleTitleChange.bind(n)),
                (n.selectHandleChange = n.selectHandleChange.bind(n)),
                (n.childElemSort = n.childElemSort.bind(n)),
                n
              );
            }
            return (
              t()(n, e),
              (n.prototype.render = function () {
                var e = this,
                  t = this.props,
                  n = t.parentType,
                  o = t.indexRoute,
                  r = t.jsonKey,
                  i = t.nodeKey,
                  s = t.targetJsonSchema,
                  c = this.state.showAdvanceConfig,
                  l = s.isFixed || this.props.isFixed || !1,
                  d =
                    (this.props.readOnly || s.readOnly,
                    void 0 !== this.props.keyIsFixed
                      ? this.props.keyIsFixed
                      : l),
                  p =
                    void 0 !== this.props.typeIsFixed
                      ? this.props.typeIsFixed
                      : l,
                  u =
                    void 0 !== this.props.titleIsFixed
                      ? this.props.titleIsFixed
                      : l,
                  m = this.props.hideOperaBtn || !1,
                  h = !!m && this.props.showAdvanceBtn,
                  y = this.getCurrentTypeList(n),
                  g = s.type,
                  f = (0, Ce.isContainerSchema)(s);
                return a.createElement(
                  a.Fragment,
                  null,
                  s &&
                    a.createElement(
                      'div',
                      { className: 'base-schema-box', id: i },
                      a.createElement(
                        'div',
                        {
                          className: 'key-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        a.createElement(x.Input, {
                          defaultValue: r || 'key值不存在',
                          disabled: d,
                          onPressEnter: this.handleJsonKeyChange,
                          onBlur: this.handleJsonKeyChange,
                        }),
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'type-select-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        a.createElement(
                          x.Select,
                          {
                            defaultValue: g,
                            style: { width: 150 },
                            onChange: this.selectHandleChange,
                            disabled: p,
                          },
                          y.map(function (e) {
                            return a.createElement(Le, { key: e, value: e }, e);
                          }),
                        ),
                      ),
                      a.createElement(
                        'div',
                        {
                          className: 'title-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        a.createElement(x.Input, {
                          defaultValue: s.title,
                          disabled: u,
                          onPressEnter: this.handleTitleChange,
                          onBlur: this.handleTitleChange,
                        }),
                      ),
                      !m &&
                        a.createElement(
                          'div',
                          { className: 'operate-item' },
                          !l &&
                            a.createElement(
                              x.Tooltip,
                              { title: '删除' },
                              a.createElement(Ie.CloseOutlined, {
                                className: 'operate-btn delete-operate',
                                onClick: this.onDeleteBtnEvent,
                              }),
                            ),
                          a.createElement(
                            x.Tooltip,
                            { title: f ? '新增子元素' : '新增同级元素' },
                            a.createElement(Ie.PlusOutlined, {
                              className: 'operate-btn',
                              onClick: this.onAddBtnEvent,
                            }),
                          ),
                          f &&
                            a.createElement(
                              x.Tooltip,
                              { title: '数据项排序' },
                              a.createElement(Ie.SortAscendingOutlined, {
                                className: 'operate-btn',
                                onClick: this.childElemSort,
                              }),
                            ),
                          !l &&
                            a.createElement(
                              a.Fragment,
                              null,
                              a.createElement(
                                x.Tooltip,
                                { title: '复制' },
                                a.createElement(Ie.CopyOutlined, {
                                  className: 'operate-btn',
                                  onClick: this.onCopyBtnEvent,
                                }),
                              ),
                              a.createElement(
                                x.Tooltip,
                                { title: '高级设置1' },
                                a.createElement(Ie.SettingOutlined, {
                                  className: 'operate-btn',
                                  onClick: function () {
                                    e.setState({ showAdvanceConfig: !0 });
                                  },
                                }),
                              ),
                              a.createElement(
                                x.Tooltip,
                                { title: '按住进行拖拽' },
                                a.createElement(Ie.DragOutlined, {
                                  className: 'operate-btn drag-btn',
                                }),
                              ),
                            ),
                        ),
                      h &&
                        a.createElement(
                          'div',
                          { className: 'operate-item' },
                          a.createElement(
                            x.Tooltip,
                            { title: '高级设置2' },
                            a.createElement(Ie.SettingOutlined, {
                              className: 'operate-btn',
                              onClick: function () {
                                e.setState({ showAdvanceConfig: !0 });
                              },
                            }),
                          ),
                        ),
                      c &&
                        a.createElement(
                          x.Modal,
                          {
                            visible: !0,
                            title:
                              '高级设置 / 当前字段：' + s.title + '(' + r + ')',
                            onCancel: function () {
                              e.setState({ showAdvanceConfig: !1 });
                            },
                            footer: [
                              a.createElement(
                                x.Button,
                                {
                                  key: 'submit',
                                  type: 'primary',
                                  onClick: function () {
                                    e.setState({ showAdvanceConfig: !1 });
                                  },
                                },
                                '保存并关闭',
                              ),
                            ],
                          },
                          a.createElement(Ve, {
                            indexRoute: o,
                            jsonKey: r,
                            targetJsonSchema: s,
                          }),
                        ),
                    ),
                  !s &&
                    a.createElement(
                      'div',
                      { className: 'base-schema-box' },
                      a.createElement(
                        'div',
                        { className: 'warn-text' },
                        r,
                        '：数据元素为空',
                      ),
                    ),
                );
              }),
              n
            );
          })(a.PureComponent);
        Fe.propTypes = {
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
        var qe = (0, c.inject)(function (e) {
            return {
              SchemaTypeList: e.jsonSchemaStore.SchemaTypeList,
              getNewJsonKeyIndex: e.jsonSchemaStore.getNewJsonKeyIndex,
              deleteJsonByIndex_CurKey:
                e.jsonSchemaStore.deleteJsonByIndex_CurKey,
              getSchemaByIndexRoute: e.jsonSchemaStore.getSchemaByIndexRoute,
              indexRoute2keyRoute: e.jsonSchemaStore.indexRoute2keyRoute,
              addChildJson: e.jsonSchemaStore.addChildJson,
              addNextJsonData: e.jsonSchemaStore.addNextJsonData,
              insertJsonData: e.jsonSchemaStore.insertJsonData,
              childElemSort: e.jsonSchemaStore.childElemSort,
              editSchemaData: e.jsonSchemaStore.editSchemaData,
              editJsonKey: e.jsonSchemaStore.editJsonKey,
              changeType: e.jsonSchemaStore.changeType,
              isExitJsonKey: e.jsonSchemaStore.isExitJsonKey,
            };
          })((0, c.observer)(Fe)),
          Ae = x.Tree.TreeNode,
          _e = function (e) {
            return r().createElement(qe, e);
          },
          Me = function (e) {
            var t = e.jsonKey,
              n = e.indexRoute,
              o = e.nodeKey,
              a = e.targetJsonSchema,
              i = a.type,
              s = n ? n + '-0' : '0',
              c = 'items',
              l = o ? o + '-' + c : c,
              d = a[c] || {};
            return r().createElement(
              Ae,
              {
                className: i + '-schema schema-item-form',
                id: o,
                key: o,
                indexRoute: n,
                jsonKey: t,
                title: _e(u()({}, e)),
              },
              (function (e) {
                var t = e.parentType,
                  n = e.jsonKey,
                  o = e.indexRoute,
                  a = e.nodeKey,
                  i = e.targetJsonSchema;
                return r().createElement(
                  Ae,
                  {
                    className: 'array-item-schema schema-item-form',
                    id: a,
                    key: a,
                    indexRoute: o,
                    jsonKey: n,
                    disabled: !0,
                    title: _e({
                      indexRoute: o,
                      jsonKey: n,
                      targetJsonSchema: i,
                      parentType: t,
                      nodeKey: a,
                      isFixed: !0,
                      typeIsFixed: !1,
                    }),
                  },
                  'object' === i.type &&
                    (function (e) {
                      var t = e.properties,
                        n = e.parentIndexRoute,
                        o = e.parentNodeKey,
                        a = e.parentType;
                      return e.propertyOrder.map(function (e, r) {
                        var i = n ? n + '-' + r : '' + r,
                          s = e,
                          c = t[s],
                          l = c.type,
                          d = (o ? o + '-' : '') + l + '-' + s;
                        return pt({
                          parentType: a,
                          jsonKey: s,
                          indexRoute: i,
                          key: d,
                          nodeKey: d,
                          targetJsonSchema: c,
                        });
                      });
                    })({
                      propertyOrder: i.propertyOrder,
                      properties: i.properties,
                      parentIndexRoute: o,
                      parentNodeKey: a,
                      parentType: t,
                    }),
                );
              })({
                parentType: 'array',
                jsonKey: c,
                indexRoute: s,
                nodeKey: l,
                targetJsonSchema: d,
              }),
            );
          },
          He = (n(894), x.Select.Option),
          ze = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).typeHandleChange = function (e) {
                  var t = n.props,
                    o = t.indexRoute,
                    a = t.jsonKey,
                    r = t.targetJsonSchema,
                    i = t.typeSelectData,
                    s = t.editSchemaData,
                    c = t.updateSchemaData;
                  if (r.default !== e) {
                    if ((s(o, a, { default: e }), i)) {
                      var l = i[e];
                      l &&
                        '数据源类型' === r.title &&
                        s((0, Ce.getNextIndexRoute)(o), 'data', l);
                    }
                    if (Ce.EventTypeDataList) {
                      var d = Ce.EventTypeDataList[e];
                      '事件类型' === r.title &&
                        d &&
                        c((0, Ce.getParentIndexRoute)(o), d);
                    }
                  }
                }),
                (n.typeHandleChange = n.typeHandleChange.bind(n)),
                n
              );
            }
            return (
              t()(n, e),
              (n.prototype.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  n = e.targetJsonSchema,
                  o = n.type,
                  r = n.enum || [],
                  i = n.enumextra || [];
                return a.createElement(
                  'div',
                  { className: 'typeSelect-schema-box', id: t },
                  a.createElement(
                    'div',
                    { className: 'key-input-item' },
                    a.createElement(
                      x.Select,
                      {
                        defaultValue: n.default || 'local',
                        onChange: this.typeHandleChange,
                      },
                      r.map(function (e, t) {
                        return a.createElement(He, { key: e, value: e }, i[t]);
                      }),
                    ),
                  ),
                  a.createElement(
                    'div',
                    { className: 'type-select-item' },
                    a.createElement(
                      x.Select,
                      { defaultValue: o, style: { width: 120 }, disabled: !0 },
                      a.createElement(He, { key: o, value: o }, o),
                    ),
                  ),
                  a.createElement(
                    'div',
                    { className: 'title-input-item' },
                    a.createElement(x.Input, {
                      defaultValue: n.title,
                      disabled: !0,
                    }),
                  ),
                  a.createElement('div', { className: 'operate-item' }, ' '),
                );
              }),
              n
            );
          })(a.PureComponent);
        ze.propTypes = {
          parentType: d().string,
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          typeSelectData: d().any,
          isFixed: d().any,
        };
        var Ge = (0, c.inject)(function (e) {
            return {
              editSchemaData: e.jsonSchemaStore.editSchemaData,
              updateSchemaData: e.jsonSchemaStore.updateSchemaData,
            };
          })((0, c.observer)(ze)),
          We = x.Tree.TreeNode,
          Ue = function (e) {
            return r().createElement(qe, e);
          },
          Qe = {
            local: {
              type: 'string',
              title: '本地json数据',
              format: 'json',
              default: '{}',
              placeholder: '请输入静态json数据',
              isRequired: !0,
              description: '用于设置本地的静态json数据',
            },
            remote: {
              type: 'string',
              title: '远程json数据',
              format: 'url',
              default: 'http://xxx',
              placeholder: '请输入远程json数据源地址',
              isRequired: !0,
              description: '用于设置获取元素数据的请求地址',
            },
          },
          Xe = x.Tree.TreeNode,
          Ye = function (e) {
            return r().createElement(qe, e);
          },
          Ze = x.Tree.TreeNode,
          $e = function (e) {
            return r().createElement(qe, e);
          },
          et = x.Tree.TreeNode,
          tt = function (e) {
            return r().createElement(qe, e);
          },
          nt = (n(617), x.Select.Option),
          ot = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleLabelChange = function (
                  e,
                ) {
                  var t = e.target.value,
                    o = n.props,
                    a = o.indexRoute,
                    r = o.optionIndex,
                    i = o.optionLabel,
                    s = o.isExitOptionLabel,
                    c = o.updateOptionLabel;
                  t !== i &&
                    (s(a, t)
                      ? x.message.warning(
                          '对不起，存在相同的Label值，请重新设置。',
                        )
                      : c(a, r, t));
                }),
                (n.handleValueChange = function (e) {
                  var t = e.target.value,
                    o = n.props,
                    a = o.indexRoute,
                    r = o.optionIndex,
                    i = o.optionValue,
                    s = o.updateOptionValue;
                  t !== i && s(a, r, t);
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    o = e.optionIndex;
                  (0, e.addOptionItem)(t, o);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    o = e.optionIndex;
                  (0, e.copyOptionItem)(t, o);
                }),
                (n.onDeleteBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    o = e.optionIndex,
                    a = e.getSchemaByIndexRoute,
                    r = e.deleteOptionItem,
                    i = a(t);
                  i.options && i.options.length > 1
                    ? r(t, o)
                    : x.message.warning('删除失败，至少保留一个可选项。');
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
              t()(n, e),
              (n.prototype.render = function () {
                var e = this.props,
                  t = e.optionLabel,
                  n = e.optionValue;
                return (
                  e.optionNodeKey,
                  a.createElement(
                    'div',
                    { className: 'option-schema-box', id: t },
                    a.createElement(
                      'div',
                      { className: 'key-input-item' },
                      a.createElement(x.Input, {
                        defaultValue: t,
                        onPressEnter: this.handleLabelChange,
                        onBlur: this.handleLabelChange,
                      }),
                    ),
                    a.createElement(
                      'div',
                      { className: 'type-select-item' },
                      a.createElement(
                        x.Select,
                        { defaultValue: 'string', style: { width: 120 } },
                        a.createElement(
                          nt,
                          { key: 'string', value: 'string' },
                          'string',
                        ),
                      ),
                    ),
                    a.createElement(
                      'div',
                      { className: 'title-input-item' },
                      a.createElement(x.Input, {
                        defaultValue: n,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                    a.createElement(
                      'div',
                      { className: 'operate-item' },
                      a.createElement(
                        x.Tooltip,
                        { title: '删除' },
                        a.createElement(Ie.CloseOutlined, {
                          className: 'operate-btn delete-operate',
                          onClick: this.onDeleteBtnEvent,
                        }),
                      ),
                      a.createElement(
                        x.Tooltip,
                        { title: '新增可选项' },
                        a.createElement(Ie.PlusOutlined, {
                          className: 'operate-btn',
                          onClick: this.onAddBtnEvent,
                        }),
                      ),
                      a.createElement(
                        x.Tooltip,
                        { title: '复制' },
                        a.createElement(Ie.CopyOutlined, {
                          className: 'operate-btn',
                          onClick: this.onCopyBtnEvent,
                        }),
                      ),
                    ),
                  )
                );
              }),
              n
            );
          })(a.PureComponent);
        ot.propTypes = {
          indexRoute: d().string,
          optionIndex: d().any,
          optionLabel: d().string,
          optionValue: d().string,
          optionNodeKey: d().string,
        };
        var at = (0, c.inject)(function (e) {
            return {
              getSchemaByIndexRoute: e.jsonSchemaStore.getSchemaByIndexRoute,
              updateOptionLabel: e.jsonSchemaStore.updateOptionLabel,
              updateOptionValue: e.jsonSchemaStore.updateOptionValue,
              isExitOptionLabel: e.jsonSchemaStore.isExitOptionLabel,
              deleteOptionItem: e.jsonSchemaStore.deleteOptionItem,
              addOptionItem: e.jsonSchemaStore.addOptionItem,
              copyOptionItem: e.jsonSchemaStore.copyOptionItem,
            };
          })((0, c.observer)(ot)),
          rt = x.Tree.TreeNode,
          it = function (e) {
            return r().createElement(at, e);
          },
          st = x.Tree.TreeNode,
          ct = function (e) {
            return r().createElement(at, e);
          },
          lt = x.Tree.TreeNode,
          dt = function (e) {
            return r().createElement(qe, e);
          },
          pt = function (e) {
            switch (e.targetJsonSchema.type) {
              case 'object':
              case 'func':
              case 'style':
              case 'data':
              case 'func-schema':
              case 'style-schema':
              case 'data-schema':
              case 'event-schema':
                return ht(e);
              case 'array':
                return Me(e);
              case 'datasource':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    o = e.indexRoute,
                    a = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = i.type,
                    c = i.properties.data || {};
                  return r().createElement(
                    We,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: Ue(u()({}, e)),
                    },
                    r().createElement(We, {
                      className: 'dataSource-type-item-schema schema-item-form',
                      id: a + '-type',
                      key: a + '-type',
                      indexRoute: o ? o + '-0' : '0',
                      jsonKey: 'type',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: o ? o + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: i.properties.type,
                          parentType: s,
                          nodeKey: a + '-type',
                          typeSelectData: Qe,
                        }),
                        r().createElement(Ge, t)),
                    }),
                    r().createElement(We, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: a + '-data-' + c.type,
                      key: a + '-data-' + c.type,
                      indexRoute: o ? o + '-1' : '1',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Ue({
                        indexRoute: o ? o + '-1' : '1',
                        jsonKey: 'data',
                        targetJsonSchema: c,
                        parentType: s,
                        nodeKey: a + '-data-' + c.type,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    r().createElement(We, {
                      className:
                        'dataSource-filter-item-schema schema-item-form',
                      id: a + '-filter',
                      key: a + '-filter',
                      indexRoute: o ? o + '-2' : '2',
                      jsonKey: 'filter',
                      disabled: !0,
                      title: Ue({
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'filter',
                        targetJsonSchema: i.properties.filter,
                        parentType: s,
                        nodeKey: a + '-filter',
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
                    o = e.indexRoute,
                    a = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = i.type,
                    c = i.properties.config || {},
                    l = i.properties.data || {};
                  return r().createElement(
                    Xe,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: Ye(u()({}, e)),
                    },
                    r().createElement(Xe, {
                      className: 'dataSource-type-item-schema schema-item-form',
                      id: a + '-type',
                      key: a + '-type',
                      indexRoute: o ? o + '-0' : '0',
                      jsonKey: 'type',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: o ? o + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: i.properties.type,
                          parentType: s,
                          nodeKey: a + '-type',
                        }),
                        r().createElement(Ge, t)),
                    }),
                    r().createElement(Xe, {
                      className:
                        'dataSource-config-item-schema schema-item-form',
                      id: a + '-config-' + l.type,
                      key: a + '-config-' + l.type,
                      indexRoute: o ? o + '-1' : '1',
                      jsonKey: 'config',
                      disabled: !0,
                      title: Ye({
                        indexRoute: o ? o + '-1' : '1',
                        jsonKey: 'config',
                        targetJsonSchema: c,
                        parentType: s,
                        nodeKey: a + '-config-' + c.type,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    r().createElement(Xe, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: a + '-data-' + l.type,
                      key: a + '-data-' + l.type,
                      indexRoute: o ? o + '-2' : '2',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Ye({
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'data',
                        targetJsonSchema: l,
                        parentType: s,
                        nodeKey: a + '-data-' + l.type,
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
                    o = e.indexRoute,
                    a = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = i.type,
                    c = i.properties.type || {},
                    l = i.properties.register || {},
                    d = i.properties.actionFunc || {},
                    p = i.properties.trigger || {},
                    m = i.properties.eventData || {};
                  return r().createElement(
                    Ze,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: $e(u()({}, e)),
                    },
                    r().createElement(Ze, {
                      className: 'event-type-item-schema schema-item-form',
                      id: a + '-type',
                      key: a + '-type',
                      indexRoute: o ? o + '-0' : '0',
                      jsonKey: 'type',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: o ? o + '-0' : '0',
                          jsonKey: 'type',
                          targetJsonSchema: c,
                          parentType: s,
                          nodeKey: a + '-type',
                        }),
                        r().createElement(Ge, t)),
                    }),
                    'on' === c.default &&
                      l &&
                      r().createElement(Ze, {
                        className:
                          'event-register-item-schema schema-item-form',
                        id: a + '-register-' + c.default,
                        key: a + '-register-' + c.default,
                        indexRoute: o ? o + '-1' : '1',
                        jsonKey: 'register',
                        disabled: !0,
                        title: $e({
                          indexRoute: o ? o + '-1' : '1',
                          jsonKey: 'register',
                          targetJsonSchema: l,
                          parentType: s,
                          nodeKey: a + '-register-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'on' === c.default &&
                      d &&
                      r().createElement(Ze, {
                        className:
                          'event-actionFunc-item-schema schema-item-form',
                        id: a + '-actionFunc-' + c.default,
                        key: a + '-actionFunc-' + c.default,
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'actionFunc',
                        disabled: !0,
                        title: $e({
                          indexRoute: o ? o + '-2' : '2',
                          jsonKey: 'actionFunc',
                          targetJsonSchema: d,
                          parentType: s,
                          nodeKey: a + '-actionFunc-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'emit' === c.default &&
                      p &&
                      r().createElement(Ze, {
                        className: 'event-trigger-item-schema schema-item-form',
                        id: a + '-trigger-' + c.default,
                        key: a + '-trigger-' + c.default,
                        indexRoute: o ? o + '-1' : '1',
                        jsonKey: 'trigger',
                        disabled: !0,
                        title: $e({
                          indexRoute: o ? o + '-1' : '1',
                          jsonKey: 'trigger',
                          targetJsonSchema: p,
                          parentType: s,
                          nodeKey: a + '-trigger-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'emit' === c.default &&
                      m &&
                      r().createElement(Ze, {
                        className:
                          'event-eventData-item-schema schema-item-form',
                        id: a + '-eventData-' + c.default,
                        key: a + '-eventData-' + c.default,
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'eventData',
                        disabled: !0,
                        title: $e({
                          indexRoute: o ? o + '-2' : '2',
                          jsonKey: 'eventData',
                          targetJsonSchema: m,
                          parentType: s,
                          nodeKey: a + '-eventData-' + c.default,
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
                    o = e.indexRoute,
                    a = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = i.type,
                    c = i.propertyOrder[0],
                    l = i.properties[c];
                  return r().createElement(
                    et,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: tt(u()({}, e)),
                    },
                    r().createElement(et, {
                      className: 'quantity-unit-item-schema schema-item-form',
                      id: a + '-' + c,
                      key: a + '-' + c,
                      indexRoute: o ? o + '-0' : '0',
                      jsonKey: c,
                      disabled: !0,
                      title: tt({
                        indexRoute: o ? o + '-0' : '0',
                        jsonKey: c,
                        targetJsonSchema: l,
                        parentType: s,
                        nodeKey: a + '-' + c,
                        hideOperaBtn: !0,
                        showAdvanceBtn: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    r().createElement(et, {
                      className:
                        'quantity-typeSelect-item-schema schema-item-form',
                      id: a + '-quantity',
                      key: a + '-quantity',
                      indexRoute: o ? o + '-1' : '1',
                      jsonKey: 'quantity',
                      disabled: !0,
                      title:
                        ((t = {
                          indexRoute: o ? o + '-1' : '1',
                          jsonKey: 'quantity',
                          targetJsonSchema: i.properties.quantity,
                          parentType: s,
                          nodeKey: a + '-quantity',
                        }),
                        r().createElement(Ge, t)),
                    }),
                  );
                })(e);
              case 'radio':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    o = e.indexRoute,
                    a = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = i.type,
                    c = i.options,
                    l = o || '0';
                  return r().createElement(
                    rt,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: ((t = u()({}, e)), r().createElement(qe, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = e.label || e.name,
                          o = e.value,
                          i = '' + a + s + '-' + n;
                        return r().createElement(rt, {
                          className: 'enum-item-schema schema-item-form',
                          id: i,
                          key: i,
                          indexRoute: l,
                          disabled: !0,
                          title: it({
                            indexRoute: l,
                            optionIndex: t,
                            optionLabel: n,
                            optionValue: o,
                            optionNodeKey: i,
                          }),
                        });
                      }),
                  );
                })(e);
              case 'single-select':
              case 'select':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    o = e.indexRoute,
                    a = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = i.type,
                    c = i.options,
                    l = o || '0';
                  return r().createElement(
                    st,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: ((t = u()({}, e)), r().createElement(qe, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = e.label || e.name,
                          o = e.value,
                          i = '' + a + s + '-' + n;
                        return r().createElement(st, {
                          className: 'enum-item-schema schema-item-form',
                          id: i,
                          key: i,
                          indexRoute: l,
                          disabled: !0,
                          title: ct({
                            indexRoute: l,
                            optionIndex: t,
                            optionLabel: n,
                            optionValue: o,
                            optionNodeKey: i,
                          }),
                        });
                      }),
                  );
                })(e);
              default:
                return (function (e) {
                  var t = e.jsonKey,
                    n = e.indexRoute,
                    o = e.nodeKey,
                    a = e.targetJsonSchema.type;
                  return r().createElement(lt, {
                    className: a + '-schema schema-item-form',
                    id: o,
                    key: o,
                    indexRoute: n,
                    jsonKey: t,
                    title: dt(e),
                  });
                })(e);
            }
          },
          ut = x.Tree.TreeNode,
          mt = function (e) {
            return r().createElement(qe, e);
          },
          ht = function (e) {
            var t,
              n,
              o,
              a,
              i,
              s = e.jsonKey,
              c = e.indexRoute,
              l = e.nodeKey,
              d = e.targetJsonSchema,
              p = e.isOnlyShowChild,
              m = d.type,
              h = d.isFixed,
              y =
                ((t = {
                  propertyOrder: d.propertyOrder,
                  properties: d.properties,
                  parentIndexRoute: c,
                  parentNodeKey: l,
                  parentType: m,
                  isOnlyShowChild: p,
                }),
                (n = t.properties),
                (o = t.parentIndexRoute),
                (a = t.parentNodeKey),
                (i = t.parentType),
                t.propertyOrder.map(function (e, t) {
                  var r = o ? o + '-' + t : '' + t,
                    s = e,
                    c = n[s],
                    l = c.type,
                    d = (a ? a + '-' : '') + l + '-' + s;
                  return pt({
                    parentType: i,
                    jsonKey: s,
                    indexRoute: r,
                    key: d,
                    nodeKey: d,
                    targetJsonSchema: c,
                  });
                })),
              g = r().createElement(
                ut,
                {
                  className: m + '-schema schema-item-form',
                  id: l,
                  key: l,
                  indexRoute: c,
                  jsonKey: s,
                  disabled: h,
                  title: mt(u()({}, e)),
                },
                y,
              );
            return p ? y : g;
          },
          yt =
            (n(797),
            (0, c.inject)(function (e) {
              return {
                jsonSchema: e.jsonSchemaStore.jsonSchema,
                removeConditionProp: e.jsonSchemaStore.removeConditionProp,
                cancelConditionProp: e.jsonSchemaStore.cancelConditionProp,
              };
            })(
              (0, c.observer)(function (e) {
                var t = e.jsonSchema,
                  n = e.removeConditionProp,
                  o = e.cancelConditionProp,
                  a = {};
                t.conditionProps && (a = t.conditionProps);
                var i = Object.keys(a);
                return 0 === i.length
                  ? ''
                  : r().createElement(
                      'div',
                      { className: 'condition-props-box' },
                      r().createElement(
                        'div',
                        { className: 'title' },
                        r().createElement(
                          x.Tooltip,
                          {
                            title: '其他字段可根据条件字段的数值设置规则联动',
                            placement: 'top',
                          },
                          '条件字段:',
                        ),
                      ),
                      r().createElement(
                        'div',
                        { className: 'tags-box' },
                        i.map(function (e) {
                          var t = a[e];
                          return r().createElement(
                            x.Tag,
                            {
                              key: t.keyRoute,
                              color: 'geekblue',
                              closable: !0,
                              onClose: function () {
                                n(t.keyRoute), o(t.keyRoute, t.key);
                              },
                            },
                            t.key,
                            '(',
                            t.title,
                            ')',
                          );
                        }),
                      ),
                    );
              }),
            )),
          gt =
            (n(23),
            (function (e) {
              function n(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).onDragStart = function (e) {
                    (0, n.props.getSchemaByIndexRoute)(e.node.indexRoute)
                      .isFixed && x.message.warning('当前元素不支持拖拽哦。');
                  }),
                  (n.onDrop = function (e) {
                    var t = e.dragNode,
                      o = e.node,
                      a = n.props,
                      r = a.getSchemaByIndexRoute,
                      i = a.indexRoute2keyRoute,
                      s = a.insertJsonData,
                      c = a.deleteJsonByIndex,
                      l = a.isExitJsonKey,
                      d = a.isSupportCurType,
                      p = t.indexRoute,
                      u = t.jsonKey,
                      m = r(p);
                    if (!m.isFixed) {
                      var h = o.indexRoute,
                        y = (0, Ce.isSameParent)(p, h),
                        g = (0, Ce.getCurPosition)(p, h);
                      if (y)
                        c(p, !0),
                          'before' === g && (h = (0, Ce.moveForward)(h)),
                          o.dragOverGapTop
                            ? s(h, u, m, 'before')
                            : (o.dragOver || o.dragOverGapBottom) && s(h, u, m);
                      else {
                        if (l(h, u))
                          return void x.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var f = m.type;
                        if (!d(h, f))
                          return void x.message.warning(
                            '目标位置不支持' + f + '类型元素',
                          );
                        var S = i(p),
                          v = (0, Ce.getParentIndexRoute)(h),
                          b = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(S + '-' + f);
                        j(i(v) + '-' + u + '-' + f, b || S),
                          o.dragOverGapTop
                            ? 'after' === g
                              ? (c(p, !0), s(h, u, m, 'before'))
                              : (s(h, u, m, 'before', !0), c(p))
                            : (o.dragOver || o.dragOverGapBottom) &&
                              ('after' === g
                                ? (c(p, !0), s(h, u, m))
                                : (s(h, u, m, '', !0), c(p)));
                      }
                    }
                  }),
                  (n.catchExpandedKeys = function (e) {
                    var t = [];
                    return (
                      e &&
                        e.propertyOrder &&
                        e.properties &&
                        e.propertyOrder.map(function (n, o) {
                          var a = n,
                            r = e.properties[a].type + '-' + a;
                          t.push(r);
                        }),
                      t
                    );
                  }),
                  t.data && n.props.initJSONSchemaData(t.data),
                  t.onChange && n.props.initOnChange(t.onChange),
                  t.typeList && n.props.initSchemaTypeList(t.typeList),
                  n
                );
              }
              t()(n, e);
              var o = n.prototype;
              return (
                (o.componentWillReceiveProps = function (e) {
                  E(e.data, this.props.data) ||
                    this.props.initJSONSchemaData(e.data),
                    E(e.onChange, this.props.onChange) ||
                      this.props.initOnChange(e.onChange),
                    E(e.typeList, this.props.typeList) ||
                      this.props.initSchemaTypeList(e.typeList);
                }),
                (o.render = function () {
                  var e = this.props.jsonSchema,
                    t = (0, Ce.isEmptySchema)(e),
                    n = e.type;
                  return a.createElement(
                    'div',
                    { className: 'json-schema-container' },
                    !t &&
                      a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(yt, null),
                        a.createElement(
                          x.Tree,
                          {
                            draggable: !0,
                            selectable: !1,
                            onDragStart: this.onDragStart,
                            onDrop: this.onDrop,
                            defaultExpandedKeys:
                              'object' !== n || t
                                ? []
                                : this.catchExpandedKeys(e),
                          },
                          'object' === n &&
                            ht({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: '',
                              targetJsonSchema: e,
                              isOnlyShowChild: !0,
                            }),
                          'object' !== n &&
                            pt({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: 'first-schema',
                              targetJsonSchema: e,
                              key: 'schema',
                              isFirstSchema: !0,
                            }),
                        ),
                      ),
                    t &&
                      a.createElement(
                        'p',
                        { className: 'json-schema-empty' },
                        '当前jsonSchema没有数据内容',
                      ),
                  );
                }),
                n
              );
            })(a.PureComponent));
        gt.propTypes = {
          onChange: d().func,
          data: d().object,
          typeList: d().object,
        };
        var ft = (0, c.inject)(function (e) {
            return {
              jsonSchema: e.jsonSchemaStore.jsonSchema,
              initJSONSchemaData: e.jsonSchemaStore.initJSONSchemaData,
              initOnChange: e.jsonSchemaStore.initOnChange,
              initSchemaTypeList: e.jsonSchemaStore.initSchemaTypeList,
              setPageScreen: e.jsonSchemaStore.setPageScreen,
              getSchemaByIndexRoute: e.jsonSchemaStore.getSchemaByIndexRoute,
              indexRoute2keyRoute: e.jsonSchemaStore.indexRoute2keyRoute,
              insertJsonData: e.jsonSchemaStore.insertJsonData,
              deleteJsonByIndex: e.jsonSchemaStore.deleteJsonByIndex,
              isExitJsonKey: e.jsonSchemaStore.isExitJsonKey,
              isSupportCurType: e.jsonSchemaStore.isSupportCurType,
            };
          })((0, c.observer)(gt)),
          St = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  jsonSchemaStore: new Ne.jsonSchemaStore(),
                }),
                n
              );
            }
            return (
              t()(n, e),
              (n.prototype.render = function () {
                var e = this.props,
                  t = e.data,
                  n = e.typeList,
                  o = e.onChange,
                  r = e.element,
                  i = e.wideScreen,
                  l = this.state.jsonSchemaStore,
                  d = a.createElement(
                    c.Provider,
                    { jsonSchemaStore: l },
                    a.createElement(ft, {
                      data: t,
                      typeList: n,
                      onChange: o,
                      wideScreen: i,
                    }),
                  );
                return r ? (s().render(d, r), '') : d;
              }),
              n
            );
          })(a.PureComponent);
        St.propTypes = {
          wideScreen: d().any,
          onChange: d().func,
          data: d().any,
          typeList: d().any,
          element: d().any,
        };
      })(),
      o
    );
  })();
});
