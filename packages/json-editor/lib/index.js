/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define([], t)
      : 'object' == typeof exports
        ? (exports.JSONEditor = t())
        : (e.JSONEditor = t());
})(this, function () {
  return (function () {
    var __webpack_modules__ = {
        405: function () {},
        611: function (e, t, n) {
          'use strict';
          function a(e, t) {
            for (var n = [], a = {}, o = 0; o < t.length; o++) {
              var l = t[o],
                r = l[0],
                i = {
                  id: e + ':' + o,
                  css: l[1],
                  media: l[2],
                  sourceMap: l[3],
                };
              a[r]
                ? a[r].parts.push(i)
                : n.push((a[r] = { id: r, parts: [i] }));
            }
            return n;
          }
          n.d(t, {
            A: function () {
              return y;
            },
          });
          var o = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !o)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var l = {},
            r =
              o && (document.head || document.getElementsByTagName('head')[0]),
            i = null,
            s = 0,
            c = !1,
            u = function () {},
            p = null,
            m = 'data-vue-ssr-id',
            d =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function y(e, t, n, o) {
            ((c = n), (p = o || {}));
            var r = a(e, t);
            return (
              h(r),
              function (t) {
                for (var n = [], o = 0; o < r.length; o++) {
                  var i = r[o];
                  ((s = l[i.id]).refs--, n.push(s));
                }
                for (
                  t ? h((r = a(e, t))) : (r = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var s;
                  if (0 === (s = n[o]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete l[s.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                a = l[n.id];
              if (a) {
                a.refs++;
                for (var o = 0; o < a.parts.length; o++) a.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) a.parts.push(_(n.parts[o]));
                a.parts.length > n.parts.length &&
                  (a.parts.length = n.parts.length);
              } else {
                var r = [];
                for (o = 0; o < n.parts.length; o++) r.push(_(n.parts[o]));
                l[n.id] = { id: n.id, refs: 1, parts: r };
              }
            }
          }
          function S() {
            var e = document.createElement('style');
            return ((e.type = 'text/css'), r.appendChild(e), e);
          }
          function _(e) {
            var t,
              n,
              a = document.querySelector('style[' + m + '~="' + e.id + '"]');
            if (a) {
              if (c) return u;
              a.parentNode.removeChild(a);
            }
            if (d) {
              var o = s++;
              ((a = i || (i = S())),
                (t = v.bind(null, a, o, !1)),
                (n = v.bind(null, a, o, !0)));
            } else
              ((a = S()),
                (t = E.bind(null, a)),
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
          var g,
            f =
              ((g = []),
              function (e, t) {
                return ((g[e] = t), g.filter(Boolean).join('\n'));
              });
          function v(e, t, n, a) {
            var o = n ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = f(t, o);
            else {
              var l = document.createTextNode(o),
                r = e.childNodes;
              (r[t] && e.removeChild(r[t]),
                r.length ? e.insertBefore(l, r[t]) : e.appendChild(l));
            }
          }
          function E(e, t) {
            var n = t.css,
              a = t.media,
              o = t.sourceMap;
            if (
              (a && e.setAttribute('media', a),
              p.ssrId && e.setAttribute(m, t.id),
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
        632: function (e, t, n) {
          var a = n(4396);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('54a7813a', a, !1, { sourceMap: !1 }));
        },
        641: function () {},
        697: function (
          __unused_webpack_module,
          __unused_webpack___webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(5820),
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
              __webpack_require__.n(
                _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
              ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2015),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            ),
            $core_factory__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(7722),
            mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7222),
            mobx__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            ),
            antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6375),
            antd__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_4__,
            ),
            react_ace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2813),
            react_ace__WEBPACK_IMPORTED_MODULE_5___default =
              __webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_5__),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(2347),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
              __webpack_require__.n(
                _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
              ),
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(5085),
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
              __webpack_require__.n(
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
              ),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(8426),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_8___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_8__,
              ),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(6953),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_9___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_9__,
              ),
            $utils_typeof__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(3991),
            $mixins_index__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(881),
            $utils_index__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(3037),
            CodeAreaFormSchema = (function (_React$PureComponent) {
              function CodeAreaFormSchema(e) {
                var t;
                return (
                  ((t =
                    _React$PureComponent.call(this, e) ||
                    this).handleValueChange = function (e) {
                    var n = t.props,
                      a = n.keyRoute;
                    (0, (n.jsonStore || {}).updateFormValueData)(a, e);
                  }),
                  (t.state = { isShowWarn: !1, warnText: '' }),
                  (t.handleValueChange = t.handleValueChange.bind(t)),
                  t
                );
              }
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
                CodeAreaFormSchema,
                _React$PureComponent,
              );
              var _proto = CodeAreaFormSchema.prototype;
              return (
                (_proto.componentWillMount = function () {
                  $mixins_index__WEBPACK_IMPORTED_MODULE_11__.x.call(this);
                }),
                (_proto.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    $mixins_index__WEBPACK_IMPORTED_MODULE_11__.x.call(
                      this,
                      e.keyRoute,
                    );
                }),
                (_proto.render = function render() {
                  var _this2 = this,
                    _this$props2 = this.props,
                    schemaStore = _this$props2.schemaStore,
                    jsonStore = _this$props2.jsonStore,
                    _ref2 = schemaStore || {},
                    pageScreen = _ref2.pageScreen,
                    _ref3 = jsonStore || {},
                    getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute,
                    _this$props3 = this.props,
                    isReadOnly = _this$props3.isReadOnly,
                    jsonKey = _this$props3.jsonKey,
                    isIgnoreWarn = _this$props3.isIgnoreWarn,
                    nodeKey = _this$props3.nodeKey,
                    keyRoute = _this$props3.keyRoute,
                    targetJsonSchema = _this$props3.targetJsonSchema,
                    _this$state = this.state,
                    isShowWarn = _this$state.isShowWarn,
                    warnText = _this$state.warnText,
                    readOnly = isReadOnly || targetJsonSchema.readOnly || !1,
                    isRequired = targetJsonSchema.isRequired || !1,
                    curJsonData = getJSONDataByKeyRoute(keyRoute);
                  ((curJsonData =
                    void 0 !== curJsonData
                      ? curJsonData
                      : targetJsonSchema.default || '() => {}'),
                    (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_10__.Gv)(
                      curJsonData,
                    ) && (curJsonData = JSON.stringify(curJsonData, null, 2)));
                  var style = targetJsonSchema.style
                      ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_12__.K8)(
                          (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                            targetJsonSchema.style,
                          ),
                        )
                      : {},
                    titleStyle = targetJsonSchema.titleStyle
                      ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_12__.K8)(
                          (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                            targetJsonSchema.titleStyle,
                          ),
                        )
                      : {},
                    contentStyle = targetJsonSchema.contentStyle
                      ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_12__.K8)(
                          (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                            targetJsonSchema.contentStyle,
                          ),
                        )
                      : {};
                  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === pageScreen
                          ? 'wide-screen-element-warp container-warp'
                          : 'mobile-screen-element-warp',
                      id: nodeKey,
                      style: style,
                    },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      { className: 'element-title', style: titleStyle },
                      react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
                        {
                          title:
                            'wideScreen' === pageScreen
                              ? targetJsonSchema.description
                              : '',
                          placement: 'top',
                        },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title: targetJsonSchema.title,
                          },
                          targetJsonSchema.title,
                          targetJsonSchema.showKey &&
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'span',
                              null,
                              '（',
                              (0,
                              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                                jsonKey,
                                { length: 15 },
                              ),
                              '）',
                            ),
                        ),
                      ),
                      'mobileScreen' === pageScreen &&
                        targetJsonSchema.description &&
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          antd__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
                          {
                            title: targetJsonSchema.description,
                            placement: 'top',
                          },
                          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                            { className: 'info-icon' },
                          ),
                        ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      { className: 'content-item', style: contentStyle },
                      !isIgnoreWarn &&
                        isShowWarn &&
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            { className: 'warning-text' },
                            warnText,
                          ),
                        ),
                      react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react_ace__WEBPACK_IMPORTED_MODULE_5___default(),
                        {
                          key: nodeKey + '-ace',
                          className: 'code-area-item',
                          value: curJsonData,
                          mode: 'javascript',
                          theme: 'monokai',
                          name: 'JS_CODE_EDIT',
                          fontSize: 14,
                          showPrintMargin: !0,
                          showGutter: !0,
                          highlightActiveLine: !0,
                          readOnly: readOnly,
                          minLines: 5,
                          maxLines: 30,
                          width: '100%',
                          onChange: function onChange(newJsonData) {
                            try {
                              (eval(newJsonData),
                                _this2.handleValueChange(newJsonData),
                                _this2.setState({ isShowWarn: !1 }));
                            } catch (e) {
                              (_this2.handleValueChange(newJsonData),
                                _this2.setState({
                                  warnText: e.message,
                                  isShowWarn: !0,
                                }));
                            }
                          },
                          setOptions: {
                            useWorker: !1,
                            showLineNumbers: !0,
                            tabSize: 2,
                          },
                        },
                      ),
                    ),
                  );
                }),
                CodeAreaFormSchema
              );
            })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          (0, $core_factory__WEBPACK_IMPORTED_MODULE_2__.TS)({
            type: 'codearea',
            component: CodeAreaFormSchema,
          });
          var __WEBPACK_DEFAULT_EXPORT__ = CodeAreaFormSchema;
        },
        881: function (e, t, n) {
          'use strict';
          n.d(t, {
            x: function () {
              return o;
            },
          });
          var a = n(3037);
          function o(e) {
            var t = this.props.targetJsonSchema,
              n = this.props.jsonStore || {},
              o = n.getJSONDataByKeyRoute,
              l = n.getInitJsonDataByKeyRoute,
              r = n.updateFormValueData,
              i = t.type,
              s = e || this.props.keyRoute,
              c = (0, a.TA)(s + '-' + i);
            if (c) {
              var u = o(s);
              (null == u && (u = l(s)), null == u && r(s, c));
            }
          }
        },
        2015: function (e) {
          'use strict';
          e.exports = require('react');
        },
        2171: function () {},
        2347: function (e) {
          'use strict';
          e.exports = require('@ant-design/icons');
        },
        2523: function () {},
        2595: function (e, t, n) {
          var a = n(7766);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('56ceba47', a, !1, { sourceMap: !1 }));
        },
        2597: function () {},
        2657: function (e, t, n) {
          var a = n(8006);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('91732ad6', a, !1, { sourceMap: !1 }));
        },
        2813: function (e) {
          'use strict';
          e.exports = require('react-ace');
        },
        2961: function () {},
        3037: function (e, t, n) {
          'use strict';
          n.d(t, {
            K8: function () {
              return i;
            },
            or: function () {
              return y;
            },
            TA: function () {
              return d;
            },
            GT: function () {
              return u;
            },
            n4: function () {
              return c;
            },
            y8: function () {
              return p;
            },
            bQ: function () {
              return s;
            },
            mq: function () {
              return m;
            },
          });
          var a = n(5085),
            o = require('lodash/camelCase'),
            l = n.n(o),
            r = n(5670);
          function i(e) {
            var t = {};
            return (
              e &&
                Object.keys(e).forEach(function (n) {
                  n.indexOf('-') > 0 ? (t[l()(n)] = e[n]) : (t[n] = e[n]);
                }),
              t
            );
          }
          function s(e) {
            return (0, a.objClone)(e);
          }
          function c(e, t) {
            return (0, a.isEqual)(e, t);
          }
          function u(e) {
            var t = !1;
            return (null != e && (t = !0), t);
          }
          function p(e) {
            var t = !1;
            return (
              ('boolean' !== e &&
                'date' !== e &&
                'date-time' !== e &&
                'time' !== e &&
                'number' !== e &&
                'color' !== e &&
                'quantity' !== e &&
                'select' !== e) ||
                (t = !0),
              t
            );
          }
          function m(e, t) {
            (0, r.PM)(e, t, 'json-editor-formData');
          }
          function d(e) {
            return (0, r.Gz)(e, 'json-editor-formData');
          }
          function y(e) {
            var t = [],
              n = {};
            if ((0, a.isArray)(e))
              e.forEach(function (e) {
                if ((0, a.isObject)(e.value)) {
                  var o = JSON.stringify(e.value);
                  (t.push({ label: e.label || e.name, value: o }),
                    (n[o] = e.value));
                } else t.push(e);
              });
            else if ((0, a.isString)(e))
              try {
                var o = y((t = JSON.parse(e)));
                ((t = o.options), (n = o.optionValue));
              } catch (t) {
                console.warn('options 异常数据格式转换失败：', e);
              }
            return { options: t, optionValue: n };
          }
        },
        3512: function (e, t, n) {
          var a = n(5465);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('07ba8918', a, !1, { sourceMap: !1 }));
        },
        3794: function (e, t, n) {
          var a = n(8985);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('4f50bcf6', a, !1, { sourceMap: !1 }));
        },
        3991: function (e, t, n) {
          'use strict';
          function a(e) {
            return /^http[s]?:\/\/.*/.test(e);
          }
          function o(e) {
            return 'String' === Object.prototype.toString.call(e).slice(8, -1);
          }
          function l(e) {
            var t = !1;
            return (
              'Array' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          function r(e) {
            var t = !1;
            return (
              'Object' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          function i(e) {
            return /^#[0-9a-f]{3,6}$/.test(e);
          }
          function s(e) {
            var t = !1;
            return (
              'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          (n.d(t, {
            Gv: function () {
              return r;
            },
            Kg: function () {
              return o;
            },
            Tn: function () {
              return s;
            },
            _o: function () {
              return i;
            },
            cy: function () {
              return l;
            },
            mv: function () {
              return a;
            },
          }),
            n(5085));
        },
        3997: function () {},
        4020: function (e) {
          'use strict';
          e.exports = require('mobx-react');
        },
        4396: function () {},
        4410: function (e, t, n) {
          var a = n(3997);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('220f768b', a, !1, { sourceMap: !1 }));
        },
        4505: function () {},
        4754: function (e, t, n) {
          var a = n(2171);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('f3c943b4', a, !1, { sourceMap: !1 }));
        },
        5040: function (e, t, n) {
          var a = n(2961);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('5c4a563c', a, !1, { sourceMap: !1 }));
        },
        5085: function (e) {
          'use strict';
          e.exports = require('@wibetter/json-utils');
        },
        5465: function () {},
        5670: function (e, t, n) {
          'use strict';
          function a(e, t, n) {
            if (
              (void 0 === n && (n = 'json-editor-cache'), window.sessionStorage)
            ) {
              var a = {},
                o = window.sessionStorage.getItem(n);
              (o && (a = JSON.parse(o)),
                e && (a[e] = t),
                window.sessionStorage.setItem(n, JSON.stringify(a)));
            }
          }
          function o(e, t) {
            var n;
            if (
              (void 0 === t && (t = 'json-editor-cache'), window.sessionStorage)
            ) {
              var a = {},
                o = window.sessionStorage.getItem(t);
              (o && (a = JSON.parse(o)), e && (n = a[e]));
            }
            return n;
          }
          n.d(t, {
            Gz: function () {
              return o;
            },
            PM: function () {
              return a;
            },
          });
        },
        5820: function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/inheritsLoose');
        },
        6031: function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/extends');
        },
        6220: function (e, t, n) {
          var a = n(2597);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('f7862348', a, !1, { sourceMap: !1 }));
        },
        6375: function (e) {
          'use strict';
          e.exports = require('antd');
        },
        6953: function (e) {
          'use strict';
          e.exports = require('ace-builds/src-noconflict/theme-monokai');
        },
        7222: function (e) {
          'use strict';
          e.exports = require('mobx');
        },
        7232: function () {},
        7258: function () {},
        7546: function (e, t, n) {
          var a = n(4505);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('e6602b10', a, !1, { sourceMap: !1 }));
        },
        7551: function () {},
        7722: function (e, t, n) {
          'use strict';
          n.d(t, {
            A$: function () {
              return m;
            },
            A4: function () {
              return u;
            },
            Jd: function () {
              return c;
            },
            Sd: function () {
              return d;
            },
            TS: function () {
              return p;
            },
          });
          var a = n(6031),
            o = n.n(a),
            l = n(2015),
            r = n.n(l),
            i = n(3991),
            s = n(8165),
            c = {};
          function u(e) {
            return function (t) {
              var n = p(o()({}, e, { component: t }));
              return null == n ? void 0 : n.component;
            };
          }
          function p(e) {
            if (e.type)
              if (e.component) {
                if (
                  (e.type &&
                    'string' == typeof e.type &&
                    (e.type = e.type.toLowerCase()),
                  !c[e.type])
                ) {
                  var t = (0, s.A)(e.component);
                  return ((c[e.type] = t), e);
                }
                console.warn(
                  '[json-editor]：注册渲染器失败，当前存在重名渲染器（' +
                    e.type +
                    '），请尝试换一个 type。',
                );
              } else
                console.warn(
                  '[json-editor]：注册渲染器失败，请设置渲染器对应的 component。',
                );
            else
              console.warn(
                '[json-editor]：注册渲染器失败，请设置渲染器对应的 type。',
              );
          }
          function m(e) {
            var t = (0, i.Gv)(e) ? e.type : 'string' == typeof e ? e : '';
            t && 'string' == typeof t && delete c[t];
          }
          function d(e, t) {
            return r().createElement(
              'div',
              { className: 'RuntimeError' },
              r().createElement('p', null, 'Error: 找不到对应的渲染器'),
              r().createElement('p', null, 'Path: ', t),
              r().createElement(
                'pre',
                null,
                r().createElement('code', null, JSON.stringify(e, null, 2)),
              ),
            );
          }
        },
        7766: function () {},
        8006: function () {},
        8104: function (e, t, n) {
          var a = n(641);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('1fb1d0ec', a, !1, { sourceMap: !1 }));
        },
        8165: function (e, t, n) {
          'use strict';
          n.d(t, {
            A: function () {
              return o;
            },
          });
          var a = n(4020);
          function o(e) {
            return (0, a.inject)(function (e) {
              return {
                schemaStore: e.JSONSchemaStore,
                jsonStore: e.JSONEditorStore,
              };
            })((0, a.observer)(e));
          }
        },
        8426: function (e) {
          'use strict';
          e.exports = require('ace-builds/src-noconflict/mode-javascript');
        },
        8678: function (e, t, n) {
          var a = n(7551);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('aed4b9b0', a, !1, { sourceMap: !1 }));
        },
        8819: function (e, t, n) {
          var a = n(7232);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('1b6af5a2', a, !1, { sourceMap: !1 }));
        },
        8985: function () {},
        9346: function (e, t, n) {
          var a = n(405);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('6e510ca0', a, !1, { sourceMap: !1 }));
        },
        9741: function (e, t, n) {
          var a = n(7258);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('ae856a32', a, !1, { sourceMap: !1 }));
        },
        9928: function (e, t, n) {
          var a = n(2523);
          (a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('31b3938e', a, !1, { sourceMap: !1 }));
        },
      },
      __webpack_module_cache__ = {};
    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var n = (__webpack_module_cache__[e] = { id: e, exports: {} });
      return (
        __webpack_modules__[e](n, n.exports, __webpack_require__),
        n.exports
      );
    }
    ((__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (__webpack_require__.d(t, { a: t }), t);
    }),
      (__webpack_require__.d = function (e, t) {
        for (var n in t)
          __webpack_require__.o(t, n) &&
            !__webpack_require__.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (__webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (__webpack_require__.r = function (e) {
        ('undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 }));
      }));
    var __webpack_exports__ = {};
    return (
      (function () {
        'use strict';
        (__webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            AddJSONCustomRenderer: function () {
              return Ae;
            },
            Renderer: function () {
              return b.A4;
            },
            default: function () {
              return Be;
            },
            getJSONCustomRenderer: function () {
              return Me;
            },
            loadRenderer: function () {
              return b.Sd;
            },
            registerRenderer: function () {
              return b.TS;
            },
            unRegisterRenderer: function () {
              return b.A$;
            },
            withStore: function () {
              return Ve.A;
            },
          }));
        var e = __webpack_require__(6031),
          t = __webpack_require__.n(e),
          n = __webpack_require__(5820),
          a = __webpack_require__.n(n),
          o = __webpack_require__(2015),
          l = __webpack_require__.n(o),
          r = require('react-dom'),
          i = __webpack_require__.n(r),
          s = __webpack_require__(4020),
          c = require('@babel/runtime/helpers/createClass'),
          u = __webpack_require__.n(c),
          p = require('tslib'),
          m = __webpack_require__(7222),
          d = __webpack_require__(5085),
          y = d.TypeDataList.jsonschema,
          h = (function () {
            function e(e) {
              ((this.state = void 0),
                (this.pageScreen = 'mobileScreen'),
                (this.jsonSchema = {}),
                (this.state = { rootJSONStore: e }));
            }
            var t = e.prototype;
            return (
              (t.setPageScreen = function (e) {
                this.pageScreen =
                  'wideScreen' === e || e ? 'wideScreen' : 'mobileScreen';
              }),
              (t.initJSONSchemaData = function (e) {
                if (e && '{}' !== JSON.stringify(e)) {
                  if (!(0, d.isEqual)(e, this.JSONSchemaObj))
                    if (e && (0, d.isNewSchemaData)(e)) this.jsonSchema = e;
                    else {
                      var t = (0, d.oldSchemaToNewSchema)(e);
                      this.jsonSchema = t;
                    }
                } else this.jsonSchema = (0, d.objClone)(y);
              }),
              (t.JSONSchemaChange = function (e) {
                if (e && '{}' !== JSON.stringify(e))
                  if (e && (0, d.isNewSchemaData)(e)) this.jsonSchema = e;
                  else {
                    var t = (0, d.oldSchemaToNewSchema)(e);
                    this.jsonSchema = t;
                  }
                else this.jsonSchema = (0, d.objClone)(y);
                var n,
                  a = this.state.rootJSONStore.JSONEditorStore,
                  o = null == a ? void 0 : a.jsonData;
                ((n = this.jsonSchema.reset
                  ? (0, d.schema2json)(this.jsonSchema, {})
                  : (0, d.schema2json)(this.jsonSchema, o)),
                  a &&
                    ((a.jsonData = n), (a.initJsonData = (0, d.objClone)(o))));
              }),
              (t.indexRoute2keyRoute = function (e) {
                return (0, d.indexRoute2keyRoute)(e, this.jsonSchema);
              }),
              (t.keyRoute2indexRoute = function (e) {
                return (0, d.keyRoute2indexRoute)(e, this.jsonSchema);
              }),
              (t.getSchemaByIndexRoute = function (e) {
                return (0, d.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
              }),
              (t.getSchemaByKeyRoute = function (e) {
                var t = this.keyRoute2indexRoute(e);
                return (0, d.getSchemaByIndexRoute)(t, this.jsonSchema, !0);
              }),
              u()(e, [
                {
                  key: 'JSONSchemaObj',
                  get: function () {
                    return (0, m.toJS)(this.jsonSchema);
                  },
                },
                {
                  key: 'lastUpdateTime',
                  get: function () {
                    var e = this.jsonSchema.lastUpdateTime;
                    return e ? new Date(e).getTime() : new Date().getTime();
                  },
                },
              ])
            );
          })();
        ((0, p.__decorate)([m.observable], h.prototype, 'pageScreen', void 0),
          (0, p.__decorate)([m.observable], h.prototype, 'jsonSchema', void 0),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'setPageScreen',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'initJSONSchemaData',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'JSONSchemaChange',
            null,
          ),
          (0, p.__decorate)([m.computed], h.prototype, 'JSONSchemaObj', null),
          (0, p.__decorate)([m.computed], h.prototype, 'lastUpdateTime', null),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'indexRoute2keyRoute',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'keyRoute2indexRoute',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'getSchemaByIndexRoute',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            h.prototype,
            'getSchemaByKeyRoute',
            null,
          ));
        var S = __webpack_require__(6375),
          _ = __webpack_require__(3037),
          g = __webpack_require__(3991),
          f = (function () {
            function e(e) {
              ((this.state = void 0),
                (this.rootJSONStore = {}),
                (this.triggerChange = !1),
                (this.lastUpdateTime = new Date().getTime()),
                (this.jsonData = null),
                (this.initJsonData = {}),
                (this.dynamicDataList = []),
                (this.dynamicDataObj = {}),
                (this.options = {}),
                (this.dynamicDataApiScopeList = {
                  static: '固定值',
                  url: 'URL参数',
                  hash: 'Hash参数',
                  window: '环境变量',
                  dynamic: '接口下发',
                  page: '页面参数',
                  input: '用户输入',
                }),
                (this.onChange = function () {}),
                (this.state = { rootJSONStore: e }));
            }
            var t = e.prototype;
            return (
              (t.updateLastTime = function () {
                this.lastUpdateTime = new Date().getTime();
              }),
              (t.triggerChangeAction = function () {
                this.triggerChange = !this.triggerChange;
              }),
              (t.initJSONData = function (e) {
                var t,
                  n =
                    (null == (t = this.state.rootJSONStore.JSONSchemaStore)
                      ? void 0
                      : t.jsonSchema) || {};
                if (
                  !(0, _.n4)(e, this.JSONEditorObj) &&
                  ((this.initJsonData = (0, _.bQ)(this.jsonData)),
                  n && !(0, d.isEmptySchema)(n))
                ) {
                  var a = (0, d.schema2json)(n, e || {});
                  ((this.jsonData = Object.assign({}, e, a)),
                    this.updateLastTime());
                }
              }),
              (t.initOnChange = function (e) {
                (e || (0, g.Tn)(e)) && (this.onChange = e);
              }),
              (t.setDynamicDataList = function (e) {
                if (!(0, _.n4)(e, this.dynamicDataList)) {
                  this.dynamicDataList = (0, _.bQ)(e);
                  var t = {};
                  (e.map(function (e) {
                    t[e.name] = e;
                  }),
                    (this.dynamicDataObj = t));
                }
              }),
              (t.setOptions = function (e) {
                e && (this.options = e);
              }),
              (t.jsonDataChange = function () {
                (this.jsonData &&
                  (this.jsonData.lastUpdateTime = new Date().getTime()),
                  this.onChange(this.JSONEditorObj));
              }),
              (t.jsonChange = function (e) {
                ((this.jsonData = e), this.jsonDataChange());
              }),
              (t.getJSONDataByKeyRoute = function (e, t) {
                var n = t || this.jsonData;
                return (0, d.getJsonDataByKeyRoute)(e, n, !0);
              }),
              (t.getInitJsonDataByKeyRoute = function (e, t) {
                var n = t || this.initJsonData;
                return (0, d.getJsonDataByKeyRoute)(e, n, !0);
              }),
              (t.updateFormValueData = function (e, t, n) {
                var a,
                  o = null;
                if (
                  (null != (a = this.state.rootJSONStore.JSONSchemaStore) &&
                    a.getSchemaByKeyRoute &&
                    (o =
                      this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(
                        e,
                      )),
                  '' !== e &&
                    t &&
                    o &&
                    o &&
                    o.type &&
                    (0, _.mq)(e + '-' + o.type, t),
                  '' !== e)
                ) {
                  var l,
                    r = (0, d.getParentKeyRoute_CurKey)(e),
                    i = r[0],
                    s = r[1],
                    c = (0, d.getJsonDataByKeyRoute)(i, this.jsonData);
                  c
                    ? (c[s] = t)
                    : this.updateFormValueData(i, (((l = {})[s] = t), l));
                } else this.jsonData = t;
                (o && o.isConditionProp && this.updateLastTime(),
                  n || this.jsonDataChange());
              }),
              (t.deleteArrayIndex = function (e, t) {
                var n = (0, d.getJsonDataByKeyRoute)(e, this.jsonData);
                (0, g.cy)(n) &&
                  (n.length > 0
                    ? (n.splice(t, 1),
                      this.triggerChangeAction(),
                      this.jsonDataChange())
                    : S.message.warning(
                        '删除失败，空数组对象暂无可删除子项。',
                      ));
              }),
              (t.addArrayItem = function (e, t) {
                var n = (0, d.getJsonDataByKeyRoute)(e, this.jsonData);
                if ((0, g.cy)(n)) {
                  var a = n[t || 0];
                  if (
                    ((0, g.Gv)(a) && (a = Object.assign({}, a)), t || 0 === t)
                  ) {
                    var o = n.slice(Number(t) + 1),
                      l = [a].concat(o);
                    (n.splice(Number(t) + 1), n.push.apply(n, l));
                  } else n.push(a);
                  (this.triggerChangeAction(), this.jsonDataChange());
                } else
                  S.message.warning('数据操作异常：当前元素不是数组类型。');
              }),
              (t.sortArrayItem = function (e, t, n) {
                var a = (0, d.getJsonDataByKeyRoute)(e, this.jsonData);
                if ((0, g.cy)(a)) {
                  var o = (0, _.bQ)(a[t || 0]),
                    l = t;
                  if ('up' === n && l > 0) l -= 1;
                  else {
                    if ('up' === n && 0 === l)
                      return void S.message.warning(
                        '数据操作异常：当前数组项已经是第一个元素了。',
                      );
                    if (
                      ('down' === n || !n) &&
                      ((l += 1), 'down' === n && l > a.length - 1)
                    )
                      return void S.message.warning(
                        '数据操作异常：当前数组项已经是最后一个元素了。',
                      );
                  }
                  var r = (0, _.bQ)(a[l]);
                  void 0 !== o &&
                    void 0 !== r &&
                    ((a[t] = r),
                    (a[l] = o),
                    S.message.success(
                      '原有数据项' +
                        (t + 1) +
                        '对应的数据内容已' +
                        ('up' === n ? '向上' : '向下') +
                        '移动一级',
                      5,
                    ),
                    this.updateLastTime(),
                    this.triggerChangeAction(),
                    this.jsonDataChange());
                } else
                  S.message.warning('数据操作异常：当前元素不是数组类型。');
              }),
              u()(e, [
                {
                  key: 'JSONEditorObj',
                  get: function () {
                    return (0, m.toJS)(this.jsonData);
                  },
                },
              ])
            );
          })();
        ((0, p.__decorate)(
          [m.observable],
          f.prototype,
          'rootJSONStore',
          void 0,
        ),
          (0, p.__decorate)(
            [m.observable],
            f.prototype,
            'triggerChange',
            void 0,
          ),
          (0, p.__decorate)(
            [m.observable],
            f.prototype,
            'lastUpdateTime',
            void 0,
          ),
          (0, p.__decorate)([m.observable], f.prototype, 'jsonData', void 0),
          (0, p.__decorate)(
            [m.observable],
            f.prototype,
            'initJsonData',
            void 0,
          ),
          (0, p.__decorate)(
            [m.observable],
            f.prototype,
            'dynamicDataList',
            void 0,
          ),
          (0, p.__decorate)(
            [m.observable],
            f.prototype,
            'dynamicDataObj',
            void 0,
          ),
          (0, p.__decorate)([m.observable], f.prototype, 'options', void 0),
          (0, p.__decorate)(
            [m.observable],
            f.prototype,
            'dynamicDataApiScopeList',
            void 0,
          ),
          (0, p.__decorate)([m.observable], f.prototype, 'onChange', void 0),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'updateLastTime',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'triggerChangeAction',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'initJSONData',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'initOnChange',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'setDynamicDataList',
            null,
          ),
          (0, p.__decorate)([m.action.bound], f.prototype, 'setOptions', null),
          (0, p.__decorate)([m.computed], f.prototype, 'JSONEditorObj', null),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'jsonDataChange',
            null,
          ),
          (0, p.__decorate)([m.action.bound], f.prototype, 'jsonChange', null),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'getJSONDataByKeyRoute',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'getInitJsonDataByKeyRoute',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'updateFormValueData',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'deleteArrayIndex',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'addArrayItem',
            null,
          ),
          (0, p.__decorate)(
            [m.action.bound],
            f.prototype,
            'sortArrayItem',
            null,
          ));
        var v,
          E = function () {
            ((this.JSONSchemaStore = void 0),
              (this.JSONEditorStore = void 0),
              (this.JSONSchemaStore = new h(this)),
              (this.JSONEditorStore = new f(this)));
          },
          b = __webpack_require__(7722),
          w = __webpack_require__(2347),
          C = __webpack_require__(5670),
          O = __webpack_require__(2813),
          x = __webpack_require__.n(O),
          N =
            (require('ace-builds/src-noconflict/mode-json'),
            require('ace-builds/src-noconflict/theme-solarized_light'),
            __webpack_require__(5040),
            (function (e) {
              function t(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    n.props.onChange &&
                      (0, d.isFunction)(n.props.onChange) &&
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
                a()(t, e),
                (t.prototype.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.jsonData,
                    a = t.readOnly,
                    l = t.maxLines,
                    r = n || {},
                    i = this.state,
                    s = i.isShowWarn,
                    c = i.warnText,
                    u = a || !1;
                  return (
                    (r = void 0 !== r ? r : r || '{}'),
                    ((0, d.isObject)(r) || (0, d.isArray)(r)) &&
                      (r = JSON.stringify(r, null, 2)),
                    o.createElement(
                      'div',
                      { className: 'json-view-box' },
                      u &&
                        o.createElement(
                          'div',
                          { className: 'readOnly-btn' },
                          '[只读]',
                        ),
                      s &&
                        o.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          o.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          o.createElement(
                            'div',
                            { className: 'warning-text' },
                            c,
                          ),
                        ),
                      o.createElement(x(), {
                        defaultValue: r,
                        className: 'json-view-ace',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
                        fontSize: 14,
                        showPrintMargin: !0,
                        showGutter: !0,
                        highlightActiveLine: !0,
                        readOnly: u,
                        minLines: 5,
                        maxLines: l || 33,
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
            })(o.PureComponent)),
          k = __webpack_require__(881);
        function R() {
          return (
            (R = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                      ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                  }
                  return e;
                }),
            R.apply(null, arguments)
          );
        }
        __webpack_require__(2595);
        var j,
          D = function (e) {
            return o.createElement(
              'svg',
              R(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              v ||
                (v = o.createElement('path', {
                  d: 'M15.5 2a.5.5 0 0 1 .09.992L15.5 3H14v10.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 13.6V3H.5a.5.5 0 0 1-.09-.992L.5 2h15ZM13 3H3v10.6a1.4 1.4 0 0 0 1.265 1.394L4.4 15h7.2a1.4 1.4 0 0 0 1.394-1.265L13 13.6V3ZM6 6a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L5.5 11.5v-5A.5.5 0 0 1 6 6Zm4 0a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L9.5 11.5v-5A.5.5 0 0 1 10 6Zm.5-6a.5.5 0 0 1 .09.992L10.5 1h-5a.5.5 0 0 1-.09-.992L5.5 0h5Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function T() {
          return (
            (T = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                      ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                  }
                  return e;
                }),
            T.apply(null, arguments)
          );
        }
        var K,
          P = function (e) {
            return o.createElement(
              'svg',
              T(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              j ||
                (j = o.createElement('path', {
                  d: 'M10.286 4C11.232 4 12 4.768 12 5.714v8.572c0 .946-.768 1.714-1.714 1.714H1.714A1.714 1.714 0 0 1 0 14.286V5.714C0 4.768.768 4 1.714 4h8.572Zm-.12 1H1.834A.833.833 0 0 0 1 5.833v8.334c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833V5.833A.833.833 0 0 0 10.167 5ZM6 7.429c.237 0 .429.191.429.428l-.001 1.714h1.715a.429.429 0 0 1 0 .858H6.428v1.714a.429.429 0 1 1-.857 0v-1.714H3.857a.429.429 0 1 1 0-.858h1.714V7.857c0-.237.192-.428.429-.428ZM14.286 0C15.232 0 16 .768 16 1.714v8.572c0 .946-.768 1.714-1.714 1.714H13v-1h1.167c.46 0 .833-.373.833-.833V1.833A.833.833 0 0 0 14.167 1H5.833A.833.833 0 0 0 5 1.833V3H4V1.714C4 .768 4.768 0 5.714 0h8.572Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function J() {
          return (
            (J = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                      ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                  }
                  return e;
                }),
            J.apply(null, arguments)
          );
        }
        var A = function (e) {
            return o.createElement(
              'svg',
              J(
                {
                  viewBox: '0 0 1025 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                e,
              ),
              K ||
                (K = o.createElement('path', {
                  d: 'M293.069 755.2c-12.083 0-24.269-4.25-33.997-12.902L0 512l273.46-243.098c21.094-18.688 53.452-16.896 72.242 4.25 18.79 21.146 16.896 53.504-4.25 72.294L154.113 512l172.954 153.702c21.145 18.79 23.04 51.15 4.25 72.295-10.087 11.417-24.167 17.203-38.247 17.203zm457.984-.102L1024.512 512 765.44 281.702c-21.146-18.79-53.504-16.896-72.243 4.25-18.79 21.146-16.896 53.504 4.25 72.294L870.4 512 683.06 678.502c-21.146 18.79-23.04 51.15-4.25 72.295C688.896 762.214 702.976 768 717.056 768c12.083 0 24.269-4.25 33.997-12.902zm-239.514 72.55 102.4-614.4c4.66-27.904-14.182-54.272-42.086-58.931-28.007-4.71-54.323 14.182-58.88 42.086l-102.4 614.4c-4.66 27.904 14.182 54.272 42.086 58.931a52.65 52.65 0 0 0 8.448.666c24.576 0 46.285-17.766 50.432-42.752z',
                  fill: 'currentColor',
                })),
            );
          },
          M = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).addArrayItem = function (
                  e,
                  t,
                  a,
                ) {
                  var o = (n.props.jsonStore || {}).addArrayItem,
                    l = n.props.targetJsonSchema['maximum-child'];
                  t && l && t.length >= l
                    ? S.message.warning('添加失败，最多可添加' + l + '个子项')
                    : o(e, a);
                }),
                (n.deleteArrItem = function (e, t, a) {
                  var o = (n.props.jsonStore || {}).deleteArrayIndex,
                    l = n.props.targetJsonSchema['minimum-child'];
                  a && l && a.length <= l
                    ? S.message.warning('删除失败，至少需要保留' + l + '个子项')
                    : o(e, t);
                }),
                (n.elemHoverEnterEvent = function (e, t) {
                  (e.stopPropagation(),
                    t !== n.state.hoverIndex && n.setState({ hoverIndex: t }));
                }),
                (n.elemHoverLeaveEvent = function (e, t) {
                  (e.stopPropagation(),
                    t === n.state.hoverIndex && n.setState({ hoverIndex: -1 }));
                }),
                (n.getArrItemTitle = function (e) {
                  if (!e || !(0, g.Gv)(e)) return e;
                  for (
                    var t = Object.keys(e), n = 0, a = t.length;
                    n < a;
                    n++
                  ) {
                    var o = e[t[n]];
                    if (o && (0, g.Kg)(o) && !(0, g.mv)(o) && !(0, g._o)(o))
                      return o;
                  }
                  return '';
                }),
                (n.state = {
                  currentActiveArrIndex: -1,
                  jsonView: !1,
                  isClosed: !1,
                  hoverIndex: -1,
                }),
                (n.addArrayItem = n.addArrayItem.bind(n)),
                (n.deleteArrItem = n.deleteArrItem.bind(n)),
                (n.elemHoverEnterEvent = n.elemHoverEnterEvent.bind(n)),
                (n.elemHoverLeaveEvent = n.elemHoverLeaveEvent.bind(n)),
                (n.collapseChange = n.collapseChange.bind(n)),
                (n.arrayCollapseChange = n.arrayCollapseChange.bind(n)),
                n
              );
            }
            a()(n, e);
            var l = n.prototype;
            return (
              (l.componentWillMount = function () {
                k.x.call(this);
              }),
              (l.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  k.x.call(this, e.keyRoute);
              }),
              (l.collapseChange = function (e) {
                var t = this.props.keyRoute,
                  n = this.state.isClosed;
                (this.setState({ isClosed: !n }),
                  e.preventDefault(),
                  e.stopPropagation(),
                  (0, C.PM)(t, String(!n)));
              }),
              (l.arrayCollapseChange = function (e, t) {
                var n = this.props.keyRoute,
                  a = this.state.currentActiveArrIndex === t ? -1 : t;
                (this.setState({ currentActiveArrIndex: a }),
                  e.preventDefault(),
                  e.stopPropagation(),
                  (0, C.PM)(n + '-activeArrIndex', a));
              }),
              (l.render = function () {
                var e,
                  n,
                  a = this,
                  l = this.props,
                  r = l.schemaStore,
                  i = l.jsonStore,
                  s = (r || {}).pageScreen,
                  c = i || {},
                  u = c.getJSONDataByKeyRoute,
                  p = c.sortArrayItem,
                  y = this.props,
                  h = y.keyRoute,
                  f = y.jsonKey,
                  v = y.nodeKey,
                  E = y.indexRoute,
                  b = y.targetJsonSchema,
                  O = y.renderChild,
                  x = this.state,
                  k = x.jsonView,
                  R = x.isClosed,
                  j = x.currentActiveArrIndex,
                  T = b.type,
                  K = null == (e = b.showCodeViewBtn) || e,
                  J = u(h);
                (J && 0 !== J.length && (0, g.cy)(J)) || (J = [{}]);
                var M = b.items,
                  V = R,
                  B = (0, C.Gz)(h);
                void 0 !== B && (V = B);
                var I = j,
                  q = (0, C.Gz)(h + '-activeArrIndex');
                void 0 !== q && (I = q);
                var L = null != (n = b.boxTitle) ? n : '数据配置',
                  W = b.style ? (0, _.K8)((0, m.toJS)(b.style)) : {},
                  F = b.titleStyle ? (0, _.K8)((0, m.toJS)(b.titleStyle)) : {},
                  U = b.contentStyle
                    ? (0, _.K8)((0, m.toJS)(b.contentStyle))
                    : {};
                return o.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === s
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    id: v,
                    style: W,
                  },
                  o.createElement(
                    'div',
                    { className: 'element-title', style: F },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === s ? b.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: b.title },
                        b.title,
                        b.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(f, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === s &&
                      b.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: b.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'array-schema-box content-item', style: U },
                    o.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text' },
                        L,
                        ' ',
                      ),
                      V
                        ? o.createElement(w.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : o.createElement(w.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      K &&
                        o.createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              (a.setState({ jsonView: !k }),
                                e.preventDefault(),
                                e.stopPropagation());
                            },
                          },
                          o.createElement(
                            S.Tooltip,
                            { title: k ? '关闭源码模式' : '开启源码模式' },
                            o.createElement(A, {
                              className: k ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                      o.createElement(
                        S.Tooltip,
                        { title: '添加数据项' },
                        o.createElement(w.PlusOutlined, {
                          className: 'array-add-child-btn',
                          onClick: function (e) {
                            (a.addArrayItem(h, J, J.length),
                              e.preventDefault(),
                              e.stopPropagation());
                          },
                        }),
                      ),
                    ),
                    o.createElement(
                      'div',
                      {
                        className:
                          'array-content ' +
                          (k ? 'json-view-array' : '') +
                          ' ' +
                          (V ? 'closed' : ''),
                      },
                      !k &&
                        (0, g.cy)(J) &&
                        J.map(function (e, t) {
                          var n = v + '-array-items-' + J.length + '-' + t,
                            l = E ? E + '-0' : '0',
                            r = h ? h + '-' + t : '' + t,
                            i = a.getArrItemTitle(e);
                          return o.createElement(
                            'div',
                            { className: 'array-item', key: r },
                            o.createElement(
                              'div',
                              {
                                className: 'array-item-header',
                                onClick: function (e) {
                                  a.arrayCollapseChange(e, t);
                                },
                                onMouseMove: function (e) {
                                  a.elemHoverEnterEvent(e, t);
                                },
                                onMouseLeave: function (e) {
                                  a.elemHoverLeaveEvent(e, t);
                                },
                              },
                              o.createElement(
                                'div',
                                { className: 'array-title-text' },
                                i || M.title + '/' + (t + 1),
                              ),
                              o.createElement(
                                'div',
                                { className: 'array-operate-box' },
                                I !== t
                                  ? o.createElement(w.RightOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    })
                                  : o.createElement(w.DownOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    }),
                                o.createElement(
                                  S.Tooltip,
                                  { title: '删除' + M.title + '/' + (t + 1) },
                                  o.createElement(
                                    S.Popconfirm,
                                    {
                                      placement: 'top',
                                      title:
                                        '确定要删除' +
                                        M.title +
                                        '/' +
                                        (t + 1) +
                                        '吗？',
                                      onCancel: function (e) {
                                        (null == e || e.preventDefault(),
                                          null == e || e.stopPropagation());
                                      },
                                      onConfirm: function (e) {
                                        (a.deleteArrItem(h, t, J),
                                          null == e || e.preventDefault(),
                                          null == e || e.stopPropagation());
                                      },
                                      okText: '确定',
                                      cancelText: '取消',
                                    },
                                    o.createElement(D, {
                                      className:
                                        'delete-operate-btn array-operate-btn',
                                      onClick: function (e) {
                                        (null == e || e.preventDefault(),
                                          null == e || e.stopPropagation());
                                      },
                                    }),
                                  ),
                                ),
                                o.createElement(
                                  S.Tooltip,
                                  { title: '复制' + M.title + '/' + (t + 1) },
                                  o.createElement(P, {
                                    className: 'array-operate-btn',
                                    onClick: function (e) {
                                      (a.addArrayItem(h, J, t),
                                        e.preventDefault(),
                                        e.stopPropagation());
                                    },
                                  }),
                                ),
                                0 !== t &&
                                  o.createElement(
                                    S.Tooltip,
                                    { title: '向上移动' },
                                    o.createElement(w.ArrowUpOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (e) {
                                        (p(h, t, 'up'),
                                          null == e || e.preventDefault(),
                                          null == e || e.stopPropagation());
                                      },
                                    }),
                                  ),
                                t !== J.length - 1 &&
                                  o.createElement(
                                    S.Tooltip,
                                    { title: '向下移动' },
                                    o.createElement(w.ArrowDownOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (e) {
                                        (h && (null == p || p(h, t, 'down')),
                                          null == e || e.preventDefault(),
                                          null == e || e.stopPropagation());
                                      },
                                    }),
                                  ),
                              ),
                            ),
                            o.createElement(
                              'div',
                              {
                                className:
                                  'array-item-content ' +
                                  (I === t ? 'open' : 'closed'),
                              },
                              O({
                                parentType: T,
                                jsonKey: 'items',
                                indexRoute: l,
                                keyRoute: r,
                                nodeKey: n,
                                targetJsonSchema: M,
                                isArrayItem: !0,
                                arrIndex: t,
                              }),
                            ),
                          );
                        }),
                      k && o.createElement(N, t()({}, this.props)),
                    ),
                  ),
                );
              }),
              n
            );
          })(o.PureComponent);
        ((0, b.TS)({ type: 'array', component: M }), __webpack_require__(2657));
        var V = (function (e) {
          function n(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                jsonView: !1,
                isClosed: !1,
              }),
              (n.collapseChange = n.collapseChange.bind(n)),
              n
            );
          }
          a()(n, e);
          var l = n.prototype;
          return (
            (l.componentWillMount = function () {
              k.x.call(this);
            }),
            (l.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (l.collapseChange = function (e) {
              var t = this.props.keyRoute,
                n = this.state.isClosed;
              (this.setState({ isClosed: !n }),
                e.preventDefault(),
                e.stopPropagation(),
                (0, C.PM)(t, !n));
            }),
            (l.render = function () {
              var e,
                n,
                a = this,
                l = this.props,
                r = l.schemaStore,
                i = (l.jsonStore, (r || {}).pageScreen),
                s = this.props,
                c = s.indexRoute,
                u = s.jsonKey,
                p = s.nodeKey,
                y = s.keyRoute,
                h = s.targetJsonSchema,
                g = s.isArrayItem,
                f = (s.arrIndex, s.isStructuredSchema),
                v = s.renderChild,
                E = this.state,
                b = E.jsonView,
                O = E.isClosed,
                x = f,
                k = null == (e = h.showCodeViewBtn) || e,
                R = O,
                j = (0, C.Gz)(y);
              void 0 !== j && (R = j);
              var D = null != (n = h.boxTitle) ? n : '对象配置',
                T = h.style ? (0, _.K8)((0, m.toJS)(h.style)) : {},
                K = h.titleStyle ? (0, _.K8)((0, m.toJS)(h.titleStyle)) : {},
                P = h.contentStyle
                  ? (0, _.K8)((0, m.toJS)(h.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === i
                      ? 'object-schema-warp wide-screen-element-warp'
                      : 'object-schema-warp mobile-screen-element-warp',
                  id: p,
                  style: T,
                },
                !x &&
                  !g &&
                  o.createElement(
                    'div',
                    { className: 'element-title', style: K },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === i ? h.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: h.title },
                        h.title,
                        h.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(u, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === i &&
                      h.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: h.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                o.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: P,
                  },
                  !x &&
                    !g &&
                    o.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text' },
                        D,
                        ' ',
                      ),
                      R
                        ? o.createElement(w.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : o.createElement(w.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      k &&
                        o.createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              (a.setState({ jsonView: !b }),
                                e.preventDefault(),
                                e.stopPropagation());
                            },
                          },
                          o.createElement(
                            S.Tooltip,
                            { title: b ? '关闭源码模式' : '开启源码模式' },
                            o.createElement(A, {
                              className: b ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                    ),
                  o.createElement(
                    'div',
                    {
                      className:
                        'content-item ' +
                        (x || g ? '' : 'object-content') +
                        ' ' +
                        (b ? 'json-view-array' : '') +
                        ' ' +
                        (R ? 'closed' : ''),
                    },
                    !b &&
                      h.propertyOrder &&
                      h.propertyOrder.map(function (e, t) {
                        var n = c ? c + '-' + t : '' + t,
                          a = y ? y + '-' + e : '' + e,
                          o = e,
                          l = h.properties[o],
                          r = l.type;
                        return v({
                          parentType: r,
                          jsonKey: o,
                          indexRoute: n,
                          keyRoute: a,
                          nodeKey: p + '-' + r + '-' + o,
                          targetJsonSchema: l,
                        });
                      }),
                    b &&
                      o.createElement(N, t()({}, this.props, { maxLines: 10 })),
                  ),
                ),
              );
            }),
            n
          );
        })(o.PureComponent);
        ((0, b.TS)({ type: 'object', component: V }),
          __webpack_require__(8819));
        var B = (function (e) {
          function n(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).switchFilterBtn = function () {
                var e = n.state.isShowFilter;
                n.setState({ isShowFilter: !e });
              }),
              (n.state = { isShowFilter: !1, jsonView: !1, isClosed: !1 }),
              (n.switchFilterBtn = n.switchFilterBtn.bind(n)),
              n
            );
          }
          a()(n, e);
          var l = n.prototype;
          return (
            (l.componentWillMount = function () {
              k.x.call(this);
            }),
            (l.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (l.render = function () {
              var e,
                n = this,
                a = this.props,
                l = a.schemaStore,
                r = (a.jsonStore, a.renderChild),
                i = (l || {}).pageScreen,
                s = this.props,
                c = s.keyRoute,
                u = s.jsonKey,
                p = s.nodeKey,
                y = s.indexRoute,
                h = s.targetJsonSchema,
                g = this.state,
                f = g.jsonView,
                v = g.isClosed,
                E = g.isShowFilter,
                b = h.type,
                C = h.properties.type || {},
                O = h.properties.data || {},
                x = h.properties.filter || {},
                k = C.default,
                R = null == (e = h.showCodeViewBtn) || e,
                j = h.style ? (0, _.K8)((0, m.toJS)(h.style)) : {},
                D = h.titleStyle ? (0, _.K8)((0, m.toJS)(h.titleStyle)) : {},
                T = h.contentStyle
                  ? (0, _.K8)((0, m.toJS)(h.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === i
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: p,
                  style: j,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: D },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === i ? h.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: h.title },
                      h.title,
                      h.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(u, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === i &&
                    h.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: h.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: T,
                  },
                  o.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: function (e) {
                        (n.setState({ isClosed: !v }),
                          e.preventDefault(),
                          e.stopPropagation());
                      },
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text' },
                      '数据源配置',
                    ),
                    v
                      ? o.createElement(w.RightOutlined, {
                          className: 'close-operate-btn',
                        })
                      : o.createElement(w.DownOutlined, {
                          className: 'close-operate-btn',
                        }),
                    R &&
                      o.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function (e) {
                            (n.setState({ jsonView: !f }),
                              e.preventDefault(),
                              e.stopPropagation());
                          },
                        },
                        o.createElement(
                          S.Tooltip,
                          { title: f ? '关闭源码模式' : '开启源码模式' },
                          o.createElement(A, {
                            className: f ? 'info-icon active' : 'info-icon',
                          }),
                        ),
                      ),
                  ),
                  o.createElement(
                    'div',
                    {
                      className:
                        'content-item object-content ' +
                        (f ? 'json-view-array' : '') +
                        ' ' +
                        (v ? 'closed' : ''),
                    },
                    !f &&
                      'local' === k &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          'div',
                          { className: 'ace-editor-box code-area-item' },
                          o.createElement(
                            S.Tooltip,
                            {
                              title: E
                                ? '点击隐藏数据过滤器'
                                : '点击显示数据过滤器',
                              placement: 'top',
                            },
                            o.createElement(w.FilterOutlined, {
                              className: 'filter-btn',
                              onClick: this.switchFilterBtn,
                            }),
                          ),
                          r({
                            rendererType: 'json',
                            parentType: b,
                            jsonKey: 'data',
                            indexRoute: y ? y + '-1' : '1',
                            keyRoute: c ? c + '-data' : 'data',
                            nodeKey: p + '-data',
                            targetJsonSchema: O,
                            key: p + '-data',
                          }),
                        ),
                        E &&
                          r({
                            rendererType: 'codearea',
                            parentType: b,
                            jsonKey: 'filter',
                            indexRoute: y ? y + '-2' : '2',
                            keyRoute: c ? c + '-filter' : 'filter',
                            nodeKey: p + '-filter',
                            targetJsonSchema: x,
                          }),
                      ),
                    !f &&
                      'remote' === k &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          'div',
                          { className: 'url-editor-box' },
                          r({
                            rendererType: 'url',
                            parentType: b,
                            jsonKey: 'data',
                            indexRoute: y ? y + '-1' : '1',
                            keyRoute: c ? c + '-data' : 'data',
                            nodeKey: p + '-data',
                            targetJsonSchema: O,
                          }),
                          o.createElement(
                            S.Tooltip,
                            { title: '点击设置数据过滤器', placement: 'top' },
                            o.createElement(w.FilterOutlined, {
                              className: 'filter-url-btn',
                              onClick: this.switchFilterBtn,
                            }),
                          ),
                        ),
                        E &&
                          r({
                            rendererType: 'codearea',
                            parentType: b,
                            jsonKey: 'filter',
                            indexRoute: y ? y + '-2' : '2',
                            keyRoute: c ? c + '-filter' : 'filter',
                            nodeKey: p + '-filter',
                            targetJsonSchema: x,
                          }),
                      ),
                    f && o.createElement(N, t()({}, this.props)),
                  ),
                ),
              );
            }),
            n
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'datasource', component: B });
        var I = S.Select.Option,
          q = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, a = new Array(n), l = 0;
                l < n;
                l++
              )
                a[l] = arguments[l];
              return (
                ((t =
                  e.call.apply(e, [this].concat(a)) ||
                  this).handleInputChangeV1 = function (e) {
                  var n = t.props,
                    a = n.keyRoute,
                    o = (n.jsonStore || {}).updateFormValueData,
                    l = e.target.value;
                  o(a ? a + '-unit' : 'unit', Number(l));
                }),
                (t.handleInputChange = function (e) {
                  var n = e.target.value;
                  t.handleValueChange(n);
                }),
                (t.handleValueChange = function (e) {
                  var n = t.props,
                    a = n.keyRoute,
                    o = (n.jsonStore || {}).updateFormValueData,
                    l = a ? a + '-unit' : 'unit';
                  t.props.onChange ? t.props.onChange(e) : o(l, e);
                }),
                (t.handleUnitChange = function (e) {
                  var n = t.props,
                    a = n.keyRoute,
                    o = (n.jsonStore || {}).updateFormValueData,
                    l = a ? a + '-quantity' : 'quantity';
                  t.props.onChange ? t.props.onChange(e) : o(l, e);
                }),
                (t.getUnitSelect = function () {
                  var e = t.props.targetJsonSchema.properties.quantity,
                    n = [{ label: 'px', value: 'px' }];
                  return (
                    e.options && (n = e.options),
                    o.createElement(
                      S.Select,
                      {
                        className: 'autoComplete-unit-suffix',
                        style: { display: 'inline-block' },
                        defaultValue: e.default || 'px',
                        onChange: t.handleUnitChange,
                      },
                      n.map(function (e) {
                        return o.createElement(
                          I,
                          { value: e.value, key: e.value },
                          e.label,
                        );
                      }),
                    )
                  );
                }),
                t
              );
            }
            a()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                k.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  k.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e = this.props,
                  t = e.schemaStore,
                  n = e.jsonStore,
                  a = (t || {}).pageScreen,
                  l = n || {},
                  r = l.options,
                  i = l.getJSONDataByKeyRoute,
                  s = this.props,
                  c = s.keyRoute,
                  u = s.jsonKey,
                  p = s.nodeKey,
                  y = s.targetJsonSchema,
                  h = i(c),
                  g = y.readOnly || !1,
                  f = y.properties.unit,
                  v = (0, _.y8)(y.type),
                  E = y.autoComplete || !1,
                  b = r || {},
                  C = [];
                b.GlobalOptions &&
                  (0, d.isArray)(b.GlobalOptions) &&
                  (C = b.GlobalOptions);
                var O = y.options || C,
                  x = y.style ? (0, _.K8)((0, m.toJS)(y.style)) : {},
                  N = y.titleStyle ? (0, _.K8)((0, m.toJS)(y.titleStyle)) : {},
                  k = y.contentStyle
                    ? (0, _.K8)((0, m.toJS)(y.contentStyle))
                    : {};
                return o.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (v ? 'two-col-element-warp' : ''),
                    id: p,
                    style: x,
                  },
                  o.createElement(
                    'div',
                    { className: 'element-title', style: N },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === a ? y.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: y.title },
                        y.title,
                        y.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(u, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === a &&
                      y.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: y.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'content-item', style: k },
                    o.createElement(
                      'div',
                      { className: 'form-item-box' },
                      E &&
                        o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(S.AutoComplete, {
                            className: 'ant-input autoComplete-unit',
                            style: { display: 'inline-block' },
                            options: O,
                            disabled: g,
                            allowClear: !0,
                            placeholder:
                              f.placeholder ||
                              y.placeholder ||
                              '请输入' + f.title ||
                              0,
                            defaultValue: h.unit || f.default,
                            onChange: this.handleValueChange,
                          }),
                          this.getUnitSelect(),
                        ),
                      !E &&
                        o.createElement(S.InputNumber, {
                          style: { display: 'inline-block', width: '120px' },
                          addonAfter: this.getUnitSelect(),
                          disabled: g,
                          placeholder:
                            f.placeholder ||
                            y.placeholder ||
                            '请输入' + f.title ||
                            0,
                          defaultValue: h.unit || f.default,
                          onPressEnter: this.handleInputChange,
                          onBlur: this.handleInputChange,
                        }),
                    ),
                  ),
                );
              }),
              t
            );
          })(o.PureComponent);
        ((0, b.TS)({ type: 'quantity', component: q }),
          __webpack_require__(9928));
        var L = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).layoutStyleObj = {
                top: '',
                right: '',
                bottom: '',
                left: '',
                quantity: 'px',
              }),
              (n.initBoxStyle = function () {
                var e = (n.props.jsonStore || {}).getJSONDataByKeyRoute,
                  t = n.props,
                  a = t.keyRoute,
                  o = t.targetJsonSchema,
                  l = e(a),
                  r = o.properties.unit,
                  i = l.quantity,
                  s = l.unit || r.default;
                if (
                  ((n.layoutStyleObj = {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    quantity: i,
                  }),
                  s)
                ) {
                  var c = s.split(' ');
                  1 === c.length
                    ? c[0] && c[0].indexOf(i) >= 0
                      ? ((n.layoutStyleObj.top = c[0]),
                        (n.layoutStyleObj.right = c[0]),
                        (n.layoutStyleObj.bottom = c[0]),
                        (n.layoutStyleObj.left = c[0]))
                      : 'auto' === c[0]
                        ? ((n.layoutStyleObj.top = 'auto'),
                          (n.layoutStyleObj.right = 'auto'),
                          (n.layoutStyleObj.bottom = 'auto'),
                          (n.layoutStyleObj.left = 'auto'))
                        : ((n.layoutStyleObj.top = '' + c[0] + i),
                          (n.layoutStyleObj.right = '' + c[0] + i),
                          (n.layoutStyleObj.bottom = '' + c[0] + i),
                          (n.layoutStyleObj.left = '' + c[0] + i))
                    : ((n.layoutStyleObj.top = c[0]),
                      (n.layoutStyleObj.right = c[1]),
                      (n.layoutStyleObj.bottom = c[2] || c[0]),
                      (n.layoutStyleObj.left = c[3] || c[1]));
                } else
                  0 === s
                    ? ((n.layoutStyleObj.top = '' + s + i),
                      (n.layoutStyleObj.right = '' + s + i),
                      (n.layoutStyleObj.bottom = '' + s + i),
                      (n.layoutStyleObj.left = '' + s + i))
                    : ((n.layoutStyleObj.top = 'auto'),
                      (n.layoutStyleObj.right = 'auto'),
                      (n.layoutStyleObj.bottom = 'auto'),
                      (n.layoutStyleObj.left = 'auto'));
              }),
              (n.setLayoutBoxStyle = function (e, t, a) {
                t
                  ? n.linkLayoutBoxStyle(e)
                  : ((n.layoutStyleObj[a] =
                      'auto' === e
                        ? 'auto'
                        : e
                          ? '' + e + n.layoutStyleObj.quantity
                          : 0 === e || '0' === e
                            ? '0' + n.layoutStyleObj.quantity
                            : 'auto'),
                    n.updateBoxStyleState());
              }),
              (n.linkLayoutBoxStyle = function (e) {
                var t;
                ((t =
                  'auto' === e
                    ? 'auto'
                    : 0 === e
                      ? '0' + n.layoutStyleObj.quantity
                      : e
                        ? '' + e + n.layoutStyleObj.quantity
                        : 'auto'),
                  (n.layoutStyleObj.top = t),
                  (n.layoutStyleObj.right = t),
                  (n.layoutStyleObj.bottom = t),
                  (n.layoutStyleObj.left = t),
                  n.updateBoxStyleState());
              }),
              (n.getStyleValNum = function (e) {
                if ('auto' === e) return '';
                if (e === '0' + n.layoutStyleObj.quantity || '0' === e)
                  return 0;
                if (e) {
                  var t = e.indexOf(n.layoutStyleObj.quantity);
                  return t > -1 ? parseInt(e.substring(0, t)) : parseInt(e);
                }
                return 0;
              }),
              (n.updateBoxStyleState = function () {
                var e = n.props,
                  t = e.keyRoute,
                  a = (e.jsonStore || {}).updateFormValueData,
                  o = n.state.renderAction;
                (a(
                  t ? t + '-unit' : 'unit',
                  n.layoutStyleObj.top +
                    ' ' +
                    n.layoutStyleObj.right +
                    ' ' +
                    n.layoutStyleObj.bottom +
                    ' ' +
                    n.layoutStyleObj.left,
                ),
                  n.setState({ renderAction: !o }));
              }),
              (n.state = { layoutStyleLock: !1, renderAction: !1 }),
              (n.updateBoxStyleState = n.updateBoxStyleState.bind(n)),
              (n.initBoxStyle = n.initBoxStyle.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              this.initBoxStyle();
            }),
            (n.componentWillReceiveProps = function (e) {
              this.initBoxStyle();
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.nodeKey,
                a = t.jsonKey,
                l = t.targetJsonSchema,
                r = this.props,
                i = r.schemaStore,
                s = (r.jsonStore, (i || {}).pageScreen),
                c = this.state,
                u = c.renderAction,
                p = c.layoutStyleLock,
                y = l.style ? (0, _.K8)((0, m.toJS)(l.style)) : {},
                h = l.titleStyle ? (0, _.K8)((0, m.toJS)(l.titleStyle)) : {},
                g = l.contentStyle
                  ? (0, _.K8)((0, m.toJS)(l.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    ('wideScreen' === s
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp') +
                    ' ' +
                    (u ? 'render-mark' : ''),
                  id: n,
                  style: y,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: h },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === s ? l.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: l.title },
                      l.title,
                      l.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(a, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === s &&
                    l.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: l.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  {
                    className: 'content-item layout-box-style-container',
                    style: g,
                  },
                  o.createElement(
                    'div',
                    { className: 'center-box' },
                    o.createElement(
                      S.Tooltip,
                      {
                        placement: 'top',
                        title: p ? '点击解锁联动' : '点击联动',
                      },
                      o.createElement('div', {
                        className: p ? 'lock-icon' : 'lock-icon unlock',
                        onClick: function (t) {
                          e.setState({ layoutStyleLock: !p });
                        },
                      }),
                    ),
                  ),
                  o.createElement(S.InputNumber, {
                    name: 'layoutPaddingTop',
                    className:
                      'layout-input-number layout-item layout-item-top\n            ' +
                      ('%' === this.layoutStyleObj.quantity
                        ? 'percent'
                        : this.layoutStyleObj.quantity) +
                      '-quantity-box',
                    size: 'small',
                    value: this.getStyleValNum(this.layoutStyleObj.top),
                    onPressEnter: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'top');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'top');
                    },
                  }),
                  o.createElement(S.InputNumber, {
                    name: 'layoutPaddingRight',
                    className:
                      'layout-input-number layout-item layout-item-right\n            ' +
                      ('%' === this.layoutStyleObj.quantity
                        ? 'percent'
                        : this.layoutStyleObj.quantity) +
                      '-quantity-box',
                    size: 'small',
                    value: this.getStyleValNum(this.layoutStyleObj.right),
                    onPressEnter: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'right');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'right');
                    },
                  }),
                  o.createElement(S.InputNumber, {
                    name: 'layoutPaddingBottom',
                    className:
                      'layout-input-number layout-item layout-item-bottom\n            ' +
                      ('%' === this.layoutStyleObj.quantity
                        ? 'percent'
                        : this.layoutStyleObj.quantity) +
                      '-quantity-box',
                    size: 'small',
                    value: this.getStyleValNum(this.layoutStyleObj.bottom),
                    onPressEnter: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'bottom');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'bottom');
                    },
                  }),
                  o.createElement(S.InputNumber, {
                    name: 'layoutPaddingLeft',
                    className:
                      'layout-input-number layout-item layout-item-left\n            ' +
                      ('%' === this.layoutStyleObj.quantity
                        ? 'percent'
                        : this.layoutStyleObj.quantity) +
                      '-quantity-box',
                    size: 'small',
                    value: this.getStyleValNum(this.layoutStyleObj.left),
                    onPressEnter: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'left');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, p, 'left');
                    },
                  }),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        ((0, b.TS)({ type: 'box-style', component: L }),
          __webpack_require__(9346));
        var W = S.Select.Option,
          F = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).boxStyle = {
                  margin: { top: '', right: '', bottom: '', left: '' },
                  padding: { top: '', right: '', bottom: '', left: '' },
                  quantity: 'px',
                }),
                (n.initBoxStyle = function () {
                  var e = (n.props.jsonStore || {}).getJSONDataByKeyRoute,
                    t = n.props,
                    a = t.keyRoute,
                    o = t.targetJsonSchema,
                    l = e(a),
                    r = o.properties.margin,
                    i = o.properties.padding,
                    s = o.properties.quantity,
                    c = l.quantity || s.default,
                    u = l.margin || r.default,
                    p = l.padding || i.default;
                  ((u = (0, d.isNumber)(u) ? u.toString() : u || 'auto'),
                    (p = (0, d.isNumber)(p) ? p.toString() : p || 'auto'),
                    (n.boxStyle.quantity = c));
                  var m = u.split(' ');
                  ((n.boxStyle.margin.top = n.getStyleValText(m[0])),
                    (n.boxStyle.margin.right = n.getStyleValText(m[1], p)),
                    (n.boxStyle.margin.bottom = n.getStyleValText(
                      m[2] || m[0],
                    )),
                    (n.boxStyle.margin.left = n.getStyleValText(
                      m[3] || m[1],
                      p,
                    )));
                  var y = p.split(' ');
                  ((n.boxStyle.padding.top = n.getStyleValText(y[0])),
                    (n.boxStyle.padding.right = n.getStyleValText(y[1], p)),
                    (n.boxStyle.padding.bottom = n.getStyleValText(
                      y[2] || y[0],
                    )),
                    (n.boxStyle.padding.left = n.getStyleValText(
                      y[3] || y[1],
                      p,
                    )));
                }),
                (n.getStyleValText = function (e, t) {
                  var n = 'auto';
                  return (
                    'auto' === e ||
                    0 === e ||
                    '' === e ||
                    '0' === e ||
                    /^\$/.test(e)
                      ? (n = e)
                      : e
                        ? ((n = parseInt(e)),
                          (n = (0, d.isNumber)(n) ? n : 'auto'))
                        : void 0 !== t && (n = t),
                    n
                  );
                }),
                (n.getStyleVal = function (e) {
                  var t = '';
                  if ('auto' === e || 0 === e) t = e;
                  else {
                    if (/^\$/.test(e)) return e;
                    '' === e
                      ? (t = 'auto')
                      : e &&
                        ((t = parseInt(e)),
                        (t = (0, d.isNumber)(t) ? t : 'auto'));
                  }
                  return 'auto' === t || 0 === t
                    ? t
                    : '' + t + n.boxStyle.quantity;
                }),
                (n.setLayoutBoxStyle = function (e, t, a, o) {
                  if (t) n.linkLayoutBoxStyle(e, a);
                  else {
                    var l = n.getStyleValText(e);
                    ((n.boxStyle[a][o] = void 0 !== l ? l : ''),
                      n.updateBoxStyleState());
                  }
                }),
                (n.linkLayoutBoxStyle = function (e, t) {
                  var a = n.getStyleValText(e);
                  (void 0 !== a
                    ? ((n.boxStyle[t].top = a),
                      (n.boxStyle[t].right = a),
                      (n.boxStyle[t].bottom = a),
                      (n.boxStyle[t].left = a))
                    : ((n.boxStyle[t].top = ''),
                      (n.boxStyle[t].right = ''),
                      (n.boxStyle[t].bottom = ''),
                      (n.boxStyle[t].left = '')),
                    n.updateBoxStyleState());
                }),
                (n.updateBoxStyleState = function () {
                  var e = n.props,
                    t = e.keyRoute,
                    a = (e.jsonStore || {}).updateFormValueData,
                    o = n.state.renderAction;
                  (a(t, {
                    margin: n.getMarginValue(),
                    padding: n.getPaddingValue(),
                    quantity: n.boxStyle.quantity,
                  }),
                    n.setState({ renderAction: !o }));
                }),
                (n.getQuantity = function (e) {
                  var t = n.props.targetJsonSchema.properties.quantity;
                  return e.quantity || t.default;
                }),
                (n.getSelectAfter = function (e) {
                  return o.createElement('span', null, n.getQuantity(e));
                }),
                (n.quantityChange = function (e) {
                  var t = n.props,
                    a = t.keyRoute;
                  (0, (t.jsonStore || {}).updateFormValueData)(a, {
                    margin: n.getMarginValue(),
                    padding: n.getPaddingValue(),
                    quantity: e,
                  });
                }),
                (n.setType = function (e) {
                  n.setState({ type: e });
                }),
                (n.getMarginValue = function () {
                  return (
                    n.getStyleVal(n.boxStyle.margin.top) +
                    ' ' +
                    n.getStyleVal(n.boxStyle.margin.right) +
                    ' ' +
                    n.getStyleVal(n.boxStyle.margin.bottom) +
                    ' ' +
                    n.getStyleVal(n.boxStyle.margin.left)
                  );
                }),
                (n.getPaddingValue = function () {
                  return (
                    n.getStyleVal(n.boxStyle.padding.top) +
                    ' ' +
                    n.getStyleVal(n.boxStyle.padding.right) +
                    ' ' +
                    n.getStyleVal(n.boxStyle.padding.bottom) +
                    ' ' +
                    n.getStyleVal(n.boxStyle.padding.left)
                  );
                }),
                (n.state = { type: 'all', renderAction: !1 }),
                (n.updateBoxStyleState = n.updateBoxStyleState.bind(n)),
                (n.initBoxStyle = n.initBoxStyle.bind(n)),
                (n.getStyleValText = n.getStyleValText.bind(n)),
                (n.getSelectAfter = n.getSelectAfter.bind(n)),
                (n.setLayoutBoxStyle = n.setLayoutBoxStyle.bind(n)),
                (n.linkLayoutBoxStyle = n.linkLayoutBoxStyle.bind(n)),
                (n.getSelectAfter = n.getSelectAfter.bind(n)),
                (n.quantityChange = n.quantityChange.bind(n)),
                n
              );
            }
            a()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                this.initBoxStyle();
              }),
              (n.componentWillReceiveProps = function (e) {
                this.initBoxStyle();
              }),
              (n.render = function () {
                var e = this,
                  t = this.props,
                  n = t.nodeKey,
                  a = t.jsonKey,
                  l = t.targetJsonSchema,
                  r = t.keyRoute,
                  i = this.props,
                  s = i.schemaStore,
                  c = i.jsonStore,
                  u = (s || {}).pageScreen,
                  p = c || {},
                  y = p.options,
                  h = p.getJSONDataByKeyRoute,
                  g = this.state,
                  f = g.renderAction,
                  v = g.type,
                  E = h(r) || {},
                  b = l.autoComplete || !1,
                  C = this.getQuantity(E),
                  O = y || {},
                  x = [];
                O.GlobalOptions &&
                  (0, d.isArray)(O.GlobalOptions) &&
                  (x = O.GlobalOptions);
                var N = l.options || x,
                  k = l.style ? (0, _.K8)((0, m.toJS)(l.style)) : {},
                  R = l.titleStyle ? (0, _.K8)((0, m.toJS)(l.titleStyle)) : {},
                  j = l.contentStyle
                    ? (0, _.K8)((0, m.toJS)(l.contentStyle))
                    : {};
                return o.createElement(
                  'div',
                  {
                    className:
                      ('wideScreen' === u
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp') +
                      ' ' +
                      (f ? 'render-mark' : ''),
                    id: n,
                    style: k,
                  },
                  o.createElement(
                    'div',
                    { className: 'element-title', style: R },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === u ? l.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: l.title },
                        l.title,
                        l.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === u &&
                      l.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: l.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  o.createElement(
                    'div',
                    {
                      className: 'content-item Style-PaddingAndMargin',
                      style: j,
                    },
                    o.createElement(
                      'div',
                      { className: 'Style-PaddingAndMargin-inner' },
                      o.createElement(
                        'div',
                        {
                          className:
                            'Style-PaddingAndMargin-label Style-PaddingAndMargin-label--custom',
                        },
                        o.createElement('div', {
                          className:
                            '\n                  Style-PaddingAndMargin-label-all\n                  ' +
                            ('all' === v
                              ? 'Style-PaddingAndMargin-label-all--active'
                              : ''),
                          onClick: function (t) {
                            return e.setType('all');
                          },
                        }),
                        o.createElement(
                          'div',
                          {
                            className:
                              '\n                Style-PaddingAndMargin-label-custom\n                ' +
                              ('custom' === v
                                ? 'Style-PaddingAndMargin-label-custom--active'
                                : ''),
                            onClick: function (t) {
                              return e.setType('custom');
                            },
                          },
                          o.createElement('div', null),
                          o.createElement('div', null),
                        ),
                      ),
                      'all' === v &&
                        o.createElement(
                          'div',
                          { style: { display: 'flex', marginTop: '5px' } },
                          o.createElement(
                            'div',
                            { className: 'Style-PaddingAndMargin-input' },
                            b &&
                              o.createElement(
                                'div',
                                { style: { display: 'flex' } },
                                o.createElement(S.AutoComplete, {
                                  className:
                                    'ant-input layout-item-margin autoComplete-unit',
                                  style: { display: 'inline-block' },
                                  options: N,
                                  allowClear: !0,
                                  defaultValue: this.boxStyle.margin.top,
                                  onChange: function (t) {
                                    e.linkLayoutBoxStyle(t, 'margin');
                                  },
                                }),
                                o.createElement(
                                  S.Select,
                                  {
                                    className: 'autoComplete-unit-suffix',
                                    style: { display: 'inline-block' },
                                    defaultValue: C || 'px',
                                  },
                                  o.createElement(W, { value: C }, C),
                                ),
                              ),
                            !b &&
                              o.createElement(S.Input, {
                                name: 'layoutMargin',
                                addonAfter: this.getSelectAfter(E),
                                className: 'layout-item-margin',
                                size: 'small',
                                defaultValue: this.boxStyle.margin.top,
                                onChange: function (t) {
                                  var n = t.target.value;
                                  e.linkLayoutBoxStyle(n, 'margin');
                                },
                              }),
                            o.createElement(
                              'div',
                              {
                                className: 'Style-PaddingAndMargin-input-label',
                              },
                              '外边距',
                            ),
                          ),
                          o.createElement(
                            'div',
                            { className: 'Style-PaddingAndMargin-input' },
                            b &&
                              o.createElement(
                                'div',
                                { style: { display: 'flex' } },
                                o.createElement(S.AutoComplete, {
                                  className:
                                    'ant-input layout-item-padding autoComplete-unit',
                                  style: { display: 'inline-block' },
                                  options: N,
                                  allowClear: !0,
                                  defaultValue: this.boxStyle.padding.top,
                                  onChange: function (t) {
                                    e.linkLayoutBoxStyle(t, 'padding');
                                  },
                                }),
                                o.createElement(
                                  S.Select,
                                  {
                                    className: 'autoComplete-unit-suffix',
                                    style: { display: 'inline-block' },
                                    defaultValue: C || 'px',
                                  },
                                  o.createElement(W, { value: C }, C),
                                ),
                              ),
                            !b &&
                              o.createElement(S.Input, {
                                name: 'layoutPadding',
                                addonAfter: this.getSelectAfter(E),
                                className: 'layout-item-padding',
                                size: 'small',
                                defaultValue: this.boxStyle.padding.top,
                                onChange: function (t) {
                                  var n = t.target.value;
                                  e.linkLayoutBoxStyle(n, 'padding');
                                },
                              }),
                            o.createElement(
                              'div',
                              {
                                className: 'Style-PaddingAndMargin-input-label',
                              },
                              '内边距',
                            ),
                          ),
                        ),
                    ),
                    'all' !== v &&
                      o.createElement(
                        'div',
                        {
                          className:
                            'Style-PaddingAndMargin-custom Style-PaddingAndMargin-custom--padding Style-PaddingAndMargin-custom--margin',
                        },
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-padding autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.padding.top,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'padding',
                                          'top',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutPaddingTop',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-padding',
                                    size: 'small',
                                    defaultValue: e.boxStyle.padding.top,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'padding',
                                        'top',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-paddingTop',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.padding.top) ||
                                '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-padding autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.padding.right,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'padding',
                                          'right',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutPaddingTop',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-padding',
                                    size: 'small',
                                    defaultValue: e.boxStyle.padding.right,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'padding',
                                        'right',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-paddingRight',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.padding.right) ||
                                '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-padding autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.padding.bottom,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'padding',
                                          'bottom',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutPaddingBottom',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-padding',
                                    size: 'small',
                                    defaultValue: e.boxStyle.padding.bottom,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'padding',
                                        'bottom',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-paddingBottom',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.padding.bottom) ||
                                '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-padding autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.padding.left,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'padding',
                                          'left',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutPaddingLeft',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-padding',
                                    size: 'small',
                                    defaultValue: e.boxStyle.padding.left,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'padding',
                                        'left',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-paddingLeft',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.padding.left) ||
                                '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-margin autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.margin.top,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'margin',
                                          'top',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutMarginTop',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-margin',
                                    size: 'small',
                                    defaultValue: e.boxStyle.margin.top,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'margin',
                                        'top',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-marginTop',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.margin.top) || '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-margin autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.margin.right,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'margin',
                                          'right',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutMarginRight',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-margin',
                                    size: 'small',
                                    defaultValue: e.boxStyle.margin.right,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'margin',
                                        'right',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-marginRight',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.margin.right) ||
                                '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-margin autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.margin.bottom,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'margin',
                                          'bottom',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutMarginBottom',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-margin',
                                    size: 'small',
                                    defaultValue: e.boxStyle.margin.bottom,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'margin',
                                        'bottom',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-marginBottom',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.margin.bottom) ||
                                '-',
                            ),
                          ),
                        ),
                        o.createElement(
                          S.Popover,
                          {
                            content: function () {
                              return o.createElement(
                                o.Fragment,
                                null,
                                b &&
                                  o.createElement(
                                    'div',
                                    {
                                      style: {
                                        display: 'flex',
                                        minWidth: '160px',
                                      },
                                    },
                                    o.createElement(S.AutoComplete, {
                                      className:
                                        'ant-input layout-item-margin autoComplete-unit',
                                      style: { display: 'inline-block' },
                                      options: N,
                                      allowClear: !0,
                                      defaultValue: e.boxStyle.margin.left,
                                      onChange: function (t) {
                                        e.setLayoutBoxStyle(
                                          t,
                                          !1,
                                          'margin',
                                          'left',
                                        );
                                      },
                                    }),
                                    o.createElement(
                                      S.Select,
                                      {
                                        className: 'autoComplete-unit-suffix',
                                        style: { display: 'inline-block' },
                                        defaultValue: C || 'px',
                                      },
                                      o.createElement(W, { value: C }, C),
                                    ),
                                  ),
                                !b &&
                                  o.createElement(S.Input, {
                                    name: 'layoutMarginLeft',
                                    addonAfter: e.getSelectAfter(E),
                                    className: 'layout-item-margin',
                                    size: 'small',
                                    defaultValue: e.boxStyle.margin.left,
                                    onChange: function (t) {
                                      var n = t.target.value;
                                      e.setLayoutBoxStyle(
                                        n,
                                        !1,
                                        'margin',
                                        'left',
                                      );
                                    },
                                  }),
                              );
                            },
                            title: '',
                          },
                          o.createElement(
                            'div',
                            {
                              className:
                                'Style-PaddingAndMargin-custom-marginLeft',
                            },
                            o.createElement(
                              'div',
                              { className: 'Style-PaddingAndMargin-value' },
                              this.getStyleVal(this.boxStyle.margin.left) ||
                                '-',
                            ),
                          ),
                        ),
                      ),
                  ),
                );
              }),
              t
            );
          })(o.PureComponent);
        (0, b.TS)({ type: 'padding-margin', component: F });
        var U = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute;
                (0, (t.jsonStore || {}).updateFormValueData)(a, e.target.value);
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                l = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                s = r.jsonKey,
                c = r.keyRoute,
                u = r.targetJsonSchema,
                p = (u.readOnly, l(c)),
                y = u.options,
                h = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                g = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                f = u.contentStyle
                  ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: i,
                  style: h,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: g },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === a ? u.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    u.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: u.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: f },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(
                      S.Radio.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: this.handleValueChange,
                        defaultValue: null != p ? p : u.default,
                        disabled: u.readOnly,
                      },
                      y &&
                        y.length > 0 &&
                        y.map(function (e, t) {
                          var n = 'radio-' + t + '-' + (e.label || e.name);
                          return o.createElement(
                            S.Radio,
                            { value: e.value, key: n },
                            e.label,
                          );
                        }),
                    ),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'radio', component: U });
        var z = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute;
                (0, (t.jsonStore || {}).updateFormValueData)(a, e);
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                l = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                s = r.jsonKey,
                c = r.keyRoute,
                u = r.targetJsonSchema,
                p = (u.readOnly, l(c)),
                y = u.options,
                h = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                g = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                f = u.contentStyle
                  ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: i,
                  style: h,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: g },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === a ? u.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    u.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: u.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: f },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(
                      S.Checkbox.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: this.handleValueChange,
                        defaultValue: null != p ? p : u.default,
                        disabled: u.readOnly,
                      },
                      y &&
                        y.length > 0 &&
                        y.map(function (e, t) {
                          var n = e.label || e.name,
                            a = 'select-' + t + '-' + n;
                          return o.createElement(
                            S.Checkbox,
                            { value: e.value, key: a },
                            n,
                          );
                        }),
                    ),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'checkboxes', component: z });
        var G = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleInputChange = function (e) {
                var t = e.target.value;
                n.handleValueChange(t);
              }),
              (n.handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData;
                n.props.onChange ? n.props.onChange(e) : o(a, e);
              }),
              (n.handleInputChange = n.handleInputChange.bind(n)),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                l = n || {},
                r = l.options,
                i = l.getJSONDataByKeyRoute,
                s = this.props,
                c = s.nodeKey,
                u = s.jsonKey,
                p = s.keyRoute,
                y = s.targetJsonSchema,
                h = p && i(p),
                g = y.readOnly || !1,
                f = y.isRequired || !1,
                v = y.autoComplete || !1,
                E = r || {},
                b = [];
              E.GlobalOptions &&
                (0, d.isArray)(E.GlobalOptions) &&
                (b = E.GlobalOptions);
              var C = y.options || b,
                O = y.style ? (0, _.K8)((0, m.toJS)(y.style)) : {},
                x = y.titleStyle ? (0, _.K8)((0, m.toJS)(y.titleStyle)) : {},
                N = y.contentStyle
                  ? (0, _.K8)((0, m.toJS)(y.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: c,
                  style: O,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: x },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === a ? y.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: y.title },
                      y.title,
                      y.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(u, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    y.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: y.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: N },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    v &&
                      o.createElement(S.AutoComplete, {
                        className: 'ant-input',
                        style: { display: 'inline-block' },
                        options: C,
                        disabled: g,
                        required: f,
                        allowClear: !0,
                        placeholder: y.placeholder || '请输入' + y.title,
                        defaultValue: null != h ? h : y.default,
                        onChange: this.handleValueChange,
                      }),
                    !v &&
                      o.createElement(S.Input, {
                        style: { display: 'inline-flex' },
                        disabled: g,
                        required: f,
                        allowClear: !0,
                        placeholder: y.placeholder || '请输入' + y.title,
                        defaultValue: null != h ? h : y.default,
                        onPressEnter: this.handleInputChange,
                        onBlur: this.handleInputChange,
                      }),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'input', component: G });
        var H = G,
          $ = S.Input.TextArea,
          Z = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = n.props,
                    a = t.keyRoute;
                  (0, (t.jsonStore || {}).updateFormValueData)(
                    a,
                    e.target.value,
                  );
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            a()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                k.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  k.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e = this.props,
                  t = e.schemaStore,
                  n = e.jsonStore,
                  a = (t || {}).pageScreen,
                  l = (n || {}).getJSONDataByKeyRoute,
                  r = this.props,
                  i = r.keyRoute,
                  s = r.jsonKey,
                  c = r.nodeKey,
                  u = r.targetJsonSchema,
                  p = l(i),
                  y = u.readOnly || !1,
                  h = u.isRequired || !1,
                  g = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                  f = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                  v = u.contentStyle
                    ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                    : {};
                return o.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp container-warp'
                        : 'mobile-screen-element-warp',
                    id: c,
                    style: g,
                  },
                  o.createElement(
                    'div',
                    { className: 'element-title', style: f },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === a ? u.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: u.title },
                        u.title,
                        u.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(s, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === a &&
                      u.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: u.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'content-item', style: v },
                    o.createElement(
                      'div',
                      { className: 'form-item-box' },
                      o.createElement($, {
                        style: { display: 'inline-block' },
                        rows: 4,
                        disabled: y,
                        required: h,
                        placeholder: u.placeholder || '请输入' + u.title,
                        defaultValue: null != p ? p : u.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(o.PureComponent);
        (0, b.TS)({ type: 'textarea', component: Z });
        var Q = require('braft-editor'),
          Y = __webpack_require__.n(Q),
          X = require('braft-extensions/dist/color-picker'),
          ee = __webpack_require__.n(X),
          te =
            (require('braft-extensions/dist/color-picker.css'),
            require('braft-extensions/dist/table')),
          ne = __webpack_require__.n(te);
        (require('braft-extensions/dist/table.css'),
          require('braft-editor/dist/index.css'),
          __webpack_require__(632),
          Y().use([ee()({ theme: 'light' })]),
          Y().use(
            ne()({
              defaultColumns: 3,
              defaultRows: 3,
              withDropdown: !1,
              columnResizable: !1,
              exportAttrString: 'border="1" style="border-collapse: collapse"',
            }),
          ));
        var ae = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleEditorChange = function (e) {
                var t = n.props,
                  a = t.keyRoute;
                (0, (t.jsonStore || {}).updateFormValueData)(a, e.toHTML());
              }),
              (n.state = {
                isClosed: !0,
                allControls: [
                  'undo',
                  'redo',
                  'separator',
                  'headings',
                  'font-size',
                  'line-height',
                  'letter-spacing',
                  'separator',
                  'text-color',
                  'bold',
                  'italic',
                  'underline',
                  'strike-through',
                  'separator',
                  'superscript',
                  'subscript',
                  'remove-styles',
                  'separator',
                  'text-indent',
                  'text-align',
                  'separator',
                  'list-ul',
                  'list-ol',
                  'blockquote',
                  'code',
                  'separator',
                  'link',
                  'separator',
                  'media',
                  'table',
                  'hr',
                  'separator',
                  'fullscreen',
                ],
                baseControls: [
                  'font-size',
                  'text-color',
                  'bold',
                  'italic',
                  'fullscreen',
                ],
              }),
              (n.handleEditorChange = n.handleEditorChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              var e = (this.props.schemaStore || {}).pageScreen;
              (k.x.call(this),
                e && 'wideScreen' === e && this.setState({ isClosed: !1 }));
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute
                ? k.x.call(this, e.keyRoute)
                : e.schemaStore.pageScreen !==
                    this.props.schemaStore.pageScreen &&
                  e.schemaStore.pageScreen &&
                  'wideScreen' === e.schemaStore.pageScreen &&
                  this.setState({ isClosed: !1 });
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                l = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                s = i.keyRoute,
                c = i.jsonKey,
                u = i.nodeKey,
                p = i.targetJsonSchema,
                y = this.state.isClosed,
                h = r(s),
                g = Y().createEditorState(h),
                f = p.readOnly || !1,
                v = p.style ? (0, _.K8)((0, m.toJS)(p.style)) : {},
                E = p.titleStyle ? (0, _.K8)((0, m.toJS)(p.titleStyle)) : {},
                b = p.contentStyle
                  ? (0, _.K8)((0, m.toJS)(p.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === l
                      ? 'text-editor-box wide-screen-element-warp'
                      : 'text-editor-box mobile-screen-element-warp',
                  id: u,
                  style: v,
                },
                o.createElement(
                  'div',
                  {
                    className: 'element-title',
                    onClick: function (t) {
                      (e.setState({ isClosed: !y }),
                        t.preventDefault(),
                        t.stopPropagation());
                    },
                    style: E,
                  },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === l ? p.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: p.title },
                      p.title,
                      p.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(c, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === l &&
                    p.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: p.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                  y
                    ? o.createElement(w.RightOutlined, {
                        className: 'close-operate-btn',
                      })
                    : o.createElement(w.DownOutlined, {
                        className: 'close-operate-btn',
                      }),
                ),
                o.createElement(
                  'div',
                  {
                    className: 'content-item ' + (y ? 'closed' : ''),
                    style: b,
                  },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(Y(), {
                      key: u + '-textEditor',
                      controls:
                        'wideScreen' === l
                          ? this.state.allControls
                          : this.state.baseControls,
                      media: {
                        accepts: {
                          image:
                            'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                          video: !1,
                          audio: !1,
                        },
                        pasteImage: !0,
                      },
                      defaultValue: g,
                      readOnly: f,
                      placeholder: p.placeholder || '请输入' + p.title,
                      lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
                      onChange: this.handleEditorChange,
                      onSave: this.handleEditorChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        ((0, b.TS)({ type: 'text-editor', component: ae }),
          __webpack_require__(9741));
        var oe = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = t.jsonStore,
                  l = t.targetJsonSchema,
                  r = (o || {}).updateFormValueData;
                e && e < l.minimum
                  ? S.message.warning(
                      '小于设定的最小数值' + l.minimum + '，请重新输入。',
                    )
                  : e && e > l.maximum
                    ? S.message.warning(
                        '超过设定的最大数值' + l.maximum + '，请重新输入。',
                      )
                    : r(a, e);
              }),
              (n.numberChange = function (e, t) {
                var a = n.props.keyRoute,
                  o = 0;
                (t && (o = t),
                  'plus' === e ? (o += 1) : 'minus' === e && (o -= 1),
                  n.handleValueChange(o),
                  n.setState({ renderTime: new Date().getTime() }));
                var l = document.getElementById('inputNumber-' + a);
                l && (l.value = o);
              }),
              (n.state = { renderTime: new Date().getTime() }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                l = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                s = i.keyRoute,
                c = i.jsonKey,
                u = (i.nodeKey, i.targetJsonSchema),
                p = this.state.renderTime,
                y = r(s),
                h = u.readOnly || !1,
                g = u.isRequired || !1,
                f = (0, _.y8)(u.type),
                v = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                E = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                b = u.contentStyle
                  ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === l
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (f ? 'two-col-element-warp' : ''),
                  style: v,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: E },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === l ? u.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(c, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === l &&
                    u.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: u.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: b },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(
                      'div',
                      { className: 'input-number-wrap' },
                      o.createElement(
                        'div',
                        {
                          className: 'number-btn minus',
                          title: '点击减1',
                          onClick: function (t) {
                            e.numberChange(
                              'minus',
                              (0, _.GT)(y) ? y : u.default,
                            );
                          },
                        },
                        '-',
                      ),
                      o.createElement(S.InputNumber, {
                        key: 'inputNumber-' + p,
                        id: 'inputNumber-' + s,
                        className: 'number-cont',
                        style: { display: 'inline-block' },
                        disabled: h,
                        required: g,
                        placeholder: u.placeholder || '请输入' + u.title,
                        min: u.minimum || 0,
                        max: u.maximum || 1e6,
                        defaultValue: (0, _.GT)(y) ? y : u.default,
                        onChange: this.handleValueChange,
                      }),
                      o.createElement(
                        'div',
                        {
                          className: 'number-btn plus',
                          title: '点击加1',
                          onClick: function (t) {
                            e.numberChange(
                              'plus',
                              (0, _.GT)(y) ? y : u.default,
                            );
                          },
                        },
                        '+',
                      ),
                    ),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'number', component: oe });
        var le = require('rc-switch'),
          re = __webpack_require__.n(le),
          ie =
            (require('rc-switch/assets/index.css'),
            __webpack_require__(3512),
            (function (e) {
              function t(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    var t = n.props,
                      a = t.keyRoute;
                    (0, (t.jsonStore || {}).updateFormValueData)(a, e);
                  }),
                  (n.handleValueChange = n.handleValueChange.bind(n)),
                  n
                );
              }
              a()(t, e);
              var n = t.prototype;
              return (
                (n.componentWillMount = function () {
                  k.x.call(this);
                }),
                (n.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    k.x.call(this, e.keyRoute);
                }),
                (n.render = function () {
                  var e = this.props,
                    t = e.schemaStore,
                    n = e.jsonStore,
                    a = (t || {}).pageScreen,
                    l = (n || {}).getJSONDataByKeyRoute,
                    r = this.props,
                    i = r.keyRoute,
                    s = r.jsonKey,
                    c = r.nodeKey,
                    u = r.targetJsonSchema,
                    p = l(i),
                    y = (0, _.y8)(u.type),
                    h =
                      (u.readOnly,
                      u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {}),
                    g = u.titleStyle
                      ? (0, _.K8)((0, m.toJS)(u.titleStyle))
                      : {},
                    f = u.contentStyle
                      ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                      : {};
                  return o.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === a
                          ? 'boolean-form-item wide-screen-element-warp'
                          : 'boolean-form-item mobile-screen-element-warp ' +
                            (y ? 'two-col-element-warp' : ''),
                      id: c,
                      style: h,
                    },
                    o.createElement(
                      'div',
                      { className: 'element-title', style: g },
                      o.createElement(
                        S.Tooltip,
                        {
                          title: 'wideScreen' === a ? u.description : '',
                          placement: 'top',
                        },
                        o.createElement(
                          'span',
                          { className: 'title-text', title: u.title },
                          u.title,
                          u.showKey &&
                            o.createElement(
                              'span',
                              null,
                              '（',
                              (0, d.truncate)(s, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                      'mobileScreen' === a &&
                        u.description &&
                        o.createElement(
                          S.Tooltip,
                          { title: u.description, placement: 'top' },
                          o.createElement(w.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    o.createElement(
                      'div',
                      { className: 'content-item', style: f },
                      o.createElement(
                        'div',
                        { className: 'form-item-box' },
                        o.createElement(re(), {
                          style: { display: 'inline-block' },
                          defaultChecked: void 0 !== p ? p : u.default,
                          checkedChildren: 'true',
                          unCheckedChildren: 'false',
                          onChange: this.handleValueChange,
                          disabled: u.readOnly,
                        }),
                      ),
                    ),
                  );
                }),
                t
              );
            })(o.PureComponent));
        ((0, b.TS)({ type: 'boolean', component: ie }),
          __webpack_require__(7546));
        var se = S.Select.Option,
          ce = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).optionValue = {}),
                (n.handleValueChange = function (e, t) {
                  var a = n.props,
                    o = a.keyRoute,
                    l = a.jsonStore,
                    r = a.targetJsonSchema,
                    i = (l || {}).updateFormValueData,
                    s = e,
                    c = r.withLabel;
                  if ((0, d.isArray)(e)) {
                    var u = [];
                    (e.forEach(function (e, a) {
                      var o,
                        l = e;
                      (0, d.isObject)(l) &&
                        (l = JSON.stringify(e)).replaceAll(' ', '');
                      var r = null != (o = n.optionValue[l]) ? o : e;
                      (c &&
                        t &&
                        (0, d.isArray)(t) &&
                        (r = { value: r, label: t[a].children || t[a].label }),
                        u.push(r));
                    }),
                      (s = u));
                  } else {
                    var p;
                    ((s = null != (p = n.optionValue[e]) ? p : e),
                      c &&
                        t &&
                        (s = { value: s, label: t.children || t.label }));
                  }
                  i(o, s);
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            a()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                k.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  k.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e,
                  t,
                  n,
                  a = this.props,
                  l = a.schemaStore,
                  r = a.jsonStore,
                  i = (l || {}).pageScreen,
                  s = (r || {}).getJSONDataByKeyRoute,
                  c = this.props,
                  u = c.nodeKey,
                  p = c.jsonKey,
                  y = c.keyRoute,
                  h = c.targetJsonSchema,
                  g = h.readOnly || !1,
                  f = s(y),
                  v = h.options,
                  E = (0, _.y8)(h.type),
                  b = (0, _.or)((0, m.toJS)(v));
                if (
                  ((v = b.options),
                  (this.optionValue = b.optionValue),
                  (0, d.isArray)(f))
                ) {
                  var C = [];
                  (f.forEach(function (e) {
                    var t = e;
                    ((0, d.isObject)(t) && (t = JSON.stringify(e)), C.push(t));
                  }),
                    (f = C));
                }
                var O = null != f ? f : h.default;
                (0, d.isObject)(O) && (O = JSON.stringify(O));
                var x = h.style ? (0, _.K8)((0, m.toJS)(h.style)) : {},
                  N = h.titleStyle ? (0, _.K8)((0, m.toJS)(h.titleStyle)) : {},
                  k = h.contentStyle
                    ? (0, _.K8)((0, m.toJS)(h.contentStyle))
                    : {};
                return o.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === i
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (E ? 'two-col-element-warp' : ''),
                    id: u,
                    style: x,
                  },
                  o.createElement(
                    'div',
                    { className: 'element-title', style: N },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === i ? h.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: h.title },
                        h.title,
                        h.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(p, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === i &&
                      h.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: h.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'content-item', style: k },
                    o.createElement(
                      'div',
                      { className: 'form-item-box select-box' },
                      o.createElement(
                        S.Select,
                        {
                          showSearch: null == (e = h.showSearch) || e,
                          mode: h.multiple ? 'multiple' : void 0,
                          defaultActiveFirstOption:
                            null != (t = h.defaultActiveFirstOption) && t,
                          style: { display: 'inline-block', minWidth: '120px' },
                          onChange: this.handleValueChange,
                          defaultValue: O,
                          disabled: g,
                          allowClear: null == (n = h.allowClear) || n,
                        },
                        v &&
                          v.length > 0 &&
                          v.map(function (e, t) {
                            var n = e.label || e.name,
                              a = u + '-select-' + n;
                            return o.createElement(
                              se,
                              { value: e.value, key: a },
                              n,
                            );
                          }),
                      ),
                    ),
                  ),
                );
              }),
              t
            );
          })(o.PureComponent);
        ((0, b.TS)({ type: 'select', component: ce }),
          __webpack_require__(3794));
        var ue = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute;
                (0, (t.jsonStore || {}).updateFormValueData)(a, e);
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e,
                t,
                n,
                a = this.props,
                l = a.schemaStore,
                r = a.jsonStore,
                i = (l || {}).pageScreen,
                s = (r || {}).getJSONDataByKeyRoute,
                c = this.props,
                u = c.nodeKey,
                p = c.jsonKey,
                y = c.keyRoute,
                h = c.targetJsonSchema,
                g = s(y),
                f = h.options || [],
                v = (0, _.y8)(h.type),
                E =
                  (h.readOnly, h.style ? (0, _.K8)((0, m.toJS)(h.style)) : {}),
                b = h.titleStyle ? (0, _.K8)((0, m.toJS)(h.titleStyle)) : {},
                C = h.contentStyle
                  ? (0, _.K8)((0, m.toJS)(h.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === i
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (v ? 'two-col-element-warp' : ''),
                  id: u,
                  style: E,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: b },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === i ? h.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: h.title },
                      h.title,
                      h.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(p, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === i &&
                    h.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: h.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: C },
                  o.createElement(
                    'div',
                    { className: 'form-item-box select-box' },
                    o.createElement(S.Cascader, {
                      showSearch: null == (e = h.showSearch) || e,
                      style: { display: 'inline-block', minWidth: '120px' },
                      options: f,
                      onChange: this.handleValueChange,
                      defaultValue: null != g ? g : h.default,
                      disabled: h.readOnly,
                      allowClear: null == (t = h.allowClear) || t,
                      multiple: null != (n = h.multiple) && n,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'cascader', component: ue });
        var pe = (function (e) {
          function n(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleImageChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData;
                if ('uploading' !== e.file.status) {
                  if ('done' === e.file.status) {
                    var l = e.file.response || {};
                    l.url && o(a, l.url);
                  } else
                    'error' === e.file.status &&
                      S.message.error(e.file.name + ' 图片上传失败。');
                  n.setState({ loading: !1 });
                } else n.setState({ loading: !0 });
              }),
              (n.handleDeleteChange = function () {
                var e = n.props,
                  t = e.keyRoute;
                (0, (e.jsonStore || {}).updateFormValueData)(t, '');
              }),
              (n.state = { loading: !1 }),
              (n.handleImageChange = n.handleImageChange.bind(n)),
              (n.handleDeleteChange = n.handleDeleteChange.bind(n)),
              n
            );
          }
          a()(n, e);
          var l = n.prototype;
          return (
            (l.componentWillMount = function () {
              k.x.call(this);
            }),
            (l.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (l.render = function () {
              var e,
                n = this.props,
                a = n.schemaStore,
                l = n.jsonStore,
                r = (a || {}).pageScreen,
                i = l || {},
                s = i.getJSONDataByKeyRoute,
                c = i.options,
                u = this.props,
                p = u.nodeKey,
                y = u.jsonKey,
                h = u.keyRoute,
                g = u.targetJsonSchema,
                f = c || {},
                v = this.state.loading,
                E = h && s(h),
                b = g.readOnly || !1,
                C = (g.isRequired, []);
              E && (0, d.isArray)(E)
                ? (C = E)
                : E && (0, d.isString)(E) && C.push(E);
              var O = {
                  name: 'file',
                  action: g.uploadAction || f.uploadAction,
                  accept: g.accept || f.uploadAccept || '.jpeg,.jpg,.png',
                  maxCount: (g.multiple && g.maxCount) || 1,
                  defaultFileList: C,
                  listType: null != (e = g.listType) ? e : 'picture-card',
                  withCredentials: !0,
                  method: g.uploadMethod || f.uploadMethod || 'POST',
                  headers: {},
                  onChange: this.handleImageChange,
                  onRemove: this.handleDeleteChange,
                },
                x = g.style ? (0, _.K8)((0, m.toJS)(g.style)) : {},
                N = g.titleStyle ? (0, _.K8)((0, m.toJS)(g.titleStyle)) : {},
                k = g.contentStyle
                  ? (0, _.K8)((0, m.toJS)(g.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === r
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: p,
                  style: x,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: N },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === r ? g.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: g.title },
                      g.title,
                      g.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(y, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === r &&
                    g.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: g.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: k },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(
                      S.Upload,
                      t()({}, O, { disabled: b }),
                      o.createElement(
                        'button',
                        {
                          style: {
                            border: 0,
                            background: 'none',
                            cursor: 'pointer',
                          },
                          type: 'button',
                        },
                        v
                          ? o.createElement(w.LoadingOutlined, null)
                          : o.createElement(w.PlusOutlined, null),
                        o.createElement(
                          'div',
                          { style: { marginTop: 8 } },
                          '上传图片',
                        ),
                      ),
                    ),
                  ),
                ),
              );
            }),
            n
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'input-image', component: pe });
        var me = require('moment'),
          de = __webpack_require__.n(me),
          ye = {
            'date-time': 'YYYY-MM-DD HH:mm',
            date: 'YYYY-MM-DD',
            time: 'HH:mm',
          },
          he = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var a = n.props,
                    o = a.keyRoute;
                  (0, (a.jsonStore || {}).updateFormValueData)(o, t);
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            a()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                k.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  k.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e = this.props,
                  t = e.schemaStore,
                  n = e.jsonStore,
                  a = (t || {}).pageScreen,
                  l = (n || {}).getJSONDataByKeyRoute,
                  r = this.props,
                  i = r.keyRoute,
                  s = r.jsonKey,
                  c = r.nodeKey,
                  u = r.targetJsonSchema,
                  p = u.type,
                  y = u.readOnly || !1,
                  h = u.isRequired || !1,
                  g = ye[p] || ye[0],
                  f = l(i),
                  v = null != f ? f : u.default,
                  E = (0, _.y8)(p),
                  b = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                  C = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                  O = u.contentStyle
                    ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                    : {};
                return o.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (E ? 'two-col-element-warp' : ''),
                    id: c,
                    style: b,
                  },
                  o.createElement(
                    'div',
                    { className: 'element-title', style: C },
                    o.createElement(
                      S.Tooltip,
                      {
                        title: 'wideScreen' === a ? u.description : '',
                        placement: 'top',
                      },
                      o.createElement(
                        'span',
                        { className: 'title-text', title: u.title },
                        u.title,
                        u.showKey &&
                          o.createElement(
                            'span',
                            null,
                            '（',
                            (0, d.truncate)(s, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === a &&
                      u.description &&
                      o.createElement(
                        S.Tooltip,
                        { title: u.description, placement: 'top' },
                        o.createElement(w.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  o.createElement(
                    'div',
                    { className: 'content-item', style: O },
                    o.createElement(
                      'div',
                      { className: 'form-item-box' },
                      o.createElement(S.DatePicker, {
                        style: { display: 'inline-block' },
                        disabled: y,
                        required: h,
                        showTime: 'date-time' === p,
                        format: g,
                        placeholder: u.placeholder || '请输入' + u.title,
                        defaultValue: v && de()(v, g),
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(o.PureComponent);
        ((0, b.TS)({ type: 'date', component: he }),
          (0, b.TS)({ type: 'date-time', component: he }));
        var Se = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (
                e,
                t,
              ) {
                var a = n.props,
                  o = a.keyRoute;
                (0, (a.jsonStore || {}).updateFormValueData)(o, t);
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                l = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                s = r.jsonKey,
                c = r.keyRoute,
                u = r.targetJsonSchema,
                p = l(c),
                y = null != p ? p : u.default,
                h = u.readOnly || !1,
                g = u.isRequired || !1,
                f = (0, _.y8)(u.type),
                v = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                E = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                b = u.contentStyle
                  ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (f ? 'two-col-element-warp' : ''),
                  id: i,
                  style: v,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: E },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === a ? u.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    u.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: u.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: b },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(S.TimePicker, {
                      style: { display: 'inline-block' },
                      disabled: h,
                      required: g,
                      placeholder: u.placeholder || '请输入' + u.title,
                      defaultValue: y && de()(y, 'HH:mm'),
                      onChange: this.handleValueChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'time', component: Se });
        var _e = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute;
                (0, (t.jsonStore || {}).updateFormValueData)(a, e.target.value);
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                l = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.keyRoute,
                s = r.jsonKey,
                c = r.nodeKey,
                u = r.targetJsonSchema,
                p = l(i),
                y = u.readOnly || !1,
                h = u.isRequired || !1,
                g = u.style ? (0, _.K8)((0, m.toJS)(u.style)) : {},
                f = u.titleStyle ? (0, _.K8)((0, m.toJS)(u.titleStyle)) : {},
                v = u.contentStyle
                  ? (0, _.K8)((0, m.toJS)(u.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: c,
                  style: g,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: f },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === a ? u.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    u.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: u.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: v },
                  o.createElement(
                    'div',
                    { className: 'form-item-box' },
                    o.createElement(S.Input, {
                      style: { display: 'inline-block' },
                      disabled: y,
                      required: h,
                      placeholder: u.placeholder || '请输入' + u.title,
                      defaultValue: null != p ? p : u.default,
                      onPressEnter: this.handleValueChange,
                      onBlur: this.handleValueChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'url', component: _e });
        var ge = require('react-color'),
          fe =
            (__webpack_require__(6220),
            (function (e) {
              function t(t) {
                var n;
                return (
                  ((n = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    var t = n.props,
                      a = t.keyRoute,
                      o = (t.jsonStore || {}).updateFormValueData,
                      l = e.rgb;
                    (o(
                      a,
                      'rgba(' + l.r + ',' + l.g + ',' + l.b + ',' + l.a + ')',
                    ),
                      n.setState({ renderState: !n.state.renderState }));
                  }),
                  (n.deleteColor = function () {
                    var e = n.props,
                      t = e.keyRoute;
                    ((0, (e.jsonStore || {}).updateFormValueData)(t, 'initial'),
                      S.message.success('已移除当前设置的颜色值'),
                      n.setState({ renderState: !n.state.renderState }));
                  }),
                  (n.state = { renderState: !1, displayColorPicker: !1 }),
                  (n.handleValueChange = n.handleValueChange.bind(n)),
                  n
                );
              }
              a()(t, e);
              var n = t.prototype;
              return (
                (n.componentWillMount = function () {
                  k.x.call(this);
                }),
                (n.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    k.x.call(this, e.keyRoute);
                }),
                (n.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.schemaStore,
                    a = t.jsonStore,
                    l = (n || {}).pageScreen,
                    r = (a || {}).getJSONDataByKeyRoute,
                    i = this.props,
                    s = i.keyRoute,
                    c = i.jsonKey,
                    u = i.nodeKey,
                    p = i.targetJsonSchema,
                    y = this.state,
                    h = y.renderState,
                    g = y.displayColorPicker,
                    f = p.readOnly || !1,
                    v = r(s),
                    E = (0, _.y8)(p.type),
                    b = p.style ? (0, _.K8)((0, m.toJS)(p.style)) : {},
                    C = p.titleStyle
                      ? (0, _.K8)((0, m.toJS)(p.titleStyle))
                      : {},
                    O = p.contentStyle
                      ? (0, _.K8)((0, m.toJS)(p.contentStyle))
                      : {},
                    x = o.createElement(ge.SketchPicker, {
                      className: 'color-sketch-picker',
                      key: u + '-SketchPicker',
                      color: null != v ? v : p.default,
                      onChange: this.handleValueChange,
                    });
                  return o.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === l
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp ' +
                            (E ? 'two-col-element-warp' : ''),
                      id: u,
                      style: b,
                    },
                    o.createElement(
                      'div',
                      { className: 'element-title', style: C },
                      o.createElement(
                        S.Tooltip,
                        {
                          title: 'wideScreen' === l ? p.description : '',
                          placement: 'top',
                        },
                        o.createElement(
                          'span',
                          { className: 'title-text', title: p.title },
                          p.title,
                          p.showKey &&
                            o.createElement(
                              'span',
                              null,
                              '（',
                              (0, d.truncate)(c, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                      'mobileScreen' === l &&
                        p.description &&
                        o.createElement(
                          S.Tooltip,
                          { title: p.description, placement: 'top' },
                          o.createElement(w.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    o.createElement(
                      'div',
                      { className: 'content-item', style: O },
                      o.createElement(
                        'div',
                        { className: 'form-item-box render-dom-' + h },
                        o.createElement(
                          'div',
                          {
                            className:
                              'color-btn-wrap color-item-form ' +
                              (g ? 'selected' : '') +
                              ' ' +
                              (f ? 'disabled' : ''),
                            onClick: function (t) {
                              f || e.setState({ displayColorPicker: !g });
                            },
                          },
                          f &&
                            o.createElement('button', {
                              className: 'ant-input color-btn',
                              style: {
                                backgroundColor: null != v ? v : p.default,
                              },
                            }),
                          !f &&
                            o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(
                                S.Popover,
                                {
                                  content: x,
                                  title: '颜色选择器',
                                  trigger: 'click',
                                },
                                o.createElement('button', {
                                  className: 'ant-input color-btn',
                                  style: {
                                    backgroundColor: null != v ? v : p.default,
                                  },
                                }),
                              ),
                              o.createElement(
                                S.Tooltip,
                                {
                                  title: '点击移除当前颜色值',
                                  placement: 'top',
                                },
                                o.createElement(w.CloseOutlined, {
                                  className: 'delete-bgColor-btn',
                                  onClick: function (t) {
                                    e.deleteColor();
                                  },
                                }),
                              ),
                              o.createElement('span', { className: 'arrow' }),
                            ),
                        ),
                      ),
                    ),
                  );
                }),
                t
              );
            })(o.PureComponent));
        (0, b.TS)({ type: 'color', component: fe });
        var ve = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData;
                e && o(a, e);
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
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                l = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                s = i.nodeKey,
                c = i.jsonKey,
                u = i.keyRoute,
                p = i.targetJsonSchema,
                y = this.state,
                h = y.isShowWarn,
                f = y.warnText,
                v = y.curJSONDataTemp,
                E = p.readOnly || !1,
                b = r(u);
              ((b = void 0 !== b ? b : p.default || '{}'),
                ((0, g.Gv)(b) || (0, g.cy)(b)) &&
                  (b = JSON.stringify(b, null, 2)));
              var C = p.style ? (0, _.K8)((0, m.toJS)(p.style)) : {},
                O = p.titleStyle ? (0, _.K8)((0, m.toJS)(p.titleStyle)) : {},
                N = p.contentStyle
                  ? (0, _.K8)((0, m.toJS)(p.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === l
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp',
                  id: s,
                  style: C,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: O },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === l ? p.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: p.title },
                      p.title,
                      p.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(c, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === l &&
                    p.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: p.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: N },
                  h &&
                    o.createElement(
                      'div',
                      { className: 'warning-box code-area-item' },
                      o.createElement('div', { className: 'warning-img' }, 'X'),
                      o.createElement('div', { className: 'warning-text' }, f),
                    ),
                  o.createElement(x(), {
                    id: s + '-json_area_ace',
                    value: (0, _.GT)(v) ? v : b,
                    className: 'code-area-item',
                    mode: 'json',
                    theme: 'solarized_light',
                    name: 'JSON_CODE_EDIT',
                    fontSize: 14,
                    showPrintMargin: !0,
                    showGutter: !0,
                    highlightActiveLine: !0,
                    readOnly: E,
                    minLines: 5,
                    maxLines: 30,
                    width: '100%',
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
                    setOptions: {
                      useWorker: !1,
                      showLineNumbers: !0,
                      tabSize: 2,
                    },
                  }),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        ((0, b.TS)({ type: 'json', component: ve }),
          __webpack_require__(697),
          require('ace-builds/src-noconflict/mode-html'),
          __webpack_require__(6953));
        var Ee = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute;
                (0, (t.jsonStore || {}).updateFormValueData)(a, e);
              }),
              (n.state = { isShowWarn: !1, warnText: '' }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                l = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                s = i.nodeKey,
                c = i.jsonKey,
                u = i.keyRoute,
                p = i.targetJsonSchema,
                y = this.state,
                h = y.isShowWarn,
                f = y.warnText,
                v = p.readOnly || !1,
                E = r(u);
              ((E = void 0 !== E ? E : p.default || '<p>hello</p>'),
                (0, g.Gv)(E) && (E = JSON.stringify(E, null, 2)));
              var b = p.style ? (0, _.K8)((0, m.toJS)(p.style)) : {},
                C = p.titleStyle ? (0, _.K8)((0, m.toJS)(p.titleStyle)) : {},
                O = p.contentStyle
                  ? (0, _.K8)((0, m.toJS)(p.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === l
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp',
                  id: s,
                  style: b,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: C },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === l ? p.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: p.title },
                      p.title,
                      p.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(c, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === l &&
                    p.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: p.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: O },
                  h &&
                    o.createElement(
                      'div',
                      { className: 'warning-box code-area-item' },
                      o.createElement('div', { className: 'warning-img' }, 'X'),
                      o.createElement('div', { className: 'warning-text' }, f),
                    ),
                  o.createElement(x(), {
                    id: 'code_area_ace',
                    key: s + '-ace',
                    className: 'code-area-item',
                    value: E,
                    mode: 'html',
                    theme: 'monokai',
                    name: 'JS_CODE_EDIT',
                    fontSize: 14,
                    showPrintMargin: !0,
                    showGutter: !0,
                    highlightActiveLine: !0,
                    readOnly: v,
                    minLines: 5,
                    maxLines: 30,
                    width: '100%',
                    onChange: function (t) {
                      try {
                        (e.handleValueChange(t),
                          e.setState({ isShowWarn: !1 }));
                      } catch (n) {
                        (e.handleValueChange(t),
                          e.setState({ warnText: n.message, isShowWarn: !0 }));
                      }
                    },
                    setOptions: {
                      useWorker: !1,
                      showLineNumbers: !0,
                      tabSize: 2,
                    },
                  }),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'htmlarea', component: Ee });
        var be = require('@babel/runtime/helpers/objectWithoutPropertiesLoose'),
          we = __webpack_require__.n(be),
          Ce = (__webpack_require__(4754), ['key', 'name']),
          Oe = ['key', 'name'],
          xe = S.Tabs.TabPane,
          Ne = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).form = void 0),
                (n.showModal = function () {
                  n.setState({ visible: !0 });
                }),
                (n.handleOk = function () {
                  n.form.validateFields().then(function (e) {
                    var t = n.props,
                      a = t.keyRoute,
                      o = t.jsonStore;
                    if (e.headers && Array.isArray(e.headers)) {
                      var l = {};
                      (e.headers.forEach(function (e) {
                        e.key && (l[e.key] = e.value || '');
                      }),
                        (e.headers = l));
                    } else if ('string' == typeof e.headers)
                      try {
                        e.headers = JSON.parse(e.headers || '{}');
                      } catch (t) {
                        e.headers = {};
                      }
                    if (e.data && Array.isArray(e.data)) {
                      var r = {};
                      (e.data.forEach(function (e) {
                        if (e.key)
                          try {
                            r[e.key] = JSON.parse(e.value);
                          } catch (t) {
                            r[e.key] = e.value;
                          }
                      }),
                        (e.data = r));
                    } else if ('string' == typeof e.data)
                      try {
                        e.data = JSON.parse(e.data || '{}');
                      } catch (t) {
                        e.data = {};
                      }
                    (e.cache ? (e.cache = e.cacheTime || 3e3) : delete e.cache,
                      delete e.cacheTime,
                      e.headers &&
                        0 === Object.keys(e.headers).length &&
                        delete e.headers,
                      e.data &&
                        0 === Object.keys(e.data).length &&
                        delete e.data,
                      n.props.onChange
                        ? n.props.onChange(e)
                        : o.updateFormValueData(a, e),
                      n.setState({ visible: !1 }));
                  });
                }),
                (n.handleCancel = function () {
                  n.setState({ visible: !1 });
                }),
                (n.showModal = n.showModal.bind(n)),
                (n.handleOk = n.handleOk.bind(n)),
                (n.handleCancel = n.handleCancel.bind(n)),
                n
              );
            }
            return (
              a()(n, e),
              (n.prototype.render = function () {
                var e,
                  n,
                  a,
                  o = this,
                  r = this.props,
                  i = r.schemaStore,
                  s = r.jsonStore,
                  c = (i || {}).pageScreen,
                  u = this.props,
                  p = u.keyRoute,
                  d = u.targetJsonSchema,
                  y = u.nodeKey,
                  h = this.state.visible;
                if (!d) return null;
                var g,
                  f,
                  v =
                    (p && s
                      ? null == s.getJSONDataByKeyRoute
                        ? void 0
                        : s.getJSONDataByKeyRoute(p)
                      : {}) || {},
                  E = d.properties || {},
                  b = E.url || {},
                  C = E.method || {},
                  O = E.headers || {},
                  x = E.data || {},
                  N = E.dataType || {},
                  k = E.cache || {},
                  R = E.cacheTime || {},
                  j = d.style ? (0, _.K8)((0, m.toJS)(d.style)) : {},
                  D = d.titleStyle ? (0, _.K8)((0, m.toJS)(d.titleStyle)) : {},
                  T = d.contentStyle
                    ? (0, _.K8)((0, m.toJS)(d.contentStyle))
                    : {},
                  K =
                    (null == (e = v.method) ? void 0 : e.toUpperCase()) ||
                    'GET',
                  P = ('GET' !== K ? K + ': ' : '') + (v.url || '');
                return l().createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === c
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    id: y,
                    style: j,
                  },
                  l().createElement(
                    'div',
                    { className: 'element-title', style: D },
                    l().createElement(
                      'span',
                      { className: 'title-text', title: d.title },
                      d.title,
                      d.showKey &&
                        l().createElement('span', null, '（', d.jsonKey, '）'),
                    ),
                  ),
                  l().createElement(
                    'div',
                    { className: 'content-item', style: T },
                    l().createElement(S.Input, {
                      className: 'api-schema-input',
                      value: P,
                      placeholder: '点击右侧设置图标配置 API 接口',
                      readOnly: !0,
                      addonAfter: l().createElement(w.SettingOutlined, {
                        onClick: this.showModal,
                      }),
                    }),
                  ),
                  l().createElement(
                    S.Modal,
                    {
                      title: d.title || 'API 配置',
                      visible: h,
                      onOk: this.handleOk,
                      onCancel: this.handleCancel,
                      width: 800,
                      okText: '确定',
                      cancelText: '取消',
                    },
                    l().createElement(
                      S.Form,
                      {
                        ref: function (e) {
                          return (o.form = e);
                        },
                        initialValues: {
                          url: v.url || '',
                          method: v.method || 'get',
                          dataType: v.dataType || 'json',
                          cache: !!v.cache,
                          cacheTime: 'number' == typeof v.cache ? v.cache : 3e3,
                          headers:
                            ((f = v.headers),
                            f && 'object' == typeof f
                              ? Object.keys(f).map(function (e) {
                                  return {
                                    key: e,
                                    value:
                                      'string' == typeof f[e]
                                        ? f[e]
                                        : JSON.stringify(f[e]),
                                  };
                                })
                              : []),
                          data:
                            ((g = v.data),
                            g && 'object' == typeof g
                              ? Object.keys(g).map(function (e) {
                                  return {
                                    key: e,
                                    value:
                                      'string' == typeof g[e]
                                        ? g[e]
                                        : JSON.stringify(g[e]),
                                  };
                                })
                              : []),
                        },
                        layout: 'vertical',
                      },
                      l().createElement(
                        S.Tabs,
                        { defaultActiveKey: '1' },
                        l().createElement(
                          xe,
                          {
                            tab:
                              (null == (n = d.tabTitles) ? void 0 : n.basic) ||
                              '接口设置',
                            key: '1',
                          },
                          l().createElement(
                            S.Form.Item,
                            {
                              name: 'method',
                              label: C.title || '发送方式',
                              rules: [{ required: !1 !== C.isRequired }],
                            },
                            l().createElement(
                              S.Select,
                              null,
                              l().createElement(
                                S.Select.Option,
                                { value: 'get' },
                                'GET',
                              ),
                              l().createElement(
                                S.Select.Option,
                                { value: 'post' },
                                'POST',
                              ),
                              l().createElement(
                                S.Select.Option,
                                { value: 'put' },
                                'PUT',
                              ),
                              l().createElement(
                                S.Select.Option,
                                { value: 'patch' },
                                'PATCH',
                              ),
                              l().createElement(
                                S.Select.Option,
                                { value: 'delete' },
                                'DELETE',
                              ),
                            ),
                          ),
                          l().createElement(
                            S.Form.Item,
                            {
                              name: 'url',
                              label: b.title || '接口地址',
                              rules: [{ required: !1 !== b.isRequired }],
                            },
                            l().createElement(S.Input, {
                              placeholder: b.placeholder || 'http://',
                            }),
                          ),
                          l().createElement(
                            S.Form.Item,
                            { name: 'dataType', label: N.title || '数据格式' },
                            l().createElement(
                              S.Select,
                              null,
                              l().createElement(
                                S.Select.Option,
                                { value: 'json' },
                                'JSON',
                              ),
                              l().createElement(
                                S.Select.Option,
                                { value: 'form-data' },
                                'FormData',
                              ),
                              l().createElement(
                                S.Select.Option,
                                { value: 'form' },
                                'Form',
                              ),
                            ),
                            l().createElement(
                              S.Form.Item,
                              {
                                noStyle: !0,
                                shouldUpdate: function (e, t) {
                                  return e.dataType !== t.dataType;
                                },
                              },
                              function (e) {
                                var t =
                                  (0, e.getFieldValue)('dataType') || 'json';
                                return l().createElement(
                                  'div',
                                  {
                                    style: {
                                      fontSize: '12px',
                                      color: '#999',
                                      marginTop: '4px',
                                    },
                                  },
                                  N.description ||
                                    '发送体格式为：' +
                                      ({
                                        json: 'application/json',
                                        'form-data': 'multipart/form-data',
                                        form: 'application/x-www-form-urlencoded',
                                      }[t] || 'application/json') +
                                      '，当发送内容中存在文件时会自动使用 form-data 格式。',
                                );
                              },
                            ),
                          ),
                          l().createElement(
                            S.Form.Item,
                            {
                              name: 'cache',
                              label: k.title || '是否设置缓存',
                              valuePropName: 'checked',
                            },
                            l().createElement(S.Switch, null),
                          ),
                          l().createElement(
                            S.Form.Item,
                            {
                              noStyle: !0,
                              shouldUpdate: function (e, t) {
                                return e.cache !== t.cache;
                              },
                            },
                            function (e) {
                              return (0, e.getFieldValue)('cache')
                                ? l().createElement(
                                    S.Form.Item,
                                    {
                                      name: 'cacheTime',
                                      label: R.title || '缓存时间（ms）',
                                    },
                                    l().createElement(S.InputNumber, {
                                      min: 0,
                                      step: 500,
                                      style: { width: '100%' },
                                    }),
                                    l().createElement(
                                      'div',
                                      {
                                        style: {
                                          fontSize: '12px',
                                          color: '#999',
                                          marginTop: '4px',
                                        },
                                      },
                                      R.description ||
                                        '设置该请求缓存有效时间，单位 ms',
                                    ),
                                  )
                                : null;
                            },
                          ),
                        ),
                        l().createElement(
                          xe,
                          {
                            tab:
                              (null == (a = d.tabTitles) ? void 0 : a.http) ||
                              'HTTP配置',
                            key: '2',
                          },
                          l().createElement(
                            'div',
                            { style: { marginBottom: '16px' } },
                            l().createElement(
                              'h4',
                              { style: { marginBottom: '12px' } },
                              O.title || '请求头 (Headers)',
                            ),
                            l().createElement(
                              S.Form.List,
                              { name: 'headers' },
                              function (e, n) {
                                var a = n.add,
                                  o = n.remove;
                                return l().createElement(
                                  l().Fragment,
                                  null,
                                  e.map(function (e) {
                                    var n = e.key,
                                      a = e.name,
                                      r = we()(e, Ce);
                                    return l().createElement(
                                      S.Space,
                                      {
                                        key: n,
                                        style: {
                                          display: 'flex',
                                          marginBottom: 8,
                                        },
                                        align: 'baseline',
                                      },
                                      l().createElement(
                                        S.Form.Item,
                                        t()({}, r, {
                                          name: [a, 'key'],
                                          rules: [
                                            {
                                              required: !0,
                                              message: '请输入Key',
                                            },
                                          ],
                                          style: { flex: 1 },
                                        }),
                                        l().createElement(S.Input, {
                                          placeholder: 'Key',
                                        }),
                                      ),
                                      l().createElement(
                                        S.Form.Item,
                                        t()({}, r, {
                                          name: [a, 'value'],
                                          style: { flex: 1 },
                                        }),
                                        l().createElement(S.Input, {
                                          placeholder: 'Value',
                                        }),
                                      ),
                                      l().createElement(w.MinusCircleOutlined, {
                                        onClick: function (e) {
                                          return o(a);
                                        },
                                      }),
                                    );
                                  }),
                                  l().createElement(
                                    S.Form.Item,
                                    null,
                                    l().createElement(
                                      S.Button,
                                      {
                                        type: 'dashed',
                                        onClick: function (e) {
                                          return a();
                                        },
                                        block: !0,
                                        icon: l().createElement(
                                          w.PlusOutlined,
                                          null,
                                        ),
                                      },
                                      '添加请求头',
                                    ),
                                  ),
                                );
                              },
                            ),
                          ),
                          l().createElement(
                            'div',
                            { style: { marginBottom: '16px' } },
                            l().createElement(
                              'h4',
                              { style: { marginBottom: '12px' } },
                              x.title || '发送数据 (Data)',
                            ),
                            l().createElement(
                              S.Form.List,
                              { name: 'data' },
                              function (e, n) {
                                var a = n.add,
                                  o = n.remove;
                                return l().createElement(
                                  l().Fragment,
                                  null,
                                  e.map(function (e) {
                                    var n = e.key,
                                      a = e.name,
                                      r = we()(e, Oe);
                                    return l().createElement(
                                      S.Space,
                                      {
                                        key: n,
                                        style: {
                                          display: 'flex',
                                          marginBottom: 8,
                                        },
                                        align: 'baseline',
                                      },
                                      l().createElement(
                                        S.Form.Item,
                                        t()({}, r, {
                                          name: [a, 'key'],
                                          rules: [
                                            {
                                              required: !0,
                                              message: '请输入Key',
                                            },
                                          ],
                                          style: { flex: 1 },
                                        }),
                                        l().createElement(S.Input, {
                                          placeholder: 'Key',
                                        }),
                                      ),
                                      l().createElement(
                                        S.Form.Item,
                                        t()({}, r, {
                                          name: [a, 'value'],
                                          style: { flex: 1 },
                                        }),
                                        l().createElement(S.Input, {
                                          placeholder: 'Value (支持JSON)',
                                        }),
                                      ),
                                      l().createElement(w.MinusCircleOutlined, {
                                        onClick: function (e) {
                                          return o(a);
                                        },
                                      }),
                                    );
                                  }),
                                  l().createElement(
                                    S.Form.Item,
                                    null,
                                    l().createElement(
                                      S.Button,
                                      {
                                        type: 'dashed',
                                        onClick: function (e) {
                                          return a();
                                        },
                                        block: !0,
                                        icon: l().createElement(
                                          w.PlusOutlined,
                                          null,
                                        ),
                                      },
                                      '添加发送数据',
                                    ),
                                  ),
                                  x.description &&
                                    l().createElement(
                                      'div',
                                      {
                                        style: {
                                          fontSize: '12px',
                                          color: '#999',
                                          marginTop: '8px',
                                        },
                                      },
                                      x.description,
                                    ),
                                );
                              },
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              }),
              n
            );
          })(l().PureComponent);
        ((0, b.TS)({ type: 'api', component: Ne }), __webpack_require__(8678));
        var ke = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (
                e,
                t,
              ) {
                (0, (n.props.jsonStore || {}).updateFormValueData)(e, t);
              }),
              (n.switchFilterBtn = function () {
                var e = n.state.isShowFilter;
                n.setState({ isShowFilter: !e });
              }),
              (n.tabChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).triggerChangeAction;
                (n.handleValueChange(a + '-type', e),
                  setTimeout(function () {
                    o();
                  }, 100));
              }),
              (n.handleApiConfigChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).triggerChangeAction;
                (n.handleValueChange(a + '-config', e),
                  setTimeout(function () {
                    o();
                  }, 100));
              }),
              (n.state = { isShowFilter: !1 }),
              (n.switchFilterBtn = n.switchFilterBtn.bind(n)),
              n
            );
          }
          a()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              k.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                l = (n || {}).pageScreen,
                r = a || {},
                i = r.getJSONDataByKeyRoute,
                s = r.triggerChange,
                c = this.props,
                u = c.keyRoute,
                p = c.jsonKey,
                y = c.nodeKey,
                h = c.indexRoute,
                g = c.targetJsonSchema,
                f = c.renderChild,
                v = this.state.isShowFilter,
                E = g.type,
                b = i(u) || {},
                C = g.properties.type || {},
                O = b.type || C.default,
                x = (b.config, g.properties.data || {}),
                N = g.properties.config || {},
                k = g.style ? (0, _.K8)((0, m.toJS)(g.style)) : {},
                R = g.titleStyle ? (0, _.K8)((0, m.toJS)(g.titleStyle)) : {},
                j = g.contentStyle
                  ? (0, _.K8)((0, m.toJS)(g.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className: 'mobile-screen-element-warp dynamic-data-schema',
                  key: y + '-' + s,
                  id: y,
                  style: k,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: R },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === l ? g.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: g.title },
                      g.title,
                      g.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(p, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === l &&
                    g.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: g.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  { className: 'content-item', style: j },
                  o.createElement(
                    'div',
                    { className: 'dynamic-data-tab-radio-box' },
                    o.createElement(
                      'div',
                      { className: 'dynamic-data-tab-radio' },
                      o.createElement(
                        'div',
                        {
                          className:
                            'tab-radio ' +
                            ('local' === O ? 'tab-radio-active' : ''),
                          onClick: function (t) {
                            e.tabChange('local');
                          },
                        },
                        '本地数据',
                      ),
                      o.createElement(
                        'div',
                        {
                          className:
                            'tab-radio ' +
                            ('remote' === O ? 'tab-radio-active' : ''),
                          onClick: function (t) {
                            e.tabChange('remote');
                          },
                        },
                        '接口数据',
                      ),
                    ),
                  ),
                  o.createElement(
                    'div',
                    {
                      className:
                        'dynamic-dat-tabPane ' +
                        ('local' === O ? 'dynamic-dat-tabPane-active' : ''),
                    },
                    o.createElement(
                      'div',
                      { className: 'json-form-box' },
                      o.createElement(
                        S.Tooltip,
                        {
                          title: v
                            ? '点击隐藏数据过滤器'
                            : '点击显示数据过滤器',
                          placement: 'top',
                        },
                        o.createElement(w.FilterOutlined, {
                          className: 'filter-btn',
                          onClick: this.switchFilterBtn,
                        }),
                      ),
                      f({
                        rendererType: 'json',
                        parentType: E,
                        jsonKey: 'data',
                        indexRoute: h ? h + '-2' : '2',
                        keyRoute: u ? u + '-data' : 'data',
                        nodeKey: y + '-data',
                        targetJsonSchema: x,
                      }),
                      o.createElement(
                        'div',
                        { className: 'filter-func-box' },
                        v &&
                          f({
                            rendererType: 'codearea',
                            isIgnoreWarn: !0,
                            parentType: E,
                            jsonKey: 'localFilter',
                            indexRoute: h ? h + '-3' : '3',
                            keyRoute: u ? u + '-localFilter' : 'localFilter',
                            nodeKey: y + '-localFilter',
                            targetJsonSchema: g.properties.localFilter,
                          }),
                      ),
                    ),
                  ),
                  o.createElement(
                    'div',
                    {
                      className:
                        'dynamic-dat-tabPane ' +
                        ('remote' === O ? 'dynamic-dat-tabPane-active' : ''),
                    },
                    o.createElement(
                      'div',
                      { className: 'json-form-box' },
                      f({
                        rendererType: 'api',
                        parentType: E,
                        jsonKey: 'config',
                        indexRoute: h ? h + '-1' : '1',
                        keyRoute: u ? u + '-config' : 'config',
                        nodeKey: y + '-config',
                        targetJsonSchema: N,
                        onChange: this.handleApiConfigChange,
                      }),
                    ),
                  ),
                ),
              );
            }),
            t
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'dynamic-data', component: ke });
        var Re = (function (e) {
          function n(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                jsonView: !1,
                isClosed: !1,
              }),
              n
            );
          }
          a()(n, e);
          var l = n.prototype;
          return (
            (l.componentWillMount = function () {
              k.x.call(this);
            }),
            (l.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && k.x.call(this, e.keyRoute);
            }),
            (l.render = function () {
              var e,
                n = this,
                a = this.props,
                l = a.schemaStore,
                r = (a.jsonStore, (l || {}).pageScreen),
                i = this.props,
                s = i.keyRoute,
                c = i.jsonKey,
                u = i.nodeKey,
                p = i.indexRoute,
                y = i.targetJsonSchema,
                h = i.renderChild,
                g = y.type,
                f = this.state,
                v = f.jsonView,
                E = f.isClosed,
                b = y.properties.type || {},
                C = y.properties.register || {},
                O = y.properties.actionFunc || {},
                x = y.properties.trigger || {},
                k = y.properties.eventData || {},
                R = b.default,
                j = null == (e = y.showCodeViewBtn) || e,
                D = y.style ? (0, _.K8)((0, m.toJS)(y.style)) : {},
                T = y.titleStyle ? (0, _.K8)((0, m.toJS)(y.titleStyle)) : {},
                K = y.contentStyle
                  ? (0, _.K8)((0, m.toJS)(y.contentStyle))
                  : {};
              return o.createElement(
                'div',
                {
                  className:
                    'wideScreen' === r
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: u,
                  style: D,
                },
                o.createElement(
                  'div',
                  { className: 'element-title', style: T },
                  o.createElement(
                    S.Tooltip,
                    {
                      title: 'wideScreen' === r ? y.description : '',
                      placement: 'top',
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text', title: y.title },
                      y.title,
                      y.showKey &&
                        o.createElement(
                          'span',
                          null,
                          '（',
                          (0, d.truncate)(c, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === r &&
                    y.description &&
                    o.createElement(
                      S.Tooltip,
                      { title: y.description, placement: 'top' },
                      o.createElement(w.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                o.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: K,
                  },
                  o.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: function (e) {
                        (n.setState({ isClosed: !E }),
                          e.preventDefault(),
                          e.stopPropagation());
                      },
                    },
                    o.createElement(
                      'span',
                      { className: 'title-text' },
                      '事件配置',
                    ),
                    E
                      ? o.createElement(w.RightOutlined, {
                          className: 'close-operate-btn',
                        })
                      : o.createElement(w.DownOutlined, {
                          className: 'close-operate-btn',
                        }),
                    j &&
                      o.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function (e) {
                            (n.setState({ jsonView: !v }),
                              e.preventDefault(),
                              e.stopPropagation());
                          },
                        },
                        o.createElement(
                          S.Tooltip,
                          { title: v ? '关闭源码模式' : '开启源码模式' },
                          o.createElement(A, {
                            className: v ? 'info-icon active' : 'info-icon',
                          }),
                        ),
                      ),
                  ),
                  o.createElement(
                    'div',
                    {
                      className:
                        'content-item object-content ' +
                        (v ? 'json-view-array' : '') +
                        ' ' +
                        (E ? 'closed' : ''),
                    },
                    !v &&
                      'on' === R &&
                      o.createElement(
                        o.Fragment,
                        null,
                        C &&
                          h({
                            rendererType: 'input',
                            parentType: g,
                            jsonKey: 'register',
                            indexRoute: p ? p + '-1' : '1',
                            keyRoute: s ? s + '-register' : 'register',
                            nodeKey: u + '-register',
                            targetJsonSchema: C,
                          }),
                        O &&
                          h({
                            rendererType: 'codearea',
                            parentType: g,
                            jsonKey: 'actionFunc',
                            indexRoute: p ? p + '-2' : '2',
                            keyRoute: s ? s + '-actionFunc' : 'actionFunc',
                            nodeKey: u + '-actionFunc',
                            targetJsonSchema: O,
                          }),
                      ),
                    !v &&
                      'emit' === R &&
                      o.createElement(
                        o.Fragment,
                        null,
                        x &&
                          h({
                            rendererType: 'input',
                            parentType: g,
                            jsonKey: 'trigger',
                            indexRoute: p ? p + '-1' : '1',
                            keyRoute: s ? s + '-trigger' : 'trigger',
                            nodeKey: u + '-trigger',
                            targetJsonSchema: x,
                          }),
                        k &&
                          h({
                            rendererType: 'json',
                            parentType: g,
                            jsonKey: 'eventData',
                            indexRoute: p ? p + '-2' : '2',
                            keyRoute: s ? s + '-eventData' : 'eventData',
                            nodeKey: u + '-eventData',
                            targetJsonSchema: k,
                          }),
                      ),
                    v && o.createElement(N, t()({}, this.props)),
                  ),
                ),
              );
            }),
            n
          );
        })(o.PureComponent);
        (0, b.TS)({ type: 'event', component: Re });
        var je = function (e) {
            var n = e.schemaStore,
              a = e.jsonStore,
              o = a || {},
              r = o.getJSONDataByKeyRoute,
              i = o.JSONEditorObj,
              s = e.nodeKey,
              c = e.keyRoute,
              u = e.targetJsonSchema,
              p = e.rendererType;
            if (!u) return null;
            var m = c && (0, d.getParentKeyRoute)(c),
              y = (m && r && r(m)) || {},
              h = Object.assign({}, i || {}, y);
            if (
              (0, _.GT)(u.onShow) &&
              '' !== u.onShow &&
              ('false' === u.onShow ||
                ((0, d.isBoolean)(u.onShow) && !u.onShow) ||
                ((0, d.isString)(u.onShow) &&
                  !(0, d.evalExpression)(u.onShow, h)))
            )
              return null;
            var S =
                p || (u.typeOn ? (0, d.evalExpression)(u.typeOn, h) : u.type),
              g = s,
              f = t()({}, e, {
                nodeKey: g,
                key: g,
                renderChild: function (e) {
                  return je(t()({}, e, { schemaStore: n, jsonStore: a }));
                },
              }),
              v = b.Jd[S] || H;
            return l().createElement(v, t()({}, f));
          },
          De = je,
          Te = (__webpack_require__(8104), S.Collapse.Panel),
          Ke = S.Tabs.TabPane,
          Pe = (function (e) {
            function t(t) {
              var n;
              (((n = e.call(this, t) || this).catchViewStyle = function (e) {
                switch (e) {
                  case 'fold':
                  default:
                    return 'fold';
                  case 'tabs':
                    return 'tabs';
                }
              }),
                (n.renderHeader = function (e) {
                  switch (e) {
                    case 'func':
                      return '功能设置';
                    case 'style':
                      return '样式设置';
                    case 'data':
                      return '数据设置';
                    default:
                      return '属性设置';
                  }
                }),
                (n.state = {
                  jsonView: t.jsonView || !1,
                  viewStyle: n.catchViewStyle(t.viewStyle),
                }));
              var a = n.props.schemaStore || {},
                o = a.initJSONSchemaData,
                l = a.setPageScreen,
                r = n.props.jsonStore || {},
                i = r.initJSONData,
                s = r.initOnChange,
                c = r.setDynamicDataList,
                u = r.setOptions;
              return (
                t.schemaData
                  ? (o(t.schemaData), i(t.jsonData))
                  : t.jsonData &&
                    (o((0, d.json2schema)(t.jsonData)), i(t.jsonData)),
                t.wideScreen && l(t.wideScreen),
                t.onChange && s(t.onChange),
                t.dynamicDataList && c(t.dynamicDataList),
                t.options && u(t.options),
                n
              );
            }
            a()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillReceiveProps = function (e) {
                var t,
                  n = this.props.schemaStore || {},
                  a = n.JSONSchemaChange,
                  o = n.setPageScreen,
                  l = this.props.jsonStore || {},
                  r = l.JSONEditorObj,
                  i = l.initJSONData,
                  s = l.initOnChange,
                  c = l.setDynamicDataList,
                  u = l.setOptions;
                ((0, d.isEqualByIdT)(e.schemaData, this.props.schemaData) ||
                  a(e.schemaData),
                  (0, d.isEqual)(e.jsonData, r) || i(e.jsonData),
                  (0, d.isEqual)(e.jsonView, this.props.jsonView) ||
                    this.setState({ jsonView: null != (t = e.jsonView) && t }),
                  (0, d.isEqual)(e.viewStyle, this.props.viewStyle) ||
                    this.setState({
                      viewStyle: this.catchViewStyle(e.viewStyle),
                    }),
                  (0, d.isEqual)(e.wideScreen, this.props.wideScreen) ||
                    o(e.wideScreen),
                  (0, d.isEqual)(e.onChange, this.props.onChange) ||
                    s(e.onChange),
                  (0, d.isEqual)(
                    e.dynamicDataList,
                    this.props.dynamicDataList,
                  ) || c(e.dynamicDataList),
                  (0, d.isEqual)(e.options, this.props.options) ||
                    u(e.options));
              }),
              (n.render = function () {
                var e = this,
                  t = this.props,
                  n = t.schemaStore,
                  a = t.jsonStore,
                  l = t.jsonViewReadOnly,
                  r = n || {},
                  i = r.jsonSchema,
                  s = r.lastUpdateTime,
                  c = a || {},
                  u = c.JSONEditorObj,
                  p = c.lastUpdateTime,
                  m = c.jsonChange,
                  y = this.state,
                  h = y.jsonView,
                  _ = y.viewStyle,
                  g = (0, d.isEmptySchema)(i),
                  f = (0, d.isStructuredSchema)(i);
                return o.createElement(
                  'div',
                  { className: 'json-editor-container' },
                  g &&
                    o.createElement(
                      'p',
                      { className: 'json-editor-empty' },
                      '当前jsonSchema没有数据内容',
                    ),
                  !g &&
                    !h &&
                    o.createElement(
                      o.Fragment,
                      null,
                      f &&
                        o.createElement(
                          o.Fragment,
                          null,
                          'fold' === _ &&
                            o.createElement(
                              S.Collapse,
                              {
                                defaultActiveKey: i.propertyOrder,
                                expandIconPosition: 'right',
                                bordered: !1,
                              },
                              i.propertyOrder.map(function (t, l) {
                                var r = l,
                                  c = t,
                                  u = t,
                                  m = i.properties[u],
                                  d = m.type,
                                  y = s + '-' + p + '-' + d + '-' + u;
                                return m.propertyOrder &&
                                  m.propertyOrder.length > 0
                                  ? o.createElement(
                                      Te,
                                      {
                                        header: m.title || e.renderHeader(d),
                                        key: t + '-' + l,
                                      },
                                      De({
                                        parentType: d,
                                        jsonKey: u,
                                        indexRoute: r,
                                        keyRoute: c,
                                        nodeKey: y,
                                        targetJsonSchema: m,
                                        isStructuredSchema: f,
                                        schemaStore: n,
                                        jsonStore: a,
                                      }),
                                    )
                                  : '';
                              }),
                            ),
                          'tabs' === _ &&
                            o.createElement(
                              S.Tabs,
                              {
                                className: 'tabs-schema-box',
                                defaultActiveKey: i.propertyOrder[0],
                                centered: !0,
                                hideAdd: !0,
                              },
                              i.propertyOrder.map(function (t, l) {
                                var r = l,
                                  c = t,
                                  u = t,
                                  m = i.properties[u],
                                  d = m.type,
                                  y = s + '-' + p + '-' + d + '-' + u;
                                return m.propertyOrder &&
                                  m.propertyOrder.length > 0
                                  ? o.createElement(
                                      Ke,
                                      {
                                        tab: m.title || e.renderHeader(d),
                                        key: t + '-' + l,
                                        closable: !1,
                                        className: 'tabs-schema-item',
                                      },
                                      De({
                                        parentType: d,
                                        jsonKey: u,
                                        indexRoute: r,
                                        keyRoute: c,
                                        nodeKey: y,
                                        targetJsonSchema: m,
                                        isStructuredSchema: f,
                                        schemaStore: n,
                                        jsonStore: a,
                                      }),
                                    )
                                  : '';
                              }),
                            ),
                        ),
                      !f &&
                        o.createElement(
                          o.Fragment,
                          null,
                          De({
                            parentType: '',
                            jsonKey: '',
                            indexRoute: '',
                            keyRoute: '',
                            nodeKey: '',
                            targetJsonSchema: i,
                            schemaStore: n,
                            jsonStore: a,
                          }),
                        ),
                    ),
                  !g &&
                    h &&
                    o.createElement(N, {
                      jsonData: u,
                      readOnly: null == l || l,
                      onChange: m,
                      maxLines: 30,
                    }),
                );
              }),
              t
            );
          })(o.PureComponent),
          Je = (0, s.inject)(function (e) {
            return {
              schemaStore: e.JSONSchemaStore,
              jsonStore: e.JSONEditorStore,
            };
          })((0, s.observer)(Pe));
        function Ae(e, t) {
          if (
            (window &&
              !window.JSONEditorCustomRenderers &&
              (window.JSONEditorCustomRenderers = {}),
            window.JSONEditorCustomRenderers &&
              !window.JSONEditorCustomRenderers[e])
          )
            return ((window.JSONEditorCustomRenderers[e] = t), e);
          console.error(
            '[json-editor]：注册渲染器失败，存在重名渲染器(' + e + ')。',
          );
        }
        function Me(e) {
          if (
            window &&
            window.JSONEditorCustomRenderers &&
            window.JSONEditorCustomRenderers[e]
          )
            return window.JSONEditorCustomRenderers[e].component;
        }
        (__webpack_require__(4410),
          window.JSONEditorCustomRenderers &&
            Object.keys(window.JSONEditorCustomRenderers).forEach(function (e) {
              if (b.Jd[e])
                console.warn(
                  '[json-editor]：预注册渲染器失败，当前存在重名渲染器（' +
                    e +
                    '）。',
                );
              else {
                var t = window.JSONEditorCustomRenderers[e];
                t && (0, b.TS)({ type: e, component: t });
              }
            }),
          window.addEventListener(
            'message',
            function (e) {
              if (
                e.data &&
                'json-editor-renderer-register-event' === e.data.type &&
                e.data.jsonRenderer &&
                e.data.jsonRenderer.type
              ) {
                var t = e.data.jsonRenderer.type;
                if (b.Jd[t])
                  console.warn(
                    '[json-editor]: 动态注册渲染器失败，当前存在重名渲染器（' +
                      t +
                      '）。',
                  );
                else {
                  console.info('[json-editor]: 响应动态注册渲染器事件：', t);
                  var n = Me(t);
                  n && (0, b.TS)({ type: t, component: n });
                }
              }
            },
            !1,
          ));
        var Ve = __webpack_require__(8165),
          Be = (function (e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  rootJSONStore: new E(),
                }),
                n
              );
            }
            return (
              a()(n, e),
              (n.prototype.render = function () {
                var e = this.props.element,
                  n = this.state.rootJSONStore,
                  a = o.createElement(
                    s.Provider,
                    {
                      JSONSchemaStore: n.JSONSchemaStore,
                      JSONEditorStore: n.JSONEditorStore,
                    },
                    o.createElement(Je, t()({}, this.props)),
                  );
                return e ? (i().render(a, e), '') : a;
              }),
              n
            );
          })(o.PureComponent);
      })(),
      __webpack_exports__
    );
  })();
});
