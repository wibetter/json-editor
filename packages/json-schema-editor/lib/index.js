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
          function E(e, t) {
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
              return ft;
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
          E = require('antd'),
          S = require('lodash'),
          C = require('@wibetter/json-utils');
        function O(e) {
          return (0, C.objClone)(e);
        }
        function j(e, t) {
          return (0, C.isEqual)(e, t);
        }
        function N(e, t) {
          window.sessionStorage && window.sessionStorage.setItem(e, t);
        }
        var w,
          I,
          R,
          k,
          K,
          T,
          D,
          J,
          B,
          V,
          P,
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
          ve,
          xe,
          be = [
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
          Ee = ['object'].concat([
            'dynamic-config',
            'dynamic-object',
            'dynamic-array',
            'sohu-source',
            'sohu-event',
            'datasource',
            'event',
            'dynamic-data',
          ]),
          Se = [
            'quantity',
            'box-style',
            'padding-margin',
            'text-editor',
            'json',
            'codearea',
            'htmlarea',
            'array',
          ].concat(Ee),
          Ce = [].concat(be, Se),
          Oe = ['string'],
          je =
            (((e = {
              object: Ce,
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
                'dynamic-config',
                'dynamic-object',
                'dynamic-array',
              ],
              radio: Oe,
              select: Oe,
            }).select = ['string']),
            (e.all = Ce),
            e),
          Ne = {
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
            'dynamic-config': '动态配置(config)',
            'dynamic-object': '动态对象(object)',
            'dynamic-array': '动态数组(array)',
            'sohu-source': '数据源',
            'sohu-event': '组件事件',
            datasource: '静态数据源(旧版)',
            event: '事件(旧版)',
            'dynamic-data': '动态数据源(旧版)',
          },
          we = C.TypeDataList.jsonschema,
          Ie = C.TypeDataList.input,
          Re = {
            schemaStore:
              ((w = b.action.bound),
              (I = b.action.bound),
              (R = b.action.bound),
              (k = b.action.bound),
              (K = b.action.bound),
              (T = b.action.bound),
              (D = b.action.bound),
              (J = b.action.bound),
              (B = b.action.bound),
              (V = b.action.bound),
              (P = b.action.bound),
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
              (me = b.action.bound),
              (ue = b.action.bound),
              (he = (function () {
                function e() {
                  (this.curJsonKeyIndex = 1),
                    y()(this, 'triggerChange', ye, this),
                    y()(this, 'jsonSchema', ge, this),
                    y()(this, 'SchemaTypeList', fe, this),
                    y()(this, 'onChange', ve, this),
                    y()(this, 'childElemSort', xe, this);
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
                      (j(e, this.SchemaTypeList) ||
                        (e &&
                          Object.keys(e).map(function (n) {
                            t.SchemaTypeList[n] = e[n];
                          })));
                  }),
                  (t.initJSONSchemaData = function (e) {
                    if (e && '{}' !== JSON.stringify(e)) {
                      if (!j(e, this.JSONSchemaObj))
                        if (e && (0, C.isNewSchemaData)(e)) this.jsonSchema = e;
                        else {
                          var t = (0, C.oldSchemaToNewSchema)(e);
                          this.jsonSchema = t;
                        }
                    } else this.jsonSchema = O(we);
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
                  (t.schemaChange = function (e) {
                    (this.jsonSchema = e), this.jsonSchemaChange();
                  }),
                  (t.jsonSchemaChange = function (e) {
                    (this.jsonSchema.lastUpdateTime = new Date().getTime()),
                      e || this.onChange(this.JSONSchemaObj);
                  }),
                  (t.indexRoute2keyRoute = function (e) {
                    return (0, C.indexRoute2keyRoute)(e, this.jsonSchema);
                  }),
                  (t.keyRoute2indexRoute = function (e) {
                    return (0, C.keyRoute2indexRoute)(e, this.jsonSchema);
                  }),
                  (t.getSchemaByIndexRoute = function (e) {
                    return (0, C.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
                  }),
                  (t.getSchemaByKeyRoute = function (e) {
                    return (0, C.getSchemaByKeyRoute)(e, this.jsonSchema, !0);
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
                    var n = (0, C.getParentIndexRoute)(e),
                      a = this.getSchemaByIndexRoute(n);
                    return (
                      !!(a.propertyOrder && a.propertyOrder.indexOf(t) >= 0) ||
                      (C.KeyWordList &&
                        C.KeyWordList.indexOf(t) >= 0 &&
                        E.message.warning(
                          t +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      t &&
                        t.indexOf('-') > -1 &&
                        E.message.warning(
                          t +
                            '含特殊字符（‘-’），会影响后续数据获取和更新，建议您换一个数值。',
                        ),
                      !1)
                    );
                  }),
                  (t.isSupportCurType = function (e, t) {
                    var n = (0, C.getParentIndexRoute)(e),
                      a = this.getSchemaByIndexRoute(n),
                      o = this.SchemaTypeList[a.type];
                    return !!(o && o.indexOf(t) >= 0);
                  }),
                  (t.addChildJson = function (e, t) {
                    var n = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if ((0, C.isContainerSchema)(n)) {
                      var a = this.getNewJsonKeyIndex(n);
                      n.propertyOrder.push(a),
                        (n.properties[a] = Ie),
                        this.jsonSchemaChange(t);
                    } else E.message.warning('非对象类型字段不允许插入子元素');
                  }),
                  (t.changeType = function (e, t, n, a, o) {
                    var r = (0, C.getParentIndexRoute)(e),
                      i = (0, C.getSchemaByIndexRoute)(r, this.jsonSchema),
                      s = Object.assign(
                        {},
                        n,
                        (0, S.pick)(a, [
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
                    var a = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    Object.assign(a, O(t)), this.jsonSchemaChange(n);
                  }),
                  (t.editSchemaData = function (e, t, n, a) {
                    var o = (0, C.getParentIndexRoute)(e),
                      r = (0, C.getSchemaByIndexRoute)(o, this.jsonSchema);
                    (r.properties[t] = u()({}, O(r.properties[t]), n)),
                      this.jsonSchemaChange(a);
                  }),
                  (t.editJsonKey = function (e, t, n) {
                    var a = (0, C.getSchemaByIndexRoute)(
                      e,
                      this.jsonSchema,
                      !0,
                    );
                    this.insertJsonData(e, t, a, '', !0),
                      this.deleteJsonByIndex(e, !0),
                      this.jsonSchemaChange(n);
                  }),
                  (t.addNextJsonData = function (e) {
                    var t = (0, C.getParentIndexRoute)(e),
                      n = (0, C.getSchemaByIndexRoute)(t, this.jsonSchema),
                      a = this.getNewJsonKeyIndex(n);
                    this.insertJsonData(e, a, Ie);
                  }),
                  (t.insertJsonData = function (e, t, n, a, o) {
                    var r = (0, C.getParentIndexRoute_CurIndex)(e),
                      i = r[0],
                      s = r[1],
                      c = (0, C.getSchemaByIndexRoute)(i, this.jsonSchema);
                    c.properties[t] = n;
                    var l = c.propertyOrder,
                      p = 'before' === a ? Number(s) : Number(s) + 1,
                      d = l.slice(0, p),
                      m = l.slice(p);
                    (c.propertyOrder = [].concat(d, [t], m)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.deleteJsonByIndex_CurKey = function (e, t, n) {
                    var a = (0, C.getParentIndexRoute)(e),
                      o = (0, C.getSchemaByIndexRoute)(a, this.jsonSchema);
                    delete o.properties[t];
                    var r = o.propertyOrder.indexOf(t);
                    o.propertyOrder.splice(r, 1), this.jsonSchemaChange(n);
                  }),
                  (t.deleteJsonByIndex = function (e, t) {
                    var n = (0, C.getParentIndexRoute_CurIndex)(e),
                      a = n[0],
                      o = n[1],
                      r = (0, C.getSchemaByIndexRoute)(a, this.jsonSchema),
                      i = r.propertyOrder[o];
                    delete r.properties[i];
                    var s = r.propertyOrder.indexOf(i);
                    r.propertyOrder.splice(s, 1), this.jsonSchemaChange(t);
                  }),
                  (t.updateEnumItem = function (e, t, n, a, o) {
                    var r = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.enum &&
                      r.enumextra &&
                      ((r.enum[t] = n), (r.enumextra[t] = a)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.isExitEnumKey = function (e, t, n) {
                    var a = !1,
                      o = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (o.enum) {
                      var r = O(o.enum);
                      t >= 0 && r.splice(t, 1), r.indexOf(n) >= 0 && (a = !0);
                    }
                    return (
                      C.KeyWordList &&
                        C.KeyWordList.indexOf(n) >= 0 &&
                        E.message.warning(
                          n +
                            '是JSONSchema的关键字，建议您换一个，避免后续出现数据异常。',
                        ),
                      a
                    );
                  }),
                  (t.updateEnumKey = function (e, t, n, a) {
                    var o = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enum && (o.enum[t] = n), this.jsonSchemaChange(a);
                  }),
                  (t.updateEnumText = function (e, t, n, a) {
                    var o = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.enumextra && (o.enumextra[t] = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteEnumItem = function (e, t, n) {
                    var a = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.enum &&
                      a.enumextra &&
                      (a.enum.splice(t, 1), a.enumextra.splice(t, 1)),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertEnumItem = function (e, t, n, a, o, r) {
                    var i = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
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
                    var n = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var a = this.getNewEnumIndex(n.enum),
                        o = '选项' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, a, o);
                    }
                  }),
                  (t.copyEnumItem = function (e, t) {
                    var n = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.enum) {
                      var a = n.enum[t],
                        o = n.enumextra[t],
                        r = this.getNewEnumIndex(n.enum, a),
                        i = o + '_' + (this.curJsonKeyIndex - 1);
                      this.insertEnumItem(e, t, r, i);
                    }
                  }),
                  (t.updateOptionItem = function (e, t, n, a, o) {
                    var r = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    r.options &&
                      r.options[t] &&
                      ((r.options[t].label = n), (r.options[t].value = a)),
                      this.jsonSchemaChange(o);
                  }),
                  (t.isExitOptionLabel = function (e, t) {
                    var n = !1,
                      a = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    return (
                      a.options &&
                        a.options.find(function (e) {
                          return e.label === t;
                        }) &&
                        (n = !0),
                      C.KeyWordList &&
                        C.KeyWordList.indexOf(t) >= 0 &&
                        E.message.warning(
                          t + '是JSONSchema的保留关键字，建议您换一个名称。',
                        ),
                      n
                    );
                  }),
                  (t.updateOptionLabel = function (e, t, n, a) {
                    var o = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.options && o.options[t] && (o.options[t].label = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.updateOptionValue = function (e, t, n, a) {
                    var o = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    o.options && o.options[t] && (o.options[t].value = n),
                      this.jsonSchemaChange(a);
                  }),
                  (t.deleteOptionItem = function (e, t, n) {
                    var a = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    a.options && a.options[t] && a.options.splice(t, 1),
                      this.jsonSchemaChange(n);
                  }),
                  (t.insertOption = function (e, t, n, a, o, r) {
                    var i = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
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
                    var n = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
                    if (n.options) {
                      var a = this.getNewOptionValue(n.options),
                        o = '选项' + (n.options.length + 1);
                      this.insertOption(e, t, o, a);
                    }
                  }),
                  (t.copyOptionItem = function (e, t) {
                    var n = (0, C.getSchemaByIndexRoute)(e, this.jsonSchema);
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
              (ye = x()(he.prototype, 'triggerChange', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              })),
              (ge = x()(he.prototype, 'jsonSchema', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return {};
                },
              })),
              (fe = x()(he.prototype, 'SchemaTypeList', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return je;
                },
              })),
              (ve = x()(he.prototype, 'onChange', [b.observable], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return function () {};
                },
              })),
              x()(
                he.prototype,
                'triggerChangeAction',
                [w],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'triggerChangeAction',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'initSchemaTypeList',
                [I],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'initSchemaTypeList',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'initJSONSchemaData',
                [R],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'initJSONSchemaData',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'JSONSchemaObj',
                [b.computed],
                Object.getOwnPropertyDescriptor(he.prototype, 'JSONSchemaObj'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'initOnChange',
                [k],
                Object.getOwnPropertyDescriptor(he.prototype, 'initOnChange'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'schemaChange',
                [K],
                Object.getOwnPropertyDescriptor(he.prototype, 'schemaChange'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'jsonSchemaChange',
                [T],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'jsonSchemaChange',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'indexRoute2keyRoute',
                [D],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'indexRoute2keyRoute',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'keyRoute2indexRoute',
                [J],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'keyRoute2indexRoute',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'getSchemaByIndexRoute',
                [B],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'getSchemaByIndexRoute',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'getSchemaByKeyRoute',
                [V],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'getSchemaByKeyRoute',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'getNewJsonKeyIndex',
                [P],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'getNewJsonKeyIndex',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'isExitJsonKey',
                [L],
                Object.getOwnPropertyDescriptor(he.prototype, 'isExitJsonKey'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'isSupportCurType',
                [F],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'isSupportCurType',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'addChildJson',
                [q],
                Object.getOwnPropertyDescriptor(he.prototype, 'addChildJson'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'changeType',
                [A],
                Object.getOwnPropertyDescriptor(he.prototype, 'changeType'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateSchemaData',
                [_],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'updateSchemaData',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'editSchemaData',
                [M],
                Object.getOwnPropertyDescriptor(he.prototype, 'editSchemaData'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'editJsonKey',
                [W],
                Object.getOwnPropertyDescriptor(he.prototype, 'editJsonKey'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'addNextJsonData',
                [z],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'addNextJsonData',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'insertJsonData',
                [G],
                Object.getOwnPropertyDescriptor(he.prototype, 'insertJsonData'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'deleteJsonByIndex_CurKey',
                [U],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'deleteJsonByIndex_CurKey',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'deleteJsonByIndex',
                [H],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'deleteJsonByIndex',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateEnumItem',
                [X],
                Object.getOwnPropertyDescriptor(he.prototype, 'updateEnumItem'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'isExitEnumKey',
                [Q],
                Object.getOwnPropertyDescriptor(he.prototype, 'isExitEnumKey'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateEnumKey',
                [Y],
                Object.getOwnPropertyDescriptor(he.prototype, 'updateEnumKey'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateEnumText',
                [Z],
                Object.getOwnPropertyDescriptor(he.prototype, 'updateEnumText'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'deleteEnumItem',
                [$],
                Object.getOwnPropertyDescriptor(he.prototype, 'deleteEnumItem'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'insertEnumItem',
                [ee],
                Object.getOwnPropertyDescriptor(he.prototype, 'insertEnumItem'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'getNewEnumIndex',
                [te],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'getNewEnumIndex',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'addEnumItem',
                [ne],
                Object.getOwnPropertyDescriptor(he.prototype, 'addEnumItem'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'copyEnumItem',
                [ae],
                Object.getOwnPropertyDescriptor(he.prototype, 'copyEnumItem'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateOptionItem',
                [oe],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'updateOptionItem',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'isExitOptionLabel',
                [re],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'isExitOptionLabel',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateOptionLabel',
                [ie],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'updateOptionLabel',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'updateOptionValue',
                [se],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'updateOptionValue',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'deleteOptionItem',
                [ce],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'deleteOptionItem',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'insertOption',
                [le],
                Object.getOwnPropertyDescriptor(he.prototype, 'insertOption'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'getNewOptionValue',
                [pe],
                Object.getOwnPropertyDescriptor(
                  he.prototype,
                  'getNewOptionValue',
                ),
                he.prototype,
              ),
              x()(
                he.prototype,
                'addOptionItem',
                [de],
                Object.getOwnPropertyDescriptor(he.prototype, 'addOptionItem'),
                he.prototype,
              ),
              x()(
                he.prototype,
                'copyOptionItem',
                [me],
                Object.getOwnPropertyDescriptor(he.prototype, 'copyOptionItem'),
                he.prototype,
              ),
              (xe = x()(he.prototype, 'childElemSort', [ue], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  var e = this;
                  return function (t) {
                    for (
                      var n = (0, C.getSchemaByIndexRoute)(t, e.jsonSchema),
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
              he),
          },
          ke = require('@ant-design/icons'),
          Ke = require('rc-switch'),
          Te = n.n(Ke),
          De = require('react-ace'),
          Je = n.n(De),
          Be =
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
                      (0, C.isFunction)(n.props.onChange) &&
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
                    o = t.maxLines,
                    i = n || {},
                    s = this.state,
                    c = s.isShowWarn,
                    l = s.warnText,
                    p = (s.curJSONDataTemp, a || !1);
                  return (
                    (i = void 0 !== i ? i : i || '{}'),
                    ((0, C.isObject)(i) || (0, C.isArray)(i)) &&
                      (i = JSON.stringify(i, null, 2)),
                    r.createElement(
                      'div',
                      { className: 'json-view-box' },
                      p &&
                        r.createElement(
                          'div',
                          { className: 'readOnly-btn' },
                          '[只读]',
                        ),
                      c &&
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
                            l,
                          ),
                        ),
                      r.createElement(Je(), {
                        id: 'json_area_ace',
                        defaultValue: i,
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
        Be.propTypes = {
          jsonData: d().any,
          readOnly: d().bool,
          maxLines: d().number,
        };
        var Ve = Be,
          Pe =
            (require('rc-switch/assets/index.css'), n(975), E.Input.TextArea),
          Le =
            (E.Select.Option,
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
                      return r.createElement(Te(), {
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
                        E.Checkbox.Group,
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
                              E.Checkbox,
                              { value: e.value, key: n },
                              e.label || e.name,
                            );
                          }),
                      );
                    }
                    if ('radio' === e || 'select' === e) {
                      var i = t.options;
                      return r.createElement(
                        E.Radio.Group,
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
                              E.Radio,
                              { value: e.value, key: n },
                              e.label || e.name,
                            );
                          }),
                      );
                    }
                    return 'color' === e
                      ? r.createElement(E.Input, {
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
                        ? r.createElement(Pe, {
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
                          ? r.createElement(E.InputNumber, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + t.title + '的默认值',
                              defaultValue: t.default,
                              onChange: function (e) {
                                n.handleValueChange('default', e);
                              },
                            })
                          : r.createElement(E.Input, {
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
                    t,
                    n,
                    a,
                    o,
                    i,
                    s,
                    c,
                    l = this,
                    p = (this.props.schemaStore || {}).indexRoute2keyRoute,
                    d = this.props,
                    m = d.nodeKey,
                    u = d.indexRoute,
                    h = d.targetJsonSchema,
                    y = h.type,
                    g = (p(u), h.isConditionProp);
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
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-isConditionProp',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                              key: m + '-isConditionProp-switch',
                            },
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked: null != g && g,
                              checkedChildren: '是',
                              unCheckedChildren: '否',
                              onChange: function (e) {
                                l.handleValueChange('isConditionProp', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    ('select' === y || 'cascader' === y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-selectConfig',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                              key: m + '-selectConfig-multiple',
                            },
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked: null != (e = h.multiple) && e,
                              checkedChildren: '多选',
                              unCheckedChildren: '单选',
                              onChange: function (e) {
                                l.handleValueChange('multiple', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return ['select', 'radio'].indexOf(e) > -1;
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-defaultActiveFirstOption',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                              key: m + '-selectConfig-defaultActiveFirstOption',
                            },
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked:
                                null != (t = h.defaultActiveFirstOption) && t,
                              checkedChildren: '开启',
                              unCheckedChildren: '关闭',
                              onChange: function (e) {
                                l.handleValueChange(
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
                          .concat(be, [
                            'quantity',
                            'text-editor',
                            'json',
                            'codearea',
                            'htmlarea',
                          ])
                          .indexOf(e) > -1
                      );
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-readOnly-' + h.readOnly,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked: null != (n = h.readOnly) && n,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                l.handleValueChange('readOnly', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(be, [
                            'quantity',
                            'text-editor',
                            'json',
                            'codearea',
                            'htmlarea',
                          ])
                          .indexOf(e) > -1
                      );
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-isRequired-' + h.isRequired,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked: null != (a = h.isRequired) && a,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                l.handleValueChange('isRequired', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    (function (e) {
                      return (
                        []
                          .concat(be, ['json', 'codearea', 'htmlarea'])
                          .indexOf(e) > -1
                      );
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-default',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                            this.renderDefaultContent(y, h, m),
                          ),
                        ),
                      ),
                    'select' === y &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-withLabel',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
                            {
                              title:
                                '开启后，选中选项时，其数值会带上当前选项的label数值。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '附带label数值',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(Te(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != (o = h.withLabel) && o,
                            checkedChildren: '开启',
                            unCheckedChildren: '关闭',
                            onChange: function (e) {
                              l.handleValueChange('withLabel', e);
                            },
                          }),
                        ),
                      ),
                    'cascader' === y &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-cascader-options',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                          r.createElement(Ve, {
                            jsonData: h.options,
                            onChange: function (e) {
                              l.handleValueChange('options', e);
                            },
                            maxLines: 10,
                          }),
                        ),
                      ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-description',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          E.Tooltip,
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
                          r.createElement(E.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入' + h.title + '的字段描述',
                            defaultValue: h.description,
                            onPressEnter: function (e) {
                              var t = e.target.value;
                              l.handleValueChange('description', t);
                            },
                            onBlur: function (e) {
                              var t = e.target.value;
                              l.handleValueChange('description', t);
                            },
                          }),
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-showKey',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          E.Tooltip,
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
                          r.createElement(Te(), {
                            style: { display: 'inline-block' },
                            defaultChecked: null != (i = h.showKey) && i,
                            checkedChildren: 'true',
                            unCheckedChildren: 'false',
                            onChange: function (e) {
                              l.handleValueChange('showKey', e);
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
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-placeholder',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                            r.createElement(E.Input, {
                              style: { display: 'inline-block' },
                              placeholder: '请输入' + h.title + '的输入提示',
                              defaultValue: h.placeholder,
                              onPressEnter: function (e) {
                                var t = e.target.value;
                                l.handleValueChange('placeholder', t);
                              },
                              onBlur: function (e) {
                                var t = e.target.value;
                                l.handleValueChange('placeholder', t);
                              },
                            }),
                          ),
                        ),
                      ),
                    ('input' === y ||
                      'quantity' === y ||
                      'padding-margin' === y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-autoComplete',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
                            {
                              title:
                                '开启后支持添加可选项，并支持 autoComplete。',
                              placement: 'top',
                            },
                            r.createElement(
                              'span',
                              { className: 'title-text' },
                              '开启可选项',
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(
                            'div',
                            { className: 'form-item-box' },
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked: null != (s = h.autoComplete) && s,
                              checkedChildren: '开启',
                              unCheckedChildren: '关闭',
                              onChange: function (e) {
                                l.handleValueChange('autoComplete', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    h.autoComplete &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-autoComplete-options',
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            'span',
                            { className: 'title-text' },
                            '可选项',
                          ),
                        ),
                        r.createElement(
                          'div',
                          { className: 'content-item' },
                          r.createElement(Ve, {
                            jsonData: h.options || [],
                            onChange: function (e) {
                              (0, C.isArray)(e)
                                ? l.handleValueChange('options', e)
                                : E.message.warning(
                                    '可选项数据格式不正确，可选项数据格式必须为数组格式。',
                                  );
                            },
                            maxLines: 10,
                          }),
                        ),
                      ),
                    (function (e) {
                      return [].concat(Ee, ['array']).indexOf(e) > -1;
                    })(y) &&
                      r.createElement(
                        'div',
                        {
                          className: 'wide-screen-element-warp',
                          key: m + '-showCodeViewBtn-' + h.showCodeViewBtn,
                        },
                        r.createElement(
                          'div',
                          { className: 'element-title' },
                          r.createElement(
                            E.Tooltip,
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
                            r.createElement(Te(), {
                              style: { display: 'inline-block' },
                              defaultChecked:
                                null == (c = h.showCodeViewBtn) || c,
                              checkedChildren: 'true',
                              unCheckedChildren: 'false',
                              onChange: function (e) {
                                l.handleValueChange('showCodeViewBtn', e);
                              },
                            }),
                          ),
                        ),
                      ),
                    'number' === (0, C.getExpectType)(y) &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: m + '-minimum-' + h.minimum,
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              E.Tooltip,
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
                              r.createElement(E.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: h.minimum,
                                onPressEnter: function (e) {
                                  var t = e.target.value;
                                  l.handleValueChange('minimum', t);
                                },
                                onBlur: function (e) {
                                  var t = e.target.value;
                                  l.handleValueChange('minimum', t);
                                },
                              }),
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: m + '-maximum-' + h.maximum,
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              E.Tooltip,
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
                              r.createElement(E.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: h.maximum,
                                onPressEnter: function (e) {
                                  var t = e.target.value;
                                  l.handleValueChange('maximum', t);
                                },
                                onBlur: function (e) {
                                  var t = e.target.value;
                                  l.handleValueChange('maximum', t);
                                },
                              }),
                            ),
                          ),
                        ),
                      ),
                    'array' === (0, C.getExpectType)(y) &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: m + '-minimum-child',
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              E.Tooltip,
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
                              r.createElement(E.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: h['minimum-child'],
                                onChange: function (e) {
                                  l.handleValueChange('minimum-child', e);
                                },
                              }),
                            ),
                          ),
                        ),
                        r.createElement(
                          'div',
                          {
                            className: 'wide-screen-element-warp',
                            key: m + '-maximum-child',
                          },
                          r.createElement(
                            'div',
                            { className: 'element-title' },
                            r.createElement(
                              E.Tooltip,
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
                              r.createElement(E.InputNumber, {
                                style: { display: 'inline-block' },
                                defaultValue: h['maximum-child'],
                                onChange: function (e) {
                                  l.handleValueChange('maximum-child', e);
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
                        key: m + '-onShow',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          E.Tooltip,
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
                          r.createElement(E.Input, {
                            style: { display: 'inline-block' },
                            placeholder: '请输入显隐表达式',
                            defaultValue: h.onShow,
                            onPressEnter: function (e) {
                              var t = e.target.value;
                              l.handleValueChange('onShow', t);
                            },
                            onBlur: function (e) {
                              var t = e.target.value;
                              l.handleValueChange('onShow', t);
                            },
                          }),
                        ),
                      ),
                    ),
                    r.createElement(
                      'div',
                      {
                        className: 'wide-screen-element-warp',
                        key: m + '-titleStyle',
                      },
                      r.createElement(
                        'div',
                        { className: 'element-title' },
                        r.createElement(
                          E.Tooltip,
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
                        r.createElement(Ve, {
                          jsonData: h.titleStyle,
                          onChange: function (e) {
                            l.handleValueChange('titleStyle', e);
                          },
                          maxLines: 10,
                        }),
                      ),
                    ),
                  );
                }),
                t
              );
            })(r.PureComponent));
        Le.propTypes = {
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
        };
        var Fe = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(Le)),
          qe = (n(915), E.Select.Option),
          Ae = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleTypeChange = function (e) {
                  var t = (n.props.schemaStore || {}).changeType,
                    a = n.props,
                    o = a.indexRoute,
                    r = a.jsonKey,
                    i = a.targetJsonSchema;
                  i.type !== e && t(o, r, C.TypeDataList[e], i);
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
                      ? E.message.warning('当前key已存在，请换一个吧。')
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
                  (0, C.isContainerSchema)(i) ? t(r) : a(r);
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
                    d = (0, C.getParentIndexRoute)(t),
                    m = l(i(d), o),
                    u = a.type;
                  N(s(d) + '-' + m + '-' + u, s(t)), c(t, m, p);
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
                  m = s ? (0, C.getParentIndexRoute)(s) : '',
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
                  S = this.getCurrentTypeList(i),
                  O = p.type,
                  j = (0, C.isContainerSchema)(p);
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
                        r.createElement(E.Input, {
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
                          E.Select,
                          {
                            showSearch: !0,
                            defaultValue: O,
                            style: { width: 150 },
                            onChange: this.handleTypeChange,
                            disabled: f,
                            filterOption: function (e, t) {
                              if (
                                t.value.indexOf(e) > -1 ||
                                (t.children && t.children.indexOf(e) > -1)
                              )
                                return !0;
                            },
                          },
                          S.map(function (e) {
                            return r.createElement(
                              qe,
                              { key: e, value: e },
                              Ne[e] || e,
                            );
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
                        r.createElement(E.Input, {
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
                                E.Tooltip,
                                { title: '删除' },
                                r.createElement(ke.CloseOutlined, {
                                  className: 'operate-btn delete-operate',
                                  onClick: this.onDeleteBtnEvent,
                                }),
                              ),
                            r.createElement(
                              E.Tooltip,
                              { title: j ? '新增子元素' : '新增同级元素' },
                              r.createElement(ke.PlusOutlined, {
                                className: 'operate-btn',
                                onClick: this.onAddBtnEvent,
                              }),
                            ),
                            j &&
                              r.createElement(
                                E.Tooltip,
                                { title: '数据项排序' },
                                r.createElement(ke.SortAscendingOutlined, {
                                  className: 'operate-btn',
                                  onClick: this.childElemSort,
                                }),
                              ),
                            !y &&
                              r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(
                                  E.Tooltip,
                                  { title: '复制' },
                                  r.createElement(ke.CopyOutlined, {
                                    className: 'operate-btn',
                                    onClick: this.onCopyBtnEvent,
                                  }),
                                ),
                                r.createElement(
                                  E.Tooltip,
                                  { title: '按住进行拖拽' },
                                  r.createElement(ke.DragOutlined, {
                                    className: 'operate-btn drag-btn',
                                  }),
                                ),
                              ),
                          ),
                        b &&
                          r.createElement(
                            E.Tooltip,
                            { title: '高级设置' },
                            r.createElement(ke.SettingOutlined, {
                              className: 'operate-btn',
                              onClick: function () {
                                n.setState({ showAdvanceConfig: !0 });
                              },
                            }),
                          ),
                      ),
                      d &&
                        r.createElement(
                          E.Modal,
                          {
                            visible: !0,
                            title:
                              '高级设置 / 当前字段：' + p.title + '(' + c + ')',
                            onCancel: function () {
                              n.setState({ showAdvanceConfig: !1 });
                            },
                            footer: [
                              r.createElement(
                                E.Button,
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
                          r.createElement(Fe, {
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
        Ae.propTypes = {
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
        var _e = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(Ae)),
          Me = E.Tree.TreeNode,
          We = function (e) {
            return i().createElement(_e, e);
          },
          ze = function (e) {
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
              Me,
              {
                className: r + '-schema schema-item-form',
                id: a,
                key: a,
                indexRoute: n,
                jsonKey: t,
                title: We(u()({}, e)),
              },
              (function (e) {
                var t = e.parentType,
                  n = e.jsonKey,
                  a = e.indexRoute,
                  o = e.nodeKey,
                  r = e.targetJsonSchema;
                return i().createElement(
                  Me,
                  {
                    className: 'array-item-schema schema-item-form',
                    id: o,
                    key: o,
                    indexRoute: a,
                    jsonKey: n,
                    disabled: !0,
                    title: We({
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
                        return dt({
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
          Ge = (n(790), E.Select.Option),
          Ue = (function (e) {
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
                        a((0, C.getNextIndexRoute)(i), 'data', p);
                    }
                    if (C.EventTypeDataList) {
                      var d = C.EventTypeDataList[e];
                      '事件类型' === c.title &&
                        d &&
                        o((0, C.getParentIndexRoute)(i), d);
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
                      E.Select,
                      {
                        defaultValue: n.default || 'local',
                        onChange: this.typeChange,
                      },
                      o.map(function (e, t) {
                        return r.createElement(
                          Ge,
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
                      E.Select,
                      { defaultValue: a, style: { width: 120 }, disabled: !0 },
                      r.createElement(Ge, { key: a, value: a }, a),
                    ),
                  ),
                  r.createElement(
                    'div',
                    { className: 'title-input-item' },
                    r.createElement(E.Input, {
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
        Ue.propTypes = {
          parentType: d().string,
          jsonKey: d().string,
          indexRoute: d().string,
          nodeKey: d().string,
          targetJsonSchema: d().any,
          typeSelectData: d().any,
          isFixed: d().any,
        };
        var He = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(Ue)),
          Xe = E.Tree.TreeNode,
          Qe = function (e) {
            return i().createElement(_e, e);
          },
          Ye = {
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
          Ze = E.Tree.TreeNode,
          $e = function (e) {
            return i().createElement(_e, e);
          },
          et = E.Tree.TreeNode,
          tt = function (e) {
            return i().createElement(_e, e);
          },
          nt = E.Tree.TreeNode,
          at = function (e) {
            return i().createElement(_e, e);
          },
          ot = (n(617), E.Select.Option),
          rt = (function (e) {
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
                      ? E.message.warning(
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
                    if ((0, C.isObject)(s) && (0, C.isString)(c))
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
              o()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.optionLabel,
                  n = e.optionValue,
                  a = (e.optionNodeKey, n);
                return (
                  ((0, C.isObject)(n) || (0, C.isArray)(n)) &&
                    (a = JSON.stringify(n)),
                  r.createElement(
                    'div',
                    { className: 'option-schema-box', id: t },
                    r.createElement(
                      'div',
                      { className: 'key-input-item' },
                      r.createElement(E.Input, {
                        defaultValue: a,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                    r.createElement(
                      'div',
                      { className: 'type-select-item' },
                      r.createElement(
                        E.Select,
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
                      r.createElement(E.Input, {
                        defaultValue: t,
                        onPressEnter: this.handleLabelChange,
                        onBlur: this.handleLabelChange,
                      }),
                    ),
                    r.createElement(
                      'div',
                      { className: 'operate-item' },
                      r.createElement(
                        E.Tooltip,
                        { title: '删除' },
                        r.createElement(ke.CloseOutlined, {
                          className: 'operate-btn delete-operate',
                          onClick: this.onDeleteBtnEvent,
                        }),
                      ),
                      r.createElement(
                        E.Tooltip,
                        { title: '新增可选项' },
                        r.createElement(ke.PlusOutlined, {
                          className: 'operate-btn',
                          onClick: this.onAddBtnEvent,
                        }),
                      ),
                      r.createElement(
                        E.Tooltip,
                        { title: '复制' },
                        r.createElement(ke.CopyOutlined, {
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
        rt.propTypes = {
          indexRoute: d().string,
          optionIndex: d().any,
          optionLabel: d().string,
          optionValue: d().string,
          optionNodeKey: d().string,
        };
        var it = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(rt)),
          st = E.Tree.TreeNode,
          ct = function (e) {
            return i().createElement(it, e);
          },
          lt = E.Tree.TreeNode,
          pt = function (e) {
            return i().createElement(_e, e);
          },
          dt = function (e) {
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
                return ht(e);
              case 'array':
                return ze(e);
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
                    Xe,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: Qe(u()({}, e)),
                    },
                    i().createElement(Xe, {
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
                          typeSelectData: Ye,
                        }),
                        i().createElement(He, t)),
                    }),
                    i().createElement(Xe, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + c.type,
                      key: o + '-data-' + c.type,
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'data',
                      disabled: !0,
                      title: Qe({
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
                    i().createElement(Xe, {
                      className:
                        'dataSource-filter-item-schema schema-item-form',
                      id: o + '-filter',
                      key: o + '-filter',
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'filter',
                      disabled: !0,
                      title: Qe({
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
                        i().createElement(He, t)),
                    }),
                    i().createElement(Ze, {
                      className:
                        'dataSource-config-item-schema schema-item-form',
                      id: o + '-config-' + l.type,
                      key: o + '-config-' + l.type,
                      indexRoute: a ? a + '-1' : '1',
                      jsonKey: 'config',
                      disabled: !0,
                      title: $e({
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
                    i().createElement(Ze, {
                      className: 'dataSource-data-item-schema schema-item-form',
                      id: o + '-data-' + l.type,
                      key: o + '-data-' + l.type,
                      indexRoute: a ? a + '-2' : '2',
                      jsonKey: 'data',
                      disabled: !0,
                      title: $e({
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
                    et,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: tt(u()({}, e)),
                    },
                    i().createElement(et, {
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
                        i().createElement(He, t)),
                    }),
                    'on' === c.default &&
                      l &&
                      i().createElement(et, {
                        className:
                          'event-register-item-schema schema-item-form',
                        id: o + '-register-' + c.default,
                        key: o + '-register-' + c.default,
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'register',
                        disabled: !0,
                        title: tt({
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
                      i().createElement(et, {
                        className:
                          'event-actionFunc-item-schema schema-item-form',
                        id: o + '-actionFunc-' + c.default,
                        key: o + '-actionFunc-' + c.default,
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'actionFunc',
                        disabled: !0,
                        title: tt({
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
                      i().createElement(et, {
                        className: 'event-trigger-item-schema schema-item-form',
                        id: o + '-trigger-' + c.default,
                        key: o + '-trigger-' + c.default,
                        indexRoute: a ? a + '-1' : '1',
                        jsonKey: 'trigger',
                        disabled: !0,
                        title: tt({
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
                      i().createElement(et, {
                        className:
                          'event-eventData-item-schema schema-item-form',
                        id: o + '-eventData-' + c.default,
                        key: o + '-eventData-' + c.default,
                        indexRoute: a ? a + '-2' : '2',
                        jsonKey: 'eventData',
                        disabled: !0,
                        title: tt({
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
                    nt,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: at(u()({}, e)),
                    },
                    i().createElement(nt, {
                      className: 'quantity-unit-item-schema schema-item-form',
                      id: o + '-' + c,
                      key: o + '-' + c,
                      indexRoute: a ? a + '-0' : '0',
                      jsonKey: c,
                      disabled: !0,
                      title: at({
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
                    i().createElement(nt, {
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
                        i().createElement(He, t)),
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
                    st,
                    {
                      className: s + '-schema schema-item-form',
                      id: o,
                      key: o,
                      indexRoute: a,
                      jsonKey: n,
                      title: ((t = u()({}, e)), i().createElement(_e, t)),
                    },
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        var n = e.label || e.name,
                          a = e.value,
                          r = '' + o + s + '-' + n;
                        return i().createElement(st, {
                          className: 'enum-item-schema schema-item-form',
                          id: r,
                          key: r,
                          indexRoute: l,
                          disabled: !0,
                          title: ct({
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
                  return i().createElement(lt, {
                    className: o + '-schema schema-item-form',
                    id: a,
                    key: a,
                    indexRoute: n,
                    jsonKey: t,
                    title: pt(e),
                  });
                })(e);
            }
          },
          mt = E.Tree.TreeNode,
          ut = function (e) {
            return i().createElement(_e, e);
          },
          ht = function (e) {
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
                  return dt({
                    parentType: r,
                    jsonKey: s,
                    indexRoute: i,
                    key: p,
                    nodeKey: p,
                    targetJsonSchema: c,
                  });
                })),
              g = i().createElement(
                mt,
                {
                  className: m + '-schema schema-item-form',
                  id: l,
                  key: l,
                  indexRoute: c,
                  jsonKey: s,
                  disabled: h,
                  title: ut(u()({}, e)),
                },
                y,
              );
            return d ? y : g;
          },
          yt =
            (n(23),
            (function (e) {
              function t(t) {
                var n;
                ((n = e.call(this, t) || this).onDragStart = function (e) {
                  (0, (n.props.schemaStore || {}).getSchemaByIndexRoute)(
                    e.node.indexRoute,
                  ).isFixed && E.message.warning('当前元素不支持拖拽哦。');
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
                        y = (0, C.isSameParent)(d, h),
                        g = (0, C.getCurPosition)(d, h);
                      if (y)
                        c(d, !0),
                          'before' === g && (h = (0, C.moveForward)(h)),
                          a.dragOverGapTop
                            ? s(h, m, u, 'before')
                            : (a.dragOver || a.dragOverGapBottom) && s(h, m, u);
                      else {
                        if (l(h, m))
                          return void E.message.warning(
                            '目标位置中有重名的元素',
                          );
                        var f = u.type;
                        if (!p(h, f))
                          return void E.message.warning(
                            '目标位置不支持' + f + '类型元素',
                          );
                        var v = i(d),
                          x = (0, C.getParentIndexRoute)(h),
                          b = (function (e) {
                            if (window.sessionStorage)
                              return window.sessionStorage.getItem(e);
                          })(v + '-' + f);
                        N(i(x) + '-' + m + '-' + f, b || v),
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
                  j(e.data, this.props.data) || n(e.data),
                    j(e.onChange, this.props.onChange) || a(e.onChange),
                    j(e.typeList, this.props.typeList) || o(e.typeList);
                }),
                (n.render = function () {
                  var e = this.props,
                    t = e.jsonView,
                    n = e.jsonViewReadOnly,
                    a = this.props.schemaStore || {},
                    o = a.jsonSchema,
                    i = a.schemaChange,
                    s = (0, C.isEmptySchema)(o),
                    c = o.type;
                  return r.createElement(
                    'div',
                    { className: 'json-schema-container' },
                    !s &&
                      !t &&
                      r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(
                          E.Tree,
                          {
                            draggable: !0,
                            selectable: !1,
                            onDragStart: this.onDragStart,
                            onDrop: this.onDrop,
                            defaultExpandedKeys:
                              'object' !== c || s
                                ? []
                                : this.catchExpandedKeys(o),
                          },
                          'object' === c &&
                            ht({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: '',
                              targetJsonSchema: o,
                              isOnlyShowChild: !0,
                            }),
                          'object' !== c &&
                            dt({
                              parentType: '',
                              jsonKey: '',
                              indexRoute: '',
                              nodeKey: 'first-schema',
                              targetJsonSchema: o,
                              key: 'schema',
                              isFirstSchema: !0,
                            }),
                        ),
                      ),
                    !s &&
                      t &&
                      r.createElement(Ve, {
                        jsonData: o,
                        readOnly: null == n || n,
                        maxLines: 25,
                        onChange: i,
                      }),
                    s &&
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
          onChange: d().func,
          data: d().object,
          typeList: d().object,
          jsonView: d().any,
          jsonViewReadOnly: d().bool,
        };
        var gt = (0, l.inject)(function (e) {
            return { schemaStore: e.schemaStore };
          })((0, l.observer)(yt)),
          ft = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  schemaStore: new Re.schemaStore(),
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
                    r.createElement(gt, this.props),
                  );
                return t ? (c().render(a, t), '') : a;
              }),
              t
            );
          })(r.PureComponent);
        ft.propTypes = {
          wideScreen: d().any,
          onChange: d().func,
          data: d().any,
          typeList: d().any,
          element: d().any,
          jsonView: d().any,
          jsonViewReadOnly: d().any,
        };
      })(),
      a
    );
  })();
});
