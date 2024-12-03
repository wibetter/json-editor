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
              c = e || this.props.keyRoute,
              s = (0, n.TA)(c + '-' + l);
            if (s) {
              var u = r(s);
              u || (u = o(s)), u && ((0, n.CP)(c + '-' + l), i(c, u));
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
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(426),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_6___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_6__,
              ),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(953),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_7___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_7__,
              ),
            $utils_typeof__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(102),
            $mixins_index__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(852),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(347),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default =
              __webpack_require__.n(
                _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__,
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
                  $mixins_index__WEBPACK_IMPORTED_MODULE_10__.x.call(this);
                }),
                (_proto.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    $mixins_index__WEBPACK_IMPORTED_MODULE_10__.x.call(
                      this,
                      e.keyRoute,
                    );
                }),
                (_proto.render = function render() {
                  var _this2 = this,
                    _this$props2 = this.props,
                    isReadOnly = _this$props2.isReadOnly,
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
                    (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_8__.Gv)(
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
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.InfoCircleOutlined,
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
          function c(e) {
            if (window.sessionStorage)
              return window.sessionStorage.removeItem(e);
          }
          a.d(t, {
            CP: function () {
              return c;
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
          function c(e) {
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
              return s;
            },
            _o: function () {
              return c;
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
            c = 0,
            s = !1,
            u = function () {},
            p = null,
            m = 'data-vue-ssr-id',
            d =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function y(e, t, a, r) {
            (s = a), (p = r || {});
            var i = n(e, t);
            return (
              h(i),
              function (t) {
                for (var a = [], r = 0; r < i.length; r++) {
                  var l = i[r];
                  (c = o[l.id]).refs--, a.push(c);
                }
                for (
                  t ? h((i = n(e, t))) : (i = []), r = 0;
                  r < a.length;
                  r++
                ) {
                  var c;
                  if (0 === (c = a[r]).refs) {
                    for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                    delete o[c.id];
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
              if (s) return u;
              n.parentNode.removeChild(n);
            }
            if (d) {
              var r = c++;
              (n = l || (l = g())),
                (t = E.bind(null, n, r, !1)),
                (a = E.bind(null, n, r, !0));
            } else
              (n = g()),
                (t = b.bind(null, n)),
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
          function b(e, t) {
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
              return xt;
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
          c,
          s,
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
          b,
          O,
          v,
          N,
          D,
          R,
          w,
          J,
          k,
          C,
          x,
          K = __webpack_require__(820),
          j = __webpack_require__.n(K),
          P = __webpack_require__(15),
          B = __webpack_require__.n(P),
          T = require('react-dom'),
          V = __webpack_require__.n(T),
          I = __webpack_require__(20),
          M = __webpack_require__(825),
          A = __webpack_require__.n(M),
          L = require('@babel/runtime/helpers/initializerDefineProperty'),
          q = __webpack_require__.n(L),
          W = require('@babel/runtime/helpers/createClass'),
          F = __webpack_require__.n(W),
          U = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          z = __webpack_require__.n(U),
          H =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            require('mobx')),
          G = __webpack_require__(85),
          $ = G.TypeDataList.jsonschema,
          Z =
            ((e = H.action.bound),
            (t = H.action.bound),
            (a = H.action.bound),
            (n = H.action.bound),
            (r = H.action.bound),
            (o = H.action.bound),
            (i = H.action.bound),
            (l = (function () {
              function e(e) {
                q()(this, 'pageScreen', c, this),
                  q()(this, 'jsonSchema', s, this),
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
                    if (!(0, G.isEqual)(e, this.JSONSchemaObj))
                      if (e && (0, G.isNewSchemaData)(e)) this.jsonSchema = e;
                      else {
                        var t = (0, G.oldSchemaToNewSchema)(e);
                        this.jsonSchema = t;
                      }
                  } else this.jsonSchema = (0, G.objClone)($);
                }),
                (t.JSONSchemaChange = function (e) {
                  if (!(0, G.isEqual)(e, this.JSONSchemaObj)) {
                    if (e && '{}' !== JSON.stringify(e))
                      if (e && (0, G.isNewSchemaData)(e)) this.jsonSchema = e;
                      else {
                        var t = (0, G.oldSchemaToNewSchema)(e);
                        this.jsonSchema = t;
                      }
                    else this.jsonSchema = (0, G.objClone)($);
                    var a = this.state.rootJSONStore.JSONEditorStore.jsonData,
                      n = (0, G.schema2json)(this.jsonSchema, a);
                    (this.state.rootJSONStore.JSONEditorStore.jsonData = n),
                      (this.state.rootJSONStore.JSONEditorStore.initJsonData =
                        (0, G.objClone)(a)),
                      this.state.rootJSONStore.JSONEditorStore.jsonDataChange();
                  }
                }),
                (t.indexRoute2keyRoute = function (e) {
                  return (0, G.indexRoute2keyRoute)(e, this.jsonSchema);
                }),
                (t.keyRoute2indexRoute = function (e) {
                  return (0, G.keyRoute2indexRoute)(e, this.jsonSchema);
                }),
                (t.getSchemaByIndexRoute = function (e) {
                  return (0, G.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
                }),
                (t.getSchemaByKeyRoute = function (e) {
                  var t = this.keyRoute2indexRoute(e);
                  return (0, G.getSchemaByIndexRoute)(t, this.jsonSchema, !0);
                }),
                F()(e, [
                  {
                    key: 'JSONSchemaObj',
                    get: function () {
                      return (0, H.toJS)(this.jsonSchema);
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
            (c = z()(l.prototype, 'pageScreen', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 'mobileScreen';
              },
            })),
            (s = z()(l.prototype, 'jsonSchema', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            z()(
              l.prototype,
              'setPageScreen',
              [e],
              Object.getOwnPropertyDescriptor(l.prototype, 'setPageScreen'),
              l.prototype,
            ),
            z()(
              l.prototype,
              'initJSONSchemaData',
              [t],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'initJSONSchemaData',
              ),
              l.prototype,
            ),
            z()(
              l.prototype,
              'JSONSchemaChange',
              [a],
              Object.getOwnPropertyDescriptor(l.prototype, 'JSONSchemaChange'),
              l.prototype,
            ),
            z()(
              l.prototype,
              'JSONSchemaObj',
              [H.computed],
              Object.getOwnPropertyDescriptor(l.prototype, 'JSONSchemaObj'),
              l.prototype,
            ),
            z()(
              l.prototype,
              'lastUpdateTime',
              [H.computed],
              Object.getOwnPropertyDescriptor(l.prototype, 'lastUpdateTime'),
              l.prototype,
            ),
            z()(
              l.prototype,
              'indexRoute2keyRoute',
              [n],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'indexRoute2keyRoute',
              ),
              l.prototype,
            ),
            z()(
              l.prototype,
              'keyRoute2indexRoute',
              [r],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'keyRoute2indexRoute',
              ),
              l.prototype,
            ),
            z()(
              l.prototype,
              'getSchemaByIndexRoute',
              [o],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'getSchemaByIndexRoute',
              ),
              l.prototype,
            ),
            z()(
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
          Q = __webpack_require__(375),
          Y = __webpack_require__(919),
          X = __webpack_require__(102),
          ee =
            ((u = H.action.bound),
            (p = H.action.bound),
            (m = H.action.bound),
            (d = H.action.bound),
            (y = H.action.bound),
            (h = H.action.bound),
            (g = H.action.bound),
            (S = H.action.bound),
            (_ = H.action.bound),
            (f = H.action.bound),
            (E = H.action.bound),
            (b = H.action.bound),
            (O = (function () {
              function e(e) {
                q()(this, 'rootJSONStore', v, this),
                  q()(this, 'triggerChange', N, this),
                  q()(this, 'lastUpdateTime', D, this),
                  q()(this, 'jsonData', R, this),
                  q()(this, 'initJsonData', w, this),
                  q()(this, 'dynamicDataList', J, this),
                  q()(this, 'dynamicDataObj', k, this),
                  q()(this, 'dynamicDataApiScopeList', C, this),
                  q()(this, 'onChange', x, this),
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
                  (0, Y.n4)(e, this.jsonData) ||
                    ((this.initJsonData = (0, Y.bQ)(this.jsonData)),
                    t &&
                      ((this.jsonData = (0, G.schema2json)(t, e || {})),
                      this.updateLastTime()));
                }),
                (t.initOnChange = function (e) {
                  (e || (0, X.Tn)(e)) && (this.onChange = e);
                }),
                (t.setDynamicDataList = function (e) {
                  if (!(0, Y.n4)(e, this.dynamicDataList)) {
                    this.dynamicDataList = (0, Y.bQ)(e);
                    var t = {};
                    e.map(function (e) {
                      t[e.name] = e;
                    }),
                      (this.dynamicDataObj = t);
                  }
                }),
                (t.jsonDataChange = function () {
                  this.onChange(this.JSONEditorObj);
                }),
                (t.getJSONDataByKeyRoute = function (e, t) {
                  var a = t || this.jsonData;
                  return (0, G.getJsonDataByKeyRoute)(e, a, !0);
                }),
                (t.getInitJsonDataByKeyRoute = function (e, t) {
                  var a = t || this.initJsonData;
                  return (0, G.getJsonDataByKeyRoute)(e, a, !0);
                }),
                (t.updateFormValueData = function (e, t, a) {
                  var n = this;
                  if ('' !== e) {
                    var r = (0, G.getParentKeyRoute_CurKey)(e),
                      o = r[0],
                      i = r[1];
                    (0, G.getJsonDataByKeyRoute)(o, this.jsonData)[i] = t;
                  } else this.jsonData = t;
                  if (
                    this.state.rootJSONStore.JSONSchemaStore &&
                    this.state.rootJSONStore.JSONSchemaStore.jsonSchema
                  ) {
                    var l =
                        this.state.rootJSONStore.JSONSchemaStore.jsonSchema
                          .conditionProps,
                      c =
                        this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(
                          e,
                        );
                    c && c.isConditionProp
                      ? this.updateLastTime()
                      : l &&
                        Object.keys(l).map(function (t) {
                          l[t].keyRoute === e && n.updateLastTime();
                        });
                  }
                  a || this.jsonDataChange();
                }),
                (t.deleteArrayIndex = function (e, t) {
                  var a = (0, G.getJsonDataByKeyRoute)(e, this.jsonData);
                  (0, X.cy)(a) &&
                    (a.length > 0
                      ? (a.splice(t, 1),
                        this.triggerChangeAction(),
                        this.jsonDataChange())
                      : Q.message.warning(
                          '删除失败，空数组对象暂无可删除子项。',
                        ));
                }),
                (t.addArrayItem = function (e, t) {
                  var a = (0, G.getJsonDataByKeyRoute)(e, this.jsonData);
                  if ((0, X.cy)(a)) {
                    var n = a[t || 0];
                    if (
                      ((0, X.Gv)(n) && (n = Object.assign({}, n)), t || 0 === t)
                    ) {
                      var r = a.slice(Number(t) + 1),
                        o = [n].concat(r);
                      a.splice(Number(t) + 1), a.push.apply(a, o);
                    } else a.push(n);
                    this.triggerChangeAction(), this.jsonDataChange();
                  } else
                    Q.message.warning('数据操作异常：当前元素不是数组类型。');
                }),
                (t.sortArrayItem = function (e, t, a) {
                  var n = (0, G.getJsonDataByKeyRoute)(e, this.jsonData);
                  if ((0, X.cy)(n)) {
                    var r = (0, Y.bQ)(n[t || 0]),
                      o = t;
                    if ('up' === a && o > 0) o -= 1;
                    else {
                      if ('up' === a && 0 === o)
                        return void Q.message.warning(
                          '数据操作异常：当前数组项已经是第一个元素了。',
                        );
                      if (
                        ('down' === a || !a) &&
                        ((o += 1), 'down' === a && o > n.length - 1)
                      )
                        return void Q.message.warning(
                          '数据操作异常：当前数组项已经是最后一个元素了。',
                        );
                    }
                    var i = (0, Y.bQ)(n[o]);
                    void 0 !== r &&
                      void 0 !== i &&
                      ((n[t] = i),
                      (n[o] = r),
                      Q.message.success(
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
                    Q.message.warning('数据操作异常：当前元素不是数组类型。');
                }),
                F()(e, [
                  {
                    key: 'JSONEditorObj',
                    get: function () {
                      return (0, H.toJS)(this.jsonData);
                    },
                  },
                ])
              );
            })()),
            (v = z()(O.prototype, 'rootJSONStore', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (N = z()(O.prototype, 'triggerChange', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (D = z()(O.prototype, 'lastUpdateTime', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new Date().getTime();
              },
            })),
            (R = z()(O.prototype, 'jsonData', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = z()(O.prototype, 'initJsonData', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (J = z()(O.prototype, 'dynamicDataList', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = z()(O.prototype, 'dynamicDataObj', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (C = z()(O.prototype, 'dynamicDataApiScopeList', [H.observable], {
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
            (x = z()(O.prototype, 'onChange', [H.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return function () {};
              },
            })),
            z()(
              O.prototype,
              'updateLastTime',
              [u],
              Object.getOwnPropertyDescriptor(O.prototype, 'updateLastTime'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'triggerChangeAction',
              [p],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'triggerChangeAction',
              ),
              O.prototype,
            ),
            z()(
              O.prototype,
              'initJSONData',
              [m],
              Object.getOwnPropertyDescriptor(O.prototype, 'initJSONData'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'initOnChange',
              [d],
              Object.getOwnPropertyDescriptor(O.prototype, 'initOnChange'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'setDynamicDataList',
              [y],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'setDynamicDataList',
              ),
              O.prototype,
            ),
            z()(
              O.prototype,
              'JSONEditorObj',
              [H.computed],
              Object.getOwnPropertyDescriptor(O.prototype, 'JSONEditorObj'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'jsonDataChange',
              [h],
              Object.getOwnPropertyDescriptor(O.prototype, 'jsonDataChange'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'getJSONDataByKeyRoute',
              [g],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'getJSONDataByKeyRoute',
              ),
              O.prototype,
            ),
            z()(
              O.prototype,
              'getInitJsonDataByKeyRoute',
              [S],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'getInitJsonDataByKeyRoute',
              ),
              O.prototype,
            ),
            z()(
              O.prototype,
              'updateFormValueData',
              [_],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'updateFormValueData',
              ),
              O.prototype,
            ),
            z()(
              O.prototype,
              'deleteArrayIndex',
              [f],
              Object.getOwnPropertyDescriptor(O.prototype, 'deleteArrayIndex'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'addArrayItem',
              [E],
              Object.getOwnPropertyDescriptor(O.prototype, 'addArrayItem'),
              O.prototype,
            ),
            z()(
              O.prototype,
              'sortArrayItem',
              [b],
              Object.getOwnPropertyDescriptor(O.prototype, 'sortArrayItem'),
              O.prototype,
            ),
            O),
          te = function () {
            (this.JSONSchemaStore = new Z(this)),
              (this.JSONEditorStore = new ee(this));
          },
          ae = require('@babel/runtime/helpers/extends'),
          ne = __webpack_require__.n(ae),
          re = __webpack_require__(347),
          oe = __webpack_require__(813),
          ie = __webpack_require__.n(oe),
          le =
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
                j()(t, e),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.nodeKey,
                    a = e.keyRoute,
                    n = e.targetJsonSchema,
                    r = (0, e.getJSONDataByKeyRoute)(a);
                  return (
                    (r = void 0 !== r ? r : n.default || '{}'),
                    ((0, X.Gv)(r) || (0, X.cy)(r)) &&
                      (r = JSON.stringify(r, null, 2)),
                    P.createElement(
                      'div',
                      { className: 'json-view-box', key: t, id: t },
                      P.createElement(
                        'div',
                        { className: 'readOnly-btn' },
                        '[只读]',
                      ),
                      P.createElement(ie(), {
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
            })(P.PureComponent));
        le.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var ce,
          se = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(le)),
          ue = __webpack_require__(852);
        function pe() {
          return (
            (pe = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                      ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
                }),
            pe.apply(null, arguments)
          );
        }
        __webpack_require__(595);
        var me,
          de = function (e) {
            return P.createElement(
              'svg',
              pe(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              ce ||
                (ce = P.createElement('path', {
                  d: 'M15.5 2a.5.5 0 0 1 .09.992L15.5 3H14v10.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 13.6V3H.5a.5.5 0 0 1-.09-.992L.5 2h15ZM13 3H3v10.6a1.4 1.4 0 0 0 1.265 1.394L4.4 15h7.2a1.4 1.4 0 0 0 1.394-1.265L13 13.6V3ZM6 6a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L5.5 11.5v-5A.5.5 0 0 1 6 6Zm4 0a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L9.5 11.5v-5A.5.5 0 0 1 10 6Zm.5-6a.5.5 0 0 1 .09.992L10.5 1h-5a.5.5 0 0 1-.09-.992L5.5 0h5Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function ye() {
          return (
            (ye = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                      ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
                }),
            ye.apply(null, arguments)
          );
        }
        var he,
          ge = function (e) {
            return P.createElement(
              'svg',
              ye(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              me ||
                (me = P.createElement('path', {
                  d: 'M10.286 4C11.232 4 12 4.768 12 5.714v8.572c0 .946-.768 1.714-1.714 1.714H1.714A1.714 1.714 0 0 1 0 14.286V5.714C0 4.768.768 4 1.714 4h8.572Zm-.12 1H1.834A.833.833 0 0 0 1 5.833v8.334c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833V5.833A.833.833 0 0 0 10.167 5ZM6 7.429c.237 0 .429.191.429.428l-.001 1.714h1.715a.429.429 0 0 1 0 .858H6.428v1.714a.429.429 0 1 1-.857 0v-1.714H3.857a.429.429 0 1 1 0-.858h1.714V7.857c0-.237.192-.428.429-.428ZM14.286 0C15.232 0 16 .768 16 1.714v8.572c0 .946-.768 1.714-1.714 1.714H13v-1h1.167c.46 0 .833-.373.833-.833V1.833A.833.833 0 0 0 14.167 1H5.833A.833.833 0 0 0 5 1.833V3H4V1.714C4 .768 4.768 0 5.714 0h8.572Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function Se() {
          return (
            (Se = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                      ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                  }
                  return e;
                }),
            Se.apply(null, arguments)
          );
        }
        var _e = function (e) {
            return P.createElement(
              'svg',
              Se(
                {
                  viewBox: '0 0 1025 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                e,
              ),
              he ||
                (he = P.createElement('path', {
                  d: 'M293.069 755.2c-12.083 0-24.269-4.25-33.997-12.902L0 512l273.46-243.098c21.094-18.688 53.452-16.896 72.242 4.25 18.79 21.146 16.896 53.504-4.25 72.294L154.113 512l172.954 153.702c21.145 18.79 23.04 51.15 4.25 72.295-10.087 11.417-24.167 17.203-38.247 17.203zm457.984-.102L1024.512 512 765.44 281.702c-21.146-18.79-53.504-16.896-72.243 4.25-18.79 21.146-16.896 53.504 4.25 72.294L870.4 512 683.06 678.502c-21.146 18.79-23.04 51.15-4.25 72.295C688.896 762.214 702.976 768 717.056 768c12.083 0 24.269-4.25 33.997-12.902zm-239.514 72.55 102.4-614.4c4.66-27.904-14.182-54.272-42.086-58.931-28.007-4.71-54.323 14.182-58.88 42.086l-102.4 614.4c-4.66 27.904 14.182 54.272 42.086 58.931a52.65 52.65 0 0 0 8.448.666c24.576 0 46.285-17.766 50.432-42.752z',
                  fill: 'currentColor',
                })),
            );
          },
          fe = (function (e) {
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
                    ? Q.message.warning('添加失败，最多可添加' + r + '个子项')
                    : a.props.addArrayItem(e, n);
                }),
                (a.deleteArrItem = function (e, t, n) {
                  var r = a.props.targetJsonSchema['minimum-child'];
                  n && r && n.length <= r
                    ? Q.message.warning('删除失败，至少需要保留' + r + '个子项')
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
                  if (!e || !(0, X.Gv)(e)) return e;
                  for (
                    var t = Object.keys(e), a = 0, n = t.length;
                    a < n;
                    a++
                  ) {
                    var r = e[t[a]];
                    if (
                      r &&
                      ((0, X.Et)(r) ||
                        ((0, X.Kg)(r) && !(0, X.mv)(r) && !(0, X._o)(r)))
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.keyRoute,
                  n = t.nodeKey,
                  r = t.pageScreen,
                  o = t.indexRoute,
                  i = t.targetJsonSchema,
                  l = t.getJSONDataByKeyRoute,
                  c = t.keyRoute2indexRoute,
                  s = t.updateFormValueData,
                  u = this.state,
                  p = u.jsonView,
                  m = u.isClosed,
                  d = (u.hoverIndex, u.currentActiveArrIndex),
                  y = i.type,
                  h = l(a),
                  g = i.items;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: n,
                    id: n,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      Q.Tooltip,
                      { title: i.description, placement: 'top' },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r && i.title.length > 6
                              ? i.title
                              : '',
                        },
                        i.title,
                      ),
                    ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'array-schema-box content-item' },
                    P.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: function (t) {
                          e.setState({ isClosed: !m }),
                            t.preventDefault(),
                            t.stopPropagation();
                        },
                      },
                      P.createElement(
                        'span',
                        { className: 'title-text' },
                        '数组配置',
                      ),
                      m
                        ? P.createElement(re.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : P.createElement(re.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      P.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function (t) {
                            e.setState({ jsonView: !p }),
                              t.preventDefault(),
                              t.stopPropagation();
                          },
                        },
                        P.createElement(
                          Q.Tooltip,
                          { title: p ? '关闭源码模式' : '开启源码模式' },
                          P.createElement(_e, {
                            className: p ? 'info-icon active' : 'info-icon',
                          }),
                        ),
                      ),
                      P.createElement(
                        Q.Tooltip,
                        { title: '添加数据项' },
                        P.createElement(re.PlusOutlined, {
                          className: 'array-add-child-btn',
                          onClick: function (t) {
                            e.addArrayItem(a, h),
                              t.preventDefault(),
                              t.stopPropagation();
                          },
                        }),
                      ),
                    ),
                    P.createElement(
                      'div',
                      {
                        className:
                          'array-content ' +
                          (p ? 'json-view-array' : '') +
                          ' ' +
                          (m ? 'closed' : ''),
                      },
                      !p &&
                        (0, X.cy)(h) &&
                        h.map(function (t, r) {
                          var i = n + '-array-items-' + h.length + '-' + r,
                            u = o ? o + '-0' : '0',
                            p = a ? a + '-' + r : '' + r,
                            m = e.getArrItemTitle(t);
                          return P.createElement(
                            'div',
                            { className: 'array-item', key: p },
                            P.createElement(
                              'div',
                              {
                                className: 'array-item-header',
                                onClick: function () {
                                  e.setState({
                                    currentActiveArrIndex: d === r ? -1 : r,
                                  });
                                },
                                onMouseMove: function (t) {
                                  e.elemHoverEnterEvent(t, r);
                                },
                                onMouseLeave: function (t) {
                                  e.elemHoverLeaveEvent(t, r);
                                },
                              },
                              P.createElement(
                                'div',
                                { className: 'array-title-text' },
                                m || g.title + '/' + (r + 1),
                              ),
                              P.createElement(
                                'div',
                                { className: 'array-operate-box' },
                                d !== r
                                  ? P.createElement(re.RightOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    })
                                  : P.createElement(re.DownOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    }),
                                P.createElement(
                                  Q.Tooltip,
                                  { title: '删除' + g.title + '/' + (r + 1) },
                                  P.createElement(
                                    Q.Popconfirm,
                                    {
                                      placement: 'top',
                                      title:
                                        '确定要删除' +
                                        g.title +
                                        '/' +
                                        (r + 1) +
                                        '吗？',
                                      onCancel: function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                      },
                                      onConfirm: function (t) {
                                        e.deleteArrItem(a, r, h),
                                          t.preventDefault(),
                                          t.stopPropagation();
                                      },
                                      okText: '确定',
                                      cancelText: '取消',
                                    },
                                    P.createElement(de, {
                                      className:
                                        'delete-operate-btn array-operate-btn',
                                      onClick: function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                      },
                                    }),
                                  ),
                                ),
                                P.createElement(
                                  Q.Tooltip,
                                  { title: '复制' + g.title + '/' + (r + 1) },
                                  P.createElement(ge, {
                                    className: 'array-operate-btn',
                                    onClick: function (t) {
                                      e.addArrayItem(a, h, r),
                                        t.preventDefault(),
                                        t.stopPropagation();
                                    },
                                  }),
                                ),
                                0 !== r &&
                                  P.createElement(
                                    Q.Tooltip,
                                    { title: '向上移动' },
                                    P.createElement(re.ArrowUpOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (t) {
                                        e.props.sortArrayItem(a, r, 'up'),
                                          t.preventDefault(),
                                          t.stopPropagation();
                                      },
                                    }),
                                  ),
                                r !== h.length - 1 &&
                                  P.createElement(
                                    Q.Tooltip,
                                    { title: '向下移动' },
                                    P.createElement(re.ArrowDownOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (t) {
                                        e.props.sortArrayItem(a, r, 'down'),
                                          t.preventDefault(),
                                          t.stopPropagation();
                                      },
                                    }),
                                  ),
                              ),
                            ),
                            P.createElement(
                              'div',
                              {
                                className:
                                  'array-item-content ' +
                                  (d === r ? 'open' : 'closed'),
                                key: i,
                                id: i,
                              },
                              P.createElement(Rt, {
                                parentType: y,
                                jsonKey: 'items',
                                indexRoute: u,
                                keyRoute: p,
                                nodeKey: i,
                                targetJsonSchema: g,
                                isArrayItem: !0,
                                arrIndex: r,
                                getJSONDataByKeyRoute: l,
                                keyRoute2indexRoute: c,
                                updateFormValueData: s,
                              }),
                            ),
                          );
                        }),
                      p && P.createElement(se, this.props),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        fe.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Ee = (0, I.inject)(function (e) {
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
          })((0, I.observer)(fe)),
          be =
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
              j()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  ue.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    ue.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.indexRoute,
                    n = t.nodeKey,
                    r = t.keyRoute,
                    o = t.pageScreen,
                    i = t.targetJsonSchema,
                    l = t.isArrayItem,
                    c = (t.arrIndex, t.isStructuredSchema),
                    s = t.getJSONDataByKeyRoute,
                    u = t.keyRoute2indexRoute,
                    p = t.updateFormValueData,
                    m = this.state,
                    d = m.jsonView,
                    y = m.isClosed,
                    h = c;
                  return B().createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === o
                          ? 'object-schema-warp wide-screen-element-warp'
                          : 'object-schema-warp mobile-screen-element-warp',
                      key: n,
                      id: n,
                    },
                    !h &&
                      !l &&
                      B().createElement(
                        'div',
                        { className: 'element-title' },
                        B().createElement(
                          Q.Tooltip,
                          { title: i.description, placement: 'top' },
                          B().createElement(
                            'span',
                            {
                              className: 'title-text',
                              title:
                                'wideScreen' === o && i.title.length > 6
                                  ? i.title
                                  : '',
                            },
                            i.title,
                          ),
                        ),
                      ),
                    B().createElement(
                      'div',
                      { className: 'element-title-card-warp content-item' },
                      !h &&
                        !l &&
                        B().createElement(
                          'div',
                          {
                            className: 'element-title',
                            onClick: function (t) {
                              e.setState({ isClosed: !y }),
                                t.preventDefault(),
                                t.stopPropagation();
                            },
                          },
                          B().createElement(
                            'span',
                            { className: 'title-text' },
                            '对象配置',
                          ),
                          y
                            ? B().createElement(re.RightOutlined, {
                                className: 'close-operate-btn',
                              })
                            : B().createElement(re.DownOutlined, {
                                className: 'close-operate-btn',
                              }),
                          B().createElement(
                            'div',
                            {
                              className: 'display-source-btn',
                              onClick: function (t) {
                                e.setState({ jsonView: !d }),
                                  t.preventDefault(),
                                  t.stopPropagation();
                              },
                            },
                            B().createElement(
                              Q.Tooltip,
                              { title: d ? '关闭源码模式' : '开启源码模式' },
                              B().createElement(_e, {
                                className: d ? 'info-icon active' : 'info-icon',
                              }),
                            ),
                          ),
                        ),
                      B().createElement(
                        'div',
                        {
                          className:
                            'content-item ' +
                            (h || l ? '' : 'object-content') +
                            ' ' +
                            (d ? 'json-view-array' : '') +
                            ' ' +
                            (y ? 'closed' : ''),
                        },
                        !d &&
                          i.propertyOrder &&
                          i.propertyOrder.map(function (e, t) {
                            var o = a ? a + '-' + t : '' + t,
                              l = r ? r + '-' + e : '' + e,
                              c = e,
                              m = i.properties[c],
                              d = m.type;
                            return Rt({
                              parentType: d,
                              jsonKey: c,
                              indexRoute: o,
                              keyRoute: l,
                              nodeKey: n + '-' + d + '-' + c,
                              targetJsonSchema: m,
                              getJSONDataByKeyRoute: s,
                              keyRoute2indexRoute: u,
                              updateFormValueData: p,
                            });
                          }),
                        d && B().createElement(se, this.props),
                      ),
                    ),
                  );
                }),
                t
              );
            })(B().PureComponent));
        be.propTypes = {
          isArrayItem: A().any,
          arrIndex: A().any,
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().any,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
          isStructuredSchema: A().bool,
        };
        var Oe = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(be)),
          ve = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.nodeKey,
                  n = t.keyRoute,
                  r = t.targetJsonSchema,
                  o = t.pageScreen,
                  i = t.getJSONDataByKeyRoute,
                  l = this.state,
                  c = l.isShowWarn,
                  s = l.warnText,
                  u = l.curJSONDataTemp,
                  p = r.readOnly || !1,
                  m = i(n);
                return (
                  (m = void 0 !== m ? m : r.default || '{}'),
                  ((0, X.Gv)(m) || (0, X.cy)(m)) &&
                    (m = JSON.stringify(m, null, 2)),
                  P.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === o
                          ? 'wide-screen-element-warp container-warp'
                          : 'mobile-screen-element-warp',
                      key: a,
                      id: a,
                    },
                    P.createElement(
                      'div',
                      { className: 'element-title' },
                      P.createElement(
                        'span',
                        { className: 'title-text warning-text' },
                        p ? '[只读]' : '',
                      ),
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === o && r.title.length > (p ? 4 : 6)
                              ? r.title
                              : '',
                        },
                        r.title,
                      ),
                      r.description &&
                        P.createElement(
                          Q.Tooltip,
                          { title: r.description, placement: 'top' },
                          P.createElement(re.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    P.createElement(
                      'div',
                      { className: 'content-item' },
                      c &&
                        P.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          P.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          P.createElement(
                            'div',
                            { className: 'warning-text' },
                            s,
                          ),
                        ),
                      P.createElement(ie(), {
                        id: 'json_area_ace',
                        value: (0, Y.GT)(u) ? u : m,
                        className: 'code-area-item',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
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
          })(P.PureComponent);
        ve.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Ne = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
              indexRoute2keyRoute: e.JSONSchemaStore.indexRoute2keyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
            };
          })((0, I.observer)(ve)),
          De = __webpack_require__(566),
          Re = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.nodeKey,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(t),
                  i = n.readOnly || !1,
                  l = n.isRequired || !1;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: a,
                    id: a,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      i ? '[只读]' : '',
                    ),
                    P.createElement(
                      Q.Tooltip,
                      {
                        title: 'wideScreen' === r ? n.description : '',
                        placement: 'top',
                      },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r &&
                            n.title &&
                            n.title.length > (i ? 4 : 6)
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                    'mobileScreen' === r &&
                      n.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.Input, {
                        style: { display: 'inline-block' },
                        disabled: i,
                        required: l,
                        placeholder: n.placeholder || '请输入' + n.title,
                        defaultValue: o || n.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        Re.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var we = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Re)),
          Je =
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
              j()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  ue.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    ue.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.keyRoute,
                    n = t.nodeKey,
                    r = t.indexRoute,
                    o = t.targetJsonSchema,
                    i = t.pageScreen,
                    l = this.state,
                    c = l.jsonView,
                    s = l.isClosed,
                    u = l.isShowFilter,
                    p = o.type,
                    m = o.properties.type || {},
                    d = o.properties.data || {},
                    y = o.properties.filter || {},
                    h = m.default;
                  return P.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === i
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp',
                      key: n,
                      id: n,
                    },
                    P.createElement(
                      'div',
                      { className: 'element-title' },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === i && o.title.length > 6
                              ? o.title
                              : '',
                        },
                        o.title,
                      ),
                      o.description &&
                        P.createElement(
                          Q.Tooltip,
                          { title: o.description, placement: 'top' },
                          P.createElement(re.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    P.createElement(
                      'div',
                      { className: 'element-title-card-warp content-item' },
                      P.createElement(
                        'div',
                        {
                          className: 'element-title',
                          onClick: function (t) {
                            e.setState({ isClosed: !s }),
                              t.preventDefault(),
                              t.stopPropagation();
                          },
                        },
                        P.createElement(
                          'span',
                          { className: 'title-text' },
                          '数据源配置',
                        ),
                        s
                          ? P.createElement(re.RightOutlined, {
                              className: 'close-operate-btn',
                            })
                          : P.createElement(re.DownOutlined, {
                              className: 'close-operate-btn',
                            }),
                        P.createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (t) {
                              e.setState({ jsonView: !c }),
                                t.preventDefault(),
                                t.stopPropagation();
                            },
                          },
                          P.createElement(
                            Q.Tooltip,
                            { title: c ? '关闭源码模式' : '开启源码模式' },
                            P.createElement(_e, {
                              className: c ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                      ),
                      P.createElement(
                        'div',
                        {
                          className:
                            'content-item object-content ' +
                            (c ? 'json-view-array' : '') +
                            ' ' +
                            (s ? 'closed' : ''),
                        },
                        !c &&
                          'local' === h &&
                          P.createElement(
                            P.Fragment,
                            null,
                            P.createElement(
                              'div',
                              { className: 'ace-editor-box code-area-item' },
                              P.createElement(
                                Q.Tooltip,
                                {
                                  title: u
                                    ? '点击隐藏数据过滤器'
                                    : '点击显示数据过滤器',
                                  placement: 'top',
                                },
                                P.createElement(re.FilterOutlined, {
                                  className: 'filter-btn',
                                  onClick: this.switchFilterBtn,
                                }),
                              ),
                              P.createElement(Ne, {
                                parentType: p,
                                jsonKey: 'data',
                                indexRoute: r ? r + '-1' : '1',
                                keyRoute: a ? a + '-data' : 'data',
                                nodeKey: n + '-data',
                                targetJsonSchema: d,
                                key: n + '-data',
                              }),
                            ),
                            u &&
                              P.createElement(De.A, {
                                parentType: p,
                                jsonKey: 'filter',
                                indexRoute: r ? r + '-2' : '2',
                                keyRoute: a ? a + '-filter' : 'filter',
                                nodeKey: n + '-filter',
                                targetJsonSchema: y,
                                key: n + '-filter',
                              }),
                          ),
                        !c &&
                          'remote' === h &&
                          P.createElement(
                            P.Fragment,
                            null,
                            P.createElement(
                              'div',
                              { className: 'url-editor-box' },
                              P.createElement(we, {
                                parentType: p,
                                jsonKey: 'data',
                                indexRoute: r ? r + '-1' : '1',
                                keyRoute: a ? a + '-data' : 'data',
                                nodeKey: n + '-data',
                                targetJsonSchema: d,
                                key: n + '-data',
                              }),
                              P.createElement(
                                Q.Tooltip,
                                {
                                  title: '点击设置数据过滤器',
                                  placement: 'top',
                                },
                                P.createElement(re.FilterOutlined, {
                                  className: 'filter-url-btn',
                                  onClick: this.switchFilterBtn,
                                }),
                              ),
                            ),
                            u &&
                              P.createElement(De.A, {
                                parentType: p,
                                jsonKey: 'filter',
                                indexRoute: r ? r + '-2' : '2',
                                keyRoute: a ? a + '-filter' : 'filter',
                                nodeKey: n + '-filter',
                                targetJsonSchema: y,
                                key: n + '-filter',
                              }),
                          ),
                        c && P.createElement(se, this.props),
                      ),
                    ),
                  );
                }),
                t
              );
            })(P.PureComponent));
        Je.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var ke = (0, I.inject)(function (e) {
            return {
              triggerChange: e.JSONEditorStore.triggerChange,
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Je)),
          Ce = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.keyRoute,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = e.getJSONDataByKeyRoute,
                  i = a && o(a),
                  l = n.readOnly || !1,
                  c = n.isRequired || !1;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: t,
                    id: t,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      l ? '[只读]' : '',
                    ),
                    P.createElement(
                      Q.Tooltip,
                      {
                        title: 'wideScreen' === r ? n.description : '',
                        placement: 'top',
                      },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r &&
                            n.title &&
                            n.title.length > (l ? 4 : 6)
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                    'mobileScreen' === r &&
                      n.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.Input, {
                        style: { display: 'inline-block' },
                        disabled: l,
                        required: c,
                        placeholder: n.placeholder || '请输入' + n.title,
                        defaultValue: i || n.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        Ce.propTypes = {
          parentType: A().any,
          jsonKey: A().string,
          indexRoute: A().any,
          keyRoute: A().any,
          nodeKey: A().string,
          targetJsonSchema: A().any,
          onChange: A().any,
        };
        var xe = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
            };
          })((0, I.observer)(Ce)),
          Ke = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              j()(t, e),
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
                  if (!(0, G.isObject)(a) && '' !== a)
                    try {
                      l = JSON.parse(a);
                    } catch (e) {
                      console.log('当前数据源的请求参数格式异常'), (l = {});
                    }
                  i = (0, G.json2treeData)(l);
                }
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === t
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: r + '-dataRoute-select',
                    id: r + '-dataRoute-select',
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    '数据路径选择',
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.TreeSelect, {
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
          })(P.PureComponent);
        Ke.propTypes = {
          pageScreen: A().any,
          mockData: A().any,
          dataRoute: A().any,
          onChange: A().func,
          nodeKey: A().string,
        };
        var je = (0, I.inject)(function (e) {
            return { pageScreen: e.JSONSchemaStore.pageScreen };
          })((0, I.observer)(Ke)),
          Pe = (__webpack_require__(581), Q.Select.Option),
          Be = (function (e) {
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
                  var t = (0, Y.bQ)((0, H.toJS)(a.props.dynamicDataObj[e]));
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
                  var n = (0, G.dataRoute2dataPath)(e);
                  (t.filter = 'return ' + n + ';'), a.props.configDataChange(t);
                }),
                a
              );
            }
            return (
              j()(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = this.props,
                  a = t.pageScreen,
                  n = t.curConfigData,
                  r = t.nodeKey,
                  o = t.keyRoute,
                  i = t.dynamicDataList,
                  l = t.dynamicDataObj,
                  c = t.dynamicDataApiScopeList,
                  s = ((0, t.getJSONDataByKeyRoute)(o), n.dataName),
                  u = n.dataRoute,
                  p = n.body || {};
                if (!(0, X.Gv)(p) && '' !== p)
                  try {
                    p = JSON.parse(p);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (p = {});
                  }
                var m = l[s] || {};
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: r,
                    id: r,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    n.title + ' (接口下发）',
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item object-content' },
                    P.createElement(
                      'div',
                      {
                        className: 'remote-dynamic-data-schema',
                        key: r + '-remote-dynamic-data',
                        id: r + '-remote-dynamic-data',
                      },
                      P.createElement(
                        'div',
                        {
                          className:
                            'wideScreen' === a
                              ? 'wide-screen-element-warp'
                              : 'mobile-screen-element-warp',
                          key: r + '-' + s,
                          id: r + '-' + s,
                        },
                        P.createElement(
                          'div',
                          { className: 'element-title' },
                          '数据源列表',
                        ),
                        P.createElement(
                          'div',
                          { className: 'content-item' },
                          P.createElement(
                            'div',
                            { className: 'form-item-box' },
                            P.createElement(
                              Q.Select,
                              {
                                className: 'dynamic-data-select',
                                defaultValue: s,
                                onSelect: this.dynamicDataChange,
                              },
                              i &&
                                (0, X.cy)(i) &&
                                i.map(function (e) {
                                  return P.createElement(
                                    Pe,
                                    { value: e.name, key: e.id },
                                    e.title,
                                  );
                                }),
                            ),
                          ),
                        ),
                      ),
                      s &&
                        p &&
                        Object.keys(p).length > 0 &&
                        P.createElement(
                          'div',
                          {
                            className:
                              ('wideScreen' === a
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp') +
                              ' element-title-card-warp',
                            key: r + '-' + s + '-params',
                            id: r + '-' + s + '-params',
                          },
                          P.createElement(
                            'div',
                            { className: 'element-title' },
                            '请求参数配置',
                          ),
                          P.createElement(
                            'div',
                            { className: 'content-item object-content' },
                            Object.keys(p).map(function (t) {
                              var n = p[t];
                              n.readOnly = !(!n.scope || 'static' !== n.scope);
                              var o = r + '-body-' + t,
                                i = c[n.scope];
                              return (
                                i &&
                                  n.title.indexOf(i) < 0 &&
                                  (n.title = n.title + '（' + i + '）'),
                                (n.default = n.value),
                                P.createElement(xe, {
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
                      s &&
                        p &&
                        0 === Object.keys(p).length &&
                        P.createElement(
                          'div',
                          {
                            className:
                              'wideScreen' === a
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: r + '-' + s + '-empty',
                            id: r + '-' + s + '-empty',
                          },
                          P.createElement(
                            'div',
                            { className: 'element-title' },
                            '请求参数配置',
                          ),
                          P.createElement(
                            'div',
                            { className: 'content-item' },
                            P.createElement(
                              'span',
                              { className: 'warning-text' },
                              '无可配置的请求参数',
                            ),
                          ),
                        ),
                      s &&
                        P.createElement(je, {
                          nodeKey: r + '-dataRoute',
                          mockData: m.respMock,
                          dataRoute: u,
                          onChange: this.dataRouteChange,
                          key: r + '-dataRoute',
                        }),
                      s &&
                        P.createElement(De.A, {
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
          })(P.PureComponent);
        Be.propTypes = {
          pageScreen: A().any,
          keyRoute: A().any,
          nodeKey: A().string,
          curConfigData: A().object,
          configDataChange: A().func,
          dynamicDataList: A().array,
          dynamicDataObj: A().object,
          dynamicDataApiScopeList: A().object,
        };
        var Te = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              dynamicDataList: e.JSONEditorStore.dynamicDataList,
              dynamicDataObj: e.JSONEditorStore.dynamicDataObj,
              dynamicDataApiScopeList:
                e.JSONEditorStore.dynamicDataApiScopeList,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
            };
          })((0, I.observer)(Be)),
          Ve = (__webpack_require__(759), Q.Select.Option),
          Ie = (function (e) {
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
                    i = (0, Y.bQ)((0, H.toJS)(r[e]));
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
                    var i = (0, G.dataRoute2dataPath)(e);
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.keyRoute,
                  n = t.nodeKey,
                  r = t.indexRoute,
                  o = t.targetJsonSchema,
                  i = t.dynamicDataList,
                  l = t.dynamicDataObj,
                  c = t.dynamicDataApiScopeList,
                  s = t.getJSONDataByKeyRoute,
                  u = t.pageScreen,
                  p = this.state.isShowFilter,
                  m = o.type,
                  d = s(a) || {},
                  y = o.properties.type || {},
                  h = d.type || y.default,
                  g = d.config || {},
                  S = g.dataName,
                  _ = g.dataRoute,
                  f = g.body || {};
                if (!(0, X.Gv)(f) && '' !== f)
                  try {
                    f = JSON.parse(f);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (f = {});
                  }
                var E = l[S] || {},
                  b = o.properties.data || {};
                return P.createElement(
                  'div',
                  {
                    className1:
                      'mobile-screen-element-warp dynamic-data-schema',
                    className:
                      'wideScreen' === u
                        ? 'dynamic-data-schema wide-screen-element-warp'
                        : 'dynamic-data-schema mobile-screen-element-warp',
                    key: n,
                    id: n,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text' },
                      o.title,
                    ),
                    o.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: o.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'dynamic-data-tab-radio-box' },
                      P.createElement(
                        'div',
                        { className: 'dynamic-data-tab-radio' },
                        P.createElement(
                          'div',
                          {
                            className:
                              'tab-radio ' +
                              ('local' === h ? 'tab-radio-active' : ''),
                            onClick: function () {
                              e.tabChange('local');
                            },
                          },
                          '本地数据',
                        ),
                        P.createElement(
                          'div',
                          {
                            className:
                              'tab-radio ' +
                              ('remote' === h ? 'tab-radio-active' : ''),
                            onClick: function () {
                              e.tabChange('remote');
                            },
                          },
                          '接口数据',
                        ),
                      ),
                    ),
                    P.createElement(
                      'div',
                      {
                        className:
                          'dynamic-dat-tabPane ' +
                          ('local' === h ? 'dynamic-dat-tabPane-active' : ''),
                      },
                      P.createElement(
                        'div',
                        { className: 'json-form-box' },
                        P.createElement(
                          Q.Tooltip,
                          {
                            title: p
                              ? '点击隐藏数据过滤器'
                              : '点击显示数据过滤器',
                            placement: 'top',
                          },
                          P.createElement(re.FilterOutlined, {
                            className: 'filter-btn',
                            onClick: this.switchFilterBtn,
                          }),
                        ),
                        P.createElement(Ne, {
                          parentType: m,
                          jsonKey: 'data',
                          indexRoute: r ? r + '-2' : '2',
                          keyRoute: a ? a + '-data' : 'data',
                          nodeKey: n + '-data',
                          targetJsonSchema: b,
                          key: n + '-data',
                        }),
                        P.createElement(
                          'div',
                          { className: 'filter-func-box' },
                          p &&
                            P.createElement(De.A, {
                              isIgnoreWarn: !0,
                              parentType: m,
                              jsonKey: 'localFilter',
                              indexRoute: r ? r + '-3' : '3',
                              keyRoute: a ? a + '-localFilter' : 'localFilter',
                              nodeKey: n + '-localFilter',
                              targetJsonSchema: o.properties.localFilter,
                              key: n + '-localFilter',
                            }),
                        ),
                      ),
                    ),
                    P.createElement(
                      'div',
                      {
                        className:
                          'dynamic-dat-tabPane ' +
                          ('remote' === h ? 'dynamic-dat-tabPane-active' : ''),
                      },
                      P.createElement(
                        'div',
                        { className: 'json-form-box' },
                        P.createElement(
                          'div',
                          {
                            className:
                              'wideScreen' === u
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: n + '-' + S,
                            id: n + '-' + S,
                          },
                          P.createElement(
                            'div',
                            { className: 'element-title' },
                            '数据源列表',
                          ),
                          P.createElement(
                            'div',
                            { className: 'content-item' },
                            P.createElement(
                              'div',
                              { className: 'form-item-box' },
                              P.createElement(
                                Q.Select,
                                {
                                  className: 'dynamic-data-select',
                                  defaultValue: S,
                                  onSelect: this.dynamicDataChange,
                                },
                                i &&
                                  (0, X.cy)(i) &&
                                  i.map(function (e) {
                                    return P.createElement(
                                      Ve,
                                      { value: e.name, key: e.id },
                                      e.title,
                                    );
                                  }),
                              ),
                            ),
                          ),
                        ),
                        S &&
                          f &&
                          Object.keys(f).length > 0 &&
                          P.createElement(
                            'div',
                            {
                              className:
                                ('wideScreen' === u
                                  ? 'wide-screen-element-warp'
                                  : 'mobile-screen-element-warp') +
                                ' element-title-card-warp',
                              key: n + '-' + S + '-params',
                              id: n + '-' + S + '-params',
                            },
                            P.createElement(
                              'div',
                              { className: 'element-title' },
                              '请求参数配置',
                            ),
                            P.createElement(
                              'div',
                              { className: 'content-item object-content' },
                              Object.keys(f).map(function (t) {
                                var r = (0, Y.bQ)(f[t]);
                                r.readOnly = !(
                                  !r.scope || 'static' !== r.scope
                                );
                                var o = a + '-config-body-' + t,
                                  i = c[r.scope];
                                if (
                                  (i &&
                                    'dynamic' !== r.scope &&
                                    (r.title = r.title + '（' + i + '）'),
                                  'dynamic' !== r.scope)
                                )
                                  return P.createElement(xe, {
                                    pageScreen: u,
                                    jsonKey: t,
                                    keyRoute: o + '-value',
                                    nodeKey: o,
                                    targetJsonSchema: r,
                                    key: o,
                                  });
                                var l = n + '-' + S + '-params-' + t;
                                return P.createElement(Te, {
                                  pageScreen: u,
                                  nodeKey: l,
                                  keyRoute: a
                                    ? a + '-config-body-' + t
                                    : 'config-body-${paramKey}',
                                  curConfigData: r || {},
                                  configDataChange: function (a) {
                                    e.paramsConfigChange(t, a);
                                  },
                                  key: o,
                                });
                              }),
                            ),
                          ),
                        S &&
                          f &&
                          0 === Object.keys(f).length &&
                          P.createElement(
                            'div',
                            {
                              className:
                                'wideScreen' === u
                                  ? 'wide-screen-element-warp'
                                  : 'mobile-screen-element-warp',
                              key: n + '-' + S + '-empty',
                              id: n + '-' + S + '-empty',
                            },
                            P.createElement(
                              'div',
                              { className: 'element-title' },
                              '请求参数配置',
                            ),
                            P.createElement(
                              'div',
                              { className: 'content-item' },
                              P.createElement(
                                'span',
                                { className: 'warning-text' },
                                '无可配置的请求参数',
                              ),
                            ),
                          ),
                        S &&
                          P.createElement(je, {
                            nodeKey: n + '-config-dataRoute-' + _,
                            mockData: E.respMock,
                            dataRoute: _,
                            onChange: this.dataRouteChange,
                            key: n + '-config-dataRoute',
                          }),
                        S &&
                          P.createElement(De.A, {
                            isReadOnly: !0,
                            isIgnoreWarn: !0,
                            parentType: m,
                            jsonKey: 'filter',
                            indexRoute: r ? r + '-1-2' : '1-2',
                            keyRoute: a
                              ? a + '-config-filter'
                              : 'config-filter',
                            nodeKey: n + '-config-filter-' + _,
                            targetJsonSchema:
                              o.properties.config &&
                              o.properties.config.properties.filter,
                            key: n + '-config-filter',
                          }),
                      ),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        Ie.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
          dynamicDataList: A().array,
          dynamicDataObj: A().object,
          dynamicDataApiScopeList: A().object,
        };
        var Me = (0, I.inject)(function (e) {
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
          })((0, I.observer)(Ie)),
          Ae = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this,
                  t = this.props,
                  a = t.keyRoute,
                  n = t.nodeKey,
                  r = t.indexRoute,
                  o = t.targetJsonSchema,
                  i = t.pageScreen,
                  l = o.type,
                  c = this.state,
                  s = c.jsonView,
                  u = c.isClosed,
                  p = o.properties.type || {},
                  m = o.properties.register || {},
                  d = o.properties.actionFunc || {},
                  y = o.properties.trigger || {},
                  h = o.properties.eventData || {},
                  g = p.default;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === i
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: n,
                    id: n,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title:
                          'wideScreen' === i && o.title.length > 6
                            ? o.title
                            : '',
                      },
                      o.title,
                    ),
                    o.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: o.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'element-title-card-warp content-item' },
                    P.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: function (t) {
                          e.setState({ isClosed: !u }),
                            t.preventDefault(),
                            t.stopPropagation();
                        },
                      },
                      P.createElement(
                        'span',
                        { className: 'title-text' },
                        '事件配置',
                      ),
                      u
                        ? P.createElement(re.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : P.createElement(re.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      P.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function (t) {
                            e.setState({ jsonView: !s }),
                              t.preventDefault(),
                              t.stopPropagation();
                          },
                        },
                        P.createElement(
                          Q.Tooltip,
                          { title: s ? '关闭源码模式' : '开启源码模式' },
                          P.createElement(_e, {
                            className: s ? 'info-icon active' : 'info-icon',
                          }),
                        ),
                      ),
                    ),
                    P.createElement(
                      'div',
                      {
                        className:
                          'content-item object-content ' +
                          (s ? 'json-view-array' : '') +
                          ' ' +
                          (u ? 'closed' : ''),
                      },
                      !s &&
                        'on' === g &&
                        P.createElement(
                          P.Fragment,
                          null,
                          m &&
                            P.createElement(xe, {
                              parentType: l,
                              jsonKey: 'register',
                              indexRoute: r ? r + '-1' : '1',
                              keyRoute: a ? a + '-register' : 'register',
                              nodeKey: n + '-register',
                              targetJsonSchema: m,
                              key: n + '-register',
                            }),
                          d &&
                            P.createElement(De.A, {
                              parentType: l,
                              jsonKey: 'actionFunc',
                              indexRoute: r ? r + '-2' : '2',
                              keyRoute: a ? a + '-actionFunc' : 'actionFunc',
                              nodeKey: n + '-actionFunc',
                              targetJsonSchema: d,
                              key: n + '-actionFunc',
                            }),
                        ),
                      !s &&
                        'emit' === g &&
                        P.createElement(
                          P.Fragment,
                          null,
                          y &&
                            P.createElement(xe, {
                              parentType: l,
                              jsonKey: 'trigger',
                              indexRoute: r ? r + '-1' : '1',
                              keyRoute: a ? a + '-trigger' : 'trigger',
                              nodeKey: n + '-trigger',
                              targetJsonSchema: y,
                              key: n + '-trigger',
                            }),
                          h &&
                            P.createElement(Ne, {
                              parentType: l,
                              jsonKey: 'eventData',
                              indexRoute: r ? r + '-2' : '2',
                              keyRoute: a ? a + '-eventData' : 'eventData',
                              nodeKey: n + '-eventData',
                              targetJsonSchema: h,
                              key: n + '-eventData',
                            }),
                        ),
                      s && P.createElement(se, this.props),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        Ae.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Le = (0, I.inject)(function (e) {
            return {
              triggerChange: e.JSONEditorStore.triggerChange,
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Ae)),
          qe = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.nodeKey,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(t),
                  i = n.readOnly || !1,
                  l = n.properties.unit,
                  c = o.quantity,
                  s = P.createElement('span', null, 'percent' === c ? '%' : c),
                  u = (0, Y.y8)(n.type);
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (u ? 'two-col-element-warp' : ''),
                    key: a,
                    id: a,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      i ? '[只读]' : '',
                    ),
                    P.createElement(
                      Q.Tooltip,
                      { title: n.description, placement: 'top' },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (u || 'wideScreen' === r) &&
                            n.title.length > (i ? 4 : 6)
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.InputNumber, {
                        style: { display: 'inline-block', width: '120px' },
                        addonAfter: s,
                        disabled: i,
                        placeholder:
                          l.placeholder ||
                          n.placeholder ||
                          '请输入' + l.title ||
                          0,
                        defaultValue: o.unit || l.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        qe.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var We = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(qe)),
          Fe =
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
                      c = r.unit || i.default;
                    if (
                      ((a.layoutStyleObj = {
                        top: '',
                        right: '',
                        bottom: '',
                        left: '',
                        quantity: l,
                      }),
                      c)
                    ) {
                      var s = c.split(' ');
                      1 === s.length
                        ? s[0] && s[0].indexOf(l) >= 0
                          ? ((a.layoutStyleObj.top = s[0]),
                            (a.layoutStyleObj.right = s[0]),
                            (a.layoutStyleObj.bottom = s[0]),
                            (a.layoutStyleObj.left = s[0]))
                          : 'auto' === s[0]
                            ? ((a.layoutStyleObj.top = 'auto'),
                              (a.layoutStyleObj.right = 'auto'),
                              (a.layoutStyleObj.bottom = 'auto'),
                              (a.layoutStyleObj.left = 'auto'))
                            : ((a.layoutStyleObj.top = '' + s[0] + l),
                              (a.layoutStyleObj.right = '' + s[0] + l),
                              (a.layoutStyleObj.bottom = '' + s[0] + l),
                              (a.layoutStyleObj.left = '' + s[0] + l))
                        : ((a.layoutStyleObj.top = s[0]),
                          (a.layoutStyleObj.right = s[1]),
                          (a.layoutStyleObj.bottom = s[2] || s[0]),
                          (a.layoutStyleObj.left = s[3] || s[1]));
                    } else
                      0 === c
                        ? ((a.layoutStyleObj.top = '' + c + l),
                          (a.layoutStyleObj.right = '' + c + l),
                          (a.layoutStyleObj.bottom = '' + c + l),
                          (a.layoutStyleObj.left = '' + c + l))
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
              j()(t, e);
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
                    n = t.targetJsonSchema,
                    r = t.pageScreen,
                    o = this.state,
                    i = o.renderAction,
                    l = o.layoutStyleLock,
                    c = n.readOnly || !1;
                  return P.createElement(
                    'div',
                    {
                      className:
                        ('wideScreen' === r
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp') +
                        ' ' +
                        (i ? 'render-mark' : ''),
                      id: a,
                    },
                    P.createElement(
                      'div',
                      { className: 'element-title' },
                      P.createElement(
                        'span',
                        { className: 'title-text warning-text' },
                        c ? '[只读]' : '',
                      ),
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              'wideScreen' === r && n.title.length > (c ? 4 : 6)
                                ? n.title
                                : '',
                          },
                          n.title,
                        ),
                      ),
                    ),
                    P.createElement(
                      'div',
                      { className: 'content-item layout-box-style-container' },
                      P.createElement(
                        'div',
                        { className: 'center-box' },
                        P.createElement(
                          Q.Tooltip,
                          {
                            placement: 'top',
                            title: l ? '点击解锁联动' : '点击联动',
                          },
                          P.createElement('div', {
                            className: l ? 'lock-icon' : 'lock-icon unlock',
                            onClick: function () {
                              e.setState({ layoutStyleLock: !l });
                            },
                          }),
                        ),
                      ),
                      P.createElement(Q.InputNumber, {
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
                          e.setLayoutBoxStyle(a, l, 'top');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, l, 'top');
                        },
                      }),
                      P.createElement(Q.InputNumber, {
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
                          e.setLayoutBoxStyle(a, l, 'right');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, l, 'right');
                        },
                      }),
                      P.createElement(Q.InputNumber, {
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
                          e.setLayoutBoxStyle(a, l, 'bottom');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, l, 'bottom');
                        },
                      }),
                      P.createElement(Q.InputNumber, {
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
                          e.setLayoutBoxStyle(a, l, 'left');
                        },
                        onBlur: function (t) {
                          var a = t.target.value;
                          e.setLayoutBoxStyle(a, l, 'left');
                        },
                      }),
                    ),
                  );
                }),
                t
              );
            })(P.PureComponent));
        Fe.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Ue = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Fe)),
          ze = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.keyRoute,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(a),
                  i = n.options;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: t,
                    id: t,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      Q.Tooltip,
                      {
                        title: 'wideScreen' === r ? n.description : '',
                        placement: 'top',
                      },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r && n.title.length > 6
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                    'mobileScreen' === r &&
                      n.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(
                        Q.Radio.Group,
                        {
                          style: { display: 'inline-block' },
                          onChange: this.handleValueChange,
                          defaultValue: o || n.default,
                        },
                        i &&
                          i.length > 0 &&
                          i.map(function (e, a) {
                            var n = e.label || e.name,
                              r = t + '-radio-' + n;
                            return P.createElement(
                              Q.Radio,
                              { value: e.value, key: r },
                              e.value,
                            );
                          }),
                      ),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        ze.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var He = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(ze)),
          Ge = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.keyRoute,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(a),
                  i = n.options;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    key: t,
                    id: t,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      Q.Tooltip,
                      {
                        title: 'wideScreen' === r ? n.description : '',
                        placement: 'top',
                      },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r && n.title.length > 6
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                    'mobileScreen' === r &&
                      n.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(
                        Q.Checkbox.Group,
                        {
                          style: { display: 'inline-block' },
                          onChange: this.handleValueChange,
                          defaultValue: o || n.default,
                        },
                        i &&
                          i.length > 0 &&
                          i.map(function (e, a) {
                            var n = e.label || e.name,
                              r = t + '-select-' + n;
                            return P.createElement(
                              Q.Checkbox,
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
          })(P.PureComponent);
        Ge.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var $e = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Ge)),
          Ze = Q.Input.TextArea,
          Qe = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.nodeKey,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(t),
                  i = n.readOnly || !1,
                  l = n.isRequired || !1;
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp container-warp'
                        : 'mobile-screen-element-warp',
                    key: a,
                    id: a,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      i ? '[只读]' : '',
                    ),
                    P.createElement(
                      Q.Tooltip,
                      {
                        title: 'wideScreen' === r ? n.description : '',
                        placement: 'top',
                      },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r &&
                            n.title &&
                            n.title.length > (i ? 4 : 6)
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                    'mobileScreen' === r &&
                      n.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Ze, {
                        style: { display: 'inline-block' },
                        rows: 4,
                        disabled: i,
                        required: l,
                        placeholder: n.placeholder || '请输入' + n.title,
                        defaultValue: o || n.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        Qe.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Ye = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Qe)),
          Xe = require('braft-editor'),
          et = __webpack_require__.n(Xe),
          tt = require('braft-extensions/dist/color-picker'),
          at = __webpack_require__.n(tt),
          nt =
            (require('braft-extensions/dist/color-picker.css'),
            require('braft-extensions/dist/table')),
          rt = __webpack_require__.n(nt);
        require('braft-extensions/dist/table.css'),
          require('braft-editor/dist/index.css'),
          __webpack_require__(632),
          et().use([at()({ theme: 'light' })]),
          et().use(
            rt()({
              defaultColumns: 3,
              defaultRows: 3,
              withDropdown: !1,
              columnResizable: !1,
              exportAttrString: 'border="1" style="border-collapse: collapse"',
            }),
          );
        var ot = (function (e) {
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
          j()(t, e);
          var a = t.prototype;
          return (
            (a.componentWillMount = function () {
              ue.x.call(this),
                this.props.pageScreen &&
                  'wideScreen' === this.props.pageScreen &&
                  this.setState({ isClosed: !1 });
            }),
            (a.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute
                ? ue.x.call(this, e.keyRoute)
                : e.pageScreen !== this.props.pageScreen &&
                  e.pageScreen &&
                  'wideScreen' === e.pageScreen &&
                  this.setState({ isClosed: !1 });
            }),
            (a.render = function () {
              var e = this,
                t = this.props,
                a = t.keyRoute,
                n = t.nodeKey,
                r = t.targetJsonSchema,
                o = t.pageScreen,
                i = t.getJSONDataByKeyRoute,
                l = this.state.isClosed,
                c = i(a),
                s = et().createEditorState(c),
                u = r.readOnly || !1;
              return P.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'text-editor-box wide-screen-element-warp'
                      : 'text-editor-box mobile-screen-element-warp',
                  key: n,
                  id: n,
                },
                P.createElement(
                  'div',
                  {
                    className: 'element-title',
                    onClick: function (t) {
                      e.setState({ isClosed: !l }),
                        t.preventDefault(),
                        t.stopPropagation();
                    },
                  },
                  P.createElement(
                    'span',
                    { className: 'title-text warning-text' },
                    u ? '[只读]' : '',
                  ),
                  P.createElement(
                    'span',
                    {
                      className: 'title-text',
                      title:
                        'wideScreen' === o &&
                        r.title &&
                        r.title.length > (u ? 4 : 6)
                          ? r.title
                          : '',
                    },
                    r.title,
                  ),
                  r.description &&
                    P.createElement(
                      Q.Tooltip,
                      { title: r.description, placement: 'top' },
                      P.createElement(re.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                  l
                    ? P.createElement(re.RightOutlined, {
                        className: 'close-operate-btn',
                      })
                    : P.createElement(re.DownOutlined, {
                        className: 'close-operate-btn',
                      }),
                ),
                P.createElement(
                  'div',
                  { className: 'content-item ' + (l ? 'closed' : '') },
                  P.createElement(
                    'div',
                    { className: 'form-item-box' },
                    P.createElement(et(), {
                      key: n + '-textEditor',
                      controls:
                        'wideScreen' === o
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
                      defaultValue: s,
                      readOnly: u,
                      placeholder: r.placeholder || '请输入' + r.title,
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
        })(P.PureComponent);
        ot.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
          pageScreen: A().any,
        };
        var it = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(ot)),
          lt =
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
                      ? Q.message.warning(
                          '小于设定的最小数值' + r.minimum + '，请重新输入。',
                        )
                      : e > r.maximum
                        ? Q.message.warning(
                            '超过设定的最大数值' + r.maximum + '，请重新输入。',
                          )
                        : (o(n, e),
                          a.setState({ renderTime: new Date().getTime() }));
                  }),
                  (a.numberChange = function (e, t) {
                    var n = 0;
                    t && (n = t),
                      'plus' === e ? (n += 1) : 'minus' === e && (n -= 1),
                      a.handleValueChange(n);
                  }),
                  (a.state = { renderTime: new Date().getTime() }),
                  (a.handleValueChange = a.handleValueChange.bind(a)),
                  a
                );
              }
              j()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  ue.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    ue.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.keyRoute,
                    n = t.nodeKey,
                    r = t.targetJsonSchema,
                    o = t.pageScreen,
                    i = t.getJSONDataByKeyRoute,
                    l = this.state.renderTime,
                    c = i(a),
                    s = r.readOnly || !1,
                    u = r.isRequired || !1,
                    p = (0, Y.y8)(r.type);
                  return P.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === o
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp ' +
                            (p ? 'two-col-element-warp' : ''),
                      key: n + '-' + l,
                      id: n,
                    },
                    P.createElement(
                      'div',
                      { className: 'element-title' },
                      P.createElement(
                        'span',
                        { className: 'title-text warning-text' },
                        s ? '[只读]' : '',
                      ),
                      P.createElement(
                        Q.Tooltip,
                        { title: r.description, placement: 'top' },
                        P.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              (p || 'wideScreen' === o) &&
                              r.title.length > (s ? 4 : 6)
                                ? r.title
                                : '',
                          },
                          r.title,
                        ),
                      ),
                    ),
                    P.createElement(
                      'div',
                      { className: 'content-item' },
                      P.createElement(
                        'div',
                        { className: 'form-item-box' },
                        P.createElement(
                          'div',
                          { className: 'input-number-wrap' },
                          P.createElement(
                            'div',
                            {
                              className: 'number-btn minus',
                              title: '点击减1',
                              onClick: function () {
                                e.numberChange(
                                  'minus',
                                  (0, Y.GT)(c) ? c : r.default,
                                );
                              },
                            },
                            '-',
                          ),
                          P.createElement(Q.InputNumber, {
                            className: 'number-cont',
                            style: { display: 'inline-block' },
                            disabled: s,
                            required: u,
                            placeholder: r.placeholder || '请输入' + r.title,
                            min: r.minimum || 0,
                            max: r.maximum || 1e6,
                            defaultValue: (0, Y.GT)(c) ? c : r.default,
                            onChange: this.handleValueChange,
                          }),
                          P.createElement(
                            'div',
                            {
                              className: 'number-btn plus',
                              title: '点击加1',
                              onClick: function () {
                                e.numberChange(
                                  'plus',
                                  (0, Y.GT)(c) ? c : r.default,
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
            })(P.PureComponent));
        lt.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var ct = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(lt)),
          st = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.nodeKey,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(t),
                  i = (0, Y.y8)(n.type);
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (i ? 'two-col-element-warp' : ''),
                    key: a,
                    id: a,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      Q.Tooltip,
                      { title: n.description, placement: 'top' },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (i || 'wideScreen' === r) && n.title.length > 6
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.Switch, {
                        style: { display: 'inline-block' },
                        defaultChecked: void 0 !== o ? o : n.default,
                        checkedChildren: 'true',
                        unCheckedChildren: 'false',
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        st.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var ut = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(st)),
          pt = require('moment'),
          mt = __webpack_require__.n(pt),
          dt = {
            'date-time': 'YYYY-MM-DD HH:mm',
            date: 'YYYY-MM-DD',
            time: 'HH:mm',
          },
          yt = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.keyRoute,
                  a = e.nodeKey,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = e.getJSONDataByKeyRoute,
                  i = n.type,
                  l = n.readOnly || !1,
                  c = n.isRequired || !1,
                  s = dt[i] || dt[0],
                  u = o(t) || n.default,
                  p = (0, Y.y8)(i);
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (p ? 'two-col-element-warp' : ''),
                    key: a,
                    id: a,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      l ? '[只读]' : '',
                    ),
                    P.createElement(
                      Q.Tooltip,
                      { title: n.description, placement: 'top' },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (p || 'wideScreen' === r) &&
                            n.title.length > (l ? 4 : 6)
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.DatePicker, {
                        style: { display: 'inline-block' },
                        disabled: l,
                        required: c,
                        showTime: 'date-time' === i,
                        format: s,
                        placeholder: n.placeholder || '请输入' + n.title,
                        defaultValue: u && mt()(u, s),
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        yt.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var ht = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(yt)),
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.keyRoute,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(a) || n.default,
                  i = n.readOnly || !1,
                  l = n.isRequired || !1,
                  c = (0, Y.y8)(n.type);
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (c ? 'two-col-element-warp' : ''),
                    key: t,
                    id: t,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      'span',
                      { className: 'title-text warning-text' },
                      i ? '[只读]' : '',
                    ),
                    P.createElement(
                      Q.Tooltip,
                      { title: n.description, placement: 'top' },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            (c || 'wideScreen' === r) &&
                            n.title.length > (i ? 4 : 6)
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box' },
                      P.createElement(Q.TimePicker, {
                        style: { display: 'inline-block' },
                        disabled: i,
                        required: l,
                        placeholder: n.placeholder || '请输入' + n.title,
                        defaultValue: o && mt()(o, 'HH:mm'),
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(P.PureComponent);
        gt.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var St = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(gt)),
          _t = require('react-color'),
          ft =
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
                      Q.message.success('已移除当前设置的颜色值'),
                      a.setState({ renderState: !a.state.renderState });
                  }),
                  (a.state = { renderState: !1, displayColorPicker: !1 }),
                  (a.handleValueChange = a.handleValueChange.bind(a)),
                  a
                );
              }
              j()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  ue.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    ue.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.keyRoute,
                    n = t.nodeKey,
                    r = t.targetJsonSchema,
                    o = t.pageScreen,
                    i = t.getJSONDataByKeyRoute,
                    l = this.state,
                    c = l.renderState,
                    s = l.displayColorPicker,
                    u = i(a),
                    p = (0, Y.y8)(r.type),
                    m = P.createElement(_t.SketchPicker, {
                      className: 'color-sketch-picker',
                      key: n + '-SketchPicker',
                      color: u || r.default,
                      onChange: this.handleValueChange,
                    });
                  return P.createElement(
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
                    P.createElement(
                      'div',
                      { className: 'element-title' },
                      P.createElement(
                        Q.Tooltip,
                        { title: r.description, placement: 'top' },
                        P.createElement(
                          'span',
                          {
                            className: 'title-text',
                            title:
                              (p || 'wideScreen' === o) && r.title.length > 6
                                ? r.title
                                : '',
                          },
                          r.title,
                        ),
                      ),
                    ),
                    P.createElement(
                      'div',
                      { className: 'content-item' },
                      P.createElement(
                        'div',
                        { className: 'form-item-box render-dom-' + c },
                        P.createElement(
                          'div',
                          {
                            className:
                              'color-btn-wrap color-item-form ' +
                              (s ? 'selected' : ''),
                            onClick: function () {
                              e.setState({ displayColorPicker: !s });
                            },
                          },
                          P.createElement(
                            Q.Popover,
                            {
                              content: m,
                              title: '颜色选择器',
                              trigger: 'click',
                            },
                            P.createElement('button', {
                              className: 'ant-input color-btn',
                              style: { backgroundColor: u || r.default },
                            }),
                          ),
                          P.createElement(
                            Q.Tooltip,
                            { title: '点击移除当前颜色值', placement: 'top' },
                            P.createElement(re.CloseOutlined, {
                              className: 'delete-bgColor-btn',
                              onClick: function () {
                                e.deleteColor();
                              },
                            }),
                          ),
                          P.createElement('span', { className: 'arrow' }),
                        ),
                      ),
                    ),
                  );
                }),
                t
              );
            })(P.PureComponent));
        ft.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Et = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(ft)),
          bt =
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
              j()(t, e);
              var a = t.prototype;
              return (
                (a.componentWillMount = function () {
                  ue.x.call(this);
                }),
                (a.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    ue.x.call(this, e.keyRoute);
                }),
                (a.render = function () {
                  var e = this,
                    t = this.props,
                    a = t.nodeKey,
                    n = t.keyRoute,
                    r = t.targetJsonSchema,
                    o = t.pageScreen,
                    i = t.getJSONDataByKeyRoute,
                    l = this.state,
                    c = l.isShowWarn,
                    s = l.warnText,
                    u = r.readOnly || !1,
                    p = i(n);
                  return (
                    (p = void 0 !== p ? p : r.default || '<p>hello</p>'),
                    (0, X.Gv)(p) && (p = JSON.stringify(p, null, 2)),
                    P.createElement(
                      'div',
                      {
                        className:
                          'wideScreen' === o
                            ? 'wide-screen-element-warp container-warp'
                            : 'mobile-screen-element-warp',
                        key: a,
                        id: a,
                      },
                      P.createElement(
                        'div',
                        { className: 'element-title' },
                        P.createElement(
                          'span',
                          { className: 'title-text warning-text' },
                          u ? '[只读]' : '',
                        ),
                        P.createElement(
                          Q.Tooltip,
                          {
                            title: 'wideScreen' === o ? r.description : '',
                            placement: 'top',
                          },
                          P.createElement(
                            'span',
                            {
                              className: 'title-text',
                              title:
                                'wideScreen' === o &&
                                r.title &&
                                r.title.length > (u ? 4 : 6)
                                  ? r.title
                                  : '',
                            },
                            r.title,
                          ),
                        ),
                        'mobileScreen' === o &&
                          r.description &&
                          P.createElement(
                            Q.Tooltip,
                            { title: r.description, placement: 'top' },
                            P.createElement(re.InfoCircleOutlined, {
                              className: 'info-icon',
                            }),
                          ),
                      ),
                      P.createElement(
                        'div',
                        { className: 'content-item' },
                        c &&
                          P.createElement(
                            'div',
                            { className: 'warning-box code-area-item' },
                            P.createElement(
                              'div',
                              { className: 'warning-img' },
                              'X',
                            ),
                            P.createElement(
                              'div',
                              { className: 'warning-text' },
                              s,
                            ),
                          ),
                        P.createElement(ie(), {
                          id: 'code_area_ace',
                          key: a + '-ace',
                          className: 'code-area-item',
                          value: p,
                          mode: 'html',
                          theme: 'monokai',
                          name: 'JS_CODE_EDIT',
                          fontSize: 14,
                          showPrintMargin: !0,
                          showGutter: !0,
                          highlightActiveLine: !0,
                          readOnly: u,
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
            })(P.PureComponent));
        bt.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Ot = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(bt)),
          vt = (__webpack_require__(546), Q.Select.Option),
          Nt = (function (e) {
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
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillMount = function () {
                ue.x.call(this);
              }),
              (a.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  ue.x.call(this, e.keyRoute);
              }),
              (a.render = function () {
                var e = this.props,
                  t = e.nodeKey,
                  a = e.keyRoute,
                  n = e.targetJsonSchema,
                  r = e.pageScreen,
                  o = (0, e.getJSONDataByKeyRoute)(a),
                  i = n.options,
                  l = (0, Y.y8)(n.type);
                return P.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === r
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (l ? 'two-col-element-warp' : ''),
                    key: t,
                    id: t,
                  },
                  P.createElement(
                    'div',
                    { className: 'element-title' },
                    P.createElement(
                      Q.Tooltip,
                      {
                        title: 'wideScreen' === r ? n.description : '',
                        placement: 'top',
                      },
                      P.createElement(
                        'span',
                        {
                          className: 'title-text',
                          title:
                            'wideScreen' === r && n.title.length > 6
                              ? n.title
                              : '',
                        },
                        n.title,
                      ),
                    ),
                    'mobileScreen' === r &&
                      n.description &&
                      P.createElement(
                        Q.Tooltip,
                        { title: n.description, placement: 'top' },
                        P.createElement(re.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  P.createElement(
                    'div',
                    { className: 'content-item' },
                    P.createElement(
                      'div',
                      { className: 'form-item-box select-box' },
                      P.createElement(
                        Q.Select,
                        {
                          showSearch: !0,
                          mode: n.multiple ? 'multiple' : void 0,
                          style: { display: 'inline-block' },
                          onChange: this.handleValueChange,
                          defaultValue: o || n.default,
                        },
                        i &&
                          i.length > 0 &&
                          i.map(function (e, a) {
                            var n = e.label || e.name,
                              r = t + '-select-' + n;
                            return P.createElement(
                              vt,
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
          })(P.PureComponent);
        Nt.propTypes = {
          parentType: A().string,
          jsonKey: A().string,
          indexRoute: A().string,
          keyRoute: A().string,
          nodeKey: A().string,
          targetJsonSchema: A().any,
        };
        var Dt = (0, I.inject)(function (e) {
            return {
              pageScreen: e.JSONSchemaStore.pageScreen,
              getJSONDataByKeyRoute: e.JSONEditorStore.getJSONDataByKeyRoute,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
              getInitJsonDataByKeyRoute:
                e.JSONEditorStore.getInitJsonDataByKeyRoute,
            };
          })((0, I.observer)(Nt)),
          Rt = function (e) {
            var t = e.nodeKey,
              a = (e.jsonKey, e.keyRoute),
              n = e.targetJsonSchema,
              r = e.getJSONDataByKeyRoute,
              o = (e.keyRoute2indexRoute, e.updateFormValueData),
              i = n.type,
              l = {};
            n.hiddenRule && (l = n.hiddenRule);
            var c,
              s = '';
            if (l.conditionProp && (0, Y.GT)(l.conditionValue)) {
              var u = l.conditionProp;
              if (l.conditionValue === (s = r(u.keyRoute)))
                return void (n.clearValueOnHidden && o(a, void 0));
            }
            c = t + '-' + s;
            var p = ne()({}, e, { nodeKey: c });
            switch (i) {
              case 'object':
                return B().createElement(Oe, ne()({}, p, { key: c }));
              case 'array':
                return B().createElement(Ee, ne()({}, p, { key: c }));
              case 'dynamic-data':
                return B().createElement(Me, ne()({}, p, { key: c }));
              case 'datasource':
                return B().createElement(ke, ne()({}, p, { key: c }));
              case 'event':
                return B().createElement(Le, ne()({}, p, { key: c }));
              case 'quantity':
                return B().createElement(We, ne()({}, p, { key: c }));
              case 'box-style':
                return B().createElement(Ue, ne()({}, p, { key: c }));
              case 'radio':
                return B().createElement(He, ne()({}, p, { key: c }));
              case 'select':
                return B().createElement(Dt, ne()({}, p, { key: c }));
              case 'checkboxes':
                return B().createElement($e, ne()({}, p, { key: c }));
              case 'input':
              default:
                return B().createElement(xe, ne()({}, p, { key: c }));
              case 'textarea':
                return B().createElement(Ye, ne()({}, p, { key: c }));
              case 'text-editor':
                return B().createElement(it, ne()({}, p, { key: c }));
              case 'number':
                return B().createElement(ct, ne()({}, p, { key: c }));
              case 'boolean':
                return B().createElement(ut, ne()({}, p, { key: c }));
              case 'date':
              case 'date-time':
                return B().createElement(ht, ne()({}, p, { key: c }));
              case 'time':
                return B().createElement(St, ne()({}, p, { key: c }));
              case 'url':
                return B().createElement(we, ne()({}, p, { key: c }));
              case 'color':
                return B().createElement(Et, ne()({}, p, { key: c }));
              case 'json':
                return B().createElement(Ne, ne()({}, p, { key: c }));
              case 'codearea':
                return B().createElement(De.A, ne()({}, p, { key: c }));
              case 'htmlarea':
                return B().createElement(Ot, ne()({}, p, { key: c }));
            }
          },
          wt = (__webpack_require__(104), Q.Collapse.Panel),
          Jt = Q.Tabs.TabPane,
          kt = (function (e) {
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
                var n = (0, G.json2schema)(t.jsonData);
                a.props.initJSONSchemaData(n), a.props.initJSONData(t.jsonData);
              }
              return (
                t.wideScreen && a.props.setPageScreen(t.wideScreen),
                t.onChange && a.props.initOnChange(t.onChange),
                t.dynamicDataList &&
                  a.props.setDynamicDataList(t.dynamicDataList),
                a
              );
            }
            j()(t, e);
            var a = t.prototype;
            return (
              (a.componentWillReceiveProps = function (e) {
                (0, Y.n4)(e.schemaData, this.props.schemaData) ||
                  this.props.JSONSchemaChange(e.schemaData),
                  (0, Y.n4)(e.jsonData, this.props.jsonData) ||
                    this.props.initJSONData(e.jsonData),
                  (0, Y.n4)(e.jsonView, this.props.jsonView) ||
                    this.setState({ jsonView: e.jsonView }),
                  (0, Y.n4)(e.viewStyle, this.props.viewStyle) ||
                    this.setState({ viewStyle: e.viewStyle }),
                  (0, Y.n4)(e.wideScreen, this.props.wideScreen) ||
                    this.props.setPageScreen(e.wideScreen),
                  (0, Y.n4)(e.onChange, this.props.onChange) ||
                    this.props.initOnChange(e.onChange),
                  (0, Y.n4)(e.dynamicDataList, this.props.dynamicDataList) ||
                    this.props.setDynamicDataList(e.dynamicDataList);
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
                  c = this.state,
                  s = c.jsonView,
                  u = c.viewStyle,
                  p = (0, G.isEmptySchema)(a),
                  m = (0, G.isStructuredSchema)(a);
                return P.createElement(
                  'div',
                  { className: 'json-editor-container' },
                  p &&
                    P.createElement(
                      'p',
                      { className: 'json-editor-empty' },
                      '当前jsonSchema没有数据内容',
                    ),
                  !p &&
                    !s &&
                    P.createElement(
                      P.Fragment,
                      null,
                      m &&
                        P.createElement(
                          P.Fragment,
                          null,
                          'fold' === u &&
                            P.createElement(
                              Q.Collapse,
                              {
                                defaultActiveKey: a.propertyOrder,
                                expandIconPosition: 'right',
                                bordered: !1,
                              },
                              a.propertyOrder.map(function (t, c) {
                                var s = c,
                                  u = t,
                                  p = t,
                                  d = a.properties[p],
                                  y = d.type,
                                  h = n + '-' + r + '-' + y + '-' + p;
                                return d.propertyOrder &&
                                  d.propertyOrder.length > 0
                                  ? P.createElement(
                                      wt,
                                      {
                                        header: d.title || e.renderHeader(y),
                                        key: p,
                                      },
                                      Rt({
                                        parentType: y,
                                        jsonKey: p,
                                        indexRoute: s,
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
                            P.createElement(
                              Q.Tabs,
                              {
                                className: 'tabs-schema-box',
                                defaultActiveKey: a.propertyOrder[0],
                                centered: !0,
                                hideAdd: !0,
                              },
                              a.propertyOrder.map(function (t, c) {
                                var s = c,
                                  u = t,
                                  p = t,
                                  d = a.properties[p],
                                  y = d.type,
                                  h = n + '-' + r + '-' + y + '-' + p;
                                return d.propertyOrder &&
                                  d.propertyOrder.length > 0
                                  ? P.createElement(
                                      Jt,
                                      {
                                        tab: d.title || e.renderHeader(y),
                                        key: p,
                                        closable: !1,
                                        className: 'tabs-schema-item',
                                      },
                                      Rt({
                                        parentType: y,
                                        jsonKey: p,
                                        indexRoute: s,
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
                        P.createElement(
                          P.Fragment,
                          null,
                          Rt({
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
                    s &&
                    P.createElement(se, {
                      nodeKey: 'jsonView',
                      keyRoute: '',
                      targetJsonSchema: a,
                    }),
                );
              }),
              t
            );
          })(P.PureComponent);
        kt.propTypes = {
          viewStyle: A().any,
          wideScreen: A().any,
          onChange: A().func,
          jsonView: A().any,
          schemaData: A().object,
          jsonData: A().object,
          dynamicDataList: A().any,
        };
        var Ct = (0, I.inject)(function (e) {
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
              setPageScreen: e.JSONSchemaStore.setPageScreen,
              updateFormValueData: e.JSONEditorStore.updateFormValueData,
            };
          })((0, I.observer)(kt)),
          xt =
            (__webpack_require__(410),
            (function (e) {
              function t(t) {
                var a;
                return (
                  ((a = e.call(this, t) || this).state = {
                    rootJSONStore: new te(),
                  }),
                  a
                );
              }
              return (
                j()(t, e),
                (t.prototype.render = function () {
                  var e = this.props.element,
                    t = this.state.rootJSONStore,
                    a = P.createElement(
                      I.Provider,
                      {
                        JSONSchemaStore: t.JSONSchemaStore,
                        JSONEditorStore: t.JSONEditorStore,
                      },
                      P.createElement(Ct, this.props),
                    );
                  return e ? (V().render(a, e), '') : a;
                }),
                t
              );
            })(P.PureComponent));
        xt.propTypes = {
          viewStyle: A().any,
          wideScreen: A().any,
          onChange: A().func,
          jsonView: A().any,
          schemaData: A().any,
          jsonData: A().any,
          element: A().any,
        };
      })(),
      __webpack_exports__
    );
  })();
});
