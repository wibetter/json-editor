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
        595: function () {},
        907: function () {},
        251: function () {},
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
        797: function (e, t, n) {
          var a = n(804);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('c1e4665a', a, !1, { sourceMap: !1 });
        },
        94: function (e, t, n) {
          var a = n(595);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('8bc15ad8', a, !1, { sourceMap: !1 });
        },
        142: function (e, t, n) {
          var a = n(907);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('7726af00', a, !1, { sourceMap: !1 });
        },
        894: function (e, t, n) {
          var a = n(251);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('ee66e464', a, !1, { sourceMap: !1 });
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
            d = function () {},
            m = null,
            u = 'data-vue-ssr-id',
            p =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function h(e, t, n, o) {
            (l = n), (m = o || {});
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
              a = document.querySelector('style[' + u + '~="' + e.id + '"]');
            if (a) {
              if (l) return d;
              a.parentNode.removeChild(a);
            }
            if (p) {
              var o = c++;
              (a = s || (s = g())),
                (t = v.bind(null, a, o, !1)),
                (n = v.bind(null, a, o, !0));
            } else
              (a = g()),
                (t = E.bind(null, a)),
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
          var S,
            x =
              ((S = []),
              function (e, t) {
                return (S[e] = t), S.filter(Boolean).join('\n');
              });
          function v(e, t, n, a) {
            var o = n ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = x(t, o);
            else {
              var r = document.createTextNode(o),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
            }
          }
          function E(e, t) {
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
              return ct;
            },
          });
        var e = require('@babel/runtime/helpers/inheritsLoose'),
          t = n.n(e),
          o = require('react'),
          r = n.n(o),
          i = require('react-dom'),
          s = n.n(i),
          c = require('mobx-react'),
          l = require('prop-types'),
          d = n.n(l),
          m = require('@babel/runtime/helpers/extends'),
          u = n.n(m),
          p = require('@babel/runtime/helpers/initializerDefineProperty'),
          h = n.n(p),
          y = require('@babel/runtime/helpers/createClass'),
          g = n.n(y),
          f = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          S = n.n(f),
          x =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            require('mobx')),
          v = require('antd');
        function E(e) {
          var t = JSON.stringify(e);
          return JSON.parse(t);
        }
        function b(e, t) {
          return JSON.stringify(e) === JSON.stringify(t);
        }
        function j(e) {
          var t = !1;
          return (
            (e.indexOf('func-schema') >= 0 ||
              e.indexOf('style-schema') >= 0 ||
              e.indexOf('data-schema') >= 0) &&
              e.indexOf('dynamic-data-schema') < 0 &&
              (t = !0),
            t
          );
        }
        function C(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var R,
          N,
          O,
          K,
          I,
          k,
          P,
          J,
          T,
          w,
          D,
          B,
          F,
          V,
          q,
          L,
          A,
          _,
          M,
          H,
          z,
          G,
          U,
          W,
          Q,
          X,
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
          de,
          me,
          ue,
          pe = ['string'],
          he = {
            func: [
              'input',
              'boolean',
              'date',
              'date-time',
              'time',
              'url',
              'textarea',
              'text-editor',
              'number',
              'radio',
              'single-select',
              'select',
              'codearea',
              'array',
              'object',
            ],
            style: [
              'input',
              'boolean',
              'color',
              'url',
              'number',
              'radio',
              'single-select',
              'select',
              'quantity',
              'box-style',
              'htmlarea',
              'text-editor',
              'array',
              'object',
            ],
            data: [
              'input',
              'number',
              'json',
              'codearea',
              'htmlarea',
              'text-editor',
              'dynamic-data',
              'datasource',
              'event',
              'object',
              'array',
            ],
            object: [
              'input',
              'boolean',
              'color',
              'date',
              'date-time',
              'time',
              'url',
              'textarea',
              'text-editor',
              'number',
              'radio',
              'single-select',
              'select',
              'object',
              'array',
            ],
            array: ['object'],
            'array-object': [
              'input',
              'boolean',
              'color',
              'date',
              'date-time',
              'time',
              'url',
              'textarea',
              'text-editor',
              'number',
              'radio',
              'single-select',
              'select',
              'array',
            ],
            radio: pe,
            'single-select': pe,
            select: ['string'],
            all: [
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
              'datasource',
              'dynamic-data',
              'event',
              'array',
              'object',
            ],
          },
          ye = require('@wibetter/json-utils'),
          ge = ye.TypeDataList.jsonschema,
          fe = ye.TypeDataList.input,
          Se = {
            jsonSchemaStore:
              ((R = x.action.bound),
              (N = x.action.bound),
              (O = x.action.bound),
              (K = x.action.bound),
              (I = x.action.bound),
              (k = x.action.bound),
              (P = x.action.bound),
              (J = x.action.bound),
              (T = x.action.bound),
              (w = x.action.bound),
              (D = x.action.bound),
              (B = x.action.bound),
              (F = x.action.bound),
              (V = x.action.bound),
              (q = x.action.bound),
              (L = x.action.bound),
              (A = x.action.bound),
              (_ = x.action.bound),
              (M = x.action.bound),
              (H = x.action.bound),
              (z = x.action.bound),
              (G = x.action.bound),
              (U = x.action.bound),
              (W = x.action.bound),
              (Q = x.action.bound),
              (X = x.action.bound),
              (Y = x.action.bound),
              (Z = x.action.bound),
              ($ = x.action.bound),
              (ee = x.action.bound),
              (te = x.action.bound),
              (ne = x.action.bound),
              (ae = x.action.bound),
              (oe = x.action.bound),
              (re = x.action.bound),
              (ie = x.action.bound),
              (se = (function () {
                function e() {
                  (this.curJsonKeyIndex = 1),
                    h()(this, 'triggerChange', ce, this),
                    h()(this, 'jsonSchema', le, this),
                    h()(this, 'SchemaTypeList', de, this),
                    h()(this, 'onChange', me, this),
                    h()(this, 'childElemSort', ue, this);
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
                      (b(e, this.SchemaTypeList) ||
                        (e &&
                          Object.keys(e).map(function (n) {
                            t.SchemaTypeList[n] = e[n];
                          })));
                  }),
                  (t.initJSONSchemaData = function (e) {
                    if (e && '{}' !== JSON.stringify(e)) {
                      if (!b(e, this.JSONSchemaObj))
                        if (e && (0, ye.isNewSchemaData)(e))
                          this.jsonSchema = e;
                        else {
                          var t = (0, ye.oldSchemaToNewSchema)(e);
                          this.jsonSchema = t;
                        }
                    } else this.jsonSchema = E(ge);
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
                    return (0, ye.indexRoute2keyRoute)(e, this.jsonSchema);
                  }),
                  (t.keyRoute2indexRoute = function (e) {
                    return (0, ye.keyRoute2indexRoute)(e, this.jsonSchema);
                  }),
                  (t.getSchemaByIndexRoute = function (e) {
                    return (0, ye.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                  }),
                  (t.getSchemaByKeyRoute = function (e) {
                    return (0, ye.getSchemaByKeyRoute)(e, this.jsonSchema, !0);
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
                    var n = (0, ye.getParentIndexRoute)(e),
                      a = this.getSchemaByIndexRoute(n);
                    return (
                      !!(a.propertyOrder && a.propertyOrder.indexOf(t) >= 0) ||
                      (ye.KeyWordList &&
                        ye.KeyWordList.indexOf(t) >= 0 &&
                        v.message.warning(
                          t +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      !1)
                    );
                  }),
                  (t.isSupportCurType = function (e, t) {
                    var n = (0, ye.getParentIndexRoute)(e),
                      a = this.getSchemaByIndexRoute(n),
                      o = this.SchemaTypeList[a.format];
                    return !!(o && o.indexOf(t) >= 0);
                  }),
                  (t.addChildJson = function (e, t) {
                    var n = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if ((0, ye.isBoxSchemaData)(n.format)) {
                      var a = this.getNewJsonKeyIndex(n);
                      n.required.push(a),
                        n.propertyOrder.push(a),
                        (n.properties[a] = fe),
                        this.jsonSchemaChange(t);
                    } else v.message.warning('非对象类型字段不允许插入子元素');
                  }),
                  (t.changeType = function (e, t, n, a) {
                    var o = (0, ye.getParentIndexRoute)(e);
                    ((0, ye.getSchemaByIndexRoute)(
                      o,
                      this.jsonSchema,
                    ).properties[t] = E(n)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.updateSchemaData = function (e, t, n) {
                    var a = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    Object.assign(a, E(t)), this.jsonSchemaChange(n);
                  }),
                  (t.editSchemaData = function (e, t, n, a) {
                    var o = (0, ye.getParentIndexRoute)(e),
                      r = (0, ye.getSchemaByIndexRoute)(o, this.jsonSchema);
                    (r.properties[t] = u()({}, E(r.properties[t]), n)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.editJsonKey = function (e, t, n) {
                    var a = (0, ye.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                    this.insertJsonData(e, t, a, '', !0),
                      this.deleteJsonByIndex(e, !0),
                      this.jsonSchemaChange(n);
                  }),
                  (t.addNextJsonData = function (e) {
                    var t = (0, ye.getParentIndexRoute)(e),
                      n = (0, ye.getSchemaByIndexRoute)(t, this.jsonSchema),
                      a = this.getNewJsonKeyIndex(n);
                    this.insertJsonData(e, a, fe);
                  }),
                  (t.insertJsonData = function (e, t, n, a, o) {
                    var r = (0, ye.getParentIndexRoute_CurIndex)(e),
                      i = r[0],
                      s = r[1],
                      c = (0, ye.getSchemaByIndexRoute)(i, this.jsonSchema);
                    c.required.push(t), (c.properties[t] = n);
                    var l = c.propertyOrder,
                      d = 'before' === a ? Number(s) : Number(s) + 1,
                      m = l.slice(0, d),
                      u = l.slice(d);
                    (c.propertyOrder = [].concat(m, [t], u)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteJsonByIndex_CurKey = function (e, t, n) {
                    var a = (0, ye.getParentIndexRoute)(e),
                      o = (0, ye.getSchemaByIndexRoute)(a, this.jsonSchema);
                    delete o.properties[t];
                    var r = o.propertyOrder.indexOf(t);
                    o.propertyOrder.splice(r, 1);
                    var i = o.required.indexOf(t);
                    o.required.splice(i, 1), this.jsonSchemaChange(n);
                  }),
                  (t.deleteJsonByIndex = function (e, t) {
                    var n = (0, ye.getParentIndexRoute_CurIndex)(e),
                      a = n[0],
                      o = n[1],
                      r = (0, ye.getSchemaByIndexRoute)(a, this.jsonSchema),
                      i = r.propertyOrder[o];
                    delete r.properties[i];
                    var s = r.propertyOrder.indexOf(i);
                    r.propertyOrder.splice(s, 1);
                    var c = r.required.indexOf(i);
                    r.required.splice(c, 1), this.jsonSchemaChange(t);
                  }),
                  (t.updateEnumItem = function (e, t, n, a, o) {
                    var r = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.enum &&
                      r.enumextra &&
                      ((r.enum[t] = n), (r.enumextra[t] = a)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.isExitEnumKey = function (e, t, n) {
                    var a = !1,
                      o = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (o.enum) {
                      var r = E(o.enum);
                      t >= 0 && r.splice(t, 1), r.indexOf(n) >= 0 && (a = !0);
                    }
                    return (
                      ye.KeyWordList &&
                        ye.KeyWordList.indexOf(n) >= 0 &&
                        v.message.warning(
                          n +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      a
                    );
                  }),
                  (t.updateEnumKey = function (e, t, n, a) {
                    var o = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enum && (o.enum[t] = n), this.jsonSchemaChange(a);
                  }),
                  (t.updateEnumText = function (e, t, n, a) {
                    var o = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enumextra && (o.enumextra[t] = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteEnumItem = function (e, t, n) {
                    var a = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enum &&
                      a.enumextra &&
                      (a.enum.splice(t, 1), a.enumextra.splice(t, 1)),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertEnumItem = function (e, t, n, a, o, r) {
                    var i = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (i.enum && i.enumextra) {
                      var s = 'before' === o ? Number(t) : Number(t) + 1,
                        c = i.enum.slice(0, s),
                        l = i.enum.slice(s);
                      i.enum = [].concat(c, [n], l);
                      var d = i.enumextra.slice(0, s),
                        m = i.enumextra.slice(s);
                      i.enumextra = [].concat(d, [a], m);
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
                    var n = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var a = this.getNewEnumIndex(n.enum),
                        o = '选项' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, a, o);
                    }
                  }),
                  (t.copyEnumItem = function (e, t) {
                    var n = (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var a = n.enum[t],
                        o = n.enumextra[t],
                        r = this.getNewEnumIndex(n.enum, a),
                        i = o + '_' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, r, i);
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
                    } else v.message.error('当前schema为空');
                  }),
                  (t.removeConditionProp = function (e) {
                    if (this.jsonSchema) {
                      this.jsonSchema.conditionProps ||
                        (this.jsonSchema.conditionProps = {});
                      var t = this.jsonSchema.conditionProps;
                      e && t[e] && (delete t[e], this.jsonSchemaChange());
                    } else v.message.error('当前schema为空');
                  }),
                  (t.cancelConditionProp = function (e, t) {
                    if (this.jsonSchema) {
                      var n = this.getSchemaByKeyRoute(e);
                      n.isConditionProp = !1;
                      var a = this.keyRoute2indexRoute(e);
                      this.editSchemaData(a, t, n);
                    } else v.message.error('当前schema为空');
                  }),
                  (t.deleteSchemaProp = function (e, t, n) {
                    delete (0, ye.getSchemaByIndexRoute)(e, this.jsonSchema)[t],
                      this.jsonSchemaChange(n);
                  }),
                  g()(e, [
                    {
                      key: 'JSONSchemaObj',
                      get: function () {
                        return (0, x.toJS)(this.jsonSchema);
                      },
                    },
                  ])
                );
              })()),
              (ce = S()(se.prototype, 'triggerChange', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (le = S()(se.prototype, 'jsonSchema', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return {};
                },
              })),
              (de = S()(se.prototype, 'SchemaTypeList', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return he;
                },
              })),
              (me = S()(se.prototype, 'onChange', [x.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return function () {};
                },
              })),
              S()(
                se.prototype,
                'triggerChangeAction',
                [R],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'triggerChangeAction',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'initSchemaTypeList',
                [N],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'initSchemaTypeList',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'initJSONSchemaData',
                [O],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'initJSONSchemaData',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'JSONSchemaObj',
                [x.computed],
                Object.getOwnPropertyDescriptor(se.prototype, 'JSONSchemaObj'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'initOnChange',
                [K],
                Object.getOwnPropertyDescriptor(se.prototype, 'initOnChange'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'jsonSchemaChange',
                [I],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'jsonSchemaChange',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'indexRoute2keyRoute',
                [k],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'indexRoute2keyRoute',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'keyRoute2indexRoute',
                [P],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'keyRoute2indexRoute',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'getSchemaByIndexRoute',
                [J],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'getSchemaByIndexRoute',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'getSchemaByKeyRoute',
                [T],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'getSchemaByKeyRoute',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'getNewJsonKeyIndex',
                [w],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'getNewJsonKeyIndex',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'isExitJsonKey',
                [D],
                Object.getOwnPropertyDescriptor(se.prototype, 'isExitJsonKey'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'isSupportCurType',
                [B],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'isSupportCurType',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'addChildJson',
                [F],
                Object.getOwnPropertyDescriptor(se.prototype, 'addChildJson'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'changeType',
                [V],
                Object.getOwnPropertyDescriptor(se.prototype, 'changeType'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'updateSchemaData',
                [q],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'updateSchemaData',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'editSchemaData',
                [L],
                Object.getOwnPropertyDescriptor(se.prototype, 'editSchemaData'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'editJsonKey',
                [A],
                Object.getOwnPropertyDescriptor(se.prototype, 'editJsonKey'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'addNextJsonData',
                [_],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'addNextJsonData',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'insertJsonData',
                [M],
                Object.getOwnPropertyDescriptor(se.prototype, 'insertJsonData'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'deleteJsonByIndex_CurKey',
                [H],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'deleteJsonByIndex_CurKey',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'deleteJsonByIndex',
                [z],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'deleteJsonByIndex',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'updateEnumItem',
                [G],
                Object.getOwnPropertyDescriptor(se.prototype, 'updateEnumItem'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'isExitEnumKey',
                [U],
                Object.getOwnPropertyDescriptor(se.prototype, 'isExitEnumKey'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'updateEnumKey',
                [W],
                Object.getOwnPropertyDescriptor(se.prototype, 'updateEnumKey'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'updateEnumText',
                [Q],
                Object.getOwnPropertyDescriptor(se.prototype, 'updateEnumText'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'deleteEnumItem',
                [X],
                Object.getOwnPropertyDescriptor(se.prototype, 'deleteEnumItem'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'insertEnumItem',
                [Y],
                Object.getOwnPropertyDescriptor(se.prototype, 'insertEnumItem'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'getNewEnumIndex',
                [Z],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'getNewEnumIndex',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'addEnumItem',
                [$],
                Object.getOwnPropertyDescriptor(se.prototype, 'addEnumItem'),
                se.prototype,
              ),
              S()(
                se.prototype,
                'copyEnumItem',
                [ee],
                Object.getOwnPropertyDescriptor(se.prototype, 'copyEnumItem'),
                se.prototype,
              ),
              (ue = S()(se.prototype, 'childElemSort', [te], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  var e = this;
                  return function (t) {
                    for (
                      var n = (0, ye.getSchemaByIndexRoute)(t, e.jsonSchema),
                        a = n.propertyOrder,
                        o = [],
                        r = [],
                        i = [],
                        s = [],
                        c = [],
                        l = [],
                        d = [],
                        m = [],
                        u = 0,
                        p = a.length;
                      u < p;
                      u++
                    ) {
                      var h = a[u],
                        y = n.properties[h];
                      switch ((0, ye.getCurrentFormat)(y)) {
                        case 'input':
                        case 'url':
                          o.push(h);
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
                          m.push(h);
                      }
                    }
                    (n.propertyOrder = [].concat(o, r, i, s, l, c, d, m)),
                      e.jsonSchemaChange();
                  };
                },
              })),
              S()(
                se.prototype,
                'checkConditionProp',
                [ne],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'checkConditionProp',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'addConditionProp',
                [ae],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'addConditionProp',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'removeConditionProp',
                [oe],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'removeConditionProp',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'cancelConditionProp',
                [re],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'cancelConditionProp',
                ),
                se.prototype,
              ),
              S()(
                se.prototype,
                'deleteSchemaProp',
                [ie],
                Object.getOwnPropertyDescriptor(
                  se.prototype,
                  'deleteSchemaProp',
                ),
                se.prototype,
              ),
              se),
          },
          xe = require('@ant-design/icons'),
          ve = v.Select.Option,
          Ee = (0, c.inject)(function (e) {
            return {
              getSchemaByKeyRoute: e.jsonSchemaStore.getSchemaByKeyRoute,
            };
          })(
            (0, c.observer)(function (e) {
              var t = e.conditionRule,
                n = e.hiddenRuleConditionValueChange,
                a = e.getSchemaByKeyRoute,
                o = {};
              if (t.conditionProp && t.conditionProp.keyRoute) {
                var i = a(t.conditionProp.keyRoute);
                i.items && (o = i.items);
              }
              return !t.conditionProp ||
                ('radio' !== t.conditionProp.format &&
                  'single-select' !== t.conditionProp.format)
                ? t.conditionProp && 'boolean' === t.conditionProp.format
                  ? r().createElement(
                      v.Radio.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n(e.target.value);
                        },
                        defaultValue: t.conditionValue,
                      },
                      r().createElement(
                        v.Radio,
                        { value: !0, key: !0 },
                        'true',
                      ),
                      r().createElement(
                        v.Radio,
                        { value: !1, key: !1 },
                        'false',
                      ),
                    )
                  : r().createElement(v.Input, {
                      defaultValue: t.conditionValue,
                      onPressEnter: function (e) {
                        return n(e.target.value);
                      },
                      onBlur: function (e) {
                        return n(e.target.value);
                      },
                    })
                : r().createElement(
                    v.Select,
                    {
                      defaultValue: t.conditionValue,
                      style: { width: 150 },
                      onChange: function (e) {
                        n(e);
                      },
                    },
                    o &&
                      o.enum &&
                      o.enum.map(function (e, n) {
                        return r().createElement(
                          ve,
                          { key: e, value: e, select: e === t.conditionValue },
                          o.enumextra[n],
                        );
                      }),
                  );
            }),
          ),
          be = [].concat(
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
        function je(e) {
          var t = !1;
          return (
            ('#' + ['number'].join('#') + '#').indexOf('#' + e + '#') >= 0 &&
              (t = !0),
            t
          );
        }
        function Ce(e) {
          var t = !1;
          return (
            ('#' + ['array'].join('#') + '#').indexOf('#' + e + '#') >= 0 &&
              (t = !0),
            t
          );
        }
        n(975);
        var Re = v.Input.TextArea,
          Ne = v.Select.Option,
          Oe = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.targetJsonSchema,
                    s = a.editSchemaData;
                  if (i[e] !== t) {
                    var c = {};
                    (c[e] = t), s(o, r, c);
                  }
                }),
                (n.renderDefaultContent = function (e, t, a) {
                  if ('boolean' === e)
                    return o.createElement(v.Switch, {
                      style: { display: 'inline-block' },
                      defaultChecked: t.default,
                      checkedChildren: 'true',
                      unCheckedChildren: 'false',
                      onChange: function (e) {
                        n.handleValueChange('default', e);
                      },
                    });
                  if ('radio' === e || 'single-select' === e) {
                    var r = t.items.enum,
                      i = t.items.enumextra;
                    return o.createElement(
                      v.Radio.Group,
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
                          var n = i[t],
                            r = a + '-radio-' + e;
                          return o.createElement(
                            v.Radio,
                            { value: e, key: r },
                            n,
                          );
                        }),
                    );
                  }
                  if ('select' === e) {
                    var s = t.items.enum,
                      c = t.items.enumextra;
                    return o.createElement(
                      v.Checkbox.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: function (e) {
                          n.handleValueChange('default', e);
                        },
                        defaultValue: t.default,
                      },
                      s &&
                        s.length > 0 &&
                        s.map(function (e, t) {
                          var n = c[t],
                            r = a + '-radio-' + e;
                          return o.createElement(
                            v.Checkbox,
                            { value: e, key: r },
                            n,
                          );
                        }),
                    );
                  }
                  return 'color' === e
                    ? o.createElement(v.Input, {
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
                      ? o.createElement(Re, {
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
                        ? o.createElement(v.InputNumber, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + t.title + '的默认值',
                            defaultValue: t.default,
                            onChange: function (e) {
                              n.handleValueChange('default', e);
                            },
                          })
                        : o.createElement(v.Input, {
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
                  var a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.targetJsonSchema,
                    s = a.addConditionProp,
                    c = a.removeConditionProp,
                    l = a.indexRoute2keyRoute,
                    d = t || l(o);
                  e
                    ? (s({
                        key: r,
                        keyRoute: d,
                        title: i.title,
                        format: i.format,
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
                    a = {};
                  t.hiddenRule && (a = (0, x.toJS)(t.hiddenRule)),
                    (a.conditionProp = e),
                    n.handleValueChange('hiddenRule', a);
                }),
                (n.hiddenRuleConditionValueChange = function (e) {
                  var t = n.props.targetJsonSchema,
                    a = {};
                  t.hiddenRule && (a = (0, x.toJS)(t.hiddenRule)),
                    (a.conditionValue = e),
                    n.handleValueChange('hiddenRule', a);
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
                  a = n.nodeKey,
                  r = n.indexRoute,
                  i = n.targetJsonSchema,
                  s = n.checkConditionProp,
                  c = n.jsonSchema,
                  l = n.indexRoute2keyRoute,
                  d = (0, ye.getCurrentFormat)(i),
                  m = l(r);
                e = (0, ye.hasProperties)(i.isConditionProp)
                  ? i.isConditionProp
                  : s(m);
                var u = {};
                c.conditionProps && (u = c.conditionProps);
                var p,
                  h,
                  y = Object.keys(u),
                  g = {};
                return (
                  i.hiddenRule && (g = i.hiddenRule),
                  o.createElement(
                    'div',
                    { className: 'advance-config-model' },
                    ((p = d),
                    (h = !1),
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
                    ).indexOf('#' + p + '#') >= 0 && (h = !0),
                    h &&
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-isConditionProp-' + e,
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '当前属性设置为条件字段后，其他字段可以根据其数值做对应的联动',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '条件字段',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            {
                              className: 'form-item-box',
                              key: a + '-isConditionProp-switch-' + e,
                            },
                            o.createElement(v.Switch, {
                              style: { display: 'inline-block' },
                              defaultChecked: e,
                              checkedChildren: '是',
                              unCheckedChildren: '否',
                              onChange: function (e) {
                                t.curConditionPropChange(e, m);
                              },
                            }),
                          ),
                        ),
                      )),
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
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-readOnly-' + i.readOnly,
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '当前属性设置为只读后，用户不能对其进行任何编辑操作',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '是否只读',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.Switch, {
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
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-isRequired-' + i.isRequired,
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '当前属性设置为必填项后，如果用户没有给其设置数值，则会进行标红提示。',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '是否必填项',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.Switch, {
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
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-default',
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            { placement: 'top' },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '默认值',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            this.renderDefaultContent(d, i, a),
                          ),
                        ),
                      ),
                    (function (e) {
                      var t = !1;
                      return (
                        ('#' + be.join('#') + '#').indexOf('#' + e + '#') >=
                          0 && (t = !0),
                        t
                      );
                    })(d) &&
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-description',
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '字段描述内容将作为Title的补充信息提供给用户',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '字段描述',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.Input, {
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
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-placeholder',
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '输入提示内容将作为输入区域的提示信息展示给用户',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '输入提示',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.Input, {
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
                    je(d) &&
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-minimum-' + i.minimum,
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '设置最小值后，用户输入的数值必须大于当前最小值',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '最小值',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.InputNumber, {
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
                    je(d) &&
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-maximum-' + i.maximum,
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '设置最大值后，用户输入的数值必须大于当前最大值',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '最大值',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.InputNumber, {
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
                    Ce(d) &&
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-minimum-child-' + i['minimum-child'],
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '设置最少子项个数后，当前字段的子字段数量必须大于最少子项数',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '最少子项数',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.InputNumber, {
                              style: { display: 'inline-block' },
                              defaultValue: i['minimum-child'],
                              onChange: function (e) {
                                t.handleValueChange('minimum-child', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    Ce(d) &&
                      o.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: a + '-maximum-child-' + i['maximum-child'],
                        },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            v.Tooltip,
                            {
                              title:
                                '设置最多子项个数后，当前字段的子字段数量必须少于最多子项数',
                              placement: 'top',
                            },
                            o.createElement(
                              'span',
                              { className: 'title-text' },
                              '最多子项数',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            'div',
                            { className: 'form-item-box' },
                            o.createElement(v.InputNumber, {
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
                      o.createElement(
                        'div',
                        { className: 'wide-screen-element-warp' },
                        o.createElement(
                          'div',
                          { className: 'element-title' },
                          o.createElement(
                            'span',
                            { className: 'title-text' },
                            '隐藏规则',
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'content-item' },
                          o.createElement(
                            v.Button,
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
                      o.createElement(
                        'div',
                        { className: 'hidden-rule-box' },
                        o.createElement(
                          'div',
                          { className: 'rule-title' },
                          o.createElement(
                            'div',
                            { className: 'title' },
                            '隐藏规则：',
                          ),
                          o.createElement(
                            'div',
                            { className: 'btn-box' },
                            o.createElement(
                              v.Button,
                              { size: 'small', onClick: this.deleteHiddenRule },
                              '删除规则',
                            ),
                          ),
                        ),
                        o.createElement(
                          'div',
                          { className: 'rule-condition-box' },
                          o.createElement(
                            'div',
                            { className: 'condition-title' },
                            '隐藏条件：',
                          ),
                          o.createElement(
                            'div',
                            { className: 'condition-prop' },
                            o.createElement(
                              v.Select,
                              {
                                defaultValue: g.conditionProp
                                  ? g.conditionProp.keyRoute
                                  : null,
                                style: { width: 150 },
                                onChange: function (e) {
                                  var n = u[e];
                                  t.hiddenRuleConditionChange(n);
                                },
                              },
                              y.map(function (e) {
                                var t = u[e];
                                return o.createElement(
                                  Ne,
                                  {
                                    key: t.keyRoute,
                                    value: t.keyRoute,
                                    disabled: m === t.keyRoute,
                                  },
                                  t.title,
                                  '(',
                                  t.key,
                                  ')',
                                );
                              }),
                            ),
                          ),
                          o.createElement(
                            'div',
                            { className: 'condition-equal' },
                            '等于',
                          ),
                          o.createElement(
                            'div',
                            { className: 'condition-value' },
                            o.createElement(Ee, {
                              conditionRule: g,
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
          })(o.PureComponent);
        Oe.propTypes = {
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          checkConditionProp: d().any,
          addConditionProp: d().any,
          removeConditionProp: d().any,
          jsonSchema: d().any,
        };
        var Ke = (0, c.inject)(function (e) {
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
          })((0, c.observer)(Oe)),
          Ie = (n(915), v.Select.Option),
          ke = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).selectHandleChange = function (
                  e,
                ) {
                  var t = n.props,
                    a = t.indexRoute,
                    o = t.jsonKey,
                    r = t.changeType;
                  t.targetJsonSchema.format !== e &&
                    r(a, o, ye.TypeDataList[e]);
                }),
                (n.handleJsonKeyChange = function (e) {
                  var t = e.target.value,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.editJsonKey,
                    s = a.isExitJsonKey;
                  r !== t &&
                    (s(o, t)
                      ? v.message.warning('当前key已存在，请换一个吧。')
                      : i(o, t));
                }),
                (n.handleTitleChange = function (e) {
                  var t = e.target.value,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.editSchemaData;
                  a.targetJsonSchema.title !== t && i(o, r, { title: t });
                }),
                (n.getCurrentTypeList = function (e) {
                  var t = n.props.SchemaTypeList,
                    a = t[e || 'all'];
                  return (a && 0 !== a.length) || (a = t.all), a;
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.targetJsonSchema,
                    o = e.addChildJson,
                    r = e.addNextJsonData,
                    i = (0, ye.getCurrentFormat)(a);
                  (0, ye.isBoxSchemaData)(i) ? o(t) : r(t);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.targetJsonSchema,
                    o = e.getSchemaByIndexRoute,
                    r = e.indexRoute2keyRoute,
                    i = e.jsonKey,
                    s = e.insertJsonData,
                    c = e.getNewJsonKeyIndex,
                    l = E(a),
                    d = (0, ye.getParentIndexRoute)(t),
                    m = c(o(d), i),
                    u = (0, ye.getCurrentFormat)(a);
                  C(r(d) + '-' + m + '-' + u, r(t)), s(t, m, l);
                }),
                (n.onDeleteBtnEvent = function () {
                  var e = n.props,
                    t = e.jsonKey,
                    a = e.indexRoute;
                  (0, e.deleteJsonByIndex_CurKey)(a, t);
                }),
                (n.ignoreDragEvent = function (e) {
                  e.preventDefault(), e.stopPropagation();
                }),
                (n.childElemSort = function () {
                  var e = n.props,
                    t = e.indexRoute;
                  (0, e.childElemSort)(t);
                }),
                (n.state = { isShowAdvance: !1 }),
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
                  a = t.indexRoute,
                  r = t.jsonKey,
                  i = t.nodeKey,
                  s = t.targetJsonSchema,
                  c = this.state.isShowAdvance,
                  l = this.props.isFirstSchema || !1,
                  d = this.props.isFixed || !1,
                  m = this.props.keyIsFixed || !1,
                  u = this.props.typeIsFixed || !1,
                  p = this.props.titleIsFixed || !1,
                  h = this.props.isShowAdvanceBtn || !1,
                  y = this.getCurrentTypeList(n),
                  g = (0, ye.getCurrentFormat)(s),
                  f = s.isFixedSchema || (0, ye.isFirstSchemaData)(g),
                  S = this.props.hideOperaBtn || !1,
                  x = f || l || d || !1,
                  E = (0, ye.isBoxSchemaData)(g);
                return o.createElement(
                  o.Fragment,
                  null,
                  s &&
                    o.createElement(
                      'div',
                      { className: 'base-schema-box', id: i },
                      o.createElement(
                        'div',
                        {
                          className: 'key-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        o.createElement(v.Input, {
                          defaultValue: r || 'key值不存在',
                          disabled: x || m,
                          onPressEnter: this.handleJsonKeyChange,
                          onBlur: this.handleJsonKeyChange,
                        }),
                      ),
                      o.createElement(
                        'div',
                        {
                          className: 'type-select-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        o.createElement(
                          v.Select,
                          {
                            defaultValue: g,
                            style: { width: 150 },
                            onChange: this.selectHandleChange,
                            disabled: x || u,
                          },
                          y.map(function (e) {
                            return o.createElement(Ie, { key: e, value: e }, e);
                          }),
                        ),
                      ),
                      o.createElement(
                        'div',
                        {
                          className: 'title-input-item',
                          draggable: 'true',
                          onDragStart: this.ignoreDragEvent,
                        },
                        o.createElement(v.Input, {
                          defaultValue: s.title,
                          disabled: x || p,
                          onPressEnter: this.handleTitleChange,
                          onBlur: this.handleTitleChange,
                        }),
                      ),
                      !S &&
                        o.createElement(
                          'div',
                          { className: 'operate-item' },
                          !x &&
                            o.createElement(
                              v.Tooltip,
                              { title: '删除' },
                              o.createElement(xe.CloseOutlined, {
                                className: 'operate-btn delete-operate',
                                onClick: this.onDeleteBtnEvent,
                              }),
                            ),
                          o.createElement(
                            v.Tooltip,
                            { title: E ? '新增子节点' : '新增兄弟节点' },
                            o.createElement(xe.PlusOutlined, {
                              className: 'operate-btn',
                              onClick: this.onAddBtnEvent,
                            }),
                          ),
                          E &&
                            o.createElement(
                              v.Tooltip,
                              { title: '数据项排序' },
                              o.createElement(xe.SortAscendingOutlined, {
                                className: 'operate-btn',
                                onClick: this.childElemSort,
                              }),
                            ),
                          !x &&
                            o.createElement(
                              v.Tooltip,
                              { title: '复制' },
                              o.createElement(xe.CopyOutlined, {
                                className: 'operate-btn',
                                onClick: this.onCopyBtnEvent,
                              }),
                            ),
                          !x &&
                            o.createElement(
                              v.Tooltip,
                              { title: '高级设置' },
                              o.createElement(xe.SettingOutlined, {
                                className: 'operate-btn',
                                onClick: function () {
                                  e.setState({ isShowAdvance: !0 });
                                },
                              }),
                            ),
                          !x &&
                            o.createElement(
                              v.Tooltip,
                              { title: '按住进行拖拽' },
                              o.createElement(xe.DragOutlined, {
                                className: 'operate-btn drag-btn',
                              }),
                            ),
                        ),
                      S &&
                        o.createElement(
                          'div',
                          { className: 'operate-item' },
                          h &&
                            o.createElement(
                              v.Tooltip,
                              { title: '高级设置' },
                              o.createElement(xe.SettingOutlined, {
                                className: 'operate-btn',
                                onClick: function () {
                                  e.setState({ isShowAdvance: !0 });
                                },
                              }),
                            ),
                          ' ',
                        ),
                      c &&
                        o.createElement(
                          v.Modal,
                          {
                            visible: !0,
                            title:
                              '高级设置 / 当前字段：' + s.title + '(' + r + ')',
                            onCancel: function () {
                              e.setState({ isShowAdvance: !1 });
                            },
                            footer: [
                              o.createElement(
                                v.Button,
                                {
                                  key: 'submit',
                                  type: 'primary',
                                  onClick: function () {
                                    e.setState({ isShowAdvance: !1 });
                                  },
                                },
                                '保存并关闭',
                              ),
                            ],
                          },
                          o.createElement(Ke, {
                            indexRoute: a,
                            jsonKey: r,
                            targetJsonSchema: s,
                          }),
                        ),
                    ),
                  !s &&
                    o.createElement(
                      'div',
                      { className: 'base-schema-box' },
                      o.createElement(
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
          })(o.PureComponent);
        ke.propTypes = {
          parentType: d().string,
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          isFixed: d().any,
          hideOperaBtn: d().any,
          isShowAdvanceBtn: d().any,
          keyIsFixed: d().any,
          typeIsFixed: d().any,
          titleIsFixed: d().any,
        };
        var Pe = (0, c.inject)(function (e) {
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
          })((0, c.observer)(ke)),
          Je = v.Tree.TreeNode,
          Te = function (e) {
            return r().createElement(Pe, e);
          },
          we = function (e) {
            var t = e.jsonKey,
              n = e.indexRoute,
              a = e.nodeKey,
              o = e.targetJsonSchema,
              i = (0, ye.getCurrentFormat)(o),
              s = n ? n + '-0' : '0',
              c = a ? a + '-items' : 'items';
            return r().createElement(
              Je,
              {
                className: i + '-schema schema-item-form',
                id: a,
                key: a,
                indexRoute: n,
                jsonKey: t,
                title: Te(u()({}, e)),
              },
              (function (e) {
                var t = e.parentType,
                  n = e.jsonKey,
                  a = e.indexRoute,
                  o = e.nodeKey,
                  i = e.targetJsonSchema;
                return r().createElement(
                  Je,
                  {
                    className: 'array-item-schema schema-item-form',
                    id: o,
                    key: o,
                    indexRoute: a,
                    jsonKey: n,
                    disabled: !0,
                    title: Te({
                      indexRoute: a,
                      jsonKey: n,
                      targetJsonSchema: i,
                      parentType: t,
                      nodeKey: o,
                      isFixed: !0,
                    }),
                  },
                  (function (e) {
                    var t = e.properties,
                      n = e.parentIndexRoute,
                      a = e.parentNodeKey,
                      o = e.parentType;
                    return e.propertyOrder.map(function (e, r) {
                      var i = n ? n + '-' + r : '' + r,
                        s = e,
                        c = t[s],
                        l = (0, ye.getCurrentFormat)(c),
                        d = (a ? a + '-' : '') + l + '-' + s;
                      return tt({
                        parentType: o,
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
                    parentIndexRoute: a,
                    parentNodeKey: o,
                    parentType: 'array-object',
                  }),
                );
              })({
                parentType: i,
                jsonKey: 'items',
                indexRoute: s,
                nodeKey: c,
                targetJsonSchema: o.items,
              }),
            );
          },
          De = (n(894), v.Select.Option),
          Be = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).typeHandleChange = function (e) {
                  var t = n.props,
                    a = t.indexRoute,
                    o = t.jsonKey,
                    r = t.targetJsonSchema,
                    i = t.typeSelectData,
                    s = t.editSchemaData,
                    c = t.updateSchemaData;
                  if (r.default !== e) {
                    if ((s(a, o, { default: e }), i)) {
                      var l = i[e];
                      l &&
                        '数据源类型' === r.title &&
                        s((0, ye.getNextIndexRoute)(a), 'data', l);
                    }
                    if (ye.EventTypeDataList) {
                      var d = ye.EventTypeDataList[e];
                      '事件类型' === r.title &&
                        d &&
                        c((0, ye.getParentIndexRoute)(a), d);
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
                  a = (0, ye.getCurrentFormat)(n),
                  r = n.enum || [],
                  i = n.enumextra || [];
                return o.createElement(
                  'div',
                  { className: 'typeSelect-schema-box', id: t },
                  o.createElement(
                    'div',
                    { className: 'key-input-item' },
                    o.createElement(
                      v.Select,
                      {
                        defaultValue: n.default || 'local',
                        onChange: this.typeHandleChange,
                      },
                      r.map(function (e, t) {
                        return o.createElement(De, { key: e, value: e }, i[t]);
                      }),
                    ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'type-select-item' },
                    o.createElement(
                      v.Select,
                      { defaultValue: a, style: { width: 120 }, disabled: !0 },
                      o.createElement(De, { key: a, value: a }, a),
                    ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'title-input-item' },
                    o.createElement(v.Input, {
                      defaultValue: n.title,
                      disabled: !0,
                    }),
                  ),
                  o.createElement('div', { className: 'operate-item' }, ' '),
                );
              }),
              n
            );
          })(o.PureComponent);
        Be.propTypes = {
          parentType: d().string,
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          typeSelectData: d().any,
          isFixed: d().any,
        };
        var Fe = (0, c.inject)(function (e) {
            return {
              editSchemaData: e.jsonSchemaStore.editSchemaData,
              updateSchemaData: e.jsonSchemaStore.updateSchemaData,
            };
          })((0, c.observer)(Be)),
          Ve = v.Tree.TreeNode,
          qe = function (e) {
            return r().createElement(Pe, e);
          },
          Le = {
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
          Ae = v.Tree.TreeNode,
          _e = function (e) {
            return r().createElement(Pe, e);
          },
          Me = v.Tree.TreeNode,
          He = function (e) {
            return r().createElement(Pe, e);
          },
          ze = v.Tree.TreeNode,
          Ge = function (e) {
            return r().createElement(Pe, e);
          },
          Ue = (n(94), v.Select.Option),
          We = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleEnumKeyChange = function (
                  e,
                ) {
                  var t = e.target.value,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.enumIndex,
                    i = a.enumKey,
                    s = a.isExitEnumKey,
                    c = a.updateEnumKey;
                  t !== i &&
                    (s(o, r, t)
                      ? v.message.warning(
                          '对不起，存在相同的key值，请重新编辑。',
                        )
                      : c(o, r, t));
                }),
                (n.handleEnumTextChange = function (e) {
                  var t = e.target.value,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.enumIndex,
                    i = a.enumText,
                    s = a.updateEnumText;
                  t !== i && s(o, r, t);
                }),
                (n.onAddBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.enumIndex;
                  (0, e.addEnumItem)(t, a);
                }),
                (n.onCopyBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.enumIndex;
                  (0, e.copyEnumItem)(t, a);
                }),
                (n.onDeleteBtnEvent = function () {
                  var e = n.props,
                    t = e.indexRoute,
                    a = e.enumIndex,
                    o = e.getSchemaByIndexRoute,
                    r = e.deleteEnumItem,
                    i = o(t);
                  i.enum && i.enum.length > 1
                    ? r(t, a)
                    : v.message.warning('删除失败，请至少保留一个可选项。');
                }),
                (n.onAddBtnEvent = n.onAddBtnEvent.bind(n)),
                (n.onCopyBtnEvent = n.onCopyBtnEvent.bind(n)),
                (n.onDeleteBtnEvent = n.onDeleteBtnEvent.bind(n)),
                (n.handleEnumKeyChange = n.handleEnumKeyChange.bind(n)),
                (n.handleEnumTextChange = n.handleEnumTextChange.bind(n)),
                n
              );
            }
            return (
              t()(n, e),
              (n.prototype.render = function () {
                var e = this.props,
                  t = e.enumKey,
                  n = e.enumText,
                  a = e.enumNodeKey;
                return o.createElement(
                  'div',
                  { className: 'enum-schema-box', id: a },
                  o.createElement(
                    'div',
                    { className: 'key-input-item' },
                    o.createElement(v.Input, {
                      defaultValue: t,
                      onPressEnter: this.handleEnumKeyChange,
                      onBlur: this.handleEnumKeyChange,
                    }),
                  ),
                  o.createElement(
                    'div',
                    { className: 'type-select-item' },
                    o.createElement(
                      v.Select,
                      { defaultValue: 'string', style: { width: 120 } },
                      o.createElement(
                        Ue,
                        { key: 'string', value: 'string' },
                        'string',
                      ),
                    ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'title-input-item' },
                    o.createElement(v.Input, {
                      defaultValue: n,
                      onPressEnter: this.handleEnumTextChange,
                      onBlur: this.handleEnumTextChange,
                    }),
                  ),
                  o.createElement(
                    'div',
                    { className: 'operate-item' },
                    o.createElement(
                      v.Tooltip,
                      { title: '删除' },
                      o.createElement(xe.CloseOutlined, {
                        className: 'operate-btn delete-operate',
                        onClick: this.onDeleteBtnEvent,
                      }),
                    ),
                    o.createElement(
                      v.Tooltip,
                      { title: '新增兄弟节点' },
                      o.createElement(xe.PlusOutlined, {
                        className: 'operate-btn',
                        onClick: this.onAddBtnEvent,
                      }),
                    ),
                    o.createElement(
                      v.Tooltip,
                      { title: '复制' },
                      o.createElement(xe.CopyOutlined, {
                        className: 'operate-btn',
                        onClick: this.onCopyBtnEvent,
                      }),
                    ),
                  ),
                );
              }),
              n
            );
          })(o.PureComponent);
        We.propTypes = {
          indexRoute: d().string,
          enumIndex: d().any,
          enumKey: d().string,
          enumText: d().string,
          enumNodeKey: d().string,
        };
        var Qe = (0, c.inject)(function (e) {
            return {
              getSchemaByIndexRoute: e.jsonSchemaStore.getSchemaByIndexRoute,
              updateEnumKey: e.jsonSchemaStore.updateEnumKey,
              updateEnumText: e.jsonSchemaStore.updateEnumText,
              isExitEnumKey: e.jsonSchemaStore.isExitEnumKey,
              deleteEnumItem: e.jsonSchemaStore.deleteEnumItem,
              addEnumItem: e.jsonSchemaStore.addEnumItem,
              copyEnumItem: e.jsonSchemaStore.copyEnumItem,
            };
          })((0, c.observer)(We)),
          Xe = v.Tree.TreeNode,
          Ye = function (e) {
            return r().createElement(Qe, e);
          },
          Ze = v.Tree.TreeNode,
          $e = function (e) {
            return r().createElement(Qe, e);
          },
          et = v.Tree.TreeNode,
          tt = function (e) {
            var t = e.targetJsonSchema;
            switch ((0, ye.getCurrentFormat)(t)) {
              case 'object':
              case 'func':
              case 'style':
              case 'data':
              case 'widgets':
              case 'func-schema':
              case 'style-schema':
              case 'data-schema':
              case 'widgets-schema':
              case 'event-schema':
                return ot(e);
              case 'array':
                return we(e);
              case 'datasource':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i),
                    c = i.properties.data || {};
                  return r().createElement(
                    Ve,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: qe(u()({}, e)),
                    },
                    r().createElement(Ve, {
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
                          targetJsonSchema: i.properties.type,
                          parentType: s,
                          nodeKey: o + '-type',
                          typeSelectData: Le,
                        }),
                        r().createElement(Fe, t)),
                    }),
                    r().createElement(Ve, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + c.format,
                      key: o + '-data-' + c.format,
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'data',
                      disabled: !0,
                      title: qe({
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'data',
                        targetJsonSchema: c,
                        parentType: s,
                        nodeKey: o + '-data-' + c.format,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    r().createElement(Ve, {
                      className:
                        'dataSource-filter-item-schema schema-item-form',
                      id: o + '-filter',
                      key: o + '-filter',
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'filter',
                      disabled: !0,
                      title: qe({
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'filter',
                        targetJsonSchema: i.properties.filter,
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
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i),
                    c = i.properties.config || {},
                    l = i.properties.data || {};
                  return r().createElement(
                    Ae,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: _e(u()({}, e)),
                    },
                    r().createElement(Ae, {
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
                          targetJsonSchema: i.properties.type,
                          parentType: s,
                          nodeKey: o + '-type',
                        }),
                        r().createElement(Fe, t)),
                    }),
                    r().createElement(Ae, {
                      className:
                        'dataSource-config-item-schema schema-item-form',
                      id: o + '-config-' + l.format,
                      key: o + '-config-' + l.format,
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'config',
                      disabled: !0,
                      title: _e({
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'config',
                        targetJsonSchema: c,
                        parentType: s,
                        nodeKey: o + '-config-' + c.format,
                        hideOperaBtn: !0,
                        keyIsFixed: !0,
                        typeIsFixed: !0,
                      }),
                    }),
                    r().createElement(Ae, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + l.format,
                      key: o + '-data-' + l.format,
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'data',
                      disabled: !0,
                      title: _e({
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'data',
                        targetJsonSchema: l,
                        parentType: s,
                        nodeKey: o + '-data-' + l.format,
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
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i),
                    c = i.properties.type || {},
                    l = i.properties.register || {},
                    d = i.properties.actionFunc || {},
                    m = i.properties.trigger || {},
                    p = i.properties.eventData || {};
                  return r().createElement(
                    Me,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: He(u()({}, e)),
                    },
                    r().createElement(Me, {
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
                        r().createElement(Fe, t)),
                    }),
                    'on' === c.default &&
                      l &&
                      r().createElement(Me, {
                        className:
                          'event-register-item-schema schema-item-form',
                        id: o + '-register-' + c.default,
                        key: o + '-register-' + c.default,
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'register',
                        disabled: !0,
                        title: He({
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
                      d &&
                      r().createElement(Me, {
                        className:
                          'event-actionFunc-item-schema schema-item-form',
                        id: o + '-actionFunc-' + c.default,
                        key: o + '-actionFunc-' + c.default,
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'actionFunc',
                        disabled: !0,
                        title: He({
                          indexRoute: a ? a + '-2' : '2',
                          jsonKey: 'actionFunc',
                          targetJsonSchema: d,
                          parentType: s,
                          nodeKey: o + '-actionFunc-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'emit' === c.default &&
                      m &&
                      r().createElement(Me, {
                        className: 'event-trigger-item-schema schema-item-form',
                        id: o + '-trigger-' + c.default,
                        key: o + '-trigger-' + c.default,
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'trigger',
                        disabled: !0,
                        title: He({
                          indexRoute: a ? a + '-1' : '1',
                          jsonKey: 'trigger',
                          targetJsonSchema: m,
                          parentType: s,
                          nodeKey: o + '-trigger-' + c.default,
                          hideOperaBtn: !0,
                          keyIsFixed: !0,
                          typeIsFixed: !0,
                        }),
                      }),
                    'emit' === c.default &&
                      p &&
                      r().createElement(Me, {
                        className:
                          'event-eventData-item-schema schema-item-form',
                        id: o + '-eventData-' + c.default,
                        key: o + '-eventData-' + c.default,
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'eventData',
                        disabled: !0,
                        title: He({
                          indexRoute: a ? a + '-2' : '2',
                          jsonKey: 'eventData',
                          targetJsonSchema: p,
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
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i),
                    c = i.propertyOrder[0],
                    l = i.properties[c];
                  return r().createElement(
                    ze,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: Ge(u()({}, e)),
                    },
                    r().createElement(ze, {
                      className: 'quantity-unit-item-schema schema-item-form',
                      id: o + '-' + c,
                      key: o + '-' + c,
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: c,
                      disabled: !0,
                      title: Ge({
                        indexRoute: a ? a + '-0' : '0',
                        jsonKey: c,
                        targetJsonSchema: l,
                        parentType: s,
                        nodeKey: o + '-' + c,
                        typeIsFixed: !0,
                        hideOperaBtn: !0,
                        isShowAdvanceBtn: !0,
                      }),
                    }),
                    r().createElement(ze, {
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
                          targetJsonSchema: i.properties.quantity,
                          parentType: s,
                          nodeKey: o + '-quantity',
                        }),
                        r().createElement(Fe, t)),
                    }),
                  );
                })(e);
              case 'radio':
              case 'single-select':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i),
                    c = i.items.enum,
                    l = i.items.enumextra,
                    d = a ? a + '-0' : '0';
                  return r().createElement(
                    Xe,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: ((t = u()({}, e)), r().createElement(Pe, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = l[t],
                          a = '' + o + s + '-' + e;
                        return r().createElement(Xe, {
                          className: 'enum-item-schema schema-item-form',
                          id: a,
                          key: a,
                          indexRoute: d,
                          disabled: !0,
                          title: Ye({
                            indexRoute: d,
                            enumIndex: t,
                            enumKey: e,
                            enumText: n,
                            enumNodeKey: a,
                          }),
                        });
                      }),
                  );
                })(e);
              case 'select':
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i),
                    c = i.items.enum,
                    l = i.items.enumextra,
                    d = a ? a + '-0' : '0';
                  return r().createElement(
                    Ze,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: ((t = u()({}, e)), r().createElement(Pe, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = l[t],
                          a = '' + o + s + '-' + e;
                        return r().createElement(Ze, {
                          className: 'enum-item-schema schema-item-form',
                          id: a,
                          key: a,
                          indexRoute: d,
                          disabled: !0,
                          title: $e({
                            indexRoute: d,
                            enumIndex: t,
                            enumKey: e,
                            enumText: n,
                            enumNodeKey: a,
                          }),
                        });
                      }),
                  );
                })(e);
              default:
                return (function (e) {
                  var t,
                    n = e.jsonKey,
                    a = e.indexRoute,
                    o = e.nodeKey,
                    i = e.targetJsonSchema,
                    s = (0, ye.getCurrentFormat)(i);
                  return r().createElement(et, {
                    className: s + '-schema schema-item-form',
                    id: o,
                    key: o,
                    indexRoute: a,
                    jsonKey: n,
                    title: ((t = u()({}, e)), r().createElement(Pe, t)),
                  });
                })(e);
            }
          },
          nt = v.Tree.TreeNode,
          at = function (e) {
            return r().createElement(Pe, e);
          },
          ot = function (e) {
            var t,
              n,
              a,
              o,
              i,
              s = e.jsonKey,
              c = e.indexRoute,
              l = e.nodeKey,
              d = e.targetJsonSchema,
              m = e.isOnlyShowChild,
              p = (0, ye.getCurrentFormat)(d),
              h = d.isFixedSchema || (0, ye.isFirstSchemaData)(p),
              y =
                ((t = {
                  propertyOrder: d.propertyOrder,
                  properties: d.properties,
                  parentIndexRoute: c,
                  parentNodeKey: l,
                  parentType: p,
                  isOnlyShowChild: m,
                }),
                (n = t.properties),
                (a = t.parentIndexRoute),
                (o = t.parentNodeKey),
                (i = t.parentType),
                t.propertyOrder.map(function (e, t) {
                  var r = a ? a + '-' + t : '' + t,
                    s = e,
                    c = n[s],
                    l = (0, ye.getCurrentFormat)(c),
                    d = (o ? o + '-' : '') + l + '-' + s;
                  return tt({
                    parentType: i,
                    jsonKey: s,
                    indexRoute: r,
                    key: d,
                    nodeKey: d,
                    targetJsonSchema: c,
                  });
                })),
              g = r().createElement(
                nt,
                {
                  className: p + '-schema schema-item-form',
                  id: l,
                  key: l,
                  indexRoute: c,
                  jsonKey: s,
                  disabled: h,
                  title: at(u()({}, e)),
                },
                y,
              );
            return m ? y : g;
          },
          rt =
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
                  a = e.cancelConditionProp,
                  o = {};
                t.conditionProps && (o = t.conditionProps);
                var i = Object.keys(o);
                return 0 === i.length
                  ? ''
                  : r().createElement(
                      'div',
                      { className: 'condition-props-box' },
                      r().createElement(
                        'div',
                        { className: 'title' },
                        r().createElement(
                          v.Tooltip,
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
                          var t = o[e];
                          return r().createElement(
                            v.Tag,
                            {
                              key: t.keyRoute,
                              color: 'geekblue',
                              closable: !0,
                              onClose: function () {
                                n(t.keyRoute), a(t.keyRoute, t.key);
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
          it =
            (n(142),
            (function (e) {
              function n(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).onDragStart = function (e) {
                    var t = e.node;
                    t.className &&
                      j(t.className) &&
                      v.message.warning('一级固定类型元素不支持拖拽哦');
                  }),
                  (n.onDrop = function (e) {
                    var t = e.dragNode,
                      a = e.node,
                      o = n.props,
                      r = o.getSchemaByIndexRoute,
                      i = o.indexRoute2keyRoute,
                      s = o.insertJsonData,
                      c = o.deleteJsonByIndex,
                      l = o.isExitJsonKey,
                      d = o.isSupportCurType;
                    if (!t.className || !j(t.className)) {
                      var m = t.indexRoute,
                        u = t.jsonKey,
                        p = r(m),
                        h = a.indexRoute,
                        y = (0, ye.isSameParent)(m, h),
                        g = (0, ye.getCurPosition)(m, h);
                      if (y)
                        c(m, !0),
                          'before' === g && (h = (0, ye.moveForward)(h)),
                          a.dragOverGapTop
                            ? s(h, u, p, 'before')
                            : (a.dragOver || a.dragOverGapBottom) && s(h, u, p);
                      else {
                        if (l(h, u))
                          return void v.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var f = (0, ye.getCurrentFormat)(p);
                        if (!d(h, f))
                          return void v.message.warning(
                            '目标位置不支持' + f + '类型元素',
                          );
                        var S = (0, ye.getCurrentFormat)(p),
                          x = i(m),
                          E = (0, ye.getParentIndexRoute)(h),
                          b = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(x + '-' + S);
                        C(i(E) + '-' + u + '-' + S, b || x),
                          a.dragOverGapTop
                            ? 'after' === g
                              ? (c(m, !0), s(h, u, p, 'before'))
                              : (s(h, u, p, 'before', !0), c(m))
                            : (a.dragOver || a.dragOverGapBottom) &&
                              ('after' === g
                                ? (c(m, !0), s(h, u, p))
                                : (s(h, u, p, '', !0), c(m)));
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
                            r = e.properties[o],
                            i = (0, ye.getCurrentFormat)(r) + '-' + o;
                          t.push(i);
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
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  b(e.data, this.props.data) ||
                    this.props.initJSONSchemaData(e.data),
                    b(e.onChange, this.props.onChange) ||
                      this.props.initOnChange(e.onChange),
                    b(e.typeList, this.props.typeList) ||
                      this.props.initSchemaTypeList(e.typeList);
                }),
                (a.render = function () {
                  var e = this.props.jsonSchema,
                    t = (0, ye.isEmptySchema)(e),
                    n = (0, ye.getCurrentFormat)(e);
                  return o.createElement(
                    'div',
                    { className: 'json-schema-container' },
                    !t &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(rt, null),
                        o.createElement(
                          v.Tree,
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
                            ot({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: '',
                              targetJsonSchema: e,
                              isOnlyShowChild: !0,
                            }),
                          'object' !== n &&
                            tt({
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
                      o.createElement(
                        'p',
                        { className: 'json-schema-empty' },
                        '当前jsonSchema没有数据内容',
                      ),
                  );
                }),
                n
              );
            })(o.PureComponent));
        it.propTypes = {
          onChange: d().func,
          data: d().object,
          typeList: d().object,
        };
        var st = (0, c.inject)(function (e) {
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
          })((0, c.observer)(it)),
          ct = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  jsonSchemaStore: new Se.jsonSchemaStore(),
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
                  a = e.onChange,
                  r = e.element,
                  i = e.wideScreen,
                  l = this.state.jsonSchemaStore,
                  d = o.createElement(
                    c.Provider,
                    { jsonSchemaStore: l },
                    o.createElement(st, {
                      data: t,
                      typeList: n,
                      onChange: a,
                      wideScreen: i,
                    }),
                  );
                return r ? (s().render(d, r), '') : d;
              }),
              n
            );
          })(o.PureComponent);
        ct.propTypes = {
          wideScreen: d().any,
          onChange: d().func,
          data: d().any,
          typeList: d().any,
          element: d().any,
        };
      })(),
      a
    );
  })();
});