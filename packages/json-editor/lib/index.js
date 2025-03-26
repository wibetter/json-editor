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
        2187: function (e, t, n) {
          'use strict';
          n.d(t, {
            A$: function () {
              return u;
            },
            A4: function () {
              return s;
            },
            Jd: function () {
              return l;
            },
            Sd: function () {
              return p;
            },
            TS: function () {
              return c;
            },
          });
          var a = n(6031),
            o = n.n(a),
            r = n(7102),
            i = n(252),
            l = {};
          function s(e) {
            return function (t) {
              return c(o()({}, e, { component: t })).component;
            };
          }
          function c(e) {
            if (e.type)
              if (e.component) {
                if (
                  (e.type &&
                    'string' == typeof e.type &&
                    (e.type = e.type.toLowerCase()),
                  !l[e.type])
                ) {
                  var t = (0, i.A)(e.component);
                  return (l[e.type] = t), e;
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
          function u(e) {
            var t = (0, r.Gv)(e) ? e.type : e;
            delete l[t];
          }
          function p(e, t) {
            return React.createElement(
              'div',
              { className: 'RuntimeError' },
              React.createElement('p', null, 'Error: 找不到对应的渲染器'),
              React.createElement('p', null, 'Path: ', t),
              React.createElement(
                'pre',
                null,
                React.createElement('code', null, JSON.stringify(e, null, 2)),
              ),
            );
          }
        },
        252: function (e, t, n) {
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
        8852: function (e, t, n) {
          'use strict';
          n.d(t, {
            x: function () {
              return o;
            },
          });
          var a = n(1635);
          function o(e) {
            var t = this.props.targetJsonSchema,
              n = this.props.jsonStore || {},
              o = n.getJSONDataByKeyRoute,
              r = n.getInitJsonDataByKeyRoute,
              i = n.updateFormValueData,
              l = t.type,
              s = e || this.props.keyRoute,
              c = (0, a.TA)(s + '-' + l);
            if (c) {
              var u = o(c);
              u || (u = r(c)), u && ((0, a.CP)(s + '-' + l), i(s, u));
            }
          }
        },
        9566: function (
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
              __webpack_require__(2187),
            mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7222),
            mobx__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9825),
            prop_types__WEBPACK_IMPORTED_MODULE_4___default =
              __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),
            antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6375),
            antd__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            ),
            react_ace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2813),
            react_ace__WEBPACK_IMPORTED_MODULE_6___default =
              __webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_6__),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(2347),
            _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
              __webpack_require__.n(
                _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
              ),
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(5085),
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
              __webpack_require__.n(
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
              ),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(8426),
            ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_9___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_9__,
              ),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(6953),
            ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10___default =
              __webpack_require__.n(
                ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10__,
              ),
            $utils_typeof__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(7102),
            $mixins_index__WEBPACK_IMPORTED_MODULE_12__ =
              __webpack_require__(8852),
            $utils_index__WEBPACK_IMPORTED_MODULE_13__ =
              __webpack_require__(1635),
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
                  $mixins_index__WEBPACK_IMPORTED_MODULE_12__.x.call(this);
                }),
                (_proto.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    $mixins_index__WEBPACK_IMPORTED_MODULE_12__.x.call(
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
                  (curJsonData =
                    void 0 !== curJsonData
                      ? curJsonData
                      : targetJsonSchema.default || '() => {}'),
                    (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.Gv)(
                      curJsonData,
                    ) && (curJsonData = JSON.stringify(curJsonData, null, 2));
                  var style = targetJsonSchema.style
                      ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.K8)(
                          (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                            targetJsonSchema.style,
                          ),
                        )
                      : {},
                    titleStyle = targetJsonSchema.titleStyle
                      ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.K8)(
                          (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                            targetJsonSchema.titleStyle,
                          ),
                        )
                      : {},
                    contentStyle = targetJsonSchema.contentStyle
                      ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.K8)(
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
                        antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
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
                              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
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
                          antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                          {
                            title: targetJsonSchema.description,
                            placement: 'top',
                          },
                          react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
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
                        react_ace__WEBPACK_IMPORTED_MODULE_6___default(),
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
                  );
                }),
                CodeAreaFormSchema
              );
            })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          (CodeAreaFormSchema.propTypes = {
            isIgnoreWarn: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          }),
            (0, $core_factory__WEBPACK_IMPORTED_MODULE_2__.TS)({
              type: 'codearea',
              component: CodeAreaFormSchema,
            });
          var __WEBPACK_DEFAULT_EXPORT__ = CodeAreaFormSchema;
        },
        1635: function (e, t, n) {
          'use strict';
          n.d(t, {
            K8: function () {
              return l;
            },
            CP: function () {
              return d;
            },
            or: function () {
              return y;
            },
            TA: function () {
              return m;
            },
            n2: function () {
              return g;
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
          });
          var a = n(5085),
            o = require('lodash/camelCase'),
            r = n.n(o),
            i = n(8951);
          function l(e) {
            var t = {};
            return (
              e &&
                Object.keys(e).forEach(function (n) {
                  n.indexOf('-') > 0 ? (t[r()(n)] = e[n]) : (t[n] = e[n]);
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
            return null != e && (t = !0), t;
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
          function m(e) {
            return (0, i.Gz)(e, 'json-editor-formData');
          }
          function d(e) {
            (0, i.tU)(e, 'json-editor-formData');
          }
          function y(e) {
            var t = [],
              n = {};
            if ((0, a.isArray)(e))
              e.forEach(function (e) {
                if ((0, a.isObject)(e.value)) {
                  var o = JSON.stringify(e.value);
                  t.push({ label: e.label || e.name, value: o }),
                    (n[o] = e.value);
                } else t.push(e);
              });
            else if ((0, a.isString)(e))
              try {
                var o = y((t = JSON.parse(e)));
                (t = o.options), (n = o.optionValue);
              } catch (t) {
                console.warn('options 异常数据格式转换失败：', e);
              }
            return { options: t, optionValue: n };
          }
          function h(e) {
            if (!e || !(0, a.isObject)(e)) return e;
            var t = e.label || e.title || e.description || e.desc;
            if (t) return t;
            for (var n = Object.keys(e), o = 0, r = n.length; o < r; o++) {
              var i = e[n[o]];
              if (
                i &&
                (0, a.isString)(i) &&
                !(0, a.isURL)(i) &&
                !(0, a.isColor)(i)
              )
                return i;
            }
          }
          function g(e) {
            var t = [];
            return (
              (0, a.isArray)(e) &&
                e.forEach(function (e) {
                  t.push({ label: h(e), value: e });
                }),
              t
            );
          }
        },
        7102: function (e, t, n) {
          'use strict';
          function a(e) {
            return /^http[s]?:\/\/.*/.test(e);
          }
          function o(e) {
            return 'String' === Object.prototype.toString.call(e).slice(8, -1);
          }
          function r(e) {
            var t = !1;
            return (
              'Array' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          function i(e) {
            var t = !1;
            return (
              'Object' === Object.prototype.toString.call(e).slice(8, -1) &&
                (t = !0),
              t
            );
          }
          function l(e) {
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
          n.d(t, {
            Gv: function () {
              return i;
            },
            Kg: function () {
              return o;
            },
            Tn: function () {
              return s;
            },
            _o: function () {
              return l;
            },
            cy: function () {
              return r;
            },
            mv: function () {
              return a;
            },
          }),
            n(5085);
        },
        8951: function (e, t, n) {
          'use strict';
          function a(e, t, n) {
            if (
              (void 0 === n && (n = 'json-editor-cache'), window.sessionStorage)
            ) {
              var a = {},
                o = window.sessionStorage.getItem(n);
              o && (a = JSON.parse(o)),
                e && (a[e] = t),
                window.sessionStorage.setItem(n, JSON.stringify(a));
            }
          }
          function o(e, t) {
            var n;
            if (
              (void 0 === t && (t = 'json-editor-cache'), window.sessionStorage)
            ) {
              var a = {},
                o = window.sessionStorage.getItem(t);
              o && (a = JSON.parse(o)), e && (n = a[e]);
            }
            return n;
          }
          function r(e, t) {
            if (
              (void 0 === t && (t = 'json-editor-cache'), window.sessionStorage)
            ) {
              var n = {},
                a = window.sessionStorage.getItem(t);
              a && (n = JSON.parse(a)), e && (n[e] = void 0);
            }
          }
          n.d(t, {
            Gz: function () {
              return o;
            },
            PM: function () {
              return a;
            },
            tU: function () {
              return r;
            },
          });
        },
        641: function () {},
        2961: function () {},
        1422: function () {},
        7551: function () {},
        6221: function () {},
        3997: function () {},
        7766: function () {},
        5465: function () {},
        2523: function () {},
        8985: function () {},
        2597: function () {},
        7232: function () {},
        7258: function () {},
        8006: function () {},
        405: function () {},
        4505: function () {},
        4396: function () {},
        8104: function (e, t, n) {
          var a = n(641);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('1fb1d0ec', a, !1, { sourceMap: !1 });
        },
        5040: function (e, t, n) {
          var a = n(2961);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('5c4a563c', a, !1, { sourceMap: !1 });
        },
        1147: function (e, t, n) {
          var a = n(1422);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('2c3d6896', a, !1, { sourceMap: !1 });
        },
        8678: function (e, t, n) {
          var a = n(7551);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('aed4b9b0', a, !1, { sourceMap: !1 });
        },
        9612: function (e, t, n) {
          var a = n(6221);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('728b4280', a, !1, { sourceMap: !1 });
        },
        4410: function (e, t, n) {
          var a = n(3997);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('220f768b', a, !1, { sourceMap: !1 });
        },
        2595: function (e, t, n) {
          var a = n(7766);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('56ceba47', a, !1, { sourceMap: !1 });
        },
        3512: function (e, t, n) {
          var a = n(5465);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('07ba8918', a, !1, { sourceMap: !1 });
        },
        9928: function (e, t, n) {
          var a = n(2523);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('31b3938e', a, !1, { sourceMap: !1 });
        },
        3794: function (e, t, n) {
          var a = n(8985);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('4f50bcf6', a, !1, { sourceMap: !1 });
        },
        6220: function (e, t, n) {
          var a = n(2597);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('f7862348', a, !1, { sourceMap: !1 });
        },
        8819: function (e, t, n) {
          var a = n(7232);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('1b6af5a2', a, !1, { sourceMap: !1 });
        },
        9741: function (e, t, n) {
          var a = n(7258);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('ae856a32', a, !1, { sourceMap: !1 });
        },
        2657: function (e, t, n) {
          var a = n(8006);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('91732ad6', a, !1, { sourceMap: !1 });
        },
        9346: function (e, t, n) {
          var a = n(405);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('6e510ca0', a, !1, { sourceMap: !1 });
        },
        7546: function (e, t, n) {
          var a = n(4505);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('e6602b10', a, !1, { sourceMap: !1 });
        },
        632: function (e, t, n) {
          var a = n(4396);
          a.__esModule && (a = a.default),
            'string' == typeof a && (a = [[e.id, a, '']]),
            a.locals && (e.exports = a.locals),
            (0, n(611).A)('54a7813a', a, !1, { sourceMap: !1 });
        },
        611: function (e, t, n) {
          'use strict';
          function a(e, t) {
            for (var n = [], a = {}, o = 0; o < t.length; o++) {
              var r = t[o],
                i = r[0],
                l = {
                  id: e + ':' + o,
                  css: r[1],
                  media: r[2],
                  sourceMap: r[3],
                };
              a[i]
                ? a[i].parts.push(l)
                : n.push((a[i] = { id: i, parts: [l] }));
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
          var r = {},
            i =
              o && (document.head || document.getElementsByTagName('head')[0]),
            l = null,
            s = 0,
            c = !1,
            u = function () {},
            p = null,
            m = 'data-vue-ssr-id',
            d =
              'undefined' != typeof navigator &&
              /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
          function y(e, t, n, o) {
            (c = n), (p = o || {});
            var i = a(e, t);
            return (
              h(i),
              function (t) {
                for (var n = [], o = 0; o < i.length; o++) {
                  var l = i[o];
                  (s = r[l.id]).refs--, n.push(s);
                }
                for (
                  t ? h((i = a(e, t))) : (i = []), o = 0;
                  o < n.length;
                  o++
                ) {
                  var s;
                  if (0 === (s = n[o]).refs) {
                    for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                    delete r[s.id];
                  }
                }
              }
            );
          }
          function h(e) {
            for (var t = 0; t < e.length; t++) {
              var n = e[t],
                a = r[n.id];
              if (a) {
                a.refs++;
                for (var o = 0; o < a.parts.length; o++) a.parts[o](n.parts[o]);
                for (; o < n.parts.length; o++) a.parts.push(S(n.parts[o]));
                a.parts.length > n.parts.length &&
                  (a.parts.length = n.parts.length);
              } else {
                var i = [];
                for (o = 0; o < n.parts.length; o++) i.push(S(n.parts[o]));
                r[n.id] = { id: n.id, refs: 1, parts: i };
              }
            }
          }
          function g() {
            var e = document.createElement('style');
            return (e.type = 'text/css'), i.appendChild(e), e;
          }
          function S(e) {
            var t,
              n,
              a = document.querySelector('style[' + m + '~="' + e.id + '"]');
            if (a) {
              if (c) return u;
              a.parentNode.removeChild(a);
            }
            if (d) {
              var o = s++;
              (a = l || (l = g())),
                (t = v.bind(null, a, o, !1)),
                (n = v.bind(null, a, o, !0));
            } else
              (a = g()),
                (t = b.bind(null, a)),
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
          var _,
            f =
              ((_ = []),
              function (e, t) {
                return (_[e] = t), _.filter(Boolean).join('\n');
              });
          function v(e, t, n, a) {
            var o = n ? '' : a.css;
            if (e.styleSheet) e.styleSheet.cssText = f(t, o);
            else {
              var r = document.createTextNode(o),
                i = e.childNodes;
              i[t] && e.removeChild(i[t]),
                i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
            }
          }
          function b(e, t) {
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
        2347: function (e) {
          'use strict';
          e.exports = require('@ant-design/icons');
        },
        6031: function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/extends');
        },
        5820: function (e) {
          'use strict';
          e.exports = require('@babel/runtime/helpers/inheritsLoose');
        },
        5085: function (e) {
          'use strict';
          e.exports = require('@wibetter/json-utils');
        },
        8426: function (e) {
          'use strict';
          e.exports = require('ace-builds/src-noconflict/mode-javascript');
        },
        6953: function (e) {
          'use strict';
          e.exports = require('ace-builds/src-noconflict/theme-monokai');
        },
        6375: function (e) {
          'use strict';
          e.exports = require('antd');
        },
        7222: function (e) {
          'use strict';
          e.exports = require('mobx');
        },
        4020: function (e) {
          'use strict';
          e.exports = require('mobx-react');
        },
        9825: function (e) {
          'use strict';
          e.exports = require('prop-types');
        },
        2015: function (e) {
          'use strict';
          e.exports = require('react');
        },
        2813: function (e) {
          'use strict';
          e.exports = require('react-ace');
        },
      },
      __webpack_module_cache__ = {};
    function __webpack_require__(e) {
      var t = __webpack_module_cache__[e];
      if (void 0 !== t) return t.exports;
      var n = (__webpack_module_cache__[e] = { id: e, exports: {} });
      return (
        __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports
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
        for (var n in t)
          __webpack_require__.o(t, n) &&
            !__webpack_require__.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
            AddJSONCustomRenderer: function () {
              return Nt;
            },
            Renderer: function () {
              return le.A4;
            },
            default: function () {
              return kt;
            },
            getJSONCustomRenderer: function () {
              return xt;
            },
            loadRenderer: function () {
              return le.Sd;
            },
            registerRenderer: function () {
              return le.TS;
            },
            unRegisterRenderer: function () {
              return le.A$;
            },
            withStore: function () {
              return jt.A;
            },
          });
        var e,
          t,
          n,
          a,
          o,
          r,
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
          v,
          b,
          E,
          w,
          O,
          C,
          R,
          N,
          x,
          j,
          k,
          D,
          K,
          T,
          J,
          P = __webpack_require__(5820),
          M = __webpack_require__.n(P),
          A = __webpack_require__(2015),
          V = __webpack_require__.n(A),
          B = require('react-dom'),
          L = __webpack_require__.n(B),
          I = __webpack_require__(4020),
          q = __webpack_require__(9825),
          W = __webpack_require__.n(q),
          U = require('@babel/runtime/helpers/initializerDefineProperty'),
          F = __webpack_require__.n(U),
          z = require('@babel/runtime/helpers/createClass'),
          $ = __webpack_require__.n(z),
          G = require('@babel/runtime/helpers/applyDecoratedDescriptor'),
          H = __webpack_require__.n(G),
          Q =
            (require('@babel/runtime/helpers/initializerWarningHelper'),
            __webpack_require__(7222)),
          Z = __webpack_require__(5085),
          Y = Z.TypeDataList.jsonschema,
          X =
            ((e = Q.action.bound),
            (t = Q.action.bound),
            (n = Q.action.bound),
            (a = Q.action.bound),
            (o = Q.action.bound),
            (r = Q.action.bound),
            (i = Q.action.bound),
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
                    if (!(0, Z.isEqual)(e, this.JSONSchemaObj))
                      if (e && (0, Z.isNewSchemaData)(e)) this.jsonSchema = e;
                      else {
                        var t = (0, Z.oldSchemaToNewSchema)(e);
                        this.jsonSchema = t;
                      }
                  } else this.jsonSchema = (0, Z.objClone)(Y);
                }),
                (t.JSONSchemaChange = function (e) {
                  if (e && '{}' !== JSON.stringify(e))
                    if (e && (0, Z.isNewSchemaData)(e)) this.jsonSchema = e;
                    else {
                      var t = (0, Z.oldSchemaToNewSchema)(e);
                      this.jsonSchema = t;
                    }
                  else this.jsonSchema = (0, Z.objClone)(Y);
                  var n,
                    a = this.state.rootJSONStore.JSONEditorStore.jsonData;
                  (n = this.jsonSchema.reset
                    ? (0, Z.schema2json)(this.jsonSchema, {})
                    : (0, Z.schema2json)(this.jsonSchema, a)),
                    (this.state.rootJSONStore.JSONEditorStore.jsonData = n),
                    (this.state.rootJSONStore.JSONEditorStore.initJsonData = (0,
                    Z.objClone)(a));
                }),
                (t.indexRoute2keyRoute = function (e) {
                  return (0, Z.indexRoute2keyRoute)(e, this.jsonSchema);
                }),
                (t.keyRoute2indexRoute = function (e) {
                  return (0, Z.keyRoute2indexRoute)(e, this.jsonSchema);
                }),
                (t.getSchemaByIndexRoute = function (e) {
                  return (0, Z.getSchemaByIndexRoute)(e, this.jsonSchema, !0);
                }),
                (t.getSchemaByKeyRoute = function (e) {
                  var t = this.keyRoute2indexRoute(e);
                  return (0, Z.getSchemaByIndexRoute)(t, this.jsonSchema, !0);
                }),
                $()(e, [
                  {
                    key: 'JSONSchemaObj',
                    get: function () {
                      return (0, Q.toJS)(this.jsonSchema);
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
            (s = H()(l.prototype, 'pageScreen', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 'mobileScreen';
              },
            })),
            (c = H()(l.prototype, 'jsonSchema', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            H()(
              l.prototype,
              'setPageScreen',
              [e],
              Object.getOwnPropertyDescriptor(l.prototype, 'setPageScreen'),
              l.prototype,
            ),
            H()(
              l.prototype,
              'initJSONSchemaData',
              [t],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'initJSONSchemaData',
              ),
              l.prototype,
            ),
            H()(
              l.prototype,
              'JSONSchemaChange',
              [n],
              Object.getOwnPropertyDescriptor(l.prototype, 'JSONSchemaChange'),
              l.prototype,
            ),
            H()(
              l.prototype,
              'JSONSchemaObj',
              [Q.computed],
              Object.getOwnPropertyDescriptor(l.prototype, 'JSONSchemaObj'),
              l.prototype,
            ),
            H()(
              l.prototype,
              'lastUpdateTime',
              [Q.computed],
              Object.getOwnPropertyDescriptor(l.prototype, 'lastUpdateTime'),
              l.prototype,
            ),
            H()(
              l.prototype,
              'indexRoute2keyRoute',
              [a],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'indexRoute2keyRoute',
              ),
              l.prototype,
            ),
            H()(
              l.prototype,
              'keyRoute2indexRoute',
              [o],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'keyRoute2indexRoute',
              ),
              l.prototype,
            ),
            H()(
              l.prototype,
              'getSchemaByIndexRoute',
              [r],
              Object.getOwnPropertyDescriptor(
                l.prototype,
                'getSchemaByIndexRoute',
              ),
              l.prototype,
            ),
            H()(
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
          ee = __webpack_require__(6375),
          te = __webpack_require__(1635),
          ne = __webpack_require__(7102),
          ae =
            ((u = Q.action.bound),
            (p = Q.action.bound),
            (m = Q.action.bound),
            (d = Q.action.bound),
            (y = Q.action.bound),
            (h = Q.action.bound),
            (g = Q.action.bound),
            (S = Q.action.bound),
            (_ = Q.action.bound),
            (f = Q.action.bound),
            (v = Q.action.bound),
            (b = Q.action.bound),
            (E = Q.action.bound),
            (w = Q.action.bound),
            (O = (function () {
              function e(e) {
                F()(this, 'rootJSONStore', C, this),
                  F()(this, 'triggerChange', R, this),
                  F()(this, 'lastUpdateTime', N, this),
                  F()(this, 'jsonData', x, this),
                  F()(this, 'initJsonData', j, this),
                  F()(this, 'dynamicDataList', k, this),
                  F()(this, 'dynamicDataObj', D, this),
                  F()(this, 'options', K, this),
                  F()(this, 'dynamicDataApiScopeList', T, this),
                  F()(this, 'onChange', J, this),
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
                  if (
                    !(0, te.n4)(e, this.JSONEditorObj) &&
                    ((this.initJsonData = (0, te.bQ)(this.jsonData)),
                    t && !(0, Z.isEmptySchema)(t))
                  ) {
                    var n = (0, Z.schema2json)(t, e || {});
                    (this.jsonData = Object.assign({}, e, n)),
                      this.updateLastTime();
                  }
                }),
                (t.initOnChange = function (e) {
                  (e || (0, ne.Tn)(e)) && (this.onChange = e);
                }),
                (t.setDynamicDataList = function (e) {
                  if (!(0, te.n4)(e, this.dynamicDataList)) {
                    this.dynamicDataList = (0, te.bQ)(e);
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
                  (this.jsonData.lastUpdateTime = new Date().getTime()),
                    this.onChange(this.JSONEditorObj);
                }),
                (t.jsonChange = function (e) {
                  (this.jsonData = e), this.jsonDataChange();
                }),
                (t.getJSONDataByKeyRoute = function (e, t) {
                  var n = t || this.jsonData;
                  return (0, Z.getJsonDataByKeyRoute)(e, n, !0);
                }),
                (t.getInitJsonDataByKeyRoute = function (e, t) {
                  var n = t || this.initJsonData;
                  return (0, Z.getJsonDataByKeyRoute)(e, n, !0);
                }),
                (t.updateFormValueData = function (e, t, n) {
                  if ('' !== e) {
                    var a,
                      o = (0, Z.getParentKeyRoute_CurKey)(e),
                      r = o[0],
                      i = o[1],
                      l = (0, Z.getJsonDataByKeyRoute)(r, this.jsonData);
                    l
                      ? (l[i] = t)
                      : this.updateFormValueData(r, (((a = {})[i] = t), a));
                  } else this.jsonData = t;
                  if (this.state.rootJSONStore.JSONSchemaStore) {
                    var s =
                      this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(
                        e,
                      );
                    s && s.isConditionProp && this.updateLastTime();
                  }
                  n || this.jsonDataChange();
                }),
                (t.deleteArrayIndex = function (e, t) {
                  var n = (0, Z.getJsonDataByKeyRoute)(e, this.jsonData);
                  (0, ne.cy)(n) &&
                    (n.length > 0
                      ? (n.splice(t, 1),
                        this.triggerChangeAction(),
                        this.jsonDataChange())
                      : ee.message.warning(
                          '删除失败，空数组对象暂无可删除子项。',
                        ));
                }),
                (t.addArrayItem = function (e, t) {
                  var n = (0, Z.getJsonDataByKeyRoute)(e, this.jsonData);
                  if ((0, ne.cy)(n)) {
                    var a = n[t || 0];
                    if (
                      ((0, ne.Gv)(a) && (a = Object.assign({}, a)),
                      t || 0 === t)
                    ) {
                      var o = n.slice(Number(t) + 1),
                        r = [a].concat(o);
                      n.splice(Number(t) + 1), n.push.apply(n, r);
                    } else n.push(a);
                    this.triggerChangeAction(), this.jsonDataChange();
                  } else
                    ee.message.warning('数据操作异常：当前元素不是数组类型。');
                }),
                (t.sortArrayItem = function (e, t, n) {
                  var a = (0, Z.getJsonDataByKeyRoute)(e, this.jsonData);
                  if ((0, ne.cy)(a)) {
                    var o = (0, te.bQ)(a[t || 0]),
                      r = t;
                    if ('up' === n && r > 0) r -= 1;
                    else {
                      if ('up' === n && 0 === r)
                        return void ee.message.warning(
                          '数据操作异常：当前数组项已经是第一个元素了。',
                        );
                      if (
                        ('down' === n || !n) &&
                        ((r += 1), 'down' === n && r > a.length - 1)
                      )
                        return void ee.message.warning(
                          '数据操作异常：当前数组项已经是最后一个元素了。',
                        );
                    }
                    var i = (0, te.bQ)(a[r]);
                    void 0 !== o &&
                      void 0 !== i &&
                      ((a[t] = i),
                      (a[r] = o),
                      ee.message.success(
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
                    ee.message.warning('数据操作异常：当前元素不是数组类型。');
                }),
                $()(e, [
                  {
                    key: 'JSONEditorObj',
                    get: function () {
                      return (0, Q.toJS)(this.jsonData);
                    },
                  },
                ])
              );
            })()),
            (C = H()(O.prototype, 'rootJSONStore', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (R = H()(O.prototype, 'triggerChange', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (N = H()(O.prototype, 'lastUpdateTime', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new Date().getTime();
              },
            })),
            (x = H()(O.prototype, 'jsonData', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = H()(O.prototype, 'initJsonData', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (k = H()(O.prototype, 'dynamicDataList', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = H()(O.prototype, 'dynamicDataObj', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (K = H()(O.prototype, 'options', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return {};
              },
            })),
            (T = H()(O.prototype, 'dynamicDataApiScopeList', [Q.observable], {
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
            (J = H()(O.prototype, 'onChange', [Q.observable], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return function () {};
              },
            })),
            H()(
              O.prototype,
              'updateLastTime',
              [u],
              Object.getOwnPropertyDescriptor(O.prototype, 'updateLastTime'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'triggerChangeAction',
              [p],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'triggerChangeAction',
              ),
              O.prototype,
            ),
            H()(
              O.prototype,
              'initJSONData',
              [m],
              Object.getOwnPropertyDescriptor(O.prototype, 'initJSONData'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'initOnChange',
              [d],
              Object.getOwnPropertyDescriptor(O.prototype, 'initOnChange'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'setDynamicDataList',
              [y],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'setDynamicDataList',
              ),
              O.prototype,
            ),
            H()(
              O.prototype,
              'setOptions',
              [h],
              Object.getOwnPropertyDescriptor(O.prototype, 'setOptions'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'JSONEditorObj',
              [Q.computed],
              Object.getOwnPropertyDescriptor(O.prototype, 'JSONEditorObj'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'jsonDataChange',
              [g],
              Object.getOwnPropertyDescriptor(O.prototype, 'jsonDataChange'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'jsonChange',
              [S],
              Object.getOwnPropertyDescriptor(O.prototype, 'jsonChange'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'getJSONDataByKeyRoute',
              [_],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'getJSONDataByKeyRoute',
              ),
              O.prototype,
            ),
            H()(
              O.prototype,
              'getInitJsonDataByKeyRoute',
              [f],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'getInitJsonDataByKeyRoute',
              ),
              O.prototype,
            ),
            H()(
              O.prototype,
              'updateFormValueData',
              [v],
              Object.getOwnPropertyDescriptor(
                O.prototype,
                'updateFormValueData',
              ),
              O.prototype,
            ),
            H()(
              O.prototype,
              'deleteArrayIndex',
              [b],
              Object.getOwnPropertyDescriptor(O.prototype, 'deleteArrayIndex'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'addArrayItem',
              [E],
              Object.getOwnPropertyDescriptor(O.prototype, 'addArrayItem'),
              O.prototype,
            ),
            H()(
              O.prototype,
              'sortArrayItem',
              [w],
              Object.getOwnPropertyDescriptor(O.prototype, 'sortArrayItem'),
              O.prototype,
            ),
            O),
          oe = function () {
            (this.JSONSchemaStore = new X(this)),
              (this.JSONEditorStore = new ae(this));
          },
          re = __webpack_require__(6031),
          ie = __webpack_require__.n(re),
          le = __webpack_require__(2187),
          se = __webpack_require__(2347),
          ce = __webpack_require__(8951),
          ue = __webpack_require__(2813),
          pe = __webpack_require__.n(ue),
          me =
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
                      (0, Z.isFunction)(n.props.onChange) &&
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
                M()(t, e),
                (t.prototype.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.jsonData,
                    a = t.readOnly,
                    o = t.maxLines,
                    r = n || {},
                    i = this.state,
                    l = i.isShowWarn,
                    s = i.warnText,
                    c = (i.curJSONDataTemp, a || !1);
                  return (
                    (r = void 0 !== r ? r : r || '{}'),
                    ((0, Z.isObject)(r) || (0, Z.isArray)(r)) &&
                      (r = JSON.stringify(r, null, 2)),
                    A.createElement(
                      'div',
                      { className: 'json-view-box' },
                      c &&
                        A.createElement(
                          'div',
                          { className: 'readOnly-btn' },
                          '[只读]',
                        ),
                      l &&
                        A.createElement(
                          'div',
                          { className: 'warning-box code-area-item' },
                          A.createElement(
                            'div',
                            { className: 'warning-img' },
                            'X',
                          ),
                          A.createElement(
                            'div',
                            { className: 'warning-text' },
                            s,
                          ),
                        ),
                      A.createElement(pe(), {
                        id: 'json_area_ace',
                        defaultValue: r,
                        className: 'json-view-ace',
                        mode: 'json',
                        theme: 'solarized_light',
                        name: 'JSON_CODE_EDIT',
                        fontSize: 14,
                        showPrintMargin: !0,
                        showGutter: !0,
                        highlightActiveLine: !0,
                        readOnly: c,
                        minLines: 5,
                        maxLines: o || 33,
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
            })(A.PureComponent));
        me.propTypes = {
          jsonData: W().any,
          readOnly: W().bool,
          maxLines: W().number,
        };
        var de,
          ye = me,
          he = __webpack_require__(8852);
        function ge() {
          return (
            (ge = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                      ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                  }
                  return e;
                }),
            ge.apply(null, arguments)
          );
        }
        __webpack_require__(2595);
        var Se,
          _e = function (e) {
            return A.createElement(
              'svg',
              ge(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              de ||
                (de = A.createElement('path', {
                  d: 'M15.5 2a.5.5 0 0 1 .09.992L15.5 3H14v10.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 13.6V3H.5a.5.5 0 0 1-.09-.992L.5 2h15ZM13 3H3v10.6a1.4 1.4 0 0 0 1.265 1.394L4.4 15h7.2a1.4 1.4 0 0 0 1.394-1.265L13 13.6V3ZM6 6a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L5.5 11.5v-5A.5.5 0 0 1 6 6Zm4 0a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L9.5 11.5v-5A.5.5 0 0 1 10 6Zm.5-6a.5.5 0 0 1 .09.992L10.5 1h-5a.5.5 0 0 1-.09-.992L5.5 0h5Z',
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
                    var n = arguments[t];
                    for (var a in n)
                      ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                  }
                  return e;
                }),
            fe.apply(null, arguments)
          );
        }
        var ve,
          be = function (e) {
            return A.createElement(
              'svg',
              fe(
                { width: 16, height: 16, xmlns: 'http://www.w3.org/2000/svg' },
                e,
              ),
              Se ||
                (Se = A.createElement('path', {
                  d: 'M10.286 4C11.232 4 12 4.768 12 5.714v8.572c0 .946-.768 1.714-1.714 1.714H1.714A1.714 1.714 0 0 1 0 14.286V5.714C0 4.768.768 4 1.714 4h8.572Zm-.12 1H1.834A.833.833 0 0 0 1 5.833v8.334c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833V5.833A.833.833 0 0 0 10.167 5ZM6 7.429c.237 0 .429.191.429.428l-.001 1.714h1.715a.429.429 0 0 1 0 .858H6.428v1.714a.429.429 0 1 1-.857 0v-1.714H3.857a.429.429 0 1 1 0-.858h1.714V7.857c0-.237.192-.428.429-.428ZM14.286 0C15.232 0 16 .768 16 1.714v8.572c0 .946-.768 1.714-1.714 1.714H13v-1h1.167c.46 0 .833-.373.833-.833V1.833A.833.833 0 0 0 14.167 1H5.833A.833.833 0 0 0 5 1.833V3H4V1.714C4 .768 4.768 0 5.714 0h8.572Z',
                  fill: 'currentColor',
                  fillRule: 'evenodd',
                })),
            );
          };
        function Ee() {
          return (
            (Ee = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                      ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                  }
                  return e;
                }),
            Ee.apply(null, arguments)
          );
        }
        var we = function (e) {
            return A.createElement(
              'svg',
              Ee(
                {
                  viewBox: '0 0 1025 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                e,
              ),
              ve ||
                (ve = A.createElement('path', {
                  d: 'M293.069 755.2c-12.083 0-24.269-4.25-33.997-12.902L0 512l273.46-243.098c21.094-18.688 53.452-16.896 72.242 4.25 18.79 21.146 16.896 53.504-4.25 72.294L154.113 512l172.954 153.702c21.145 18.79 23.04 51.15 4.25 72.295-10.087 11.417-24.167 17.203-38.247 17.203zm457.984-.102L1024.512 512 765.44 281.702c-21.146-18.79-53.504-16.896-72.243 4.25-18.79 21.146-16.896 53.504 4.25 72.294L870.4 512 683.06 678.502c-21.146 18.79-23.04 51.15-4.25 72.295C688.896 762.214 702.976 768 717.056 768c12.083 0 24.269-4.25 33.997-12.902zm-239.514 72.55 102.4-614.4c4.66-27.904-14.182-54.272-42.086-58.931-28.007-4.71-54.323 14.182-58.88 42.086l-102.4 614.4c-4.66 27.904 14.182 54.272 42.086 58.931a52.65 52.65 0 0 0 8.448.666c24.576 0 46.285-17.766 50.432-42.752z',
                  fill: 'currentColor',
                })),
            );
          },
          Oe = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).addArrayItem = function (
                  e,
                  t,
                  a,
                ) {
                  var o = (n.props.jsonStore || {}).addArrayItem,
                    r = n.props.targetJsonSchema['maximum-child'];
                  t && r && t.length >= r
                    ? ee.message.warning('添加失败，最多可添加' + r + '个子项')
                    : o(e, a);
                }),
                (n.deleteArrItem = function (e, t, a) {
                  var o = (n.props.jsonStore || {}).deleteArrayIndex,
                    r = n.props.targetJsonSchema['minimum-child'];
                  a && r && a.length <= r
                    ? ee.message.warning(
                        '删除失败，至少需要保留' + r + '个子项',
                      )
                    : o(e, t);
                }),
                (n.elemHoverEnterEvent = function (e, t) {
                  e.stopPropagation(),
                    t !== n.state.hoverIndex && n.setState({ hoverIndex: t });
                }),
                (n.elemHoverLeaveEvent = function (e, t) {
                  e.stopPropagation(),
                    t === n.state.hoverIndex && n.setState({ hoverIndex: '' });
                }),
                (n.getArrItemTitle = function (e) {
                  if (!e || !(0, ne.Gv)(e)) return e;
                  for (
                    var t = Object.keys(e), n = 0, a = t.length;
                    n < a;
                    n++
                  ) {
                    var o = e[t[n]];
                    if (o && (0, ne.Kg)(o) && !(0, ne.mv)(o) && !(0, ne._o)(o))
                      return o;
                  }
                  return '';
                }),
                (n.state = {
                  currentActiveArrIndex: -1,
                  jsonView: !1,
                  isClosed: !1,
                  hoverIndex: '',
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
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.collapseChange = function (e) {
                var t = this.props.keyRoute,
                  n = this.state.isClosed;
                this.setState({ isClosed: !n }),
                  e.preventDefault(),
                  e.stopPropagation(),
                  (0, ce.PM)(t, !n);
              }),
              (n.arrayCollapseChange = function (e, t) {
                var n = this.props.keyRoute,
                  a = this.state.currentActiveArrIndex === t ? -1 : t;
                this.setState({ currentActiveArrIndex: a }),
                  e.preventDefault(),
                  e.stopPropagation(),
                  (0, ce.PM)(n + '-activeArrIndex', a);
              }),
              (n.render = function () {
                var e,
                  t,
                  n = this,
                  a = this.props,
                  o = a.schemaStore,
                  r = a.jsonStore,
                  i = (o || {}).pageScreen,
                  l = r || {},
                  s = l.getJSONDataByKeyRoute,
                  c = l.sortArrayItem,
                  u = (l.triggerChange, this.props),
                  p = u.keyRoute,
                  m = u.jsonKey,
                  d = u.nodeKey,
                  y = u.indexRoute,
                  h = u.targetJsonSchema,
                  g = u.renderChild,
                  S = this.state,
                  _ = S.jsonView,
                  f = S.isClosed,
                  v = (S.hoverIndex, S.currentActiveArrIndex),
                  b = h.type,
                  E = null == (e = h.showCodeViewBtn) || e,
                  w = s(p);
                (w && 0 !== w.length && (0, ne.cy)(w)) || (w = [{}]);
                var O = h.items,
                  C = f,
                  R = (0, ce.Gz)(p);
                void 0 !== R && (C = R);
                var N = v,
                  x = (0, ce.Gz)(p + '-activeArrIndex');
                void 0 !== x && (N = x);
                var j = null != (t = h.boxTitle) ? t : '数据配置',
                  k = h.style ? (0, te.K8)((0, Q.toJS)(h.style)) : {},
                  D = h.titleStyle ? (0, te.K8)((0, Q.toJS)(h.titleStyle)) : {},
                  K = h.contentStyle
                    ? (0, te.K8)((0, Q.toJS)(h.contentStyle))
                    : {};
                return A.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === i
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    id: d,
                    style: k,
                  },
                  A.createElement(
                    'div',
                    { className: 'element-title', style: D },
                    A.createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === i ? h.description : '',
                        placement: 'top',
                      },
                      A.createElement(
                        'span',
                        { className: 'title-text', title: h.title },
                        h.title,
                        h.showKey &&
                          A.createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(m, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === i &&
                      h.description &&
                      A.createElement(
                        ee.Tooltip,
                        { title: h.description, placement: 'top' },
                        A.createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  A.createElement(
                    'div',
                    { className: 'array-schema-box content-item', style: K },
                    A.createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      A.createElement(
                        'span',
                        { className: 'title-text' },
                        j,
                        ' ',
                      ),
                      C
                        ? A.createElement(se.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : A.createElement(se.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      E &&
                        A.createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              n.setState({ jsonView: !_ }),
                                e.preventDefault(),
                                e.stopPropagation();
                            },
                          },
                          A.createElement(
                            ee.Tooltip,
                            { title: _ ? '关闭源码模式' : '开启源码模式' },
                            A.createElement(we, {
                              className: _ ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                      A.createElement(
                        ee.Tooltip,
                        { title: '添加数据项' },
                        A.createElement(se.PlusOutlined, {
                          className: 'array-add-child-btn',
                          onClick: function (e) {
                            n.addArrayItem(p, w),
                              e.preventDefault(),
                              e.stopPropagation();
                          },
                        }),
                      ),
                    ),
                    A.createElement(
                      'div',
                      {
                        className:
                          'array-content ' +
                          (_ ? 'json-view-array' : '') +
                          ' ' +
                          (C ? 'closed' : ''),
                      },
                      !_ &&
                        (0, ne.cy)(w) &&
                        w.map(function (e, t) {
                          var a = d + '-array-items-' + w.length + '-' + t,
                            o = y ? y + '-0' : '0',
                            r = p ? p + '-' + t : '' + t,
                            i = n.getArrItemTitle(e);
                          return A.createElement(
                            'div',
                            { className: 'array-item', key: r },
                            A.createElement(
                              'div',
                              {
                                className: 'array-item-header',
                                onClick: function (e) {
                                  n.arrayCollapseChange(e, t);
                                },
                                onMouseMove: function (e) {
                                  n.elemHoverEnterEvent(e, t);
                                },
                                onMouseLeave: function (e) {
                                  n.elemHoverLeaveEvent(e, t);
                                },
                              },
                              A.createElement(
                                'div',
                                { className: 'array-title-text' },
                                i || O.title + '/' + (t + 1),
                              ),
                              A.createElement(
                                'div',
                                { className: 'array-operate-box' },
                                N !== t
                                  ? A.createElement(se.RightOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    })
                                  : A.createElement(se.DownOutlined, {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    }),
                                A.createElement(
                                  ee.Tooltip,
                                  { title: '删除' + O.title + '/' + (t + 1) },
                                  A.createElement(
                                    ee.Popconfirm,
                                    {
                                      placement: 'top',
                                      title:
                                        '确定要删除' +
                                        O.title +
                                        '/' +
                                        (t + 1) +
                                        '吗？',
                                      onCancel: function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                      },
                                      onConfirm: function (e) {
                                        n.deleteArrItem(p, t, w),
                                          e.preventDefault(),
                                          e.stopPropagation();
                                      },
                                      okText: '确定',
                                      cancelText: '取消',
                                    },
                                    A.createElement(_e, {
                                      className:
                                        'delete-operate-btn array-operate-btn',
                                      onClick: function (e) {
                                        e.preventDefault(), e.stopPropagation();
                                      },
                                    }),
                                  ),
                                ),
                                A.createElement(
                                  ee.Tooltip,
                                  { title: '复制' + O.title + '/' + (t + 1) },
                                  A.createElement(be, {
                                    className: 'array-operate-btn',
                                    onClick: function (e) {
                                      n.addArrayItem(p, w, t),
                                        e.preventDefault(),
                                        e.stopPropagation();
                                    },
                                  }),
                                ),
                                0 !== t &&
                                  A.createElement(
                                    ee.Tooltip,
                                    { title: '向上移动' },
                                    A.createElement(se.ArrowUpOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (e) {
                                        c(p, t, 'up'),
                                          e.preventDefault(),
                                          e.stopPropagation();
                                      },
                                    }),
                                  ),
                                t !== w.length - 1 &&
                                  A.createElement(
                                    ee.Tooltip,
                                    { title: '向下移动' },
                                    A.createElement(se.ArrowDownOutlined, {
                                      className: 'array-operate-btn',
                                      onClick: function (e) {
                                        c(p, t, 'down'),
                                          e.preventDefault(),
                                          e.stopPropagation();
                                      },
                                    }),
                                  ),
                              ),
                            ),
                            A.createElement(
                              'div',
                              {
                                className:
                                  'array-item-content ' +
                                  (N === t ? 'open' : 'closed'),
                                key: a,
                                id: a,
                              },
                              g({
                                parentType: b,
                                jsonKey: 'items',
                                indexRoute: o,
                                keyRoute: r,
                                nodeKey: a,
                                targetJsonSchema: O,
                                isArrayItem: !0,
                                arrIndex: t,
                              }),
                            ),
                          );
                        }),
                      _ && A.createElement(ye, this.props),
                    ),
                  ),
                );
              }),
              t
            );
          })(A.PureComponent);
        (Oe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'array', component: Oe }),
          __webpack_require__(2657);
        var Ce = (function (e) {
          function t(t) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.collapseChange = function (e) {
              var t = this.props.keyRoute,
                n = this.state.isClosed;
              this.setState({ isClosed: !n }),
                e.preventDefault(),
                e.stopPropagation(),
                (0, ce.PM)(t, !n);
            }),
            (n.render = function () {
              var e,
                t,
                n = this,
                a = this.props,
                o = a.schemaStore,
                r = (a.jsonStore, (o || {}).pageScreen),
                i = this.props,
                l = i.indexRoute,
                s = i.jsonKey,
                c = i.nodeKey,
                u = i.keyRoute,
                p = i.targetJsonSchema,
                m = i.isArrayItem,
                d = (i.arrIndex, i.isStructuredSchema),
                y = i.renderChild,
                h = this.state,
                g = h.jsonView,
                S = h.isClosed,
                _ = d,
                f = null == (e = p.showCodeViewBtn) || e,
                v = S,
                b = (0, ce.Gz)(u);
              void 0 !== b && (v = b);
              var E = null != (t = p.boxTitle) ? t : '对象配置',
                w = p.style ? (0, te.K8)((0, Q.toJS)(p.style)) : {},
                O = p.titleStyle ? (0, te.K8)((0, Q.toJS)(p.titleStyle)) : {},
                C = p.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(p.contentStyle))
                  : {};
              return V().createElement(
                'div',
                {
                  className:
                    'wideScreen' === r
                      ? 'object-schema-warp wide-screen-element-warp'
                      : 'object-schema-warp mobile-screen-element-warp',
                  id: c,
                  style: w,
                },
                !_ &&
                  !m &&
                  V().createElement(
                    'div',
                    { className: 'element-title', style: O },
                    V().createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === r ? p.description : '',
                        placement: 'top',
                      },
                      V().createElement(
                        'span',
                        { className: 'title-text', title: p.title },
                        p.title,
                        p.showKey &&
                          V().createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(s, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === r &&
                      p.description &&
                      V().createElement(
                        ee.Tooltip,
                        { title: p.description, placement: 'top' },
                        V().createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                V().createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: C,
                  },
                  !_ &&
                    !m &&
                    V().createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      V().createElement(
                        'span',
                        { className: 'title-text' },
                        E,
                        ' ',
                      ),
                      v
                        ? V().createElement(se.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : V().createElement(se.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      f &&
                        V().createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              n.setState({ jsonView: !g }),
                                e.preventDefault(),
                                e.stopPropagation();
                            },
                          },
                          V().createElement(
                            ee.Tooltip,
                            { title: g ? '关闭源码模式' : '开启源码模式' },
                            V().createElement(we, {
                              className: g ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                    ),
                  V().createElement(
                    'div',
                    {
                      className:
                        'content-item ' +
                        (_ || m ? '' : 'object-content') +
                        ' ' +
                        (g ? 'json-view-array' : '') +
                        ' ' +
                        (v ? 'closed' : ''),
                    },
                    !g &&
                      p.propertyOrder &&
                      p.propertyOrder.map(function (e, t) {
                        var n = l ? l + '-' + t : '' + t,
                          a = u ? u + '-' + e : '' + e,
                          o = e,
                          r = p.properties[o],
                          i = r.type;
                        return y({
                          parentType: i,
                          jsonKey: o,
                          indexRoute: n,
                          keyRoute: a,
                          nodeKey: c + '-' + i + '-' + o,
                          targetJsonSchema: r,
                        });
                      }),
                    g &&
                      V().createElement(
                        ye,
                        ie()({}, this.props, { maxLines: 10 }),
                      ),
                  ),
                ),
              );
            }),
            t
          );
        })(V().PureComponent);
        (Ce.propTypes = {
          isArrayItem: W().any,
          arrIndex: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        }),
          (0, le.TS)({ type: 'object', component: Ce }),
          __webpack_require__(8819);
        var Re = (function (e) {
          function t(t) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e,
                t = this,
                n = this.props,
                a = n.schemaStore,
                o = (n.jsonStore, n.renderChild),
                r = (a || {}).pageScreen,
                i = this.props,
                l = i.keyRoute,
                s = i.jsonKey,
                c = i.nodeKey,
                u = i.indexRoute,
                p = i.targetJsonSchema,
                m = this.state,
                d = m.jsonView,
                y = m.isClosed,
                h = m.isShowFilter,
                g = p.type,
                S = p.properties.type || {},
                _ = p.properties.data || {},
                f = p.properties.filter || {},
                v = S.default,
                b = null == (e = p.showCodeViewBtn) || e,
                E = p.style ? (0, te.K8)((0, Q.toJS)(p.style)) : {},
                w = p.titleStyle ? (0, te.K8)((0, Q.toJS)(p.titleStyle)) : {},
                O = p.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(p.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === r
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: c,
                  style: E,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: w },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === r ? p.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: p.title },
                      p.title,
                      p.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === r &&
                    p.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: p.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: O,
                  },
                  A.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: function (e) {
                        t.setState({ isClosed: !y }),
                          e.preventDefault(),
                          e.stopPropagation();
                      },
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text' },
                      '数据源配置',
                    ),
                    y
                      ? A.createElement(se.RightOutlined, {
                          className: 'close-operate-btn',
                        })
                      : A.createElement(se.DownOutlined, {
                          className: 'close-operate-btn',
                        }),
                    b &&
                      A.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function (e) {
                            t.setState({ jsonView: !d }),
                              e.preventDefault(),
                              e.stopPropagation();
                          },
                        },
                        A.createElement(
                          ee.Tooltip,
                          { title: d ? '关闭源码模式' : '开启源码模式' },
                          A.createElement(we, {
                            className: d ? 'info-icon active' : 'info-icon',
                          }),
                        ),
                      ),
                  ),
                  A.createElement(
                    'div',
                    {
                      className:
                        'content-item object-content ' +
                        (d ? 'json-view-array' : '') +
                        ' ' +
                        (y ? 'closed' : ''),
                    },
                    !d &&
                      'local' === v &&
                      A.createElement(
                        A.Fragment,
                        null,
                        A.createElement(
                          'div',
                          { className: 'ace-editor-box code-area-item' },
                          A.createElement(
                            ee.Tooltip,
                            {
                              title: h
                                ? '点击隐藏数据过滤器'
                                : '点击显示数据过滤器',
                              placement: 'top',
                            },
                            A.createElement(se.FilterOutlined, {
                              className: 'filter-btn',
                              onClick: this.switchFilterBtn,
                            }),
                          ),
                          o({
                            rendererType: 'json',
                            parentType: g,
                            jsonKey: 'data',
                            indexRoute: u ? u + '-1' : '1',
                            keyRoute: l ? l + '-data' : 'data',
                            nodeKey: c + '-data',
                            targetJsonSchema: _,
                            key: c + '-data',
                          }),
                        ),
                        h &&
                          o({
                            rendererType: 'codearea',
                            parentType: g,
                            jsonKey: 'filter',
                            indexRoute: u ? u + '-2' : '2',
                            keyRoute: l ? l + '-filter' : 'filter',
                            nodeKey: c + '-filter',
                            targetJsonSchema: f,
                          }),
                      ),
                    !d &&
                      'remote' === v &&
                      A.createElement(
                        A.Fragment,
                        null,
                        A.createElement(
                          'div',
                          { className: 'url-editor-box' },
                          o({
                            rendererType: 'url',
                            parentType: g,
                            jsonKey: 'data',
                            indexRoute: u ? u + '-1' : '1',
                            keyRoute: l ? l + '-data' : 'data',
                            nodeKey: c + '-data',
                            targetJsonSchema: _,
                          }),
                          A.createElement(
                            ee.Tooltip,
                            { title: '点击设置数据过滤器', placement: 'top' },
                            A.createElement(se.FilterOutlined, {
                              className: 'filter-url-btn',
                              onClick: this.switchFilterBtn,
                            }),
                          ),
                        ),
                        h &&
                          o({
                            rendererType: 'codearea',
                            parentType: g,
                            jsonKey: 'filter',
                            indexRoute: u ? u + '-2' : '2',
                            keyRoute: l ? l + '-filter' : 'filter',
                            nodeKey: c + '-filter',
                            targetJsonSchema: f,
                          }),
                      ),
                    d && A.createElement(ye, this.props),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (Re.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'datasource', component: Re });
        var Ne = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData,
                  r = e.target.value;
                o(a ? a + '-unit' : 'unit', Number(r));
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                o = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.keyRoute,
                l = r.jsonKey,
                s = r.nodeKey,
                c = r.targetJsonSchema,
                u = o(i),
                p = c.readOnly || !1,
                m = c.properties.unit,
                d = u.quantity,
                y = A.createElement('span', null, 'percent' === d ? '%' : d),
                h = (0, te.y8)(c.type),
                g = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                S = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                _ = c.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (h ? 'two-col-element-warp' : ''),
                  id: s,
                  style: g,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: S },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === a ? c.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: c.title },
                      c.title,
                      c.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    c.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: c.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: _ },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(ee.InputNumber, {
                      style: { display: 'inline-block', width: '120px' },
                      addonAfter: y,
                      disabled: p,
                      placeholder:
                        m.placeholder ||
                        c.placeholder ||
                        '请输入' + m.title ||
                        0,
                      defaultValue: u.unit || m.default,
                      onPressEnter: this.handleValueChange,
                      onBlur: this.handleValueChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (Ne.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'quantity', component: Ne }),
          __webpack_require__(9928);
        var xe = (function (e) {
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
                  r = e(a),
                  i = o.properties.unit,
                  l = r.quantity,
                  s = r.unit || i.default;
                if (
                  ((n.layoutStyleObj = {
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
                      ? ((n.layoutStyleObj.top = c[0]),
                        (n.layoutStyleObj.right = c[0]),
                        (n.layoutStyleObj.bottom = c[0]),
                        (n.layoutStyleObj.left = c[0]))
                      : 'auto' === c[0]
                        ? ((n.layoutStyleObj.top = 'auto'),
                          (n.layoutStyleObj.right = 'auto'),
                          (n.layoutStyleObj.bottom = 'auto'),
                          (n.layoutStyleObj.left = 'auto'))
                        : ((n.layoutStyleObj.top = '' + c[0] + l),
                          (n.layoutStyleObj.right = '' + c[0] + l),
                          (n.layoutStyleObj.bottom = '' + c[0] + l),
                          (n.layoutStyleObj.left = '' + c[0] + l))
                    : ((n.layoutStyleObj.top = c[0]),
                      (n.layoutStyleObj.right = c[1]),
                      (n.layoutStyleObj.bottom = c[2] || c[0]),
                      (n.layoutStyleObj.left = c[3] || c[1]));
                } else
                  0 === s
                    ? ((n.layoutStyleObj.top = '' + s + l),
                      (n.layoutStyleObj.right = '' + s + l),
                      (n.layoutStyleObj.bottom = '' + s + l),
                      (n.layoutStyleObj.left = '' + s + l))
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
                (t =
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
                  n.updateBoxStyleState();
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
                a(
                  t ? t + '-unit' : 'unit',
                  n.layoutStyleObj.top +
                    ' ' +
                    n.layoutStyleObj.right +
                    ' ' +
                    n.layoutStyleObj.bottom +
                    ' ' +
                    n.layoutStyleObj.left,
                ),
                  n.setState({ renderAction: !o });
              }),
              (n.state = { layoutStyleLock: !1, renderAction: !1 }),
              (n.updateBoxStyleState = n.updateBoxStyleState.bind(n)),
              (n.initBoxStyle = n.initBoxStyle.bind(n)),
              n
            );
          }
          M()(t, e);
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
                o = t.targetJsonSchema,
                r = this.props,
                i = r.schemaStore,
                l = (r.jsonStore, (i || {}).pageScreen),
                s = this.state,
                c = s.renderAction,
                u = s.layoutStyleLock,
                p = o.style ? (0, te.K8)((0, Q.toJS)(o.style)) : {},
                m = o.titleStyle ? (0, te.K8)((0, Q.toJS)(o.titleStyle)) : {},
                d = o.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(o.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    ('wideScreen' === l
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp') +
                    ' ' +
                    (c ? 'render-mark' : ''),
                  id: n,
                  style: p,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: m },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === l ? o.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: o.title },
                      o.title,
                      o.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(a, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === l &&
                    o.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: o.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  {
                    className: 'content-item layout-box-style-container',
                    style: d,
                  },
                  A.createElement(
                    'div',
                    { className: 'center-box' },
                    A.createElement(
                      ee.Tooltip,
                      {
                        placement: 'top',
                        title: u ? '点击解锁联动' : '点击联动',
                      },
                      A.createElement('div', {
                        className: u ? 'lock-icon' : 'lock-icon unlock',
                        onClick: function () {
                          e.setState({ layoutStyleLock: !u });
                        },
                      }),
                    ),
                  ),
                  A.createElement(ee.InputNumber, {
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
                      e.setLayoutBoxStyle(n, u, 'top');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, u, 'top');
                    },
                  }),
                  A.createElement(ee.InputNumber, {
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
                      e.setLayoutBoxStyle(n, u, 'right');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, u, 'right');
                    },
                  }),
                  A.createElement(ee.InputNumber, {
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
                      e.setLayoutBoxStyle(n, u, 'bottom');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, u, 'bottom');
                    },
                  }),
                  A.createElement(ee.InputNumber, {
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
                      e.setLayoutBoxStyle(n, u, 'left');
                    },
                    onBlur: function (t) {
                      var n = t.target.value;
                      e.setLayoutBoxStyle(n, u, 'left');
                    },
                  }),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (xe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'box-style', component: xe }),
          __webpack_require__(9346),
          ee.Select.Option;
        var je = (function (e) {
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
                  r = e(a),
                  i = o.properties.margin,
                  l = o.properties.padding,
                  s = o.properties.quantity,
                  c = r.quantity || s.default,
                  u = r.margin || i.default,
                  p = r.padding || l.default;
                (u = (0, Z.isNumber)(u) ? u.toString() : u || 'auto'),
                  (p = (0, Z.isNumber)(p) ? p.toString() : p || 'auto'),
                  (n.boxStyle.quantity = c);
                var m = u.split(' ');
                (n.boxStyle.margin.top = n.getStyleValText(m[0])),
                  (n.boxStyle.margin.right = n.getStyleValText(m[1], p)),
                  (n.boxStyle.margin.bottom = n.getStyleValText(m[2] || m[0])),
                  (n.boxStyle.margin.left = n.getStyleValText(m[3] || m[1], p));
                var d = p.split(' ');
                (n.boxStyle.padding.top = n.getStyleValText(d[0])),
                  (n.boxStyle.padding.right = n.getStyleValText(d[1], p)),
                  (n.boxStyle.padding.bottom = n.getStyleValText(d[2] || d[0])),
                  (n.boxStyle.padding.left = n.getStyleValText(
                    d[3] || d[1],
                    p,
                  ));
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
                        (n = (0, Z.isNumber)(n) ? n : 'auto'))
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
                      (t = (0, Z.isNumber)(t) ? t : 'auto'));
                }
                return 'auto' === t || 0 === t
                  ? t
                  : '' + t + n.boxStyle.quantity;
              }),
              (n.setLayoutBoxStyle = function (e, t, a, o) {
                if (t) n.linkLayoutBoxStyle(e, a);
                else {
                  var r = n.getStyleValText(e);
                  (n.boxStyle[a][o] = void 0 !== r ? r : ''),
                    n.updateBoxStyleState();
                }
              }),
              (n.linkLayoutBoxStyle = function (e, t) {
                var a = n.getStyleValText(e);
                void 0 !== a
                  ? ((n.boxStyle[t].top = a),
                    (n.boxStyle[t].right = a),
                    (n.boxStyle[t].bottom = a),
                    (n.boxStyle[t].left = a))
                  : ((n.boxStyle[t].top = ''),
                    (n.boxStyle[t].right = ''),
                    (n.boxStyle[t].bottom = ''),
                    (n.boxStyle[t].left = '')),
                  n.updateBoxStyleState();
              }),
              (n.updateBoxStyleState = function () {
                var e = n.props,
                  t = e.keyRoute,
                  a = (e.jsonStore || {}).updateFormValueData,
                  o = n.state.renderAction;
                a(t, {
                  margin: n.getMarginValue(),
                  padding: n.getPaddingValue(),
                  quantity: n.boxStyle.quantity,
                }),
                  n.setState({ renderAction: !o });
              }),
              (n.getSelectAfter = function (e) {
                var t = n.props.targetJsonSchema.properties.quantity,
                  a = e.quantity || t.default;
                return A.createElement('span', null, a);
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
          M()(t, e);
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
                o = t.targetJsonSchema,
                r = t.keyRoute,
                i = this.props,
                l = i.schemaStore,
                s = i.jsonStore,
                c = (l || {}).pageScreen,
                u = (s || {}).getJSONDataByKeyRoute,
                p = this.state,
                m = p.renderAction,
                d = p.type,
                y = u(r) || {},
                h = o.style ? (0, te.K8)((0, Q.toJS)(o.style)) : {},
                g = o.titleStyle ? (0, te.K8)((0, Q.toJS)(o.titleStyle)) : {},
                S = o.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(o.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    ('wideScreen' === c
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp') +
                    ' ' +
                    (m ? 'render-mark' : ''),
                  id: n,
                  key: n,
                  style: h,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: g },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === c ? o.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: o.title },
                      o.title,
                      o.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(a, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === c &&
                    o.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: o.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  {
                    className: 'content-item Style-PaddingAndMargin',
                    style: S,
                  },
                  A.createElement(
                    'div',
                    { className: 'Style-PaddingAndMargin-inner' },
                    A.createElement(
                      'div',
                      {
                        className:
                          'Style-PaddingAndMargin-label Style-PaddingAndMargin-label--custom',
                      },
                      A.createElement('div', {
                        className:
                          '\n                  Style-PaddingAndMargin-label-all\n                  ' +
                          ('all' === d
                            ? 'Style-PaddingAndMargin-label-all--active'
                            : ''),
                        onClick: function () {
                          return e.setType('all');
                        },
                      }),
                      A.createElement(
                        'div',
                        {
                          className:
                            '\n                Style-PaddingAndMargin-label-custom\n                ' +
                            ('custom' === d
                              ? 'Style-PaddingAndMargin-label-custom--active'
                              : ''),
                          onClick: function () {
                            return e.setType('custom');
                          },
                        },
                        A.createElement('div', null),
                        A.createElement('div', null),
                      ),
                    ),
                    'all' === d &&
                      A.createElement(
                        A.Fragment,
                        null,
                        A.createElement(
                          'div',
                          { className: 'Style-PaddingAndMargin-input' },
                          A.createElement(ee.Input, {
                            name: 'layoutMargin',
                            addonAfter: this.getSelectAfter(y),
                            className: 'layout-item-margin',
                            size: 'small',
                            defaultValue: this.boxStyle.margin.top,
                            onChange: function (t) {
                              var n = t.target.value;
                              e.setLayoutBoxStyle(n, !0, 'margin');
                            },
                          }),
                          A.createElement(
                            'div',
                            { className: 'Style-PaddingAndMargin-input-label' },
                            '外边距',
                          ),
                        ),
                        A.createElement(
                          'div',
                          { className: 'Style-PaddingAndMargin-input' },
                          A.createElement(ee.Input, {
                            name: 'layoutPadding',
                            addonAfter: this.getSelectAfter(y),
                            className: 'layout-item-padding',
                            size: 'small',
                            defaultValue: this.boxStyle.padding.top,
                            onChange: function (t) {
                              var n = t.target.value;
                              e.setLayoutBoxStyle(n, !0, 'padding');
                            },
                          }),
                          A.createElement(
                            'div',
                            { className: 'Style-PaddingAndMargin-input-label' },
                            '内边距',
                          ),
                        ),
                      ),
                  ),
                  'all' !== d &&
                    A.createElement(
                      'div',
                      {
                        className:
                          'Style-PaddingAndMargin-custom Style-PaddingAndMargin-custom--padding Style-PaddingAndMargin-custom--margin',
                      },
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutPaddingTop',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-padding',
                              size: 'small',
                              defaultValue: e.boxStyle.padding.top,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'padding', 'top');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingTop',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.padding.top) || '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutPaddingTop',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-padding',
                              size: 'small',
                              defaultValue: e.boxStyle.padding.right,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'padding', 'right');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingRight',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.padding.right) ||
                              '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutPaddingBottom',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-padding',
                              size: 'small',
                              defaultValue: e.boxStyle.padding.bottom,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'padding', 'bottom');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingBottom',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.padding.bottom) ||
                              '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutPaddingLeft',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-padding',
                              size: 'small',
                              defaultValue: e.boxStyle.padding.left,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'padding', 'left');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingLeft',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.padding.left) || '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutMarginTop',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-margin',
                              size: 'small',
                              defaultValue: e.boxStyle.margin.top,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'margin', 'top');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginTop',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.margin.top) || '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutMarginRight',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-margin',
                              size: 'small',
                              defaultValue: e.boxStyle.margin.right,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'margin', 'right');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginRight',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.margin.right) || '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutMarginBottom',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-margin',
                              size: 'small',
                              defaultValue: e.boxStyle.margin.bottom,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'margin', 'bottom');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginBottom',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.margin.bottom) ||
                              '-',
                          ),
                        ),
                      ),
                      A.createElement(
                        ee.Popover,
                        {
                          content: function () {
                            return A.createElement(ee.Input, {
                              name: 'layoutMarginLeft',
                              addonAfter: e.getSelectAfter(y),
                              className: 'layout-item-margin',
                              size: 'small',
                              defaultValue: e.boxStyle.margin.left,
                              onChange: function (t) {
                                var n = t.target.value;
                                e.setLayoutBoxStyle(n, !1, 'margin', 'left');
                              },
                            });
                          },
                          title: '',
                        },
                        A.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginLeft',
                          },
                          A.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle.margin.left) || '-',
                          ),
                        ),
                      ),
                    ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (je.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'padding-margin', component: je });
        var ke = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                o = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                l = r.jsonKey,
                s = r.keyRoute,
                c = r.targetJsonSchema,
                u = (c.readOnly, o(s)),
                p = c.options,
                m = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                d = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                y = c.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: i,
                  style: m,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: d },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === a ? c.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: c.title },
                      c.title,
                      c.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    c.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: c.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: y },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(
                      ee.Radio.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: this.handleValueChange,
                        defaultValue: null != u ? u : c.default,
                        disabled: c.readOnly,
                      },
                      p &&
                        p.length > 0 &&
                        p.map(function (e, t) {
                          var n = 'radio-' + t + '-' + (e.label || e.name);
                          return A.createElement(
                            ee.Radio,
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
        })(A.PureComponent);
        (ke.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'radio', component: ke });
        var De = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                o = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                l = r.jsonKey,
                s = r.keyRoute,
                c = r.targetJsonSchema,
                u = (c.readOnly, o(s)),
                p = c.options,
                m = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                d = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                y = c.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: i,
                  style: m,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: d },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === a ? c.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: c.title },
                      c.title,
                      c.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    c.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: c.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: y },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(
                      ee.Checkbox.Group,
                      {
                        style: { display: 'inline-block' },
                        onChange: this.handleValueChange,
                        defaultValue: null != u ? u : c.default,
                        disabled: c.readOnly,
                      },
                      p &&
                        p.length > 0 &&
                        p.map(function (e, t) {
                          var n = e.label || e.name,
                            a = i + '-select-' + n;
                          return A.createElement(
                            ee.Checkbox,
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
        })(A.PureComponent);
        (De.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'checkboxes', component: De });
        var Ke = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData,
                  r = e.target.value;
                n.props.onChange ? n.props.onChange(r) : o(a, r);
              }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                o = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                l = r.jsonKey,
                s = r.keyRoute,
                c = r.targetJsonSchema,
                u = s && o(s),
                p = c.readOnly || !1,
                m = c.isRequired || !1,
                d = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                y = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                h = c.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: i,
                  style: d,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: y },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === a ? c.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: c.title },
                      c.title,
                      c.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    c.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: c.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: h },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(ee.Input, {
                      style: { display: 'inline-block' },
                      disabled: p,
                      required: m,
                      placeholder: c.placeholder || '请输入' + c.title,
                      defaultValue: null != u ? u : c.default,
                      onPressEnter: this.handleValueChange,
                      onBlur: this.handleValueChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (Ke.propTypes = {
          parentType: W().any,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().any,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          onChange: W().any,
        }),
          (0, le.TS)({ type: 'input', component: Ke });
        var Te = Ke,
          Je = ee.Input.TextArea,
          Pe = (function (e) {
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
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e = this.props,
                  t = e.schemaStore,
                  n = e.jsonStore,
                  a = (t || {}).pageScreen,
                  o = (n || {}).getJSONDataByKeyRoute,
                  r = this.props,
                  i = r.keyRoute,
                  l = r.jsonKey,
                  s = r.nodeKey,
                  c = r.targetJsonSchema,
                  u = o(i),
                  p = c.readOnly || !1,
                  m = c.isRequired || !1,
                  d = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                  y = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                  h = c.contentStyle
                    ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                    : {};
                return A.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp container-warp'
                        : 'mobile-screen-element-warp',
                    id: s,
                    style: d,
                  },
                  A.createElement(
                    'div',
                    { className: 'element-title', style: y },
                    A.createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === a ? c.description : '',
                        placement: 'top',
                      },
                      A.createElement(
                        'span',
                        { className: 'title-text', title: c.title },
                        c.title,
                        c.showKey &&
                          A.createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(l, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === a &&
                      c.description &&
                      A.createElement(
                        ee.Tooltip,
                        { title: c.description, placement: 'top' },
                        A.createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  A.createElement(
                    'div',
                    { className: 'content-item', style: h },
                    A.createElement(
                      'div',
                      { className: 'form-item-box' },
                      A.createElement(Je, {
                        style: { display: 'inline-block' },
                        rows: 4,
                        disabled: p,
                        required: m,
                        placeholder: c.placeholder || '请输入' + c.title,
                        defaultValue: null != u ? u : c.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(A.PureComponent);
        (Pe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'textarea', component: Pe });
        var Me = require('braft-editor'),
          Ae = __webpack_require__.n(Me),
          Ve = require('braft-extensions/dist/color-picker'),
          Be = __webpack_require__.n(Ve),
          Le =
            (require('braft-extensions/dist/color-picker.css'),
            require('braft-extensions/dist/table')),
          Ie = __webpack_require__.n(Le);
        require('braft-extensions/dist/table.css'),
          require('braft-editor/dist/index.css'),
          __webpack_require__(632),
          Ae().use([Be()({ theme: 'light' })]),
          Ae().use(
            Ie()({
              defaultColumns: 3,
              defaultRows: 3,
              withDropdown: !1,
              columnResizable: !1,
              exportAttrString: 'border="1" style="border-collapse: collapse"',
            }),
          );
        var qe = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              var e = (this.props.schemaStore || {}).pageScreen;
              he.x.call(this),
                e && 'wideScreen' === e && this.setState({ isClosed: !1 });
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute
                ? he.x.call(this, e.keyRoute)
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
                o = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                l = i.keyRoute,
                s = i.jsonKey,
                c = i.nodeKey,
                u = i.targetJsonSchema,
                p = this.state.isClosed,
                m = r(l),
                d = Ae().createEditorState(m),
                y = u.readOnly || !1,
                h = u.style ? (0, te.K8)((0, Q.toJS)(u.style)) : {},
                g = u.titleStyle ? (0, te.K8)((0, Q.toJS)(u.titleStyle)) : {},
                S = u.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(u.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'text-editor-box wide-screen-element-warp'
                      : 'text-editor-box mobile-screen-element-warp',
                  id: c,
                  style: h,
                },
                A.createElement(
                  'div',
                  {
                    className: 'element-title',
                    onClick: function (t) {
                      e.setState({ isClosed: !p }),
                        t.preventDefault(),
                        t.stopPropagation();
                    },
                    style: g,
                  },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === o ? u.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === o &&
                    u.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: u.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                  p
                    ? A.createElement(se.RightOutlined, {
                        className: 'close-operate-btn',
                      })
                    : A.createElement(se.DownOutlined, {
                        className: 'close-operate-btn',
                      }),
                ),
                A.createElement(
                  'div',
                  {
                    className: 'content-item ' + (p ? 'closed' : ''),
                    style: S,
                  },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(Ae(), {
                      key: c + '-textEditor',
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
                      defaultValue: d,
                      readOnly: y,
                      placeholder: u.placeholder || '请输入' + u.title,
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
        })(A.PureComponent);
        (qe.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          pageScreen: W().any,
        }),
          (0, le.TS)({ type: 'text-editor', component: qe }),
          __webpack_require__(9741);
        var We = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleValueChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData,
                  r = n.props.targetJsonSchema;
                e < r.minimum
                  ? ee.message.warning(
                      '小于设定的最小数值' + r.minimum + '，请重新输入。',
                    )
                  : e > r.maximum
                    ? ee.message.warning(
                        '超过设定的最大数值' + r.maximum + '，请重新输入。',
                      )
                    : o(a, e);
              }),
              (n.numberChange = function (e, t) {
                var a = 0;
                t && (a = t),
                  'plus' === e ? (a += 1) : 'minus' === e && (a -= 1),
                  n.handleValueChange(a),
                  n.setState({ renderTime: new Date().getTime() });
              }),
              (n.state = { renderTime: new Date().getTime() }),
              (n.handleValueChange = n.handleValueChange.bind(n)),
              n
            );
          }
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                o = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                l = i.keyRoute,
                s = i.jsonKey,
                c = i.nodeKey,
                u = i.targetJsonSchema,
                p = this.state.renderTime,
                m = r(l),
                d = u.readOnly || !1,
                y = u.isRequired || !1,
                h = (0, te.y8)(u.type),
                g = u.style ? (0, te.K8)((0, Q.toJS)(u.style)) : {},
                S = u.titleStyle ? (0, te.K8)((0, Q.toJS)(u.titleStyle)) : {},
                _ = u.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(u.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (h ? 'two-col-element-warp' : ''),
                  key: c + '-' + p,
                  id: c,
                  style: g,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: S },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === o ? u.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === o &&
                    u.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: u.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: _ },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(
                      'div',
                      { className: 'input-number-wrap' },
                      A.createElement(
                        'div',
                        {
                          className: 'number-btn minus',
                          title: '点击减1',
                          onClick: function () {
                            e.numberChange(
                              'minus',
                              (0, te.GT)(m) ? m : u.default,
                            );
                          },
                        },
                        '-',
                      ),
                      A.createElement(ee.InputNumber, {
                        className: 'number-cont',
                        style: { display: 'inline-block' },
                        disabled: d,
                        required: y,
                        placeholder: u.placeholder || '请输入' + u.title,
                        min: u.minimum || 0,
                        max: u.maximum || 1e6,
                        defaultValue: (0, te.GT)(m) ? m : u.default,
                        onChange: this.handleValueChange,
                      }),
                      A.createElement(
                        'div',
                        {
                          className: 'number-btn plus',
                          title: '点击加1',
                          onClick: function () {
                            e.numberChange(
                              'plus',
                              (0, te.GT)(m) ? m : u.default,
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
        })(A.PureComponent);
        (We.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'number', component: We });
        var Ue = require('rc-switch'),
          Fe = __webpack_require__.n(Ue),
          ze =
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
              M()(t, e);
              var n = t.prototype;
              return (
                (n.componentWillMount = function () {
                  he.x.call(this);
                }),
                (n.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    he.x.call(this, e.keyRoute);
                }),
                (n.render = function () {
                  var e = this.props,
                    t = e.schemaStore,
                    n = e.jsonStore,
                    a = (t || {}).pageScreen,
                    o = (n || {}).getJSONDataByKeyRoute,
                    r = this.props,
                    i = r.keyRoute,
                    l = r.jsonKey,
                    s = r.nodeKey,
                    c = r.targetJsonSchema,
                    u = o(i),
                    p = (0, te.y8)(c.type),
                    m =
                      (c.readOnly,
                      c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {}),
                    d = c.titleStyle
                      ? (0, te.K8)((0, Q.toJS)(c.titleStyle))
                      : {},
                    y = c.contentStyle
                      ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                      : {};
                  return A.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === a
                          ? 'boolean-form-item wide-screen-element-warp'
                          : 'boolean-form-item mobile-screen-element-warp ' +
                            (p ? 'two-col-element-warp' : ''),
                      id: s,
                      style: m,
                    },
                    A.createElement(
                      'div',
                      { className: 'element-title', style: d },
                      A.createElement(
                        ee.Tooltip,
                        {
                          title: 'wideScreen' === a ? c.description : '',
                          placement: 'top',
                        },
                        A.createElement(
                          'span',
                          { className: 'title-text', title: c.title },
                          c.title,
                          c.showKey &&
                            A.createElement(
                              'span',
                              null,
                              '（',
                              (0, Z.truncate)(l, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                      'mobileScreen' === a &&
                        c.description &&
                        A.createElement(
                          ee.Tooltip,
                          { title: c.description, placement: 'top' },
                          A.createElement(se.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    A.createElement(
                      'div',
                      { className: 'content-item', style: y },
                      A.createElement(
                        'div',
                        { className: 'form-item-box' },
                        A.createElement(Fe(), {
                          style: { display: 'inline-block' },
                          defaultChecked: void 0 !== u ? u : c.default,
                          checkedChildren: 'true',
                          unCheckedChildren: 'false',
                          onChange: this.handleValueChange,
                          disabled: c.readOnly,
                        }),
                      ),
                    ),
                  );
                }),
                t
              );
            })(A.PureComponent));
        (ze.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'boolean', component: ze }),
          __webpack_require__(7546);
        var $e = ee.Select.Option,
          Ge = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).optionValue = {}),
                (n.handleValueChange = function (e, t) {
                  var a = n.props,
                    o = a.keyRoute,
                    r = a.jsonStore,
                    i = a.targetJsonSchema,
                    l = (r || {}).updateFormValueData,
                    s = e,
                    c = i.withLabel;
                  if ((0, Z.isArray)(e)) {
                    var u = [];
                    e.forEach(function (e, a) {
                      var o,
                        r = e;
                      (0, Z.isObject)(r) &&
                        (r = JSON.stringify(e)).replaceAll(' ', '');
                      var i = null != (o = n.optionValue[r]) ? o : e;
                      c &&
                        t &&
                        (0, Z.isArray)(t) &&
                        (i = { value: i, label: t[a].children || t[a].label }),
                        u.push(i);
                    }),
                      (s = u);
                  } else {
                    var p;
                    (s = null != (p = n.optionValue[e]) ? p : e),
                      c &&
                        t &&
                        (s = { value: s, label: t.children || t.label });
                  }
                  l(o, s);
                }),
                (n.handleValueChange = n.handleValueChange.bind(n)),
                n
              );
            }
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e,
                  t,
                  n,
                  a = this.props,
                  o = a.schemaStore,
                  r = a.jsonStore,
                  i = (o || {}).pageScreen,
                  l = (r || {}).getJSONDataByKeyRoute,
                  s = this.props,
                  c = s.nodeKey,
                  u = s.jsonKey,
                  p = s.keyRoute,
                  m = s.targetJsonSchema,
                  d = m.readOnly || !1,
                  y = l(p),
                  h = m.options,
                  g = (0, te.y8)(m.type),
                  S = (0, te.or)((0, Q.toJS)(h));
                if (
                  ((h = S.options),
                  (this.optionValue = S.optionValue),
                  (0, Z.isArray)(y))
                ) {
                  var _ = [];
                  y.forEach(function (e) {
                    var t = e;
                    (0, Z.isObject)(t) && (t = JSON.stringify(e)), _.push(t);
                  }),
                    (y = _);
                }
                var f = null != y ? y : m.default;
                (0, Z.isObject)(f) && (f = JSON.stringify(f));
                var v = m.style ? (0, te.K8)((0, Q.toJS)(m.style)) : {},
                  b = m.titleStyle ? (0, te.K8)((0, Q.toJS)(m.titleStyle)) : {},
                  E = m.contentStyle
                    ? (0, te.K8)((0, Q.toJS)(m.contentStyle))
                    : {};
                return A.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === i
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (g ? 'two-col-element-warp' : ''),
                    id: c,
                    style: v,
                  },
                  A.createElement(
                    'div',
                    { className: 'element-title', style: b },
                    A.createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === i ? m.description : '',
                        placement: 'top',
                      },
                      A.createElement(
                        'span',
                        { className: 'title-text', title: m.title },
                        m.title,
                        m.showKey &&
                          A.createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(u, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === i &&
                      m.description &&
                      A.createElement(
                        ee.Tooltip,
                        { title: m.description, placement: 'top' },
                        A.createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  A.createElement(
                    'div',
                    { className: 'content-item', style: E },
                    A.createElement(
                      'div',
                      { className: 'form-item-box select-box' },
                      A.createElement(
                        ee.Select,
                        {
                          showSearch: null == (e = m.showSearch) || e,
                          mode: m.multiple ? 'multiple' : void 0,
                          defaultActiveFirstOption:
                            null != (t = m.defaultActiveFirstOption) && t,
                          style: { display: 'inline-block', minWidth: '120px' },
                          onChange: this.handleValueChange,
                          defaultValue: f,
                          disabled: d,
                          allowClear: null == (n = m.allowClear) || n,
                        },
                        h &&
                          h.length > 0 &&
                          h.map(function (e, t) {
                            var n = e.label || e.name,
                              a = c + '-select-' + n;
                            return A.createElement(
                              $e,
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
          })(A.PureComponent);
        (Ge.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          withLabel: W().boolean,
        }),
          (0, le.TS)({ type: 'select', component: Ge }),
          __webpack_require__(3794);
        var He = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e,
                t,
                n,
                a = this.props,
                o = a.schemaStore,
                r = a.jsonStore,
                i = (o || {}).pageScreen,
                l = (r || {}).getJSONDataByKeyRoute,
                s = this.props,
                c = s.nodeKey,
                u = s.jsonKey,
                p = s.keyRoute,
                m = s.targetJsonSchema,
                d = l(p),
                y = m.options || [],
                h = (0, te.y8)(m.type),
                g =
                  (m.readOnly, m.style ? (0, te.K8)((0, Q.toJS)(m.style)) : {}),
                S = m.titleStyle ? (0, te.K8)((0, Q.toJS)(m.titleStyle)) : {},
                _ = m.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(m.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === i
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (h ? 'two-col-element-warp' : ''),
                  id: c,
                  style: g,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: S },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === i ? m.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: m.title },
                      m.title,
                      m.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(u, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === i &&
                    m.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: m.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: _ },
                  A.createElement(
                    'div',
                    { className: 'form-item-box select-box' },
                    A.createElement(ee.Cascader, {
                      showSearch: null == (e = m.showSearch) || e,
                      style: { display: 'inline-block', minWidth: '120px' },
                      options: y,
                      onChange: this.handleValueChange,
                      defaultValue: null != d ? d : m.default,
                      disabled: m.readOnly,
                      allowClear: null == (t = m.allowClear) || t,
                      multiple: null != (n = m.multiple) && n,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (He.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'cascader', component: He });
        var Qe = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).handleImageChange = function (e) {
                var t = n.props,
                  a = t.keyRoute,
                  o = (t.jsonStore || {}).updateFormValueData;
                if ('uploading' !== e.file.status) {
                  if ('done' === e.file.status) {
                    var r = e.file.response || {};
                    r.url && o(a, r.url);
                  } else
                    'error' === e.file.status &&
                      ee.message.error(e.file.name + ' 图片上传失败。');
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                o = (n || {}).pageScreen,
                r = a || {},
                i = r.getJSONDataByKeyRoute,
                l = r.options,
                s = this.props,
                c = s.nodeKey,
                u = s.jsonKey,
                p = s.keyRoute,
                m = s.targetJsonSchema,
                d = l || {},
                y = this.state.loading,
                h = p && i(p),
                g = m.readOnly || !1,
                S = (m.isRequired, []);
              h && (0, Z.isArray)(h)
                ? (S = h)
                : h && (0, Z.isString)(h) && S.push(h);
              var _ = {
                  name: 'file',
                  action: m.uploadAction || d.uploadAction,
                  accept: m.accept || d.uploadAccept || '.jpeg,.jpg,.png',
                  maxCount: (m.multiple && m.maxCount) || 1,
                  defaultFileList: S,
                  listType: null != (e = m.listType) ? e : 'picture-card',
                  withCredentials: !0,
                  method: m.uploadMethod || d.uploadMethod || 'POST',
                  headers: {},
                  onChange: this.handleImageChange,
                  onRemove: this.handleDeleteChange,
                },
                f = m.style ? (0, te.K8)((0, Q.toJS)(m.style)) : {},
                v = m.titleStyle ? (0, te.K8)((0, Q.toJS)(m.titleStyle)) : {},
                b = m.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(m.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: c,
                  style: f,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: v },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === o ? m.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: m.title },
                      m.title,
                      m.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(u, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === o &&
                    m.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: m.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: b },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(
                      ee.Upload,
                      ie()({}, _, { disabled: g }),
                      A.createElement(
                        'button',
                        {
                          style: {
                            border: 0,
                            background: 'none',
                            cursor: 'pointer',
                          },
                          type: 'button',
                        },
                        y
                          ? A.createElement(se.LoadingOutlined, null)
                          : A.createElement(se.PlusOutlined, null),
                        A.createElement(
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
            t
          );
        })(A.PureComponent);
        (Qe.propTypes = {
          parentType: W().any,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().any,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          onChange: W().any,
        }),
          (0, le.TS)({ type: 'input-image', component: Qe });
        var Ze = require('moment'),
          Ye = __webpack_require__.n(Ze),
          Xe = {
            'date-time': 'YYYY-MM-DD HH:mm',
            date: 'YYYY-MM-DD',
            time: 'HH:mm',
          },
          et = (function (e) {
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
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e = this.props,
                  t = e.schemaStore,
                  n = e.jsonStore,
                  a = (t || {}).pageScreen,
                  o = (n || {}).getJSONDataByKeyRoute,
                  r = this.props,
                  i = r.keyRoute,
                  l = r.jsonKey,
                  s = r.nodeKey,
                  c = r.targetJsonSchema,
                  u = c.type,
                  p = c.readOnly || !1,
                  m = c.isRequired || !1,
                  d = Xe[u] || Xe[0],
                  y = o(i),
                  h = null != y ? y : c.default,
                  g = (0, te.y8)(u),
                  S = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                  _ = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                  f = c.contentStyle
                    ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                    : {};
                return A.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp ' +
                          (g ? 'two-col-element-warp' : ''),
                    id: s,
                    style: S,
                  },
                  A.createElement(
                    'div',
                    { className: 'element-title', style: _ },
                    A.createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === a ? c.description : '',
                        placement: 'top',
                      },
                      A.createElement(
                        'span',
                        { className: 'title-text', title: c.title },
                        c.title,
                        c.showKey &&
                          A.createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(l, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === a &&
                      c.description &&
                      A.createElement(
                        ee.Tooltip,
                        { title: c.description, placement: 'top' },
                        A.createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  A.createElement(
                    'div',
                    { className: 'content-item', style: f },
                    A.createElement(
                      'div',
                      { className: 'form-item-box' },
                      A.createElement(ee.DatePicker, {
                        style: { display: 'inline-block' },
                        disabled: p,
                        required: m,
                        showTime: 'date-time' === u,
                        format: d,
                        placeholder: c.placeholder || '请输入' + c.title,
                        defaultValue: h && Ye()(h, d),
                        onChange: this.handleValueChange,
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(A.PureComponent);
        (et.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'date', component: et }),
          (0, le.TS)({ type: 'date-time', component: et });
        var tt = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                o = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.nodeKey,
                l = r.jsonKey,
                s = r.keyRoute,
                c = r.targetJsonSchema,
                u = o(s),
                p = null != u ? u : c.default,
                m = c.readOnly || !1,
                d = c.isRequired || !1,
                y = (0, te.y8)(c.type),
                h = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                g = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                S = c.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (y ? 'two-col-element-warp' : ''),
                  id: i,
                  style: h,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: g },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === a ? c.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: c.title },
                      c.title,
                      c.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    c.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: c.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: S },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(ee.TimePicker, {
                      style: { display: 'inline-block' },
                      disabled: m,
                      required: d,
                      placeholder: c.placeholder || '请输入' + c.title,
                      defaultValue: p && Ye()(p, 'HH:mm'),
                      onChange: this.handleValueChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (tt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'time', component: tt });
        var nt = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this.props,
                t = e.schemaStore,
                n = e.jsonStore,
                a = (t || {}).pageScreen,
                o = (n || {}).getJSONDataByKeyRoute,
                r = this.props,
                i = r.keyRoute,
                l = r.jsonKey,
                s = r.nodeKey,
                c = r.targetJsonSchema,
                u = o(i),
                p = c.readOnly || !1,
                m = c.isRequired || !1,
                d = c.style ? (0, te.K8)((0, Q.toJS)(c.style)) : {},
                y = c.titleStyle ? (0, te.K8)((0, Q.toJS)(c.titleStyle)) : {},
                h = c.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(c.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === a
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: s,
                  style: d,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: y },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === a ? c.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: c.title },
                      c.title,
                      c.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === a &&
                    c.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: c.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: h },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(ee.Input, {
                      style: { display: 'inline-block' },
                      disabled: p,
                      required: m,
                      placeholder: c.placeholder || '请输入' + c.title,
                      defaultValue: null != u ? u : c.default,
                      onPressEnter: this.handleValueChange,
                      onBlur: this.handleValueChange,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (nt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'url', component: nt });
        var at = require('react-color'),
          ot =
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
                      r = e.rgb;
                    o(
                      a,
                      'rgba(' + r.r + ',' + r.g + ',' + r.b + ',' + r.a + ')',
                    ),
                      n.setState({ renderState: !n.state.renderState });
                  }),
                  (n.deleteColor = function () {
                    var e = n.props,
                      t = e.keyRoute;
                    (0, (e.jsonStore || {}).updateFormValueData)(t, 'initial'),
                      ee.message.success('已移除当前设置的颜色值'),
                      n.setState({ renderState: !n.state.renderState });
                  }),
                  (n.state = { renderState: !1, displayColorPicker: !1 }),
                  (n.handleValueChange = n.handleValueChange.bind(n)),
                  n
                );
              }
              M()(t, e);
              var n = t.prototype;
              return (
                (n.componentWillMount = function () {
                  he.x.call(this);
                }),
                (n.componentWillReceiveProps = function (e) {
                  e.keyRoute !== this.props.keyRoute &&
                    he.x.call(this, e.keyRoute);
                }),
                (n.render = function () {
                  var e = this,
                    t = this.props,
                    n = t.schemaStore,
                    a = t.jsonStore,
                    o = (n || {}).pageScreen,
                    r = (a || {}).getJSONDataByKeyRoute,
                    i = this.props,
                    l = i.keyRoute,
                    s = i.jsonKey,
                    c = i.nodeKey,
                    u = i.targetJsonSchema,
                    p = this.state,
                    m = p.renderState,
                    d = p.displayColorPicker,
                    y = u.readOnly || !1,
                    h = r(l),
                    g = (0, te.y8)(u.type),
                    S = u.style ? (0, te.K8)((0, Q.toJS)(u.style)) : {},
                    _ = u.titleStyle
                      ? (0, te.K8)((0, Q.toJS)(u.titleStyle))
                      : {},
                    f = u.contentStyle
                      ? (0, te.K8)((0, Q.toJS)(u.contentStyle))
                      : {},
                    v = A.createElement(at.SketchPicker, {
                      className: 'color-sketch-picker',
                      key: c + '-SketchPicker',
                      color: null != h ? h : u.default,
                      onChange: this.handleValueChange,
                    });
                  return A.createElement(
                    'div',
                    {
                      className:
                        'wideScreen' === o
                          ? 'wide-screen-element-warp'
                          : 'mobile-screen-element-warp ' +
                            (g ? 'two-col-element-warp' : ''),
                      id: c,
                      style: S,
                    },
                    A.createElement(
                      'div',
                      { className: 'element-title', style: _ },
                      A.createElement(
                        ee.Tooltip,
                        {
                          title: 'wideScreen' === o ? u.description : '',
                          placement: 'top',
                        },
                        A.createElement(
                          'span',
                          { className: 'title-text', title: u.title },
                          u.title,
                          u.showKey &&
                            A.createElement(
                              'span',
                              null,
                              '（',
                              (0, Z.truncate)(s, { length: 15 }),
                              '）',
                            ),
                        ),
                      ),
                      'mobileScreen' === o &&
                        u.description &&
                        A.createElement(
                          ee.Tooltip,
                          { title: u.description, placement: 'top' },
                          A.createElement(se.InfoCircleOutlined, {
                            className: 'info-icon',
                          }),
                        ),
                    ),
                    A.createElement(
                      'div',
                      { className: 'content-item', style: f },
                      A.createElement(
                        'div',
                        { className: 'form-item-box render-dom-' + m },
                        A.createElement(
                          'div',
                          {
                            className:
                              'color-btn-wrap color-item-form ' +
                              (d ? 'selected' : '') +
                              ' ' +
                              (y ? 'disabled' : ''),
                            onClick: function () {
                              y || e.setState({ displayColorPicker: !d });
                            },
                          },
                          y &&
                            A.createElement('button', {
                              className: 'ant-input color-btn',
                              style: {
                                backgroundColor: null != h ? h : u.default,
                              },
                            }),
                          !y &&
                            A.createElement(
                              A.Fragment,
                              null,
                              A.createElement(
                                ee.Popover,
                                {
                                  content: v,
                                  title: '颜色选择器',
                                  trigger: 'click',
                                },
                                A.createElement('button', {
                                  className: 'ant-input color-btn',
                                  style: {
                                    backgroundColor: null != h ? h : u.default,
                                  },
                                }),
                              ),
                              A.createElement(
                                ee.Tooltip,
                                {
                                  title: '点击移除当前颜色值',
                                  placement: 'top',
                                },
                                A.createElement(se.CloseOutlined, {
                                  className: 'delete-bgColor-btn',
                                  onClick: function () {
                                    e.deleteColor();
                                  },
                                }),
                              ),
                              A.createElement('span', { className: 'arrow' }),
                            ),
                        ),
                      ),
                    ),
                  );
                }),
                t
              );
            })(A.PureComponent));
        (ot.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'color', component: ot });
        var rt = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                o = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                l = i.nodeKey,
                s = i.jsonKey,
                c = i.keyRoute,
                u = i.targetJsonSchema,
                p = this.state,
                m = p.isShowWarn,
                d = p.warnText,
                y = p.curJSONDataTemp,
                h = u.readOnly || !1,
                g = r(c);
              (g = void 0 !== g ? g : u.default || '{}'),
                ((0, ne.Gv)(g) || (0, ne.cy)(g)) &&
                  (g = JSON.stringify(g, null, 2));
              var S = u.style ? (0, te.K8)((0, Q.toJS)(u.style)) : {},
                _ = u.titleStyle ? (0, te.K8)((0, Q.toJS)(u.titleStyle)) : {},
                f = u.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(u.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp',
                  id: l,
                  style: S,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: _ },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === o ? u.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === o &&
                    u.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: u.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: f },
                  m &&
                    A.createElement(
                      'div',
                      { className: 'warning-box code-area-item' },
                      A.createElement('div', { className: 'warning-img' }, 'X'),
                      A.createElement('div', { className: 'warning-text' }, d),
                    ),
                  A.createElement(pe(), {
                    id: l + '-json_area_ace',
                    value: (0, te.GT)(y) ? y : g,
                    className: 'code-area-item',
                    mode: 'json',
                    theme: 'solarized_light',
                    name: 'JSON_CODE_EDIT',
                    fontSize: 14,
                    showPrintMargin: !0,
                    showGutter: !0,
                    highlightActiveLine: !0,
                    readOnly: h,
                    minLines: 5,
                    maxLines: 30,
                    width: '100%',
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
        })(A.PureComponent);
        (rt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'json', component: rt }),
          __webpack_require__(9566),
          require('ace-builds/src-noconflict/mode-html'),
          __webpack_require__(6953);
        var it = (function (e) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e = this,
                t = this.props,
                n = t.schemaStore,
                a = t.jsonStore,
                o = (n || {}).pageScreen,
                r = (a || {}).getJSONDataByKeyRoute,
                i = this.props,
                l = i.nodeKey,
                s = i.jsonKey,
                c = i.keyRoute,
                u = i.targetJsonSchema,
                p = this.state,
                m = p.isShowWarn,
                d = p.warnText,
                y = u.readOnly || !1,
                h = r(c);
              (h = void 0 !== h ? h : u.default || '<p>hello</p>'),
                (0, ne.Gv)(h) && (h = JSON.stringify(h, null, 2));
              var g = u.style ? (0, te.K8)((0, Q.toJS)(u.style)) : {},
                S = u.titleStyle ? (0, te.K8)((0, Q.toJS)(u.titleStyle)) : {},
                _ = u.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(u.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp',
                  id: l,
                  style: g,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: S },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === o ? u.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(s, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === o &&
                    u.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: u.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  { className: 'content-item', style: _ },
                  m &&
                    A.createElement(
                      'div',
                      { className: 'warning-box code-area-item' },
                      A.createElement('div', { className: 'warning-img' }, 'X'),
                      A.createElement('div', { className: 'warning-text' }, d),
                    ),
                  A.createElement(pe(), {
                    id: 'code_area_ace',
                    key: l + '-ace',
                    className: 'code-area-item',
                    value: h,
                    mode: 'html',
                    theme: 'monokai',
                    name: 'JS_CODE_EDIT',
                    fontSize: 14,
                    showPrintMargin: !0,
                    showGutter: !0,
                    highlightActiveLine: !0,
                    readOnly: y,
                    minLines: 5,
                    maxLines: 30,
                    width: '100%',
                    onChange: function (t) {
                      try {
                        e.handleValueChange(t), e.setState({ isShowWarn: !1 });
                      } catch (n) {
                        e.handleValueChange(t),
                          e.setState({ warnText: n.message, isShowWarn: !0 });
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
        })(A.PureComponent);
        (it.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'htmlarea', component: it });
        var lt = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            M()(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.pageScreen,
                n = e.mockData,
                a = e.dataRoute,
                o = e.nodeKey,
                r = e.onChange,
                i = [];
              if (n && '{}' !== JSON.stringify(n)) {
                var l = n;
                if (!(0, Z.isObject)(n) && '' !== n)
                  try {
                    l = JSON.parse(n);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (l = {});
                  }
                i = (0, Z.json2treeData)(l);
              }
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === t
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: o + '-dataRoute-select',
                },
                A.createElement(
                  'div',
                  { className: 'element-title' },
                  '数据路径选择',
                ),
                A.createElement(
                  'div',
                  { className: 'content-item' },
                  A.createElement(
                    'div',
                    { className: 'form-item-box' },
                    A.createElement(ee.TreeSelect, {
                      className: 'data-route-select',
                      defaultValue: a,
                      treeData: i,
                      allowClear: !0,
                      placeholder: '请选择要使用的数据节点（数据路径）',
                      treeDefaultExpandAll: !0,
                      onChange: r,
                    }),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        lt.propTypes = {
          mockData: W().any,
          dataRoute: W().any,
          onChange: W().func,
          nodeKey: W().string,
        };
        var st = lt,
          ct = (__webpack_require__(1147), ee.Select.Option),
          ut = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleValueChange = function (
                  e,
                  t,
                ) {
                  var a = Object.assign({}, n.props.curConfigData);
                  (a[e] = t), n.props.configDataChange(a);
                }),
                (n.paramsValueChange = function (e, t) {
                  var a = Object.assign({}, n.props.curConfigData);
                  a.body && a.body[e] && (a.body[e].value = t),
                    n.props.configDataChange(a);
                }),
                (n.dynamicDataChange = function (e) {
                  var t = (n.props.jsonStore || {}).dynamicDataObj,
                    a = (0, te.bQ)((0, Q.toJS)(t[e]));
                  a &&
                    (a.id,
                    a.url,
                    a.method,
                    a.headers,
                    a.options,
                    a.name,
                    a.body,
                    a.data,
                    a.filter);
                }),
                (n.dataRouteChange = function (e) {
                  var t = Object.assign({}, n.props.curConfigData);
                  t.dataRoute = e;
                  var a = (0, Z.dataRoute2dataPath)(e);
                  t.filter = 'return ' + a + ';';
                }),
                n
              );
            }
            return (
              M()(t, e),
              (t.prototype.render = function () {
                var e = this,
                  t = this.props,
                  n = t.schemaStore,
                  a = t.jsonStore,
                  o = (n || {}).pageScreen,
                  r = a || {},
                  i = r.getJSONDataByKeyRoute,
                  l = r.dynamicDataApiScopeList,
                  s = r.dynamicDataList,
                  c = r.dynamicDataObj,
                  u = this.props,
                  p = u.curConfigData,
                  m = u.nodeKey,
                  d = u.keyRoute,
                  y = u.renderChild,
                  h = (i(d), p.dataName),
                  g = p.dataRoute,
                  S = p.body || {};
                if (!(0, ne.Gv)(S) && '' !== S)
                  try {
                    S = JSON.parse(S);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (S = {});
                  }
                var _ = c[h] || {};
                return A.createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    id: m,
                  },
                  A.createElement(
                    'div',
                    { className: 'element-title' },
                    p.title + ' (接口下发）',
                  ),
                  A.createElement(
                    'div',
                    { className: 'content-item object-content' },
                    A.createElement(
                      'div',
                      {
                        className: 'remote-dynamic-data-schema',
                        key: m + '-remote-dynamic-data',
                        id: m + '-remote-dynamic-data',
                      },
                      A.createElement(
                        'div',
                        {
                          className:
                            'wideScreen' === o
                              ? 'wide-screen-element-warp'
                              : 'mobile-screen-element-warp',
                          key: m + '-' + h,
                          id: m + '-' + h,
                        },
                        A.createElement(
                          'div',
                          { className: 'element-title' },
                          '数据源列表',
                        ),
                        A.createElement(
                          'div',
                          { className: 'content-item' },
                          A.createElement(
                            'div',
                            { className: 'form-item-box' },
                            A.createElement(
                              ee.Select,
                              {
                                className: 'dynamic-data-select',
                                defaultValue: h,
                                onSelect: this.dynamicDataChange,
                              },
                              s &&
                                (0, ne.cy)(s) &&
                                s.map(function (e) {
                                  return A.createElement(
                                    ct,
                                    { value: e.name, key: e.id },
                                    e.title,
                                  );
                                }),
                            ),
                          ),
                        ),
                      ),
                      h &&
                        S &&
                        Object.keys(S).length > 0 &&
                        A.createElement(
                          'div',
                          {
                            className:
                              ('wideScreen' === o
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp') +
                              ' element-title-card-warp',
                            key: m + '-' + h + '-params',
                            id: m + '-' + h + '-params',
                          },
                          A.createElement(
                            'div',
                            { className: 'element-title' },
                            '请求参数配置2',
                          ),
                          A.createElement(
                            'div',
                            { className: 'content-item object-content' },
                            Object.keys(S).map(function (t) {
                              var n = S[t];
                              n.readOnly = !(!n.scope || 'static' !== n.scope);
                              var a = m + '-body-' + t,
                                r = l[n.scope];
                              return (
                                r &&
                                  n.title.indexOf(r) < 0 &&
                                  (n.title = n.title + '（' + r + '）'),
                                (n.default = n.value),
                                y({
                                  rendererType: 'input',
                                  pageScreen: o,
                                  jsonKey: t,
                                  nodeKey: a,
                                  targetJsonSchema: n,
                                  onChange: function (n) {
                                    e.paramsValueChange(t, n);
                                  },
                                })
                              );
                            }),
                          ),
                        ),
                      h &&
                        S &&
                        0 === Object.keys(S).length &&
                        A.createElement(
                          'div',
                          {
                            className:
                              'wideScreen' === o
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: m + '-' + h + '-empty',
                            id: m + '-' + h + '-empty',
                          },
                          A.createElement(
                            'div',
                            { className: 'element-title' },
                            '请求参数配置',
                          ),
                          A.createElement(
                            'div',
                            { className: 'content-item' },
                            A.createElement(
                              'span',
                              { className: 'warning-text' },
                              '无可配置的请求参数',
                            ),
                          ),
                        ),
                      h &&
                        A.createElement(st, {
                          pageScreen: o,
                          nodeKey: m + '-dataRoute',
                          mockData: _.respMock,
                          dataRoute: g,
                          onChange: this.dataRouteChange,
                          key: m + '-dataRoute',
                        }),
                      h &&
                        y({
                          rendererType: 'codearea',
                          isReadOnly: !0,
                          isIgnoreWarn: !0,
                          jsonKey: 'filter',
                          nodeKey: m + '-config-params-filter-' + g,
                          keyRoute: d ? d + '-filter' : 'filter',
                          targetJsonSchema: {
                            title: '过滤器函数体',
                            default: 'return data;',
                          },
                        }),
                    ),
                  ),
                );
              }),
              t
            );
          })(A.PureComponent);
        ut.propTypes = {
          pageScreen: W().any,
          keyRoute: W().any,
          nodeKey: W().string,
          curConfigData: W().object,
          configDataChange: W().func,
          dynamicDataList: W().array,
          dynamicDataObj: W().object,
          dynamicDataApiScopeList: W().object,
        };
        var pt = (0, I.inject)(function (e) {
            return {
              schemaStore: e.JSONSchemaStore,
              jsonStore: e.JSONEditorStore,
            };
          })((0, I.observer)(ut)),
          mt = (__webpack_require__(8678), ee.Select.Option),
          dt = (function (e) {
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
                  n.handleValueChange(a + '-type', e),
                    setTimeout(function () {
                      o();
                    }, 100);
                }),
                (n.dynamicDataChange = function (e) {
                  var t = n.props,
                    a = t.keyRoute,
                    o = t.jsonStore || {},
                    r = o.triggerChangeAction,
                    i = o.dynamicDataObj,
                    l = (0, te.bQ)((0, Q.toJS)(i[e]));
                  if (l) {
                    var s = {
                      id: l.id,
                      url: l.url,
                      method: l.method,
                      headers: l.headers,
                      options: l.options,
                      dataName: l.name,
                      body: l.body,
                      data: l.data,
                      filter: 'return data;',
                      dataRoute: '',
                    };
                    n.handleValueChange(a + '-config', s),
                      setTimeout(function () {
                        r();
                      }, 100);
                  }
                }),
                (n.dataRouteChange = function (e) {
                  var t = n.props,
                    a = t.keyRoute,
                    o = t.jsonStore || {},
                    r = o.triggerChangeAction,
                    i = o.updateFormValueData;
                  if (e) {
                    i(a + '-config-dataRoute', e, !0);
                    var l = (0, Z.dataRoute2dataPath)(e);
                    n.handleValueChange(
                      a + '-config-filter',
                      'return ' + l + ';',
                    );
                  } else
                    i(a + '-config-dataRoute', '', !0),
                      n.handleValueChange(a + '-config-filter', 'return data;');
                  setTimeout(function () {
                    r();
                  }, 100);
                }),
                (n.paramsConfigChange = function (e, t) {
                  var a = n.props,
                    o = a.keyRoute,
                    r = a.jsonStore || {},
                    i = r.triggerChangeAction,
                    l =
                      (0, r.getJSONDataByKeyRoute)(o + '-config-body-' + e) ||
                      {};
                  n.handleValueChange(
                    o + '-config-body-' + e,
                    Object.assign(l, t),
                  ),
                    setTimeout(function () {
                      i();
                    }, 100);
                }),
                (n.paramsValueChange = function (e, t) {
                  var a = n.props;
                  a.keyRoute, (a.jsonStore || {}).triggerChangeAction;
                }),
                (n.state = { isShowFilter: !1 }),
                (n.switchFilterBtn = n.switchFilterBtn.bind(n)),
                n
              );
            }
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.render = function () {
                var e = this,
                  t = this.props,
                  n = t.schemaStore,
                  a = t.jsonStore,
                  o = (n || {}).pageScreen,
                  r = a || {},
                  i = r.getJSONDataByKeyRoute,
                  l = r.dynamicDataList,
                  s = r.dynamicDataObj,
                  c = r.dynamicDataApiScopeList,
                  u = r.triggerChange,
                  p = this.props,
                  m = p.keyRoute,
                  d = p.jsonKey,
                  y = p.nodeKey,
                  h = p.indexRoute,
                  g = p.targetJsonSchema,
                  S = p.renderChild,
                  _ = this.state.isShowFilter,
                  f = g.type,
                  v = i(m) || {},
                  b = g.properties.type || {},
                  E = v.type || b.default,
                  w = v.config || {},
                  O = w.dataName,
                  C = w.dataRoute,
                  R = w.body || {};
                if (!(0, ne.Gv)(R) && '' !== R)
                  try {
                    R = JSON.parse(R);
                  } catch (e) {
                    console.log('当前数据源的请求参数格式异常'), (R = {});
                  }
                var N = s[O] || {},
                  x = g.properties.data || {},
                  j = g.style ? (0, te.K8)((0, Q.toJS)(g.style)) : {},
                  k = g.titleStyle ? (0, te.K8)((0, Q.toJS)(g.titleStyle)) : {},
                  D = g.contentStyle
                    ? (0, te.K8)((0, Q.toJS)(g.contentStyle))
                    : {};
                return A.createElement(
                  'div',
                  {
                    className: 'mobile-screen-element-warp dynamic-data-schema',
                    key: y + '-' + u,
                    id: y,
                    style: j,
                  },
                  A.createElement(
                    'div',
                    { className: 'element-title', style: k },
                    A.createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === o ? g.description : '',
                        placement: 'top',
                      },
                      A.createElement(
                        'span',
                        { className: 'title-text', title: g.title },
                        g.title,
                        g.showKey &&
                          A.createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(d, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === o &&
                      g.description &&
                      A.createElement(
                        ee.Tooltip,
                        { title: g.description, placement: 'top' },
                        A.createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  A.createElement(
                    'div',
                    { className: 'content-item', style: D },
                    A.createElement(
                      'div',
                      { className: 'dynamic-data-tab-radio-box' },
                      A.createElement(
                        'div',
                        { className: 'dynamic-data-tab-radio' },
                        A.createElement(
                          'div',
                          {
                            className:
                              'tab-radio ' +
                              ('local' === E ? 'tab-radio-active' : ''),
                            onClick: function () {
                              e.tabChange('local');
                            },
                          },
                          '本地数据',
                        ),
                        A.createElement(
                          'div',
                          {
                            className:
                              'tab-radio ' +
                              ('remote' === E ? 'tab-radio-active' : ''),
                            onClick: function () {
                              e.tabChange('remote');
                            },
                          },
                          '接口数据',
                        ),
                      ),
                    ),
                    A.createElement(
                      'div',
                      {
                        className:
                          'dynamic-dat-tabPane ' +
                          ('local' === E ? 'dynamic-dat-tabPane-active' : ''),
                      },
                      A.createElement(
                        'div',
                        { className: 'json-form-box' },
                        A.createElement(
                          ee.Tooltip,
                          {
                            title: _
                              ? '点击隐藏数据过滤器'
                              : '点击显示数据过滤器',
                            placement: 'top',
                          },
                          A.createElement(se.FilterOutlined, {
                            className: 'filter-btn',
                            onClick: this.switchFilterBtn,
                          }),
                        ),
                        S({
                          rendererType: 'json',
                          parentType: f,
                          jsonKey: 'data',
                          indexRoute: h ? h + '-2' : '2',
                          keyRoute: m ? m + '-data' : 'data',
                          nodeKey: y + '-data',
                          targetJsonSchema: x,
                        }),
                        A.createElement(
                          'div',
                          { className: 'filter-func-box' },
                          _ &&
                            S({
                              rendererType: 'codearea',
                              isIgnoreWarn: !0,
                              parentType: f,
                              jsonKey: 'localFilter',
                              indexRoute: h ? h + '-3' : '3',
                              keyRoute: m ? m + '-localFilter' : 'localFilter',
                              nodeKey: y + '-localFilter',
                              targetJsonSchema: g.properties.localFilter,
                            }),
                        ),
                      ),
                    ),
                    A.createElement(
                      'div',
                      {
                        className:
                          'dynamic-dat-tabPane ' +
                          ('remote' === E ? 'dynamic-dat-tabPane-active' : ''),
                      },
                      A.createElement(
                        'div',
                        { className: 'json-form-box' },
                        A.createElement(
                          'div',
                          {
                            className:
                              'wideScreen' === o
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: y + '-' + O,
                            id: y + '-' + O,
                          },
                          A.createElement(
                            'div',
                            { className: 'element-title' },
                            '数据源列表',
                          ),
                          A.createElement(
                            'div',
                            { className: 'content-item' },
                            A.createElement(
                              'div',
                              { className: 'form-item-box' },
                              A.createElement(
                                ee.Select,
                                {
                                  className: 'dynamic-data-select',
                                  defaultValue: O,
                                  onSelect: this.dynamicDataChange,
                                },
                                l &&
                                  (0, ne.cy)(l) &&
                                  l.map(function (e) {
                                    return A.createElement(
                                      mt,
                                      { value: e.name, key: e.id },
                                      e.title,
                                    );
                                  }),
                              ),
                            ),
                          ),
                        ),
                        O &&
                          R &&
                          Object.keys(R).length > 0 &&
                          A.createElement(
                            'div',
                            {
                              className:
                                ('wideScreen' === o
                                  ? 'wide-screen-element-warp'
                                  : 'mobile-screen-element-warp') +
                                ' element-title-card-warp',
                              key: y + '-' + O + '-params',
                              id: y + '-' + O + '-params',
                            },
                            A.createElement(
                              'div',
                              { className: 'element-title' },
                              '请求参数配置1',
                            ),
                            A.createElement(
                              'div',
                              { className: 'content-item object-content' },
                              Object.keys(R).map(function (t) {
                                var n = (0, te.bQ)(R[t]);
                                n.readOnly = !(
                                  !n.scope || 'static' !== n.scope
                                );
                                var a = m + '-config-body-' + t,
                                  r = c[n.scope];
                                if (
                                  (r &&
                                    'dynamic' !== n.scope &&
                                    (n.title = n.title + '（' + r + '）'),
                                  'dynamic' !== n.scope)
                                )
                                  return S({
                                    rendererType: 'input',
                                    pageScreen: o,
                                    jsonKey: t,
                                    keyRoute: a + '-value',
                                    nodeKey: a,
                                    targetJsonSchema: n,
                                    onChange: function (n) {
                                      e.paramsValueChange(t, n);
                                    },
                                  });
                                var i = y + '-' + O + '-params-' + t;
                                return A.createElement(pt, {
                                  pageScreen: o,
                                  nodeKey: i,
                                  renderChild: S,
                                  keyRoute: m
                                    ? m + '-config-body-' + t
                                    : 'config-body-${paramKey}',
                                  curConfigData: n || {},
                                  configDataChange: function (n) {
                                    e.paramsConfigChange(t, n);
                                  },
                                  key: a,
                                });
                              }),
                            ),
                          ),
                        O &&
                          R &&
                          0 === Object.keys(R).length &&
                          A.createElement(
                            'div',
                            {
                              className:
                                'wideScreen' === o
                                  ? 'wide-screen-element-warp'
                                  : 'mobile-screen-element-warp',
                              key: y + '-' + O + '-empty',
                              id: y + '-' + O + '-empty',
                            },
                            A.createElement(
                              'div',
                              { className: 'element-title' },
                              '请求参数配置',
                            ),
                            A.createElement(
                              'div',
                              { className: 'content-item' },
                              A.createElement(
                                'span',
                                { className: 'warning-text' },
                                '无可配置的请求参数',
                              ),
                            ),
                          ),
                        O &&
                          A.createElement(st, {
                            pageScreen: o,
                            nodeKey: y + '-config-dataRoute-' + C,
                            mockData: N.respMock,
                            dataRoute: C,
                            onChange: this.dataRouteChange,
                            key: y + '-config-dataRoute',
                          }),
                        O &&
                          S({
                            rendererType: 'codearea',
                            isReadOnly: !0,
                            isIgnoreWarn: !0,
                            parentType: f,
                            jsonKey: 'filter',
                            indexRoute: h ? h + '-1-2' : '1-2',
                            keyRoute: m
                              ? m + '-config-filter'
                              : 'config-filter',
                            nodeKey: y + '-config-filter-' + C,
                            targetJsonSchema:
                              g.properties.config &&
                              g.properties.config.properties.filter,
                          }),
                      ),
                    ),
                  ),
                );
              }),
              t
            );
          })(A.PureComponent);
        (dt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          dynamicDataList: W().array,
          dynamicDataObj: W().object,
          dynamicDataApiScopeList: W().object,
        }),
          (0, le.TS)({ type: 'dynamic-data', component: dt });
        var yt = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                jsonView: !1,
                isClosed: !1,
              }),
              n
            );
          }
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.render = function () {
              var e,
                t = this,
                n = this.props,
                a = n.schemaStore,
                o = (n.jsonStore, (a || {}).pageScreen),
                r = this.props,
                i = r.keyRoute,
                l = r.jsonKey,
                s = r.nodeKey,
                c = r.indexRoute,
                u = r.targetJsonSchema,
                p = r.renderChild,
                m = u.type,
                d = this.state,
                y = d.jsonView,
                h = d.isClosed,
                g = u.properties.type || {},
                S = u.properties.register || {},
                _ = u.properties.actionFunc || {},
                f = u.properties.trigger || {},
                v = u.properties.eventData || {},
                b = g.default,
                E = null == (e = u.showCodeViewBtn) || e,
                w = u.style ? (0, te.K8)((0, Q.toJS)(u.style)) : {},
                O = u.titleStyle ? (0, te.K8)((0, Q.toJS)(u.titleStyle)) : {},
                C = u.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(u.contentStyle))
                  : {};
              return A.createElement(
                'div',
                {
                  className:
                    'wideScreen' === o
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  id: s,
                  style: w,
                },
                A.createElement(
                  'div',
                  { className: 'element-title', style: O },
                  A.createElement(
                    ee.Tooltip,
                    {
                      title: 'wideScreen' === o ? u.description : '',
                      placement: 'top',
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text', title: u.title },
                      u.title,
                      u.showKey &&
                        A.createElement(
                          'span',
                          null,
                          '（',
                          (0, Z.truncate)(l, { length: 15 }),
                          '）',
                        ),
                    ),
                  ),
                  'mobileScreen' === o &&
                    u.description &&
                    A.createElement(
                      ee.Tooltip,
                      { title: u.description, placement: 'top' },
                      A.createElement(se.InfoCircleOutlined, {
                        className: 'info-icon',
                      }),
                    ),
                ),
                A.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: C,
                  },
                  A.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: function (e) {
                        t.setState({ isClosed: !h }),
                          e.preventDefault(),
                          e.stopPropagation();
                      },
                    },
                    A.createElement(
                      'span',
                      { className: 'title-text' },
                      '事件配置',
                    ),
                    h
                      ? A.createElement(se.RightOutlined, {
                          className: 'close-operate-btn',
                        })
                      : A.createElement(se.DownOutlined, {
                          className: 'close-operate-btn',
                        }),
                    E &&
                      A.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function (e) {
                            t.setState({ jsonView: !y }),
                              e.preventDefault(),
                              e.stopPropagation();
                          },
                        },
                        A.createElement(
                          ee.Tooltip,
                          { title: y ? '关闭源码模式' : '开启源码模式' },
                          A.createElement(we, {
                            className: y ? 'info-icon active' : 'info-icon',
                          }),
                        ),
                      ),
                  ),
                  A.createElement(
                    'div',
                    {
                      className:
                        'content-item object-content ' +
                        (y ? 'json-view-array' : '') +
                        ' ' +
                        (h ? 'closed' : ''),
                    },
                    !y &&
                      'on' === b &&
                      A.createElement(
                        A.Fragment,
                        null,
                        S &&
                          p({
                            rendererType: 'input',
                            parentType: m,
                            jsonKey: 'register',
                            indexRoute: c ? c + '-1' : '1',
                            keyRoute: i ? i + '-register' : 'register',
                            nodeKey: s + '-register',
                            targetJsonSchema: S,
                          }),
                        _ &&
                          p({
                            rendererType: 'codearea',
                            parentType: m,
                            jsonKey: 'actionFunc',
                            indexRoute: c ? c + '-2' : '2',
                            keyRoute: i ? i + '-actionFunc' : 'actionFunc',
                            nodeKey: s + '-actionFunc',
                            targetJsonSchema: _,
                          }),
                      ),
                    !y &&
                      'emit' === b &&
                      A.createElement(
                        A.Fragment,
                        null,
                        f &&
                          p({
                            rendererType: 'input',
                            parentType: m,
                            jsonKey: 'trigger',
                            indexRoute: c ? c + '-1' : '1',
                            keyRoute: i ? i + '-trigger' : 'trigger',
                            nodeKey: s + '-trigger',
                            targetJsonSchema: f,
                          }),
                        v &&
                          p({
                            rendererType: 'json',
                            parentType: m,
                            jsonKey: 'eventData',
                            indexRoute: c ? c + '-2' : '2',
                            keyRoute: i ? i + '-eventData' : 'eventData',
                            nodeKey: s + '-eventData',
                            targetJsonSchema: v,
                          }),
                      ),
                    y && A.createElement(ye, this.props),
                  ),
                ),
              );
            }),
            t
          );
        })(A.PureComponent);
        (yt.propTypes = {
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().string,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
        }),
          (0, le.TS)({ type: 'event', component: yt });
        var ht = (function (e) {
          function t(t) {
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
          M()(t, e);
          var n = t.prototype;
          return (
            (n.componentWillMount = function () {
              he.x.call(this);
            }),
            (n.componentWillReceiveProps = function (e) {
              e.keyRoute !== this.props.keyRoute && he.x.call(this, e.keyRoute);
            }),
            (n.collapseChange = function (e) {
              var t = this.props.keyRoute,
                n = this.state.isClosed;
              this.setState({ isClosed: !n }),
                e.preventDefault(),
                e.stopPropagation(),
                (0, ce.PM)(t, !n);
            }),
            (n.render = function () {
              var e,
                t,
                n = this,
                a = this.props,
                o = a.schemaStore,
                r = a.jsonStore,
                i = (o || {}).pageScreen,
                l = r || {},
                s = l.options,
                c = l.getJSONDataByKeyRoute,
                u = this.props,
                p = u.indexRoute,
                m = u.jsonKey,
                d = u.nodeKey,
                y = u.keyRoute,
                h = u.targetJsonSchema,
                g = u.isArrayItem,
                S = u.isStructuredSchema,
                _ = u.renderChild,
                f = this.state,
                v = f.jsonView,
                b = f.isClosed,
                E = s || {},
                w = S,
                O = null == (e = h.showCodeViewBtn) || e,
                C = c(y) || {},
                R = (C.type, C.valueType, E.metaContentKeyList || []),
                N = E.globalMetaConfig || [],
                x = b,
                j = (0, ce.Gz)(y);
              void 0 !== j && (x = j);
              var k = null != (t = h.boxTitle) ? t : '动态配置',
                D = h.style ? (0, te.K8)((0, Q.toJS)(h.style)) : {},
                K = h.titleStyle ? (0, te.K8)((0, Q.toJS)(h.titleStyle)) : {},
                T = h.contentStyle
                  ? (0, te.K8)((0, Q.toJS)(h.contentStyle))
                  : {};
              return V().createElement(
                'div',
                {
                  className:
                    'wideScreen' === i
                      ? 'object-schema-warp wide-screen-element-warp'
                      : 'object-schema-warp mobile-screen-element-warp',
                  id: d,
                  style: D,
                },
                !w &&
                  !g &&
                  V().createElement(
                    'div',
                    { className: 'element-title', style: K },
                    V().createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === i ? h.description : '',
                        placement: 'top',
                      },
                      V().createElement(
                        'span',
                        { className: 'title-text', title: h.title },
                        h.title,
                        h.showKey &&
                          V().createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(m, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === i &&
                      h.description &&
                      V().createElement(
                        ee.Tooltip,
                        { title: h.description, placement: 'top' },
                        V().createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                V().createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: T,
                  },
                  !w &&
                    !g &&
                    V().createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      V().createElement(
                        'span',
                        { className: 'title-text' },
                        k,
                        ' ',
                      ),
                      x
                        ? V().createElement(se.RightOutlined, {
                            className: 'close-operate-btn',
                          })
                        : V().createElement(se.DownOutlined, {
                            className: 'close-operate-btn',
                          }),
                      O &&
                        V().createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function (e) {
                              n.setState({ jsonView: !v }),
                                e.preventDefault(),
                                e.stopPropagation();
                            },
                          },
                          V().createElement(
                            ee.Tooltip,
                            { title: v ? '关闭源码模式' : '开启源码模式' },
                            V().createElement(we, {
                              className: v ? 'info-icon active' : 'info-icon',
                            }),
                          ),
                        ),
                    ),
                  V().createElement(
                    'div',
                    {
                      className:
                        'content-item ' +
                        (w || g ? '' : 'object-content') +
                        ' ' +
                        (v ? 'json-view-array' : '') +
                        ' ' +
                        (x ? 'closed' : ''),
                    },
                    !v &&
                      h.propertyOrder &&
                      h.propertyOrder.map(function (e, t) {
                        var n = p ? p + '-' + t : '' + t,
                          a = y ? y + '-' + e : '' + e,
                          o = e,
                          r = (0, Q.toJS)(h.properties[o]),
                          i = r.type,
                          l = d + '-' + i + '-' + o;
                        if (
                          'valueType' === o &&
                          ('ContentStaticConfig' === C.type ||
                            'ResourceCenter' === C.type)
                        ) {
                          var s = h.properties.value;
                          ['select', 'radio', 'checkboxes'].includes(s.type) ||
                            (r.default = 'string');
                        }
                        if (
                          'range' === o &&
                          !(
                            (r.options && 0 !== r.options.length) ||
                            ('ContentStaticConfig' !== C.type &&
                              'ResourceCenter' !== C.type)
                          )
                        ) {
                          var c = h.properties.value;
                          ['select', 'radio', 'checkboxes'].includes(c.type) &&
                            c.options &&
                            c.options.length > 0 &&
                            (r.options = (0, te.n2)(c.options));
                        }
                        return (
                          'value' === o && 'Content' === C.type
                            ? ((r.type = 'select'), (r.options = (0, te.bQ)(R)))
                            : 'value' === o &&
                              'RuntimeConst' === C.type &&
                              ((r.type = 'cascader'),
                              (r.options = (0, te.bQ)(N))),
                          _({
                            parentType: i,
                            jsonKey: o,
                            indexRoute: n,
                            keyRoute: a,
                            nodeKey: l,
                            targetJsonSchema: r,
                          })
                        );
                      }),
                    v && V().createElement(ye, this.props),
                  ),
                ),
              );
            }),
            t
          );
        })(V().PureComponent);
        (ht.propTypes = {
          isArrayItem: W().any,
          arrIndex: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        }),
          (0, le.TS)({ type: 'dynamic-array', component: ht }),
          (0, le.TS)({ type: 'dynamic-object', component: ht }),
          (0, le.TS)({ type: 'dynamic-config', component: ht });
        var gt = ee.Collapse.Panel,
          St = (function (e) {
            function t(t) {
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
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.collapseChange = function (e) {
                var t = this.props.keyRoute;
                (0, ce.PM)(t, e);
              }),
              (n.render = function () {
                var e = this.props,
                  t = e.schemaStore,
                  n = e.jsonStore,
                  a = (t || {}).pageScreen,
                  o = n || {},
                  r = o.getJSONDataByKeyRoute,
                  i = o.JSONEditorObj,
                  l = this.props,
                  s = l.indexRoute,
                  c = l.jsonKey,
                  u = l.nodeKey,
                  p = l.keyRoute,
                  m = l.targetJsonSchema,
                  d = l.renderChild,
                  y = ['mainConfig'],
                  h = (0, ce.Gz)(p);
                h && (0, Z.isArray)(h) && (y = h);
                var g = r(p) || {};
                g = Object.assign({}, i, g);
                var S = m.style ? (0, te.K8)((0, Q.toJS)(m.style)) : {},
                  _ = m.titleStyle ? (0, te.K8)((0, Q.toJS)(m.titleStyle)) : {},
                  f = m.contentStyle
                    ? (0, te.K8)((0, Q.toJS)(m.contentStyle))
                    : {};
                return V().createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === a
                        ? 'wide-screen-element-warp'
                        : 'mobile-screen-element-warp',
                    id: u,
                    style: S,
                  },
                  V().createElement(
                    'div',
                    { className: 'element-title', style: _ },
                    V().createElement(
                      ee.Tooltip,
                      {
                        title: 'wideScreen' === a ? m.description : '',
                        placement: 'top',
                      },
                      V().createElement(
                        'span',
                        { className: 'title-text', title: m.title },
                        m.title,
                        m.showKey &&
                          V().createElement(
                            'span',
                            null,
                            '（',
                            (0, Z.truncate)(c, { length: 15 }),
                            '）',
                          ),
                      ),
                    ),
                    'mobileScreen' === a &&
                      m.description &&
                      V().createElement(
                        ee.Tooltip,
                        { title: m.description, placement: 'top' },
                        V().createElement(se.InfoCircleOutlined, {
                          className: 'info-icon',
                        }),
                      ),
                  ),
                  V().createElement(
                    'div',
                    { className: 'array-schema-box', style: f },
                    V().createElement(
                      ee.Collapse,
                      {
                        defaultActiveKey: y,
                        expandIconPosition: 'end',
                        bordered: !1,
                        accordion: !0,
                        onChange: this.collapseChange,
                      },
                      m.propertyOrder.map(function (e, t) {
                        var n = s ? s + '-' + t : '' + t,
                          a = p ? p + '-' + e : '' + e,
                          o = e,
                          r = (0, Q.toJS)(m.properties[o]),
                          i = r.type,
                          l = u + '-' + i + '-' + o;
                        if (r.propertyOrder && r.propertyOrder.length > 0) {
                          if (
                            (0, te.GT)(r.onShow) &&
                            '' !== r.onShow &&
                            (((0, Z.isBoolean)(r.onShow) && !r.onShow) ||
                              ((0, Z.isString)(r.onShow) &&
                                !(0, Z.evalExpression)(r.onShow, g)))
                          )
                            return;
                          return V().createElement(
                            gt,
                            { header: r.title, key: e + '-' + t },
                            d({
                              parentType: i,
                              jsonKey: o,
                              indexRoute: n,
                              keyRoute: a,
                              nodeKey: l,
                              targetJsonSchema: r,
                              isArrayItem: !0,
                            }),
                          );
                        }
                      }),
                    ),
                  ),
                );
              }),
              t
            );
          })(V().PureComponent);
        (St.propTypes = {
          isArrayItem: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        }),
          (0, le.TS)({ type: 'sohu-source', component: St }),
          __webpack_require__(9612);
        var _t = ee.Select.Option,
          ft = ee.Collapse.Panel,
          vt = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).handleEventTitleChange =
                  function (e, t) {
                    var a = n.props,
                      o = a.keyRoute,
                      r = a.jsonStore || {},
                      i = r.updateFormValueData,
                      l = r.getJSONDataByKeyRoute,
                      s = (r.options, t.target.value),
                      c = l(o) || {},
                      u = Object.assign([], (0, Q.toJS)(c.event)),
                      p = Object.assign({}, (0, Q.toJS)(c.globalEventMap));
                    (p[e] = s),
                      u.forEach(function (t) {
                        t.code === e && void 0 !== t.desc && (t.desc = s);
                      }),
                      i(o, { event: u, globalEventMap: p });
                  }),
                (n.handleSelectEventChange = function (e, t) {
                  var a = n.props,
                    o = a.keyRoute,
                    r = a.jsonStore || {},
                    i = r.updateFormValueData,
                    l = r.getJSONDataByKeyRoute,
                    s = r.options || {},
                    c = o + '-event',
                    u = l(o) || {},
                    p = [];
                  u.event && u.event.length > 0
                    ? (p = (0, Q.toJS)(u.event))
                    : s.eventListenConfig &&
                      s.eventListenConfig.length > 0 &&
                      (s.eventListenConfig || []).forEach(function (e) {
                        p.push({ name: e.name, listenName: e.code });
                      }),
                    p.forEach(function (n) {
                      n.name === e && (n.listenName = t);
                    }),
                    i(c, p);
                }),
                (n.state = { jsonView: !1, isClosed: !1 }),
                (n.collapseChange = n.collapseChange.bind(n)),
                n
              );
            }
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillMount = function () {
                he.x.call(this);
              }),
              (n.componentWillReceiveProps = function (e) {
                e.keyRoute !== this.props.keyRoute &&
                  he.x.call(this, e.keyRoute);
              }),
              (n.collapseChange = function (e) {
                var t = this.props.keyRoute;
                (0, ce.PM)(t, e);
              }),
              (n.render = function () {
                var e = this,
                  t = this.props,
                  n = t.schemaStore,
                  a = t.jsonStore,
                  o = (n || {}).pageScreen,
                  r = a || {},
                  i = r.getJSONDataByKeyRoute,
                  l = r.options,
                  s = this.props,
                  c = (s.indexRoute, s.jsonKey, s.nodeKey),
                  u = s.keyRoute,
                  p = s.targetJsonSchema,
                  m = l || {},
                  d = i(u),
                  y = d.globalEventMap || {},
                  h = d.event || [],
                  g = m.widgetType,
                  S = m.eventEmitConfig || [],
                  _ = m.eventListenConfig || [],
                  f = m.allEmitEventList || [],
                  v = 'page' !== g && 0 === S.length && 0 === _.length,
                  b = [],
                  E = (0, ce.Gz)(u);
                E && (0, Z.isArray)(E) && (b = E);
                var w = p.style ? (0, te.K8)((0, Q.toJS)(p.style)) : {};
                return V().createElement(
                  'div',
                  {
                    className:
                      'wideScreen' === o
                        ? 'sohu-event-container array-schema-box wide-screen-element-warp'
                        : 'sohu-event-container array-schema-box mobile-screen-element-warp',
                    id: c,
                    style: w,
                  },
                  V().createElement(
                    ee.Collapse,
                    {
                      defaultActiveKey: b,
                      expandIconPosition: 'right',
                      bordered: !1,
                      onChange: this.collapseChange,
                    },
                    _ &&
                      _.length > 0 &&
                      V().createElement(
                        ft,
                        { header: '监听的事件', key: 'eventListenConfig' },
                        _.map(function (t, n) {
                          var a = c + '-eventListen-' + t.code,
                            o =
                              (
                                h.find(function (e) {
                                  return e.name === t.name;
                                }) || {}
                              ).listenName || '';
                          return V().createElement(
                            'div',
                            { key: a, className: 'listen-event-content' },
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
                                ee.Select,
                                {
                                  showSearch: !0,
                                  style: {
                                    display: 'inline-block',
                                    minWidth: '120px',
                                  },
                                  onChange: function (n) {
                                    return e.handleSelectEventChange(t.name, n);
                                  },
                                  defaultValue: o,
                                },
                                f.map(function (e) {
                                  var t = y[e.code] || e.desc || e.name,
                                    n = c + '-allEmitEvent-' + t;
                                  return V().createElement(
                                    _t,
                                    { value: e.code, key: n },
                                    t,
                                  );
                                }),
                              ),
                            ),
                          );
                        }),
                      ),
                    S &&
                      S.length > 0 &&
                      V().createElement(
                        ft,
                        { header: '触发的事件', key: 'eventEmitConfig' },
                        S.map(function (t, n) {
                          var a = c + '-eventEmit-' + t.code,
                            o = t.desc || t.name;
                          return V().createElement(
                            'div',
                            {
                              key: a,
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
                                (0, Z.truncate)(t.code, { length: 30 }),
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
                                V().createElement(ee.Input, {
                                  style: { display: 'inline-block' },
                                  defaultValue: y[t.code] || o,
                                  onPressEnter: function (n) {
                                    return e.handleEventTitleChange(t.code, n);
                                  },
                                  onBlur: function (n) {
                                    return e.handleEventTitleChange(t.code, n);
                                  },
                                }),
                              ),
                            ),
                          );
                        }),
                      ),
                    'page' === g &&
                      V().createElement(
                        ft,
                        { header: '事件列表', key: 'AllEmitEventList' },
                        V().createElement(ee.List, {
                          itemLayout: 'horizontal',
                          dataSource: f,
                          renderItem: function (e, t) {
                            return V().createElement(
                              ee.List.Item,
                              null,
                              V().createElement(ee.List.Item.Meta, {
                                title: y[e.code] || e.desc || e.name,
                                description: (0, Z.truncate)(e.code || e.desc, {
                                  length: 30,
                                }),
                                key: c + '-page-AllEmitEventList-' + t,
                              }),
                            );
                          },
                        }),
                      ),
                  ),
                  v &&
                    V().createElement(ee.Empty, {
                      description: '暂无事件相关数据',
                    }),
                );
              }),
              t
            );
          })(V().PureComponent);
        (vt.propTypes = {
          isArrayItem: W().any,
          parentType: W().string,
          jsonKey: W().string,
          indexRoute: W().any,
          keyRoute: W().string,
          nodeKey: W().string,
          targetJsonSchema: W().any,
          isStructuredSchema: W().bool,
        }),
          (0, le.TS)({ type: 'sohu-event', component: vt });
        var bt = function (e) {
            (e.schemaStore || {}).getSchemaByKeyRoute;
            var t = e.jsonStore || {},
              n = t.getJSONDataByKeyRoute,
              a = t.JSONEditorObj,
              o = e.nodeKey,
              r = (e.jsonKey, e.keyRoute),
              i = e.targetJsonSchema,
              l = e.rendererType,
              s = r && (0, Z.getParentKeyRoute)(r),
              c = (s && n(s)) || {},
              u = Object.assign({}, a, c);
            if (
              !(0, te.GT)(i.onShow) ||
              '' === i.onShow ||
              !(
                'false' === i.onShow ||
                ((0, Z.isBoolean)(i.onShow) && !i.onShow) ||
                ((0, Z.isString)(i.onShow) &&
                  !(0, Z.evalExpression)(i.onShow, u))
              )
            ) {
              var p =
                  l || (i.typeOn ? (0, Z.evalExpression)(i.typeOn, u) : i.type),
                m = o,
                d = ie()({}, e, {
                  nodeKey: m,
                  key: m,
                  renderChild: function (t) {
                    return bt(
                      ie()({}, t, {
                        schemaStore: e.schemaStore,
                        jsonStore: e.jsonStore,
                      }),
                    );
                  },
                }),
                y = le.Jd[p] || Te;
              return V().createElement(y, d);
            }
          },
          Et = bt,
          wt = (__webpack_require__(8104), ee.Collapse.Panel),
          Ot = ee.Tabs.TabPane,
          Ct = (function (e) {
            function t(t) {
              var n;
              ((n = e.call(this, t) || this).catchViewStyle = function (e) {
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
                });
              var a = n.props.schemaStore || {},
                o = a.initJSONSchemaData,
                r = a.setPageScreen,
                i = n.props.jsonStore || {},
                l = i.initJSONData,
                s = i.initOnChange,
                c = i.setDynamicDataList,
                u = i.setOptions;
              return (
                t.schemaData
                  ? (o(t.schemaData), l(t.jsonData))
                  : t.jsonData &&
                    (o((0, Z.json2schema)(t.jsonData)), l(t.jsonData)),
                t.wideScreen && r(t.wideScreen),
                t.onChange && s(t.onChange),
                t.dynamicDataList && c(t.dynamicDataList),
                t.options && u(t.options),
                n
              );
            }
            M()(t, e);
            var n = t.prototype;
            return (
              (n.componentWillReceiveProps = function (e) {
                var t = this.props.schemaStore || {},
                  n = t.JSONSchemaChange,
                  a = t.setPageScreen,
                  o = this.props.jsonStore || {},
                  r = o.JSONEditorObj,
                  i = o.initJSONData,
                  l = o.initOnChange,
                  s = o.setDynamicDataList,
                  c = o.setOptions;
                (0, Z.isEqualByIdT)(e.schemaData, this.props.schemaData) ||
                  n(e.schemaData),
                  (0, Z.isEqual)(e.jsonData, r) || i(e.jsonData),
                  (0, Z.isEqual)(e.jsonView, this.props.jsonView) ||
                    this.setState({ jsonView: e.jsonView }),
                  (0, Z.isEqual)(e.viewStyle, this.props.viewStyle) ||
                    this.setState({ viewStyle: e.viewStyle }),
                  (0, Z.isEqual)(e.wideScreen, this.props.wideScreen) ||
                    a(e.wideScreen),
                  (0, Z.isEqual)(e.onChange, this.props.onChange) ||
                    l(e.onChange),
                  (0, Z.isEqual)(
                    e.dynamicDataList,
                    this.props.dynamicDataList,
                  ) || s(e.dynamicDataList),
                  (0, Z.isEqual)(e.options, this.props.options) || c(e.options);
              }),
              (n.render = function () {
                var e = this,
                  t = this.props,
                  n = t.schemaStore,
                  a = t.jsonStore,
                  o = t.jsonViewReadOnly,
                  r = n || {},
                  i = r.jsonSchema,
                  l = r.lastUpdateTime,
                  s = a || {},
                  c = s.JSONEditorObj,
                  u = s.lastUpdateTime,
                  p = s.jsonChange,
                  m = this.state,
                  d = m.jsonView,
                  y = m.viewStyle,
                  h = (0, Z.isEmptySchema)(i),
                  g = (0, Z.isStructuredSchema)(i);
                return A.createElement(
                  'div',
                  { className: 'json-editor-container' },
                  h &&
                    A.createElement(
                      'p',
                      { className: 'json-editor-empty' },
                      '当前jsonSchema没有数据内容',
                    ),
                  !h &&
                    !d &&
                    A.createElement(
                      A.Fragment,
                      null,
                      g &&
                        A.createElement(
                          A.Fragment,
                          null,
                          'fold' === y &&
                            A.createElement(
                              ee.Collapse,
                              {
                                defaultActiveKey: i.propertyOrder,
                                expandIconPosition: 'right',
                                bordered: !1,
                              },
                              i.propertyOrder.map(function (t, o) {
                                var r = o,
                                  s = t,
                                  c = t,
                                  p = i.properties[c],
                                  m = p.type,
                                  d = l + '-' + u + '-' + m + '-' + c;
                                return p.propertyOrder &&
                                  p.propertyOrder.length > 0
                                  ? A.createElement(
                                      wt,
                                      {
                                        header: p.title || e.renderHeader(m),
                                        key: t + '-' + o,
                                      },
                                      Et({
                                        parentType: m,
                                        jsonKey: c,
                                        indexRoute: r,
                                        keyRoute: s,
                                        nodeKey: d,
                                        targetJsonSchema: p,
                                        isStructuredSchema: g,
                                        schemaStore: n,
                                        jsonStore: a,
                                      }),
                                    )
                                  : '';
                              }),
                            ),
                          'tabs' === y &&
                            A.createElement(
                              ee.Tabs,
                              {
                                className: 'tabs-schema-box',
                                defaultActiveKey: i.propertyOrder[0],
                                centered: !0,
                                hideAdd: !0,
                              },
                              i.propertyOrder.map(function (t, o) {
                                var r = o,
                                  s = t,
                                  c = t,
                                  p = i.properties[c],
                                  m = p.type,
                                  d = l + '-' + u + '-' + m + '-' + c;
                                return p.propertyOrder &&
                                  p.propertyOrder.length > 0
                                  ? A.createElement(
                                      Ot,
                                      {
                                        tab: p.title || e.renderHeader(m),
                                        key: t + '-' + o,
                                        closable: !1,
                                        className: 'tabs-schema-item',
                                      },
                                      Et({
                                        parentType: m,
                                        jsonKey: c,
                                        indexRoute: r,
                                        keyRoute: s,
                                        nodeKey: d,
                                        targetJsonSchema: p,
                                        isStructuredSchema: g,
                                        schemaStore: n,
                                        jsonStore: a,
                                      }),
                                    )
                                  : '';
                              }),
                            ),
                        ),
                      !g &&
                        A.createElement(
                          A.Fragment,
                          null,
                          Et({
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
                  !h &&
                    d &&
                    A.createElement(ye, {
                      jsonData: c,
                      readOnly: null == o || o,
                      onChange: p,
                      maxLines: 30,
                    }),
                );
              }),
              t
            );
          })(A.PureComponent);
        Ct.propTypes = {
          viewStyle: W().any,
          wideScreen: W().any,
          onChange: W().func,
          jsonView: W().bool,
          jsonViewReadOnly: W().bool,
          schemaData: W().object,
          jsonData: W().object,
          dynamicDataList: W().any,
          options: W().any,
        };
        var Rt = (0, I.inject)(function (e) {
          return {
            schemaStore: e.JSONSchemaStore,
            jsonStore: e.JSONEditorStore,
          };
        })((0, I.observer)(Ct));
        function Nt(e, t) {
          if (
            (window &&
              !window.JSONEditorCustomRenderers &&
              (window.JSONEditorCustomRenderers = {}),
            !window.JSONEditorCustomRenderers[e])
          )
            return (window.JSONEditorCustomRenderers[e] = t), e;
          console.error(
            '[json-editor]：注册渲染器失败，存在重名渲染器(' + e + ')。',
          );
        }
        function xt(e) {
          if (
            window &&
            window.JSONEditorCustomRenderers &&
            window.JSONEditorCustomRenderers[e]
          )
            return window.JSONEditorCustomRenderers[e].component;
        }
        __webpack_require__(4410),
          window.JSONEditorCustomRenderers &&
            Object.keys(window.JSONEditorCustomRenderers).forEach(function (e) {
              if (le.Jd[e])
                console.warn(
                  '[json-editor]：预注册渲染器失败，当前存在重名渲染器（' +
                    e +
                    '）。',
                );
              else {
                var t = window.JSONEditorCustomRenderers[e];
                t && (0, le.TS)({ type: e, component: t });
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
                var t = curRenderer.type;
                if (le.Jd[t])
                  console.warn(
                    '[json-editor]: 动态注册渲染器失败，当前存在重名渲染器（' +
                      t +
                      '）。',
                  );
                else {
                  console.info('[json-editor]: 响应动态注册渲染器事件：', t);
                  var n = xt(t);
                  (0, le.TS)({ type: t, component: n });
                }
              }
            },
            !1,
          );
        var jt = __webpack_require__(252),
          kt = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  rootJSONStore: new oe(),
                }),
                n
              );
            }
            return (
              M()(t, e),
              (t.prototype.render = function () {
                var e = this.props.element,
                  t = this.state.rootJSONStore,
                  n = A.createElement(
                    I.Provider,
                    {
                      JSONSchemaStore: t.JSONSchemaStore,
                      JSONEditorStore: t.JSONEditorStore,
                    },
                    A.createElement(Rt, this.props),
                  );
                return e ? (L().render(n, e), '') : n;
              }),
              t
            );
          })(A.PureComponent);
        kt.propTypes = {
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
