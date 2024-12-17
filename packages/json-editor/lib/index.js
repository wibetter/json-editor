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
        852: function (e, t, a) {
          'use strict';
          a.d(t, {
            x: function () {
              return r;
            },
          });
          var n = a(919);
          function r(e) {
            var t = this.props,
              a = t.targetJsonSchema,
              r = t.getJSONDataByKeyRoute,
              o = t.getInitJsonDataByKeyRoute,
              i = t.updateFormValueData,
              l = a.type,
              s = e || this.props.keyRoute,
              c = (0, n.TA)(s + '-' + l);
            if (c) {
              var u = r(c);
              u || (u = o(c)), u && ((0, n.CP)(s + '-' + l), i(s, u));
            }
          }
        },
        566: function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(820),
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
              __webpack_require__.n(
                _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
              ),
            react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15),
            react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            ),
            mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20),
            mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
              __webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_2__),
            prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(825),
            prop_types__WEBPACK_IMPORTED_MODULE_3___default =
              __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),
            antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(375),
            antd__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_4__,
            ),
            react_ace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(813),
            react_ace__WEBPACK_IMPORTED_MODULE_5___default =
              __webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_5__),
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(85),
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6___default =
              __webpack_require__.n(
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__,
              ),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(426),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_7___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_7__,
              ),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(953),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_8___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_8__,
              ),
            $utils_typeof__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(102),
            $mixins_index__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(852),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(347),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_10___default =
              __webpack_require__.n(
                _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__,
              ),
            CodeAreaFormSchema = (function (_React$PureComponent) {
              function CodeAreaFormSchema(e) {
                var t;
                return (
                  ((t =
                    _React$PureComponent.call(this, e) ||
                    this).handleValueChange = function (e) {
                    var a = t.props,
                      n = a.keyRoute;
                    (0, a.updateFormValueData)(n, e);
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
                    isReadOnly = _this$props2.isReadOnly,
                    jsonKey = _this$props2.jsonKey,
                    isIgnoreWarn = _this$props2.isIgnoreWarn,
                    nodeKey = _this$props2.nodeKey,
                    keyRoute = _this$props2.keyRoute,
                    targetJsonSchema = _this$props2.targetJsonSchema,
                    pageScreen = _this$props2.pageScreen,
                    getJSONDataByKeyRoute = _this$props2.getJSONDataByKeyRoute,
                    _this$state = this.state,
                    isShowWarn = _this$state.isShowWarn,
                    warnText = _this$state.warnText,
                    readOnly = isReadOnly || targetJsonSchema.readOnly || !1,
                    curJsonData = getJSONDataByKeyRoute(keyRoute);
                  return (
                    (curJsonData =
                      void 0 !== curJsonData
                        ? curJsonData
                        : targetJsonSchema.default || '() => {}'),
                    (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_9__.Gv)(
                      curJsonData,
                    ) && (curJsonData = JSON.stringify(curJsonData, null, 2)),
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className:
                          'wideScreen' === pageScreen
                            ? 'wide-screen-element-warp container-warp'
                            : 'mobile-screen-element-warp',
                        key: nodeKey,
                        id: nodeKey,
                      },
                      react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        { className: 'element-title' },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          { className: 'title-text warning-text' },
                          readOnly ? '[只读]' : '',
                        ),
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
                              title:
                                'wideScreen' === pageScreen &&
                                targetJsonSchema.title &&
                                targetJsonSchema.title.length >
                                  (readOnly ? 4 : 6)
                                  ? targetJsonSchema.title
                                  : '',
                            },
                            targetJsonSchema.title,
                            targetJsonSchema.showKey &&
                              react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                'span',
                                null,
                                '（',
                                (0,
                                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.truncate)(
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
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.InfoCircleOutlined,
                              { className: 'info-icon' },
                            ),
                          ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        { className: 'content-item' },
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
                            id: 'code_area_ace',
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
                                eval(newJsonData),
                                  _this2.handleValueChange(newJsonData),
                                  _this2.setState({ isShowWarn: !1 });
                              } catch (e) {
                                _this2.handleValueChange(newJsonData),
                                  _this2.setState({
                                    warnText: e.message,
                                    isShowWarn: !0,
                                  });
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
                    )
                  );
                }),
                CodeAreaFormSchema
              );
            })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          (CodeAreaFormSchema.propTypes = {
            isIgnoreWarn: prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
            isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
          }),
            (__webpack_exports__.A = (0,
            mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (e) {
              return {
                pageScreen: e.JSONSchemaStore.pageScreen,
                getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
                updateFormValueData: e.JSONEditorStore.updateFormValueData,
                getInitJsonDataByKeyRoute:
                  e.JSONEditorStore.getInitJsonDataByKeyRoute,
              };
            })(
              (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
                CodeAreaFormSchema,
              ),
            ));
        },
        919: function (e, t, a) {
          'use strict';
          function n(e) {
            var t = JSON.stringify(e);
            return JSON.parse(t);
          }
          function r(e, t) {
            return JSON.stringify(e) === JSON.stringify(t);
          }
          function o(e) {
            var t = !1;
            return null != e && (t = !0), t;
          }
          function i(e) {
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
          function l(e) {
            if (window.sessionStorage) return window.sessionStorage.getItem(e);
          }
          function s(e) {
            if (window.sessionStorage)
              return window.sessionStorage.removeItem(e);
          }
          a.d(t, {
            CP: function () {
              return s;
            },
            GT: function () {
              return o;
            },
            TA: function () {
              return l;
            },
            bQ: function () {
              return n;
            },
            n4: function () {
              return r;
            },
            y8: function () {
              return i;
            },
          });
        },
        102: function (e, t, a) {
          'use strict';
          function n(e) {
            return /^http[s]?:\/\/.*/.test(e);
          }
          function r(e) {
            return 'String' === Object.prototype.toString.call(e).slice(8, -1);
          }
          function o(e) {
            return (
              'number' == typeof e ||
              '[object Number]' === Object.prototype.toString.call(e)
            );
          }
          function i(e) {
            var t = !1;
            return (
              'Array' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          function l(e) {
            var t = !1;
            return (
              'Object' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          function s(e) {
            return /^#[0-9a-f]{3,6}$/.test(e);
          }
          function c(e) {
            var t = !1;
            return (
              'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          a.d(t, {
            Et: function () {
              return o;
            },
            Gv: function () {
              return l;
            },
            Kg: function () {
              return r;
            },
            Tn: function () {
              return c;
            },
            _o: function () {
              return s;
            },
            cy: function () {
              return i;
            },
            mv: function () {
              return n;
            },
          }),
            a(85);
        },
        641: function () {},
        997: function () {},
        766: function () {},
        523: function () {},
        597: function () {},
        232: function () {},
        534: function () {},
        161: function () {},
        258: function () {},
        6: function () {},
        196: function () {},
        505: function () {},
        12: function () {},
        396: function () {},
        104: function (e, t, a) {
          var n = a(641);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('1fb1d0ec', n, !1, { sourceMap: !1 });
        },
        410: function (e, t, a) {
          var n = a(997);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('220f768b', n, !1, { sourceMap: !1 });
        },
        595: function (e, t, a) {
          var n = a(766);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('56ceba47', n, !1, { sourceMap: !1 });
        },
        928: function (e, t, a) {
          var n = a(523);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('31b3938e', n, !1, { sourceMap: !1 });
        },
        220: function (e, t, a) {
          var n = a(597);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('f7862348', n, !1, { sourceMap: !1 });
        },
        819: function (e, t, a) {
          var n = a(232);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('1b6af5a2', n, !1, { sourceMap: !1 });
        },
        759: function (e, t, a) {
          var n = a(534);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('754f9197', n, !1, { sourceMap: !1 });
        },
        90: function (e, t, a) {
          var n = a(161);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('4ad618f0', n, !1, { sourceMap: !1 });
        },
        741: function (e, t, a) {
          var n = a(258);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('ae856a32', n, !1, { sourceMap: !1 });
        },
        657: function (e, t, a) {
          var n = a(6);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('91732ad6', n, !1, { sourceMap: !1 });
        },
        581: function (e, t, a) {
          var n = a(196);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('5737c47d', n, !1, { sourceMap: !1 });
        },
        546: function (e, t, a) {
          var n = a(505);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('e6602b10', n, !1, { sourceMap: !1 });
        },
        165: function (e, t, a) {
          var n = a(12);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('4cab1cef', n, !1, { sourceMap: !1 });
        },
        632: function (e, t, a) {
          var n = a(396);
          n.__esModule && (n = n.default),
            'string' == typeof n && (n = [[e.id, n, '']]),
            n.locals && (e.exports = n.locals),
            (0, a(611).A)('54a7813a', n, !1, { sourceMap: !1 });
        },
        611: function (e, t, a) {
          'use strict';
          function n(e, t) {
            for (var a = [], n = {}, r = 0; r < t.length; r++) {
              var o = t[r],
                i = o[0],
                l = {
                  id: e + ':' + r,
                  css: o[1],
                  media: o[2],
                  sourceMap: o[3],
                };
              n[i]
                ? n[i].parts.push(l)
                : a.push((n[i] = { id: i, parts: [l] }));
            }
            return a;
          }
          a.d(t, {
            A: function () {
              return y;
            },
          });
          var r = 'undefined' != typeof document;
          if ('undefined' != typeof DEBUG && DEBUG && !r)
            throw new Error(
              "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
            );
          var o = {},
            i =
              r && (document.head || document.getElementsByTagName('head')[0]),
            l = null,
            s = 0,
            c = !1,
            u = function () {},
            p = null,
            m = 'data-vue-ssr-id',
            d =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function y(e, t, a, r) {
            (c = a), (p = r || {});
            var i = n(e, t);
            return (
              h(i),
              function (t) {
                for (var a = [], r = 0; r < i.length; r++) {
                  var l = i[r];
                  (s = o[l.id]).refs--, a.push(s);
                }
                for (
                  t ? h((i = n(e, t))) : (i = []), r = 0;
                  r < a.length;
                  r++
                ) {
                  var s;
                  if (0 === (s = a[r]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete o[s.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var a = e[t],
                n = o[a.id];
              if (n) {
                n.refs++;
                for (var r = 0; r < n.parts.length; r++) n.parts[r](a.parts[r]);
                for (; r < a.parts.length; r++) n.parts.push(S(a.parts[r]));
                n.parts.length > a.parts.length &&
                  (n.parts.length = a.parts.length);
              } else {
                var i = [];
                for (r = 0; r < a.parts.length; r++) i.push(S(a.parts[r]));
                o[a.id] = { id: a.id, refs: 1, parts: i };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), i.appendChild(e), e;
          }
          function S(e) {
            var t,
              a,
              n = document.querySelector('style[' + m + '~="' + e.id + '"]');
            if (n) {
              if (c) return u;
              n.parentNode.removeChild(n);
            }
            if (d) {
              var r = s++;
              (n = l || (l = g())),
                (t = E.bind(null, n, r, !1)),
                (a = E.bind(null, n, r, !0));
            } else
              (n = g()),
                (t = v.bind(null, n)),
                (a = function () {
                  n.parentNode.removeChild(n);
                });
            return (
              t(e),
              function (n) {
                if (n) {
                  if (
                    n.css === e.css &&
                    n.media === e.media &&
                    n.sourceMap === e.sourceMap
                  )
                    return;
                  t((e = n));
                } else a();
              }
            );
          }
          var _,
            f =
              ((_ = []),
              function (e, t) {
                return (_[e] = t), _.filter(Boolean).join('\n');
              });
          function E(e, t, a, n) {
            var r = a ? '' : n.css;
            if (e.styleSheet) e.styleSheet.cssText = f(t, r);
            else {
              var o = document.createTextNode(r),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
            }
          }
          function v(e, t) {
            var a = t.css,
              n = t.media,
              r = t.sourceMap;
            if (
              (n && e.setAttribute('media', n),
              p.ssrId && e.setAttribute(m, t.id),
              r &&
                ((a += '\n/*# sourceURL=' + r.sources[0] + ' */'),
                (a +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  ' */')),
              e.styleSheet)
            )
              e.styleSheet.cssText = a;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(a));
            }
          }
        },
        347: function (e) {
          'use strict';
          e.exports = require('@ant-design/icons');
        },
        820: function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/inheritsLoose');
        },
        85: function (e) {
          'use strict';
          e.exports = require('@wibetter/json-utils');
        },
        426: function (e) {
          'use strict';
          e.exports = require('ace-builds/src-noconflict/mode-javascript');
        },
        953: function (e) {
          'use strict';
          e.exports = require('ace-builds/src-noconflict/theme-monokai');
        },
        375: function (e) {
          'use strict';
          e.exports = require('antd');
        },
        20: function (e) {
          'use strict';
          e.exports = require('mobx-react');
        },
        825: function (e) {
          'use strict';
          e.exports = require('prop-types');
        },
        15: function (e) {
          'use strict';
          e.exports = require('react');
        },
        813: function (e) {
          'use strict';
          e.exports = require('react-ace');
        },
      },
      __webpack_module_cache__ = {};
    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var a = (__webpack_module_cache__[e] = { id: e, exports: {} });
      return (
        __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports
      );
    }
    (__webpack_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return __webpack_require__.d(t, { a: t }), t;
    }),
      (__webpack_require__.d = function (e, t) {
        for (var a in t)
          __webpack_require__.o(t, a) &&
            !__webpack_require__.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
      }),
      (__webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (__webpack_require__.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var __webpack_exports__ = {};
    return (
      (function () {
        'use strict';
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            default: function () {
              return Wt;
            },
          });
        var e,
          t,
          a,
          n,
          r,
          o,
          i,
          l,
          s,
          c,
          u,
          p,
          m,
          d,
          y,
          h,
          g,
          S,
          _,
          f,
          E,
          v,
          b,
          O,
          N,
          D,
          R,
          w,
          J,
          k,
          C,
          K,
          x,
          j,
          P = __webpack_require__(820),
          T = __webpack_require__.n(P),
          B = __webpack_require__(15),
          V = __webpack_require__.n(B),
          I = require('react-dom'),
          M = __webpack_require__.n(I),
          A = __webpack_require__(20),
          L = __webpack_require__(825),
          W = __webpack_require__.n(L),
          q = require('@babel/runtime/helpers/initializerDefineProperty'),
          F = __webpack_require__.n(q),
          U = require('@babel/runtime/helpers/createClass'),
          z = __webpack_require__.n(U),
          H = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          G = __webpack_require__.n(H),
          $ =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            require('mobx')),
          Q = __webpack_require__(85),
          Y = Q.TypeDataList.jsonschema,
          Z =
            ((e = $.action.bound),
            (t = $.action.bound),
            (a = $.action.bound),
            (n = $.action.bound),
            (r = $.action.bound),
            (o = $.action.bound),
            (i = $.action.bound),
            (l = (function () {
              function e(e) {
                F()(this, 'pageScreen', s, this),
                  F()(this, 'jsonSchema', c, this),
                  (this.state = { rootJSONStore: e });
              }
              var t = e.prototype;
              return (
                (t.setPageScreen = function (e) {
                  this.pageScreen =
                    'wideScreen' === e || e ? 'wideScreen' : 'mobileScreen';
                }),
                (t.initJSONSchemaData = function (e) {
                  if (e && '{}' !== JSON.stringify(e)) {
                    if (!(0, Q.isEqual)(e, this.JSONSchemaObj))
                      if (e && (0, Q.isNewSchemaData)(e)) this.jsonSchema = e;
                      else {
                        var t = (0, Q.oldSchemaToNewSchema)(e);
                        this.jsonSchema = t;
                      }
                  } else this.jsonSchema = (0, Q.objClone)(Y);
                }),
                (t.JSONSchemaChange = function (e) {
                  if (!(0, Q.isEqual)(e, this.JSONSchemaObj)) {
                    if (e && '{}' !== JSON.stringify(e))
                      if (e && (0, Q.isNewSchemaData)(e)) this.jsonSchema = e;
                      else {
                        var t = (0, Q.oldSchemaToNewSchema)(e);
                        this.jsonSchema = t;
                      }
                    else this.jsonSchema = (0, Q.objClone)(Y);
                    var a = this.state.rootJSONStore.JSONEditorStore.jsonData,
                      n = (0, Q.schema2json)(this.jsonSchema, a);
                    (this.state.rootJSONStore.JSONEditorStore.jsonData = n),
                      (this.state.rootJSONStore.JSONEditorStore.initJsonData =
                        (0, Q.objClone)(a)),
                      this.state.rootJSONStore.JSONEditorStore.jsonDataChange();
                  }
                }),
                (t.indexRoute2keyRoute = function (e) {
                  return (0, Q.indexRoute2keyRoute)(e, this.jsonSchema);
                }),
                (t.keyRoute2indexRoute = function (e) {
                  return (0, Q.keyRoute2indexRoute)(e, this.jsonSchema);
                }),
                (t.getSchemaByIndexRoute = function (e) {
                  return (0, Q.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
                }),
                (t.getSchemaByKeyRoute = function (e) {
                  var t = this.keyRoute2indexRoute(e);
                  return (0, Q.getSchemaByIndexRoute)(t, this.jsonSchema, !0);
                }),
                z()(e, [
                  {
                    key: 'JSONSchemaObj',
                    get: function () {
                      return (0, $.toJS)(this.jsonSchema);
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
            })()),
            (s = G()(l.prototype, 'pageScreen', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 'mobileScreen';
              },
            })),
            (c = G()(l.prototype, 'jsonSchema', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            G()(
              l.prototype,
              'setPageScreen',
              [e],
              Object.getOwnPropertyDescriptor(l.prototype, 'setPageScreen'),
              l.prototype,
            ),
            G()(
              l.prototype,
              'initJSONSchemaData',
              [t],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'initJSONSchemaData',
              ),
              l.prototype,
            ),
            G()(
              l.prototype,
              'JSONSchemaChange',
              [a],
              Object.getOwnPropertyDescriptor(l.prototype, 'JSONSchemaChange'),
              l.prototype,
            ),
            G()(
              l.prototype,
              'JSONSchemaObj',
              [$.computed],
              Object.getOwnPropertyDescriptor(l.prototype, 'JSONSchemaObj'),
              l.prototype,
            ),
            G()(
              l.prototype,
              'lastUpdateTime',
              [$.computed],
              Object.getOwnPropertyDescriptor(l.prototype, 'lastUpdateTime'),
              l.prototype,
            ),
            G()(
              l.prototype,
              'indexRoute2keyRoute',
              [n],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'indexRoute2keyRoute',
              ),
              l.prototype,
            ),
            G()(
              l.prototype,
              'keyRoute2indexRoute',
              [r],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'keyRoute2indexRoute',
              ),
              l.prototype,
            ),
            G()(
              l.prototype,
              'getSchemaByIndexRoute',
              [o],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'getSchemaByIndexRoute',
              ),
              l.prototype,
            ),
            G()(
              l.prototype,
              'getSchemaByKeyRoute',
              [i],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'getSchemaByKeyRoute',
              ),
              l.prototype,
            ),
            l),
          X = __webpack_require__(375),
          ee = __webpack_require__(919),
          te = __webpack_require__(102),
          ae =
            ((u = $.action.bound),
            (p = $.action.bound),
            (m = $.action.bound),
            (d = $.action.bound),
            (y = $.action.bound),
            (h = $.action.bound),
            (g = $.action.bound),
            (S = $.action.bound),
            (_ = $.action.bound),
            (f = $.action.bound),
            (E = $.action.bound),
            (v = $.action.bound),
            (b = $.action.bound),
            (O = (function () {
              function e(e) {
                F()(this, 'rootJSONStore', N, this),
                  F()(this, 'triggerChange', D, this),
                  F()(this, 'lastUpdateTime', R, this),
                  F()(this, 'jsonData', w, this),
                  F()(this, 'initJsonData', J, this),
                  F()(this, 'dynamicDataList', k, this),
                  F()(this, 'dynamicDataObj', C, this),
                  F()(this, 'options', K, this),
                  F()(this, 'dynamicDataApiScopeList', x, this),
                  F()(this, 'onChange', j, this),
                  (this.state = { rootJSONStore: e });
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
                  var t =
                    this.state.rootJSONStore.JSONSchemaStore.jsonSchema || {};
                  (0, ee.n4)(e, this.jsonData) ||
                    ((this.initJsonData = (0, ee.bQ)(this.jsonData)),
                    t &&
                      ((this.jsonData = (0, Q.schema2json)(t, e || {})),
                      this.updateLastTime()));
                }),
                (t.initOnChange = function (e) {
                  (e || (0, te.Tn)(e)) && (this.onChange = e);
                }),
                (t.setDynamicDataList = function (e) {
                  if (!(0, ee.n4)(e, this.dynamicDataList)) {
                    this.dynamicDataList = (0, ee.bQ)(e);
                    var t = {};
                    e.map(function (e) {
                      t[e.name] = e;
                    }),
                      (this.dynamicDataObj = t);
                  }
                }),
                (t.setOptions = function (e) {
                  e && (this.options = e);
                }),
                (t.jsonDataChange = function () {
                  this.onChange(this.JSONEditorObj);
                }),
                (t.getJSONDataByKeyRoute = function (e, t) {
                  var a = t || this.jsonData;
                  return (0, Q.getJsonDataByKeyRoute)(e, a, !0);
                }),
                (t.getInitJsonDataByKeyRoute = function (e, t) {
                  var a = t || this.initJsonData;
                  return (0, Q.getJsonDataByKeyRoute)(e, a, !0);
                }),
                (t.updateFormValueData = function (e, t, a) {
                  var n = this;
                  if ('' !== e) {
                    var r = (0, Q.getParentKeyRoute_CurKey)(e),
                      o = r[0],
                      i = r[1];
                    (0, Q.getJsonDataByKeyRoute)(o, this.jsonData)[i] = t;
                  } else this.jsonData = t;
                  if (
                    this.state.rootJSONStore.JSONSchemaStore &&
                    this.state.rootJSONStore.JSONSchemaStore.jsonSchema
                  ) {
                    var l =
                        this.state.rootJSONStore.JSONSchemaStore.jsonSchema
                          .conditionProps,
                      s =
                        this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(
                          e,
                        );
                    s && s.isConditionProp
                      ? this.updateLastTime()
                      : l &&
                        Object.keys(l).map(function (t) {
                          l[t].keyRoute === e && n.updateLastTime();
                        });
                  }
                  a || this.jsonDataChange();
                }),
                (t.deleteArrayIndex = function (e, t) {
                  var a = (0, Q.getJsonDataByKeyRoute)(e, this.jsonData);
                  (0, te.cy)(a) &&
                    (a.length > 0
                      ? (a.splice(t, 1),
                        this.triggerChangeAction(),
                        this.jsonDataChange())
                      : X.message.warning(
                          '删除失败，空数组对象暂无可删除子项。',
                        ));
                }),
                (t.addArrayItem = function (e, t) {
                  var a = (0, Q.getJsonDataByKeyRoute)(e, this.jsonData);
                  if ((0, te.cy)(a)) {
                    var n = a[t || 0];
                    if (
                      ((0, te.Gv)(n) && (n = Object.assign({}, n)),
                      t || 0 === t)
                    ) {
                      var r = a.slice(Number(t) + 1),
                        o = [n].concat(r);
                      a.splice(Number(t) + 1), a.push.apply(a, o);
                    } else a.push(n);
                    this.triggerChangeAction(), this.jsonDataChange();
                  } else
                    X.message.warning('数据操作异常：当前元素不是数组类型。');
                }),
                (t.sortArrayItem = function (e, t, a) {
                  var n = (0, Q.getJsonDataByKeyRoute)(e, this.jsonData);
                  if ((0, te.cy)(n)) {
                    var r = (0, ee.bQ)(n[t || 0]),
                      o = t;
                    if ('up' === a && o > 0) o -= 1;
                    else {
                      if ('up' === a && 0 === o)
                        return void X.message.warning(
                          '数据操作异常：当前数组项已经是第一个元素了。',
                        );
                      if (
                        ('down' === a || !a) &&
                        ((o += 1), 'down' === a && o > n.length - 1)
                      )
                        return void X.message.warning(
                          '数据操作异常：当前数组项已经是最后一个元素了。',
                        );
                    }
                    var i = (0, ee.bQ)(n[o]);
                    void 0 !== r &&
                      void 0 !== i &&
                      ((n[t] = i),
                      (n[o] = r),
                      X.message.success(
                        '原有数据项' +
                          (t + 1) +
                          '对应的数据内容已' +
                          ('up' === a ? '向上' : '向下') +
                          '移动一级',
                        5,
                      ),
                      this.updateLastTime(),
                      this.triggerChangeAction(),
                      this.jsonDataChange());
                  } else
                    X.message.warning('数据操作异常：当前元素不是数组类型。');
                }),
                z()(e, [
                  {
                    key: 'JSONEditorObj',
                    get: function () {
                      return (0, $.toJS)(this.jsonData);
                    },
                  },
                ])
              );
            })()),
            (N = G()(O.prototype, 'rootJSONStore', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (D = G()(O.prototype, 'triggerChange', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (R = G()(O.prototype, 'lastUpdateTime', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new Date().getTime();
              },
            })),
            (w = G()(O.prototype, 'jsonData', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = G()(O.prototype, 'initJsonData', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (k = G()(O.prototype, 'dynamicDataList', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = G()(O.prototype, 'dynamicDataObj', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (K = G()(O.prototype, 'options', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (x = G()(O.prototype, 'dynamicDataApiScopeList', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {
                  static: '固定值',
                  url: 'URL参数',
                  hash: 'Hash参数',
                  window: '环境变量',
                  dynamic: '接口下发',
                  page: '页面参数',
                  input: '用户输入',
                };
              },
            })),
            (j = G()(O.prototype, 'onChange', [$.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return function () {};
              },
            })),
            G()(
              O.prototype,
              'updateLastTime',
              [u],
              Object.getOwnPropertyDescriptor(O.prototype, 'updateLastTime'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'triggerChangeAction',
              [p],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'triggerChangeAction',
              ),
              O.prototype,
            ),
            G()(
              O.prototype,
              'initJSONData',
              [m],
              Object.getOwnPropertyDescriptor(O.prototype, 'initJSONData'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'initOnChange',
              [d],
              Object.getOwnPropertyDescriptor(O.prototype, 'initOnChange'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'setDynamicDataList',
              [y],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'setDynamicDataList',
              ),
              O.prototype,
            ),
            G()(
              O.prototype,
              'setOptions',
              [h],
              Object.getOwnPropertyDescriptor(O.prototype, 'setOptions'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'JSONEditorObj',
              [$.computed],
              Object.getOwnPropertyDescriptor(O.prototype, 'JSONEditorObj'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'jsonDataChange',
              [g],
              Object.getOwnPropertyDescriptor(O.prototype, 'jsonDataChange'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'getJSONDataByKeyRoute',
              [S],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'getJSONDataByKeyRoute',
              ),
              O.prototype,
            ),
            G()(
              O.prototype,
              'getInitJsonDataByKeyRoute',
              [_],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'getInitJsonDataByKeyRoute',
              ),
              O.prototype,
            ),
            G()(
              O.prototype,
              'updateFormValueData',
              [f],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'updateFormValueData',
              ),
              O.prototype,
            ),
            G()(
              O.prototype,
              'deleteArrayIndex',
              [E],
              Object.getOwnPropertyDescriptor(O.prototype, 'deleteArrayIndex'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'addArrayItem',
              [v],
              Object.getOwnPropertyDescriptor(O.prototype, 'addArrayItem'),
              O.prototype,
            ),
            G()(
              O.prototype,
              'sortArrayItem',
              [b],
              Object.getOwnPropertyDescriptor(O.prototype, 'sortArrayItem'),
              O.prototype,
            ),
            O),
          ne = function () {
            (this.JSONSchemaStore = new Z(this)),
              (this.JSONEditorStore = new ae(this));
          },
          re = require('@babel/runtime/helpers/extends'),
          oe = __webpack_require__.n(re),
          ie = __webpack_require__(347),
          le = __webpack_require__(813),
          se = __webpack_require__.n(le),
          ce =
            (require('ace-builds/src-noconflict/mode-json'),
            require('ace-builds/src-noconflict/theme-solarized_light'),
            __webpack_require__(90),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    var t = a.props,
                      n = t.keyRoute,
                      r = t.updateFormValueData;
                    e && r(n, e);
                  }),
                  (a.handleValueChange = a.handleValueChange.bind(a)),
                  a
                );
              }
              return (
                T()(t, e),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.nodeKey,
                    a = e.keyRoute,
                    n = e.targetJsonSchema,
                    r = (0, e.getJSONDataByKeyRoute)(a);
                  return (
                    (r = void 0 !== r ? r : n.default || '{}'),
                    ((0, te.Gv)(r) || (0, te.cy)(r)) &&
                      (r = JSON.stringify(r, null, 2)),
                    B.createElement(
                      'div',
                      { className: 'json-view-box', key: t, id: t },
                      B.createElement(
                        'div',
                        { className: 'readOnly-btn' },
                        '[只读]',
                      ),
                      B.createElement(se(), {
                        id: 'json_area_ace',
                        value: r,
                        className: 'json-view-ace',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
                        fontSize: 14,
                        showPrintMargin: !0,
                        showGutter: !0,
                        highlightActiveLine: !0,
                        readOnly: !0,
                        minLines: 5,
                        maxLines: 33,
                        width: '100%',
                        setOptions: {
                          useWorker: !1,
                          showLineNumbers: !0,
                          tabSize: 2,
                        },
                      }),
                    )
                  );
                }),
                t
              );
            })(B.PureComponent));
        ce.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var ue,
          pe = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(ce)),
          me = __webpack_require__(852);
        function de() {
          return (
            (de = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                      ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
                }),
            de.apply(null, arguments)
          );
        }
        __webpack_require__(595);
        var ye,
          he = function (e) {
            return B.createElement(
              'svg',
              de(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              ue ||
                (ue = B.createElement('path', {
                  d: 'M15.5 2a.5.5 0 0 1 .09.992L15.5 3H14v10.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 13.6V3H.5a.5.5 0 0 1-.09-.992L.5 2h15ZM13 3H3v10.6a1.4 1.4 0 0 0 1.265 1.394L4.4 15h7.2a1.4 1.4 0 0 0 1.394-1.265L13 13.6V3ZM6 6a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L5.5 11.5v-5A.5.5 0 0 1 6 6Zm4 0a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L9.5 11.5v-5A.5.5 0 0 1 10 6Zm.5-6a.5.5 0 0 1 .09.992L10.5 1h-5a.5.5 0 0 1-.09-.992L5.5 0h5Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function ge() {
          return (
            (ge = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                      ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
                }),
            ge.apply(null, arguments)
          );
        }
        var Se,
          _e = function (e) {
            return B.createElement(
              'svg',
              ge(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              ye ||
                (ye = B.createElement('path', {
                  d: 'M10.286 4C11.232 4 12 4.768 12 5.714v8.572c0 .946-.768 1.714-1.714 1.714H1.714A1.714 1.714 0 0 1 0 14.286V5.714C0 4.768.768 4 1.714 4h8.572Zm-.12 1H1.834A.833.833 0 0 0 1 5.833v8.334c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833V5.833A.833.833 0 0 0 10.167 5ZM6 7.429c.237 0 .429.191.429.428l-.001 1.714h1.715a.429.429 0 0 1 0 .858H6.428v1.714a.429.429 0 1 1-.857 0v-1.714H3.857a.429.429 0 1 1 0-.858h1.714V7.857c0-.237.192-.428.429-.428ZM14.286 0C15.232 0 16 .768 16 1.714v8.572c0 .946-.768 1.714-1.714 1.714H13v-1h1.167c.46 0 .833-.373.833-.833V1.833A.833.833 0 0 0 14.167 1H5.833A.833.833 0 0 0 5 1.833V3H4V1.714C4 .768 4.768 0 5.714 0h8.572Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function fe() {
          return (
            (fe = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                      ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
                }),
            fe.apply(null, arguments)
          );
        }
        var Ee = function (e) {
            return B.createElement(
              'svg',
              fe(
                {
                  viewBox: '0 0 1025 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                e,
              ),
              Se ||
                (Se = B.createElement('path', {
                  d: 'M293.069 755.2c-12.083 0-24.269-4.25-33.997-12.902L0 512l273.46-243.098c21.094-18.688 53.452-16.896 72.242 4.25 18.79 21.146 16.896 53.504-4.25 72.294L154.113 512l172.954 153.702c21.145 18.79 23.04 51.15 4.25 72.295-10.087 11.417-24.167 17.203-38.247 17.203zm457.984-.102L1024.512 512 765.44 281.702c-21.146-18.79-53.504-16.896-72.243 4.25-18.79 21.146-16.896 53.504 4.25 72.294L870.4 512 683.06 678.502c-21.146 18.79-23.04 51.15-4.25 72.295C688.896 762.214 702.976 768 717.056 768c12.083 0 24.269-4.25 33.997-12.902zm-239.514 72.55 102.4-614.4c4.66-27.904-14.182-54.272-42.086-58.931-28.007-4.71-54.323 14.182-58.88 42.086l-102.4 614.4c-4.66 27.904 14.182 54.272 42.086 58.931a52.65 52.65 0 0 0 8.448.666c24.576 0 46.285-17.766 50.432-42.752z',
                  fill: 'currentColor',
                })),
            );
          },
          ve = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).addArrayItem = function (
                  e,
                  t,
                  n,
                ) {
                  var r = a.props.targetJsonSchema['maximum-child'];
                  t && r && t.length >= r
                    ? X.message.warning('添加失败，最多可添加' + r + '个子项')
                    : a.props.addArrayItem(e, n);
                }),
                (a.deleteArrItem = function (e, t, n) {
                  var r = a.props.targetJsonSchema['minimum-child'];
                  n && r && n.length <= r
                    ? X.message.warning('删除失败，至少需要保留' + r + '个子项')
                    : a.props.deleteArrayIndex(e, t);
                }),
                (a.elemHoverEnterEvent = function (e, t) {
                  e.stopPropagation(),
                    t !== a.state.hoverIndex && a.setState({ hoverIndex: t });
                }),
                (a.elemHoverLeaveEvent = function (e, t) {
                  e.stopPropagation(),
                    t === a.state.hoverIndex && a.setState({ hoverIndex: '' });
                }),
                (a.getArrItemTitle = function (e) {
                  if (!e || !(0, te.Gv)(e)) return e;
                  for (
                    var t = Object.keys(e), a = 0, n = t.length;
                    a < n;
                    a++
                  ) {
                    var r = e[t[a]];
                    if (
                      r &&
                      ((0, te.Et)(r) ||
                        ((0, te.Kg)(r) && !(0, te.mv)(r) && !(0, te._o)(r)))
                    )
                      return r;
                  }
                  return '';
                }),
                (a.state = {
                  currentActiveArrIndex: -1,
                  jsonView: !1,
                  isClosed: !1,
                  hoverIndex: '',
                }),
                (a.addArrayItem = a.addArrayItem.bind(a)),
                (a.deleteArrItem = a.deleteArrItem.bind(a)),
                (a.elemHoverEnterEvent = a.elemHoverEnterEvent.bind(a)),
                (a.elemHoverLeaveEvent = a.elemHoverLeaveEvent.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e,
                  t = this,
                  a = this.props,
                  n = a.keyRoute,
                  r = a.jsonKey,
                  o = a.nodeKey,
                  i = a.pageScreen,
                  l = a.indexRoute,
                  s = a.targetJsonSchema,
                  c = a.getJSONDataByKeyRoute,
                  u = a.keyRoute2indexRoute,
                  p = a.updateFormValueData,
                  m = this.state,
                  d = m.jsonView,
                  y = m.isClosed,
                  h = (m.hoverIndex, m.currentActiveArrIndex),
                  g = s.type,
                  S = null == (e = s.showCodeViewBtn) || e,
                  _ = c(n),
                  f = s.items;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === i
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: o,
                    id: o,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      X.Tooltip,
                      { title: s.description, placement: 'top' },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === i && s.title.length > 6
                              ? s.title
                              : '',
                        },
                        s.title,
                        s.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(r, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'array-schema-box content-item' },
                    B.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: function (e) {
                          t.setState({ isClosed: !y }),
                            e.preventDefault(),
                            e.stopPropagation();
                        },
                      },
                      B.createElement(
                        'span',
                        { className: 'title-text' },
                        '数组配置',
                      ),
                      y
                        ? B.createElement(ie.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : B.createElement(ie.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      S &&
                        B.createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              t.setState({ jsonView: !d }),
                                e.preventDefault(),
                                e.stopPropagation();
                            },
                          },
                          B.createElement(
                            X.Tooltip,
                            { title: d ? '关闭源码模式' : '开启源码模式' },
                            B.createElement(Ee, {
                              className: d ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                      B.createElement(
                        X.Tooltip,
                        { title: '添加数据项' },
                        B.createElement(ie.PlusOutlined, {
                          className: 'array-add-child-btn',
                          onClick: function (e) {
                            t.addArrayItem(n, _),
                              e.preventDefault(),
                              e.stopPropagation();
                          },
                        }),
                      ),
                    ),
                    B.createElement(
                      'div',
                      {
                        className:
                          'array-content ' +
                          (d ? 'json-view-array' : '') +
                          ' ' +
                          (y ? 'closed' : ''),
                      },
                      !d &&
                        (0, te.cy)(_) &&
                        _.map(function (e, a) {
                          var r = o + '-array-items-' + _.length + '-' + a,
                            i = l ? l + '-0' : '0',
                            s = n ? n + '-' + a : '' + a,
                            m = t.getArrItemTitle(e);
                          return B.createElement(
                            'div',
                            { className: 'array-item', key: s },
                            B.createElement(
                              'div',
                              {
                                className: 'array-item-header',
                                onClick: function () {
                                  t.setState({
                                    currentActiveArrIndex: h === a ? -1 : a,
                                  });
                                },
                                onMouseMove: function (e) {
                                  t.elemHoverEnterEvent(e, a);
                                },
                                onMouseLeave: function (e) {
                                  t.elemHoverLeaveEvent(e, a);
                                },
                              },
                              B.createElement(
                                'div',
                                { className: 'array-title-text' },
                                m || f.title + '/' + (a + 1),
                              ),
                              B.createElement(
                                'div',
                                { className: 'array-operate-box' },
                                h !== a
                                  ? B.createElement(ie.RightOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    })
                                  : B.createElement(ie.DownOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    }),
                                B.createElement(
                                  X.Tooltip,
                                  { title: '删除' + f.title + '/' + (a + 1) },
                                  B.createElement(
                                    X.Popconfirm,
                                    {
                                      placement: 'top',
                                      title:
                                        '确定要删除' +
                                        f.title +
                                        '/' +
                                        (a + 1) +
                                        '吗？',
                                      onCancel: function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                      },
                                      onConfirm: function (e) {
                                        t.deleteArrItem(n, a, _),
                                          e.preventDefault(),
                                          e.stopPropagation();
                                      },
                                      okText: '确定',
                                      cancelText: '取消',
                                    },
                                    B.createElement(he, {
                                      className:
                                        'delete-operate-btn array-operate-btn',
                                      onClick: function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                      },
                                    }),
                                  ),
                                ),
                                B.createElement(
                                  X.Tooltip,
                                  { title: '复制' + f.title + '/' + (a + 1) },
                                  B.createElement(_e, {
                                    className: 'array-operate-btn',
                                    onClick: function (e) {
                                      t.addArrayItem(n, _, a),
                                        e.preventDefault(),
                                        e.stopPropagation();
                                    },
                                  }),
                                ),
                                0 !== a &&
                                  B.createElement(
                                    X.Tooltip,
                                    { title: '向上移动' },
                                    B.createElement(ie.ArrowUpOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (e) {
                                        t.props.sortArrayItem(n, a, 'up'),
                                          e.preventDefault(),
                                          e.stopPropagation();
                                      },
                                    }),
                                  ),
                                a !== _.length - 1 &&
                                  B.createElement(
                                    X.Tooltip,
                                    { title: '向下移动' },
                                    B.createElement(ie.ArrowDownOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (e) {
                                        t.props.sortArrayItem(n, a, 'down'),
                                          e.preventDefault(),
                                          e.stopPropagation();
                                      },
                                    }),
                                  ),
                              ),
                            ),
                            B.createElement(
                              'div',
                              {
                                className:
                                  'array-item-content ' +
                                  (h === a ? 'open' : 'closed'),
                                key: r,
                                id: r,
                              },
                              B.createElement(Vt, {
                                parentType: g,
                                jsonKey: 'items',
                                indexRoute: i,
                                keyRoute: s,
                                nodeKey: r,
                                targetJsonSchema: f,
                                isArrayItem: !0,
                                arrIndex: a,
                                getJSONDataByKeyRoute: c,
                                keyRoute2indexRoute: u,
                                updateFormValueData: p,
                              }),
                            ),
                          );
                        }),
                      d && B.createElement(pe, this.props),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        ve.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var be = (0, A.inject)(function (e) {
            return {
              triggerChange: e.JSONEditorStore.triggerChange,
              pageScreen: e.JSONSchemaStore.pageScreen,
              indexRoute2keyRoute: e.JSONSchemaStore.indexRoute2keyRoute,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              deleteArrayIndex: e.JSONEditorStore.deleteArrayIndex,
              addArrayItem: e.JSONEditorStore.addArrayItem,
              sortArrayItem: e.JSONEditorStore.sortArrayItem,
            };
          })((0, A.observer)(ve)),
          Oe =
            (__webpack_require__(657),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).state = {
                    jsonView: !1,
                    isClosed: !1,
                  }),
                  a
                );
              }
              T()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  me.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    me.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e,
                    t = this,
                    a = this.props,
                    n = a.indexRoute,
                    r = a.jsonKey,
                    o = a.nodeKey,
                    i = a.keyRoute,
                    l = a.pageScreen,
                    s = a.targetJsonSchema,
                    c = a.isArrayItem,
                    u = (a.arrIndex, a.isStructuredSchema),
                    p = a.getJSONDataByKeyRoute,
                    m = a.keyRoute2indexRoute,
                    d = a.updateFormValueData,
                    y = this.state,
                    h = y.jsonView,
                    g = y.isClosed,
                    S = u,
                    _ = null == (e = s.showCodeViewBtn) || e;
                  return V().createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === l
                          ? 'object-schema-warp wide-screen-element-warp'
                          : 'object-schema-warp mobile-screen-element-warp',
                      key: o,
                      id: o,
                    },
                    !S &&
                      !c &&
                      V().createElement(
                        'div',
                        { className: 'element-title' },
                        V().createElement(
                          X.Tooltip,
                          { title: s.description, placement: 'top' },
                          V().createElement(
                            'span',
                            {
                              className: 'title-text',
                              title:
                                'wideScreen' === l && s.title.length > 6
                                  ? s.title
                                  : '',
                            },
                            s.title,
                            s.showKey &&
                              V().createElement(
                                'span',
                                null,
                                '（',
                                (0, Q.truncate)(r, { length: 15 }),
                                '）',
                              ),
                          ),
                        ),
                      ),
                    V().createElement(
                      'div',
                      { className: 'element-title-card-warp content-item' },
                      !S &&
                        !c &&
                        V().createElement(
                          'div',
                          {
                            className: 'element-title',
                            onClick: function (e) {
                              t.setState({ isClosed: !g }),
                                e.preventDefault(),
                                e.stopPropagation();
                            },
                          },
                          V().createElement(
                            'span',
                            { className: 'title-text' },
                            '对象配置',
                          ),
                          g
                            ? V().createElement(ie.RightOutlined, {
                                className: 'close-operate-btn',
                              })
                            : V().createElement(ie.DownOutlined, {
                                className: 'close-operate-btn',
                              }),
                          _ &&
                            V().createElement(
                              'div',
                              {
                                className: 'display-source-btn',
                                onClick: function (e) {
                                  t.setState({ jsonView: !h }),
                                    e.preventDefault(),
                                    e.stopPropagation();
                                },
                              },
                              V().createElement(
                                X.Tooltip,
                                { title: h ? '关闭源码模式' : '开启源码模式' },
                                V().createElement(Ee, {
                                  className: h
                                    ? 'info-icon active'
                                    : 'info-icon',
                                }),
                              ),
                            ),
                        ),
                      V().createElement(
                        'div',
                        {
                          className:
                            'content-item ' +
                            (S || c ? '' : 'object-content') +
                            ' ' +
                            (h ? 'json-view-array' : '') +
                            ' ' +
                            (g ? 'closed' : ''),
                        },
                        !h &&
                          s.propertyOrder &&
                          s.propertyOrder.map(function (e, t) {
                            var a = n ? n + '-' + t : '' + t,
                              r = i ? i + '-' + e : '' + e,
                              l = e,
                              c = s.properties[l],
                              u = c.type;
                            return Vt({
                              parentType: u,
                              jsonKey: l,
                              indexRoute: a,
                              keyRoute: r,
                              nodeKey: o + '-' + u + '-' + l,
                              targetJsonSchema: c,
                              getJSONDataByKeyRoute: p,
                              keyRoute2indexRoute: m,
                              updateFormValueData: d,
                            });
                          }),
                        h && V().createElement(pe, this.props),
                      ),
                    ),
                  );
                }),
                t
              );
            })(V().PureComponent));
        Oe.propTypes = {
          isArrayItem: W().any,
          arrIndex: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        };
        var Ne = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Oe)),
          De = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = a.props,
                    n = t.keyRoute,
                    r = t.updateFormValueData;
                  e && r(n, e);
                }),
                (a.state = {
                  isShowWarn: !1,
                  warnText: '',
                  curJSONDataTemp: void 0,
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.nodeKey,
                  n = t.jsonKey,
                  r = t.keyRoute,
                  o = t.targetJsonSchema,
                  i = t.pageScreen,
                  l = t.getJSONDataByKeyRoute,
                  s = this.state,
                  c = s.isShowWarn,
                  u = s.warnText,
                  p = s.curJSONDataTemp,
                  m = o.readOnly || !1,
                  d = l(r);
                return (
                  (d = void 0 !== d ? d : o.default || '{}'),
                  ((0, te.Gv)(d) || (0, te.cy)(d)) &&
                    (d = JSON.stringify(d, null, 2)),
                  B.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === i
                          ? 'wide-screen-element-warp container-warp'
                          : 'mobile-screen-element-warp',
                      key: a,
                      id: a,
                    },
                    B.createElement(
                      'div',
                      { className: 'element-title' },
                      B.createElement(
                        'span',
                        { className: 'title-text warning-text' },
                        m ? '[只读]' : '',
                      ),
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === i && o.title.length > (m ? 4 : 6)
                              ? o.title
                              : '',
                        },
                        o.title,
                        o.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(n, { length: 15 }),
                            '）',
                          ),
                      ),
                      o.description &&
                        B.createElement(
                          X.Tooltip,
                          { title: o.description, placement: 'top' },
                          B.createElement(ie.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    B.createElement(
                      'div',
                      { className: 'content-item' },
                      c &&
                        B.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          B.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          B.createElement(
                            'div',
                            { className: 'warning-text' },
                            u,
                          ),
                        ),
                      B.createElement(se(), {
                        id: 'json_area_ace',
                        value: (0, ee.GT)(p) ? p : d,
                        className: 'code-area-item',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
                        fontSize: 14,
                        showPrintMargin: !0,
                        showGutter: !0,
                        highlightActiveLine: !0,
                        readOnly: m,
                        minLines: 5,
                        maxLines: 30,
                        width: '100%',
                        onChange: function (t) {
                          try {
                            var a = JSON.parse(t);
                            e.handleValueChange(a),
                              e.setState({
                                isShowWarn: !1,
                                curJSONDataTemp: void 0,
                              });
                          } catch (a) {
                            e.setState({
                              curJSONDataTemp: t,
                              warnText: a.message,
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
                  )
                );
              }),
              t
            );
          })(B.PureComponent);
        De.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var Re = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
              indexRoute2keyRoute: e.JSONSchemaStore.indexRoute2keyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
            };
          })((0, A.observer)(De)),
          we = __webpack_require__(566),
          Je = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = e.target.value,
                    n = a.props,
                    r = n.keyRoute;
                  (0, n.updateFormValueData)(r, t);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.jsonKey,
                  n = e.nodeKey,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(t),
                  l = r.readOnly || !1,
                  s = r.isRequired || !1;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: n,
                    id: n,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      l ? '[只读]' : '',
                    ),
                    B.createElement(
                      X.Tooltip,
                      {
                        title: 'wideScreen' === o ? r.description : '',
                        placement: 'top',
                      },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o &&
                            r.title &&
                            r.title.length > (l ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      r.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.Input, {
                        style: { display: 'inline-block' },
                        disabled: l,
                        required: s,
                        placeholder: r.placeholder || '请输入' + r.title,
                        defaultValue: i || r.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        Je.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var ke = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Je)),
          Ce =
            (__webpack_require__(819),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).switchFilterBtn = function () {
                    var e = a.state.isShowFilter;
                    a.setState({ isShowFilter: !e });
                  }),
                  (a.state = { isShowFilter: !1, jsonView: !1, isClosed: !1 }),
                  (a.switchFilterBtn = a.switchFilterBtn.bind(a)),
                  a
                );
              }
              T()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  me.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    me.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e,
                    t = this,
                    a = this.props,
                    n = a.keyRoute,
                    r = a.jsonKey,
                    o = a.nodeKey,
                    i = a.indexRoute,
                    l = a.targetJsonSchema,
                    s = a.pageScreen,
                    c = this.state,
                    u = c.jsonView,
                    p = c.isClosed,
                    m = c.isShowFilter,
                    d = l.type,
                    y = l.properties.type || {},
                    h = l.properties.data || {},
                    g = l.properties.filter || {},
                    S = y.default,
                    _ = null == (e = l.showCodeViewBtn) || e;
                  return B.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === s
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp',
                      key: o,
                      id: o,
                    },
                    B.createElement(
                      'div',
                      { className: 'element-title' },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === s && l.title.length > 6
                              ? l.title
                              : '',
                        },
                        l.title,
                        l.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(r, { length: 15 }),
                            '）',
                          ),
                      ),
                      l.description &&
                        B.createElement(
                          X.Tooltip,
                          { title: l.description, placement: 'top' },
                          B.createElement(ie.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    B.createElement(
                      'div',
                      { className: 'element-title-card-warp content-item' },
                      B.createElement(
                        'div',
                        {
                          className: 'element-title',
                          onClick: function (e) {
                            t.setState({ isClosed: !p }),
                              e.preventDefault(),
                              e.stopPropagation();
                          },
                        },
                        B.createElement(
                          'span',
                          { className: 'title-text' },
                          '数据源配置',
                        ),
                        p
                          ? B.createElement(ie.RightOutlined, {
                              className: 'close-operate-btn',
                            })
                          : B.createElement(ie.DownOutlined, {
                              className: 'close-operate-btn',
                            }),
                        _ &&
                          B.createElement(
                            'div',
                            {
                              className: 'display-source-btn',
                              onClick: function (e) {
                                t.setState({ jsonView: !u }),
                                  e.preventDefault(),
                                  e.stopPropagation();
                              },
                            },
                            B.createElement(
                              X.Tooltip,
                              { title: u ? '关闭源码模式' : '开启源码模式' },
                              B.createElement(Ee, {
                                className: u ? 'info-icon active' : 'info-icon',
                              }),
                            ),
                          ),
                      ),
                      B.createElement(
                        'div',
                        {
                          className:
                            'content-item object-content ' +
                            (u ? 'json-view-array' : '') +
                            ' ' +
                            (p ? 'closed' : ''),
                        },
                        !u &&
                          'local' === S &&
                          B.createElement(
                            B.Fragment,
                            null,
                            B.createElement(
                              'div',
                              { className: 'ace-editor-box code-area-item' },
                              B.createElement(
                                X.Tooltip,
                                {
                                  title: m
                                    ? '点击隐藏数据过滤器'
                                    : '点击显示数据过滤器',
                                  placement: 'top',
                                },
                                B.createElement(ie.FilterOutlined, {
                                  className: 'filter-btn',
                                  onClick: this.switchFilterBtn,
                                }),
                              ),
                              B.createElement(Re, {
                                parentType: d,
                                jsonKey: 'data',
                                indexRoute: i ? i + '-1' : '1',
                                keyRoute: n ? n + '-data' : 'data',
                                nodeKey: o + '-data',
                                targetJsonSchema: h,
                                key: o + '-data',
                              }),
                            ),
                            m &&
                              B.createElement(we.A, {
                                parentType: d,
                                jsonKey: 'filter',
                                indexRoute: i ? i + '-2' : '2',
                                keyRoute: n ? n + '-filter' : 'filter',
                                nodeKey: o + '-filter',
                                targetJsonSchema: g,
                                key: o + '-filter',
                              }),
                          ),
                        !u &&
                          'remote' === S &&
                          B.createElement(
                            B.Fragment,
                            null,
                            B.createElement(
                              'div',
                              { className: 'url-editor-box' },
                              B.createElement(ke, {
                                parentType: d,
                                jsonKey: 'data',
                                indexRoute: i ? i + '-1' : '1',
                                keyRoute: n ? n + '-data' : 'data',
                                nodeKey: o + '-data',
                                targetJsonSchema: h,
                                key: o + '-data',
                              }),
                              B.createElement(
                                X.Tooltip,
                                {
                                  title: '点击设置数据过滤器',
                                  placement: 'top',
                                },
                                B.createElement(ie.FilterOutlined, {
                                  className: 'filter-url-btn',
                                  onClick: this.switchFilterBtn,
                                }),
                              ),
                            ),
                            m &&
                              B.createElement(we.A, {
                                parentType: d,
                                jsonKey: 'filter',
                                indexRoute: i ? i + '-2' : '2',
                                keyRoute: n ? n + '-filter' : 'filter',
                                nodeKey: o + '-filter',
                                targetJsonSchema: g,
                                key: o + '-filter',
                              }),
                          ),
                        u && B.createElement(pe, this.props),
                      ),
                    ),
                  );
                }),
                t
              );
            })(B.PureComponent));
        Ce.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var Ke = (0, A.inject)(function (e) {
            return {
              triggerChange: e.JSONEditorStore.triggerChange,
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Ce)),
          xe = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = e.target.value;
                  if (a.props.onChange) a.props.onChange(t);
                  else {
                    var n = a.props,
                      r = n.keyRoute;
                    (0, n.updateFormValueData)(r, t);
                  }
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.jsonKey,
                  n = e.keyRoute,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = e.getJSONDataByKeyRoute,
                  l = n && i(n),
                  s = r.readOnly || !1,
                  c = r.isRequired || !1;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: t,
                    id: t,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      s ? '[只读]' : '',
                    ),
                    B.createElement(
                      X.Tooltip,
                      {
                        title: 'wideScreen' === o ? r.description : '',
                        placement: 'top',
                      },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o &&
                            r.title &&
                            r.title.length > (s ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      r.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.Input, {
                        style: { display: 'inline-block' },
                        disabled: s,
                        required: c,
                        placeholder: r.placeholder || '请输入' + r.title,
                        defaultValue: l || r.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        xe.propTypes = {
          parentType: W().any,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().any,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          onChange: W().any,
        };
        var je = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
            };
          })((0, A.observer)(xe)),
          Pe = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              T()(t, e),
              (t.prototype.render = function () {
                var e = this.props,
                  t = e.pageScreen,
                  a = e.mockData,
                  n = e.dataRoute,
                  r = e.nodeKey,
                  o = e.onChange,
                  i = [];
                if (a && '{}' !== JSON.stringify(a)) {
                  var l = a;
                  if (!(0, Q.isObject)(a) && '' !== a)
                    try {
                      l = JSON.parse(a);
                    } catch (e) {
                      console.log('当前数据源的请求参数格式异常'), (l = {});
                    }
                  i = (0, Q.json2treeData)(l);
                }
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === t
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: r + '-dataRoute-select',
                    id: r + '-dataRoute-select',
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    '数据路径选择',
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.TreeSelect, {
                        className: 'data-route-select',
                        defaultValue: n,
                        treeData: i,
                        allowClear: !0,
                        placeholder: '请选择要使用的数据节点（数据路径）',
                        treeDefaultExpandAll: !0,
                        onChange: o,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        Pe.propTypes = {
          pageScreen: W().any,
          mockData: W().any,
          dataRoute: W().any,
          onChange: W().func,
          nodeKey: W().string,
        };
        var Te = (0, A.inject)(function (e) {
            return { pageScreen: e.JSONSchemaStore.pageScreen };
          })((0, A.observer)(Pe)),
          Be = (__webpack_require__(581), X.Select.Option),
          Ve = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var n = Object.assign({}, a.props.curConfigData);
                  (n[e] = t), a.props.configDataChange(n);
                }),
                (a.paramsValueChange = function (e, t) {
                  var n = Object.assign({}, a.props.curConfigData);
                  n.body && n.body[e] && (n.body[e].value = t),
                    a.props.configDataChange(n);
                }),
                (a.dynamicDataChange = function (e) {
                  var t = (0, ee.bQ)((0, $.toJS)(a.props.dynamicDataObj[e]));
                  if (t) {
                    var n = {
                      id: t.id,
                      url: t.url,
                      method: t.method,
                      headers: t.headers,
                      options: t.options,
                      dataName: t.name,
                      body: t.body,
                      data: t.data,
                      filter: t.filter,
                    };
                    a.props.configDataChange(n);
                  }
                }),
                (a.dataRouteChange = function (e) {
                  var t = Object.assign({}, a.props.curConfigData);
                  t.dataRoute = e;
                  var n = (0, Q.dataRoute2dataPath)(e);
                  (t.filter = 'return ' + n + ';'), a.props.configDataChange(t);
                }),
                a
              );
            }
            return (
              T()(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = this.props,
                  a = t.pageScreen,
                  n = t.curConfigData,
                  r = t.nodeKey,
                  o = t.keyRoute,
                  i = t.dynamicDataList,
                  l = t.dynamicDataObj,
                  s = t.dynamicDataApiScopeList,
                  c = ((0, t.getJSONDataByKeyRoute)(o), n.dataName),
                  u = n.dataRoute,
                  p = n.body || {};
                if (!(0, te.Gv)(p) && '' !== p)
                  try {
                    p = JSON.parse(p);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (p = {});
                  }
                var m = l[c] || {};
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: r,
                    id: r,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    n.title + ' (接口下发）',
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item object-content' },
                    B.createElement(
                      'div',
                      {
                        className: 'remote-dynamic-data-schema',
                        key: r + '-remote-dynamic-data',
                        id: r + '-remote-dynamic-data',
                      },
                      B.createElement(
                        'div',
                        {
                          className:
                            'wideScreen' === a
                              ? 'wide-screen-element-warp'
                              : 'mobile-screen-element-warp',
                          key: r + '-' + c,
                          id: r + '-' + c,
                        },
                        B.createElement(
                          'div',
                          { className: 'element-title' },
                          '数据源列表',
                        ),
                        B.createElement(
                          'div',
                          { className: 'content-item' },
                          B.createElement(
                            'div',
                            { className: 'form-item-box' },
                            B.createElement(
                              X.Select,
                              {
                                className: 'dynamic-data-select',
                                defaultValue: c,
                                onSelect: this.dynamicDataChange,
                              },
                              i &&
                                (0, te.cy)(i) &&
                                i.map(function (e) {
                                  return B.createElement(
                                    Be,
                                    { value: e.name, key: e.id },
                                    e.title,
                                  );
                                }),
                            ),
                          ),
                        ),
                      ),
                      c &&
                        p &&
                        Object.keys(p).length > 0 &&
                        B.createElement(
                          'div',
                          {
                            className:
                              ('wideScreen' === a
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp') +
                              ' element-title-card-warp',
                            key: r + '-' + c + '-params',
                            id: r + '-' + c + '-params',
                          },
                          B.createElement(
                            'div',
                            { className: 'element-title' },
                            '请求参数配置',
                          ),
                          B.createElement(
                            'div',
                            { className: 'content-item object-content' },
                            Object.keys(p).map(function (t) {
                              var n = p[t];
                              n.readOnly = !(!n.scope || 'static' !== n.scope);
                              var o = r + '-body-' + t,
                                i = s[n.scope];
                              return (
                                i &&
                                  n.title.indexOf(i) < 0 &&
                                  (n.title = n.title + '（' + i + '）'),
                                (n.default = n.value),
                                B.createElement(je, {
                                  pageScreen: a,
                                  jsonKey: t,
                                  nodeKey: o,
                                  targetJsonSchema: n,
                                  onChange: function (a) {
                                    e.paramsValueChange(t, a);
                                  },
                                  key: o,
                                })
                              );
                            }),
                          ),
                        ),
                      c &&
                        p &&
                        0 === Object.keys(p).length &&
                        B.createElement(
                          'div',
                          {
                            className:
                              'wideScreen' === a
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: r + '-' + c + '-empty',
                            id: r + '-' + c + '-empty',
                          },
                          B.createElement(
                            'div',
                            { className: 'element-title' },
                            '请求参数配置',
                          ),
                          B.createElement(
                            'div',
                            { className: 'content-item' },
                            B.createElement(
                              'span',
                              { className: 'warning-text' },
                              '无可配置的请求参数',
                            ),
                          ),
                        ),
                      c &&
                        B.createElement(Te, {
                          nodeKey: r + '-dataRoute',
                          mockData: m.respMock,
                          dataRoute: u,
                          onChange: this.dataRouteChange,
                          key: r + '-dataRoute',
                        }),
                      c &&
                        B.createElement(we.A, {
                          isReadOnly: !0,
                          isIgnoreWarn: !0,
                          jsonKey: 'filter',
                          nodeKey: r + '-config-params-filter-' + u,
                          keyRoute: o ? o + '-filter' : 'filter',
                          targetJsonSchema: {
                            title: '过滤器函数体',
                            default: 'return data;',
                          },
                          key: r + '-filter',
                        }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        Ve.propTypes = {
          pageScreen: W().any,
          keyRoute: W().any,
          nodeKey: W().string,
          curConfigData: W().object,
          configDataChange: W().func,
          dynamicDataList: W().array,
          dynamicDataObj: W().object,
          dynamicDataApiScopeList: W().object,
        };
        var Ie = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              dynamicDataList: e.JSONEditorStore.dynamicDataList,
              dynamicDataObj: e.JSONEditorStore.dynamicDataObj,
              dynamicDataApiScopeList:
                e.JSONEditorStore.dynamicDataApiScopeList,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
            };
          })((0, A.observer)(Ve)),
          Me = (__webpack_require__(759), X.Select.Option),
          Ae = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  (0, a.props.updateFormValueData)(e, t);
                }),
                (a.switchFilterBtn = function () {
                  var e = a.state.isShowFilter;
                  a.setState({ isShowFilter: !e });
                }),
                (a.tabChange = function (e) {
                  var t = a.props,
                    n = t.keyRoute,
                    r = t.triggerChangeAction;
                  a.handleValueChange(n + '-type', e),
                    setTimeout(function () {
                      r();
                    }, 100);
                }),
                (a.dynamicDataChange = function (e) {
                  var t = a.props,
                    n = t.keyRoute,
                    r = t.dynamicDataObj,
                    o = t.triggerChangeAction,
                    i = (0, ee.bQ)((0, $.toJS)(r[e]));
                  if (i) {
                    var l = {
                      id: i.id,
                      url: i.url,
                      method: i.method,
                      headers: i.headers,
                      options: i.options,
                      dataName: i.name,
                      body: i.body,
                      data: i.data,
                      filter: 'return data;',
                      dataRoute: '',
                    };
                    a.handleValueChange(n + '-config', l),
                      setTimeout(function () {
                        o();
                      }, 100);
                  }
                }),
                (a.dataRouteChange = function (e) {
                  var t = a.props,
                    n = t.keyRoute,
                    r = t.triggerChangeAction,
                    o = t.updateFormValueData;
                  if (e) {
                    o(n + '-config-dataRoute', e, !0);
                    var i = (0, Q.dataRoute2dataPath)(e);
                    a.handleValueChange(
                      n + '-config-filter',
                      'return ' + i + ';',
                    );
                  } else
                    o(n + '-config-dataRoute', '', !0),
                      a.handleValueChange(n + '-config-filter', 'return data;');
                  setTimeout(function () {
                    r();
                  }, 100);
                }),
                (a.paramsConfigChange = function (e, t) {
                  var n = a.props,
                    r = n.keyRoute,
                    o = n.triggerChangeAction,
                    i =
                      (0, n.getJSONDataByKeyRoute)(r + '-config-body-' + e) ||
                      {};
                  a.handleValueChange(
                    r + '-config-body-' + e,
                    Object.assign(i, t),
                  ),
                    setTimeout(function () {
                      o();
                    }, 100);
                }),
                (a.state = { isShowFilter: !1 }),
                (a.switchFilterBtn = a.switchFilterBtn.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.keyRoute,
                  n = t.jsonKey,
                  r = t.nodeKey,
                  o = t.indexRoute,
                  i = t.targetJsonSchema,
                  l = t.dynamicDataList,
                  s = t.dynamicDataObj,
                  c = t.dynamicDataApiScopeList,
                  u = t.getJSONDataByKeyRoute,
                  p = t.pageScreen,
                  m = this.state.isShowFilter,
                  d = i.type,
                  y = u(a) || {},
                  h = i.properties.type || {},
                  g = y.type || h.default,
                  S = y.config || {},
                  _ = S.dataName,
                  f = S.dataRoute,
                  E = S.body || {};
                if (!(0, te.Gv)(E) && '' !== E)
                  try {
                    E = JSON.parse(E);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (E = {});
                  }
                var v = s[_] || {},
                  b = i.properties.data || {};
                return B.createElement(
                  'div',
                  {
                    className1:
                      'mobile-screen-element-warp dynamic-data-schema',
                    className:
                      'wideScreen' === p
                        ? 'dynamic-data-schema wide-screen-element-warp'
                        : 'dynamic-data-schema mobile-screen-element-warp',
                    key: r,
                    id: r,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text' },
                      i.title,
                      i.showKey &&
                        B.createElement(
                          'span',
                          null,
                          '（',
                          (0, Q.truncate)(n, { length: 15 }),
                          '）',
                        ),
                    ),
                    i.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: i.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'dynamic-data-tab-radio-box' },
                      B.createElement(
                        'div',
                        { className: 'dynamic-data-tab-radio' },
                        B.createElement(
                          'div',
                          {
                            className:
                              'tab-radio ' +
                              ('local' === g ? 'tab-radio-active' : ''),
                            onClick: function () {
                              e.tabChange('local');
                            },
                          },
                          '本地数据',
                        ),
                        B.createElement(
                          'div',
                          {
                            className:
                              'tab-radio ' +
                              ('remote' === g ? 'tab-radio-active' : ''),
                            onClick: function () {
                              e.tabChange('remote');
                            },
                          },
                          '接口数据',
                        ),
                      ),
                    ),
                    B.createElement(
                      'div',
                      {
                        className:
                          'dynamic-dat-tabPane ' +
                          ('local' === g ? 'dynamic-dat-tabPane-active' : ''),
                      },
                      B.createElement(
                        'div',
                        { className: 'json-form-box' },
                        B.createElement(
                          X.Tooltip,
                          {
                            title: m
                              ? '点击隐藏数据过滤器'
                              : '点击显示数据过滤器',
                            placement: 'top',
                          },
                          B.createElement(ie.FilterOutlined, {
                            className: 'filter-btn',
                            onClick: this.switchFilterBtn,
                          }),
                        ),
                        B.createElement(Re, {
                          parentType: d,
                          jsonKey: 'data',
                          indexRoute: o ? o + '-2' : '2',
                          keyRoute: a ? a + '-data' : 'data',
                          nodeKey: r + '-data',
                          targetJsonSchema: b,
                          key: r + '-data',
                        }),
                        B.createElement(
                          'div',
                          { className: 'filter-func-box' },
                          m &&
                            B.createElement(we.A, {
                              isIgnoreWarn: !0,
                              parentType: d,
                              jsonKey: 'localFilter',
                              indexRoute: o ? o + '-3' : '3',
                              keyRoute: a ? a + '-localFilter' : 'localFilter',
                              nodeKey: r + '-localFilter',
                              targetJsonSchema: i.properties.localFilter,
                              key: r + '-localFilter',
                            }),
                        ),
                      ),
                    ),
                    B.createElement(
                      'div',
                      {
                        className:
                          'dynamic-dat-tabPane ' +
                          ('remote' === g ? 'dynamic-dat-tabPane-active' : ''),
                      },
                      B.createElement(
                        'div',
                        { className: 'json-form-box' },
                        B.createElement(
                          'div',
                          {
                            className:
                              'wideScreen' === p
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: r + '-' + _,
                            id: r + '-' + _,
                          },
                          B.createElement(
                            'div',
                            { className: 'element-title' },
                            '数据源列表',
                          ),
                          B.createElement(
                            'div',
                            { className: 'content-item' },
                            B.createElement(
                              'div',
                              { className: 'form-item-box' },
                              B.createElement(
                                X.Select,
                                {
                                  className: 'dynamic-data-select',
                                  defaultValue: _,
                                  onSelect: this.dynamicDataChange,
                                },
                                l &&
                                  (0, te.cy)(l) &&
                                  l.map(function (e) {
                                    return B.createElement(
                                      Me,
                                      { value: e.name, key: e.id },
                                      e.title,
                                    );
                                  }),
                              ),
                            ),
                          ),
                        ),
                        _ &&
                          E &&
                          Object.keys(E).length > 0 &&
                          B.createElement(
                            'div',
                            {
                              className:
                                ('wideScreen' === p
                                  ? 'wide-screen-element-warp'
                                  : 'mobile-screen-element-warp') +
                                ' element-title-card-warp',
                              key: r + '-' + _ + '-params',
                              id: r + '-' + _ + '-params',
                            },
                            B.createElement(
                              'div',
                              { className: 'element-title' },
                              '请求参数配置',
                            ),
                            B.createElement(
                              'div',
                              { className: 'content-item object-content' },
                              Object.keys(E).map(function (t) {
                                var n = (0, ee.bQ)(E[t]);
                                n.readOnly = !(
                                  !n.scope || 'static' !== n.scope
                                );
                                var o = a + '-config-body-' + t,
                                  i = c[n.scope];
                                if (
                                  (i &&
                                    'dynamic' !== n.scope &&
                                    (n.title = n.title + '（' + i + '）'),
                                  'dynamic' !== n.scope)
                                )
                                  return B.createElement(je, {
                                    pageScreen: p,
                                    jsonKey: t,
                                    keyRoute: o + '-value',
                                    nodeKey: o,
                                    targetJsonSchema: n,
                                    key: o,
                                  });
                                var l = r + '-' + _ + '-params-' + t;
                                return B.createElement(Ie, {
                                  pageScreen: p,
                                  nodeKey: l,
                                  keyRoute: a
                                    ? a + '-config-body-' + t
                                    : 'config-body-${paramKey}',
                                  curConfigData: n || {},
                                  configDataChange: function (a) {
                                    e.paramsConfigChange(t, a);
                                  },
                                  key: o,
                                });
                              }),
                            ),
                          ),
                        _ &&
                          E &&
                          0 === Object.keys(E).length &&
                          B.createElement(
                            'div',
                            {
                              className:
                                'wideScreen' === p
                                  ? 'wide-screen-element-warp'
                                  : 'mobile-screen-element-warp',
                              key: r + '-' + _ + '-empty',
                              id: r + '-' + _ + '-empty',
                            },
                            B.createElement(
                              'div',
                              { className: 'element-title' },
                              '请求参数配置',
                            ),
                            B.createElement(
                              'div',
                              { className: 'content-item' },
                              B.createElement(
                                'span',
                                { className: 'warning-text' },
                                '无可配置的请求参数',
                              ),
                            ),
                          ),
                        _ &&
                          B.createElement(Te, {
                            nodeKey: r + '-config-dataRoute-' + f,
                            mockData: v.respMock,
                            dataRoute: f,
                            onChange: this.dataRouteChange,
                            key: r + '-config-dataRoute',
                          }),
                        _ &&
                          B.createElement(we.A, {
                            isReadOnly: !0,
                            isIgnoreWarn: !0,
                            parentType: d,
                            jsonKey: 'filter',
                            indexRoute: o ? o + '-1-2' : '1-2',
                            keyRoute: a
                              ? a + '-config-filter'
                              : 'config-filter',
                            nodeKey: r + '-config-filter-' + f,
                            targetJsonSchema:
                              i.properties.config &&
                              i.properties.config.properties.filter,
                            key: r + '-config-filter',
                          }),
                      ),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        Ae.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          dynamicDataList: W().array,
          dynamicDataObj: W().object,
          dynamicDataApiScopeList: W().object,
        };
        var Le = (0, A.inject)(function (e) {
            return {
              triggerChange: e.JSONEditorStore.triggerChange,
              triggerChangeAction: e.JSONEditorStore.triggerChangeAction,
              pageScreen: e.JSONSchemaStore.pageScreen,
              dynamicDataList: e.JSONEditorStore.dynamicDataList,
              dynamicDataObj: e.JSONEditorStore.dynamicDataObj,
              dynamicDataApiScopeList:
                e.JSONEditorStore.dynamicDataApiScopeList,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Ae)),
          We = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).state = {
                  jsonView: !1,
                  isClosed: !1,
                }),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e,
                  t = this,
                  a = this.props,
                  n = a.keyRoute,
                  r = a.jsonKey,
                  o = a.nodeKey,
                  i = a.indexRoute,
                  l = a.targetJsonSchema,
                  s = a.pageScreen,
                  c = l.type,
                  u = this.state,
                  p = u.jsonView,
                  m = u.isClosed,
                  d = l.properties.type || {},
                  y = l.properties.register || {},
                  h = l.properties.actionFunc || {},
                  g = l.properties.trigger || {},
                  S = l.properties.eventData || {},
                  _ = d.default,
                  f = null == (e = l.showCodeViewBtn) || e;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === s
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: o,
                    id: o,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title:
                          'wideScreen' === s && l.title.length > 6
                            ? l.title
                            : '',
                      },
                      l.title,
                      l.showKey &&
                        B.createElement(
                          'span',
                          null,
                          '（',
                          (0, Q.truncate)(r, { length: 15 }),
                          '）',
                        ),
                    ),
                    l.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: l.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'element-title-card-warp content-item' },
                    B.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: function (e) {
                          t.setState({ isClosed: !m }),
                            e.preventDefault(),
                            e.stopPropagation();
                        },
                      },
                      B.createElement(
                        'span',
                        { className: 'title-text' },
                        '事件配置',
                      ),
                      m
                        ? B.createElement(ie.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : B.createElement(ie.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      f &&
                        B.createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              t.setState({ jsonView: !p }),
                                e.preventDefault(),
                                e.stopPropagation();
                            },
                          },
                          B.createElement(
                            X.Tooltip,
                            { title: p ? '关闭源码模式' : '开启源码模式' },
                            B.createElement(Ee, {
                              className: p ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                    ),
                    B.createElement(
                      'div',
                      {
                        className:
                          'content-item object-content ' +
                          (p ? 'json-view-array' : '') +
                          ' ' +
                          (m ? 'closed' : ''),
                      },
                      !p &&
                        'on' === _ &&
                        B.createElement(
                          B.Fragment,
                          null,
                          y &&
                            B.createElement(je, {
                              parentType: c,
                              jsonKey: 'register',
                              indexRoute: i ? i + '-1' : '1',
                              keyRoute: n ? n + '-register' : 'register',
                              nodeKey: o + '-register',
                              targetJsonSchema: y,
                              key: o + '-register',
                            }),
                          h &&
                            B.createElement(we.A, {
                              parentType: c,
                              jsonKey: 'actionFunc',
                              indexRoute: i ? i + '-2' : '2',
                              keyRoute: n ? n + '-actionFunc' : 'actionFunc',
                              nodeKey: o + '-actionFunc',
                              targetJsonSchema: h,
                              key: o + '-actionFunc',
                            }),
                        ),
                      !p &&
                        'emit' === _ &&
                        B.createElement(
                          B.Fragment,
                          null,
                          g &&
                            B.createElement(je, {
                              parentType: c,
                              jsonKey: 'trigger',
                              indexRoute: i ? i + '-1' : '1',
                              keyRoute: n ? n + '-trigger' : 'trigger',
                              nodeKey: o + '-trigger',
                              targetJsonSchema: g,
                              key: o + '-trigger',
                            }),
                          S &&
                            B.createElement(Re, {
                              parentType: c,
                              jsonKey: 'eventData',
                              indexRoute: i ? i + '-2' : '2',
                              keyRoute: n ? n + '-eventData' : 'eventData',
                              nodeKey: o + '-eventData',
                              targetJsonSchema: S,
                              key: o + '-eventData',
                            }),
                        ),
                      p && B.createElement(pe, this.props),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        We.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var qe = (0, A.inject)(function (e) {
            return {
              triggerChange: e.JSONEditorStore.triggerChange,
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(We)),
          Fe = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = e.target.value,
                    n = a.props,
                    r = n.keyRoute;
                  (0, n.updateFormValueData)(
                    r ? r + '-unit' : 'unit',
                    Number(t),
                  );
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.jsonKey,
                  n = e.nodeKey,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(t),
                  l = r.readOnly || !1,
                  s = r.properties.unit,
                  c = i.quantity,
                  u = B.createElement('span', null, 'percent' === c ? '%' : c),
                  p = (0, ee.y8)(r.type);
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (p ? 'two-col-element-warp' : ''),
                    key: n,
                    id: n,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      l ? '[只读]' : '',
                    ),
                    B.createElement(
                      X.Tooltip,
                      { title: r.description, placement: 'top' },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (p || 'wideScreen' === o) &&
                            r.title.length > (l ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.InputNumber, {
                        style: { display: 'inline-block', width: '120px' },
                        addonAfter: u,
                        disabled: l,
                        placeholder:
                          s.placeholder ||
                          r.placeholder ||
                          '请输入' + s.title ||
                          0,
                        defaultValue: i.unit || s.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        Fe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var Ue = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Fe)),
          ze =
            (__webpack_require__(928),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).layoutStyleObj = {
                    top: '',
                    right: '',
                    bottom: '',
                    left: '',
                    quantity: 'px',
                  }),
                  (a.initBoxStyle = function () {
                    var e = a.props,
                      t = e.keyRoute,
                      n = e.targetJsonSchema,
                      r = (0, e.getJSONDataByKeyRoute)(t),
                      o = n.propertyOrder[0],
                      i = n.properties[o],
                      l = r.quantity,
                      s = r.unit || i.default;
                    if (
                      ((a.layoutStyleObj = {
                        top: '',
                        right: '',
                        bottom: '',
                        left: '',
                        quantity: l,
                      }),
                      s)
                    ) {
                      var c = s.split(' ');
                      1 === c.length
                        ? c[0] && c[0].indexOf(l) >= 0
                          ? ((a.layoutStyleObj.top = c[0]),
                            (a.layoutStyleObj.right = c[0]),
                            (a.layoutStyleObj.bottom = c[0]),
                            (a.layoutStyleObj.left = c[0]))
                          : 'auto' === c[0]
                            ? ((a.layoutStyleObj.top = 'auto'),
                              (a.layoutStyleObj.right = 'auto'),
                              (a.layoutStyleObj.bottom = 'auto'),
                              (a.layoutStyleObj.left = 'auto'))
                            : ((a.layoutStyleObj.top = '' + c[0] + l),
                              (a.layoutStyleObj.right = '' + c[0] + l),
                              (a.layoutStyleObj.bottom = '' + c[0] + l),
                              (a.layoutStyleObj.left = '' + c[0] + l))
                        : ((a.layoutStyleObj.top = c[0]),
                          (a.layoutStyleObj.right = c[1]),
                          (a.layoutStyleObj.bottom = c[2] || c[0]),
                          (a.layoutStyleObj.left = c[3] || c[1]));
                    } else
                      0 === s
                        ? ((a.layoutStyleObj.top = '' + s + l),
                          (a.layoutStyleObj.right = '' + s + l),
                          (a.layoutStyleObj.bottom = '' + s + l),
                          (a.layoutStyleObj.left = '' + s + l))
                        : ((a.layoutStyleObj.top = 'auto'),
                          (a.layoutStyleObj.right = 'auto'),
                          (a.layoutStyleObj.bottom = 'auto'),
                          (a.layoutStyleObj.left = 'auto'));
                  }),
                  (a.setLayoutBoxStyle = function (e, t, n) {
                    t
                      ? a.linkLayoutBoxStyle(e)
                      : ((a.layoutStyleObj[n] =
                          'auto' === e
                            ? 'auto'
                            : e
                              ? '' + e + a.layoutStyleObj.quantity
                              : 0 === e || '0' === e
                                ? '0' + a.layoutStyleObj.quantity
                                : 'auto'),
                        a.updateBoxStyleState());
                  }),
                  (a.linkLayoutBoxStyle = function (e) {
                    var t;
                    (t =
                      'auto' === e
                        ? 'auto'
                        : 0 === e
                          ? '0' + a.layoutStyleObj.quantity
                          : e
                            ? '' + e + a.layoutStyleObj.quantity
                            : 'auto'),
                      (a.layoutStyleObj.top = t),
                      (a.layoutStyleObj.right = t),
                      (a.layoutStyleObj.bottom = t),
                      (a.layoutStyleObj.left = t),
                      a.updateBoxStyleState();
                  }),
                  (a.getStyleValNum = function (e) {
                    if ('auto' === e) return '';
                    if (e === '0' + a.layoutStyleObj.quantity || '0' === e)
                      return 0;
                    if (e) {
                      var t = e.indexOf(a.layoutStyleObj.quantity);
                      return t > -1 ? parseInt(e.substring(0, t)) : parseInt(e);
                    }
                    return 0;
                  }),
                  (a.updateBoxStyleState = function () {
                    var e = a.props,
                      t = e.keyRoute,
                      n = e.updateFormValueData,
                      r = a.state.renderAction;
                    n(
                      t ? t + '-unit' : 'unit',
                      a.layoutStyleObj.top +
                        ' ' +
                        a.layoutStyleObj.right +
                        ' ' +
                        a.layoutStyleObj.bottom +
                        ' ' +
                        a.layoutStyleObj.left,
                    ),
                      a.setState({ renderAction: !r });
                  }),
                  (a.state = { layoutStyleLock: !1, renderAction: !1 }),
                  (a.updateBoxStyleState = a.updateBoxStyleState.bind(a)),
                  (a.initBoxStyle = a.initBoxStyle.bind(a)),
                  a
                );
              }
              T()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  this.initBoxStyle();
                }),
                (a.componentWillReceiveProps = function (e) {
                  this.initBoxStyle();
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.nodeKey,
                    n = t.jsonKey,
                    r = t.targetJsonSchema,
                    o = t.pageScreen,
                    i = this.state,
                    l = i.renderAction,
                    s = i.layoutStyleLock,
                    c = r.readOnly || !1;
                  return B.createElement(
                    'div',
                    {
                      className:
                        ('wideScreen' === o
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp') +
                        ' ' +
                        (l ? 'render-mark' : ''),
                      id: a,
                    },
                    B.createElement(
                      'div',
                      { className: 'element-title' },
                      B.createElement(
                        'span',
                        { className: 'title-text warning-text' },
                        c ? '[只读]' : '',
                      ),
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              'wideScreen' === o && r.title.length > (c ? 4 : 6)
                                ? r.title
                                : '',
                          },
                          r.title,
                          r.showKey &&
                            B.createElement(
                              'span',
                              null,
                              '（',
                              (0, Q.truncate)(n, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                    ),
                    B.createElement(
                      'div',
                      { className: 'content-item layout-box-style-container' },
                      B.createElement(
                        'div',
                        { className: 'center-box' },
                        B.createElement(
                          X.Tooltip,
                          {
                            placement: 'top',
                            title: s ? '点击解锁联动' : '点击联动',
                          },
                          B.createElement('div', {
                            className: s ? 'lock-icon' : 'lock-icon unlock',
                            onClick: function () {
                              e.setState({ layoutStyleLock: !s });
                            },
                          }),
                        ),
                      ),
                      B.createElement(X.InputNumber, {
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
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'top');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'top');
                        },
                      }),
                      B.createElement(X.InputNumber, {
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
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'right');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'right');
                        },
                      }),
                      B.createElement(X.InputNumber, {
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
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'bottom');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'bottom');
                        },
                      }),
                      B.createElement(X.InputNumber, {
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
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'left');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, s, 'left');
                        },
                      }),
                    ),
                  );
                }),
                t
              );
            })(B.PureComponent));
        ze.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var He = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(ze)),
          Ge = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = e.target.value,
                    n = a.props,
                    r = n.keyRoute;
                  (0, n.updateFormValueData)(r, t);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.jsonKey,
                  n = e.keyRoute,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(n),
                  l = r.options;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: t,
                    id: t,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      X.Tooltip,
                      {
                        title: 'wideScreen' === o ? r.description : '',
                        placement: 'top',
                      },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o && r.title.length > 6
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      r.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(
                        X.Radio.Group,
                        {
                          style: { display: 'inline-block' },
                          onChange: this.handleValueChange,
                          defaultValue: i || r.default,
                          disabled: r.readOnly,
                        },
                        l &&
                          l.length > 0 &&
                          l.map(function (e, a) {
                            var n = e.label || e.name,
                              r = t + '-radio-' + n;
                            return B.createElement(
                              X.Radio,
                              { value: e.value, key: r },
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
          })(B.PureComponent);
        Ge.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var $e = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Ge)),
          Qe = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = a.props,
                    n = t.keyRoute;
                  (0, t.updateFormValueData)(n, e);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.jsonKey,
                  n = e.keyRoute,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(n),
                  l = r.options;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: t,
                    id: t,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      X.Tooltip,
                      {
                        title: 'wideScreen' === o ? r.description : '',
                        placement: 'top',
                      },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o && r.title.length > 6
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      r.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(
                        X.Checkbox.Group,
                        {
                          style: { display: 'inline-block' },
                          onChange: this.handleValueChange,
                          defaultValue: i || r.default,
                          disabled: r.readOnly,
                        },
                        l &&
                          l.length > 0 &&
                          l.map(function (e, a) {
                            var n = e.label || e.name,
                              r = t + '-select-' + n;
                            return B.createElement(
                              X.Checkbox,
                              { value: e.value, key: r },
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
          })(B.PureComponent);
        Qe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var Ye = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Qe)),
          Ze = X.Input.TextArea,
          Xe = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = e.target.value,
                    n = a.props,
                    r = n.keyRoute;
                  (0, n.updateFormValueData)(r, t);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.jsonKey,
                  n = e.nodeKey,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(t),
                  l = r.readOnly || !1,
                  s = r.isRequired || !1;
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp container-warp'
                        : 'mobile-screen-element-warp',
                    key: n,
                    id: n,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      l ? '[只读]' : '',
                    ),
                    B.createElement(
                      X.Tooltip,
                      {
                        title: 'wideScreen' === o ? r.description : '',
                        placement: 'top',
                      },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o &&
                            r.title &&
                            r.title.length > (l ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      r.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(Ze, {
                        style: { display: 'inline-block' },
                        rows: 4,
                        disabled: l,
                        required: s,
                        placeholder: r.placeholder || '请输入' + r.title,
                        defaultValue: i || r.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        Xe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var et = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Xe)),
          tt = require('braft-editor'),
          at = __webpack_require__.n(tt),
          nt = require('braft-extensions/dist/color-picker'),
          rt = __webpack_require__.n(nt),
          ot =
            (require('braft-extensions/dist/color-picker.css'),
            require('braft-extensions/dist/table')),
          it = __webpack_require__.n(ot);
        require('braft-extensions/dist/table.css'),
          require('braft-editor/dist/index.css'),
          __webpack_require__(632),
          at().use([rt()({ theme: 'light' })]),
          at().use(
            it()({
              defaultColumns: 3,
              defaultRows: 3,
              withDropdown: !1,
              columnResizable: !1,
              exportAttrString: 'border="1" style="border-collapse: collapse"',
            }),
          );
        var lt = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).handleEditorChange = function (e) {
                var t = a.props,
                  n = t.keyRoute;
                (0, t.updateFormValueData)(n, e.toHTML());
              }),
              (a.state = {
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
              (a.handleEditorChange = a.handleEditorChange.bind(a)),
              a
            );
          }
          T()(t, e);
          var a = t.prototype;
          return (
            (a.componentWillMount = function () {
              me.x.call(this),
                this.props.pageScreen &&
                  'wideScreen' === this.props.pageScreen &&
                  this.setState({ isClosed: !1 });
            }),
            (a.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute
                ? me.x.call(this, e.keyRoute)
                : e.pageScreen !== this.props.pageScreen &&
                  e.pageScreen &&
                  'wideScreen' === e.pageScreen &&
                  this.setState({ isClosed: !1 });
            }),
            (a.render = function () {
              var e = this,
                t = this.props,
                a = t.keyRoute,
                n = t.jsonKey,
                r = t.nodeKey,
                o = t.targetJsonSchema,
                i = t.pageScreen,
                l = t.getJSONDataByKeyRoute,
                s = this.state.isClosed,
                c = l(a),
                u = at().createEditorState(c),
                p = o.readOnly || !1;
              return B.createElement(
                'div',
                {
                  className:
                    'wideScreen' === i
                      ? 'text-editor-box wide-screen-element-warp'
                      : 'text-editor-box mobile-screen-element-warp',
                  key: r,
                  id: r,
                },
                B.createElement(
                  'div',
                  {
                    className: 'element-title',
                    onClick: function (t) {
                      e.setState({ isClosed: !s }),
                        t.preventDefault(),
                        t.stopPropagation();
                    },
                  },
                  B.createElement(
                    'span',
                    { className: 'title-text warning-text' },
                    p ? '[只读]' : '',
                  ),
                  B.createElement(
                    'span',
                    {
                      className: 'title-text',
                      title:
                        'wideScreen' === i &&
                        o.title &&
                        o.title.length > (p ? 4 : 6)
                          ? o.title
                          : '',
                    },
                    o.title,
                    o.showKey &&
                      B.createElement(
                        'span',
                        null,
                        '（',
                        (0, Q.truncate)(n, { length: 15 }),
                        '）',
                      ),
                  ),
                  o.description &&
                    B.createElement(
                      X.Tooltip,
                      { title: o.description, placement: 'top' },
                      B.createElement(ie.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                  s
                    ? B.createElement(ie.RightOutlined, {
                        className: 'close-operate-btn',
                      })
                    : B.createElement(ie.DownOutlined, {
                        className: 'close-operate-btn',
                      }),
                ),
                B.createElement(
                  'div',
                  { className: 'content-item ' + (s ? 'closed' : '') },
                  B.createElement(
                    'div',
                    { className: 'form-item-box' },
                    B.createElement(at(), {
                      key: r + '-textEditor',
                      controls:
                        'wideScreen' === i
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
                      defaultValue: u,
                      readOnly: p,
                      placeholder: o.placeholder || '请输入' + o.title,
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
        })(B.PureComponent);
        lt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          pageScreen: W().any,
        };
        var st = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(lt)),
          ct =
            (__webpack_require__(741),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    var t = a.props,
                      n = t.keyRoute,
                      r = t.targetJsonSchema,
                      o = t.updateFormValueData;
                    e < r.minimum
                      ? X.message.warning(
                          '小于设定的最小数值' + r.minimum + '，请重新输入。',
                        )
                      : e > r.maximum
                        ? X.message.warning(
                            '超过设定的最大数值' + r.maximum + '，请重新输入。',
                          )
                        : o(n, e);
                  }),
                  (a.numberChange = function (e, t) {
                    var n = 0;
                    t && (n = t),
                      'plus' === e ? (n += 1) : 'minus' === e && (n -= 1),
                      a.handleValueChange(n),
                      a.setState({ renderTime: new Date().getTime() });
                  }),
                  (a.state = { renderTime: new Date().getTime() }),
                  (a.handleValueChange = a.handleValueChange.bind(a)),
                  a
                );
              }
              T()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  me.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    me.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.keyRoute,
                    n = t.jsonKey,
                    r = t.nodeKey,
                    o = t.targetJsonSchema,
                    i = t.pageScreen,
                    l = t.getJSONDataByKeyRoute,
                    s = this.state.renderTime,
                    c = l(a),
                    u = o.readOnly || !1,
                    p = o.isRequired || !1,
                    m = (0, ee.y8)(o.type);
                  return B.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === i
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp ' +
                            (m ? 'two-col-element-warp' : ''),
                      key: r + '-' + s,
                      id: r,
                    },
                    B.createElement(
                      'div',
                      { className: 'element-title' },
                      B.createElement(
                        'span',
                        { className: 'title-text warning-text' },
                        u ? '[只读]' : '',
                      ),
                      B.createElement(
                        X.Tooltip,
                        { title: o.description, placement: 'top' },
                        B.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              (m || 'wideScreen' === i) &&
                              o.title.length > (u ? 4 : 6)
                                ? o.title
                                : '',
                          },
                          o.title,
                          o.showKey &&
                            B.createElement(
                              'span',
                              null,
                              '（',
                              (0, Q.truncate)(n, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                    ),
                    B.createElement(
                      'div',
                      { className: 'content-item' },
                      B.createElement(
                        'div',
                        { className: 'form-item-box' },
                        B.createElement(
                          'div',
                          { className: 'input-number-wrap' },
                          B.createElement(
                            'div',
                            {
                              className: 'number-btn minus',
                              title: '点击减1',
                              onClick: function () {
                                e.numberChange(
                                  'minus',
                                  (0, ee.GT)(c) ? c : o.default,
                                );
                              },
                            },
                            '-',
                          ),
                          B.createElement(X.InputNumber, {
                            className: 'number-cont',
                            style: { display: 'inline-block' },
                            disabled: u,
                            required: p,
                            placeholder: o.placeholder || '请输入' + o.title,
                            min: o.minimum || 0,
                            max: o.maximum || 1e6,
                            defaultValue: (0, ee.GT)(c) ? c : o.default,
                            onChange: this.handleValueChange,
                          }),
                          B.createElement(
                            'div',
                            {
                              className: 'number-btn plus',
                              title: '点击加1',
                              onClick: function () {
                                e.numberChange(
                                  'plus',
                                  (0, ee.GT)(c) ? c : o.default,
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
            })(B.PureComponent));
        ct.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var ut = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(ct)),
          pt = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = a.props,
                    n = t.keyRoute;
                  (0, t.updateFormValueData)(n, e);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.jsonKey,
                  n = e.nodeKey,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(t),
                  l = (0, ee.y8)(r.type);
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (l ? 'two-col-element-warp' : ''),
                    key: n,
                    id: n,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      X.Tooltip,
                      { title: r.description, placement: 'top' },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (l || 'wideScreen' === o) && r.title.length > 6
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.Switch, {
                        style: { display: 'inline-block' },
                        defaultChecked: void 0 !== i ? i : r.default,
                        checkedChildren: 'true',
                        unCheckedChildren: 'false',
                        onChange: this.handleValueChange,
                        disabled: r.readOnly,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        pt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var mt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(pt)),
          dt = require('moment'),
          yt = __webpack_require__.n(dt),
          ht = {
            'date-time': 'YYYY-MM-DD HH:mm',
            date: 'YYYY-MM-DD',
            time: 'HH:mm',
          },
          gt = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var n = a.props,
                    r = n.keyRoute;
                  (0, n.updateFormValueData)(r, t);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.jsonKey,
                  n = e.nodeKey,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = e.getJSONDataByKeyRoute,
                  l = r.type,
                  s = r.readOnly || !1,
                  c = r.isRequired || !1,
                  u = ht[l] || ht[0],
                  p = i(t) || r.default,
                  m = (0, ee.y8)(l);
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (m ? 'two-col-element-warp' : ''),
                    key: n,
                    id: n,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      s ? '[只读]' : '',
                    ),
                    B.createElement(
                      X.Tooltip,
                      { title: r.description, placement: 'top' },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (m || 'wideScreen' === o) &&
                            r.title.length > (s ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.DatePicker, {
                        style: { display: 'inline-block' },
                        disabled: s,
                        required: c,
                        showTime: 'date-time' === l,
                        format: u,
                        placeholder: r.placeholder || '请输入' + r.title,
                        defaultValue: p && yt()(p, u),
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        gt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var St = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(gt)),
          _t = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var n = a.props,
                    r = n.keyRoute;
                  (0, n.updateFormValueData)(r, t);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.jsonKey,
                  n = e.keyRoute,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(n) || r.default,
                  l = r.readOnly || !1,
                  s = r.isRequired || !1,
                  c = (0, ee.y8)(r.type);
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (c ? 'two-col-element-warp' : ''),
                    key: t,
                    id: t,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      l ? '[只读]' : '',
                    ),
                    B.createElement(
                      X.Tooltip,
                      { title: r.description, placement: 'top' },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (c || 'wideScreen' === o) &&
                            r.title.length > (l ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box' },
                      B.createElement(X.TimePicker, {
                        style: { display: 'inline-block' },
                        disabled: l,
                        required: s,
                        placeholder: r.placeholder || '请输入' + r.title,
                        defaultValue: i && yt()(i, 'HH:mm'),
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(B.PureComponent);
        _t.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var ft = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(_t)),
          Et = require('react-color'),
          vt =
            (__webpack_require__(220),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    var t = e.rgb,
                      n =
                        'rgba(' + t.r + ',' + t.g + ',' + t.b + ',' + t.a + ')',
                      r = a.props,
                      o = r.keyRoute;
                    (0, r.updateFormValueData)(o, n),
                      a.setState({ renderState: !a.state.renderState });
                  }),
                  (a.deleteColor = function () {
                    var e = a.props,
                      t = e.keyRoute;
                    (0, e.updateFormValueData)(t, 'initial'),
                      X.message.success('已移除当前设置的颜色值'),
                      a.setState({ renderState: !a.state.renderState });
                  }),
                  (a.state = { renderState: !1, displayColorPicker: !1 }),
                  (a.handleValueChange = a.handleValueChange.bind(a)),
                  a
                );
              }
              T()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  me.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    me.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.keyRoute,
                    n = t.jsonKey,
                    r = t.nodeKey,
                    o = t.targetJsonSchema,
                    i = t.pageScreen,
                    l = t.getJSONDataByKeyRoute,
                    s = this.state,
                    c = s.renderState,
                    u = s.displayColorPicker,
                    p = l(a),
                    m = (0, ee.y8)(o.type),
                    d = B.createElement(Et.SketchPicker, {
                      className: 'color-sketch-picker',
                      key: r + '-SketchPicker',
                      color: p || o.default,
                      onChange: this.handleValueChange,
                    });
                  return B.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === i
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp ' +
                            (m ? 'two-col-element-warp' : ''),
                      key: r,
                      id: r,
                    },
                    B.createElement(
                      'div',
                      { className: 'element-title' },
                      B.createElement(
                        X.Tooltip,
                        { title: o.description, placement: 'top' },
                        B.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              (m || 'wideScreen' === i) && o.title.length > 6
                                ? o.title
                                : '',
                          },
                          o.title,
                          o.showKey &&
                            B.createElement(
                              'span',
                              null,
                              '（',
                              (0, Q.truncate)(n, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                    ),
                    B.createElement(
                      'div',
                      { className: 'content-item' },
                      B.createElement(
                        'div',
                        { className: 'form-item-box render-dom-' + c },
                        B.createElement(
                          'div',
                          {
                            className:
                              'color-btn-wrap color-item-form ' +
                              (u ? 'selected' : ''),
                            onClick: function () {
                              e.setState({ displayColorPicker: !u });
                            },
                          },
                          B.createElement(
                            X.Popover,
                            {
                              content: d,
                              title: '颜色选择器',
                              trigger: 'click',
                            },
                            B.createElement('button', {
                              className: 'ant-input color-btn',
                              style: { backgroundColor: p || o.default },
                            }),
                          ),
                          B.createElement(
                            X.Tooltip,
                            { title: '点击移除当前颜色值', placement: 'top' },
                            B.createElement(ie.CloseOutlined, {
                              className: 'delete-bgColor-btn',
                              onClick: function () {
                                e.deleteColor();
                              },
                            }),
                          ),
                          B.createElement('span', { className: 'arrow' }),
                        ),
                      ),
                    ),
                  );
                }),
                t
              );
            })(B.PureComponent));
        vt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var bt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(vt)),
          Ot =
            (require('ace-builds/src-noconflict/mode-html'),
            __webpack_require__(953),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).handleValueChange = function (
                    e,
                  ) {
                    var t = a.props,
                      n = t.keyRoute;
                    (0, t.updateFormValueData)(n, e);
                  }),
                  (a.state = { isShowWarn: !1, warnText: '' }),
                  (a.handleValueChange = a.handleValueChange.bind(a)),
                  a
                );
              }
              T()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  me.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    me.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.nodeKey,
                    n = t.jsonKey,
                    r = t.keyRoute,
                    o = t.targetJsonSchema,
                    i = t.pageScreen,
                    l = t.getJSONDataByKeyRoute,
                    s = this.state,
                    c = s.isShowWarn,
                    u = s.warnText,
                    p = o.readOnly || !1,
                    m = l(r);
                  return (
                    (m = void 0 !== m ? m : o.default || '<p>hello</p>'),
                    (0, te.Gv)(m) && (m = JSON.stringify(m, null, 2)),
                    B.createElement(
                      'div',
                      {
                        className:
                          'wideScreen' === i
                            ? 'wide-screen-element-warp container-warp'
                            : 'mobile-screen-element-warp',
                        key: a,
                        id: a,
                      },
                      B.createElement(
                        'div',
                        { className: 'element-title' },
                        B.createElement(
                          'span',
                          { className: 'title-text warning-text' },
                          p ? '[只读]' : '',
                        ),
                        B.createElement(
                          X.Tooltip,
                          {
                            title: 'wideScreen' === i ? o.description : '',
                            placement: 'top',
                          },
                          B.createElement(
                            'span',
                            {
                              className: 'title-text',
                              title:
                                'wideScreen' === i &&
                                o.title &&
                                o.title.length > (p ? 4 : 6)
                                  ? o.title
                                  : '',
                            },
                            o.title,
                            o.showKey &&
                              B.createElement(
                                'span',
                                null,
                                '（',
                                (0, Q.truncate)(n, { length: 15 }),
                                '）',
                              ),
                          ),
                        ),
                        'mobileScreen' === i &&
                          o.description &&
                          B.createElement(
                            X.Tooltip,
                            { title: o.description, placement: 'top' },
                            B.createElement(ie.InfoCircleOutlined, {
                              className: 'info-icon',
                            }),
                          ),
                      ),
                      B.createElement(
                        'div',
                        { className: 'content-item' },
                        c &&
                          B.createElement(
                            'div',
                            { className: 'warning-box code-area-item' },
                            B.createElement(
                              'div',
                              { className: 'warning-img' },
                              'X',
                            ),
                            B.createElement(
                              'div',
                              { className: 'warning-text' },
                              u,
                            ),
                          ),
                        B.createElement(se(), {
                          id: 'code_area_ace',
                          key: a + '-ace',
                          className: 'code-area-item',
                          value: m,
                          mode: 'html',
                          theme: 'monokai',
                          name: 'JS_CODE_EDIT',
                          fontSize: 14,
                          showPrintMargin: !0,
                          showGutter: !0,
                          highlightActiveLine: !0,
                          readOnly: p,
                          minLines: 5,
                          maxLines: 30,
                          width: '100%',
                          onChange: function (t) {
                            try {
                              e.handleValueChange(t),
                                e.setState({ isShowWarn: !1 });
                            } catch (a) {
                              e.handleValueChange(t),
                                e.setState({
                                  warnText: a.message,
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
                    )
                  );
                }),
                t
              );
            })(B.PureComponent));
        Ot.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var Nt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Ot)),
          Dt = (__webpack_require__(546), X.Select.Option),
          Rt = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleValueChange = function (
                  e,
                ) {
                  var t = a.props,
                    n = t.keyRoute;
                  (0, t.updateFormValueData)(n, e);
                }),
                (a.handleValueChange = a.handleValueChange.bind(a)),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.jsonKey,
                  n = e.keyRoute,
                  r = e.targetJsonSchema,
                  o = e.pageScreen,
                  i = (0, e.getJSONDataByKeyRoute)(n),
                  l = r.options,
                  s = (0, ee.y8)(r.type);
                return B.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (s ? 'two-col-element-warp' : ''),
                    key: t,
                    id: t,
                  },
                  B.createElement(
                    'div',
                    { className: 'element-title' },
                    B.createElement(
                      X.Tooltip,
                      {
                        title: 'wideScreen' === o ? r.description : '',
                        placement: 'top',
                      },
                      B.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o && r.title.length > 6
                              ? r.title
                              : '',
                        },
                        r.title,
                        r.showKey &&
                          B.createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      r.description &&
                      B.createElement(
                        X.Tooltip,
                        { title: r.description, placement: 'top' },
                        B.createElement(ie.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  B.createElement(
                    'div',
                    { className: 'content-item' },
                    B.createElement(
                      'div',
                      { className: 'form-item-box select-box' },
                      B.createElement(
                        X.Select,
                        {
                          showSearch: !0,
                          mode: r.multiple ? 'multiple' : void 0,
                          style: { display: 'inline-block', minWidth: '120px' },
                          onChange: this.handleValueChange,
                          defaultValue: i || r.default,
                          disabled: r.readOnly,
                        },
                        l &&
                          l.length > 0 &&
                          l.map(function (e, a) {
                            var n = e.label || e.name,
                              r = t + '-select-' + n;
                            return B.createElement(
                              Dt,
                              { value: e.value, key: r },
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
          })(B.PureComponent);
        Rt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        };
        var wt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Rt)),
          Jt = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).state = {
                  jsonView: !1,
                  isClosed: !1,
                }),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e,
                  t = this,
                  a = this.props,
                  n = a.indexRoute,
                  r = a.jsonKey,
                  o = a.nodeKey,
                  i = a.keyRoute,
                  l = a.pageScreen,
                  s = a.targetJsonSchema,
                  c = a.isArrayItem,
                  u = (a.arrIndex, a.isStructuredSchema),
                  p = a.getJSONDataByKeyRoute,
                  m = a.keyRoute2indexRoute,
                  d = a.updateFormValueData,
                  y = this.state,
                  h = y.jsonView,
                  g = y.isClosed,
                  S = this.props.options || {},
                  _ = u,
                  f = null == (e = s.showCodeViewBtn) || e,
                  E = p(i),
                  v = o + '-' + E.type + '-' + E.valueType,
                  b = S.metaContentKeyList || [],
                  O = S.globalMetaConfig || [];
                return V().createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === l
                        ? 'object-schema-warp wide-screen-element-warp'
                        : 'object-schema-warp mobile-screen-element-warp',
                    key: v,
                    id: o,
                  },
                  !_ &&
                    !c &&
                    V().createElement(
                      'div',
                      { className: 'element-title' },
                      V().createElement(
                        X.Tooltip,
                        { title: s.description, placement: 'top' },
                        V().createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              'wideScreen' === l && s.title.length > 6
                                ? s.title
                                : '',
                          },
                          s.title,
                          s.showKey &&
                            V().createElement(
                              'span',
                              null,
                              '（',
                              (0, Q.truncate)(r, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                    ),
                  V().createElement(
                    'div',
                    { className: 'element-title-card-warp content-item' },
                    !_ &&
                      !c &&
                      V().createElement(
                        'div',
                        {
                          className: 'element-title',
                          onClick: function (e) {
                            t.setState({ isClosed: !g }),
                              e.preventDefault(),
                              e.stopPropagation();
                          },
                        },
                        V().createElement(
                          'span',
                          { className: 'title-text' },
                          '动态配置',
                        ),
                        g
                          ? V().createElement(ie.RightOutlined, {
                              className: 'close-operate-btn',
                            })
                          : V().createElement(ie.DownOutlined, {
                              className: 'close-operate-btn',
                            }),
                        f &&
                          V().createElement(
                            'div',
                            {
                              className: 'display-source-btn',
                              onClick: function (e) {
                                t.setState({ jsonView: !h }),
                                  e.preventDefault(),
                                  e.stopPropagation();
                              },
                            },
                            V().createElement(
                              X.Tooltip,
                              { title: h ? '关闭源码模式' : '开启源码模式' },
                              V().createElement(Ee, {
                                className: h ? 'info-icon active' : 'info-icon',
                              }),
                            ),
                          ),
                      ),
                    V().createElement(
                      'div',
                      {
                        className:
                          'content-item ' +
                          (_ || c ? '' : 'object-content') +
                          ' ' +
                          (h ? 'json-view-array' : '') +
                          ' ' +
                          (g ? 'closed' : ''),
                      },
                      !h &&
                        s.propertyOrder &&
                        s.propertyOrder.map(function (e, t) {
                          var a = n ? n + '-' + t : '' + t,
                            r = i ? i + '-' + e : '' + e,
                            l = e,
                            c = (0, $.toJS)(s.properties[l]),
                            u = c.type,
                            y = o + '-' + u + '-' + l,
                            h = ![
                              'description',
                              'valueType',
                              'range',
                              'value',
                            ].includes(l);
                          if (
                            ('description' !== l && 'valueType' !== l) ||
                            ('ContentStaticConfig' !== E.type &&
                              'ResourceCenter' !== E.type)
                          )
                            if ('range' === l) {
                              if (
                                ('select' !== E.valueType ||
                                  ('ContentStaticConfig' !== E.type &&
                                    'ResourceCenter' !== E.type) ||
                                  (h = !0),
                                h)
                              ) {
                                var g = s.properties.value;
                                ['select', 'radio', 'checkboxes'].includes(
                                  g.type,
                                ) &&
                                  g.options &&
                                  g.options.length > 0 &&
                                  (c.options = (0, ee.bQ)(g.options));
                              }
                            } else
                              'value' !== l ||
                                ('DevDefaults' !== E.type &&
                                  'RuntimeConst' !== E.type &&
                                  'Content' !== E.type) ||
                                (h = !0);
                          else {
                            h = !0;
                            var S = s.properties.value;
                            'valueType' !== l ||
                              ['select', 'radio', 'checkboxes'].includes(
                                S.type,
                              ) ||
                              ((c.default = 'string'),
                              (c.readOnly = !0),
                              (c.description =
                                '当前数值没有可选项，不支持设置。'));
                          }
                          if (
                            ('value' === l && 'Content' === E.type
                              ? ((c.type = 'select'),
                                (c.options = (0, ee.bQ)(b)))
                              : 'value' === l &&
                                'RuntimeConst' === E.type &&
                                ((c.type = 'select'),
                                (c.options = (0, ee.bQ)(O))),
                            h)
                          )
                            return Vt({
                              parentType: u,
                              jsonKey: l,
                              indexRoute: a,
                              keyRoute: r,
                              nodeKey: y,
                              targetJsonSchema: c,
                              getJSONDataByKeyRoute: p,
                              keyRoute2indexRoute: m,
                              updateFormValueData: d,
                            });
                        }),
                      h && V().createElement(pe, this.props),
                    ),
                  ),
                );
              }),
              t
            );
          })(V().PureComponent);
        Jt.propTypes = {
          isArrayItem: W().any,
          arrIndex: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        };
        var kt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              options: e.JSONEditorStore.options,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Jt)),
          Ct = X.Collapse.Panel,
          Kt = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).state = {
                  jsonView: !1,
                  isClosed: !1,
                }),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.indexRoute,
                  a = e.jsonKey,
                  n = e.nodeKey,
                  r = e.keyRoute,
                  o = e.pageScreen,
                  i = e.targetJsonSchema,
                  l = e.getJSONDataByKeyRoute,
                  s = e.keyRoute2indexRoute,
                  c = e.updateFormValueData;
                return V().createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: n,
                    id: n,
                  },
                  V().createElement(
                    'div',
                    { className: 'element-title' },
                    V().createElement(
                      X.Tooltip,
                      { title: i.description, placement: 'top' },
                      V().createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o && i.title.length > 6
                              ? i.title
                              : '',
                        },
                        i.title,
                        i.showKey &&
                          V().createElement(
                            'span',
                            null,
                            '（',
                            (0, Q.truncate)(a, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                  ),
                  V().createElement(
                    'div',
                    { className: 'array-schema-box' },
                    V().createElement(
                      X.Collapse,
                      {
                        defaultActiveKey: ['mainConfig'],
                        expandIconPosition: 'right',
                        bordered: !1,
                        accordion: !0,
                      },
                      i.properties.mainConfig &&
                        V().createElement(
                          Ct,
                          {
                            header: i.properties.mainConfig.title,
                            key: 'mainConfig',
                          },
                          i.properties.mainConfig.propertyOrder.map(
                            function (e, a) {
                              var o = t ? t + '-0-' + a : '0-' + a,
                                u = r
                                  ? r + '-mainConfig-' + e
                                  : 'mainConfig-' + e,
                                p =
                                  l(r ? r + '-mainConfig' : 'mainConfig') || {},
                                m = e,
                                d = (0, $.toJS)(
                                  i.properties.mainConfig.properties[m],
                                );
                              console.log('mainConfigJsonData:', d, m, p);
                              var y = d.type,
                                h = n + '-' + y + '-' + m,
                                g = ![
                                  'description',
                                  'CONTENTID',
                                  'CONTENTTYPE',
                                ].includes(m);
                              if (
                                ('description' === m &&
                                'ContentStaticConfig' === p.type
                                  ? (g = !0)
                                  : ('CONTENTID' !== m &&
                                      'CONTENTTYPE' !== m) ||
                                    'RuntimeDataSelfDefine' !== p.type ||
                                    (g = !0),
                                g)
                              )
                                return Vt({
                                  parentType: y,
                                  jsonKey: m,
                                  indexRoute: o,
                                  keyRoute: u,
                                  nodeKey: h,
                                  targetJsonSchema: d,
                                  isArrayItem: !0,
                                  getJSONDataByKeyRoute: l,
                                  keyRoute2indexRoute: s,
                                  updateFormValueData: c,
                                });
                            },
                          ),
                        ),
                      i.propertyOrder.map(function (e, a) {
                        if ('mainConfig' !== e) {
                          var o = t ? t + '-' + a : '' + a,
                            u = r ? r + '-' + e : '' + e,
                            p = e,
                            m = (0, $.toJS)(i.properties[p]),
                            d = m.type,
                            y = n + '-' + d + '-' + p;
                          return m.propertyOrder && m.propertyOrder.length > 0
                            ? V().createElement(
                                Ct,
                                { header: m.title, key: p },
                                Vt({
                                  parentType: d,
                                  jsonKey: p,
                                  indexRoute: o,
                                  keyRoute: u,
                                  nodeKey: y,
                                  targetJsonSchema: m,
                                  isArrayItem: !0,
                                  getJSONDataByKeyRoute: l,
                                  keyRoute2indexRoute: s,
                                  updateFormValueData: c,
                                }),
                              )
                            : void 0;
                        }
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(V().PureComponent);
        Kt.propTypes = {
          isArrayItem: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        };
        var xt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Kt)),
          jt = (__webpack_require__(165), X.Select.Option),
          Pt = X.Collapse.Panel,
          Tt = (function (e) {
            function t(t) {
              var a;
              return (
                ((a = e.call(this, t) || this).handleEventTitleChange =
                  function (e, t) {
                    var n = t.target.value,
                      r = a.props,
                      o = r.keyRoute,
                      i = r.updateFormValueData,
                      l = (0, r.getJSONDataByKeyRoute)(o) || {},
                      s = Object.assign({}, (0, $.toJS)(l.globalEventMap)),
                      c = o + '-globalEventMap';
                    (s[e] = n), i(c, s);
                  }),
                (a.handleSelectEventChange = function (e, t) {
                  var n = a.props,
                    r = n.keyRoute,
                    o = n.updateFormValueData,
                    i = n.getJSONDataByKeyRoute,
                    l = a.props.options || {},
                    s = r + '-event',
                    c = i(r) || {},
                    u = [];
                  c.event && c.event.length > 0
                    ? (u = (0, $.toJS)(c.event))
                    : l.eventListenConfig &&
                      l.eventListenConfig.length > 0 &&
                      (l.eventListenConfig || []).forEach(function (e) {
                        u.push({ name: e.name, listenName: e.code });
                      }),
                    u.forEach(function (a) {
                      a.name === e && (a.listenName = t);
                    }),
                    o(s, u);
                }),
                (a.state = { jsonView: !1, isClosed: !1 }),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                me.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  me.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = (t.indexRoute, t.jsonKey, t.nodeKey),
                  n = t.keyRoute,
                  r = t.pageScreen,
                  o = (t.targetJsonSchema, t.getJSONDataByKeyRoute),
                  i =
                    (t.keyRoute2indexRoute,
                    t.updateFormValueData,
                    this.props.options || {}),
                  l = o(n),
                  s = l.globalEventMap || {},
                  c = l.event || [],
                  u = i.widgetType,
                  p = i.eventEmitConfig || [],
                  m = i.eventListenConfig || [],
                  d = i.allEmitEventList || [],
                  y = 'page' !== u && 0 === p.length && 0 === m.length;
                return V().createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'sohu-event-container array-schema-box wide-screen-element-warp'
                        : 'sohu-event-container array-schema-box mobile-screen-element-warp',
                    key: a,
                    id: a,
                  },
                  V().createElement(
                    X.Collapse,
                    {
                      defaultActiveKey: ['mainConfig'],
                      expandIconPosition: 'right',
                      bordered: !1,
                    },
                    m &&
                      m.length > 0 &&
                      V().createElement(
                        Pt,
                        { header: '监听的事件', key: 'eventListenConfig' },
                        m.map(function (t, n) {
                          var r = a + '-eventListen-' + t.code,
                            o =
                              (
                                c.find(function (e) {
                                  return e.name === t.name;
                                }) || {}
                              ).listenName || '';
                          return V().createElement(
                            'div',
                            { key: r, className: 'listen-event-content' },
                            V().createElement(
                              'div',
                              { className: 'title-text' },
                              t.desc || t.name,
                            ),
                            V().createElement(
                              'div',
                              { className: 'form-item-box' },
                              V().createElement('span', null, '绑定事件：'),
                              V().createElement(
                                X.Select,
                                {
                                  showSearch: !0,
                                  style: {
                                    display: 'inline-block',
                                    minWidth: '120px',
                                  },
                                  onChange: function (a) {
                                    return e.handleSelectEventChange(t.name, a);
                                  },
                                  defaultValue: o,
                                },
                                d.map(function (e) {
                                  var t = s[e.code] || e.desc || e.name;
                                  console.log(e, t, s);
                                  var n = a + '-allEmitEvent-' + t;
                                  return V().createElement(
                                    jt,
                                    { value: e.code, key: n },
                                    t,
                                  );
                                }),
                              ),
                            ),
                          );
                        }),
                      ),
                    p &&
                      p.length > 0 &&
                      V().createElement(
                        Pt,
                        { header: '触发的事件', key: 'eventEmitConfig' },
                        p.map(function (t, n) {
                          var r = a + '-eventEmit-' + t.code,
                            o = t.desc || t.name;
                          return V().createElement(
                            'div',
                            {
                              key: r,
                              className: 'object-content emit-event-content',
                            },
                            V().createElement(
                              'div',
                              { className: 'title-text' },
                              '事件名称',
                            ),
                            V().createElement(
                              'div',
                              { className: 'form-item-box' },
                              o,
                            ),
                            V().createElement(
                              'div',
                              { className: 'title-text' },
                              '事件code',
                            ),
                            V().createElement(
                              'div',
                              { className: 'content-item' },
                              V().createElement(
                                'div',
                                { className: 'form-item-box' },
                                (0, Q.truncate)(t.code, { length: 30 }),
                              ),
                            ),
                            V().createElement(
                              'div',
                              { className: 'title-text' },
                              '自定义名称',
                            ),
                            V().createElement(
                              'div',
                              { className: 'content-item' },
                              V().createElement(
                                'div',
                                { className: 'form-item-box' },
                                V().createElement(X.Input, {
                                  style: { display: 'inline-block' },
                                  defaultValue: s[t.code] || o,
                                  onPressEnter: function (a) {
                                    return e.handleEventTitleChange(t.code, a);
                                  },
                                  onBlur: function (a) {
                                    return e.handleEventTitleChange(t.code, a);
                                  },
                                }),
                              ),
                            ),
                          );
                        }),
                      ),
                    'page' === u &&
                      V().createElement(
                        Pt,
                        { header: '事件列表', key: 'AllEmitEventList' },
                        V().createElement(X.List, {
                          itemLayout: 'horizontal',
                          dataSource: d,
                          renderItem: function (e, t) {
                            return V().createElement(
                              X.List.Item,
                              null,
                              V().createElement(X.List.Item.Meta, {
                                title: s[e.code] || e.desc || e.name,
                                description: (0, Q.truncate)(e.code || e.desc, {
                                  length: 30,
                                }),
                              }),
                            );
                          },
                        }),
                      ),
                  ),
                  y &&
                    V().createElement(X.Empty, {
                      description: '暂无事件相关数据',
                    }),
                );
              }),
              t
            );
          })(V().PureComponent);
        Tt.propTypes = {
          isArrayItem: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        };
        var Bt = (0, A.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              options: e.JSONEditorStore.options,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, A.observer)(Tt)),
          Vt = function (e) {
            var t = e.nodeKey,
              a = (e.jsonKey, e.keyRoute),
              n = e.targetJsonSchema,
              r = e.getJSONDataByKeyRoute,
              o = (e.keyRoute2indexRoute, e.updateFormValueData),
              i = n.type,
              l = {};
            n.hiddenRule && (l = n.hiddenRule);
            var s,
              c = '';
            if (l.conditionProp && (0, ee.GT)(l.conditionValue)) {
              var u = l.conditionProp;
              if (l.conditionValue === (c = r(u.keyRoute)))
                return void (n.clearValueOnHidden && o(a, void 0));
            }
            s = t + '-' + c;
            var p = oe()({}, e, { nodeKey: s });
            switch (i) {
              case 'object':
                return V().createElement(Ne, oe()({}, p, { key: s }));
              case 'dynamic-config':
                return V().createElement(kt, oe()({}, p, { key: s }));
              case 'sohu-source':
                return V().createElement(xt, oe()({}, p, { key: s }));
              case 'sohu-event':
                return V().createElement(Bt, oe()({}, p, { key: s }));
              case 'array':
                return V().createElement(be, oe()({}, p, { key: s }));
              case 'dynamic-data':
                return V().createElement(Le, oe()({}, p, { key: s }));
              case 'datasource':
                return V().createElement(Ke, oe()({}, p, { key: s }));
              case 'event':
                return V().createElement(qe, oe()({}, p, { key: s }));
              case 'quantity':
                return V().createElement(Ue, oe()({}, p, { key: s }));
              case 'box-style':
                return V().createElement(He, oe()({}, p, { key: s }));
              case 'radio':
                return V().createElement($e, oe()({}, p, { key: s }));
              case 'select':
                return V().createElement(wt, oe()({}, p, { key: s }));
              case 'checkboxes':
                return V().createElement(Ye, oe()({}, p, { key: s }));
              case 'input':
              default:
                return V().createElement(je, oe()({}, p, { key: s }));
              case 'textarea':
                return V().createElement(et, oe()({}, p, { key: s }));
              case 'text-editor':
                return V().createElement(st, oe()({}, p, { key: s }));
              case 'number':
                return V().createElement(ut, oe()({}, p, { key: s }));
              case 'boolean':
                return V().createElement(mt, oe()({}, p, { key: s }));
              case 'date':
              case 'date-time':
                return V().createElement(St, oe()({}, p, { key: s }));
              case 'time':
                return V().createElement(ft, oe()({}, p, { key: s }));
              case 'url':
                return V().createElement(ke, oe()({}, p, { key: s }));
              case 'color':
                return V().createElement(bt, oe()({}, p, { key: s }));
              case 'json':
                return V().createElement(Re, oe()({}, p, { key: s }));
              case 'codearea':
                return V().createElement(we.A, oe()({}, p, { key: s }));
              case 'htmlarea':
                return V().createElement(Nt, oe()({}, p, { key: s }));
            }
          },
          It = (__webpack_require__(104), X.Collapse.Panel),
          Mt = X.Tabs.TabPane,
          At = (function (e) {
            function t(t) {
              var a;
              if (
                (((a = e.call(this, t) || this).catchViewStyle = function (e) {
                  switch (e) {
                    case 'fold':
                    default:
                      return 'fold';
                    case 'tabs':
                      return 'tabs';
                  }
                }),
                (a.renderHeader = function (e) {
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
                (a.state = {
                  jsonView: t.jsonView || !1,
                  viewStyle: a.catchViewStyle(t.viewStyle),
                }),
                t.schemaData)
              )
                a.props.initJSONSchemaData(t.schemaData),
                  a.props.initJSONData(t.jsonData);
              else if (t.jsonData) {
                var n = (0, Q.json2schema)(t.jsonData);
                a.props.initJSONSchemaData(n), a.props.initJSONData(t.jsonData);
              }
              return (
                t.wideScreen && a.props.setPageScreen(t.wideScreen),
                t.onChange && a.props.initOnChange(t.onChange),
                t.dynamicDataList &&
                  a.props.setDynamicDataList(t.dynamicDataList),
                t.options && a.props.setOptions(t.options),
                a
              );
            }
            T()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillReceiveProps = function (e) {
                (0, ee.n4)(e.schemaData, this.props.schemaData) ||
                  this.props.JSONSchemaChange(e.schemaData),
                  (0, ee.n4)(e.jsonData, this.props.jsonData) ||
                    this.props.initJSONData(e.jsonData),
                  (0, ee.n4)(e.jsonView, this.props.jsonView) ||
                    this.setState({ jsonView: e.jsonView }),
                  (0, ee.n4)(e.viewStyle, this.props.viewStyle) ||
                    this.setState({ viewStyle: e.viewStyle }),
                  (0, ee.n4)(e.wideScreen, this.props.wideScreen) ||
                    this.props.setPageScreen(e.wideScreen),
                  (0, ee.n4)(e.onChange, this.props.onChange) ||
                    this.props.initOnChange(e.onChange),
                  (0, ee.n4)(e.dynamicDataList, this.props.dynamicDataList) ||
                    this.props.setDynamicDataList(e.dynamicDataList),
                  (0, ee.n4)(e.options, this.props.options) ||
                    this.props.setOptions(e.options);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.jsonSchema,
                  n = t.lastUpdateTime,
                  r = t.jsonLastUpdateTime,
                  o = t.getJSONDataByKeyRoute,
                  i = t.keyRoute2indexRoute,
                  l = t.updateFormValueData,
                  s = this.state,
                  c = s.jsonView,
                  u = s.viewStyle,
                  p = (0, Q.isEmptySchema)(a),
                  m = (0, Q.isStructuredSchema)(a);
                return B.createElement(
                  'div',
                  { className: 'json-editor-container' },
                  p &&
                    B.createElement(
                      'p',
                      { className: 'json-editor-empty' },
                      '当前jsonSchema没有数据内容',
                    ),
                  !p &&
                    !c &&
                    B.createElement(
                      B.Fragment,
                      null,
                      m &&
                        B.createElement(
                          B.Fragment,
                          null,
                          'fold' === u &&
                            B.createElement(
                              X.Collapse,
                              {
                                defaultActiveKey: a.propertyOrder,
                                expandIconPosition: 'right',
                                bordered: !1,
                              },
                              a.propertyOrder.map(function (t, s) {
                                var c = s,
                                  u = t,
                                  p = t,
                                  d = a.properties[p],
                                  y = d.type,
                                  h = n + '-' + r + '-' + y + '-' + p;
                                return d.propertyOrder &&
                                  d.propertyOrder.length > 0
                                  ? B.createElement(
                                      It,
                                      {
                                        header: d.title || e.renderHeader(y),
                                        key: p,
                                      },
                                      Vt({
                                        parentType: y,
                                        jsonKey: p,
                                        indexRoute: c,
                                        keyRoute: u,
                                        nodeKey: h,
                                        targetJsonSchema: d,
                                        isStructuredSchema: m,
                                        getJSONDataByKeyRoute: o,
                                        keyRoute2indexRoute: i,
                                        updateFormValueData: l,
                                      }),
                                    )
                                  : '';
                              }),
                            ),
                          'tabs' === u &&
                            B.createElement(
                              X.Tabs,
                              {
                                className: 'tabs-schema-box',
                                defaultActiveKey: a.propertyOrder[0],
                                centered: !0,
                                hideAdd: !0,
                              },
                              a.propertyOrder.map(function (t, s) {
                                var c = s,
                                  u = t,
                                  p = t,
                                  d = a.properties[p],
                                  y = d.type,
                                  h = n + '-' + r + '-' + y + '-' + p;
                                return d.propertyOrder &&
                                  d.propertyOrder.length > 0
                                  ? B.createElement(
                                      Mt,
                                      {
                                        tab: d.title || e.renderHeader(y),
                                        key: p,
                                        closable: !1,
                                        className: 'tabs-schema-item',
                                      },
                                      Vt({
                                        parentType: y,
                                        jsonKey: p,
                                        indexRoute: c,
                                        keyRoute: u,
                                        nodeKey: h,
                                        targetJsonSchema: d,
                                        isStructuredSchema: m,
                                        getJSONDataByKeyRoute: o,
                                        keyRoute2indexRoute: i,
                                        updateFormValueData: l,
                                      }),
                                    )
                                  : '';
                              }),
                            ),
                        ),
                      !m &&
                        B.createElement(
                          B.Fragment,
                          null,
                          Vt({
                            parentType: '',
                            jsonKey: '',
                            indexRoute: '',
                            keyRoute: '',
                            nodeKey: '',
                            targetJsonSchema: a,
                            getJSONDataByKeyRoute: o,
                            keyRoute2indexRoute: i,
                            updateFormValueData: l,
                          }),
                        ),
                    ),
                  !p &&
                    c &&
                    B.createElement(pe, {
                      nodeKey: 'jsonView',
                      keyRoute: '',
                      targetJsonSchema: a,
                    }),
                );
              }),
              t
            );
          })(B.PureComponent);
        At.propTypes = {
          viewStyle: W().any,
          wideScreen: W().any,
          onChange: W().func,
          jsonView: W().any,
          schemaData: W().object,
          jsonData: W().object,
          dynamicDataList: W().any,
          options: W().any,
        };
        var Lt = (0, A.inject)(function (e) {
            return {
              jsonSchema: e.JSONSchemaStore.jsonSchema,
              lastUpdateTime: e.JSONSchemaStore.lastUpdateTime,
              jsonLastUpdateTime: e.JSONEditorStore.lastUpdateTime,
              initJSONSchemaData: e.JSONSchemaStore.initJSONSchemaData,
              JSONSchemaChange: e.JSONSchemaStore.JSONSchemaChange,
              initJSONData: e.JSONEditorStore.initJSONData,
              initOnChange: e.JSONEditorStore.initOnChange,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              keyRoute2indexRoute: e.JSONSchemaStore.keyRoute2indexRoute,
              setDynamicDataList: e.JSONEditorStore.setDynamicDataList,
              setOptions: e.JSONEditorStore.setOptions,
              setPageScreen: e.JSONSchemaStore.setPageScreen,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
            };
          })((0, A.observer)(At)),
          Wt =
            (__webpack_require__(410),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).state = {
                    rootJSONStore: new ne(),
                  }),
                  a
                );
              }
              return (
                T()(t, e),
                (t.prototype.render = function () {
                  var e = this.props.element,
                    t = this.state.rootJSONStore,
                    a = B.createElement(
                      A.Provider,
                      {
                        JSONSchemaStore: t.JSONSchemaStore,
                        JSONEditorStore: t.JSONEditorStore,
                      },
                      B.createElement(Lt, this.props),
                    );
                  return e ? (M().render(a, e), '') : a;
                }),
                t
              );
            })(B.PureComponent));
        Wt.propTypes = {
          viewStyle: W().any,
          wideScreen: W().any,
          onChange: W().func,
          jsonView: W().any,
          schemaData: W().any,
          jsonData: W().any,
          element: W().any,
        };
      })(),
      __webpack_exports__
    );
  })();
});
