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
        707: function () {},
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
        790: function (e, t, n) {
          var o = n(707);
          o.__esModule && (o = o.default),
            'string' == typeof o && (o = [[e.id, o, '']]),
            o.locals && (e.exports = o.locals),
            (0, n(611).A)('2b121068', o, !1, { sourceMap: !1 });
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
              return ft;
            },
          });
        var e,
          t = require('@babel/runtime/helpers/inheritsLoose'),
          a = n.n(t),
          r = require('react'),
          i = n.n(r),
          s = require('react-dom'),
          c = n.n(s),
          l = require('mobx-react'),
          d = require('prop-types'),
          p = n.n(d),
          u = require('@babel/runtime/helpers/extends'),
          m = n.n(u),
          h = require('@babel/runtime/helpers/initializerDefineProperty'),
          y = n.n(h),
          g = require('@babel/runtime/helpers/createClass'),
          f = n.n(g),
          S = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          v = n.n(S),
          x =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            require('mobx')),
          b = require('antd');
        function E(e) {
          var t = JSON.stringify(e);
          return JSON.parse(t);
        }
        function C(e, t) {
          return JSON.stringify(e) === JSON.stringify(t);
        }
        function j(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var O,
          R,
          N,
          I,
          k,
          K,
          w,
          P,
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
          be,
          Ee = [
            'input',
            'boolean',
            'number',
            'color',
            'url',
            'textarea',
            'radio',
            'select',
            'checkboxes',
            'date',
            'date-time',
            'time',
          ],
          Ce = ['object'].concat(['datasource', 'event', 'dynamic-data']),
          je = [
            'quantity',
            'box-style',
            'text-editor',
            'json',
            'codearea',
            'htmlarea',
            'array',
          ].concat(Ce),
          Oe = [].concat(Ee, je),
          Re = ['string'],
          Ne =
            (((e = {
              object: Oe,
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
              radio: Re,
              select: Re,
            }).select = ['string']),
            (e.all = Oe),
            e),
          Ie = require('@wibetter/json-utils'),
          ke = Ie.TypeDataList.jsonschema,
          Ke = Ie.TypeDataList.input,
          we = {
            jsonSchemaStore:
              ((O = x.action.bound),
              (R = x.action.bound),
              (N = x.action.bound),
              (I = x.action.bound),
              (k = x.action.bound),
              (K = x.action.bound),
              (w = x.action.bound),
              (P = x.action.bound),
              (J = x.action.bound),
              (D = x.action.bound),
              (T = x.action.bound),
              (B = x.action.bound),
              (V = x.action.bound),
              (L = x.action.bound),
              (F = x.action.bound),
              (q = x.action.bound),
              (A = x.action.bound),
              (_ = x.action.bound),
              (M = x.action.bound),
              (H = x.action.bound),
              (z = x.action.bound),
              (G = x.action.bound),
              (W = x.action.bound),
              (U = x.action.bound),
              (Q = x.action.bound),
              (X = x.action.bound),
              (Y = x.action.bound),
              (Z = x.action.bound),
              ($ = x.action.bound),
              (ee = x.action.bound),
              (te = x.action.bound),
              (ne = x.action.bound),
              (oe = x.action.bound),
              (ae = x.action.bound),
              (re = x.action.bound),
              (ie = x.action.bound),
              (se = x.action.bound),
              (ce = x.action.bound),
              (le = x.action.bound),
              (de = x.action.bound),
              (pe = x.action.bound),
              (ue = x.action.bound),
              (me = x.action.bound),
              (he = x.action.bound),
              (ye = x.action.bound),
              (ge = (function () {
                function e() {
                  (this.curJsonKeyIndex = 1),
                    y()(this, 'triggerChange', fe, this),
                    y()(this, 'jsonSchema', Se, this),
                    y()(this, 'SchemaTypeList', ve, this),
                    y()(this, 'onChange', xe, this),
                    y()(this, 'childElemSort', be, this);
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
                        if (e && (0, Ie.isNewSchemaData)(e))
                          this.jsonSchema = e;
                        else {
                          var t = (0, Ie.oldSchemaToNewSchema)(e);
                          this.jsonSchema = t;
                        }
                    } else this.jsonSchema = E(ke);
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
                    return (0, Ie.indexRoute2keyRoute)(e, this.jsonSchema);
                  }),
                  (t.keyRoute2indexRoute = function (e) {
                    return (0, Ie.keyRoute2indexRoute)(e, this.jsonSchema);
                  }),
                  (t.getSchemaByIndexRoute = function (e) {
                    return (0, Ie.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                  }),
                  (t.getSchemaByKeyRoute = function (e) {
                    return (0, Ie.getSchemaByKeyRoute)(e, this.jsonSchema, !0);
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
                    var n = (0, Ie.getParentIndexRoute)(e),
                      o = this.getSchemaByIndexRoute(n);
                    return (
                      !!(o.propertyOrder && o.propertyOrder.indexOf(t) >= 0) ||
                      (Ie.KeyWordList &&
                        Ie.KeyWordList.indexOf(t) >= 0 &&
                        b.message.warning(
                          t +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      !1)
                    );
                  }),
                  (t.isSupportCurType = function (e, t) {
                    var n = (0, Ie.getParentIndexRoute)(e),
                      o = this.getSchemaByIndexRoute(n),
                      a = this.SchemaTypeList[o.type];
                    return !!(a && a.indexOf(t) >= 0);
                  }),
                  (t.addChildJson = function (e, t) {
                    var n = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if ((0, Ie.isContainerSchema)(n)) {
                      var o = this.getNewJsonKeyIndex(n);
                      n.propertyOrder.push(o),
                        (n.properties[o] = Ke),
                        this.jsonSchemaChange(t);
                    } else b.message.warning('非对象类型字段不允许插入子元素');
                  }),
                  (t.changeType = function (e, t, n, o) {
                    var a = (0, Ie.getParentIndexRoute)(e),
                      r = (0, Ie.getSchemaByIndexRoute)(a, this.jsonSchema);
                    r.properties && r.properties[t]
                      ? (r.properties[t] = E(n))
                      : r[t] && (r[t] = E(n)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.updateSchemaData = function (e, t, n) {
                    var o = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    Object.assign(o, E(t)), this.jsonSchemaChange(n);
                  }),
                  (t.editSchemaData = function (e, t, n, o) {
                    var a = (0, Ie.getParentIndexRoute)(e),
                      r = (0, Ie.getSchemaByIndexRoute)(a, this.jsonSchema);
                    (r.properties[t] = m()({}, E(r.properties[t]), n)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.editJsonKey = function (e, t, n) {
                    var o = (0, Ie.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                    this.insertJsonData(e, t, o, '', !0),
                      this.deleteJsonByIndex(e, !0),
                      this.jsonSchemaChange(n);
                  }),
                  (t.addNextJsonData = function (e) {
                    var t = (0, Ie.getParentIndexRoute)(e),
                      n = (0, Ie.getSchemaByIndexRoute)(t, this.jsonSchema),
                      o = this.getNewJsonKeyIndex(n);
                    this.insertJsonData(e, o, Ke);
                  }),
                  (t.insertJsonData = function (e, t, n, o, a) {
                    var r = (0, Ie.getParentIndexRoute_CurIndex)(e),
                      i = r[0],
                      s = r[1],
                      c = (0, Ie.getSchemaByIndexRoute)(i, this.jsonSchema);
                    c.properties[t] = n;
                    var l = c.propertyOrder,
                      d = 'before' === o ? Number(s) : Number(s) + 1,
                      p = l.slice(0, d),
                      u = l.slice(d);
                    (c.propertyOrder = [].concat(p, [t], u)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteJsonByIndex_CurKey = function (e, t, n) {
                    var o = (0, Ie.getParentIndexRoute)(e),
                      a = (0, Ie.getSchemaByIndexRoute)(o, this.jsonSchema);
                    delete a.properties[t];
                    var r = a.propertyOrder.indexOf(t);
                    a.propertyOrder.splice(r, 1), this.jsonSchemaChange(n);
                  }),
                  (t.deleteJsonByIndex = function (e, t) {
                    var n = (0, Ie.getParentIndexRoute_CurIndex)(e),
                      o = n[0],
                      a = n[1],
                      r = (0, Ie.getSchemaByIndexRoute)(o, this.jsonSchema),
                      i = r.propertyOrder[a];
                    delete r.properties[i];
                    var s = r.propertyOrder.indexOf(i);
                    r.propertyOrder.splice(s, 1), this.jsonSchemaChange(t);
                  }),
                  (t.updateEnumItem = function (e, t, n, o, a) {
                    var r = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.enum &&
                      r.enumextra &&
                      ((r.enum[t] = n), (r.enumextra[t] = o)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.isExitEnumKey = function (e, t, n) {
                    var o = !1,
                      a = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (a.enum) {
                      var r = E(a.enum);
                      t >= 0 && r.splice(t, 1), r.indexOf(n) >= 0 && (o = !0);
                    }
                    return (
                      Ie.KeyWordList &&
                        Ie.KeyWordList.indexOf(n) >= 0 &&
                        b.message.warning(
                          n +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      o
                    );
                  }),
                  (t.updateEnumKey = function (e, t, n, o) {
                    var a = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enum && (a.enum[t] = n), this.jsonSchemaChange(o);
                  }),
                  (t.updateEnumText = function (e, t, n, o) {
                    var a = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enumextra && (a.enumextra[t] = n),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteEnumItem = function (e, t, n) {
                    var o = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enum &&
                      o.enumextra &&
                      (o.enum.splice(t, 1), o.enumextra.splice(t, 1)),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertEnumItem = function (e, t, n, o, a, r) {
                    var i = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
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
                    var n = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var o = this.getNewEnumIndex(n.enum),
                        a = '选项' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, o, a);
                    }
                  }),
                  (t.copyEnumItem = function (e, t) {
                    var n = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var o = n.enum[t],
                        a = n.enumextra[t],
                        r = this.getNewEnumIndex(n.enum, o),
                        i = a + '_' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, r, i);
                    }
                  }),
                  (t.updateOptionItem = function (e, t, n, o, a) {
                    var r = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.options &&
                      r.options[t] &&
                      ((r.options[t].label = n), (r.options[t].value = o)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.isExitOptionLabel = function (e, t) {
                    var n = !1,
                      o = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    return (
                      o.options &&
                        o.options.find(function (e) {
                          return e.label === t || e.name === t;
                        }) &&
                        (n = !0),
                      Ie.KeyWordList &&
                        Ie.KeyWordList.indexOf(t) >= 0 &&
                        b.message.warning(
                          t + '是JSONSchema的保留关键字，建议您换一个名称。',
                        ),
                      n
                    );
                  }),
                  (t.updateOptionLabel = function (e, t, n, o) {
                    var a = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.options && a.options[t] && (a.options[t].label = n),
                      this.jsonSchemaChange(o);
                  }),
                  (t.updateOptionValue = function (e, t, n, o) {
                    var a = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.options && a.options[t] && (a.options[t].value = n),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteOptionItem = function (e, t, n) {
                    var o = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.options && o.options[t] && o.options.splice(t, 1),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertOption = function (e, t, n, o, a, r) {
                    var i = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
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
                    var n = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.options) {
                      var o = this.getNewOptionValue(n.options),
                        a = '选项' + (n.options.length + 1);
                      this.insertOption(e, t, a, o);
                    }
                  }),
                  (t.copyOptionItem = function (e, t) {
                    var n = (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema);
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
                    } else b.message.error('当前schema为空');
                  }),
                  (t.removeConditionProp = function (e) {
                    if (this.jsonSchema) {
                      this.jsonSchema.conditionProps ||
                        (this.jsonSchema.conditionProps = {});
                      var t = this.jsonSchema.conditionProps;
                      e && t[e] && (delete t[e], this.jsonSchemaChange());
                    } else b.message.error('当前schema为空');
                  }),
                  (t.cancelConditionProp = function (e, t) {
                    if (this.jsonSchema) {
                      var n = this.getSchemaByKeyRoute(e);
                      n.isConditionProp = !1;
                      var o = this.keyRoute2indexRoute(e);
                      this.editSchemaData(o, t, n);
                    } else b.message.error('当前schema为空');
                  }),
                  (t.deleteSchemaProp = function (e, t, n) {
                    delete (0, Ie.getSchemaByIndexRoute)(e, this.jsonSchema)[t],
                      this.jsonSchemaChange(n);
                  }),
                  f()(e, [
                    {
                      key: 'JSONSchemaObj',
                      get: function () {
                        return (0, x.toJS)(this.jsonSchema);
                      },
                    },
                  ])
                );
              })()),
              (fe = v()(ge.prototype, 'triggerChange', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (Se = v()(ge.prototype, 'jsonSchema', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return {};
                },
              })),
              (ve = v()(ge.prototype, 'SchemaTypeList', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return Ne;
                },
              })),
              (xe = v()(ge.prototype, 'onChange', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return function () {};
                },
              })),
              v()(
                ge.prototype,
                'triggerChangeAction',
                [O],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'triggerChangeAction',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'initSchemaTypeList',
                [R],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'initSchemaTypeList',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'initJSONSchemaData',
                [N],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'initJSONSchemaData',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'JSONSchemaObj',
                [x.computed],
                Object.getOwnPropertyDescriptor(ge.prototype, 'JSONSchemaObj'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'initOnChange',
                [I],
                Object.getOwnPropertyDescriptor(ge.prototype, 'initOnChange'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'jsonSchemaChange',
                [k],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'jsonSchemaChange',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'indexRoute2keyRoute',
                [K],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'indexRoute2keyRoute',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'keyRoute2indexRoute',
                [w],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'keyRoute2indexRoute',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'getSchemaByIndexRoute',
                [P],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'getSchemaByIndexRoute',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'getSchemaByKeyRoute',
                [J],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'getSchemaByKeyRoute',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'getNewJsonKeyIndex',
                [D],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'getNewJsonKeyIndex',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'isExitJsonKey',
                [T],
                Object.getOwnPropertyDescriptor(ge.prototype, 'isExitJsonKey'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'isSupportCurType',
                [B],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'isSupportCurType',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'addChildJson',
                [V],
                Object.getOwnPropertyDescriptor(ge.prototype, 'addChildJson'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'changeType',
                [L],
                Object.getOwnPropertyDescriptor(ge.prototype, 'changeType'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateSchemaData',
                [F],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'updateSchemaData',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'editSchemaData',
                [q],
                Object.getOwnPropertyDescriptor(ge.prototype, 'editSchemaData'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'editJsonKey',
                [A],
                Object.getOwnPropertyDescriptor(ge.prototype, 'editJsonKey'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'addNextJsonData',
                [_],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'addNextJsonData',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'insertJsonData',
                [M],
                Object.getOwnPropertyDescriptor(ge.prototype, 'insertJsonData'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'deleteJsonByIndex_CurKey',
                [H],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'deleteJsonByIndex_CurKey',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'deleteJsonByIndex',
                [z],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'deleteJsonByIndex',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateEnumItem',
                [G],
                Object.getOwnPropertyDescriptor(ge.prototype, 'updateEnumItem'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'isExitEnumKey',
                [W],
                Object.getOwnPropertyDescriptor(ge.prototype, 'isExitEnumKey'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateEnumKey',
                [U],
                Object.getOwnPropertyDescriptor(ge.prototype, 'updateEnumKey'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateEnumText',
                [Q],
                Object.getOwnPropertyDescriptor(ge.prototype, 'updateEnumText'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'deleteEnumItem',
                [X],
                Object.getOwnPropertyDescriptor(ge.prototype, 'deleteEnumItem'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'insertEnumItem',
                [Y],
                Object.getOwnPropertyDescriptor(ge.prototype, 'insertEnumItem'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'getNewEnumIndex',
                [Z],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'getNewEnumIndex',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'addEnumItem',
                [$],
                Object.getOwnPropertyDescriptor(ge.prototype, 'addEnumItem'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'copyEnumItem',
                [ee],
                Object.getOwnPropertyDescriptor(ge.prototype, 'copyEnumItem'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateOptionItem',
                [te],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'updateOptionItem',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'isExitOptionLabel',
                [ne],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'isExitOptionLabel',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateOptionLabel',
                [oe],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'updateOptionLabel',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'updateOptionValue',
                [ae],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'updateOptionValue',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'deleteOptionItem',
                [re],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'deleteOptionItem',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'insertOption',
                [ie],
                Object.getOwnPropertyDescriptor(ge.prototype, 'insertOption'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'getNewOptionValue',
                [se],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'getNewOptionValue',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'addOptionItem',
                [ce],
                Object.getOwnPropertyDescriptor(ge.prototype, 'addOptionItem'),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'copyOptionItem',
                [le],
                Object.getOwnPropertyDescriptor(ge.prototype, 'copyOptionItem'),
                ge.prototype,
              ),
              (be = v()(ge.prototype, 'childElemSort', [de], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  var e = this;
                  return function (t) {
                    for (
                      var n = (0, Ie.getSchemaByIndexRoute)(t, e.jsonSchema),
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
              v()(
                ge.prototype,
                'checkConditionProp',
                [pe],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'checkConditionProp',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'addConditionProp',
                [ue],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'addConditionProp',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'removeConditionProp',
                [me],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'removeConditionProp',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'cancelConditionProp',
                [he],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'cancelConditionProp',
                ),
                ge.prototype,
              ),
              v()(
                ge.prototype,
                'deleteSchemaProp',
                [ye],
                Object.getOwnPropertyDescriptor(
                  ge.prototype,
                  'deleteSchemaProp',
                ),
                ge.prototype,
              ),
              ge),
          },
          Pe = require('@ant-design/icons'),
          Je = b.Select.Option,
          De = (0, l.inject)(function (e) {
            return {
              getSchemaByKeyRoute: e.jsonSchemaStore.getSchemaByKeyRoute,
            };
          })(
            (0, l.observer)(function (e) {
              var t = e.conditionRule,
                n = e.hiddenRuleConditionValueChange,
                o = e.getSchemaByKeyRoute,
                a = {};
              if (t.conditionProp && t.conditionProp.keyRoute) {
                var r = o(t.conditionProp.keyRoute);
                r.items && (a = r.items);
              }
              return !t.conditionProp ||
                ('radio' !== t.conditionProp.type &&
                  'select' !== t.conditionProp.type)
                ? t.conditionProp && 'boolean' === t.conditionProp.type
                  ? i().createElement(
                      b.Radio.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n(e.target.value);
                        },
                        defaultValue: t.conditionValue,
                      },
                      i().createElement(
                        b.Radio,
                        { value: !0, key: !0 },
                        'true',
                      ),
                      i().createElement(
                        b.Radio,
                        { value: !1, key: !1 },
                        'false',
                      ),
                    )
                  : i().createElement(b.Input, {
                      defaultValue: t.conditionValue,
                      onPressEnter: function (e) {
                        return n(e.target.value);
                      },
                      onBlur: function (e) {
                        return n(e.target.value);
                      },
                    })
                : i().createElement(
                    b.Select,
                    {
                      showSearch: !0,
                      defaultValue: t.conditionValue,
                      style: { width: 150 },
                      onChange: function (e) {
                        n(e);
                      },
                    },
                    a &&
                      a.enum &&
                      a.enum.map(function (e, n) {
                        return i().createElement(
                          Je,
                          { key: e, value: e, select: e === t.conditionValue },
                          a.enumextra[n],
                        );
                      }),
                  );
            }),
          );
        n(975);
        var Te = b.Input.TextArea,
          Be = b.Select.Option,
          Ve = (function (e) {
            function t(t) {
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
                    return r.createElement(b.Switch, {
                      style: { display: 'inline-block' },
                      defaultChecked: t.default,
                      checkedChildren: 'true',
                      unCheckedChildren: 'false',
                      onChange: function (e) {
                        n.handleValueChange('default', e);
                      },
                    });
                  if ('checkboxes' === e || ('select' === e && t.multiple)) {
                    var a = t.options;
                    return r.createElement(
                      b.Checkbox.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n.handleValueChange('default', e);
                        },
                        defaultValue: t.default,
                      },
                      a &&
                        a.length > 0 &&
                        a.map(function (e, t) {
                          var n = o + '-options-' + t;
                          return r.createElement(
                            b.Checkbox,
                            { value: e.value, key: n },
                            e.label || e.name,
                          );
                        }),
                    );
                  }
                  if ('radio' === e || 'select' === e) {
                    var i = t.options;
                    return r.createElement(
                      b.Radio.Group,
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
                          var n = o + '-options-' + t;
                          return r.createElement(
                            b.Radio,
                            { value: e.value, key: n },
                            e.label || e.name,
                          );
                        }),
                    );
                  }
                  return 'color' === e
                    ? r.createElement(b.Input, {
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
                      ? r.createElement(Te, {
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
                        ? r.createElement(b.InputNumber, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + t.title + '的默认值',
                            defaultValue: t.default,
                            onChange: function (e) {
                              n.handleValueChange('default', e);
                            },
                          })
                        : r.createElement(b.Input, {
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
                  t.hiddenRule && (o = (0, x.toJS)(t.hiddenRule)),
                    (o.conditionProp = e),
                    n.handleValueChange('hiddenRule', o);
                }),
                (n.hiddenRuleConditionValueChange = function (e) {
                  var t = n.props.targetJsonSchema,
                    o = {};
                  t.hiddenRule && (o = (0, x.toJS)(t.hiddenRule)),
                    (o.conditionValue = e),
                    n.handleValueChange('hiddenRule', o);
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            return (
              a()(t, e),
              (t.prototype.render = function () {
                var e,
                  t,
                  n = this,
                  o = this.props,
                  a = o.nodeKey,
                  i = o.indexRoute,
                  s = o.targetJsonSchema,
                  c = o.checkConditionProp,
                  l = o.jsonSchema,
                  d = o.indexRoute2keyRoute,
                  p = s.type,
                  u = d(i);
                t = (0, Ie.hasProperties)(s.isConditionProp)
                  ? s.isConditionProp
                  : c(u);
                var m = {};
                l.conditionProps && (m = l.conditionProps);
                var h = Object.keys(m),
                  y = {};
                return (
                  s.hiddenRule && (y = s.hiddenRule),
                  r.createElement(
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
                        ].indexOf(e) > -1
                      );
                    })(p) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-isConditionProp-' + t,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
                            {
                              title:
                                '当前属性设置为条件字段后，其他字段可以根据其数值做对应的联动',
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
                              key: a + '-isConditionProp-switch-' + t,
                            },
                            r.createElement(b.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: t,
                              checkedChildren: '是',
                              unCheckedChildren: '否',
                              onChange: function (e) {
                                n.curConditionPropChange(e, u);
                              },
                            }),
                          ),
                        ),
                      ),
                    'select' === p &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-selectConfig',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
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
                              key: a + '-selectConfig-multiple',
                            },
                            r.createElement(b.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.multiple,
                              checkedChildren: '多选',
                              unCheckedChildren: '单选',
                              onChange: function (e) {
                                n.handleValueChange('multiple', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(Ee, [
                            'quantity',
                            'text-editor',
                            'json',
                            'codearea',
                            'htmlarea',
                          ])
                          .indexOf(e) > -1
                      );
                    })(p) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-readOnly-' + s.readOnly,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
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
                            r.createElement(b.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.readOnly,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                n.handleValueChange('readOnly', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(Ee, [
                            'quantity',
                            'text-editor',
                            'json',
                            'codearea',
                            'htmlarea',
                          ])
                          .indexOf(e) > -1
                      );
                    })(p) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-isRequired-' + s.isRequired,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
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
                            r.createElement(b.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.isRequired,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                n.handleValueChange('isRequired', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(Ee, ['json', 'codearea', 'htmlarea'])
                          .indexOf(e) > -1
                      );
                    })(p) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-default',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
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
                            this.renderDefaultContent(p, s, a),
                          ),
                        ),
                      ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: a + '-description',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          b.Tooltip,
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
                          r.createElement(b.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + s.title + '的字段描述',
                            defaultValue: s.description,
                            onPressEnter: function (e) {
                              var t = e.target.value;
                              n.handleValueChange('description', t);
                            },
                            onBlur: function (e) {
                              var t = e.target.value;
                              n.handleValueChange('description', t);
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
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-placeholder',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
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
                            r.createElement(b.Input, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + s.title + '的输入提示',
                              defaultValue: s.placeholder,
                              onPressEnter: function (e) {
                                var t = e.target.value;
                                n.handleValueChange('placeholder', t);
                              },
                              onBlur: function (e) {
                                var t = e.target.value;
                                n.handleValueChange('placeholder', t);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return [].concat(Ce, ['array']).indexOf(e) > -1;
                    })(p) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-showCodeViewBtn-' + s.showCodeViewBtn,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
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
                            r.createElement(b.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked:
                                null == (e = s.showCodeViewBtn) || e,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                n.handleValueChange('showCodeViewBtn', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    'number' === (0, Ie.getExpectType)(p) &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: a + '-minimum-' + s.minimum,
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              b.Tooltip,
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
                              r.createElement(b.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s.minimum,
                                onPressEnter: function (e) {
                                  var t = e.target.value;
                                  n.handleValueChange('minimum', t);
                                },
                                onBlur: function (e) {
                                  var t = e.target.value;
                                  n.handleValueChange('minimum', t);
                                },
                              }),
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: a + '-maximum-' + s.maximum,
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              b.Tooltip,
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
                              r.createElement(b.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s.maximum,
                                onPressEnter: function (e) {
                                  var t = e.target.value;
                                  n.handleValueChange('maximum', t);
                                },
                                onBlur: function (e) {
                                  var t = e.target.value;
                                  n.handleValueChange('maximum', t);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    'array' === (0, Ie.getExpectType)(p) &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: a + '-minimum-child',
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              b.Tooltip,
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
                              r.createElement(b.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s['minimum-child'],
                                onChange: function (e) {
                                  n.handleValueChange('minimum-child', e);
                                },
                              }),
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: a + '-maximum-child',
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              b.Tooltip,
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
                              r.createElement(b.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: s['maximum-child'],
                                onChange: function (e) {
                                  n.handleValueChange('maximum-child', e);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    !s.hiddenRule &&
                      r.createElement(
                        'div',
                        { className: 'wide-screen-element-warp' },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            'span',
                            { className: 'title-text' },
                            '隐藏规则',
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            b.Button,
                            {
                              size: 'small',
                              className: 'add-rule-condition-btn',
                              onClick: this.addHiddenRule,
                            },
                            '添加隐藏规则',
                          ),
                        ),
                      ),
                    s.hiddenRule &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key:
                            a + '-clearValueOnHidden-' + s.clearValueOnHidden,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            b.Tooltip,
                            {
                              title:
                                '默认隐藏表单项时，会保留其对应的表单项数值。如需隐藏时删除表单项数值，请开启以下配置项。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '隐藏时删除',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            r.createElement(b.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: s.clearValueOnHidden,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                n.handleValueChange('clearValueOnHidden', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    s.hiddenRule &&
                      r.createElement(
                        'div',
                        { className: 'hidden-rule-box' },
                        r.createElement(
                          'div',
                          { className: 'rule-title' },
                          r.createElement(
                            'div',
                            { className: 'title' },
                            '隐藏规则：',
                          ),
                          r.createElement(
                            'div',
                            { className: 'btn-box' },
                            r.createElement(
                              b.Button,
                              { size: 'small', onClick: this.deleteHiddenRule },
                              '删除规则',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'rule-condition-box' },
                          r.createElement(
                            'div',
                            { className: 'condition-title' },
                            '隐藏条件：',
                          ),
                          r.createElement(
                            'div',
                            { className: 'condition-prop' },
                            r.createElement(
                              b.Select,
                              {
                                showSearch: !0,
                                defaultValue: y.conditionProp
                                  ? y.conditionProp.keyRoute
                                  : null,
                                style: { width: 150 },
                                onChange: function (e) {
                                  var t = m[e];
                                  n.hiddenRuleConditionChange(t);
                                },
                              },
                              h.map(function (e) {
                                var t = m[e];
                                return r.createElement(
                                  Be,
                                  {
                                    key: t.keyRoute,
                                    value: t.keyRoute,
                                    disabled: u === t.keyRoute,
                                  },
                                  t.title,
                                  '(',
                                  t.key,
                                  ')',
                                );
                              }),
                            ),
                          ),
                          r.createElement(
                            'div',
                            { className: 'condition-equal' },
                            '等于',
                          ),
                          r.createElement(
                            'div',
                            { className: 'condition-value' },
                            r.createElement(De, {
                              conditionRule: y,
                              hiddenRuleConditionValueChange:
                                this.hiddenRuleConditionValueChange,
                            }),
                          ),
                        ),
                      ),
                  )
                );
              }),
              t
            );
          })(r.PureComponent);
        Ve.propTypes = {
          jsonKey: p().string,
          indexRoute: p().string,
          nodeKey: p().string,
          targetJsonSchema: p().any,
          checkConditionProp: p().any,
          addConditionProp: p().any,
          removeConditionProp: p().any,
          jsonSchema: p().any,
        };
        var Le = (0, l.inject)(function (e) {
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
          })((0, l.observer)(Ve)),
          Fe = (n(915), b.Select.Option),
          qe = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).selectHandleChange = function (
                  e,
                ) {
                  var t = n.props,
                    o = t.indexRoute,
                    a = t.jsonKey,
                    r = t.changeType;
                  t.targetJsonSchema.type !== e && r(o, a, Ie.TypeDataList[e]);
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
                      ? b.message.warning('当前key已存在，请换一个吧。')
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
                  (0, Ie.isContainerSchema)(o) ? a(t) : r(t);
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
                    l = E(o),
                    d = (0, Ie.getParentIndexRoute)(t),
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
              a()(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = this.props,
                  n = t.parentType,
                  o = t.indexRoute,
                  a = t.jsonKey,
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
                  f = (0, Ie.isContainerSchema)(s);
                return r.createElement(
                  r.Fragment,
                  null,
                  s &&
                    r.createElement(
                      'div',
                      { className: 'base-schema-box', id: i },
                      r.createElement(
                        'div',
                        {
                          className: 'key-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        r.createElement(b.Input, {
                          defaultValue: a || 'key值不存在',
                          disabled: d,
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
                          b.Select,
                          {
                            showSearch: !0,
                            defaultValue: g,
                            style: { width: 150 },
                            onChange: this.selectHandleChange,
                            disabled: p,
                          },
                          y.map(function (e) {
                            return r.createElement(Fe, { key: e, value: e }, e);
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
                        r.createElement(b.Input, {
                          defaultValue: s.title,
                          disabled: u,
                          onPressEnter: this.handleTitleChange,
                          onBlur: this.handleTitleChange,
                        }),
                      ),
                      !m &&
                        r.createElement(
                          'div',
                          { className: 'operate-item' },
                          !l &&
                            r.createElement(
                              b.Tooltip,
                              { title: '删除' },
                              r.createElement(Pe.CloseOutlined, {
                                className: 'operate-btn delete-operate',
                                onClick: this.onDeleteBtnEvent,
                              }),
                            ),
                          r.createElement(
                            b.Tooltip,
                            { title: f ? '新增子元素' : '新增同级元素' },
                            r.createElement(Pe.PlusOutlined, {
                              className: 'operate-btn',
                              onClick: this.onAddBtnEvent,
                            }),
                          ),
                          f &&
                            r.createElement(
                              b.Tooltip,
                              { title: '数据项排序' },
                              r.createElement(Pe.SortAscendingOutlined, {
                                className: 'operate-btn',
                                onClick: this.childElemSort,
                              }),
                            ),
                          !l &&
                            r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(
                                b.Tooltip,
                                { title: '复制' },
                                r.createElement(Pe.CopyOutlined, {
                                  className: 'operate-btn',
                                  onClick: this.onCopyBtnEvent,
                                }),
                              ),
                              r.createElement(
                                b.Tooltip,
                                { title: '高级设置' },
                                r.createElement(Pe.SettingOutlined, {
                                  className: 'operate-btn',
                                  onClick: function () {
                                    e.setState({ showAdvanceConfig: !0 });
                                  },
                                }),
                              ),
                              r.createElement(
                                b.Tooltip,
                                { title: '按住进行拖拽' },
                                r.createElement(Pe.DragOutlined, {
                                  className: 'operate-btn drag-btn',
                                }),
                              ),
                            ),
                        ),
                      h &&
                        r.createElement(
                          'div',
                          { className: 'operate-item' },
                          r.createElement(
                            b.Tooltip,
                            { title: '高级设置' },
                            r.createElement(Pe.SettingOutlined, {
                              className: 'operate-btn',
                              onClick: function () {
                                e.setState({ showAdvanceConfig: !0 });
                              },
                            }),
                          ),
                        ),
                      c &&
                        r.createElement(
                          b.Modal,
                          {
                            visible: !0,
                            title:
                              '高级设置 / 当前字段：' + s.title + '(' + a + ')',
                            onCancel: function () {
                              e.setState({ showAdvanceConfig: !1 });
                            },
                            footer: [
                              r.createElement(
                                b.Button,
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
                          r.createElement(Le, {
                            indexRoute: o,
                            jsonKey: a,
                            targetJsonSchema: s,
                          }),
                        ),
                    ),
                  !s &&
                    r.createElement(
                      'div',
                      { className: 'base-schema-box' },
                      r.createElement(
                        'div',
                        { className: 'warn-text' },
                        a,
                        '：数据元素为空',
                      ),
                    ),
                );
              }),
              t
            );
          })(r.PureComponent);
        qe.propTypes = {
          parentType: p().string,
          jsonKey: p().string,
          indexRoute: p().string,
          nodeKey: p().string,
          targetJsonSchema: p().any,
          isFixed: p().bool,
          hideOperaBtn: p().bool,
          showAdvanceBtn: p().bool,
          keyIsFixed: p().bool,
          typeIsFixed: p().bool,
          titleIsFixed: p().bool,
        };
        var Ae = (0, l.inject)(function (e) {
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
          })((0, l.observer)(qe)),
          _e = b.Tree.TreeNode,
          Me = function (e) {
            return i().createElement(Ae, e);
          },
          He = function (e) {
            var t = e.jsonKey,
              n = e.indexRoute,
              o = e.nodeKey,
              a = e.targetJsonSchema,
              r = a.type,
              s = n ? n + '-0' : '0',
              c = 'items',
              l = o ? o + '-' + c : c,
              d = a[c] || {};
            return i().createElement(
              _e,
              {
                className: r + '-schema schema-item-form',
                id: o,
                key: o,
                indexRoute: n,
                jsonKey: t,
                title: Me(m()({}, e)),
              },
              (function (e) {
                var t = e.parentType,
                  n = e.jsonKey,
                  o = e.indexRoute,
                  a = e.nodeKey,
                  r = e.targetJsonSchema;
                return i().createElement(
                  _e,
                  {
                    className: 'array-item-schema schema-item-form',
                    id: a,
                    key: a,
                    indexRoute: o,
                    jsonKey: n,
                    disabled: !0,
                    title: Me({
                      indexRoute: o,
                      jsonKey: n,
                      targetJsonSchema: r,
                      parentType: t,
                      nodeKey: a,
                      isFixed: !0,
                      typeIsFixed: !1,
                    }),
                  },
                  'object' === r.type &&
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
                        return dt({
                          parentType: a,
                          jsonKey: s,
                          indexRoute: i,
                          key: d,
                          nodeKey: d,
                          targetJsonSchema: c,
                        });
                      });
                    })({
                      propertyOrder: r.propertyOrder,
                      properties: r.properties,
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
          ze = (n(790), b.Select.Option),
          Ge = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).typeChange = function (e) {
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
                        s((0, Ie.getNextIndexRoute)(o), 'data', l);
                    }
                    if (Ie.EventTypeDataList) {
                      var d = Ie.EventTypeDataList[e];
                      '事件类型' === r.title &&
                        d &&
                        c((0, Ie.getParentIndexRoute)(o), d);
                    }
                  }
                }),
                (n.typeChange = n.typeChange.bind(n)),
                n
              );
            }
            return (
              a()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  n = e.targetJsonSchema,
                  o = n.type,
                  a = n.options || [];
                return r.createElement(
                  'div',
                  { className: 'typeSelect-schema-box', id: t },
                  r.createElement(
                    'div',
                    { className: 'key-input-item' },
                    r.createElement(
                      b.Select,
                      {
                        defaultValue: n.default || 'local',
                        onChange: this.typeChange,
                      },
                      a.map(function (e, t) {
                        return r.createElement(
                          ze,
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
                      b.Select,
                      { defaultValue: o, style: { width: 120 }, disabled: !0 },
                      r.createElement(ze, { key: o, value: o }, o),
                    ),
                  ),
                  r.createElement(
                    'div',
                    { className: 'title-input-item' },
                    r.createElement(b.Input, {
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
        Ge.propTypes = {
          parentType: p().string,
          jsonKey: p().string,
          indexRoute: p().string,
          nodeKey: p().string,
          targetJsonSchema: p().any,
          typeSelectData: p().any,
          isFixed: p().any,
        };
        var We = (0, l.inject)(function (e) {
            return {
              editSchemaData: e.jsonSchemaStore.editSchemaData,
              updateSchemaData: e.jsonSchemaStore.updateSchemaData,
            };
          })((0, l.observer)(Ge)),
          Ue = b.Tree.TreeNode,
          Qe = function (e) {
            return i().createElement(Ae, e);
          },
          Xe = {
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
          Ye = b.Tree.TreeNode,
          Ze = function (e) {
            return i().createElement(Ae, e);
          },
          $e = b.Tree.TreeNode,
          et = function (e) {
            return i().createElement(Ae, e);
          },
          tt = b.Tree.TreeNode,
          nt = function (e) {
            return i().createElement(Ae, e);
          },
          ot = (n(617), b.Select.Option),
          at = (function (e) {
            function t(t) {
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
                      ? b.message.warning(
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
                    : b.message.warning('删除失败，至少保留一个可选项。');
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
              a()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.optionLabel,
                  n = e.optionValue;
                return (
                  e.optionNodeKey,
                  r.createElement(
                    'div',
                    { className: 'option-schema-box', id: t },
                    r.createElement(
                      'div',
                      { className: 'key-input-item' },
                      r.createElement(b.Input, {
                        defaultValue: n,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                    r.createElement(
                      'div',
                      { className: 'type-select-item' },
                      r.createElement(
                        b.Select,
                        { defaultValue: 'string', style: { width: 120 } },
                        r.createElement(
                          ot,
                          { key: 'string', value: 'string' },
                          'string',
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      { className: 'title-input-item' },
                      r.createElement(b.Input, {
                        defaultValue: t,
                        onPressEnter: this.handleLabelChange,
                        onBlur: this.handleLabelChange,
                      }),
                    ),
                    r.createElement(
                      'div',
                      { className: 'operate-item' },
                      r.createElement(
                        b.Tooltip,
                        { title: '删除' },
                        r.createElement(Pe.CloseOutlined, {
                          className: 'operate-btn delete-operate',
                          onClick: this.onDeleteBtnEvent,
                        }),
                      ),
                      r.createElement(
                        b.Tooltip,
                        { title: '新增可选项' },
                        r.createElement(Pe.PlusOutlined, {
                          className: 'operate-btn',
                          onClick: this.onAddBtnEvent,
                        }),
                      ),
                      r.createElement(
                        b.Tooltip,
                        { title: '复制' },
                        r.createElement(Pe.CopyOutlined, {
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
        at.propTypes = {
          indexRoute: p().string,
          optionIndex: p().any,
          optionLabel: p().string,
          optionValue: p().string,
          optionNodeKey: p().string,
        };
        var rt = (0, l.inject)(function (e) {
            return {
              getSchemaByIndexRoute: e.jsonSchemaStore.getSchemaByIndexRoute,
              updateOptionLabel: e.jsonSchemaStore.updateOptionLabel,
              updateOptionValue: e.jsonSchemaStore.updateOptionValue,
              isExitOptionLabel: e.jsonSchemaStore.isExitOptionLabel,
              deleteOptionItem: e.jsonSchemaStore.deleteOptionItem,
              addOptionItem: e.jsonSchemaStore.addOptionItem,
              copyOptionItem: e.jsonSchemaStore.copyOptionItem,
            };
          })((0, l.observer)(at)),
          it = b.Tree.TreeNode,
          st = function (e) {
            return i().createElement(rt, e);
          },
          ct = b.Tree.TreeNode,
          lt = function (e) {
            return i().createElement(Ae, e);
          },
          dt = function (e) {
            switch (e.targetJsonSchema.type) {
              case 'object':
              case 'func':
              case 'style':
              case 'data':
                return mt(e);
              case 'array':
                return He(e);
              case 'datasource':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    o = e.indexRoute,
                    a = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.properties.data || {};
                  return i().createElement(
                    Ue,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: Qe(m()({}, e)),
                    },
                    i().createElement(Ue, {
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
                          targetJsonSchema: r.properties.type,
                          parentType: s,
                          nodeKey: a + '-type',
                          typeSelectData: Xe,
                        }),
                        i().createElement(We, t)),
                    }),
                    i().createElement(Ue, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: a + '-data-' + c.type,
                      key: a + '-data-' + c.type,
                      indexRoute: o ? o + '-1' : '1',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Qe({
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
                    i().createElement(Ue, {
                      className:
                        'dataSource-filter-item-schema schema-item-form',
                      id: a + '-filter',
                      key: a + '-filter',
                      indexRoute: o ? o + '-2' : '2',
                      jsonKey: 'filter',
                      disabled: !0,
                      title: Qe({
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'filter',
                        targetJsonSchema: r.properties.filter,
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
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.properties.config || {},
                    l = r.properties.data || {};
                  return i().createElement(
                    Ye,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: Ze(m()({}, e)),
                    },
                    i().createElement(Ye, {
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
                          targetJsonSchema: r.properties.type,
                          parentType: s,
                          nodeKey: a + '-type',
                        }),
                        i().createElement(We, t)),
                    }),
                    i().createElement(Ye, {
                      className:
                        'dataSource-config-item-schema schema-item-form',
                      id: a + '-config-' + l.type,
                      key: a + '-config-' + l.type,
                      indexRoute: o ? o + '-1' : '1',
                      jsonKey: 'config',
                      disabled: !0,
                      title: Ze({
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
                    i().createElement(Ye, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: a + '-data-' + l.type,
                      key: a + '-data-' + l.type,
                      indexRoute: o ? o + '-2' : '2',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Ze({
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
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.properties.type || {},
                    l = r.properties.register || {},
                    d = r.properties.actionFunc || {},
                    p = r.properties.trigger || {},
                    u = r.properties.eventData || {};
                  return i().createElement(
                    $e,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: et(m()({}, e)),
                    },
                    i().createElement($e, {
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
                        i().createElement(We, t)),
                    }),
                    'on' === c.default &&
                      l &&
                      i().createElement($e, {
                        className:
                          'event-register-item-schema schema-item-form',
                        id: a + '-register-' + c.default,
                        key: a + '-register-' + c.default,
                        indexRoute: o ? o + '-1' : '1',
                        jsonKey: 'register',
                        disabled: !0,
                        title: et({
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
                      i().createElement($e, {
                        className:
                          'event-actionFunc-item-schema schema-item-form',
                        id: a + '-actionFunc-' + c.default,
                        key: a + '-actionFunc-' + c.default,
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'actionFunc',
                        disabled: !0,
                        title: et({
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
                      i().createElement($e, {
                        className: 'event-trigger-item-schema schema-item-form',
                        id: a + '-trigger-' + c.default,
                        key: a + '-trigger-' + c.default,
                        indexRoute: o ? o + '-1' : '1',
                        jsonKey: 'trigger',
                        disabled: !0,
                        title: et({
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
                      u &&
                      i().createElement($e, {
                        className:
                          'event-eventData-item-schema schema-item-form',
                        id: a + '-eventData-' + c.default,
                        key: a + '-eventData-' + c.default,
                        indexRoute: o ? o + '-2' : '2',
                        jsonKey: 'eventData',
                        disabled: !0,
                        title: et({
                          indexRoute: o ? o + '-2' : '2',
                          jsonKey: 'eventData',
                          targetJsonSchema: u,
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
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.propertyOrder[0],
                    l = r.properties[c];
                  return i().createElement(
                    tt,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: nt(m()({}, e)),
                    },
                    i().createElement(tt, {
                      className: 'quantity-unit-item-schema schema-item-form',
                      id: a + '-' + c,
                      key: a + '-' + c,
                      indexRoute: o ? o + '-0' : '0',
                      jsonKey: c,
                      disabled: !0,
                      title: nt({
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
                    i().createElement(tt, {
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
                          targetJsonSchema: r.properties.quantity,
                          parentType: s,
                          nodeKey: a + '-quantity',
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
                    o = e.indexRoute,
                    a = e.nodeKey,
                    r = e.targetJsonSchema,
                    s = r.type,
                    c = r.options,
                    l = o || '0';
                  return i().createElement(
                    it,
                    {
                      className: s + '-schema schema-item-form',
                      id: a,
                      key: a,
                      indexRoute: o,
                      jsonKey: n,
                      title: ((t = m()({}, e)), i().createElement(Ae, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = e.label || e.name,
                          o = e.value,
                          r = '' + a + s + '-' + n;
                        return i().createElement(it, {
                          className: 'enum-item-schema schema-item-form',
                          id: r,
                          key: r,
                          indexRoute: l,
                          disabled: !0,
                          title: st({
                            indexRoute: l,
                            optionIndex: t,
                            optionLabel: n,
                            optionValue: o,
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
                    o = e.nodeKey,
                    a = e.targetJsonSchema.type;
                  return i().createElement(ct, {
                    className: a + '-schema schema-item-form',
                    id: o,
                    key: o,
                    indexRoute: n,
                    jsonKey: t,
                    title: lt(e),
                  });
                })(e);
            }
          },
          pt = b.Tree.TreeNode,
          ut = function (e) {
            return i().createElement(Ae, e);
          },
          mt = function (e) {
            var t,
              n,
              o,
              a,
              r,
              s = e.jsonKey,
              c = e.indexRoute,
              l = e.nodeKey,
              d = e.targetJsonSchema,
              p = e.isOnlyShowChild,
              u = d.type,
              h = d.isFixed,
              y =
                ((t = {
                  propertyOrder: d.propertyOrder,
                  properties: d.properties,
                  parentIndexRoute: c,
                  parentNodeKey: l,
                  parentType: u,
                  isOnlyShowChild: p,
                }),
                (n = t.properties),
                (o = t.parentIndexRoute),
                (a = t.parentNodeKey),
                (r = t.parentType),
                t.propertyOrder.map(function (e, t) {
                  var i = o ? o + '-' + t : '' + t,
                    s = e,
                    c = n[s],
                    l = c.type,
                    d = (a ? a + '-' : '') + l + '-' + s;
                  return dt({
                    parentType: r,
                    jsonKey: s,
                    indexRoute: i,
                    key: d,
                    nodeKey: d,
                    targetJsonSchema: c,
                  });
                })),
              g = i().createElement(
                pt,
                {
                  className: u + '-schema schema-item-form',
                  id: l,
                  key: l,
                  indexRoute: c,
                  jsonKey: s,
                  disabled: h,
                  title: ut(m()({}, e)),
                },
                y,
              );
            return p ? y : g;
          },
          ht =
            (n(797),
            (0, l.inject)(function (e) {
              return {
                jsonSchema: e.jsonSchemaStore.jsonSchema,
                removeConditionProp: e.jsonSchemaStore.removeConditionProp,
                cancelConditionProp: e.jsonSchemaStore.cancelConditionProp,
              };
            })(
              (0, l.observer)(function (e) {
                var t = e.jsonSchema,
                  n = e.removeConditionProp,
                  o = e.cancelConditionProp,
                  a = {};
                t.conditionProps && (a = t.conditionProps);
                var r = Object.keys(a);
                return 0 === r.length
                  ? ''
                  : i().createElement(
                      'div',
                      { className: 'condition-props-box' },
                      i().createElement(
                        'div',
                        { className: 'title' },
                        i().createElement(
                          b.Tooltip,
                          {
                            title: '其他字段可根据条件字段的数值设置规则联动',
                            placement: 'top',
                          },
                          '条件字段:',
                        ),
                      ),
                      i().createElement(
                        'div',
                        { className: 'tags-box' },
                        r.map(function (e) {
                          var t = a[e];
                          return i().createElement(
                            b.Tag,
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
          yt =
            (n(23),
            (function (e) {
              function t(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).onDragStart = function (e) {
                    (0, n.props.getSchemaByIndexRoute)(e.node.indexRoute)
                      .isFixed && b.message.warning('当前元素不支持拖拽哦。');
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
                        y = (0, Ie.isSameParent)(p, h),
                        g = (0, Ie.getCurPosition)(p, h);
                      if (y)
                        c(p, !0),
                          'before' === g && (h = (0, Ie.moveForward)(h)),
                          o.dragOverGapTop
                            ? s(h, u, m, 'before')
                            : (o.dragOver || o.dragOverGapBottom) && s(h, u, m);
                      else {
                        if (l(h, u))
                          return void b.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var f = m.type;
                        if (!d(h, f))
                          return void b.message.warning(
                            '目标位置不支持' + f + '类型元素',
                          );
                        var S = i(p),
                          v = (0, Ie.getParentIndexRoute)(h),
                          x = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(S + '-' + f);
                        j(i(v) + '-' + u + '-' + f, x || S),
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
              a()(t, e);
              var n = t.prototype;
              return (
                (n.componentWillReceiveProps = function (e) {
                  C(e.data, this.props.data) ||
                    this.props.initJSONSchemaData(e.data),
                    C(e.onChange, this.props.onChange) ||
                      this.props.initOnChange(e.onChange),
                    C(e.typeList, this.props.typeList) ||
                      this.props.initSchemaTypeList(e.typeList);
                }),
                (n.render = function () {
                  var e = this.props.jsonSchema,
                    t = (0, Ie.isEmptySchema)(e),
                    n = e.type;
                  return r.createElement(
                    'div',
                    { className: 'json-schema-container' },
                    !t &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(ht, null),
                        r.createElement(
                          b.Tree,
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
                            mt({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: '',
                              targetJsonSchema: e,
                              isOnlyShowChild: !0,
                            }),
                          'object' !== n &&
                            dt({
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
        yt.propTypes = {
          onChange: p().func,
          data: p().object,
          typeList: p().object,
        };
        var gt = (0, l.inject)(function (e) {
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
          })((0, l.observer)(yt)),
          ft = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  jsonSchemaStore: new we.jsonSchemaStore(),
                }),
                n
              );
            }
            return (
              a()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.data,
                  n = e.typeList,
                  o = e.onChange,
                  a = e.element,
                  i = e.wideScreen,
                  s = this.state.jsonSchemaStore,
                  d = r.createElement(
                    l.Provider,
                    { jsonSchemaStore: s },
                    r.createElement(gt, {
                      data: t,
                      typeList: n,
                      onChange: o,
                      wideScreen: i,
                    }),
                  );
                return a ? (c().render(d, a), '') : d;
              }),
              t
            );
          })(r.PureComponent);
        ft.propTypes = {
          wideScreen: p().any,
          onChange: p().func,
          data: p().any,
          typeList: p().any,
          element: p().any,
        };
      })(),
      o
    );
  })();
});
