/*!
 * @wibetter/json-editor v5.1.12
 * author: wibetter
 * build tool: AKFun
 * build time: Fri Jan 17 2025 15:43:17 GMT+0800 (中国标准时间)
 * build tool info: https://github.com/wibetter/akfun
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['JSONEditor'] = factory();
  else root['JSONEditor'] = factory();
})(this, function () {
  return /******/ (function () {
    // webpackBootstrap
    /******/ var __webpack_modules__ = {
      /***/ './src/assets/img/addElem.svg':
        /*!************************************!*\
  !*** ./src/assets/img/addElem.svg ***!
  \************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            );
          var _path;
          function _extends() {
            return (
              (_extends = Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                      var t = arguments[e];
                      for (var r in t)
                        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    }
                    return n;
                  }),
              _extends.apply(null, arguments)
            );
          }

          var SvgAddElem = function SvgAddElem(props) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'svg',
              _extends(
                {
                  width: 16,
                  height: 16,
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                props,
              ),
              _path ||
                (_path =
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'path',
                    {
                      d: 'M10.286 4C11.232 4 12 4.768 12 5.714v8.572c0 .946-.768 1.714-1.714 1.714H1.714A1.714 1.714 0 0 1 0 14.286V5.714C0 4.768.768 4 1.714 4h8.572Zm-.12 1H1.834A.833.833 0 0 0 1 5.833v8.334c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833V5.833A.833.833 0 0 0 10.167 5ZM6 7.429c.237 0 .429.191.429.428l-.001 1.714h1.715a.429.429 0 0 1 0 .858H6.428v1.714a.429.429 0 1 1-.857 0v-1.714H3.857a.429.429 0 1 1 0-.858h1.714V7.857c0-.237.192-.428.429-.428ZM14.286 0C15.232 0 16 .768 16 1.714v8.572c0 .946-.768 1.714-1.714 1.714H13v-1h1.167c.46 0 .833-.373.833-.833V1.833A.833.833 0 0 0 14.167 1H5.833A.833.833 0 0 0 5 1.833V3H4V1.714C4 .768 4.768 0 5.714 0h8.572Z',
                      fill: 'currentColor',
                      fillRule: 'evenodd',
                    },
                  )),
            );
          };
          /* harmony default export */ __webpack_exports__['default'] =
            SvgAddElem;

          /***/
        },

      /***/ './src/assets/img/code.svg':
        /*!*********************************!*\
  !*** ./src/assets/img/code.svg ***!
  \*********************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            );
          var _path;
          function _extends() {
            return (
              (_extends = Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                      var t = arguments[e];
                      for (var r in t)
                        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    }
                    return n;
                  }),
              _extends.apply(null, arguments)
            );
          }

          var SvgCode = function SvgCode(props) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'svg',
              _extends(
                {
                  viewBox: '0 0 1025 1024',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                props,
              ),
              _path ||
                (_path =
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'path',
                    {
                      d: 'M293.069 755.2c-12.083 0-24.269-4.25-33.997-12.902L0 512l273.46-243.098c21.094-18.688 53.452-16.896 72.242 4.25 18.79 21.146 16.896 53.504-4.25 72.294L154.113 512l172.954 153.702c21.145 18.79 23.04 51.15 4.25 72.295-10.087 11.417-24.167 17.203-38.247 17.203zm457.984-.102L1024.512 512 765.44 281.702c-21.146-18.79-53.504-16.896-72.243 4.25-18.79 21.146-16.896 53.504 4.25 72.294L870.4 512 683.06 678.502c-21.146 18.79-23.04 51.15-4.25 72.295C688.896 762.214 702.976 768 717.056 768c12.083 0 24.269-4.25 33.997-12.902zm-239.514 72.55 102.4-614.4c4.66-27.904-14.182-54.272-42.086-58.931-28.007-4.71-54.323 14.182-58.88 42.086l-102.4 614.4c-4.66 27.904 14.182 54.272 42.086 58.931a52.65 52.65 0 0 0 8.448.666c24.576 0 46.285-17.766 50.432-42.752z',
                      fill: 'currentColor',
                    },
                  )),
            );
          };
          /* harmony default export */ __webpack_exports__['default'] = SvgCode;

          /***/
        },

      /***/ './src/assets/img/delete.svg':
        /*!***********************************!*\
  !*** ./src/assets/img/delete.svg ***!
  \***********************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            );
          var _path;
          function _extends() {
            return (
              (_extends = Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                      var t = arguments[e];
                      for (var r in t)
                        ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    }
                    return n;
                  }),
              _extends.apply(null, arguments)
            );
          }

          var SvgDelete = function SvgDelete(props) {
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              'svg',
              _extends(
                {
                  width: 16,
                  height: 16,
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                props,
              ),
              _path ||
                (_path =
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                    'path',
                    {
                      d: 'M15.5 2a.5.5 0 0 1 .09.992L15.5 3H14v10.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 13.6V3H.5a.5.5 0 0 1-.09-.992L.5 2h15ZM13 3H3v10.6a1.4 1.4 0 0 0 1.265 1.394L4.4 15h7.2a1.4 1.4 0 0 0 1.394-1.265L13 13.6V3ZM6 6a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L5.5 11.5v-5A.5.5 0 0 1 6 6Zm4 0a.5.5 0 0 1 .492.41l.008.09v5a.5.5 0 0 1-.992.09L9.5 11.5v-5A.5.5 0 0 1 10 6Zm.5-6a.5.5 0 0 1 .09.992L10.5 1h-5a.5.5 0 0 1-.09-.992L5.5 0h5Z',
                      fill: 'currentColor',
                      fillRule: 'evenodd',
                    },
                  )),
            );
          };
          /* harmony default export */ __webpack_exports__['default'] =
            SvgDelete;

          /***/
        },

      /***/ './src/components/JSONDataEditor/index.js':
        /*!************************************************!*\
  !*** ./src/components/JSONDataEditor/index.js ***!
  \************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var $components_MappingRender__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! $components/MappingRender */ './src/components/MappingRender.js',
            );
          /* harmony import */ var $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! $renderers/JsonView/index */ './src/renderers/JsonView/index.js',
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./index.scss */ './src/components/JSONDataEditor/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_9__,
            );

          var Panel = antd__WEBPACK_IMPORTED_MODULE_4__.Collapse.Panel;
          var TabPane = antd__WEBPACK_IMPORTED_MODULE_4__.Tabs.TabPane;
          // 普通模式
          // import MappingRender from '$components/MappingRenderV2'; // 按需加载模式

          var JSONDataEditor = /*#__PURE__*/ (function (_React$PureComponent) {
            function JSONDataEditor(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /* 获取schema展示风格模式 */
              _this.catchViewStyle = function (viewStyle) {
                switch (viewStyle) {
                  case 'fold':
                    return 'fold';
                  case 'tabs':
                    return 'tabs';
                  default:
                    return 'fold';
                }
              };
              /* schema一级字段Title显示 */
              _this.renderHeader = function (format) {
                switch (format) {
                  case 'func':
                    return '功能设置';
                  case 'style':
                    return '样式设置';
                  case 'data':
                    return '数据设置';
                  default:
                    return '属性设置';
                }
              };
              _this.state = {
                jsonView: props.jsonView || false,
                // 是否显示code模式，默认不显示code模式
                viewStyle: _this.catchViewStyle(props.viewStyle), // 默认为fold（可折叠面板），可选：tabs:（tabs切换面板）
              };
              var _ref = _this.props.schemaStore || {},
                initJSONSchemaData = _ref.initJSONSchemaData,
                setPageScreen = _ref.setPageScreen;
              var _ref2 = _this.props.jsonStore || {},
                initJSONData = _ref2.initJSONData,
                initOnChange = _ref2.initOnChange,
                setDynamicDataList = _ref2.setDynamicDataList,
                setOptions = _ref2.setOptions;

              // 根据props.schemaData对jsonSchema进行初始化
              if (props.schemaData) {
                initJSONSchemaData(props.schemaData);
                // 根据props.jsonData对jsonData进行初始化
                initJSONData(props.jsonData);
              } else if (props.jsonData) {
                // schemaData为空，jsonData不为空时，尝试通过jsonData转jsonSchema
                var jsonSchema = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.json2schema)(
                  props.jsonData,
                ); // 通过json转换schema
                initJSONSchemaData(jsonSchema);
                // 根据props.jsonData对jsonData进行初始化
                initJSONData(props.jsonData);
              }
              // 读取宽屏和小屏的配置
              if (props.wideScreen) {
                setPageScreen(props.wideScreen);
              }
              // 记录onChange事件
              if (props.onChange) {
                initOnChange(props.onChange);
              }

              // 获取dynamicDataList（动态数据源）
              if (props.dynamicDataList) {
                setDynamicDataList(props.dynamicDataList);
              }
              // 配置类数据
              if (props.options) {
                setOptions(props.options);
              }
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              JSONDataEditor,
              _React$PureComponent,
            );
            var _proto = JSONDataEditor.prototype;
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                var _ref3 = this.props.schemaStore || {},
                  JSONSchemaChange = _ref3.JSONSchemaChange,
                  setPageScreen = _ref3.setPageScreen;
                var _ref4 = this.props.jsonStore || {},
                  initJSONData = _ref4.initJSONData,
                  initOnChange = _ref4.initOnChange,
                  setDynamicDataList = _ref4.setDynamicDataList,
                  setOptions = _ref4.setOptions;
                /** 1. 先初始化schemaData，如果jsonData和schemaData的格式不一致，则以schemaData为准 */
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.schemaData,
                    this.props.schemaData,
                  )
                ) {
                  JSONSchemaChange(nextProps.schemaData);
                }
                /** 2. 初始化jsonData */
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.jsonData,
                    this.props.jsonData,
                  )
                ) {
                  initJSONData(nextProps.jsonData);
                }
                // 读取code模式配置
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.jsonView,
                    this.props.jsonView,
                  )
                ) {
                  this.setState({
                    jsonView: nextProps.jsonView,
                  });
                }
                // 读取展示模式配置
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.viewStyle,
                    this.props.viewStyle,
                  )
                ) {
                  this.setState({
                    viewStyle: nextProps.viewStyle,
                  });
                }
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.wideScreen,
                    this.props.wideScreen,
                  )
                ) {
                  setPageScreen(nextProps.wideScreen);
                }
                // 记录onChange事件
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.onChange,
                    this.props.onChange,
                  )
                ) {
                  initOnChange(nextProps.onChange);
                }

                // 获取dynamicDataList（动态数据源）
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.dynamicDataList,
                    this.props.dynamicDataList,
                  )
                ) {
                  setDynamicDataList(nextProps.dynamicDataList);
                }
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    nextProps.options,
                    this.props.options,
                  )
                ) {
                  setOptions(nextProps.options);
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref5 = schemaStore || {},
                jsonSchema = _ref5.jsonSchema,
                lastUpdateTime = _ref5.lastUpdateTime;
              var _ref6 = jsonStore || {},
                jsonLastUpdateTime = _ref6.lastUpdateTime;
              var _this$state = this.state,
                jsonView = _this$state.jsonView,
                viewStyle = _this$state.viewStyle;
              var isEmpty = (0,
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.isEmptySchema)(
                jsonSchema,
              ); // 判断是否是空的schema
              var isStructured = (0,
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.isStructuredSchema)(
                jsonSchema,
              ); // 判断是否是结构化的schema数据
              /**
               * 备注：此处单独将object进行渲染，主要是为了将Tree根组件抽离出来（以便在此将组件专用的配置数据分类展示），
               * */
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className: 'json-editor-container',
                },
                isEmpty &&
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'p',
                    {
                      className: 'json-editor-empty',
                    },
                    '\u5F53\u524DjsonSchema\u6CA1\u6709\u6570\u636E\u5185\u5BB9',
                  ),
                !isEmpty &&
                  !jsonView &&
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    null,
                    isStructured &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        viewStyle === 'fold' &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_4__.Collapse,
                            {
                              defaultActiveKey: jsonSchema.propertyOrder,
                              expandIconPosition: 'right',
                              bordered: false,
                            },
                            jsonSchema.propertyOrder.map(function (key, index) {
                              /** 1. 获取当前元素的路径值 */
                              var currentIndexRoute = index;
                              var currentKeyRoute = key; // key路径值，后续用于从jsonData中提取当前元素的数值
                              /** 2. 获取当前元素的key值 */
                              var currentJsonKey = key;
                              /** 3. 获取当前元素的json结构对象 */
                              var currentSchemaData =
                                jsonSchema.properties[currentJsonKey];
                              var curType = currentSchemaData.type;

                              /** 获取当前元素的id，用于做唯一标识 */
                              var nodeKey =
                                lastUpdateTime +
                                '-' +
                                jsonLastUpdateTime +
                                '-' +
                                curType +
                                '-' +
                                currentJsonKey;
                              if (
                                currentSchemaData.propertyOrder &&
                                currentSchemaData.propertyOrder.length > 0
                              ) {
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  Panel,
                                  {
                                    header:
                                      currentSchemaData.title ||
                                      _this2.renderHeader(curType),
                                    key: currentJsonKey,
                                  },
                                  (0,
                                  $components_MappingRender__WEBPACK_IMPORTED_MODULE_5__[
                                    'default'
                                  ])({
                                    parentType: curType,
                                    jsonKey: currentJsonKey,
                                    indexRoute: currentIndexRoute,
                                    keyRoute: currentKeyRoute,
                                    nodeKey: nodeKey,
                                    targetJsonSchema: currentSchemaData,
                                    isStructuredSchema: isStructured,
                                    schemaStore: schemaStore,
                                    jsonStore: jsonStore,
                                  }),
                                );
                              }
                              return '';
                            }),
                          ),
                        viewStyle === 'tabs' &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_4__.Tabs,
                            {
                              className: 'tabs-schema-box',
                              defaultActiveKey: jsonSchema.propertyOrder[0],
                              centered: true,
                              hideAdd: true,
                            },
                            jsonSchema.propertyOrder.map(function (key, index) {
                              /** 1. 获取当前元素的路径值 */
                              var currentIndexRoute = index;
                              var currentKeyRoute = key; // key路径值，后续用于从jsonData中提取当前元素的数值
                              /** 2. 获取当前元素的key值 */
                              var currentJsonKey = key;
                              /** 3. 获取当前元素的json结构对象 */
                              var currentSchemaData =
                                jsonSchema.properties[currentJsonKey];
                              var curType = currentSchemaData.type;

                              /** 5. 获取当前元素的id，用于做唯一标识 */
                              var nodeKey =
                                lastUpdateTime +
                                '-' +
                                jsonLastUpdateTime +
                                '-' +
                                curType +
                                '-' +
                                currentJsonKey;
                              if (
                                currentSchemaData.propertyOrder &&
                                currentSchemaData.propertyOrder.length > 0
                              ) {
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  TabPane,
                                  {
                                    tab:
                                      currentSchemaData.title ||
                                      _this2.renderHeader(curType),
                                    key: currentJsonKey,
                                    closable: false,
                                    className: 'tabs-schema-item',
                                  },
                                  (0,
                                  $components_MappingRender__WEBPACK_IMPORTED_MODULE_5__[
                                    'default'
                                  ])({
                                    parentType: curType,
                                    jsonKey: currentJsonKey,
                                    indexRoute: currentIndexRoute,
                                    keyRoute: currentKeyRoute,
                                    nodeKey: nodeKey,
                                    targetJsonSchema: currentSchemaData,
                                    isStructuredSchema: isStructured,
                                    schemaStore: schemaStore,
                                    jsonStore: jsonStore,
                                  }),
                                );
                              }
                              return '';
                            }),
                          ),
                      ),
                    !isStructured &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        (0,
                        $components_MappingRender__WEBPACK_IMPORTED_MODULE_5__[
                          'default'
                        ])({
                          parentType: '',
                          jsonKey: '',
                          indexRoute: '',
                          keyRoute: '',
                          nodeKey: '',
                          targetJsonSchema: jsonSchema,
                          schemaStore: schemaStore,
                          jsonStore: jsonStore,
                        }),
                      ),
                  ),
                !isEmpty &&
                  jsonView &&
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_6__[
                      'default'
                    ],
                    {
                      nodeKey: 'jsonView',
                      keyRoute: '',
                      targetJsonSchema: jsonSchema,
                    },
                  ),
              );
            };
            return JSONDataEditor;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          JSONDataEditor.propTypes = {
            viewStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
            wideScreen: prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default().func,
            jsonView: prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
            schemaData:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,
            jsonData: prop_types__WEBPACK_IMPORTED_MODULE_3___default().object,
            dynamicDataList:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
            options: prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              JSONDataEditor,
            ),
          );

          /***/
        },

      /***/ './src/components/MappingRender.js':
        /*!*****************************************!*\
  !*** ./src/components/MappingRender.js ***!
  \*****************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/extends */ '@babel/runtime/helpers/extends',
            );
          /* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $renderers_ArraySchema_index__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! $renderers/ArraySchema/index */ './src/renderers/ArraySchema/index.js',
            );
          /* harmony import */ var $renderers_ObjectSchema_index__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! $renderers/ObjectSchema/index */ './src/renderers/ObjectSchema/index.js',
            );
          /* harmony import */ var $renderers_DataSourceSchema_index__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! $renderers/DataSourceSchema/index */ './src/renderers/DataSourceSchema/index.js',
            );
          /* harmony import */ var $renderers_DynamicDataSchema_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! $renderers/DynamicDataSchema/index */ './src/renderers/DynamicDataSchema/index.js',
            );
          /* harmony import */ var $renderers_EventSchema_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $renderers/EventSchema/index */ './src/renderers/EventSchema/index.js',
            );
          /* harmony import */ var $renderers_QuantitySchema_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $renderers/QuantitySchema/index */ './src/renderers/QuantitySchema/index.js',
            );
          /* harmony import */ var $renderers_BoxStyleSchema_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $renderers/BoxStyleSchema/index */ './src/renderers/BoxStyleSchema/index.js',
            );
          /* harmony import */ var $renderers_PaddingAndMarginSchema_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! $renderers/PaddingAndMarginSchema/index */ './src/renderers/PaddingAndMarginSchema/index.js',
            );
          /* harmony import */ var $renderers_RadioSchema_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! $renderers/RadioSchema/index */ './src/renderers/RadioSchema/index.js',
            );
          /* harmony import */ var $renderers_CheckboxSchema_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              /*! $renderers/CheckboxSchema/index */ './src/renderers/CheckboxSchema/index.js',
            );
          /* harmony import */ var $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! $renderers/InputFormSchema/index */ './src/renderers/InputFormSchema/index.js',
            );
          /* harmony import */ var $renderers_TextAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              /*! $renderers/TextAreaFormSchema/index */ './src/renderers/TextAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_TextEditorSchema_index__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(
              /*! $renderers/TextEditorSchema/index */ './src/renderers/TextEditorSchema/index.js',
            );
          /* harmony import */ var $renderers_NumberFormSchema_index__WEBPACK_IMPORTED_MODULE_17__ =
            __webpack_require__(
              /*! $renderers/NumberFormSchema/index */ './src/renderers/NumberFormSchema/index.js',
            );
          /* harmony import */ var $renderers_BooleanFormSchema_index__WEBPACK_IMPORTED_MODULE_18__ =
            __webpack_require__(
              /*! $renderers/BooleanFormSchema/index */ './src/renderers/BooleanFormSchema/index.js',
            );
          /* harmony import */ var $renderers_SelectSchema_index__WEBPACK_IMPORTED_MODULE_19__ =
            __webpack_require__(
              /*! $renderers/SelectSchema/index */ './src/renderers/SelectSchema/index.js',
            );
          /* harmony import */ var $renderers_CascaderSchema_index__WEBPACK_IMPORTED_MODULE_20__ =
            __webpack_require__(
              /*! $renderers/CascaderSchema/index */ './src/renderers/CascaderSchema/index.js',
            );
          /* harmony import */ var $renderers_InputImageSchema_index__WEBPACK_IMPORTED_MODULE_21__ =
            __webpack_require__(
              /*! $renderers/InputImageSchema/index */ './src/renderers/InputImageSchema/index.js',
            );
          /* harmony import */ var $renderers_DateTimeFormSchema_index__WEBPACK_IMPORTED_MODULE_22__ =
            __webpack_require__(
              /*! $renderers/DateTimeFormSchema/index */ './src/renderers/DateTimeFormSchema/index.js',
            );
          /* harmony import */ var $renderers_TimeFormSchema_index__WEBPACK_IMPORTED_MODULE_23__ =
            __webpack_require__(
              /*! $renderers/TimeFormSchema/index */ './src/renderers/TimeFormSchema/index.js',
            );
          /* harmony import */ var $renderers_URLFormSchema_index__WEBPACK_IMPORTED_MODULE_24__ =
            __webpack_require__(
              /*! $renderers/URLFormSchema/index */ './src/renderers/URLFormSchema/index.js',
            );
          /* harmony import */ var $renderers_ColorFormSchemaV3_index__WEBPACK_IMPORTED_MODULE_25__ =
            __webpack_require__(
              /*! $renderers/ColorFormSchemaV3/index */ './src/renderers/ColorFormSchemaV3/index.js',
            );
          /* harmony import */ var $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_26__ =
            __webpack_require__(
              /*! $renderers/JsonFormSchema/index */ './src/renderers/JsonFormSchema/index.js',
            );
          /* harmony import */ var $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_27__ =
            __webpack_require__(
              /*! $renderers/CodeAreaFormSchema/index */ './src/renderers/CodeAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_HtmlAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_28__ =
            __webpack_require__(
              /*! $renderers/HtmlAreaFormSchema/index */ './src/renderers/HtmlAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_DynamicConfigSchema_index__WEBPACK_IMPORTED_MODULE_29__ =
            __webpack_require__(
              /*! $renderers/DynamicConfigSchema/index */ './src/renderers/DynamicConfigSchema/index.js',
            );
          /* harmony import */ var $renderers_SohuDataSourceSchema_index__WEBPACK_IMPORTED_MODULE_30__ =
            __webpack_require__(
              /*! $renderers/SohuDataSourceSchema/index */ './src/renderers/SohuDataSourceSchema/index.js',
            );
          /* harmony import */ var $renderers_SohuEventSchema_index__WEBPACK_IMPORTED_MODULE_31__ =
            __webpack_require__(
              /*! $renderers/SohuEventSchema/index */ './src/renderers/SohuEventSchema/index.js',
            );

          // import {omit} from 'lodash';

          /** 根据当前类型选择对应的组件进行渲染 */
          var MappingRender = function MappingRender(props) {
            var _ref = props.schemaStore || {},
              getSchemaByKeyRoute = _ref.getSchemaByKeyRoute;
            var _ref2 = props.jsonStore || {},
              getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute,
              JSONEditorObj = _ref2.JSONEditorObj;
            var nodeKey = props.nodeKey,
              jsonKey = props.jsonKey,
              keyRoute = props.keyRoute,
              targetJsonSchema = props.targetJsonSchema;

            // 支持显隐属性表达式
            var parentKeyRoute = (0,
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__.getParentKeyRoute)(
              keyRoute,
            );
            var parentData = parentKeyRoute
              ? getJSONDataByKeyRoute(parentKeyRoute) || {}
              : {}; // 获取当前父级数据域
            var curData = Object.assign({}, JSONEditorObj, parentData);
            if (
              (0, $utils_index__WEBPACK_IMPORTED_MODULE_3__.hasProperties)(
                targetJsonSchema.onShow,
              ) &&
              targetJsonSchema.onShow !== '' &&
              (targetJsonSchema.onShow === 'false' ||
                ((0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__.isBoolean)(
                  targetJsonSchema.onShow,
                ) &&
                  !targetJsonSchema.onShow) ||
                ((0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__.isString)(
                  targetJsonSchema.onShow,
                ) &&
                  !(0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__.evalExpression)(
                    targetJsonSchema.onShow,
                    curData,
                  )))
            ) {
              return;
            }
            var curType = targetJsonSchema.typeOn
              ? (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_2__.evalExpression)(
                  targetJsonSchema.typeOn,
                  curData,
                )
              : targetJsonSchema.type;
            var curNodeKey = nodeKey;

            // 收集当前所有条件子字段
            /*
  const curData = getJSONDataByKeyRoute(keyRoute) || {};
  const curConditionValue = schema2conditionValue(targetJsonSchema, curData);
  // 将条件字段的数值作为key的一部分
  if (curConditionValue) {
    curNodeKey = `${nodeKey}-${curConditionValue}`;
  }
  */

            var newProps =
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                {},
                props,
                {
                  nodeKey: curNodeKey,
                },
              );
            switch (curType) {
              case 'object':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_ObjectSchema_index__WEBPACK_IMPORTED_MODULE_5__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'dynamic-config':
              case 'dynamic-object':
              case 'dynamic-array':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_DynamicConfigSchema_index__WEBPACK_IMPORTED_MODULE_29__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'sohu-source':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_SohuDataSourceSchema_index__WEBPACK_IMPORTED_MODULE_30__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'sohu-event':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_SohuEventSchema_index__WEBPACK_IMPORTED_MODULE_31__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'array':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_ArraySchema_index__WEBPACK_IMPORTED_MODULE_4__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'dynamic-data':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_DynamicDataSchema_index__WEBPACK_IMPORTED_MODULE_7__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'datasource':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_DataSourceSchema_index__WEBPACK_IMPORTED_MODULE_6__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'event':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_EventSchema_index__WEBPACK_IMPORTED_MODULE_8__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'quantity':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_QuantitySchema_index__WEBPACK_IMPORTED_MODULE_9__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'box-style':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_BoxStyleSchema_index__WEBPACK_IMPORTED_MODULE_10__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'padding-margin':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_PaddingAndMarginSchema_index__WEBPACK_IMPORTED_MODULE_11__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'radio':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_RadioSchema_index__WEBPACK_IMPORTED_MODULE_12__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'select':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_SelectSchema_index__WEBPACK_IMPORTED_MODULE_19__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'cascader':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_CascaderSchema_index__WEBPACK_IMPORTED_MODULE_20__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'checkboxes':
                // 多选
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_CheckboxSchema_index__WEBPACK_IMPORTED_MODULE_13__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'input':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_14__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'textarea':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_TextAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_15__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'text-editor':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_TextEditorSchema_index__WEBPACK_IMPORTED_MODULE_16__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'number':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_NumberFormSchema_index__WEBPACK_IMPORTED_MODULE_17__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'boolean':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_BooleanFormSchema_index__WEBPACK_IMPORTED_MODULE_18__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'date':
              case 'date-time':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_DateTimeFormSchema_index__WEBPACK_IMPORTED_MODULE_22__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'time':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_TimeFormSchema_index__WEBPACK_IMPORTED_MODULE_23__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'url':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_URLFormSchema_index__WEBPACK_IMPORTED_MODULE_24__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'color':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_ColorFormSchemaV3_index__WEBPACK_IMPORTED_MODULE_25__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'input-image':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_InputImageSchema_index__WEBPACK_IMPORTED_MODULE_21__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'json':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_26__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'codearea':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_27__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              case 'htmlarea':
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_HtmlAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_28__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
              default:
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_14__[
                    'default'
                  ],
                  _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                    {},
                    newProps,
                    {
                      key: curNodeKey,
                    },
                  ),
                );
            }
          };
          /* harmony default export */ __webpack_exports__['default'] =
            MappingRender;

          /***/
        },

      /***/ './src/mixins/index.js':
        /*!*****************************!*\
  !*** ./src/mixins/index.js ***!
  \*****************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ catchJsonDataByWebCache: function () {
              return /* binding */ catchJsonDataByWebCache;
            },
            /* harmony export */
          });
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          /** 从WebCache中获取jsonData数据
           * 备注：引用catchJsonDataByWebCache前，请确保当前组件的props中包含以下属性：
           * keyRoute、targetJsonSchema、updateFormValueData
           * getJSONDataByKeyRoute、getInitJsonDataByKeyRoute
           * */
          function catchJsonDataByWebCache(curKeyRoute) {
            var targetJsonSchema = this.props.targetJsonSchema;
            var _ref = this.props.jsonStore || {},
              getJSONDataByKeyRoute = _ref.getJSONDataByKeyRoute,
              getInitJsonDataByKeyRoute = _ref.getInitJsonDataByKeyRoute,
              updateFormValueData = _ref.updateFormValueData;
            var curType = targetJsonSchema.type;
            var keyRoute = curKeyRoute || this.props.keyRoute;
            var backUpKeyRoute = (0,
            $utils_index__WEBPACK_IMPORTED_MODULE_0__.getWebCacheData)(
              keyRoute + '-' + curType,
            );
            if (backUpKeyRoute) {
              // 1. 先尝试从jsonData中获取数据
              var beckUpJsonData = getJSONDataByKeyRoute(backUpKeyRoute);
              if (!beckUpJsonData) {
                // 2. 再尝试从jsonDataTemp中获取数据
                beckUpJsonData = getInitJsonDataByKeyRoute(backUpKeyRoute);
              }
              if (beckUpJsonData) {
                // 删除前端缓存后立即更新到jsonData中
                (0,
                $utils_index__WEBPACK_IMPORTED_MODULE_0__.deleteWebCacheData)(
                  keyRoute + '-' + curType,
                );
                updateFormValueData(keyRoute, beckUpJsonData); // 更新数值
              }
            }
          }

          /***/
        },

      /***/ './src/renderers/ArraySchema/index.js':
        /*!********************************************!*\
  !*** ./src/renderers/ArraySchema/index.js ***!
  \********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $utils_webCache__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $utils/webCache */ './src/utils/webCache.js',
            );
          /* harmony import */ var $components_MappingRender__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $components/MappingRender */ './src/components/MappingRender.js',
            );
          /* harmony import */ var $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $renderers/JsonView/index */ './src/renderers/JsonView/index.js',
            );
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/ArraySchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_14__,
            );
          /* harmony import */ var $assets_img_delete_svg__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              /*! $assets/img/delete.svg */ './src/assets/img/delete.svg',
            );
          /* harmony import */ var $assets_img_addElem_svg__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(
              /*! $assets/img/addElem.svg */ './src/assets/img/addElem.svg',
            );
          /* harmony import */ var $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_17__ =
            __webpack_require__(
              /*! $assets/img/code.svg */ './src/assets/img/code.svg',
            );

          // import ObjectSchema from '$renderers/ObjectSchema/index';

          /**
           * 数组类型：用于展示数组类型的配置字段
           * 功能点：拖拽排序【新增】、上下移动子项、新增子项、复制子项、删除子项、折叠、源码模式切换
           * 展示：以折叠面板形式展示
           */
          var ArraySchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function ArraySchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /** 添加数组项 */
              _this.addArrayItem = function (keyRoute, curArr, curArrIndex) {
                var _ref = _this.props.jsonStore || {},
                  addArrayItem = _ref.addArrayItem;
                var maximumChild =
                  _this.props.targetJsonSchema['maximum-child'];
                if (curArr && maximumChild && curArr.length >= maximumChild) {
                  antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                    '\u6DFB\u52A0\u5931\u8D25\uFF0C\u6700\u591A\u53EF\u6DFB\u52A0' +
                      maximumChild +
                      '\u4E2A\u5B50\u9879',
                  );
                } else {
                  addArrayItem(keyRoute, curArrIndex);
                }
              };
              /** 删除数组项 */
              _this.deleteArrItem = function (keyRoute, arrIndex, curArr) {
                var _ref2 = _this.props.jsonStore || {},
                  deleteArrayIndex = _ref2.deleteArrayIndex;
                var minimumChild =
                  _this.props.targetJsonSchema['minimum-child'];
                if (curArr && minimumChild && curArr.length <= minimumChild) {
                  antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                    '\u5220\u9664\u5931\u8D25\uFF0C\u81F3\u5C11\u9700\u8981\u4FDD\u7559' +
                      minimumChild +
                      '\u4E2A\u5B50\u9879',
                  );
                } else {
                  deleteArrayIndex(keyRoute, arrIndex);
                }
              };
              /**
               * 各类元素的onMouseEnter事件
               */
              _this.elemHoverEnterEvent = function (event, currentIndex) {
                event.stopPropagation();

                // 当前元素没有在选中态，且不是上一次hover态的元素
                if (currentIndex !== _this.state.hoverIndex) {
                  _this.setState({
                    hoverIndex: currentIndex,
                  });
                }
              };
              /**
               * 各类元素的onMouseLeave事件
               */
              _this.elemHoverLeaveEvent = function (event, currentIndex) {
                event.stopPropagation();
                // 当前元素没有在选中态，且不是上一次hover态的元素
                if (currentIndex === _this.state.hoverIndex) {
                  _this.setState({
                    hoverIndex: '',
                  });
                }
              };
              /**
               * 获取当前数组项的Title：数组项默认使用其第一个非空子项的数值作为title
               */
              _this.getArrItemTitle = function (arrItem) {
                if (
                  arrItem &&
                  (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isObject)(
                    arrItem,
                  )
                ) {
                  var arrItemKeys = Object.keys(arrItem);
                  for (
                    var index = 0, size = arrItemKeys.length;
                    index < size;
                    index++
                  ) {
                    var itemVal = arrItem[arrItemKeys[index]];
                    // 只有不为空时才赋值（忽略URL类型数值）
                    if (
                      itemVal &&
                      (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isString)(
                        itemVal,
                      ) &&
                      !(0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isURL)(
                        itemVal,
                      ) &&
                      !(0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isColor)(
                        itemVal,
                      )
                    ) {
                      return itemVal;
                    }
                  }
                } else {
                  return arrItem;
                }
                return '';
              };
              _this.state = {
                currentActiveArrIndex: -1,
                // 记录当前展开的数组项，默认展开第一个数组项
                jsonView: false,
                // 是否显示code模式
                isClosed: false,
                // 是否为关闭状态，默认是开启状态
                hoverIndex: '', // 记录当前处于hover中的数据项
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.addArrayItem = _this.addArrayItem.bind(_this);
              _this.deleteArrItem = _this.deleteArrItem.bind(_this);
              _this.elemHoverEnterEvent = _this.elemHoverEnterEvent.bind(_this);
              _this.elemHoverLeaveEvent = _this.elemHoverLeaveEvent.bind(_this);
              _this.collapseChange = _this.collapseChange.bind(_this);
              _this.arrayCollapseChange = _this.arrayCollapseChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              ArraySchema,
              _React$PureComponent,
            );
            var _proto = ArraySchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_13__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_13__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.collapseChange = function collapseChange(event) {
              var keyRoute = this.props.keyRoute;
              var isClosed = this.state.isClosed;
              this.setState({
                isClosed: !isClosed,
              });
              event.preventDefault();
              event.stopPropagation();

              // 缓存当前折叠状态
              (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_8__.saveJSONEditorCache)(
                keyRoute,
                !isClosed,
              );
            };
            _proto.arrayCollapseChange = function arrayCollapseChange(
              event,
              arrIndex,
            ) {
              var keyRoute = this.props.keyRoute;
              var currentActiveArrIndex = this.state.currentActiveArrIndex;
              var newArrIndex =
                currentActiveArrIndex === arrIndex ? -1 : arrIndex;
              this.setState({
                currentActiveArrIndex: newArrIndex,
              });
              event.preventDefault();
              event.stopPropagation();

              // 缓存当前折叠状态
              (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_8__.saveJSONEditorCache)(
                keyRoute + '-activeArrIndex',
                newArrIndex,
              );
            };
            _proto.render = function render() {
              var _targetJsonSchema$sho,
                _targetJsonSchema$box,
                _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref3 = schemaStore || {},
                pageScreen = _ref3.pageScreen;
              var _ref4 = jsonStore || {},
                getJSONDataByKeyRoute = _ref4.getJSONDataByKeyRoute,
                sortArrayItem = _ref4.sortArrayItem,
                triggerChange = _ref4.triggerChange;
              var _this$props2 = this.props,
                keyRoute = _this$props2.keyRoute,
                jsonKey = _this$props2.jsonKey,
                nodeKey = _this$props2.nodeKey,
                indexRoute = _this$props2.indexRoute,
                targetJsonSchema = _this$props2.targetJsonSchema;
              var _this$state = this.state,
                jsonView = _this$state.jsonView,
                _isClosed = _this$state.isClosed,
                hoverIndex = _this$state.hoverIndex,
                _currentActiveArrIndex = _this$state.currentActiveArrIndex;
              var curType = targetJsonSchema.type;
              // 是否显示源码切换按钮
              var showCodeViewBtn =
                (_targetJsonSchema$sho = targetJsonSchema.showCodeViewBtn) !=
                null
                  ? _targetJsonSchema$sho
                  : true;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute); // json内容数据
              if (
                !curJsonData ||
                curJsonData.length === 0 ||
                !(0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isArray)(
                  curJsonData,
                )
              ) {
                // 添加一个默认的数组数据
                curJsonData = [{}];
              }
              var arrayItemsDataObj = targetJsonSchema.items; // schema数据

              // 获取前端缓存中的折叠数据
              var isClosed = _isClosed;
              var collapseCacheData = (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_8__.getJSONEditorCache)(
                keyRoute,
              );
              if (collapseCacheData !== undefined) {
                isClosed = collapseCacheData;
              }
              var currentActiveArrIndex = _currentActiveArrIndex;
              var activeArrIndexCache = (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_8__.getJSONEditorCache)(
                keyRoute + '-activeArrIndex',
              );
              if (activeArrIndexCache !== undefined) {
                currentActiveArrIndex = activeArrIndexCache;
              }
              var boxTitle =
                (_targetJsonSchema$box = targetJsonSchema.boxTitle) != null
                  ? _targetJsonSchema$box
                  : '数据配置';
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_12__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_12__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_12__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={`${nodeKey}-${triggerChange}`}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'array-schema-box content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: this.collapseChange,
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                      },
                      boxTitle,
                      '\xA0',
                    ),
                    isClosed
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RightOutlined,
                          {
                            className: 'close-operate-btn',
                          },
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined,
                          {
                            className: 'close-operate-btn',
                          },
                        ),
                    showCodeViewBtn &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function onClick(event) {
                            _this2.setState({
                              jsonView: !jsonView,
                            });
                            event.preventDefault();
                            event.stopPropagation();
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                          {
                            title: jsonView ? '关闭源码模式' : '开启源码模式',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_17__[
                              'default'
                            ],
                            {
                              className: jsonView
                                ? 'info-icon active'
                                : 'info-icon',
                            },
                          ),
                        ),
                      ),
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: '\u6DFB\u52A0\u6570\u636E\u9879',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.PlusOutlined,
                        // src={addElemIcon}
                        {
                          className: 'array-add-child-btn',
                          onClick: function onClick(event) {
                            _this2.addArrayItem(keyRoute, curJsonData);
                            event.preventDefault();
                            event.stopPropagation();
                          },
                        },
                      ),
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className:
                        'array-content ' +
                        (jsonView ? 'json-view-array' : '') +
                        ' ' +
                        (isClosed ? 'closed' : ''),
                    },
                    !jsonView &&
                      (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isArray)(
                        curJsonData,
                      ) &&
                      curJsonData.map(function (arrItem, arrIndex) {
                        var curNodeKey =
                          nodeKey +
                          '-array-items-' +
                          curJsonData.length +
                          '-' +
                          arrIndex;
                        var curIndexRoute = indexRoute
                          ? indexRoute + '-0'
                          : '0';
                        var curKeyRoute = keyRoute
                          ? keyRoute + '-' + arrIndex
                          : '' + arrIndex;
                        var arrTitle = _this2.getArrItemTitle(arrItem); // 获取数组项第一个非空元素的值
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'array-item',
                            key: curKeyRoute,
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'array-item-header',
                              onClick: function onClick(event) {
                                _this2.arrayCollapseChange(event, arrIndex);
                              },
                              onMouseMove: function onMouseMove(event) {
                                _this2.elemHoverEnterEvent(event, arrIndex);
                              },
                              onMouseLeave: function onMouseLeave(event) {
                                _this2.elemHoverLeaveEvent(event, arrIndex);
                              },
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'div',
                              {
                                className: 'array-title-text',
                              },
                              arrTitle
                                ? arrTitle
                                : arrayItemsDataObj.title +
                                    '/' +
                                    (arrIndex + 1),
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'div',
                              {
                                className: 'array-operate-box',
                              },
                              currentActiveArrIndex !== arrIndex
                                ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RightOutlined,
                                    {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    },
                                  )
                                : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined,
                                    {
                                      className:
                                        'close-operate-btn array-operate-btn',
                                    },
                                  ),
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                                {
                                  title:
                                    '\u5220\u9664' +
                                    arrayItemsDataObj.title +
                                    '/' +
                                    (arrIndex + 1),
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  antd__WEBPACK_IMPORTED_MODULE_5__.Popconfirm,
                                  {
                                    placement: 'top',
                                    title:
                                      '\u786E\u5B9A\u8981\u5220\u9664' +
                                      arrayItemsDataObj.title +
                                      '/' +
                                      (arrIndex + 1) +
                                      '\u5417\uFF1F',
                                    onCancel: function onCancel(event) {
                                      event.preventDefault();
                                      event.stopPropagation();
                                    },
                                    onConfirm: function onConfirm(event) {
                                      _this2.deleteArrItem(
                                        keyRoute,
                                        arrIndex,
                                        curJsonData,
                                      );
                                      event.preventDefault();
                                      event.stopPropagation();
                                    },
                                    okText: '\u786E\u5B9A',
                                    cancelText: '\u53D6\u6D88',
                                  },
                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    $assets_img_delete_svg__WEBPACK_IMPORTED_MODULE_15__[
                                      'default'
                                    ],
                                    // <img src={deleteIcon}
                                    {
                                      className:
                                        'delete-operate-btn array-operate-btn',
                                      onClick: function onClick(event) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                      },
                                    },
                                  ),
                                ),
                              ),
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                                {
                                  title:
                                    '\u590D\u5236' +
                                    arrayItemsDataObj.title +
                                    '/' +
                                    (arrIndex + 1),
                                },
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  $assets_img_addElem_svg__WEBPACK_IMPORTED_MODULE_16__[
                                    'default'
                                  ],
                                  // <img src={addElemIcon}
                                  {
                                    className: 'array-operate-btn',
                                    onClick: function onClick(event) {
                                      _this2.addArrayItem(
                                        keyRoute,
                                        curJsonData,
                                        arrIndex,
                                      ); // curArrIndex
                                      event.preventDefault();
                                      event.stopPropagation();
                                    },
                                  },
                                ),
                              ),
                              arrIndex !== 0 &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                                  {
                                    title: '\u5411\u4E0A\u79FB\u52A8',
                                  },
                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowUpOutlined,
                                    {
                                      className: 'array-operate-btn',
                                      onClick: function onClick(event) {
                                        sortArrayItem(keyRoute, arrIndex, 'up');
                                        event.preventDefault();
                                        event.stopPropagation();
                                      },
                                    },
                                  ),
                                ),
                              arrIndex !== curJsonData.length - 1 &&
                                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                                  {
                                    title: '\u5411\u4E0B\u79FB\u52A8',
                                  },
                                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowDownOutlined,
                                    {
                                      className: 'array-operate-btn',
                                      onClick: function onClick(event) {
                                        sortArrayItem(
                                          keyRoute,
                                          arrIndex,
                                          'down',
                                        );
                                        event.preventDefault();
                                        event.stopPropagation();
                                      },
                                    },
                                  ),
                                ),
                            ),
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className:
                                'array-item-content ' +
                                (currentActiveArrIndex === arrIndex
                                  ? 'open'
                                  : 'closed'),
                              key: curNodeKey,
                              id: curNodeKey,
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              $components_MappingRender__WEBPACK_IMPORTED_MODULE_9__[
                                'default'
                              ],
                              {
                                parentType: curType,
                                jsonKey: 'items',
                                indexRoute: curIndexRoute,
                                keyRoute: curKeyRoute,
                                nodeKey: curNodeKey,
                                targetJsonSchema: arrayItemsDataObj,
                                isArrayItem: true,
                                arrIndex: arrIndex,
                                schemaStore: schemaStore,
                                jsonStore: jsonStore,
                              },
                            ),
                          ),
                        );
                      }),
                    jsonView &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_10__[
                          'default'
                        ],
                        this.props,
                      ),
                  ),
                ),
              );
            };
            return ArraySchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          ArraySchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(ArraySchema),
          );

          /***/
        },

      /***/ './src/renderers/BooleanFormSchema/index.js':
        /*!**************************************************!*\
  !*** ./src/renderers/BooleanFormSchema/index.js ***!
  \**************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var BooleanFormSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function BooleanFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (checked) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, checked); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              BooleanFormSchema,
              _React$PureComponent,
            );
            var _proto = BooleanFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_9__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Switch,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        defaultChecked:
                          curJsonData !== undefined
                            ? curJsonData
                            : targetJsonSchema.default,
                        checkedChildren: 'true',
                        unCheckedChildren: 'false',
                        onChange: this.handleValueChange,
                        disabled: targetJsonSchema.readOnly,
                      },
                    ),
                  ),
                ),
              );
            };
            return BooleanFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          BooleanFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              BooleanFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/BoxStyleSchema/index.js':
        /*!***********************************************!*\
  !*** ./src/renderers/BoxStyleSchema/index.js ***!
  \***********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/BoxStyleSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_9__,
            );

          var BoxStyleSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function BoxStyleSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 记录box-style的数值（无需实时响应）
              _this.layoutStyleObj = {
                top: '',
                right: '',
                bottom: '',
                left: '',
                quantity: 'px',
              };
              /** 初始化boxStyle的数值 */
              _this.initBoxStyle = function () {
                var jsonStore = _this.props.jsonStore;
                var _ref = jsonStore || {},
                  getJSONDataByKeyRoute = _ref.getJSONDataByKeyRoute;
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  targetJsonSchema = _this$props.targetJsonSchema;
                // 从jsonData中获取对应的数值
                var curJsonData = getJSONDataByKeyRoute(keyRoute);
                var unitJsonSchema = targetJsonSchema.properties['unit'];
                var quantity = curJsonData.quantity; // 获取数值单位
                var unitStr = curJsonData.unit || unitJsonSchema.default; // 获取数值
                // 重置数值
                _this.layoutStyleObj = {
                  top: '',
                  right: '',
                  bottom: '',
                  left: '',
                  quantity: quantity,
                };
                // 设置盒子模型数值
                if (unitStr) {
                  var unitArr = unitStr.split(' ');
                  if (unitArr.length === 1) {
                    if (unitArr[0] && unitArr[0].indexOf(quantity) >= 0) {
                      // 表示当前值有单位
                      _this.layoutStyleObj.top = unitArr[0];
                      _this.layoutStyleObj.right = unitArr[0];
                      _this.layoutStyleObj.bottom = unitArr[0];
                      _this.layoutStyleObj.left = unitArr[0];
                    } else if (unitArr[0] === 'auto') {
                      _this.layoutStyleObj.top = 'auto';
                      _this.layoutStyleObj.right = 'auto';
                      _this.layoutStyleObj.bottom = 'auto';
                      _this.layoutStyleObj.left = 'auto';
                    } else {
                      _this.layoutStyleObj.top = '' + unitArr[0] + quantity;
                      _this.layoutStyleObj.right = '' + unitArr[0] + quantity;
                      _this.layoutStyleObj.bottom = '' + unitArr[0] + quantity;
                      _this.layoutStyleObj.left = '' + unitArr[0] + quantity;
                    }
                  } else {
                    _this.layoutStyleObj.top = unitArr[0];
                    _this.layoutStyleObj.right = unitArr[1];
                    _this.layoutStyleObj.bottom = unitArr[2] || unitArr[0];
                    _this.layoutStyleObj.left = unitArr[3] || unitArr[1];
                  }
                } else if (unitStr === 0) {
                  _this.layoutStyleObj.top = '' + unitStr + quantity;
                  _this.layoutStyleObj.right = '' + unitStr + quantity;
                  _this.layoutStyleObj.bottom = '' + unitStr + quantity;
                  _this.layoutStyleObj.left = '' + unitStr + quantity;
                } else {
                  _this.layoutStyleObj.top = 'auto';
                  _this.layoutStyleObj.right = 'auto';
                  _this.layoutStyleObj.bottom = 'auto';
                  _this.layoutStyleObj.left = 'auto';
                }
              };
              /** 设置布局容器的盒子模型数值 */
              _this.setLayoutBoxStyle = function (
                newVal,
                layoutStyleLock,
                propKey,
              ) {
                if (layoutStyleLock) {
                  _this.linkLayoutBoxStyle(newVal);
                } else {
                  if (newVal === 'auto') {
                    _this.layoutStyleObj[propKey] = 'auto';
                  } else if (newVal) {
                    _this.layoutStyleObj[propKey] =
                      '' + newVal + _this.layoutStyleObj.quantity;
                  } else if (newVal === 0 || newVal === '0') {
                    _this.layoutStyleObj[propKey] =
                      '0' + _this.layoutStyleObj.quantity;
                  } else {
                    _this.layoutStyleObj[propKey] = 'auto';
                  }
                  _this.updateBoxStyleState();
                }
              };
              /** 布局容器的盒子模型数值联动设值 */
              _this.linkLayoutBoxStyle = function (newVal) {
                var curValue = newVal;
                if (newVal === 'auto') {
                  curValue = 'auto';
                } else if (newVal === 0) {
                  curValue = '0' + _this.layoutStyleObj.quantity;
                } else if (newVal) {
                  curValue = '' + newVal + _this.layoutStyleObj.quantity;
                } else {
                  curValue = 'auto';
                }
                _this.layoutStyleObj.top = curValue;
                _this.layoutStyleObj.right = curValue;
                _this.layoutStyleObj.bottom = curValue;
                _this.layoutStyleObj.left = curValue;
                _this.updateBoxStyleState();
              };
              _this.getStyleValNum = function (valStr) {
                if (valStr === 'auto') {
                  return '';
                } else if (
                  valStr === '0' + _this.layoutStyleObj.quantity ||
                  valStr === '0'
                ) {
                  return 0;
                } else if (valStr) {
                  var pxIndex = valStr.indexOf(_this.layoutStyleObj.quantity);
                  if (pxIndex > -1) {
                    // tslint:disable-next-line:radix
                    return parseInt(valStr.substring(0, pxIndex));
                  } else {
                    // tslint:disable-next-line:radix
                    return parseInt(valStr);
                  }
                }
                return 0;
              };
              /** 数值变动事件处理器 */
              _this.updateBoxStyleState = function () {
                var _this$props2 = _this.props,
                  keyRoute = _this$props2.keyRoute,
                  jsonStore = _this$props2.jsonStore;
                var _ref2 = jsonStore || {},
                  updateFormValueData = _ref2.updateFormValueData;
                var renderAction = _this.state.renderAction;
                /** 获取布局容器的盒子模型数值 */
                var boxStyleUnit =
                  _this.layoutStyleObj.top +
                  ' ' +
                  _this.layoutStyleObj.right +
                  ' ' +
                  _this.layoutStyleObj.bottom +
                  ' ' +
                  _this.layoutStyleObj.left;
                var curKeyRoute = keyRoute ? keyRoute + '-unit' : 'unit';
                updateFormValueData(curKeyRoute, boxStyleUnit); // 更新单位数值
                _this.setState({
                  renderAction: !renderAction,
                });
              };
              _this.state = {
                layoutStyleLock: false,
                // 是否锁住容器数值值的设置，默认为false，设置为true后4个数值同时联动
                renderAction: false, // 用于主动触发render的临时变量
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.updateBoxStyleState = _this.updateBoxStyleState.bind(_this);
              _this.initBoxStyle = _this.initBoxStyle.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              BoxStyleSchema,
              _React$PureComponent,
            );
            var _proto = BoxStyleSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              this.initBoxStyle();
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                this.initBoxStyle();
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var _this$props4 = this.props,
                schemaStore = _this$props4.schemaStore,
                jsonStore = _this$props4.jsonStore;
              var _ref3 = schemaStore || {},
                pageScreen = _ref3.pageScreen;
              var _this$state = this.state,
                renderAction = _this$state.renderAction,
                layoutStyleLock = _this$state.layoutStyleLock;
              // const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp') +
                    ' ' +
                    (renderAction ? 'render-mark' : ''),
                  id: nodeKey,
                  // key={nodeKey}
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item layout-box-style-container',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'center-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        placement: 'top',
                        title: layoutStyleLock ? '点击解锁联动' : '点击联动',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: layoutStyleLock
                            ? 'lock-icon'
                            : 'lock-icon unlock',
                          onClick: function onClick() {
                            _this2.setState({
                              layoutStyleLock: !layoutStyleLock,
                            });
                          },
                        },
                      ),
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.InputNumber,
                    {
                      name: 'layoutPaddingTop',
                      className:
                        'layout-input-number layout-item layout-item-top\n            ' +
                        (this.layoutStyleObj.quantity === '%'
                          ? 'percent'
                          : this.layoutStyleObj.quantity) +
                        '-quantity-box',
                      size: 'small',
                      value: this.getStyleValNum(this.layoutStyleObj.top),
                      onPressEnter: function onPressEnter(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'top',
                        );
                      },
                      onBlur: function onBlur(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'top',
                        );
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.InputNumber,
                    {
                      name: 'layoutPaddingRight',
                      className:
                        'layout-input-number layout-item layout-item-right\n            ' +
                        (this.layoutStyleObj.quantity === '%'
                          ? 'percent'
                          : this.layoutStyleObj.quantity) +
                        '-quantity-box',
                      size: 'small',
                      value: this.getStyleValNum(this.layoutStyleObj.right),
                      onPressEnter: function onPressEnter(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'right',
                        );
                      },
                      onBlur: function onBlur(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'right',
                        );
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.InputNumber,
                    {
                      name: 'layoutPaddingBottom',
                      className:
                        'layout-input-number layout-item layout-item-bottom\n            ' +
                        (this.layoutStyleObj.quantity === '%'
                          ? 'percent'
                          : this.layoutStyleObj.quantity) +
                        '-quantity-box',
                      size: 'small',
                      value: this.getStyleValNum(this.layoutStyleObj.bottom),
                      onPressEnter: function onPressEnter(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'bottom',
                        );
                      },
                      onBlur: function onBlur(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'bottom',
                        );
                      },
                    },
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.InputNumber,
                    {
                      name: 'layoutPaddingLeft',
                      className:
                        'layout-input-number layout-item layout-item-left\n            ' +
                        (this.layoutStyleObj.quantity === '%'
                          ? 'percent'
                          : this.layoutStyleObj.quantity) +
                        '-quantity-box',
                      size: 'small',
                      value: this.getStyleValNum(this.layoutStyleObj.left),
                      onPressEnter: function onPressEnter(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'left',
                        );
                      },
                      onBlur: function onBlur(event) {
                        var newVal = event.target.value;
                        _this2.setLayoutBoxStyle(
                          newVal,
                          layoutStyleLock,
                          'left',
                        );
                      },
                    },
                  ),
                ),
              );
            };
            return BoxStyleSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          BoxStyleSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              BoxStyleSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/CascaderSchema/index.js':
        /*!***********************************************!*\
  !*** ./src/renderers/CascaderSchema/index.js ***!
  \***********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/CascaderSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_10__,
            );

          /**
           * Cascader 级联选择
           * 文档地址：https://ant-design.antgroup.com/components/cascader-cn
           */
          var CascaderSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function CascaderSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (value) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, value); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              CascaderSchema,
              _React$PureComponent,
            );
            var _proto = CascaderSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _targetJsonSchema$sho,
                _targetJsonSchema$all,
                _targetJsonSchema$mul;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var options = targetJsonSchema.options || [];
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_9__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box select-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Cascader,
                      {
                        showSearch:
                          (_targetJsonSchema$sho =
                            targetJsonSchema.showSearch) != null
                            ? _targetJsonSchema$sho
                            : true,
                        style: {
                          display: 'inline-block',
                          minWidth: '120px',
                        },
                        options: options,
                        onChange: this.handleValueChange,
                        defaultValue:
                          curJsonData != null
                            ? curJsonData
                            : targetJsonSchema.default,
                        disabled: targetJsonSchema.readOnly,
                        allowClear:
                          (_targetJsonSchema$all =
                            targetJsonSchema.allowClear) != null
                            ? _targetJsonSchema$all
                            : true,
                        multiple:
                          (_targetJsonSchema$mul = targetJsonSchema.multiple) !=
                          null
                            ? _targetJsonSchema$mul
                            : false,
                      },
                    ),
                  ),
                ),
              );
            };
            return CascaderSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          CascaderSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              CascaderSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/CheckboxSchema/index.js':
        /*!***********************************************!*\
  !*** ./src/renderers/CheckboxSchema/index.js ***!
  \***********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var CheckboxSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function CheckboxSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (checkedValue) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, checkedValue); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              CheckboxSchema,
              _React$PureComponent,
            );
            var _proto = CheckboxSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var options = targetJsonSchema.options;
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Checkbox.Group,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        onChange: this.handleValueChange,
                        defaultValue:
                          curJsonData != null
                            ? curJsonData
                            : targetJsonSchema.default,
                        disabled: targetJsonSchema.readOnly,
                      },
                      options &&
                        options.length > 0 &&
                        options.map(function (item, optionIndex) {
                          var optionLabel = item.label || item.name;
                          var optionNodeKey =
                            nodeKey + '-select-' + optionLabel;
                          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Checkbox,
                            {
                              value: item.value,
                              key: optionNodeKey,
                            },
                            optionLabel,
                          );
                        }),
                    ),
                  ),
                ),
              );
            };
            return CheckboxSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          CheckboxSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              CheckboxSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/CodeAreaFormSchema/index.js':
        /*!***************************************************!*\
  !*** ./src/renderers/CodeAreaFormSchema/index.js ***!
  \***************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! react-ace */ 'react-ace');
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_ace__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/mode-javascript */ 'ace-builds/src-noconflict/mode-javascript',
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_9__,
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/theme-monokai */ 'ace-builds/src-noconflict/theme-monokai',
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10__,
            );
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var CodeAreaFormSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function CodeAreaFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 组件内部维护的数据
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (newJsonData) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, newJsonData); // 更新数值
              };
              _this.state = {
                isShowWarn: false,
                // 用于判断是否显示错误信息
                warnText: '', // 错误内容
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              CodeAreaFormSchema,
              _React$PureComponent,
            );
            var _proto = CodeAreaFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                isReadOnly = _this$props3.isReadOnly,
                jsonKey = _this$props3.jsonKey,
                isIgnoreWarn = _this$props3.isIgnoreWarn,
                nodeKey = _this$props3.nodeKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var _this$state = this.state,
                isShowWarn = _this$state.isShowWarn,
                warnText = _this$state.warnText;
              var readOnly = isReadOnly || targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              // 格式化JSON数据
              curJsonData =
                curJsonData !== undefined
                  ? curJsonData
                  : targetJsonSchema.default || '() => {}';
              // 判断当前jsonData是否是对象类型
              if (
                (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isObject)(
                  curJsonData,
                )
              ) {
                curJsonData = JSON.stringify(curJsonData, null, 2);
              }
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp'), //  element-title-card-warp
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  !isIgnoreWarn &&
                    isShowWarn &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'warning-box code-area-item',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'warning-img',
                        },
                        'X',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'warning-text',
                        },
                        warnText,
                      ),
                    ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
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
                      showPrintMargin: true,
                      showGutter: true,
                      highlightActiveLine: true,
                      readOnly: readOnly,
                      minLines: 5,
                      maxLines: 30,
                      width: '100%',
                      onChange: function onChange(newJsonData) {
                        try {
                          eval(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
                          // 更新jsonData
                          _this2.handleValueChange(newJsonData);
                          _this2.setState({
                            isShowWarn: false,
                          });
                        } catch (err) {
                          // 更新jsonData
                          _this2.handleValueChange(newJsonData);
                          _this2.setState({
                            warnText: err.message,
                            isShowWarn: true,
                          });
                        }
                      },
                      setOptions: {
                        useWorker: false,
                        showLineNumbers: true,
                        tabSize: 2,
                      },
                    },
                  ),
                ),
              );
            };
            return CodeAreaFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          CodeAreaFormSchema.propTypes = {
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
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              CodeAreaFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/ColorFormSchemaV3/index.js':
        /*!**************************************************!*\
  !*** ./src/renderers/ColorFormSchemaV3/index.js ***!
  \**************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! react-color */ 'react-color');
          /* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_color__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/ColorFormSchemaV3/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_11__,
            );

          /**
           * 新版color类型：颜色选择器
           */
          var ColorFormSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function ColorFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (color) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var rgb = color.rgb; // hex,
                var rgbaVal =
                  'rgba(' +
                  rgb.r +
                  ',' +
                  rgb.g +
                  ',' +
                  rgb.b +
                  ',' +
                  rgb.a +
                  ')';
                // updateFormValueData(keyRoute, hex); // 更新数值(#ffffff数据格式)
                updateFormValueData(keyRoute, rgbaVal); // 更新数值: rgba(255,255,255,100)
                // 主动触发更新的状态数据
                _this.setState({
                  renderState: !_this.state.renderState,
                });
              };
              /** color清除事件处理器 */
              _this.deleteColor = function () {
                var _this$props2 = _this.props,
                  keyRoute = _this$props2.keyRoute,
                  jsonStore = _this$props2.jsonStore;
                var _ref2 = jsonStore || {},
                  updateFormValueData = _ref2.updateFormValueData;
                updateFormValueData(keyRoute, 'initial'); // 更新数值
                antd__WEBPACK_IMPORTED_MODULE_5__.message.success(
                  '已移除当前设置的颜色值',
                );
                // 主动触发更新的状态数据
                _this.setState({
                  renderState: !_this.state.renderState,
                });
              };
              _this.state = {
                renderState: false,
                // 用于主动触发更新的状态数据
                displayColorPicker: false, // 是否展示颜色选择器
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              ColorFormSchema,
              _React$PureComponent,
            );
            var _proto = ColorFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props3 = this.props,
                schemaStore = _this$props3.schemaStore,
                jsonStore = _this$props3.jsonStore;
              var _ref3 = schemaStore || {},
                pageScreen = _ref3.pageScreen;
              var _ref4 = jsonStore || {},
                getJSONDataByKeyRoute = _ref4.getJSONDataByKeyRoute;
              var _this$props4 = this.props,
                keyRoute = _this$props4.keyRoute,
                jsonKey = _this$props4.jsonKey,
                nodeKey = _this$props4.nodeKey,
                targetJsonSchema = _this$props4.targetJsonSchema;
              var _this$state = this.state,
                renderState = _this$state.renderState,
                displayColorPicker = _this$state.displayColorPicker;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_10__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局

              var style = targetJsonSchema.style
                ? buildStyle(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? buildStyle(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? buildStyle(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              var SketchPickerContent =
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  react_color__WEBPACK_IMPORTED_MODULE_6__.SketchPicker,
                  {
                    className: 'color-sketch-picker',
                    key: nodeKey + '-SketchPicker',
                    color:
                      curJsonData != null
                        ? curJsonData
                        : targetJsonSchema.default,
                    onChange: this.handleValueChange,
                  },
                );
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box render-dom-' + renderState,
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className:
                          'color-btn-wrap color-item-form ' +
                          (displayColorPicker ? 'selected' : '') +
                          ' ' +
                          (readOnly ? 'disabled' : ''),
                        onClick: function onClick() {
                          if (readOnly) return;
                          _this2.setState({
                            displayColorPicker: !displayColorPicker,
                          });
                        },
                      },
                      readOnly &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'button',
                          {
                            className: 'ant-input color-btn',
                            style: {
                              backgroundColor:
                                curJsonData != null
                                  ? curJsonData
                                  : targetJsonSchema.default,
                            },
                          },
                        ),
                      !readOnly &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                          null,
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Popover,
                            {
                              content: SketchPickerContent,
                              title: '\u989C\u8272\u9009\u62E9\u5668',
                              trigger: 'click',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'button',
                              {
                                className: 'ant-input color-btn',
                                style: {
                                  backgroundColor:
                                    curJsonData != null
                                      ? curJsonData
                                      : targetJsonSchema.default,
                                },
                              },
                            ),
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                            {
                              title:
                                '\u70B9\u51FB\u79FB\u9664\u5F53\u524D\u989C\u8272\u503C',
                              placement: 'top',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CloseOutlined,
                              {
                                className: 'delete-bgColor-btn',
                                onClick: function onClick() {
                                  _this2.deleteColor();
                                },
                              },
                            ),
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'span',
                            {
                              className: 'arrow',
                            },
                          ),
                        ),
                    ),
                  ),
                ),
              );
            };
            return ColorFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          ColorFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              ColorFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/DataSourceSchema/index.js':
        /*!*************************************************!*\
  !*** ./src/renderers/DataSourceSchema/index.js ***!
  \*************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $renderers/JsonView/index */ './src/renderers/JsonView/index.js',
            );
          /* harmony import */ var $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $renderers/JsonFormSchema/index */ './src/renderers/JsonFormSchema/index.js',
            );
          /* harmony import */ var $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $renderers/CodeAreaFormSchema/index */ './src/renderers/CodeAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_URLFormSchema_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! $renderers/URLFormSchema/index */ './src/renderers/URLFormSchema/index.js',
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! $assets/img/code.svg */ './src/assets/img/code.svg',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/DataSourceSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_15___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_15__,
            );

          var DataSourceSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function DataSourceSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 显示和隐藏数据过滤器
              _this.switchFilterBtn = function () {
                var isShowFilter = _this.state.isShowFilter;
                _this.setState({
                  isShowFilter: !isShowFilter,
                });
              };
              _this.state = {
                isShowFilter: false,
                // 是否显示数据过滤器
                jsonView: false,
                // 是否显示code模式
                isClosed: false, // 是否为关闭状态，默认是开启状态
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.switchFilterBtn = _this.switchFilterBtn.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              DataSourceSchema,
              _React$PureComponent,
            );
            var _proto = DataSourceSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _targetJsonSchema$sho,
                _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _this$props2 = this.props,
                keyRoute = _this$props2.keyRoute,
                jsonKey = _this$props2.jsonKey,
                nodeKey = _this$props2.nodeKey,
                indexRoute = _this$props2.indexRoute,
                targetJsonSchema = _this$props2.targetJsonSchema;
              var _this$state = this.state,
                jsonView = _this$state.jsonView,
                isClosed = _this$state.isClosed,
                isShowFilter = _this$state.isShowFilter;
              var curType = targetJsonSchema.type;
              // const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

              // 获取DataSource中各类数据对象
              var typeDataObj = targetJsonSchema.properties.type || {}; // type中记录了数据源类型：local or remote
              var dataObj = targetJsonSchema.properties.data || {}; // 用于录入数据（或者数据源地址）
              var filterDataObj = targetJsonSchema.properties.filter || {}; // 数据过滤器
              // 获取当前数据源类型
              var dataType = typeDataObj.default; // local or remote
              // 是否显示源码切换按钮
              var showCodeViewBtn =
                (_targetJsonSchema$sho = targetJsonSchema.showCodeViewBtn) !=
                null
                  ? _targetJsonSchema$sho
                  : true;
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: function onClick(event) {
                        _this2.setState({
                          isClosed: !isClosed,
                        });
                        event.preventDefault();
                        event.stopPropagation();
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                      },
                      '\u6570\u636E\u6E90\u914D\u7F6E',
                    ),
                    isClosed
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RightOutlined,
                          {
                            className: 'close-operate-btn',
                          },
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined,
                          {
                            className: 'close-operate-btn',
                          },
                        ),
                    showCodeViewBtn &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function onClick(event) {
                            _this2.setState({
                              jsonView: !jsonView,
                            });
                            event.preventDefault();
                            event.stopPropagation();
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                          {
                            title: jsonView ? '关闭源码模式' : '开启源码模式',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_14__[
                              'default'
                            ],
                            {
                              className: jsonView
                                ? 'info-icon active'
                                : 'info-icon',
                            },
                          ),
                        ),
                      ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className:
                        'content-item object-content ' +
                        (jsonView ? 'json-view-array' : '') +
                        ' ' +
                        (isClosed ? 'closed' : ''),
                    },
                    !jsonView &&
                      dataType === 'local' &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'ace-editor-box code-area-item',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                            {
                              title: isShowFilter
                                ? '点击隐藏数据过滤器'
                                : '点击显示数据过滤器',
                              placement: 'top',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.FilterOutlined,
                              {
                                className: 'filter-btn',
                                onClick: this.switchFilterBtn,
                              },
                            ),
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_9__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'data',
                              indexRoute: indexRoute ? indexRoute + '-1' : '1',
                              keyRoute: keyRoute ? keyRoute + '-data' : 'data',
                              nodeKey: nodeKey + '-data',
                              targetJsonSchema: dataObj,
                              key: nodeKey + '-data',
                            },
                          ),
                        ),
                        isShowFilter &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_10__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'filter',
                              indexRoute: indexRoute ? indexRoute + '-2' : '2',
                              keyRoute: keyRoute
                                ? keyRoute + '-filter'
                                : 'filter',
                              nodeKey: nodeKey + '-filter',
                              targetJsonSchema: filterDataObj,
                              key: nodeKey + '-filter',
                            },
                          ),
                      ),
                    !jsonView &&
                      dataType === 'remote' &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'url-editor-box',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_URLFormSchema_index__WEBPACK_IMPORTED_MODULE_11__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'data',
                              indexRoute: indexRoute ? indexRoute + '-1' : '1',
                              keyRoute: keyRoute ? keyRoute + '-data' : 'data',
                              nodeKey: nodeKey + '-data',
                              targetJsonSchema: dataObj,
                              key: nodeKey + '-data',
                            },
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                            {
                              title:
                                '\u70B9\u51FB\u8BBE\u7F6E\u6570\u636E\u8FC7\u6EE4\u5668',
                              placement: 'top',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.FilterOutlined,
                              {
                                className: 'filter-url-btn',
                                onClick: this.switchFilterBtn,
                              },
                            ),
                          ),
                        ),
                        isShowFilter &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_10__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'filter',
                              indexRoute: indexRoute ? indexRoute + '-2' : '2',
                              keyRoute: keyRoute
                                ? keyRoute + '-filter'
                                : 'filter',
                              nodeKey: nodeKey + '-filter',
                              targetJsonSchema: filterDataObj,
                              key: nodeKey + '-filter',
                            },
                          ),
                      ),
                    jsonView &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ],
                        this.props,
                      ),
                  ),
                ),
              );
            };
            return DataSourceSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          DataSourceSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              DataSourceSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/DateTimeFormSchema/index.js':
        /*!***************************************************!*\
  !*** ./src/renderers/DateTimeFormSchema/index.js ***!
  \***************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! moment */ 'moment');
          /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              moment__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var DateTypeList = {
            'date-time': 'YYYY-MM-DD HH:mm',
            date: 'YYYY-MM-DD',
            time: 'HH:mm',
          };
          var DateTimeFormSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function DateTimeFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event, dateString) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, dateString); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              DateTimeFormSchema,
              _React$PureComponent,
            );
            var _proto = DateTimeFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var curType = targetJsonSchema.type;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              var timeFormat = DateTypeList[curType] || DateTypeList[0];
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var defaultTime =
                curJsonData != null ? curJsonData : targetJsonSchema.default;
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_10__.isNeedTwoColWarpStyle)(
                curType,
              ); // 是否需要设置成两栏布局

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.DatePicker,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        disabled: readOnly,
                        required: isRequired,
                        showTime: curType === 'date-time',
                        format: timeFormat,
                        placeholder:
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                        defaultValue:
                          defaultTime &&
                          moment__WEBPACK_IMPORTED_MODULE_5___default()(
                            defaultTime,
                            timeFormat,
                          ),
                        onChange: this.handleValueChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return DateTimeFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          DateTimeFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              DateTimeFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/DynamicConfigSchema/index.js':
        /*!****************************************************!*\
  !*** ./src/renderers/DynamicConfigSchema/index.js ***!
  \****************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $components_MappingRender__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $components/MappingRender */ './src/components/MappingRender.js',
            );
          /* harmony import */ var $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $renderers/JsonView/index */ './src/renderers/JsonView/index.js',
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_webCache__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! $utils/webCache */ './src/utils/webCache.js',
            );
          /* harmony import */ var $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              /*! $assets/img/code.svg */ './src/assets/img/code.svg',
            );

          var ObjectSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function ObjectSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              _this.state = {
                jsonView: false,
                // 是否显示code模式
                isClosed: false, // 是否为关闭状态，默认是开启状态
              };
              _this.collapseChange = _this.collapseChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              ObjectSchema,
              _React$PureComponent,
            );
            var _proto = ObjectSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_11__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_11__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.collapseChange = function collapseChange(event) {
              var keyRoute = this.props.keyRoute;
              var isClosed = this.state.isClosed;
              this.setState({
                isClosed: !isClosed,
              });
              event.preventDefault();
              event.stopPropagation();

              // 缓存当前折叠状态
              (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_12__.saveJSONEditorCache)(
                keyRoute,
                !isClosed,
              );
            };
            _proto.render = function render() {
              var _targetJsonSchema$sho,
                _targetJsonSchema$box,
                _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _ref2 = jsonStore || {},
                _options = _ref2.options,
                getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute;
              var _this$props2 = this.props,
                indexRoute = _this$props2.indexRoute,
                jsonKey = _this$props2.jsonKey,
                nodeKey = _this$props2.nodeKey,
                keyRoute = _this$props2.keyRoute,
                targetJsonSchema = _this$props2.targetJsonSchema,
                isArrayItem = _this$props2.isArrayItem,
                isStructuredSchema = _this$props2.isStructuredSchema;
              var _this$state = this.state,
                jsonView = _this$state.jsonView,
                _isClosed = _this$state.isClosed;
              var options = _options || {};
              // 判断是否结构化Schema，如果是则不显示Title，避免重复的title
              var isStructured = isStructuredSchema;
              // 是否显示源码切换按钮
              var showCodeViewBtn =
                (_targetJsonSchema$sho = targetJsonSchema.showCodeViewBtn) !=
                null
                  ? _targetJsonSchema$sho
                  : true; // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
              var curNodeKey =
                nodeKey + '-' + curJsonData.type + '-' + curJsonData.valueType;

              // 内容Meta数据
              var metaContentKeyList = options.metaContentKeyList || [];
              var globalMetaConfig = options.globalMetaConfig || [];

              // 获取前端缓存中的折叠数据
              var isClosed = _isClosed;
              var collapseCacheData = (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_12__.getJSONEditorCache)(
                keyRoute,
              );
              if (collapseCacheData !== undefined) {
                isClosed = collapseCacheData;
              }
              var boxTitle =
                (_targetJsonSchema$box = targetJsonSchema.boxTitle) != null
                  ? _targetJsonSchema$box
                  : '动态配置';
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'object-schema-warp wide-screen-element-warp'
                      : 'object-schema-warp mobile-screen-element-warp'),
                  // key={curNodeKey}
                  id: nodeKey,
                  style: style,
                },
                !isStructured &&
                  !isArrayItem &&
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    'div',
                    {
                      className: 'element-title',
                      style: titleStyle,
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title:
                          pageScreen === 'wideScreen'
                            ? targetJsonSchema.description
                            : '',
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'span',
                        {
                          className: 'title-text',
                          title: targetJsonSchema.title,
                        },
                        targetJsonSchema.title,
                        targetJsonSchema.showKey &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'span',
                            null,
                            '\uFF08',
                            (0,
                            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                              jsonKey,
                              {
                                length: 15,
                              },
                            ),
                            '\uFF09',
                          ),
                      ),
                    ),
                    pageScreen === 'mobileScreen' &&
                      targetJsonSchema.description &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                        {
                          title: targetJsonSchema.description,
                          placement: 'top',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                          {
                            className: 'info-icon',
                          },
                        ),
                      ),
                  ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: contentStyle,
                  },
                  !isStructured &&
                    !isArrayItem &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'span',
                        {
                          className: 'title-text',
                        },
                        boxTitle,
                        '\xA0',
                      ),
                      isClosed
                        ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RightOutlined,
                            {
                              className: 'close-operate-btn',
                            },
                          )
                        : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined,
                            {
                              className: 'close-operate-btn',
                            },
                          ),
                      showCodeViewBtn &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function onClick(event) {
                              _this2.setState({
                                jsonView: !jsonView,
                              });
                              event.preventDefault();
                              event.stopPropagation();
                            },
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                            {
                              title: jsonView ? '关闭源码模式' : '开启源码模式',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_13__[
                                'default'
                              ],
                              {
                                className: jsonView
                                  ? 'info-icon active'
                                  : 'info-icon',
                              },
                            ),
                          ),
                        ),
                    ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    'div',
                    {
                      className:
                        'content-item ' +
                        (!isStructured && !isArrayItem
                          ? 'object-content'
                          : '') +
                        ' ' +
                        (jsonView ? 'json-view-array' : '') +
                        ' ' +
                        (isClosed ? 'closed' : ''),
                    },
                    !jsonView &&
                      targetJsonSchema.propertyOrder &&
                      targetJsonSchema.propertyOrder.map(function (key, index) {
                        /** 1. 获取当前元素的路径值 */
                        var currentIndexRoute = indexRoute
                          ? indexRoute + '-' + index
                          : '' + index;
                        var currentKeyRoute = keyRoute
                          ? keyRoute + '-' + key
                          : '' + key; // key路径值，后续用于从jsonData中提取当前元素的数值
                        /** 2. 获取当前元素的key值 */
                        var currentJsonKey = key;
                        /** 3. 获取当前元素的json结构对象 */
                        var currentSchemaData = (0,
                        mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                          targetJsonSchema.properties[currentJsonKey],
                        );
                        /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                        var curType = currentSchemaData.type;
                        /** 5. 获取当前元素的id，用于做唯一标识 */
                        var childNodeKey =
                          nodeKey + '-' + curType + '-' + currentJsonKey;

                        // 补充动态配置类型相关显隐逻辑【定制逻辑】
                        if (
                          currentJsonKey === 'valueType' &&
                          (curJsonData.type === 'ContentStaticConfig' ||
                            curJsonData.type === 'ResourceCenter')
                        ) {
                          var valueSchema =
                            targetJsonSchema.properties['value'];
                          if (
                            !['select', 'radio', 'checkboxes'].includes(
                              valueSchema.type,
                            )
                          ) {
                            // 当value选择input、select、checkboxes，才可设置「配置方式」，其他默认都是 "填写"
                            currentSchemaData.default = 'string';
                            currentSchemaData.readOnly = true;
                            currentSchemaData.description =
                              '当前数值没有可选项，不支持设置。';
                          }
                        }
                        if (currentJsonKey === 'range') {
                          if (
                            curJsonData.valueType === 'select' &&
                            (curJsonData.type === 'ContentStaticConfig' ||
                              curJsonData.type === 'ResourceCenter')
                          ) {
                            var _valueSchema =
                              targetJsonSchema.properties['value'];
                            if (
                              ['select', 'radio', 'checkboxes'].includes(
                                _valueSchema.type,
                              ) &&
                              _valueSchema.options &&
                              _valueSchema.options.length > 0
                            ) {
                              // range 和 value 复用 options
                              currentSchemaData.options = (0,
                              $utils_index__WEBPACK_IMPORTED_MODULE_8__.objClone)(
                                _valueSchema.options,
                              );
                            }
                          }
                        }
                        if (
                          currentJsonKey === 'value' &&
                          curJsonData.type === 'Content'
                        ) {
                          // 内容Meta数据
                          currentSchemaData.type = 'select'; // 改用 下拉列表
                          currentSchemaData.options = (0,
                          $utils_index__WEBPACK_IMPORTED_MODULE_8__.objClone)(
                            metaContentKeyList,
                          );
                        } else if (
                          currentJsonKey === 'value' &&
                          curJsonData.type === 'RuntimeConst'
                        ) {
                          // 全局配置数据
                          currentSchemaData.type = 'cascader'; // 改用 级联选择
                          currentSchemaData.options = (0,
                          $utils_index__WEBPACK_IMPORTED_MODULE_8__.objClone)(
                            globalMetaConfig,
                          );
                        }
                        return (0,
                        $components_MappingRender__WEBPACK_IMPORTED_MODULE_9__[
                          'default'
                        ])({
                          parentType: curType,
                          jsonKey: currentJsonKey,
                          indexRoute: currentIndexRoute,
                          keyRoute: currentKeyRoute,
                          nodeKey: childNodeKey,
                          targetJsonSchema: currentSchemaData,
                          schemaStore: schemaStore,
                          jsonStore: jsonStore,
                        });
                      }),
                    jsonView &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_10__[
                          'default'
                        ],
                        this.props,
                      ),
                  ),
                ),
              );
            };
            return ObjectSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent);
          ObjectSchema.propTypes = {
            isArrayItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 如果是数组项，title会进行特殊显示
            arrIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 当前数组项
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            isStructuredSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(ObjectSchema),
          );

          /***/
        },

      /***/ './src/renderers/DynamicDataSchema/index.js':
        /*!**************************************************!*\
  !*** ./src/renderers/DynamicDataSchema/index.js ***!
  \**************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $renderers/JsonFormSchema/index */ './src/renderers/JsonFormSchema/index.js',
            );
          /* harmony import */ var $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $renderers/CodeAreaFormSchema/index */ './src/renderers/CodeAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $renderers/InputFormSchema/index */ './src/renderers/InputFormSchema/index.js',
            );
          /* harmony import */ var $renderers_TreeSelectFromSchema_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! $renderers/TreeSelectFromSchema/index */ './src/renderers/TreeSelectFromSchema/index.js',
            );
          /* harmony import */ var $renderers_RemoteDynamicDataSchema_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! $renderers/RemoteDynamicDataSchema/index */ './src/renderers/RemoteDynamicDataSchema/index.js',
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/DynamicDataSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_16__,
            );

          var Option = antd__WEBPACK_IMPORTED_MODULE_5__.Select.Option;

          var DynamicDataSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function DynamicDataSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (curKeyRoute, value) {
                var _ref = _this.props.jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(curKeyRoute, value); // 更新数值
              };
              // 显示和隐藏数据过滤器
              _this.switchFilterBtn = function () {
                var isShowFilter = _this.state.isShowFilter;
                _this.setState({
                  isShowFilter: !isShowFilter,
                });
              };
              // 面板展示内容切换（本地数据/接口数据）
              _this.tabChange = function (value) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref2 = jsonStore || {},
                  triggerChangeAction = _ref2.triggerChangeAction;
                _this.handleValueChange(keyRoute + '-type', value);
                setTimeout(function () {
                  triggerChangeAction();
                }, 100);
              };
              _this.dynamicDataChange = function (dynamicDataName) {
                var _this$props2 = _this.props,
                  keyRoute = _this$props2.keyRoute,
                  jsonStore = _this$props2.jsonStore;
                var _ref3 = jsonStore || {},
                  triggerChangeAction = _ref3.triggerChangeAction,
                  dynamicDataObj = _ref3.dynamicDataObj;
                var curDynamicData = (0,
                $utils_index__WEBPACK_IMPORTED_MODULE_15__.objClone)(
                  (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                    dynamicDataObj[dynamicDataName],
                  ),
                );
                if (curDynamicData) {
                  var newCurDynamicData = {
                    id: curDynamicData.id,
                    url: curDynamicData.url,
                    method: curDynamicData.method,
                    headers: curDynamicData.headers,
                    options: curDynamicData.options,
                    dataName: curDynamicData.name,
                    body: curDynamicData.body,
                    data: curDynamicData.data,
                    filter: 'return data;',
                    dataRoute: '',
                  };
                  _this.handleValueChange(
                    keyRoute + '-config',
                    newCurDynamicData,
                  );
                  setTimeout(function () {
                    triggerChangeAction();
                  }, 100);
                }
              };
              _this.dataRouteChange = function (newDataRoute) {
                var _this$props3 = _this.props,
                  keyRoute = _this$props3.keyRoute,
                  jsonStore = _this$props3.jsonStore;
                var _ref4 = jsonStore || {},
                  triggerChangeAction = _ref4.triggerChangeAction,
                  updateFormValueData = _ref4.updateFormValueData;
                if (newDataRoute) {
                  updateFormValueData(
                    keyRoute + '-config-dataRoute',
                    newDataRoute,
                    true,
                  );
                  var dataPath = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.dataRoute2dataPath)(
                    newDataRoute,
                  );
                  // 自动填充当前filter
                  _this.handleValueChange(
                    keyRoute + '-config-filter',
                    'return ' + dataPath + ';',
                  );
                } else {
                  // newDataRoute为空时，需要重置dataRoute和filter
                  updateFormValueData(keyRoute + '-config-dataRoute', '', true);
                  // 自动填充当前filter
                  _this.handleValueChange(
                    keyRoute + '-config-filter',
                    'return data;',
                  );
                }
                setTimeout(function () {
                  triggerChangeAction();
                }, 100);
              };
              _this.paramsConfigChange = function (paramsKey, newParamsConfig) {
                var _this$props4 = _this.props,
                  keyRoute = _this$props4.keyRoute,
                  jsonStore = _this$props4.jsonStore;
                var _ref5 = jsonStore || {},
                  triggerChangeAction = _ref5.triggerChangeAction,
                  getJSONDataByKeyRoute = _ref5.getJSONDataByKeyRoute;
                var curParamsConfigData =
                  getJSONDataByKeyRoute(
                    keyRoute + '-config-body-' + paramsKey,
                  ) || {};
                _this.handleValueChange(
                  keyRoute + '-config-body-' + paramsKey,
                  Object.assign(curParamsConfigData, newParamsConfig),
                );
                setTimeout(function () {
                  triggerChangeAction();
                }, 100);
              };
              _this.state = {
                isShowFilter: false, // 是否显示数据过滤器
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.switchFilterBtn = _this.switchFilterBtn.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              DynamicDataSchema,
              _React$PureComponent,
            );
            var _proto = DynamicDataSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_13__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_13__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props5 = this.props,
                schemaStore = _this$props5.schemaStore,
                jsonStore = _this$props5.jsonStore;
              var _ref6 = schemaStore || {},
                pageScreen = _ref6.pageScreen;
              var _ref7 = jsonStore || {},
                getJSONDataByKeyRoute = _ref7.getJSONDataByKeyRoute,
                dynamicDataList = _ref7.dynamicDataList,
                dynamicDataObj = _ref7.dynamicDataObj,
                dynamicDataApiScopeList = _ref7.dynamicDataApiScopeList,
                triggerChange = _ref7.triggerChange;
              var _this$props6 = this.props,
                keyRoute = _this$props6.keyRoute,
                jsonKey = _this$props6.jsonKey,
                nodeKey = _this$props6.nodeKey,
                indexRoute = _this$props6.indexRoute,
                targetJsonSchema = _this$props6.targetJsonSchema;
              var isShowFilter = this.state.isShowFilter;
              var curType = targetJsonSchema.type;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute) || {};

              // 获取DataSource中各类数据对象
              var typeDataObj = targetJsonSchema.properties.type || {}; // type中记录了数据源类型：local or remote// 获取当前数据源类型
              var dataType = curJsonData.type || typeDataObj.default; // local or remote

              var configDataObj = curJsonData.config || {}; // 接口数据请求配置对象
              var dataName = configDataObj.dataName; // 数据源名称
              var dataRoute = configDataObj.dataRoute; // 接口数据路径
              var apiParams = configDataObj.body || {}; // 动态数据/请求参数
              if (
                !(0, $utils_typeof__WEBPACK_IMPORTED_MODULE_14__.isObject)(
                  apiParams,
                ) &&
                apiParams !== ''
              ) {
                try {
                  apiParams = JSON.parse(apiParams);
                } catch (err) {
                  console.log('当前数据源的请求参数格式异常');
                  apiParams = {};
                }
              }
              var curDynamicData = dynamicDataObj[dataName] || {}; // 根据dataName获取最新的数据源对象
              var dataObj = targetJsonSchema.properties.data || {}; // schema中的数据对象

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_15__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_15__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_15__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className: 'mobile-screen-element-warp dynamic-data-schema',
                  // key={nodeKey}
                  key: nodeKey + '-' + triggerChange,
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'dynamic-data-tab-radio-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'dynamic-data-tab-radio',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            'tab-radio ' +
                            (dataType === 'local' ? 'tab-radio-active' : ''),
                          onClick: function onClick() {
                            _this2.tabChange('local');
                          },
                        },
                        '\u672C\u5730\u6570\u636E',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            'tab-radio ' +
                            (dataType === 'remote' ? 'tab-radio-active' : ''),
                          onClick: function onClick() {
                            _this2.tabChange('remote');
                          },
                        },
                        '\u63A5\u53E3\u6570\u636E',
                      ),
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className:
                        'dynamic-dat-tabPane ' +
                        (dataType === 'local'
                          ? 'dynamic-dat-tabPane-active'
                          : ''),
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'json-form-box',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                        {
                          title: isShowFilter
                            ? '点击隐藏数据过滤器'
                            : '点击显示数据过滤器',
                          placement: 'top',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.FilterOutlined,
                          {
                            className: 'filter-btn',
                            onClick: this.switchFilterBtn,
                          },
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ],
                        {
                          parentType: curType,
                          jsonKey: 'data',
                          indexRoute: indexRoute ? indexRoute + '-2' : '2',
                          keyRoute: keyRoute ? keyRoute + '-data' : 'data',
                          nodeKey: nodeKey + '-data',
                          targetJsonSchema: dataObj,
                          key: nodeKey + '-data',
                        },
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'filter-func-box',
                        },
                        isShowFilter &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_9__[
                              'default'
                            ],
                            {
                              isIgnoreWarn: true,
                              // 当前主要使用方法体(非直接执行函数)
                              parentType: curType,
                              jsonKey: 'localFilter',
                              indexRoute: indexRoute ? indexRoute + '-3' : '3',
                              keyRoute: keyRoute
                                ? keyRoute + '-localFilter'
                                : 'localFilter',
                              nodeKey: nodeKey + '-localFilter',
                              targetJsonSchema:
                                targetJsonSchema.properties.localFilter,
                              key: nodeKey + '-localFilter',
                            },
                          ),
                      ),
                    ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className:
                        'dynamic-dat-tabPane ' +
                        (dataType === 'remote'
                          ? 'dynamic-dat-tabPane-active'
                          : ''),
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'json-form-box',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            pageScreen === 'wideScreen'
                              ? 'wide-screen-element-warp'
                              : 'mobile-screen-element-warp',
                          key: nodeKey + '-' + dataName,
                          id: nodeKey + '-' + dataName,
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'element-title',
                          },
                          '\u6570\u636E\u6E90\u5217\u8868',
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'content-item',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'form-item-box',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_5__.Select,
                              {
                                className: 'dynamic-data-select',
                                defaultValue: dataName,
                                onSelect: this.dynamicDataChange,
                              },
                              dynamicDataList &&
                                (0,
                                $utils_typeof__WEBPACK_IMPORTED_MODULE_14__.isArray)(
                                  dynamicDataList,
                                ) &&
                                dynamicDataList.map(function (dynamicData) {
                                  return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                    Option,
                                    {
                                      value: dynamicData.name,
                                      key: dynamicData.id,
                                    },
                                    dynamicData.title,
                                  );
                                }),
                            ),
                          ),
                        ),
                      ),
                      dataName &&
                        apiParams &&
                        Object.keys(apiParams).length > 0 &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              (pageScreen === 'wideScreen'
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp') +
                              ' element-title-card-warp',
                            key: nodeKey + '-' + dataName + '-params',
                            id: nodeKey + '-' + dataName + '-params',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'element-title',
                            },
                            '\u8BF7\u6C42\u53C2\u6570\u914D\u7F6E',
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'content-item object-content',
                            },
                            Object.keys(apiParams).map(function (paramKey) {
                              var paramItam = (0,
                              $utils_index__WEBPACK_IMPORTED_MODULE_15__.objClone)(
                                apiParams[paramKey],
                              );
                              paramItam.readOnly =
                                paramItam.scope && paramItam.scope === 'static'
                                  ? true
                                  : false;
                              var curKeyRoute =
                                keyRoute + '-config-body-' + paramKey;
                              var scopeTitle =
                                dynamicDataApiScopeList[paramItam.scope];
                              if (scopeTitle && paramItam.scope !== 'dynamic') {
                                paramItam.title =
                                  paramItam.title +
                                  '\uFF08' +
                                  scopeTitle +
                                  '\uFF09';
                              }
                              if (paramItam.scope !== 'dynamic') {
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_10__[
                                    'default'
                                  ],
                                  {
                                    pageScreen: pageScreen,
                                    // 默认使用宽屏模式
                                    jsonKey: paramKey,
                                    keyRoute: curKeyRoute + '-value',
                                    nodeKey: curKeyRoute,
                                    targetJsonSchema: paramItam,
                                    key: curKeyRoute,
                                  },
                                );
                              } else {
                                var curNodeKay =
                                  nodeKey +
                                  '-' +
                                  dataName +
                                  '-params-' +
                                  paramKey;
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  $renderers_RemoteDynamicDataSchema_index__WEBPACK_IMPORTED_MODULE_12__[
                                    'default'
                                  ],
                                  {
                                    pageScreen: pageScreen,
                                    // 默认使用宽屏模式
                                    nodeKey: curNodeKay,
                                    keyRoute: keyRoute
                                      ? keyRoute + '-config-body-' + paramKey
                                      : 'config-body-${paramKey}',
                                    curConfigData: paramItam || {},
                                    configDataChange: function configDataChange(
                                      newParamsConfig,
                                    ) {
                                      _this2.paramsConfigChange(
                                        paramKey,
                                        newParamsConfig,
                                      );
                                    },
                                    key: curKeyRoute,
                                  },
                                );
                              }
                            }),
                          ),
                        ),
                      dataName &&
                        apiParams &&
                        Object.keys(apiParams).length === 0 &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              pageScreen === 'wideScreen'
                                ? 'wide-screen-element-warp'
                                : 'mobile-screen-element-warp',
                            key: nodeKey + '-' + dataName + '-empty',
                            id: nodeKey + '-' + dataName + '-empty',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'element-title',
                            },
                            '\u8BF7\u6C42\u53C2\u6570\u914D\u7F6E',
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'content-item',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              'span',
                              {
                                className: 'warning-text',
                              },
                              '\u65E0\u53EF\u914D\u7F6E\u7684\u8BF7\u6C42\u53C2\u6570',
                            ),
                          ),
                        ),
                      dataName &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          $renderers_TreeSelectFromSchema_index__WEBPACK_IMPORTED_MODULE_11__[
                            'default'
                          ],
                          {
                            nodeKey: nodeKey + '-config-dataRoute-' + dataRoute,
                            mockData: curDynamicData.respMock,
                            dataRoute: dataRoute,
                            onChange: this.dataRouteChange,
                            key: nodeKey + '-config-dataRoute',
                          },
                        ),
                      dataName &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_9__[
                            'default'
                          ],
                          {
                            isReadOnly: true,
                            isIgnoreWarn: true,
                            // 当前主要使用方法体(非直接执行函数)
                            parentType: curType,
                            jsonKey: 'filter',
                            indexRoute: indexRoute
                              ? indexRoute + '-1-2'
                              : '1-2',
                            keyRoute: keyRoute
                              ? keyRoute + '-config-filter'
                              : 'config-filter',
                            nodeKey: nodeKey + '-config-filter-' + dataRoute,
                            targetJsonSchema:
                              targetJsonSchema.properties.config &&
                              targetJsonSchema.properties.config.properties
                                .filter,
                            key: nodeKey + '-config-filter',
                          },
                        ),
                    ),
                  ),
                ),
              );
            };
            return DynamicDataSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          DynamicDataSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            dynamicDataList:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().array,
            dynamicDataObj:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,
            dynamicDataApiScopeList:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              DynamicDataSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/EventSchema/index.js':
        /*!********************************************!*\
  !*** ./src/renderers/EventSchema/index.js ***!
  \********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $renderers/JsonView/index */ './src/renderers/JsonView/index.js',
            );
          /* harmony import */ var $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $renderers/JsonFormSchema/index */ './src/renderers/JsonFormSchema/index.js',
            );
          /* harmony import */ var $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $renderers/CodeAreaFormSchema/index */ './src/renderers/CodeAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! $renderers/InputFormSchema/index */ './src/renderers/InputFormSchema/index.js',
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! $assets/img/code.svg */ './src/assets/img/code.svg',
            );

          var EventSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function EventSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              _this.state = {
                jsonView: false,
                // 是否显示code模式
                isClosed: false, // 是否为关闭状态，默认是开启状态
              };
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              EventSchema,
              _React$PureComponent,
            );
            var _proto = EventSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _targetJsonSchema$sho,
                _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _this$props2 = this.props,
                keyRoute = _this$props2.keyRoute,
                jsonKey = _this$props2.jsonKey,
                nodeKey = _this$props2.nodeKey,
                indexRoute = _this$props2.indexRoute,
                targetJsonSchema = _this$props2.targetJsonSchema;
              var curType = targetJsonSchema.type;
              var _this$state = this.state,
                jsonView = _this$state.jsonView,
                isClosed = _this$state.isClosed;
              var typeDataObj = targetJsonSchema.properties.type || {};
              // 注册类型事件的数据对象：on
              var registerJsonObj = targetJsonSchema.properties.register || {};
              var actionFuncJsonObj =
                targetJsonSchema.properties.actionFunc || {};
              // 触发事件类型的数据对象：emit
              var triggerJsonObj = targetJsonSchema.properties.trigger || {};
              var eventDataJsonObj =
                targetJsonSchema.properties.eventData || {};
              // 获取当前数据源类型
              var dataType = typeDataObj.default; // local or remote
              // 是否显示源码切换按钮
              var showCodeViewBtn =
                (_targetJsonSchema$sho = targetJsonSchema.showCodeViewBtn) !=
                null
                  ? _targetJsonSchema$sho
                  : true;
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'element-title',
                      onClick: function onClick(event) {
                        _this2.setState({
                          isClosed: !isClosed,
                        });
                        event.preventDefault();
                        event.stopPropagation();
                      },
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                      },
                      '\u4E8B\u4EF6\u914D\u7F6E',
                    ),
                    isClosed
                      ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RightOutlined,
                          {
                            className: 'close-operate-btn',
                          },
                        )
                      : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined,
                          {
                            className: 'close-operate-btn',
                          },
                        ),
                    showCodeViewBtn &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'display-source-btn',
                          onClick: function onClick(event) {
                            _this2.setState({
                              jsonView: !jsonView,
                            });
                            event.preventDefault();
                            event.stopPropagation();
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                          {
                            title: jsonView ? '关闭源码模式' : '开启源码模式',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_14__[
                              'default'
                            ],
                            {
                              className: jsonView
                                ? 'info-icon active'
                                : 'info-icon',
                            },
                          ),
                        ),
                      ),
                  ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className:
                        'content-item object-content ' +
                        (jsonView ? 'json-view-array' : '') +
                        ' ' +
                        (isClosed ? 'closed' : ''),
                    },
                    !jsonView &&
                      dataType === 'on' &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        registerJsonObj &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_11__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'register',
                              indexRoute: indexRoute ? indexRoute + '-1' : '1',
                              keyRoute: keyRoute
                                ? keyRoute + '-register'
                                : 'register',
                              nodeKey: nodeKey + '-register',
                              targetJsonSchema: registerJsonObj,
                              key: nodeKey + '-register',
                            },
                          ),
                        actionFuncJsonObj &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_10__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'actionFunc',
                              indexRoute: indexRoute ? indexRoute + '-2' : '2',
                              keyRoute: keyRoute
                                ? keyRoute + '-actionFunc'
                                : 'actionFunc',
                              nodeKey: nodeKey + '-actionFunc',
                              targetJsonSchema: actionFuncJsonObj,
                              key: nodeKey + '-actionFunc',
                            },
                          ),
                      ),
                    !jsonView &&
                      dataType === 'emit' &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        triggerJsonObj &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_11__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'trigger',
                              indexRoute: indexRoute ? indexRoute + '-1' : '1',
                              keyRoute: keyRoute
                                ? keyRoute + '-trigger'
                                : 'trigger',
                              nodeKey: nodeKey + '-trigger',
                              targetJsonSchema: triggerJsonObj,
                              key: nodeKey + '-trigger',
                            },
                          ),
                        eventDataJsonObj &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            $renderers_JsonFormSchema_index__WEBPACK_IMPORTED_MODULE_9__[
                              'default'
                            ],
                            {
                              parentType: curType,
                              jsonKey: 'eventData',
                              indexRoute: indexRoute ? indexRoute + '-2' : '2',
                              keyRoute: keyRoute
                                ? keyRoute + '-eventData'
                                : 'eventData',
                              nodeKey: nodeKey + '-eventData',
                              targetJsonSchema: eventDataJsonObj,
                              key: nodeKey + '-eventData',
                            },
                          ),
                      ),
                    jsonView &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ],
                        this.props,
                      ),
                  ),
                ),
              );
            };
            return EventSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          EventSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(EventSchema),
          );

          /***/
        },

      /***/ './src/renderers/HtmlAreaFormSchema/index.js':
        /*!***************************************************!*\
  !*** ./src/renderers/HtmlAreaFormSchema/index.js ***!
  \***************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! react-ace */ 'react-ace');
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_ace__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_html__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/mode-html */ 'ace-builds/src-noconflict/mode-html',
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_html__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_mode_html__WEBPACK_IMPORTED_MODULE_9__,
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/theme-monokai */ 'ace-builds/src-noconflict/theme-monokai',
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_theme_monokai__WEBPACK_IMPORTED_MODULE_10__,
            );
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var HtmlAreaFormSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function HtmlAreaFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 组件内部维护的数据
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (newJsonData) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, newJsonData); // 更新数值
              };
              _this.state = {
                isShowWarn: false,
                // 用于判断是否显示错误信息
                warnText: '', // 错误内容
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              HtmlAreaFormSchema,
              _React$PureComponent,
            );
            var _proto = HtmlAreaFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_12__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var _this$state = this.state,
                isShowWarn = _this$state.isShowWarn,
                warnText = _this$state.warnText;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              // 格式化JSON数据
              curJsonData =
                curJsonData !== undefined
                  ? curJsonData
                  : targetJsonSchema.default || '<p>hello</p>';
              // 判断当前jsonData是否是对象类型
              if (
                (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_11__.isObject)(
                  curJsonData,
                )
              ) {
                curJsonData = JSON.stringify(curJsonData, null, 2);
              }
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  isShowWarn &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'warning-box code-area-item',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'warning-img',
                        },
                        'X',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'warning-text',
                        },
                        warnText,
                      ),
                    ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    react_ace__WEBPACK_IMPORTED_MODULE_6___default(),
                    {
                      id: 'code_area_ace',
                      key: nodeKey + '-ace',
                      className: 'code-area-item',
                      value: curJsonData,
                      mode: 'html',
                      theme: 'monokai',
                      name: 'JS_CODE_EDIT',
                      fontSize: 14,
                      showPrintMargin: true,
                      showGutter: true,
                      highlightActiveLine: true,
                      readOnly: readOnly,
                      minLines: 5,
                      maxLines: 30,
                      width: '100%',
                      onChange: function onChange(newJsonData) {
                        try {
                          // HtmlParse(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
                          // 更新jsonData
                          _this2.handleValueChange(newJsonData);
                          _this2.setState({
                            isShowWarn: false,
                          });
                        } catch (err) {
                          // 更新jsonData
                          _this2.handleValueChange(newJsonData);
                          _this2.setState({
                            warnText: err.message,
                            isShowWarn: true,
                          });
                        }
                      },
                      setOptions: {
                        useWorker: false,
                        showLineNumbers: true,
                        tabSize: 2,
                      },
                    },
                  ),
                ),
              );
            };
            return HtmlAreaFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          HtmlAreaFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              HtmlAreaFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/InputFormSchema/index.js':
        /*!************************************************!*\
  !*** ./src/renderers/InputFormSchema/index.js ***!
  \************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var InputFormSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function InputFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              // 方式1：在class组件中声明静态属性static，且必须是contextType，确保当前组件可以使用全局context中的数据（this.context不为空）
              // static contextType = ThemeContext;
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var value = event.target.value;
                if (_this.props.onChange) {
                  // 如果有监听数据变动函数则优先触发
                  _this.props.onChange(value);
                } else {
                  updateFormValueData(keyRoute, value); // 更新数值
                }
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              InputFormSchema,
              _React$PureComponent,
            );
            var _proto = InputFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = keyRoute && getJSONDataByKeyRoute(keyRoute);
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Input,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        disabled: readOnly,
                        required: isRequired,
                        placeholder:
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                        defaultValue:
                          curJsonData != null
                            ? curJsonData
                            : targetJsonSchema.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return InputFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          InputFormSchema.propTypes = {
            parentType: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              InputFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/InputImageSchema/index.js':
        /*!*************************************************!*\
  !*** ./src/renderers/InputImageSchema/index.js ***!
  \*************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/extends */ '@babel/runtime/helpers/extends',
            );
          /* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var InputImageSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function InputImageSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              _this.handleImageChange = function (fileInfo) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                if (fileInfo.file.status === 'uploading') {
                  _this.setState({
                    loading: true,
                  });
                  return;
                }
                if (fileInfo.file.status === 'done') {
                  var responseData = fileInfo.file.response || {};
                  if (responseData.url) {
                    updateFormValueData(keyRoute, responseData.url);
                  }
                } else if (fileInfo.file.status === 'error') {
                  antd__WEBPACK_IMPORTED_MODULE_6__.message.error(
                    fileInfo.file.name +
                      ' \u56FE\u7247\u4E0A\u4F20\u5931\u8D25\u3002',
                  );
                }
                _this.setState({
                  loading: false,
                });
              };
              _this.handleDeleteChange = function () {
                var _this$props2 = _this.props,
                  keyRoute = _this$props2.keyRoute,
                  jsonStore = _this$props2.jsonStore;
                var _ref2 = jsonStore || {},
                  updateFormValueData = _ref2.updateFormValueData;
                updateFormValueData(keyRoute, '');
              };
              _this.state = {
                loading: false,
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleImageChange = _this.handleImageChange.bind(_this);
              _this.handleDeleteChange = _this.handleDeleteChange.bind(_this);
              return _this;
            }

            // 方式1：在class组件中声明静态属性static，且必须是contextType，确保当前组件可以使用全局context中的数据（this.context不为空）
            // static contextType = ThemeContext;
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(
              InputImageSchema,
              _React$PureComponent,
            );
            var _proto = InputImageSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _targetJsonSchema$lis;
              var _this$props3 = this.props,
                schemaStore = _this$props3.schemaStore,
                jsonStore = _this$props3.jsonStore;
              var _ref3 = schemaStore || {},
                pageScreen = _ref3.pageScreen;
              var _ref4 = jsonStore || {},
                getJSONDataByKeyRoute = _ref4.getJSONDataByKeyRoute,
                _options = _ref4.options;
              var _this$props4 = this.props,
                nodeKey = _this$props4.nodeKey,
                jsonKey = _this$props4.jsonKey,
                keyRoute = _this$props4.keyRoute,
                targetJsonSchema = _this$props4.targetJsonSchema;
              var options = _options || {};
              var loading = this.state.loading;
              // 从jsonData中获取对应的数值
              var curJsonData = keyRoute && getJSONDataByKeyRoute(keyRoute);
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              var defaultFileList = [];
              if (
                curJsonData &&
                (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.isArray)(
                  curJsonData,
                )
              ) {
                defaultFileList = curJsonData;
              } else if (
                curJsonData &&
                (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.isString)(
                  curJsonData,
                )
              ) {
                defaultFileList.push(curJsonData);
              }
              var uploadProps = {
                name: 'file',
                // targetJsonSchema.name || jsonKey || 'imgFile',
                action: targetJsonSchema.uploadAction || options.uploadAction,
                accept:
                  targetJsonSchema.accept ||
                  options.uploadAccept ||
                  '.jpeg,.jpg,.png',
                // multiple: targetJsonSchema.multiple ?? false,
                maxCount: targetJsonSchema.multiple
                  ? targetJsonSchema.maxCount || 1
                  : 1,
                defaultFileList: defaultFileList,
                // showUploadList: false,
                listType:
                  (_targetJsonSchema$lis = targetJsonSchema.listType) != null
                    ? _targetJsonSchema$lis
                    : 'picture-card',
                withCredentials: true,
                method:
                  targetJsonSchema.uploadMethod ||
                  options.uploadMethod ||
                  'POST',
                headers: {
                  // authorization: targetJsonSchema.authorization || 'authorization-content', // 会影响默认的图片上传
                },
                onChange: this.handleImageChange,
                onRemove: this.handleDeleteChange,
              };
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Upload,
                      _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(
                        {},
                        uploadProps,
                        {
                          disabled: readOnly,
                        },
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                        'button',
                        {
                          style: {
                            border: 0,
                            background: 'none',
                            cursor: 'pointer',
                          },
                          type: 'button',
                        },
                        loading
                          ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.LoadingOutlined,
                              null,
                            )
                          : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.PlusOutlined,
                              null,
                            ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
                          'div',
                          {
                            style: {
                              marginTop: 8,
                            },
                          },
                          '\u4E0A\u4F20\u56FE\u7247',
                        ),
                      ),
                    ),
                  ),
                ),
              );
            };
            return InputImageSchema;
          })(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);
          InputImageSchema.propTypes = {
            parentType: prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,
            indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_3__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_3__.observer)(
              InputImageSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/JsonFormSchema/index.js':
        /*!***********************************************!*\
  !*** ./src/renderers/JsonFormSchema/index.js ***!
  \***********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! react-ace */ 'react-ace');
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_ace__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/mode-json */ 'ace-builds/src-noconflict/mode-json',
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_9__,
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_solarized_light__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/theme-solarized_light */ 'ace-builds/src-noconflict/theme-solarized_light',
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_solarized_light__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_theme_solarized_light__WEBPACK_IMPORTED_MODULE_10__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');

          // ace-builds

          var JsonFormSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function JsonFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 组件内部维护的数据
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (newJsonData) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                if (newJsonData) {
                  updateFormValueData(keyRoute, newJsonData); // 更新数值
                }
              };
              _this.state = {
                isShowWarn: false,
                // 用于判断是否显示错误信息
                warnText: '',
                // 错误内容
                curJSONDataTemp: undefined, // 用于记录当前不合规范的json数据
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              JsonFormSchema,
              _React$PureComponent,
            );
            var _proto = JsonFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_13__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_13__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var _this$state = this.state,
                isShowWarn = _this$state.isShowWarn,
                warnText = _this$state.warnText,
                curJSONDataTemp = _this$state.curJSONDataTemp;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);

              // 格式化JSON数据
              curJsonData =
                curJsonData !== undefined
                  ? curJsonData
                  : targetJsonSchema.default || '{}';
              // 判断当前jsonData是否是对象类型
              if (
                (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_12__.isObject)(
                  curJsonData,
                ) ||
                (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_12__.isArray)(
                  curJsonData,
                )
              ) {
                curJsonData = JSON.stringify(curJsonData, null, 2);
              }
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  isShowWarn &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'warning-box code-area-item',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'warning-img',
                        },
                        'X',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'warning-text',
                        },
                        warnText,
                      ),
                    ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    react_ace__WEBPACK_IMPORTED_MODULE_6___default(),
                    {
                      id: nodeKey + '-json_area_ace',
                      value: (0,
                      $utils_index__WEBPACK_IMPORTED_MODULE_11__.hasProperties)(
                        curJSONDataTemp,
                      )
                        ? curJSONDataTemp
                        : curJsonData,
                      className: 'code-area-item',
                      mode: 'json',
                      theme: 'solarized_light',
                      name: 'JSON_CODE_EDIT',
                      fontSize: 14,
                      showPrintMargin: true,
                      showGutter: true,
                      highlightActiveLine: true,
                      readOnly: readOnly,
                      minLines: 5,
                      maxLines: 30,
                      width: '100%',
                      onChange: function onChange(newJsonData) {
                        try {
                          var newJsonDataTemp = JSON.parse(newJsonData); // 进行格式化（主要用于检查是否是合格的json数据）
                          // 更新jsonData
                          _this2.handleValueChange(newJsonDataTemp);
                          _this2.setState({
                            isShowWarn: false,
                            curJSONDataTemp: undefined, // 重置
                          });
                        } catch (err) {
                          // 更新jsonData
                          _this2.setState({
                            curJSONDataTemp: newJsonData,
                            // 记录当前格式不正确的json数据
                            warnText: err.message,
                            isShowWarn: true,
                          });
                        }
                      },
                      setOptions: {
                        useWorker: false,
                        showLineNumbers: true,
                        tabSize: 2,
                      },
                    },
                  ),
                ),
              );
            };
            return JsonFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          JsonFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              JsonFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/JsonView/index.js':
        /*!*****************************************!*\
  !*** ./src/renderers/JsonView/index.js ***!
  \*****************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! react-ace */ 'react-ace');
          /* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_ace__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/mode-json */ 'ace-builds/src-noconflict/mode-json',
            );
          /* harmony import */ var ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_solarized_light__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ace-builds/src-noconflict/theme-solarized_light */ 'ace-builds/src-noconflict/theme-solarized_light',
            );
          /* harmony import */ var ace_builds_src_noconflict_theme_solarized_light__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              ace_builds_src_noconflict_theme_solarized_light__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/JsonView/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_8__,
            );

          // ace-builds

          var JsonView = /*#__PURE__*/ (function (_React$PureComponent) {
            function JsonView(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (newJsonData) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                if (newJsonData) {
                  updateFormValueData(keyRoute, newJsonData); // 更新数值
                }
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              JsonView,
              _React$PureComponent,
            );
            var _proto = JsonView.prototype;
            _proto.render = function render() {
              var _ref2 = this.props.jsonStore || {},
                getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute;
              var _this$props2 = this.props,
                nodeKey = _this$props2.nodeKey,
                keyRoute = _this$props2.keyRoute,
                targetJsonSchema = _this$props2.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);

              // 格式化JSON数据
              curJsonData =
                curJsonData !== undefined
                  ? curJsonData
                  : targetJsonSchema.default || '{}';
              // 判断当前jsonData是否是对象类型
              if (
                (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_7__.isObject)(
                  curJsonData,
                ) ||
                (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_7__.isArray)(
                  curJsonData,
                )
              ) {
                curJsonData = JSON.stringify(curJsonData, null, 2);
              }
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className: 'json-view-box',
                  id: nodeKey,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'readOnly-btn',
                  },
                  '[\u53EA\u8BFB]',
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  react_ace__WEBPACK_IMPORTED_MODULE_4___default(),
                  {
                    id: 'json_area_ace',
                    value: curJsonData,
                    className: 'json-view-ace',
                    mode: 'json',
                    theme: 'solarized_light',
                    name: 'JSON_CODE_EDIT',
                    fontSize: 14,
                    showPrintMargin: true,
                    showGutter: true,
                    highlightActiveLine: true,
                    readOnly: true,
                    minLines: 5,
                    maxLines: 33,
                    width: '100%',
                    setOptions: {
                      useWorker: false,
                      showLineNumbers: true,
                      tabSize: 2,
                    },
                  },
                ),
              );
            };
            return JsonView;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          JsonView.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_3___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })((0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(JsonView));

          /***/
        },

      /***/ './src/renderers/NumberFormSchema/index.js':
        /*!*************************************************!*\
  !*** ./src/renderers/NumberFormSchema/index.js ***!
  \*************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/NumberFormSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_10__,
            );

          var NumberFormSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function NumberFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (newVal) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var targetJsonSchema = _this.props.targetJsonSchema;
                if (newVal < targetJsonSchema.minimum) {
                  antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                    '\u5C0F\u4E8E\u8BBE\u5B9A\u7684\u6700\u5C0F\u6570\u503C' +
                      targetJsonSchema.minimum +
                      '\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u3002',
                  );
                } else if (newVal > targetJsonSchema.maximum) {
                  antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                    '\u8D85\u8FC7\u8BBE\u5B9A\u7684\u6700\u5927\u6570\u503C' +
                      targetJsonSchema.maximum +
                      '\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u3002',
                  );
                } else {
                  updateFormValueData(keyRoute, newVal); // 更新数值
                }
              };
              /** 数值加减按钮事件处理器 */
              _this.numberChange = function (type, curValue) {
                var curNum = 0;
                if (curValue) {
                  curNum = curValue;
                }
                if (type === 'plus') {
                  curNum += 1;
                } else if (type === 'minus') {
                  curNum -= 1;
                }
                _this.handleValueChange(curNum);
                // 更新渲染时间戳，以便number能重新渲染
                _this.setState({
                  renderTime: new Date().getTime(),
                });
              };
              _this.state = {
                renderTime: new Date().getTime(),
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              NumberFormSchema,
              _React$PureComponent,
            );
            var _proto = NumberFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var renderTime = this.state.renderTime;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_9__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  key: nodeKey + '-' + renderTime,
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className: 'input-number-wrap',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'number-btn minus',
                          title: '\u70B9\u51FB\u51CF1',
                          onClick: function onClick() {
                            _this2.numberChange(
                              'minus',
                              (0,
                              $utils_index__WEBPACK_IMPORTED_MODULE_9__.hasProperties)(
                                curJsonData,
                              )
                                ? curJsonData
                                : targetJsonSchema.default,
                            );
                          },
                        },
                        '-',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_5__.InputNumber,
                        {
                          className: 'number-cont',
                          style: {
                            display: 'inline-block',
                          },
                          disabled: readOnly,
                          required: isRequired,
                          placeholder:
                            targetJsonSchema.placeholder ||
                            '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                          min: targetJsonSchema.minimum || 0,
                          max: targetJsonSchema.maximum || 1000000,
                          defaultValue: (0,
                          $utils_index__WEBPACK_IMPORTED_MODULE_9__.hasProperties)(
                            curJsonData,
                          )
                            ? curJsonData
                            : targetJsonSchema.default,
                          onChange: this.handleValueChange,
                        },
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'number-btn plus',
                          title: '\u70B9\u51FB\u52A01',
                          onClick: function onClick() {
                            _this2.numberChange(
                              'plus',
                              (0,
                              $utils_index__WEBPACK_IMPORTED_MODULE_9__.hasProperties)(
                                curJsonData,
                              )
                                ? curJsonData
                                : targetJsonSchema.default,
                            );
                          },
                        },
                        '+',
                      ),
                    ),
                  ),
                ),
              );
            };
            return NumberFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          NumberFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              NumberFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/ObjectSchema/index.js':
        /*!*********************************************!*\
  !*** ./src/renderers/ObjectSchema/index.js ***!
  \*********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $components_MappingRender__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $components/MappingRender */ './src/components/MappingRender.js',
            );
          /* harmony import */ var $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $renderers/JsonView/index */ './src/renderers/JsonView/index.js',
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_webCache__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! $utils/webCache */ './src/utils/webCache.js',
            );
          /* harmony import */ var $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! $assets/img/code.svg */ './src/assets/img/code.svg',
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/ObjectSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_14__,
            );

          var ObjectSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function ObjectSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              _this.state = {
                jsonView: false,
                // 是否显示code模式
                isClosed: false, // 是否为关闭状态，默认是开启状态
              };
              _this.collapseChange = _this.collapseChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              ObjectSchema,
              _React$PureComponent,
            );
            var _proto = ObjectSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_10__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_10__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.collapseChange = function collapseChange(event) {
              var keyRoute = this.props.keyRoute;
              var isClosed = this.state.isClosed;
              this.setState({
                isClosed: !isClosed,
              });
              event.preventDefault();
              event.stopPropagation();

              // 缓存当前折叠状态
              (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_11__.saveJSONEditorCache)(
                keyRoute,
                !isClosed,
              );
            };
            _proto.render = function render() {
              var _targetJsonSchema$sho,
                _targetJsonSchema$box,
                _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _this$props2 = this.props,
                indexRoute = _this$props2.indexRoute,
                jsonKey = _this$props2.jsonKey,
                nodeKey = _this$props2.nodeKey,
                keyRoute = _this$props2.keyRoute,
                targetJsonSchema = _this$props2.targetJsonSchema,
                isArrayItem = _this$props2.isArrayItem,
                arrIndex = _this$props2.arrIndex,
                isStructuredSchema = _this$props2.isStructuredSchema;
              var _this$state = this.state,
                jsonView = _this$state.jsonView,
                _isClosed = _this$state.isClosed;
              // 判断是否结构化Schema，如果是则不显示Title，避免重复的title
              var isStructured = isStructuredSchema;
              // 是否显示源码切换按钮
              var showCodeViewBtn =
                (_targetJsonSchema$sho = targetJsonSchema.showCodeViewBtn) !=
                null
                  ? _targetJsonSchema$sho
                  : true;

              // 获取前端缓存中的折叠数据
              var isClosed = _isClosed;
              var collapseCacheData = (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_11__.getJSONEditorCache)(
                keyRoute,
              );
              if (collapseCacheData !== undefined) {
                isClosed = collapseCacheData;
              }
              var boxTitle =
                (_targetJsonSchema$box = targetJsonSchema.boxTitle) != null
                  ? _targetJsonSchema$box
                  : '对象配置';
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_13__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'object-schema-warp wide-screen-element-warp'
                      : 'object-schema-warp mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                !isStructured &&
                  !isArrayItem &&
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    'div',
                    {
                      className: 'element-title',
                      style: titleStyle,
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title:
                          pageScreen === 'wideScreen'
                            ? targetJsonSchema.description
                            : '',
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'span',
                        {
                          className: 'title-text',
                          title: targetJsonSchema.title,
                        },
                        targetJsonSchema.title,
                        targetJsonSchema.showKey &&
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'span',
                            null,
                            '\uFF08',
                            (0,
                            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                              jsonKey,
                              {
                                length: 15,
                              },
                            ),
                            '\uFF09',
                          ),
                      ),
                    ),
                    pageScreen === 'mobileScreen' &&
                      targetJsonSchema.description &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                        {
                          title: targetJsonSchema.description,
                          placement: 'top',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                          {
                            className: 'info-icon',
                          },
                        ),
                      ),
                  ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  'div',
                  {
                    className: 'element-title-card-warp content-item',
                    style: contentStyle,
                  },
                  !isStructured &&
                    !isArrayItem &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      'div',
                      {
                        className: 'element-title',
                        onClick: this.collapseChange,
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        'span',
                        {
                          className: 'title-text',
                        },
                        boxTitle,
                        '\xA0',
                      ),
                      isClosed
                        ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.RightOutlined,
                            {
                              className: 'close-operate-btn',
                            },
                          )
                        : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.DownOutlined,
                            {
                              className: 'close-operate-btn',
                            },
                          ),
                      showCodeViewBtn &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          'div',
                          {
                            className: 'display-source-btn',
                            onClick: function onClick(event) {
                              _this2.setState({
                                jsonView: !jsonView,
                              });
                              event.preventDefault();
                              event.stopPropagation();
                            },
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                            {
                              title: jsonView ? '关闭源码模式' : '开启源码模式',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              $assets_img_code_svg__WEBPACK_IMPORTED_MODULE_12__[
                                'default'
                              ],
                              {
                                className: jsonView
                                  ? 'info-icon active'
                                  : 'info-icon',
                              },
                            ),
                          ),
                        ),
                    ),
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    'div',
                    {
                      className:
                        'content-item ' +
                        (!isStructured && !isArrayItem
                          ? 'object-content'
                          : '') +
                        ' ' +
                        (jsonView ? 'json-view-array' : '') +
                        ' ' +
                        (isClosed ? 'closed' : ''),
                    },
                    !jsonView &&
                      targetJsonSchema.propertyOrder &&
                      targetJsonSchema.propertyOrder.map(function (key, index) {
                        /** 1. 获取当前元素的路径值 */
                        var currentIndexRoute = indexRoute
                          ? indexRoute + '-' + index
                          : '' + index;
                        var currentKeyRoute = keyRoute
                          ? keyRoute + '-' + key
                          : '' + key; // key路径值，后续用于从jsonData中提取当前元素的数值
                        /** 2. 获取当前元素的key值 */
                        var currentJsonKey = key;
                        /** 3. 获取当前元素的json结构对象 */
                        var currentSchemaData =
                          targetJsonSchema.properties[currentJsonKey];
                        /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                        var curType = currentSchemaData.type;
                        /** 5. 获取当前元素的id，用于做唯一标识 */
                        var childNodeKey =
                          nodeKey + '-' + curType + '-' + currentJsonKey;
                        return (0,
                        $components_MappingRender__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ])({
                          parentType: curType,
                          jsonKey: currentJsonKey,
                          indexRoute: currentIndexRoute,
                          keyRoute: currentKeyRoute,
                          nodeKey: childNodeKey,
                          targetJsonSchema: currentSchemaData,
                          schemaStore: schemaStore,
                          jsonStore: jsonStore,
                        });
                      }),
                    jsonView &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        $renderers_JsonView_index__WEBPACK_IMPORTED_MODULE_9__[
                          'default'
                        ],
                        this.props,
                      ),
                  ),
                ),
              );
            };
            return ObjectSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent);
          ObjectSchema.propTypes = {
            isArrayItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 如果是数组项，title会进行特殊显示
            arrIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 当前数组项
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            isStructuredSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(ObjectSchema),
          );

          /***/
        },

      /***/ './src/renderers/PaddingAndMarginSchema/index.js':
        /*!*******************************************************!*\
  !*** ./src/renderers/PaddingAndMarginSchema/index.js ***!
  \*******************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/PaddingAndMarginSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_9__,
            );

          var Option = antd__WEBPACK_IMPORTED_MODULE_6__.Select.Option;

          var PaddingAndMarginSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function PaddingAndMarginSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 记录box-style的数值（无需实时响应）
              _this.boxStyle = {
                margin: {
                  top: '',
                  right: '',
                  bottom: '',
                  left: '',
                },
                padding: {
                  top: '',
                  right: '',
                  bottom: '',
                  left: '',
                },
                quantity: 'px',
              };
              /** 初始化boxStyle的数值 */
              _this.initBoxStyle = function () {
                var jsonStore = _this.props.jsonStore;
                var _ref = jsonStore || {},
                  getJSONDataByKeyRoute = _ref.getJSONDataByKeyRoute;
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  targetJsonSchema = _this$props.targetJsonSchema;
                // 从jsonData中获取对应的数值
                var curJsonData = getJSONDataByKeyRoute(keyRoute);
                var marginSchema = targetJsonSchema.properties['margin'];
                var paddingSchema = targetJsonSchema.properties['padding'];
                var quantitySchema = targetJsonSchema.properties['quantity'];
                var quantity = curJsonData.quantity || quantitySchema.default; // 获取数值单位
                var marginValue = curJsonData.margin || marginSchema.default;
                var paddingValue = curJsonData.padding || paddingSchema.default;
                marginValue = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isNumber)(
                  marginValue,
                )
                  ? marginValue.toString()
                  : marginValue || 'auto';
                paddingValue = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isNumber)(
                  paddingValue,
                )
                  ? paddingValue.toString()
                  : paddingValue || 'auto';

                // 重置数值
                _this.boxStyle.quantity = quantity;
                var marginValueArr = marginValue.split(' ');
                _this.boxStyle.margin.top = _this.getStyleValText(
                  marginValueArr[0],
                );
                _this.boxStyle.margin.right = _this.getStyleValText(
                  marginValueArr[1],
                  paddingValue,
                );
                _this.boxStyle.margin.bottom = _this.getStyleValText(
                  marginValueArr[2] || marginValueArr[0],
                );
                _this.boxStyle.margin.left = _this.getStyleValText(
                  marginValueArr[3] || marginValueArr[1],
                  paddingValue,
                );
                var paddingValueArr = paddingValue.split(' ');
                _this.boxStyle.padding.top = _this.getStyleValText(
                  paddingValueArr[0],
                );
                _this.boxStyle.padding.right = _this.getStyleValText(
                  paddingValueArr[1],
                  paddingValue,
                );
                _this.boxStyle.padding.bottom = _this.getStyleValText(
                  paddingValueArr[2] || paddingValueArr[0],
                );
                _this.boxStyle.padding.left = _this.getStyleValText(
                  paddingValueArr[3] || paddingValueArr[1],
                  paddingValue,
                );
              };
              _this.getStyleValText = function (valStr, defaultValue) {
                var curValue = 'auto';
                if (
                  valStr === 'auto' ||
                  valStr === 0 ||
                  valStr === '' ||
                  valStr === '0'
                ) {
                  curValue = valStr;
                } else if (/^\$/.test(valStr)) {
                  // 识别特殊字符串数值: 保留以 $ 开头的数值
                  curValue = valStr;
                } else if (valStr) {
                  curValue = parseInt(valStr);
                  curValue = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isNumber)(
                    curValue,
                  )
                    ? curValue
                    : 'auto';
                } else if (defaultValue !== undefined) {
                  curValue = defaultValue;
                }
                return curValue;
              };
              _this.getStyleVal = function (valStr) {
                var curValue = '';
                if (valStr === 'auto' || valStr === 0) {
                  curValue = valStr;
                } else if (/^\$/.test(valStr)) {
                  // 识别特殊字符串数值: 保留以 $ 开头的数值
                  return valStr;
                } else if (valStr === '') {
                  curValue = 'auto';
                } else if (valStr) {
                  curValue = parseInt(valStr);
                  curValue = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isNumber)(
                    curValue,
                  )
                    ? curValue
                    : 'auto';
                }
                if (curValue === 'auto' || curValue === 0) {
                  return curValue;
                }
                return '' + curValue + _this.boxStyle.quantity;
              };
              /** 设置布局容器的盒子模型数值 */
              _this.setLayoutBoxStyle = function (
                newVal,
                layoutStyleLock,
                styleKey,
                propKey,
              ) {
                if (layoutStyleLock) {
                  _this.linkLayoutBoxStyle(newVal, styleKey);
                } else {
                  var curValue = _this.getStyleValText(newVal);
                  if (curValue !== undefined) {
                    _this.boxStyle[styleKey][propKey] = curValue;
                  } else {
                    _this.boxStyle[styleKey][propKey] = '';
                  }
                  _this.updateBoxStyleState();
                }
              };
              /** 布局容器的盒子模型数值联动设值 */
              _this.linkLayoutBoxStyle = function (newVal, styleKey) {
                var curValue = _this.getStyleValText(newVal);
                if (curValue !== undefined) {
                  _this.boxStyle[styleKey]['top'] = curValue;
                  _this.boxStyle[styleKey]['right'] = curValue;
                  _this.boxStyle[styleKey]['bottom'] = curValue;
                  _this.boxStyle[styleKey]['left'] = curValue;
                } else {
                  _this.boxStyle[styleKey]['top'] = '';
                  _this.boxStyle[styleKey]['right'] = '';
                  _this.boxStyle[styleKey]['bottom'] = '';
                  _this.boxStyle[styleKey]['left'] = '';
                }
                _this.updateBoxStyleState();
              };
              /** 数值变动事件处理器 */
              _this.updateBoxStyleState = function () {
                var _this$props2 = _this.props,
                  keyRoute = _this$props2.keyRoute,
                  jsonStore = _this$props2.jsonStore;
                var _ref2 = jsonStore || {},
                  updateFormValueData = _ref2.updateFormValueData;
                var renderAction = _this.state.renderAction;
                /** 获取布局容器的盒子模型数值 */
                var curBoxValue = {
                  margin: _this.getMarginValue(),
                  padding: _this.getPaddingValue(),
                  quantity: _this.boxStyle.quantity,
                };
                updateFormValueData(keyRoute, curBoxValue); // 更新单位数值
                _this.setState({
                  renderAction: !renderAction,
                });
              };
              _this.getSelectAfter = function (curJsonData) {
                var targetJsonSchema = _this.props.targetJsonSchema;
                var quantitySchema = targetJsonSchema.properties['quantity'];
                var quantity = curJsonData.quantity || quantitySchema.default;

                /*
      // 暂时不支持单位切换
      const selectAfter = (
        <Select defaultValue={quantity} onChange={this.quantityChange}>
          {quantitySchema.options &&
            quantitySchema.options.length > 0 &&
            quantitySchema.options.map((option) => (
              <Option value={option.value}>{option.label}</Option>
            ))}
        </Select>
      );
      */
                var selectAfter =
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'span',
                    null,
                    quantity,
                  );
                return selectAfter;
              };
              _this.quantityChange = function (newVal) {
                var _this$props3 = _this.props,
                  keyRoute = _this$props3.keyRoute,
                  jsonStore = _this$props3.jsonStore;
                var _ref3 = jsonStore || {},
                  updateFormValueData = _ref3.updateFormValueData;
                var curBoxValue = {
                  margin: _this.getMarginValue(),
                  padding: _this.getPaddingValue(),
                  quantity: newVal,
                };
                updateFormValueData(keyRoute, curBoxValue);
              };
              _this.setType = function (newVal) {
                _this.setState({
                  type: newVal,
                });
              };
              _this.getMarginValue = function () {
                return (
                  _this.getStyleVal(_this.boxStyle.margin.top) +
                  ' ' +
                  _this.getStyleVal(_this.boxStyle.margin.right) +
                  ' ' +
                  _this.getStyleVal(_this.boxStyle.margin.bottom) +
                  ' ' +
                  _this.getStyleVal(_this.boxStyle.margin.left)
                );
              };
              _this.getPaddingValue = function () {
                return (
                  _this.getStyleVal(_this.boxStyle.padding.top) +
                  ' ' +
                  _this.getStyleVal(_this.boxStyle.padding.right) +
                  ' ' +
                  _this.getStyleVal(_this.boxStyle.padding.bottom) +
                  ' ' +
                  _this.getStyleVal(_this.boxStyle.padding.left)
                );
              };
              _this.state = {
                type: 'all',
                // 设置类型，支持 自定义设值（custom）、统一设值（all）
                renderAction: false, // 用于主动触发render的临时变量
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.updateBoxStyleState = _this.updateBoxStyleState.bind(_this);
              _this.initBoxStyle = _this.initBoxStyle.bind(_this);
              _this.getStyleValText = _this.getStyleValText.bind(_this);
              _this.getSelectAfter = _this.getSelectAfter.bind(_this);
              _this.setLayoutBoxStyle = _this.setLayoutBoxStyle.bind(_this);
              _this.linkLayoutBoxStyle = _this.linkLayoutBoxStyle.bind(_this);
              _this.getSelectAfter = _this.getSelectAfter.bind(_this);
              _this.quantityChange = _this.quantityChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              PaddingAndMarginSchema,
              _React$PureComponent,
            );
            var _proto = PaddingAndMarginSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              this.initBoxStyle();
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                this.initBoxStyle();
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props4 = this.props,
                nodeKey = _this$props4.nodeKey,
                jsonKey = _this$props4.jsonKey,
                targetJsonSchema = _this$props4.targetJsonSchema,
                keyRoute = _this$props4.keyRoute;
              var _this$props5 = this.props,
                schemaStore = _this$props5.schemaStore,
                jsonStore = _this$props5.jsonStore;
              var _ref4 = schemaStore || {},
                pageScreen = _ref4.pageScreen;
              var _ref5 = jsonStore || {},
                getJSONDataByKeyRoute = _ref5.getJSONDataByKeyRoute;
              var _this$state = this.state,
                renderAction = _this$state.renderAction,
                type = _this$state.type;
              // const readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）

              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp') +
                    ' ' +
                    (renderAction ? 'render-mark' : ''),
                  id: nodeKey,
                  key: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item Style-PaddingAndMargin',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'Style-PaddingAndMargin-inner',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className:
                          'Style-PaddingAndMargin-label Style-PaddingAndMargin-label--custom',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            '\n                  Style-PaddingAndMargin-label-all\n                  ' +
                            (type === 'all'
                              ? 'Style-PaddingAndMargin-label-all--active'
                              : ''),
                          onClick: function onClick() {
                            return _this2.setType('all');
                          },
                        },
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            '\n                Style-PaddingAndMargin-label-custom\n                ' +
                            (type === 'custom'
                              ? 'Style-PaddingAndMargin-label-custom--active'
                              : ''),
                          onClick: function onClick() {
                            return _this2.setType('custom');
                          },
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          null,
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          null,
                        ),
                      ),
                    ),
                    type === 'all' &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        null,
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'Style-PaddingAndMargin-input',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                            {
                              name: 'layoutMargin',
                              addonAfter: this.getSelectAfter(curJsonData),
                              className: 'layout-item-margin',
                              size: 'small',
                              defaultValue: this.boxStyle['margin'].top,
                              onChange: function onChange(event) {
                                var newVal = event.target.value;
                                _this2.setLayoutBoxStyle(
                                  newVal,
                                  true,
                                  'margin',
                                );
                              },
                            },
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'Style-PaddingAndMargin-input-label',
                            },
                            '\u5916\u8FB9\u8DDD',
                          ),
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'Style-PaddingAndMargin-input',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                            {
                              name: 'layoutPadding',
                              addonAfter: this.getSelectAfter(curJsonData),
                              className: 'layout-item-padding',
                              size: 'small',
                              defaultValue: this.boxStyle['padding'].top,
                              onChange: function onChange(event) {
                                var newVal = event.target.value;
                                _this2.setLayoutBoxStyle(
                                  newVal,
                                  true,
                                  'padding',
                                );
                              },
                            },
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            {
                              className: 'Style-PaddingAndMargin-input-label',
                            },
                            '\u5185\u8FB9\u8DDD',
                          ),
                        ),
                      ),
                  ),
                  type !== 'all' &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className:
                          'Style-PaddingAndMargin-custom Style-PaddingAndMargin-custom--padding Style-PaddingAndMargin-custom--margin',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutPaddingTop',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-padding',
                                size: 'small',
                                defaultValue: _this2.boxStyle['padding'].top,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'padding',
                                    'top',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingTop',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['padding'].top) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutPaddingTop',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-padding',
                                size: 'small',
                                defaultValue: _this2.boxStyle['padding'].right,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'padding',
                                    'right',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingRight',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['padding'].right) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutPaddingBottom',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-padding',
                                size: 'small',
                                defaultValue: _this2.boxStyle['padding'].bottom,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'padding',
                                    'bottom',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingBottom',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['padding'].bottom) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutPaddingLeft',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-padding',
                                size: 'small',
                                defaultValue: _this2.boxStyle['padding'].left,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'padding',
                                    'left',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-paddingLeft',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['padding'].left) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutMarginTop',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-margin',
                                size: 'small',
                                defaultValue: _this2.boxStyle['margin'].top,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'margin',
                                    'top',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginTop',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['margin'].top) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutMarginRight',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-margin',
                                size: 'small',
                                defaultValue: _this2.boxStyle['margin'].right,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'margin',
                                    'right',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginRight',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['margin'].right) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutMarginBottom',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-margin',
                                size: 'small',
                                defaultValue: _this2.boxStyle['margin'].bottom,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'margin',
                                    'bottom',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginBottom',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['margin'].bottom) ||
                              '-',
                          ),
                        ),
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.Popover,
                        {
                          content: function content() {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                              {
                                name: 'layoutMarginLeft',
                                addonAfter: _this2.getSelectAfter(curJsonData),
                                className: 'layout-item-margin',
                                size: 'small',
                                defaultValue: _this2.boxStyle['margin'].left,
                                onChange: function onChange(event) {
                                  var newVal = event.target.value;
                                  _this2.setLayoutBoxStyle(
                                    newVal,
                                    false,
                                    'margin',
                                    'left',
                                  );
                                },
                              },
                            );
                          },
                          title: '',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className:
                              'Style-PaddingAndMargin-custom-marginLeft',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'div',
                            null,
                            this.getStyleVal(this.boxStyle['margin'].left) ||
                              '-',
                          ),
                        ),
                      ),
                    ),
                ),
              );
            };
            return PaddingAndMarginSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          PaddingAndMarginSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              PaddingAndMarginSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/QuantitySchema/index.js':
        /*!***********************************************!*\
  !*** ./src/renderers/QuantitySchema/index.js ***!
  \***********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var QuantitySchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function QuantitySchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var value = event.target.value;
                var curKeyRoute = keyRoute ? keyRoute + '-unit' : 'unit';
                updateFormValueData(curKeyRoute, Number(value)); // 更新单位数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              QuantitySchema,
              _React$PureComponent,
            );
            var _proto = QuantitySchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              /** 获取quantity中的数值对象（默认第一个就是数值对象） */
              var unitJsonSchema = targetJsonSchema.properties['unit'];
              var curQuantity = curJsonData.quantity;
              var unitSuffix =
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'span',
                  null,
                  curQuantity === 'percent' ? '%' : curQuantity,
                );
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_9__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.InputNumber,
                      {
                        style: {
                          display: 'inline-block',
                          width: '120px',
                        },
                        addonAfter: unitSuffix,
                        disabled: readOnly,
                        placeholder:
                          unitJsonSchema.placeholder ||
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + unitJsonSchema.title ||
                          0,
                        defaultValue:
                          curJsonData.unit || unitJsonSchema.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return QuantitySchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          QuantitySchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              QuantitySchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/RadioSchema/index.js':
        /*!********************************************!*\
  !*** ./src/renderers/RadioSchema/index.js ***!
  \********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var RadioSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function RadioSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var value = event.target.value;
                updateFormValueData(keyRoute, value); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              RadioSchema,
              _React$PureComponent,
            );
            var _proto = RadioSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var options = targetJsonSchema.options;
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Radio.Group,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        onChange: this.handleValueChange,
                        defaultValue:
                          curJsonData != null
                            ? curJsonData
                            : targetJsonSchema.default,
                        disabled: targetJsonSchema.readOnly,
                      },
                      options &&
                        options.length > 0 &&
                        options.map(function (item, optionIndex) {
                          var optionLabel = item.label || item.name;
                          var optionNodeKey = nodeKey + '-radio-' + optionLabel;
                          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Radio,
                            {
                              value: item.value,
                              key: optionNodeKey,
                            },
                            item.label,
                          );
                        }),
                    ),
                  ),
                ),
              );
            };
            return RadioSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          RadioSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(RadioSchema),
          );

          /***/
        },

      /***/ './src/renderers/RemoteDynamicDataSchema/index.js':
        /*!********************************************************!*\
  !*** ./src/renderers/RemoteDynamicDataSchema/index.js ***!
  \********************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! $renderers/CodeAreaFormSchema/index */ './src/renderers/CodeAreaFormSchema/index.js',
            );
          /* harmony import */ var $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! $renderers/InputFormSchema/index */ './src/renderers/InputFormSchema/index.js',
            );
          /* harmony import */ var $renderers_TreeSelectFromSchema_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $renderers/TreeSelectFromSchema/index */ './src/renderers/TreeSelectFromSchema/index.js',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_9___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_9__,
            );
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/RemoteDynamicDataSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_12___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_12__,
            );

          var Option = antd__WEBPACK_IMPORTED_MODULE_5__.Select.Option;

          var RemoteDynamicDataSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function RemoteDynamicDataSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (curKey, value) {
                var curConfigData = Object.assign(
                  {},
                  _this.props.curConfigData,
                );
                curConfigData[curKey] = value;
                _this.props.configDataChange(curConfigData); // 更新数值
              };
              _this.paramsValueChange = function (curKey, value) {
                var curConfigData = Object.assign(
                  {},
                  _this.props.curConfigData,
                );
                if (curConfigData.body && curConfigData.body[curKey]) {
                  curConfigData.body[curKey].value = value;
                }
                _this.props.configDataChange(curConfigData); // 更新数值
              };
              _this.dynamicDataChange = function (dynamicDataName) {
                var curDynamicData = (0,
                $utils_index__WEBPACK_IMPORTED_MODULE_11__.objClone)(
                  (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                    _this.props.dynamicDataObj[dynamicDataName],
                  ),
                );
                if (curDynamicData) {
                  // 从jsonData中获取对应的数值
                  var newCurDynamicData = {
                    id: curDynamicData.id,
                    url: curDynamicData.url,
                    method: curDynamicData.method,
                    headers: curDynamicData.headers,
                    options: curDynamicData.options,
                    dataName: curDynamicData.name,
                    body: curDynamicData.body,
                    data: curDynamicData.data,
                    filter: curDynamicData.filter,
                  };
                  _this.props.configDataChange(newCurDynamicData); // 更新整个config数值
                }
              };
              _this.dataRouteChange = function (newDataRoute) {
                var curConfigData = Object.assign(
                  {},
                  _this.props.curConfigData,
                );
                curConfigData['dataRoute'] = newDataRoute;
                var dataPath = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_9__.dataRoute2dataPath)(
                  newDataRoute,
                );
                curConfigData['filter'] = 'return ' + dataPath + ';';
                _this.props.configDataChange(curConfigData); // 更新数值
              };
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              RemoteDynamicDataSchema,
              _React$PureComponent,
            );
            var _proto = RemoteDynamicDataSchema.prototype;
            _proto.render = function render() {
              var _this2 = this;
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _ref2 = jsonStore || {},
                getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute,
                dynamicDataApiScopeList = _ref2.dynamicDataApiScopeList,
                dynamicDataList = _ref2.dynamicDataList,
                dynamicDataObj = _ref2.dynamicDataObj;
              var _this$props2 = this.props,
                curConfigData = _this$props2.curConfigData,
                nodeKey = _this$props2.nodeKey,
                keyRoute = _this$props2.keyRoute;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
              var dataName = curConfigData.dataName; // 数据源名称
              var dataRoute = curConfigData.dataRoute; // 接口数据路径
              var apiParams = curConfigData.body || {}; // 动态数据/请求参数
              if (
                !(0, $utils_typeof__WEBPACK_IMPORTED_MODULE_10__.isObject)(
                  apiParams,
                ) &&
                apiParams !== ''
              ) {
                try {
                  apiParams = JSON.parse(apiParams);
                } catch (err) {
                  console.log('当前数据源的请求参数格式异常');
                  apiParams = {};
                }
              }
              var curDynamicData = dynamicDataObj[dataName] || {}; // 根据dataName获取最新的数据源对象

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  curConfigData.title + ' (\u63A5\u53E3\u4E0B\u53D1\uFF09',
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item object-content',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'remote-dynamic-data-schema',
                      key: nodeKey + '-remote-dynamic-data',
                      id: nodeKey + '-remote-dynamic-data',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'div',
                      {
                        className:
                          pageScreen === 'wideScreen'
                            ? 'wide-screen-element-warp'
                            : 'mobile-screen-element-warp',
                        key: nodeKey + '-' + dataName,
                        id: nodeKey + '-' + dataName,
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'element-title',
                        },
                        '\u6570\u636E\u6E90\u5217\u8868',
                      ),
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className: 'content-item',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'form-item-box',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            antd__WEBPACK_IMPORTED_MODULE_5__.Select,
                            {
                              className: 'dynamic-data-select',
                              defaultValue: dataName,
                              onSelect: this.dynamicDataChange,
                            },
                            dynamicDataList &&
                              (0,
                              $utils_typeof__WEBPACK_IMPORTED_MODULE_10__.isArray)(
                                dynamicDataList,
                              ) &&
                              dynamicDataList.map(function (dynamicData) {
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                                  Option,
                                  {
                                    value: dynamicData.name,
                                    key: dynamicData.id,
                                  },
                                  dynamicData.title,
                                );
                              }),
                          ),
                        ),
                      ),
                    ),
                    dataName &&
                      apiParams &&
                      Object.keys(apiParams).length > 0 &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            (pageScreen === 'wideScreen'
                              ? 'wide-screen-element-warp'
                              : 'mobile-screen-element-warp') +
                            ' element-title-card-warp',
                          key: nodeKey + '-' + dataName + '-params',
                          id: nodeKey + '-' + dataName + '-params',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'element-title',
                          },
                          '\u8BF7\u6C42\u53C2\u6570\u914D\u7F6E',
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'content-item object-content',
                          },
                          Object.keys(apiParams).map(function (paramKey) {
                            var paramItam = apiParams[paramKey];
                            paramItam.readOnly =
                              paramItam.scope && paramItam.scope === 'static'
                                ? true
                                : false;
                            var curNodeKey = nodeKey + '-body-' + paramKey;
                            var scopeTitle =
                              dynamicDataApiScopeList[paramItam.scope];
                            if (
                              scopeTitle &&
                              paramItam.title.indexOf(scopeTitle) < 0
                            ) {
                              paramItam.title =
                                paramItam.title +
                                '\uFF08' +
                                scopeTitle +
                                '\uFF09';
                            }
                            paramItam.default = paramItam.value; // 将当前参数值保存在schema的default，以便展示
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                              $renderers_InputFormSchema_index__WEBPACK_IMPORTED_MODULE_7__[
                                'default'
                              ],
                              {
                                pageScreen: pageScreen,
                                // 默认使用宽屏模式
                                jsonKey: paramKey,
                                nodeKey: curNodeKey,
                                targetJsonSchema: paramItam,
                                onChange: function onChange(newVal) {
                                  _this2.paramsValueChange(paramKey, newVal);
                                },
                                key: curNodeKey,
                              },
                            );
                          }),
                        ),
                      ),
                    dataName &&
                      apiParams &&
                      Object.keys(apiParams).length === 0 &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        'div',
                        {
                          className:
                            pageScreen === 'wideScreen'
                              ? 'wide-screen-element-warp'
                              : 'mobile-screen-element-warp',
                          key: nodeKey + '-' + dataName + '-empty',
                          id: nodeKey + '-' + dataName + '-empty',
                        },
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'element-title',
                          },
                          '\u8BF7\u6C42\u53C2\u6570\u914D\u7F6E',
                        ),
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'div',
                          {
                            className: 'content-item',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            'span',
                            {
                              className: 'warning-text',
                            },
                            '\u65E0\u53EF\u914D\u7F6E\u7684\u8BF7\u6C42\u53C2\u6570',
                          ),
                        ),
                      ),
                    dataName &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        $renderers_TreeSelectFromSchema_index__WEBPACK_IMPORTED_MODULE_8__[
                          'default'
                        ],
                        {
                          nodeKey: nodeKey + '-dataRoute',
                          mockData: curDynamicData.respMock,
                          dataRoute: dataRoute,
                          onChange: this.dataRouteChange,
                          key: nodeKey + '-dataRoute',
                        },
                      ),
                    dataName &&
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        $renderers_CodeAreaFormSchema_index__WEBPACK_IMPORTED_MODULE_6__[
                          'default'
                        ],
                        {
                          isReadOnly: true,
                          isIgnoreWarn: true,
                          // 当前主要使用方法体(非直接执行函数)
                          jsonKey: 'filter',
                          nodeKey:
                            nodeKey + '-config-params-filter-' + dataRoute,
                          keyRoute: keyRoute ? keyRoute + '-filter' : 'filter',
                          targetJsonSchema: {
                            title: '过滤器函数体',
                            default: 'return data;',
                          },
                          key: nodeKey + '-filter',
                        },
                      ),
                  ),
                ),
              );
            };
            return RemoteDynamicDataSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          RemoteDynamicDataSchema.propTypes = {
            pageScreen: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            curConfigData:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,
            configDataChange:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,
            dynamicDataList:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().array,
            dynamicDataObj:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,
            dynamicDataApiScopeList:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              RemoteDynamicDataSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/SelectSchema/index.js':
        /*!*********************************************!*\
  !*** ./src/renderers/SelectSchema/index.js ***!
  \*********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/SelectSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_10__,
            );

          var Option = antd__WEBPACK_IMPORTED_MODULE_6__.Select.Option;

          /**
           * select下拉选择类型
           */
          var SelectSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            // 记录options中对象类型的value

            function SelectSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.optionValue = {};
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (value) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var curValue = value;
                if (
                  (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isArray)(
                    value,
                  )
                ) {
                  var valueArray = [];
                  value.forEach(function (valItem) {
                    var _this$optionValue$val;
                    var valueStr = valItem;
                    if (
                      (0,
                      _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isObject)(
                        valueStr,
                      )
                    ) {
                      valueStr = JSON.stringify(valItem);
                      valueStr.replaceAll(' ', '');
                    }
                    valueArray.push(
                      (_this$optionValue$val = _this.optionValue[valueStr]) !=
                        null
                        ? _this$optionValue$val
                        : valItem,
                    );
                  });
                  curValue = valueArray;
                } else {
                  var _this$optionValue$val2;
                  curValue =
                    (_this$optionValue$val2 = _this.optionValue[value]) != null
                      ? _this$optionValue$val2
                      : value;
                }
                updateFormValueData(keyRoute, curValue); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              SelectSchema,
              _React$PureComponent,
            );
            var _proto = SelectSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _curJsonData,
                _targetJsonSchema$sho,
                _targetJsonSchema$def,
                _targetJsonSchema$all;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var options = targetJsonSchema.options;
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_9__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局

              var optionsFormat = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_9__.formatOptions)(
                (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(options),
              );
              options = optionsFormat.options;
              this.optionValue = optionsFormat.optionValue;
              if (
                (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isArray)(
                  curJsonData,
                )
              ) {
                var valueArray = [];
                curJsonData.forEach(function (valItem) {
                  var valueStr = valItem;
                  if (
                    (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isObject)(
                      valueStr,
                    )
                  ) {
                    valueStr = JSON.stringify(valItem);
                  }
                  valueArray.push(valueStr);
                });
                curJsonData = valueArray;
              }
              var curValue =
                (_curJsonData = curJsonData) != null
                  ? _curJsonData
                  : targetJsonSchema.default;
              if (
                (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isObject)(
                  curValue,
                )
              ) {
                curValue = JSON.stringify(curValue);
              }
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box select-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Select,
                      {
                        showSearch:
                          (_targetJsonSchema$sho =
                            targetJsonSchema.showSearch) != null
                            ? _targetJsonSchema$sho
                            : true,
                        mode: targetJsonSchema.multiple
                          ? 'multiple'
                          : undefined,
                        defaultActiveFirstOption:
                          (_targetJsonSchema$def =
                            targetJsonSchema.defaultActiveFirstOption) != null
                            ? _targetJsonSchema$def
                            : false, // 默认不选中第一条
                        style: {
                          display: 'inline-block',
                          minWidth: '120px',
                        },
                        onChange: this.handleValueChange,
                        defaultValue: curValue,
                        disabled: readOnly,
                        allowClear:
                          (_targetJsonSchema$all =
                            targetJsonSchema.allowClear) != null
                            ? _targetJsonSchema$all
                            : true,
                      },
                      options &&
                        options.length > 0 &&
                        options.map(function (item, optionIndex) {
                          var optionLabel = item.label || item.name;
                          var optionNodeKey =
                            nodeKey + '-select-' + optionLabel;
                          return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                            Option,
                            {
                              value: item.value,
                              key: optionNodeKey,
                            },
                            optionLabel,
                          );
                        }),
                    ),
                  ),
                ),
              );
            };
            return SelectSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          SelectSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(SelectSchema),
          );

          /***/
        },

      /***/ './src/renderers/SohuDataSourceSchema/index.js':
        /*!*****************************************************!*\
  !*** ./src/renderers/SohuDataSourceSchema/index.js ***!
  \*****************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $components_MappingRender__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! $components/MappingRender */ './src/components/MappingRender.js',
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_webCache__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! $utils/webCache */ './src/utils/webCache.js',
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var Panel = antd__WEBPACK_IMPORTED_MODULE_6__.Collapse.Panel;

          var SohuDataSourceSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function SohuDataSourceSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              _this.state = {
                jsonView: false,
                // 是否显示code模式
                isClosed: false, // 是否为关闭状态，默认是开启状态
              };
              _this.collapseChange = _this.collapseChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              SohuDataSourceSchema,
              _React$PureComponent,
            );
            var _proto = SohuDataSourceSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.collapseChange = function collapseChange(collapseData) {
              var keyRoute = this.props.keyRoute;
              // 缓存当前折叠状态
              (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_10__.saveJSONEditorCache)(
                keyRoute,
                collapseData,
              );
            };
            _proto.render = function render() {
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _ref2 = jsonStore || {},
                getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute,
                JSONEditorObj = _ref2.JSONEditorObj;
              var _this$props2 = this.props,
                indexRoute = _this$props2.indexRoute,
                jsonKey = _this$props2.jsonKey,
                nodeKey = _this$props2.nodeKey,
                keyRoute = _this$props2.keyRoute,
                targetJsonSchema = _this$props2.targetJsonSchema;

              // 获取前端缓存中的折叠数据
              var collapseData = ['mainConfig'];
              var collapseCacheData = (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_10__.getJSONEditorCache)(
                keyRoute,
              );
              if (
                collapseCacheData &&
                (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isArray)(
                  collapseCacheData,
                )
              ) {
                collapseData = collapseCacheData;
              }
              var curData = getJSONDataByKeyRoute(keyRoute) || {};
              curData = Object.assign({}, JSONEditorObj, curData);
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_11__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  'div',
                  {
                    className: 'array-schema-box',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Collapse,
                    {
                      defaultActiveKey: collapseData,
                      expandIconPosition: 'end',
                      bordered: false,
                      accordion: true,
                      onChange: this.collapseChange,
                    },
                    targetJsonSchema.propertyOrder.map(function (key, index) {
                      /** 1. 获取当前元素的路径值 */
                      var currentIndexRoute = indexRoute
                        ? indexRoute + '-' + index
                        : '' + index;
                      var currentKeyRoute = keyRoute
                        ? keyRoute + '-' + key
                        : '' + key; // key路径值，后续用于从jsonData中提取当前元素的数值
                      /** 2. 获取当前元素的key值 */
                      var currentJsonKey = key;
                      /** 3. 获取当前元素的json结构对象 */
                      var currentSchemaData = (0,
                      mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                        targetJsonSchema.properties[currentJsonKey],
                      );
                      /** 4. 判断是否是容器类型元素，如果是则禁止选中 */
                      var curType = currentSchemaData.type;
                      /** 5. 获取当前元素的id，用于做唯一标识 */
                      var childNodeKey =
                        nodeKey + '-' + curType + '-' + currentJsonKey;
                      if (
                        currentSchemaData.propertyOrder &&
                        currentSchemaData.propertyOrder.length > 0
                      ) {
                        if (
                          (0,
                          $utils_index__WEBPACK_IMPORTED_MODULE_11__.hasProperties)(
                            currentSchemaData.onShow,
                          ) &&
                          currentSchemaData.onShow !== '' &&
                          (((0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isBoolean)(
                            currentSchemaData.onShow,
                          ) &&
                            !currentSchemaData.onShow) ||
                            ((0,
                            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isString)(
                              currentSchemaData.onShow,
                            ) &&
                              !(0,
                              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.evalExpression)(
                                currentSchemaData.onShow,
                                curData,
                              )))
                        ) {
                          return;
                        }
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          Panel,
                          {
                            header: currentSchemaData.title,
                            key: currentJsonKey,
                          },
                          (0,
                          $components_MappingRender__WEBPACK_IMPORTED_MODULE_8__[
                            'default'
                          ])({
                            parentType: curType,
                            jsonKey: currentJsonKey,
                            indexRoute: currentIndexRoute,
                            keyRoute: currentKeyRoute,
                            nodeKey: childNodeKey,
                            targetJsonSchema: currentSchemaData,
                            isArrayItem: true,
                            schemaStore: schemaStore,
                            jsonStore: jsonStore,
                          }),
                        );
                      }
                    }),
                  ),
                ),
              );
            };
            return SohuDataSourceSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent);
          SohuDataSourceSchema.propTypes = {
            isArrayItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 如果是数组项，title会进行特殊显示
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            isStructuredSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              SohuDataSourceSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/SohuEventSchema/index.js':
        /*!************************************************!*\
  !*** ./src/renderers/SohuEventSchema/index.js ***!
  \************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_webCache__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! $utils/webCache */ './src/utils/webCache.js',
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/SohuEventSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_11__,
            );

          var Option = antd__WEBPACK_IMPORTED_MODULE_6__.Select.Option;
          var Panel = antd__WEBPACK_IMPORTED_MODULE_6__.Collapse.Panel;

          var SohuEventSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function SohuEventSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              _this.handleEventTitleChange = function (eventCode, inputEvent) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData,
                  getJSONDataByKeyRoute = _ref.getJSONDataByKeyRoute,
                  _options = _ref.options;
                var newTitle = inputEvent.target.value;
                var curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
                var eventData = Object.assign(
                  [],
                  (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                    curJsonData.event,
                  ),
                );
                var globalEventMap = Object.assign(
                  {},
                  (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                    curJsonData.globalEventMap,
                  ),
                );
                globalEventMap[eventCode] = newTitle;
                eventData.forEach(function (event) {
                  if (event.code === eventCode && event.desc !== undefined) {
                    event.desc = newTitle;
                  }
                });
                // const curKeyRout = `${keyRoute}-globalEventMap`;
                updateFormValueData(keyRoute, {
                  event: eventData,
                  globalEventMap: globalEventMap,
                });
              };
              _this.handleSelectEventChange = function (
                eventName,
                newEventCode,
              ) {
                var _this$props2 = _this.props,
                  keyRoute = _this$props2.keyRoute,
                  jsonStore = _this$props2.jsonStore;
                var _ref2 = jsonStore || {},
                  updateFormValueData = _ref2.updateFormValueData,
                  getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute,
                  _options = _ref2.options;
                var options = _options || {};
                var curKeyRout = keyRoute + '-event';
                var curJsonData = getJSONDataByKeyRoute(keyRoute) || {};
                var curEvent = [];
                if (curJsonData.event && curJsonData.event.length > 0) {
                  curEvent = (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                    curJsonData.event,
                  );
                } else if (
                  options.eventListenConfig &&
                  options.eventListenConfig.length > 0
                ) {
                  var eventListenConfig = options.eventListenConfig || [];
                  eventListenConfig.forEach(function (event) {
                    curEvent.push({
                      name: event.name,
                      listenName: event.code,
                    });
                  });
                }
                // 更新监听事件数据
                curEvent.forEach(function (event) {
                  if (event.name === eventName) {
                    event.listenName = newEventCode;
                  }
                });
                updateFormValueData(curKeyRout, curEvent); // 更新数值
              };
              _this.state = {
                jsonView: false,
                // 是否显示code模式
                isClosed: false, // 是否为关闭状态，默认是开启状态
              };
              _this.collapseChange = _this.collapseChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              SohuEventSchema,
              _React$PureComponent,
            );
            var _proto = SohuEventSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.collapseChange = function collapseChange(collapseData) {
              var keyRoute = this.props.keyRoute;
              // 缓存当前折叠状态
              (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_9__.saveJSONEditorCache)(
                keyRoute,
                collapseData,
              );
            };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props3 = this.props,
                schemaStore = _this$props3.schemaStore,
                jsonStore = _this$props3.jsonStore;
              var _ref3 = schemaStore || {},
                pageScreen = _ref3.pageScreen;
              var _ref4 = jsonStore || {},
                getJSONDataByKeyRoute = _ref4.getJSONDataByKeyRoute,
                _options = _ref4.options;
              var _this$props4 = this.props,
                indexRoute = _this$props4.indexRoute,
                jsonKey = _this$props4.jsonKey,
                nodeKey = _this$props4.nodeKey,
                keyRoute = _this$props4.keyRoute,
                targetJsonSchema = _this$props4.targetJsonSchema;
              var options = _options || {};
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var globalEventMap = curJsonData.globalEventMap || {}; // 全局事件列表
              var curEventList = curJsonData.event || []; // 当前组件事件列表

              // 从 options 获取相关数据
              var widgetType = options.widgetType; // 组件类型
              var eventEmitConfig = options.eventEmitConfig || [];
              var eventListenConfig = options.eventListenConfig || [];
              var allEmitEventList = options.allEmitEventList || [];
              var isEmpty =
                widgetType !== 'page' &&
                eventEmitConfig.length === 0 &&
                eventListenConfig.length === 0;

              // 获取前端缓存中的折叠数据
              var collapseData = [];
              var collapseCacheData = (0,
              $utils_webCache__WEBPACK_IMPORTED_MODULE_9__.getJSONEditorCache)(
                keyRoute,
              );
              if (
                collapseCacheData &&
                (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isArray)(
                  collapseCacheData,
                )
              ) {
                collapseData = collapseCacheData;
              }
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                'div',
                {
                  className:
                    '' +
                    (pageScreen === 'wideScreen'
                      ? 'sohu-event-container array-schema-box wide-screen-element-warp'
                      : 'sohu-event-container array-schema-box mobile-screen-element-warp'),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  antd__WEBPACK_IMPORTED_MODULE_6__.Collapse,
                  {
                    defaultActiveKey: collapseData,
                    expandIconPosition: 'right',
                    bordered: false,
                    onChange: this.collapseChange,
                    // accordion
                  },
                  eventListenConfig &&
                    eventListenConfig.length > 0 &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      Panel,
                      {
                        header: '监听的事件',
                        key: 'eventListenConfig',
                      },
                      eventListenConfig.map(function (event, eventIndex) {
                        var eventNodeKey =
                          nodeKey + '-eventListen-' + event.code;
                        var curEventCode =
                          (
                            curEventList.find(function (item) {
                              return item.name === event.name;
                            }) || {}
                          ).listenName || '';
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          'div',
                          {
                            key: eventNodeKey,
                            className: 'listen-event-content',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'title-text',
                            },
                            event.desc || event.name,
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'form-item-box',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              'span',
                              null,
                              '\u7ED1\u5B9A\u4E8B\u4EF6\uFF1A',
                            ),
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.Select,
                              {
                                showSearch: true,
                                style: {
                                  display: 'inline-block',
                                  minWidth: '120px',
                                },
                                onChange: function onChange(newEventCode) {
                                  return _this2.handleSelectEventChange(
                                    event.name,
                                    newEventCode,
                                  );
                                },
                                defaultValue: curEventCode,
                              },
                              allEmitEventList.map(function (event) {
                                var eventTitle =
                                  globalEventMap[event.code] ||
                                  event.desc ||
                                  event.name;
                                var optionNodeKey =
                                  nodeKey + '-allEmitEvent-' + eventTitle;
                                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                  Option,
                                  {
                                    value: event.code,
                                    key: optionNodeKey,
                                  },
                                  eventTitle,
                                );
                              }),
                            ),
                          ),
                        );
                      }),
                    ),
                  eventEmitConfig &&
                    eventEmitConfig.length > 0 &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      Panel,
                      {
                        header: '触发的事件',
                        key: 'eventEmitConfig',
                      },
                      eventEmitConfig.map(function (event, eventIndex) {
                        var eventNodeKey = nodeKey + '-eventEmit-' + event.code;
                        var eventTitle = event.desc || event.name;
                        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                          'div',
                          {
                            key: eventNodeKey,
                            className: 'object-content emit-event-content',
                          },
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'title-text',
                            },
                            '\u4E8B\u4EF6\u540D\u79F0',
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'form-item-box',
                            },
                            eventTitle,
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'title-text',
                            },
                            '\u4E8B\u4EF6code',
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'content-item',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              'div',
                              {
                                className: 'form-item-box',
                              },
                              (0,
                              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                                event.code,
                                {
                                  length: 30,
                                },
                              ),
                            ),
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'title-text',
                            },
                            '\u81EA\u5B9A\u4E49\u540D\u79F0',
                          ),
                          /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                            'div',
                            {
                              className: 'content-item',
                            },
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              'div',
                              {
                                className: 'form-item-box',
                              },
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                antd__WEBPACK_IMPORTED_MODULE_6__.Input,
                                {
                                  style: {
                                    display: 'inline-block',
                                  },
                                  defaultValue:
                                    globalEventMap[event.code] || eventTitle,
                                  onPressEnter: function onPressEnter(
                                    inputEvent,
                                  ) {
                                    return _this2.handleEventTitleChange(
                                      event.code,
                                      inputEvent,
                                    );
                                  },
                                  onBlur: function onBlur(inputEvent) {
                                    return _this2.handleEventTitleChange(
                                      event.code,
                                      inputEvent,
                                    );
                                  },
                                },
                              ),
                            ),
                          ),
                        );
                      }),
                    ),
                  widgetType === 'page' &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                      Panel,
                      {
                        header: '事件列表',
                        key: 'AllEmitEventList',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                        antd__WEBPACK_IMPORTED_MODULE_6__.List,
                        {
                          itemLayout: 'horizontal',
                          dataSource: allEmitEventList,
                          renderItem: function renderItem(event, index) {
                            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                              antd__WEBPACK_IMPORTED_MODULE_6__.List.Item,
                              null,
                              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                                antd__WEBPACK_IMPORTED_MODULE_6__.List.Item
                                  .Meta,
                                {
                                  title:
                                    globalEventMap[event.code] ||
                                    event.desc ||
                                    event.name,
                                  description: (0,
                                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                                    event.code || event.desc,
                                    {
                                      length: 30,
                                    },
                                  ),
                                  key:
                                    nodeKey + '-page-AllEmitEventList-' + index,
                                },
                              ),
                            );
                          },
                        },
                      ),
                    ),
                ),
                isEmpty &&
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    antd__WEBPACK_IMPORTED_MODULE_6__.Empty,
                    {
                      description: '暂无事件相关数据',
                    },
                  ),
              );
            };
            return SohuEventSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1___default().PureComponent);
          SohuEventSchema.propTypes = {
            isArrayItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 如果是数组项，title会进行特殊显示
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            isStructuredSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              SohuEventSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/TextAreaFormSchema/index.js':
        /*!***************************************************!*\
  !*** ./src/renderers/TextAreaFormSchema/index.js ***!
  \***************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var TextArea = antd__WEBPACK_IMPORTED_MODULE_7__.Input.TextArea;

          var TextAreaFormSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function TextAreaFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var value = event.target.value;
                updateFormValueData(keyRoute, value); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              TextAreaFormSchema,
              _React$PureComponent,
            );
            var _proto = TextAreaFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp container-warp'
                      : 'mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      TextArea,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        rows: 4,
                        disabled: readOnly,
                        required: isRequired,
                        placeholder:
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                        defaultValue:
                          curJsonData != null
                            ? curJsonData
                            : targetJsonSchema.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return TextAreaFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          TextAreaFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              TextAreaFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/TextEditorSchema/index.js':
        /*!*************************************************!*\
  !*** ./src/renderers/TextEditorSchema/index.js ***!
  \*************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var braft_editor__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! braft-editor */ 'braft-editor');
          /* harmony import */ var braft_editor__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              braft_editor__WEBPACK_IMPORTED_MODULE_10__,
            );
          /* harmony import */ var braft_extensions_dist_color_picker__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! braft-extensions/dist/color-picker */ 'braft-extensions/dist/color-picker',
            );
          /* harmony import */ var braft_extensions_dist_color_picker__WEBPACK_IMPORTED_MODULE_11___default =
            /*#__PURE__*/ __webpack_require__.n(
              braft_extensions_dist_color_picker__WEBPACK_IMPORTED_MODULE_11__,
            );
          /* harmony import */ var braft_extensions_dist_color_picker_css__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! braft-extensions/dist/color-picker.css */ 'braft-extensions/dist/color-picker.css',
            );
          /* harmony import */ var braft_extensions_dist_color_picker_css__WEBPACK_IMPORTED_MODULE_12___default =
            /*#__PURE__*/ __webpack_require__.n(
              braft_extensions_dist_color_picker_css__WEBPACK_IMPORTED_MODULE_12__,
            );
          /* harmony import */ var braft_extensions_dist_table__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              /*! braft-extensions/dist/table */ 'braft-extensions/dist/table',
            );
          /* harmony import */ var braft_extensions_dist_table__WEBPACK_IMPORTED_MODULE_13___default =
            /*#__PURE__*/ __webpack_require__.n(
              braft_extensions_dist_table__WEBPACK_IMPORTED_MODULE_13__,
            );
          /* harmony import */ var braft_extensions_dist_table_css__WEBPACK_IMPORTED_MODULE_14__ =
            __webpack_require__(
              /*! braft-extensions/dist/table.css */ 'braft-extensions/dist/table.css',
            );
          /* harmony import */ var braft_extensions_dist_table_css__WEBPACK_IMPORTED_MODULE_14___default =
            /*#__PURE__*/ __webpack_require__.n(
              braft_extensions_dist_table_css__WEBPACK_IMPORTED_MODULE_14__,
            );
          /* harmony import */ var braft_editor_dist_index_css__WEBPACK_IMPORTED_MODULE_15__ =
            __webpack_require__(
              /*! braft-editor/dist/index.css */ 'braft-editor/dist/index.css',
            );
          /* harmony import */ var braft_editor_dist_index_css__WEBPACK_IMPORTED_MODULE_15___default =
            /*#__PURE__*/ __webpack_require__.n(
              braft_editor_dist_index_css__WEBPACK_IMPORTED_MODULE_15__,
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16__ =
            __webpack_require__(
              /*! ./index.scss */ './src/renderers/TextEditorSchema/index.scss',
            );
          /* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_16___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_scss__WEBPACK_IMPORTED_MODULE_16__,
            );

          // 引入编辑器组件

          // 引入字体取色器样式

          // 引入表格扩展（其他扩展：https://github.com/margox/braft-extensions）

          // 引入编辑器样式

          var colorOptions = {
            theme: 'light', // 指定取色器样式主题，支持dark和light两种样式
          };
          braft_editor__WEBPACK_IMPORTED_MODULE_10___default().use([
            braft_extensions_dist_color_picker__WEBPACK_IMPORTED_MODULE_11___default()(
              colorOptions,
            ),
          ]);

          // 表格配置项
          var tableOptions = {
            defaultColumns: 3,
            // 默认列数
            defaultRows: 3,
            // 默认行数
            withDropdown: false,
            // 插入表格前是否弹出下拉菜单
            columnResizable: false,
            // 是否允许拖动调整列宽，默认false
            exportAttrString: 'border="1" style="border-collapse: collapse"', // 指定输出HTML时附加到table标签上的属性字符串
          };
          braft_editor__WEBPACK_IMPORTED_MODULE_10___default().use(
            braft_extensions_dist_table__WEBPACK_IMPORTED_MODULE_13___default()(
              tableOptions,
            ),
          );
          var TextEditorSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function TextEditorSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              /** 富文本内容变动事件处理器 */
              _this.handleEditorChange = function (editorState) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, editorState.toHTML()); // 更新数值
              };
              _this.state = {
                isClosed: true,
                // 是否为关闭状态，默认是关闭状态
                allControls: [
                  'undo',
                  'redo',
                  'separator',
                  'headings',
                  'font-size',
                  'line-height',
                  // 备注：行高设置无效（待处理BUG）
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
                  // 'emoji', // 备注：数据库可能不支持emoji格式
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
                  // 'clear',
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
              };
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              _this.handleEditorChange = _this.handleEditorChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              TextEditorSchema,
              _React$PureComponent,
            );
            var _proto = TextEditorSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              var _ref2 = this.props.schemaStore || {},
                pageScreen = _ref2.pageScreen;
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                this,
              );
              if (pageScreen && pageScreen === 'wideScreen') {
                // 大屏幕时默认展开富文本编辑器
                this.setState({
                  isClosed: false,
                });
              }
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_7__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                } else if (
                  nextProps.schemaStore.pageScreen !==
                  this.props.schemaStore.pageScreen
                ) {
                  if (
                    nextProps.schemaStore.pageScreen &&
                    nextProps.schemaStore.pageScreen === 'wideScreen'
                  ) {
                    // 大屏幕时默认展开富文本编辑器
                    this.setState({
                      isClosed: false,
                    });
                  }
                }
              };
            _proto.render = function render() {
              var _this2 = this;
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref3 = schemaStore || {},
                pageScreen = _ref3.pageScreen;
              var _ref4 = jsonStore || {},
                getJSONDataByKeyRoute = _ref4.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              var isClosed = this.state.isClosed;
              var curJsonData = getJSONDataByKeyRoute(keyRoute); // 从jsonData中获取对应的html内容
              var editorState =
                braft_editor__WEBPACK_IMPORTED_MODULE_10___default().createEditorState(
                  curJsonData,
                ); // 将html字符串转换成editorState
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              // const isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'text-editor-box wide-screen-element-warp'
                      : 'text-editor-box mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    onClick: function onClick(event) {
                      _this2.setState({
                        isClosed: !isClosed,
                      });
                      event.preventDefault();
                      event.stopPropagation();
                    },
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                  isClosed
                    ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.RightOutlined,
                        {
                          className: 'close-operate-btn',
                        },
                      )
                    : /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.DownOutlined,
                        {
                          className: 'close-operate-btn',
                        },
                      ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item ' + (isClosed ? 'closed' : ''),
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      braft_editor__WEBPACK_IMPORTED_MODULE_10___default(),
                      {
                        key: nodeKey + '-textEditor',
                        controls:
                          pageScreen === 'wideScreen'
                            ? this.state.allControls
                            : this.state.baseControls, // allControls baseControls
                        media: {
                          accepts: {
                            image:
                              'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
                            video: false,
                            audio: false,
                          },
                          pasteImage: true, // 是否允许粘贴图片到编辑器
                        },
                        defaultValue: editorState,
                        readOnly: readOnly,
                        placeholder:
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                        lineHeights: [1, 1.2, 1.5, 1.75, 2, 2.5, 3, 4],
                        onChange: this.handleEditorChange,
                        onSave: this.handleEditorChange, // 在编辑器获得焦点时按下ctrl+s会执行此方法
                      },
                    ),
                  ),
                ),
              );
            };
            return TextEditorSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          TextEditorSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            pageScreen: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              TextEditorSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/TimeFormSchema/index.js':
        /*!***********************************************!*\
  !*** ./src/renderers/TimeFormSchema/index.js ***!
  \***********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! moment */ 'moment');
          /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              moment__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var TimeFormSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function TimeFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event, dateString) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                updateFormValueData(keyRoute, dateString); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              TimeFormSchema,
              _React$PureComponent,
            );
            var _proto = TimeFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_9__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                nodeKey = _this$props3.nodeKey,
                jsonKey = _this$props3.jsonKey,
                keyRoute = _this$props3.keyRoute,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var defaultTime =
                curJsonData != null ? curJsonData : targetJsonSchema.default;
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）
              var isNeedTwoCol = (0,
              $utils_index__WEBPACK_IMPORTED_MODULE_10__.isNeedTwoColWarpStyle)(
                targetJsonSchema.type,
              ); // 是否需要设置成两栏布局

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_10__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp ' +
                        (isNeedTwoCol ? 'two-col-element-warp' : ''),
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_8__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.TimePicker,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        disabled: readOnly,
                        required: isRequired,
                        placeholder:
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                        defaultValue:
                          defaultTime &&
                          moment__WEBPACK_IMPORTED_MODULE_7___default()(
                            defaultTime,
                            'HH:mm',
                          ),
                        onChange: this.handleValueChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return TimeFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          TimeFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              TimeFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/TreeSelectFromSchema/index.js':
        /*!*****************************************************!*\
  !*** ./src/renderers/TreeSelectFromSchema/index.js ***!
  \*****************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var TreeSelectFromSchema = /*#__PURE__*/ (function (
            _React$PureComponent,
          ) {
            function TreeSelectFromSchema() {
              return _React$PureComponent.apply(this, arguments) || this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              TreeSelectFromSchema,
              _React$PureComponent,
            );
            var _proto = TreeSelectFromSchema.prototype;
            _proto.render = function render() {
              var _this$props = this.props,
                schemaStore = _this$props.schemaStore,
                jsonStore = _this$props.jsonStore;
              var _ref = schemaStore || {},
                pageScreen = _ref.pageScreen;
              var _ref2 = jsonStore || {},
                getJSONDataByKeyRoute = _ref2.getJSONDataByKeyRoute;
              var _this$props2 = this.props,
                mockData = _this$props2.mockData,
                dataRoute = _this$props2.dataRoute,
                nodeKey = _this$props2.nodeKey,
                onChange = _this$props2.onChange;
              var treeData = [];
              if (mockData && JSON.stringify(mockData) !== '{}') {
                var mockObj = mockData;
                if (
                  !(0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.isObject)(
                    mockData,
                  ) &&
                  mockData !== ''
                ) {
                  try {
                    mockObj = JSON.parse(mockData);
                  } catch (err) {
                    console.log('当前数据源的请求参数格式异常');
                    mockObj = {};
                  }
                }
                treeData = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.json2treeData)(
                  mockObj,
                );
              }
              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_8__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={`${nodeKey}-dataRoute-select`}
                  id: nodeKey + '-dataRoute-select',
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  '\u6570\u636E\u8DEF\u5F84\u9009\u62E9',
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_6__.TreeSelect,
                      {
                        className: 'data-route-select',
                        defaultValue: dataRoute,
                        treeData: treeData,
                        allowClear: true,
                        placeholder:
                          '\u8BF7\u9009\u62E9\u8981\u4F7F\u7528\u7684\u6570\u636E\u8282\u70B9\uFF08\u6570\u636E\u8DEF\u5F84\uFF09',
                        treeDefaultExpandAll: true,
                        onChange: onChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return TreeSelectFromSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          TreeSelectFromSchema.propTypes = {
            mockData: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 接口mock数据
            dataRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
            // 数据路径
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,
            // 数据路径值变动后触发
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              TreeSelectFromSchema,
            ),
          );

          /***/
        },

      /***/ './src/renderers/URLFormSchema/index.js':
        /*!**********************************************!*\
  !*** ./src/renderers/URLFormSchema/index.js ***!
  \**********************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
            );
          /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! react */ 'react');
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! mobx-react */ 'mobx-react');
          /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx_react__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! prop-types */ 'prop-types');
          /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(/*! @ant-design/icons */ '@ant-design/icons');
          /* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__,
            );
          /* harmony import */ var $mixins_index__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $mixins/index */ './src/mixins/index.js');
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');

          var URLFormSchema = /*#__PURE__*/ (function (_React$PureComponent) {
            function URLFormSchema(props) {
              var _this;
              _this = _React$PureComponent.call(this, props) || this;
              // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
              /** 数值变动事件处理器 */
              _this.handleValueChange = function (event) {
                var _this$props = _this.props,
                  keyRoute = _this$props.keyRoute,
                  jsonStore = _this$props.jsonStore;
                var _ref = jsonStore || {},
                  updateFormValueData = _ref.updateFormValueData;
                var value = event.target.value;
                updateFormValueData(keyRoute, value); // 更新数值
              };
              _this.handleValueChange = _this.handleValueChange.bind(_this);
              return _this;
            }
            _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
              URLFormSchema,
              _React$PureComponent,
            );
            var _proto = URLFormSchema.prototype;
            _proto.componentWillMount = function componentWillMount() {
              // 从web缓存中获取数值
              $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                this,
              );
            };
            _proto.componentWillReceiveProps =
              function componentWillReceiveProps(nextProps) {
                if (nextProps.keyRoute !== this.props.keyRoute) {
                  /** 当key值路径发生变化时重新从web缓存中获取数值 */
                  $mixins_index__WEBPACK_IMPORTED_MODULE_8__.catchJsonDataByWebCache.call(
                    this,
                    nextProps.keyRoute,
                  );
                }
              };
            _proto.render = function render() {
              var _this$props2 = this.props,
                schemaStore = _this$props2.schemaStore,
                jsonStore = _this$props2.jsonStore;
              var _ref2 = schemaStore || {},
                pageScreen = _ref2.pageScreen;
              var _ref3 = jsonStore || {},
                getJSONDataByKeyRoute = _ref3.getJSONDataByKeyRoute;
              var _this$props3 = this.props,
                keyRoute = _this$props3.keyRoute,
                jsonKey = _this$props3.jsonKey,
                nodeKey = _this$props3.nodeKey,
                targetJsonSchema = _this$props3.targetJsonSchema;
              // 从jsonData中获取对应的数值
              var curJsonData = getJSONDataByKeyRoute(keyRoute);
              var readOnly = targetJsonSchema.readOnly || false; // 是否只读（默认可编辑）
              var isRequired = targetJsonSchema.isRequired || false; // 是否必填（默认非必填）

              var style = targetJsonSchema.style
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.style,
                    ),
                  )
                : {};
              var titleStyle = targetJsonSchema.titleStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.titleStyle,
                    ),
                  )
                : {};
              var contentStyle = targetJsonSchema.contentStyle
                ? (0, $utils_index__WEBPACK_IMPORTED_MODULE_9__.buildStyle)(
                    (0, mobx__WEBPACK_IMPORTED_MODULE_3__.toJS)(
                      targetJsonSchema.contentStyle,
                    ),
                  )
                : {};
              return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                'div',
                {
                  className:
                    pageScreen === 'wideScreen'
                      ? 'wide-screen-element-warp'
                      : 'mobile-screen-element-warp',
                  // key={nodeKey}
                  id: nodeKey,
                  style: style,
                },
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'element-title',
                    style: titleStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                    {
                      title:
                        pageScreen === 'wideScreen'
                          ? targetJsonSchema.description
                          : '',
                      placement: 'top',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      'span',
                      {
                        className: 'title-text',
                        title: targetJsonSchema.title,
                      },
                      targetJsonSchema.title,
                      targetJsonSchema.showKey &&
                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                          'span',
                          null,
                          '\uFF08',
                          (0,
                          _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_7__.truncate)(
                            jsonKey,
                            {
                              length: 15,
                            },
                          ),
                          '\uFF09',
                        ),
                    ),
                  ),
                  pageScreen === 'mobileScreen' &&
                    targetJsonSchema.description &&
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
                      {
                        title: targetJsonSchema.description,
                        placement: 'top',
                      },
                      /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                        _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.InfoCircleOutlined,
                        {
                          className: 'info-icon',
                        },
                      ),
                    ),
                ),
                /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                  'div',
                  {
                    className: 'content-item',
                    style: contentStyle,
                  },
                  /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                    'div',
                    {
                      className: 'form-item-box',
                    },
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                      antd__WEBPACK_IMPORTED_MODULE_5__.Input,
                      {
                        style: {
                          display: 'inline-block',
                        },
                        disabled: readOnly,
                        required: isRequired,
                        placeholder:
                          targetJsonSchema.placeholder ||
                          '\u8BF7\u8F93\u5165' + targetJsonSchema.title,
                        defaultValue:
                          curJsonData != null
                            ? curJsonData
                            : targetJsonSchema.default,
                        onPressEnter: this.handleValueChange,
                        onBlur: this.handleValueChange,
                      },
                    ),
                  ),
                ),
              );
            };
            return URLFormSchema;
          })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
          URLFormSchema.propTypes = {
            parentType:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            jsonKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            indexRoute:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            keyRoute: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            nodeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,
            targetJsonSchema:
              prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
          };
          /* harmony default export */ __webpack_exports__['default'] = (0,
          mobx_react__WEBPACK_IMPORTED_MODULE_2__.inject)(function (stores) {
            return {
              schemaStore: stores.JSONSchemaStore,
              jsonStore: stores.JSONEditorStore,
            };
          })(
            (0, mobx_react__WEBPACK_IMPORTED_MODULE_2__.observer)(
              URLFormSchema,
            ),
          );

          /***/
        },

      /***/ './src/store/JSONEditorStore.js':
        /*!**************************************!*\
  !*** ./src/store/JSONEditorStore.js ***!
  \**************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: function () {
              return /* binding */ JSONEditorStore;
            },
            /* harmony export */
          });
          /* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/initializerDefineProperty */ '@babel/runtime/helpers/initializerDefineProperty',
            );
          /* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/createClass */ '@babel/runtime/helpers/createClass',
            );
          /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/applyDecoratedDescriptor */ '@babel/runtime/helpers/applyDecoratedDescriptor',
            );
          /* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/initializerWarningHelper */ '@babel/runtime/helpers/initializerWarningHelper',
            );
          /* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(/*! antd */ 'antd');
          /* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              antd__WEBPACK_IMPORTED_MODULE_5__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__,
            );
          /* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! $utils/index */ './src/utils/index.js');
          /* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(/*! $utils/typeof */ './src/utils/typeof.js');

          var _dec,
            _dec2,
            _dec3,
            _dec4,
            _dec5,
            _dec6,
            _dec7,
            _dec8,
            _dec9,
            _dec10,
            _dec11,
            _dec12,
            _dec13,
            _class,
            _descriptor,
            _descriptor2,
            _descriptor3,
            _descriptor4,
            _descriptor5,
            _descriptor6,
            _descriptor7,
            _descriptor8,
            _descriptor9,
            _descriptor10;

          /**
           * 用于管控JSON数据内容的全局store
           * */
          var JSONEditorStore =
            ((_dec = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec2 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec3 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec4 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec5 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec6 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec7 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec8 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec9 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec10 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec11 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec12 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec13 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_class = /*#__PURE__*/ (function () {
              // 构造函数
              function JSONEditorStore(rootJSONStore) {
                /**
                 * rootJSONStore: store根数据对象
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'rootJSONStore',
                  _descriptor,
                  this,
                );
                /**
                 * triggerChange: 用于强制触发更新事件
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'triggerChange',
                  _descriptor2,
                  this,
                );
                /**
                 * 记录当前JSONEditor的更新时间
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'lastUpdateTime',
                  _descriptor3,
                  this,
                );
                /**
                 * jsonData: jsonData数据对象
                 * 备注：没有多余数据的jsonData
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'jsonData',
                  _descriptor4,
                  this,
                );
                /**
                 * initJsonData: jsonData的初始数据对象
                 * 备注：用于记录schema结构变动前的数据内容
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'initJsonData',
                  _descriptor5,
                  this,
                );
                /**
                 * dynamicDataList: 动态数据源列表
                 * 备注：主要在DynamicDataSchema的接口数据/数据源选择列表中使用
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'dynamicDataList',
                  _descriptor6,
                  this,
                );
                // 数据源的配置
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'dynamicDataObj',
                  _descriptor7,
                  this,
                );
                // 数据源的配置对象（主要用于方便取值）
                /**
                 * 存放当前配置类对象数据
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'options',
                  _descriptor8,
                  this,
                );
                /**
                 * DynamicData中支持的请求参数类型: 动态请求参数
                 * 固定值参数（scope: static）： eg: 写死固定参数 => framework=1
                 * URL 参数（scope: url）： eg: pages?projectId=xxx => projectId=xxx
                 * Hash 参数（scope: hash）： eg: /pages/:pageId => pageId=xxx
                 * 环境变量（scope: window）： eg: 代码上下文里的变量 => env=dev
                 * 接口下发（scope: dynamic）： eg: 另一个接口返回结果字段 =>
                 * 页面参数（scope: page）： eg: 事件流设置参数
                 * 需要用户输入的参数（scope: input）： eg: 事件流设置参数
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'dynamicDataApiScopeList',
                  _descriptor9,
                  this,
                );
                /**
                 * onChange: jsonData数据变动触发的onChange
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'onChange',
                  _descriptor10,
                  this,
                );
                this.state = {
                  rootJSONStore: rootJSONStore, // 初始化一份rootJSONStore
                };
              }
              var _proto = JSONEditorStore.prototype;
              // 函数类型
              /**
               * 更新lastUpdateTime
               */
              _proto.updateLastTime = function updateLastTime() {
                this.lastUpdateTime = new Date().getTime();
              };

              /**
               * triggerChangeAction: 用于主动触发更新事件
               */
              _proto.triggerChangeAction = function triggerChangeAction() {
                this.triggerChange = !this.triggerChange;
              };

              /** 初始化jsonData  */
              _proto.initJSONData = function initJSONData(jsonData) {
                // 避免相同的数据重复渲染(备注：自身数据的变动也会触发componentWillReceiveProps)
                var jsonSchema =
                  this.state.rootJSONStore.JSONSchemaStore.jsonSchema || {};
                // 过滤jsonData内部数据变动时触发initJSONData的事件
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    jsonData,
                    this.jsonData,
                  )
                ) {
                  // 根据jsonSchema生成一份对应的jsonData
                  /** 1、根据jsonSchema生成对应的jsonData */
                  this.initJsonData = (0,
                  $utils_index__WEBPACK_IMPORTED_MODULE_7__.objClone)(
                    this.jsonData,
                  ); // 备份过滤钱的数据对象
                  // 判断当前schema是否为空
                  if (jsonSchema) {
                    this.jsonData = (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.schema2json)(
                      jsonSchema,
                      jsonData || {},
                    );
                    // 记录当前初始化的时间
                    this.updateLastTime();
                  }
                }
              };

              /** 初始化jsonData  */
              _proto.initOnChange = function initOnChange(newOnChangeFunc) {
                if (
                  newOnChangeFunc ||
                  (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_8__.isFunction)(
                    newOnChangeFunc,
                  )
                ) {
                  this.onChange = newOnChangeFunc;
                }
              };

              /** 设置动态数据源列表  */
              _proto.setDynamicDataList = function setDynamicDataList(
                dynamicDataList,
              ) {
                if (
                  !(0, $utils_index__WEBPACK_IMPORTED_MODULE_7__.isEqual)(
                    dynamicDataList,
                    this.dynamicDataList,
                  )
                ) {
                  this.dynamicDataList = (0,
                  $utils_index__WEBPACK_IMPORTED_MODULE_7__.objClone)(
                    dynamicDataList,
                  );
                  // 重新对 赋值
                  var dynamicDataObjTemp = {};
                  dynamicDataList.map(function (dynamicData) {
                    dynamicDataObjTemp[dynamicData.name] = dynamicData;
                  });
                  this.dynamicDataObj = dynamicDataObjTemp;
                }
              };
              _proto.setOptions = function setOptions(optionsData) {
                if (optionsData) {
                  this.options = optionsData;
                }
              };
              /** 触发onChange  */
              _proto.jsonDataChange = function jsonDataChange() {
                this.onChange(this.JSONEditorObj);
              };

              /** 根据key索引路径获取对应的json数据[非联动式数据获取]  */
              _proto.getJSONDataByKeyRoute = function getJSONDataByKeyRoute(
                keyRoute,
                jsonDataParam,
              ) {
                var curJsonData = jsonDataParam || this.jsonData;
                return (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getJsonDataByKeyRoute)(
                  keyRoute,
                  curJsonData,
                  true,
                ); // useObjClone: true 避免后续产生数据联动
              };

              /** 根据key索引路径获取对应的json数据[非联动式数据获取]
               * 备注：从initJsonData获取数据
               * */
              _proto.getInitJsonDataByKeyRoute =
                function getInitJsonDataByKeyRoute(keyRoute, jsonDataParam) {
                  var curJsonData = jsonDataParam || this.initJsonData;
                  return (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getJsonDataByKeyRoute)(
                    keyRoute,
                    curJsonData,
                    true,
                  ); // useObjClone: true 避免后续产生数据联动
                };

              /** 根据key路径更新对应的json数据
               * 备注：从jsonData中获取数据，需要先获取父级对象（以便产生数据联动），
               * 再根据最近的key值对当前数据进行编辑
               * */
              _proto.updateFormValueData = function updateFormValueData(
                keyRoute,
                newVal,
                ignoreChange,
              ) {
                if (keyRoute !== '') {
                  // 1. 获取父级key路径和最近的有一个key
                  var parentKeyRoute_CurKey = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getParentKeyRoute_CurKey)(
                    keyRoute,
                  );
                  var parentKeyRoute = parentKeyRoute_CurKey[0];
                  var curKey = parentKeyRoute_CurKey[1];
                  // 2. 获取父级数据对象
                  var parentJsonDataObj = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getJsonDataByKeyRoute)(
                    parentKeyRoute,
                    this.jsonData,
                  );
                  // 3. 数值更新
                  if (parentJsonDataObj) {
                    parentJsonDataObj[curKey] = newVal;
                  } else {
                    var _this$updateFormValue;
                    this.updateFormValueData(
                      parentKeyRoute,
                      ((_this$updateFormValue = {}),
                      (_this$updateFormValue[curKey] = newVal),
                      _this$updateFormValue),
                    );
                  }
                } else {
                  // 当keyRoute为空时直接修改当前schemaData
                  this.jsonData = newVal;
                }
                if (this.state.rootJSONStore.JSONSchemaStore) {
                  // 备注：数组类型通过keyRoute获取schema对象会有异常
                  var curElemSchema =
                    this.state.rootJSONStore.JSONSchemaStore.getSchemaByKeyRoute(
                      keyRoute,
                    );
                  if (curElemSchema && curElemSchema.isConditionProp) {
                    // 判断条件字段的快捷通道：如果是条件字段则更新LastInitTime
                    this.updateLastTime();
                    // this.triggerChangeAction(); // 用于主动触发组件更新
                  }
                }
                if (!ignoreChange) {
                  // 4. 触发onChange事件
                  this.jsonDataChange();
                }
              };

              /**
               * 根据key索引路径值(keyRoute)和数组值所在位置(arrayIndex)删除对应的数组元素
               * */
              _proto.deleteArrayIndex = function deleteArrayIndex(
                keyRoute,
                arrayIndex,
              ) {
                // 1. 获取数组数据对象
                var arrJsonData = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getJsonDataByKeyRoute)(
                  keyRoute,
                  this.jsonData,
                );
                if (
                  (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_8__.isArray)(
                    arrJsonData,
                  )
                ) {
                  if (arrJsonData.length > 0) {
                    // 2. 删除对应的数据项
                    arrJsonData.splice(arrayIndex, 1);
                    this.triggerChangeAction(); // 用于主动触发组件更新
                    // 3. 触发onChange事件
                    this.jsonDataChange();
                  } else {
                    antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                      '删除失败，空数组对象暂无可删除子项。',
                    );
                  }
                }
              };

              /**
               * 根据key索引路径值(keyRoute)在数组中新增数据项
               * */
              _proto.addArrayItem = function addArrayItem(
                keyRoute,
                curArrIndex,
              ) {
                // 1. 获取数组数据对象
                var arrJsonData = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getJsonDataByKeyRoute)(
                  keyRoute,
                  this.jsonData,
                );
                /*
    if (!isArray(arrJsonData)) {
      arrJsonData = [];
    }
    */
                // const _arrJsonData = toJS(arrJsonData);
                if (
                  (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_8__.isArray)(
                    arrJsonData,
                  )
                ) {
                  // 2. 获取数组的第一个数据项
                  var newArrItem = arrJsonData[curArrIndex || 0]; // 复制一个数组项
                  if (
                    (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_8__.isObject)(
                      newArrItem,
                    )
                  ) {
                    newArrItem = Object.assign({}, newArrItem);
                  }
                  if (curArrIndex || curArrIndex === 0) {
                    // 先记录插入位置之后的数据
                    var endArr = arrJsonData.slice(Number(curArrIndex) + 1);
                    var newArrJsonData = [newArrItem].concat(endArr);
                    // 删除插入位置之后的数据
                    arrJsonData.splice(Number(curArrIndex) + 1);
                    // 重新插入
                    arrJsonData.push.apply(arrJsonData, newArrJsonData);
                  } else {
                    arrJsonData.push(newArrItem);
                  }
                  this.triggerChangeAction(); // 用于主动触发组件更新
                  // 3. 触发onChange事件
                  this.jsonDataChange();
                } else {
                  antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                    '数据操作异常：当前元素不是数组类型。',
                  );
                }
              };

              /**
               * 移动指定数据项顺序
               * keyRoute：根据key索引路径值(keyRoute)查找当前数组元素
               * curArrIndex：当前需要移动位置的数组项位置
               * sortAction：
               * */
              _proto.sortArrayItem = function sortArrayItem(
                keyRoute,
                curArrIndex,
                sortAction,
              ) {
                // 1. 获取数组数据对象
                var arrJsonData = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_6__.getJsonDataByKeyRoute)(
                  keyRoute,
                  this.jsonData,
                );
                // const _arrJsonData = toJS(arrJsonData);
                if (
                  (0, $utils_typeof__WEBPACK_IMPORTED_MODULE_8__.isArray)(
                    arrJsonData,
                  )
                ) {
                  var curArrItem = (0,
                  $utils_index__WEBPACK_IMPORTED_MODULE_7__.objClone)(
                    arrJsonData[curArrIndex || 0],
                  ); // 2. 获取当前数组项
                  var exchangeArrIndex = curArrIndex;
                  if (sortAction === 'up' && exchangeArrIndex > 0) {
                    // 向上移动
                    exchangeArrIndex -= 1;
                  } else if (sortAction === 'up' && exchangeArrIndex === 0) {
                    antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                      '数据操作异常：当前数组项已经是第一个元素了。',
                    );
                    return;
                  } else if (sortAction === 'down' || !sortAction) {
                    // 默认向下移动
                    exchangeArrIndex += 1;
                    if (
                      sortAction === 'down' &&
                      exchangeArrIndex > arrJsonData.length - 1
                    ) {
                      antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                        '数据操作异常：当前数组项已经是最后一个元素了。',
                      );
                      return;
                    }
                  }
                  var exchangeArrItem = (0,
                  $utils_index__WEBPACK_IMPORTED_MODULE_7__.objClone)(
                    arrJsonData[exchangeArrIndex],
                  ); // 3. 获取互换数组项
                  // 2. 获取数组的第一个数据项

                  if (
                    curArrItem !== undefined &&
                    exchangeArrItem !== undefined
                  ) {
                    arrJsonData[curArrIndex] = exchangeArrItem;
                    arrJsonData[exchangeArrIndex] = curArrItem;
                    antd__WEBPACK_IMPORTED_MODULE_5__.message.success(
                      '\u539F\u6709\u6570\u636E\u9879' +
                        (curArrIndex + 1) +
                        '\u5BF9\u5E94\u7684\u6570\u636E\u5185\u5BB9\u5DF2' +
                        (sortAction === 'up' ? '向上' : '向下') +
                        '\u79FB\u52A8\u4E00\u7EA7',
                      5,
                    );
                    // 更新LastInitTime
                    this.updateLastTime();
                    this.triggerChangeAction(); // 用于主动触发组件更新
                    // 4. 触发onChange事件
                    this.jsonDataChange();
                  }
                } else {
                  antd__WEBPACK_IMPORTED_MODULE_5__.message.warning(
                    '数据操作异常：当前元素不是数组类型。',
                  );
                }
              };
              return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
                JSONEditorStore,
                [
                  {
                    key: 'JSONEditorObj',
                    get: function get() {
                      return (0, mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(
                        this.jsonData,
                      );
                    },
                  },
                ],
              );
            })()),
            (_descriptor =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'rootJSONStore',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return {};
                  },
                },
              )),
            (_descriptor2 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'triggerChange',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return false;
                  },
                },
              )),
            (_descriptor3 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'lastUpdateTime',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return new Date().getTime();
                  },
                },
              )),
            (_descriptor4 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'jsonData',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return null;
                  },
                },
              )),
            (_descriptor5 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'initJsonData',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return {};
                  },
                },
              )),
            (_descriptor6 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'dynamicDataList',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return [];
                  },
                },
              )),
            (_descriptor7 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'dynamicDataObj',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return {};
                  },
                },
              )),
            (_descriptor8 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'options',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return {};
                  },
                },
              )),
            (_descriptor9 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'dynamicDataApiScopeList',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
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
                },
              )),
            (_descriptor10 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'onChange',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return function () {};
                  },
                },
              )),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'updateLastTime',
              [_dec],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'updateLastTime',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'triggerChangeAction',
              [_dec2],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'triggerChangeAction',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'initJSONData',
              [_dec3],
              Object.getOwnPropertyDescriptor(_class.prototype, 'initJSONData'),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'initOnChange',
              [_dec4],
              Object.getOwnPropertyDescriptor(_class.prototype, 'initOnChange'),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'setDynamicDataList',
              [_dec5],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'setDynamicDataList',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'setOptions',
              [_dec6],
              Object.getOwnPropertyDescriptor(_class.prototype, 'setOptions'),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'JSONEditorObj',
              [mobx__WEBPACK_IMPORTED_MODULE_4__.computed],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'JSONEditorObj',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'jsonDataChange',
              [_dec7],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'jsonDataChange',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'getJSONDataByKeyRoute',
              [_dec8],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'getJSONDataByKeyRoute',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'getInitJsonDataByKeyRoute',
              [_dec9],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'getInitJsonDataByKeyRoute',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'updateFormValueData',
              [_dec10],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'updateFormValueData',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'deleteArrayIndex',
              [_dec11],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'deleteArrayIndex',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'addArrayItem',
              [_dec12],
              Object.getOwnPropertyDescriptor(_class.prototype, 'addArrayItem'),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'sortArrayItem',
              [_dec13],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'sortArrayItem',
              ),
              _class.prototype,
            ),
            _class);

          /***/
        },

      /***/ './src/store/JSONSchemaStore.js':
        /*!**************************************!*\
  !*** ./src/store/JSONSchemaStore.js ***!
  \**************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: function () {
              return /* binding */ JSONSchemaStore;
            },
            /* harmony export */
          });
          /* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/initializerDefineProperty */ '@babel/runtime/helpers/initializerDefineProperty',
            );
          /* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/createClass */ '@babel/runtime/helpers/createClass',
            );
          /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/applyDecoratedDescriptor */ '@babel/runtime/helpers/applyDecoratedDescriptor',
            );
          /* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2__,
            );
          /* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/initializerWarningHelper */ '@babel/runtime/helpers/initializerWarningHelper',
            );
          /* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_3__,
            );
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(/*! mobx */ 'mobx');
          /* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              mobx__WEBPACK_IMPORTED_MODULE_4__,
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__,
            );

          var _dec,
            _dec2,
            _dec3,
            _dec4,
            _dec5,
            _dec6,
            _dec7,
            _class,
            _descriptor,
            _descriptor2;

          var _initJSONSchemaData =
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.TypeDataList
              .jsonschema;

          /**
           * 用于管控JsonSchema的全局store
           * */
          var JSONSchemaStore =
            ((_dec = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec2 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec3 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec4 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec5 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec6 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_dec7 = mobx__WEBPACK_IMPORTED_MODULE_4__.action.bound),
            (_class = /*#__PURE__*/ (function () {
              // 构造函数
              function JSONSchemaStore(rootJSONStore) {
                /**
                 * 宽屏（wideScreen） or 小屏（mobileScreen）
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'pageScreen',
                  _descriptor,
                  this,
                );
                // 默认小屏，宽屏: wideScreen，小屏：mobileScreen
                /**
                 * jsonSchema: JSONSchema数据对象
                 */
                _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(
                  this,
                  'jsonSchema',
                  _descriptor2,
                  this,
                );
                this.state = {
                  rootJSONStore: rootJSONStore, // 初始化一份rootJSONStore
                };
              }
              var _proto = JSONSchemaStore.prototype;
              /**
               * 设置当前屏幕模式：大屏 or 小屏
               */
              _proto.setPageScreen = function setPageScreen(pageScreen) {
                if (pageScreen === 'wideScreen' || pageScreen) {
                  this.pageScreen = 'wideScreen';
                } else {
                  this.pageScreen = 'mobileScreen'; // 默认宽屏
                }
              };

              /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
              _proto.initJSONSchemaData = function initJSONSchemaData(
                jsonSchemaData,
              ) {
                if (
                  !jsonSchemaData ||
                  JSON.stringify(jsonSchemaData) === '{}'
                ) {
                  // 使用默认的jsonschema数据进行初始化
                  this.jsonSchema = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.objClone)(
                    _initJSONSchemaData,
                  );
                } else if (
                  !(0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isEqual)(
                    jsonSchemaData,
                    this.JSONSchemaObj,
                  )
                ) {
                  if (
                    jsonSchemaData &&
                    (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isNewSchemaData)(
                      jsonSchemaData,
                    )
                  ) {
                    // 如果有lastUpdateTime则说明是新版jsonSchema数据，无需转换直接进行赋值
                    this.jsonSchema = jsonSchemaData;
                  } else {
                    // 进行一次转换，以便兼容旧版数据
                    var newJSONSchema = (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.oldSchemaToNewSchema)(
                      jsonSchemaData,
                    );
                    this.jsonSchema = newJSONSchema;
                  }
                }
              };

              /** 根据索引路径获取对应的json数据[非联动式数据获取]  */
              _proto.JSONSchemaChange = function JSONSchemaChange(
                jsonSchemaData,
              ) {
                if (
                  !(0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isEqual)(
                    jsonSchemaData,
                    this.JSONSchemaObj,
                  )
                ) {
                  if (
                    !jsonSchemaData ||
                    JSON.stringify(jsonSchemaData) === '{}'
                  ) {
                    // 使用默认的jsonschema数据进行初始化
                    this.jsonSchema = (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.objClone)(
                      _initJSONSchemaData,
                    );
                  } else if (
                    jsonSchemaData &&
                    (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.isNewSchemaData)(
                      jsonSchemaData,
                    )
                  ) {
                    /** 如果有lastUpdateTime则说明是新版jsonSchema数据，无需转换直接进行赋值 */
                    this.jsonSchema = jsonSchemaData;
                  } else {
                    // 进行一次转换，以便兼容旧版数据
                    var newJSONSchema = (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.oldSchemaToNewSchema)(
                      jsonSchemaData,
                    );
                    this.jsonSchema = newJSONSchema;
                  }
                  var JSONEditorStore =
                    this.state.rootJSONStore.JSONEditorStore;
                  var curJsonData = JSONEditorStore.jsonData;
                  var newJsonData = {};
                  /** 根据jsonSchema生成对应的最新jsonData */
                  if (this.jsonSchema.reset) {
                    // schema 变动不保留旧版 jsonData 数据
                    newJsonData = (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.schema2json)(
                      this.jsonSchema,
                      {},
                    );
                  } else {
                    // 默认保留旧版jsonData数据
                    newJsonData = (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.schema2json)(
                      this.jsonSchema,
                      curJsonData,
                    );
                  }
                  /** 更新当前的jsonData */
                  this.state.rootJSONStore.JSONEditorStore.jsonData =
                    newJsonData;
                  this.state.rootJSONStore.JSONEditorStore.initJsonData = (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.objClone)(
                    curJsonData,
                  ); // 备份此前的数据对象
                  /** jsonSchema变动的时候触发一次jsonDataChange
                   * jsonSchema变动意味着jsonData也需要进行对应的结构更新
                   * */
                  // this.state.rootJSONStore.JSONEditorStore.jsonDataChange();
                }
              };
              /** 根据索引路径获取对应的key值路径 */
              _proto.indexRoute2keyRoute = function indexRoute2keyRoute(
                indexRoute,
              ) {
                return (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.indexRoute2keyRoute)(
                  indexRoute,
                  this.jsonSchema,
                );
              };

              /** 根据key值路径获取对应的index索引路径 */
              _proto.keyRoute2indexRoute = function keyRoute2indexRoute(
                keyRoute,
              ) {
                return (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.keyRoute2indexRoute)(
                  keyRoute,
                  this.jsonSchema,
                );
              };

              /** 根据索引路径获取对应的schema数据[非联动式数据获取]  */
              _proto.getSchemaByIndexRoute = function getSchemaByIndexRoute(
                indexRoute,
              ) {
                return (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.getSchemaByIndexRoute)(
                  indexRoute,
                  this.jsonSchema,
                  true,
                ); // useObjClone: true 避免后续产生数据联动
              };

              /** 根据key值路径获取对应的schema数据[非联动式数据获取]  */
              _proto.getSchemaByKeyRoute = function getSchemaByKeyRoute(
                keyRoute,
              ) {
                var indexRoute = this.keyRoute2indexRoute(keyRoute);
                return (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_5__.getSchemaByIndexRoute)(
                  indexRoute,
                  this.jsonSchema,
                  true,
                ); // useObjClone: true 避免后续产生数据联动
              };
              return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(
                JSONSchemaStore,
                [
                  {
                    key: 'JSONSchemaObj',
                    get: function get() {
                      return (0, mobx__WEBPACK_IMPORTED_MODULE_4__.toJS)(
                        this.jsonSchema,
                      );
                    },

                    /** 获取当前jsonSchema的最新编辑时间的对应时间戳 */
                  },
                  {
                    key: 'lastUpdateTime',
                    get: function get() {
                      var curLastUpdateTime = this.jsonSchema.lastUpdateTime;
                      curLastUpdateTime = curLastUpdateTime
                        ? new Date(curLastUpdateTime).getTime()
                        : new Date().getTime();
                      return curLastUpdateTime;
                    },
                  },
                ],
              );
            })()),
            (_descriptor =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'pageScreen',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return 'mobileScreen';
                  },
                },
              )),
            (_descriptor2 =
              _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
                _class.prototype,
                'jsonSchema',
                [mobx__WEBPACK_IMPORTED_MODULE_4__.observable],
                {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                  initializer: function initializer() {
                    return {};
                  },
                },
              )),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'setPageScreen',
              [_dec],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'setPageScreen',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'initJSONSchemaData',
              [_dec2],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'initJSONSchemaData',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'JSONSchemaChange',
              [_dec3],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'JSONSchemaChange',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'JSONSchemaObj',
              [mobx__WEBPACK_IMPORTED_MODULE_4__.computed],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'JSONSchemaObj',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'lastUpdateTime',
              [mobx__WEBPACK_IMPORTED_MODULE_4__.computed],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'lastUpdateTime',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'indexRoute2keyRoute',
              [_dec4],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'indexRoute2keyRoute',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'keyRoute2indexRoute',
              [_dec5],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'keyRoute2indexRoute',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'getSchemaByIndexRoute',
              [_dec6],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'getSchemaByIndexRoute',
              ),
              _class.prototype,
            ),
            _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_2___default()(
              _class.prototype,
              'getSchemaByKeyRoute',
              [_dec7],
              Object.getOwnPropertyDescriptor(
                _class.prototype,
                'getSchemaByKeyRoute',
              ),
              _class.prototype,
            ),
            _class);

          /***/
        },

      /***/ './src/store/index.js':
        /*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _JSONSchemaStore__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./JSONSchemaStore */ './src/store/JSONSchemaStore.js',
            );
          /* harmony import */ var _JSONEditorStore__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./JSONEditorStore */ './src/store/JSONEditorStore.js',
            );

          var RootJSONStore = function RootJSONStore() {
            this.JSONSchemaStore =
              new _JSONSchemaStore__WEBPACK_IMPORTED_MODULE_0__['default'](
                this,
              );
            this.JSONEditorStore =
              new _JSONEditorStore__WEBPACK_IMPORTED_MODULE_1__['default'](
                this,
              );
          };
          /* harmony default export */ __webpack_exports__['default'] =
            RootJSONStore;

          /***/
        },

      /***/ './src/utils/index.js':
        /*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ buildStyle: function () {
              return /* binding */ buildStyle;
            },
            /* harmony export */ deleteWebCacheData: function () {
              return /* binding */ deleteWebCacheData;
            },
            /* harmony export */ formatOptions: function () {
              return /* binding */ formatOptions;
            },
            /* harmony export */ formatOptions1: function () {
              return /* binding */ formatOptions1;
            },
            /* harmony export */ getExprProperties: function () {
              return /* binding */ getExprProperties;
            },
            /* harmony export */ getParams: function () {
              return /* binding */ getParams;
            },
            /* harmony export */ getURLParam: function () {
              return /* binding */ getURLParam;
            },
            /* harmony export */ getWebCacheData: function () {
              return /* binding */ getWebCacheData;
            },
            /* harmony export */ hasProperties: function () {
              return /* binding */ hasProperties;
            },
            /* harmony export */ isBaseSchemaElem: function () {
              return /* binding */ isBaseSchemaElem;
            },
            /* harmony export */ isBoxSchemaElem: function () {
              return /* binding */ isBoxSchemaElem;
            },
            /* harmony export */ isEqual: function () {
              return /* binding */ isEqual;
            },
            /* harmony export */ isFirstSchemaElem: function () {
              return /* binding */ isFirstSchemaElem;
            },
            /* harmony export */ isNeedTwoColWarpStyle: function () {
              return /* binding */ isNeedTwoColWarpStyle;
            },
            /* harmony export */ objClone: function () {
              return /* binding */ objClone;
            },
            /* harmony export */ saveWebCacheData: function () {
              return /* binding */ saveWebCacheData;
            },
            /* harmony export */
          });
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__,
            );
          /* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! lodash/camelCase */ 'lodash/camelCase');
          /* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__,
            );
          /* harmony import */ var _webCache_js__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./webCache.js */ './src/utils/webCache.js');

          function buildStyle(style) {
            var curStyle = {};
            if (style) {
              Object.keys(style).forEach(function (styleKey) {
                // 将属性短横线命名转换为驼峰命名，如 background-color => backgroundColor
                if (styleKey.indexOf('-') > 0) {
                  curStyle[
                    lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(
                      styleKey,
                    )
                  ] = style[styleKey];
                } else {
                  curStyle[styleKey] = style[styleKey];
                }
              });
            }
            return curStyle;
          }

          /** js对象数据深拷贝，避免数据联动 */
          function objClone(targetObj) {
            // const newObj = JSON.stringify(targetObj);
            // return JSON.parse(newObj);
            return (0,
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.objClone)(
              targetObj,
            );
          }

          /** 对比两个json数据是否相等 */
          function isEqual(targetObj, nextTargetObj) {
            // return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
            return (0,
            _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isEqual)(
              targetObj,
              nextTargetObj,
            );
          }

          /** 判断当前属性是否存在
           * 备注：要识别boolean类型的数值 */
          function hasProperties(targetPropertie) {
            var hasProperties = false;
            if (targetPropertie !== undefined && targetPropertie !== null) {
              // targetPropertie 等于""、0、false时均认为是存在的属性
              hasProperties = true;
            }
            return hasProperties;
          }

          /** 是否需要设置成两栏布局
           * 比较适合固定宽度的元素，
           * 比如：boolean、date、date-time、time、number、color、quantity
           * 呈现：element-title 和 content-item 在同一行展示
           * */
          function isNeedTwoColWarpStyle(format) {
            var isNeedTwoColWarp = false;
            if (
              format === 'boolean' ||
              format === 'date' ||
              format === 'date-time' ||
              format === 'time' ||
              format === 'number' ||
              format === 'color' ||
              format === 'quantity' ||
              format === 'select'
            ) {
              isNeedTwoColWarp = true;
            }
            return isNeedTwoColWarp;
          }

          /** 根据className判断是否是基本类型元素
           *  基本类型元素：input、boolean、 date、date-time、 time、 url、
           *  textarea、number、 radio、 select、color、quantity
           * */
          function isBaseSchemaElem(elemClassName) {
            var isBaseSchema = false;
            if (
              elemClassName.indexOf('input-schema') >= 0 ||
              elemClassName.indexOf('boolean-schema') >= 0 ||
              elemClassName.indexOf('date-schema') >= 0 ||
              elemClassName.indexOf('date-time-schema') >= 0 ||
              elemClassName.indexOf('time-schema') >= 0 ||
              elemClassName.indexOf('url-schema') >= 0 ||
              elemClassName.indexOf('textarea-schema') >= 0 ||
              elemClassName.indexOf('number-schema') >= 0 ||
              elemClassName.indexOf('radio-schema') >= 0 ||
              elemClassName.indexOf('select-schema') >= 0 ||
              elemClassName.indexOf('color-schema') >= 0 ||
              elemClassName.indexOf('quantity-schema') >= 0
            ) {
              isBaseSchema = true;
            }
            return isBaseSchema;
          }

          /** 根据className判断是否是容器类型元素
           *  容器类型元素：func、style、data、object
           *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
           *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
           * */
          function isBoxSchemaElem(elemClassName) {
            var isBoxSchema = false;
            if (
              elemClassName.indexOf('func-schema') >= 0 ||
              elemClassName.indexOf('style-schema') >= 0 ||
              elemClassName.indexOf('data-schema') >= 0 ||
              elemClassName.indexOf('object-schema') >= 0
            ) {
              isBoxSchema = true;
            }
            return isBoxSchema;
          }

          /** 根据className判断是否是一级固定类型元素
           *  容器类型元素：func、style、data
           * */
          function isFirstSchemaElem(elemClassName) {
            var isFirstSchema = false;
            if (
              elemClassName.indexOf('func-schema') >= 0 ||
              elemClassName.indexOf('style-schema') >= 0 ||
              elemClassName.indexOf('data-schema') >= 0
            ) {
              isFirstSchema = true;
            }
            return isFirstSchema;
          }
          /**
           * 获取当前url中的所有参数
           */
          function getParams() {
            var params = window.location.search;
            if (!params) {
              var currentHref = window.location.href;
              var startIndex = currentHref.lastIndexOf('?');
              params = currentHref.substring(startIndex);
            }
            var paramsObj = {};
            if (params) {
              var arr = params.substr(1).split('&');
              for (var i = 0, size = arr.length; i < size; i++) {
                var data = arr[i].split('=');
                if (data[0] && data[1]) {
                  paramsObj[data[0]] = data[1];
                }
              }
            }
            return paramsObj;
          }
          /**
           * 获取当前url中的指定参数
           */
          function getURLParam(key) {
            var params = window.location.search;
            if (params) {
              var arr = params.substr(1).split('&');
              for (var i = 0, size = arr.length; i < size; i++) {
                var data = arr[i].split('=');
                if (data[0] === key) {
                  return data[1];
                }
              }
            }
            return '';
          }

          /**
           *  将数据缓存到sessionStorage中
           */
          function saveWebCacheData(valueKey, value) {
            (0, _webCache_js__WEBPACK_IMPORTED_MODULE_2__.saveJSONEditorCache)(
              valueKey,
              value,
              'json-editor-formData',
            );
          }

          /**
           *  从sessionStorage中读取此前缓存的数据
           */
          function getWebCacheData(valueKey) {
            return (0,
            _webCache_js__WEBPACK_IMPORTED_MODULE_2__.getJSONEditorCache)(
              valueKey,
              'json-editor-formData',
            );
          }

          /**
           *  从sessionStorage中删除此前缓存的数据
           */
          function deleteWebCacheData(valueKey) {
            (0,
            _webCache_js__WEBPACK_IMPORTED_MODULE_2__.deleteJSONEditorCache)(
              valueKey,
              'json-editor-formData',
            );
          }

          /**
           * 处理 Props 数据，所有以 On 或者 Expr 结尾的 prop 都进行一次计算
           *
           * xxxOn
           * xxxExpr
           */
          function getExprProperties(schema, data, ignoreList) {
            if (ignoreList === void 0) {
              ignoreList = ['name'];
            }
            Object.getOwnPropertyNames(schema).forEach(function (key) {
              if (ignoreList && ~ignoreList.indexOf(key)) {
                return;
              }
              var parts = /^(.*)(On|Expr)$/.exec(key) || [];
              var type = parts[2];
              var value = schema[key];
              if (
                value &&
                typeof value === 'string' &&
                parts[1] &&
                (type === 'On' || type === 'Expr')
              ) {
                key = parts[1];
                schema[key] = (0,
                _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.evalExpression)(
                  value,
                  data || {},
                );
              }
            });
            return schema;
          }

          // options 异常格式 处理，自动转成可用列表格式
          function formatOptions(options) {
            var curOptions = [];
            var optionValue = {}; // 记录对象类型的value
            if (
              (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(
                options,
              )
            ) {
              // curOptions = options;
              options.forEach(function (option) {
                if (
                  (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(
                    option.value,
                  )
                ) {
                  var valueStr = JSON.stringify(option.value);
                  curOptions.push({
                    label: option.label || option.name,
                    value: valueStr,
                  });
                  optionValue[valueStr] = option.value;
                } else {
                  curOptions.push(option);
                }
              });
            } else if (
              (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(
                options,
              )
            ) {
              try {
                curOptions = JSON.parse(options);
                var formatResult = formatOptions(curOptions);
                curOptions = formatResult.options;
                optionValue = formatResult.optionValue;
              } catch (error) {
                console.warn('options 异常数据格式转换失败：', options);
              }
            }
            return {
              options: curOptions,
              optionValue: optionValue,
            };
          }
          function formatOptions1(options) {
            var curOptions = [];
            var optionValue = {}; // 记录对象类型的value
            if (
              (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isArray)(
                options,
              )
            ) {
              // curOptions = options;
              options.forEach(function (option) {
                if (
                  (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(
                    option,
                  )
                ) {
                  if (
                    (0,
                    _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(
                      option.value,
                    )
                  ) {
                    var valueStr = JSON.stringify(option.value);
                    valueStr.replaceAll(' ', '');
                    curOptions.push({
                      label: option.label || option.name,
                      value: valueStr,
                    });
                    optionValue[valueStr] = option.value;
                  } else {
                    curOptions.push(option);
                  }
                } else if (
                  (0,
                  _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(
                    option,
                  )
                ) {
                  // 兼容异常 option 数据
                  try {
                    var curOption = JSON.parse(option);
                    if (
                      (0,
                      _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(
                        curOption.value,
                      )
                    ) {
                      var _valueStr = JSON.stringify(curOption.value);
                      _valueStr.replaceAll(' ', '');
                      curOptions.push({
                        label: curOption.label || curOption.name,
                        value: _valueStr,
                      });
                      optionValue[_valueStr] = curOption.value;
                    } else {
                      curOptions.push(curOption);
                    }
                  } catch (error) {
                    console.warn('option 异常数据格式转换失败：', option);
                  }
                }
              });
            } else if (
              (0, _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.isString)(
                options,
              )
            ) {
              try {
                curOptions = JSON.parse(options);
                var formatResult = formatOptions(curOptions);
                curOptions = formatResult.options;
                optionValue = formatResult.optionValue;
              } catch (error) {
                console.warn('options 异常数据格式转换失败：', options);
              }
            }
            return {
              options: curOptions,
              optionValue: optionValue,
            };
          }

          /***/
        },

      /***/ './src/utils/typeof.js':
        /*!*****************************!*\
  !*** ./src/utils/typeof.js ***!
  \*****************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ isArray: function () {
              return /* binding */ isArray;
            },
            /* harmony export */ isBoolean: function () {
              return /* binding */ isBoolean;
            },
            /* harmony export */ isColor: function () {
              return /* binding */ isColor;
            },
            /* harmony export */ isDateStr: function () {
              return /* binding */ isDateStr;
            },
            /* harmony export */ isDateTimeStr: function () {
              return /* binding */ isDateTimeStr;
            },
            /* harmony export */ isFunction: function () {
              return /* binding */ isFunction;
            },
            /* harmony export */ isNumber: function () {
              return /* binding */ isNumber;
            },
            /* harmony export */ isObject: function () {
              return /* binding */ isObject;
            },
            /* harmony export */ isQuantity: function () {
              return /* binding */ isQuantity;
            },
            /* harmony export */ isSelect: function () {
              return /* binding */ isSelect;
            },
            /* harmony export */ isString: function () {
              return /* binding */ isString;
            },
            /* harmony export */ isTimeStr: function () {
              return /* binding */ isTimeStr;
            },
            /* harmony export */ isURL: function () {
              return /* binding */ isURL;
            },
            /* harmony export */
          });
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @wibetter/json-utils */ '@wibetter/json-utils',
            );
          /* harmony import */ var _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__,
            );

          // 判断是否是URL地址类型
          function isURL(s) {
            return /^http[s]?:\/\/.*/.test(s);
          }
          // 判断是否是字符串类型
          function isString(o) {
            return Object.prototype.toString.call(o).slice(8, -1) === 'String';
          }
          // 判断是否是数字类型
          function isNumber(value) {
            return (
              typeof value === 'number' ||
              Object.prototype.toString.call(value) === '[object Number]'
            );
          }
          // 判断是否是Boolean类型
          function isBoolean(o) {
            return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
          }

          // 判断是否是年月日的时间类型
          function isDateStr(dateStr) {
            return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
          }

          // 判断是否是年月日时分的时间类型
          function isDateTimeStr(dateStr) {
            return (
              /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(dateStr) ||
              /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateStr)
            );
          }

          // 判断是否是时分的时间类型
          function isTimeStr(dateStr) {
            return (
              /^\d{2}:\d{2}:\d{2}$/.test(dateStr) ||
              /^\d{2}:\d{2}$/.test(dateStr)
            );
          }

          /**
           *  判断是否是数组类型
           * */
          function isArray(curObj) {
            var isArray = false;
            if (
              Object.prototype.toString.call(curObj).slice(8, -1) === 'Array'
            ) {
              isArray = true;
            }
            return isArray;
          }

          /**
           *  判断是否是select多选类型(基础类型的array)
           *  select类型一定是一个array类型
           * */
          function isSelect(curObj) {
            if (!isArray(curObj)) {
              return false;
            }
            for (var ind = 0, size = curObj.length; ind < size; ind++) {
              var arrItem = curObj[ind];
              if (!isString(arrItem)) {
                // 只要有一个不是string类型就认为不是select
                return false;
              }
            }
            return true;
          }

          /**
           *  判断是否是对象类型
           * */
          function isObject(curObj) {
            var isObject = false;
            if (
              Object.prototype.toString.call(curObj).slice(8, -1) === 'Object'
            ) {
              isObject = true;
            }
            return isObject;
          }

          /**
           *  判断是否是单位类型
           * */
          function isQuantity(val) {
            var isObject = false;
            // 获取当前计量单位元素可选的单位类型
            var quantityList =
              _wibetter_json_utils__WEBPACK_IMPORTED_MODULE_0__.TypeDataList
                .quantity.properties.quantity.enum;
            if (quantityList.indexOf(val) >= 0) {
              isObject = true;
            }
            return isObject;
          }

          /**
           *  判断是否是颜色值
           * */
          function isColor(colorVal) {
            return /^#[0-9a-f]{3,6}$/.test(colorVal);
          }

          /**
           *  判断是否是函数类型
           * */
          function isFunction(curObj) {
            var isFunction = false;
            if (
              Object.prototype.toString.call(curObj).slice(8, -1) === 'Function'
            ) {
              isFunction = true;
            }
            return isFunction;
          }

          /***/
        },

      /***/ './src/utils/webCache.js':
        /*!*******************************!*\
  !*** ./src/utils/webCache.js ***!
  \*******************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ deleteJSONEditorCache: function () {
              return /* binding */ deleteJSONEditorCache;
            },
            /* harmony export */ getJSONEditorCache: function () {
              return /* binding */ getJSONEditorCache;
            },
            /* harmony export */ saveJSONEditorCache: function () {
              return /* binding */ saveJSONEditorCache;
            },
            /* harmony export */
          });
          /**
           *  将数据缓存到sessionStorage中
           * */
          function saveJSONEditorCache(key, value, cacheMark) {
            if (cacheMark === void 0) {
              cacheMark = 'json-editor-cache';
            }
            if (window.sessionStorage) {
              var cacheData = {};
              var cacheDataStr = window.sessionStorage.getItem(cacheMark);
              if (cacheDataStr) {
                cacheData = JSON.parse(cacheDataStr);
              }
              if (key) {
                cacheData[key] = value;
              }
              window.sessionStorage.setItem(
                cacheMark,
                JSON.stringify(cacheData),
              );
            }
          }

          /**
           *  从sessionStorage中读取此前缓存的数据
           * */
          function getJSONEditorCache(valueKey, cacheMark) {
            if (cacheMark === void 0) {
              cacheMark = 'json-editor-cache';
            }
            var curKeyValue;
            if (window.sessionStorage) {
              var cacheData = {};
              var cacheDataStr = window.sessionStorage.getItem(cacheMark);
              if (cacheDataStr) {
                cacheData = JSON.parse(cacheDataStr);
              }
              if (valueKey) {
                curKeyValue = cacheData[valueKey];
              }
            }
            return curKeyValue;
          }

          /**
           *  从sessionStorage中删除此前缓存的数据
           * */
          function deleteJSONEditorCache(valueKey, cacheMark) {
            if (cacheMark === void 0) {
              cacheMark = 'json-editor-cache';
            }
            if (window.sessionStorage) {
              var cacheData = {};
              var cacheDataStr = window.sessionStorage.getItem(cacheMark);
              if (cacheDataStr) {
                cacheData = JSON.parse(cacheDataStr);
              }
              if (valueKey) {
                cacheData[valueKey] = undefined;
              }
            }
          }

          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/components/JSONDataEditor/index.scss':
        /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/components/JSONDataEditor/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/main.scss':
        /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/main.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ArraySchema/index.scss':
        /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ArraySchema/index.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/BoxStyleSchema/index.scss':
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/BoxStyleSchema/index.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/CascaderSchema/index.scss':
        /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/CascaderSchema/index.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ColorFormSchemaV3/index.scss':
        /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ColorFormSchemaV3/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/DataSourceSchema/index.scss':
        /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/DataSourceSchema/index.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/DynamicDataSchema/index.scss':
        /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/DynamicDataSchema/index.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/JsonView/index.scss':
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/JsonView/index.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/NumberFormSchema/index.scss':
        /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/NumberFormSchema/index.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ObjectSchema/index.scss':
        /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ObjectSchema/index.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/PaddingAndMarginSchema/index.scss':
        /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/PaddingAndMarginSchema/index.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/RemoteDynamicDataSchema/index.scss':
        /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/RemoteDynamicDataSchema/index.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/SelectSchema/index.scss':
        /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/SelectSchema/index.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/SohuEventSchema/index.scss':
        /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/SohuEventSchema/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/TextEditorSchema/index.scss':
        /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/TextEditorSchema/index.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/ function () {
          // extracted by mini-css-extract-plugin
          /***/
        },

      /***/ './src/components/JSONDataEditor/index.scss':
        /*!**************************************************!*\
  !*** ./src/components/JSONDataEditor/index.scss ***!
  \**************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/components/JSONDataEditor/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('1fb1d0ec', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/main.scss':
        /*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./main.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/main.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('220f768b', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/ArraySchema/index.scss':
        /*!**********************************************!*\
  !*** ./src/renderers/ArraySchema/index.scss ***!
  \**********************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ArraySchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('56ceba47', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/BoxStyleSchema/index.scss':
        /*!*************************************************!*\
  !*** ./src/renderers/BoxStyleSchema/index.scss ***!
  \*************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/BoxStyleSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('31b3938e', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/CascaderSchema/index.scss':
        /*!*************************************************!*\
  !*** ./src/renderers/CascaderSchema/index.scss ***!
  \*************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/CascaderSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('4f50bcf6', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/ColorFormSchemaV3/index.scss':
        /*!****************************************************!*\
  !*** ./src/renderers/ColorFormSchemaV3/index.scss ***!
  \****************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ColorFormSchemaV3/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('f7862348', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/DataSourceSchema/index.scss':
        /*!***************************************************!*\
  !*** ./src/renderers/DataSourceSchema/index.scss ***!
  \***************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/DataSourceSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('1b6af5a2', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/DynamicDataSchema/index.scss':
        /*!****************************************************!*\
  !*** ./src/renderers/DynamicDataSchema/index.scss ***!
  \****************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/DynamicDataSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('754f9197', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/JsonView/index.scss':
        /*!*******************************************!*\
  !*** ./src/renderers/JsonView/index.scss ***!
  \*******************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/JsonView/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('4ad618f0', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/NumberFormSchema/index.scss':
        /*!***************************************************!*\
  !*** ./src/renderers/NumberFormSchema/index.scss ***!
  \***************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/NumberFormSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('ae856a32', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/ObjectSchema/index.scss':
        /*!***********************************************!*\
  !*** ./src/renderers/ObjectSchema/index.scss ***!
  \***********************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/ObjectSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('91732ad6', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/PaddingAndMarginSchema/index.scss':
        /*!*********************************************************!*\
  !*** ./src/renderers/PaddingAndMarginSchema/index.scss ***!
  \*********************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/PaddingAndMarginSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('6e510ca0', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/RemoteDynamicDataSchema/index.scss':
        /*!**********************************************************!*\
  !*** ./src/renderers/RemoteDynamicDataSchema/index.scss ***!
  \**********************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/RemoteDynamicDataSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('5737c47d', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/SelectSchema/index.scss':
        /*!***********************************************!*\
  !*** ./src/renderers/SelectSchema/index.scss ***!
  \***********************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/SelectSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('e6602b10', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/SohuEventSchema/index.scss':
        /*!**************************************************!*\
  !*** ./src/renderers/SohuEventSchema/index.scss ***!
  \**************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/SohuEventSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('4cab1cef', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ './src/renderers/TextEditorSchema/index.scss':
        /*!***************************************************!*\
  !*** ./src/renderers/TextEditorSchema/index.scss ***!
  \***************************************************/
        /***/ function (module, __unused_webpack_exports, __webpack_require__) {
          // style-loader: Adds some css to the DOM by adding a <style> tag

          // load the styles
          var content = __webpack_require__(
            /*! !!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./index.scss */ '../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-11.use[1]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[2]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[3]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11.use[4]!../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-11.use[5]!./src/renderers/TextEditorSchema/index.scss',
          );
          if (content.__esModule) content = content.default;
          if (typeof content === 'string') content = [[module.id, content, '']];
          if (content.locals) module.exports = content.locals;
          // add the styles to the DOM
          var add = __webpack_require__(
            /*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ '../../node_modules/vue-style-loader/lib/addStylesClient.js',
          )['default'];
          var update = add('54a7813a', content, false, { sourceMap: false });
          // Hot Module Replacement
          if (false) {
          }

          /***/
        },

      /***/ '../../node_modules/vue-style-loader/lib/addStylesClient.js':
        /*!******************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \******************************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: function () {
              return /* binding */ addStylesClient;
            },
            /* harmony export */
          });
          /* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./listToStyles */ '../../node_modules/vue-style-loader/lib/listToStyles.js',
            );
          /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

          var hasDocument = typeof document !== 'undefined';

          if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (!hasDocument) {
              throw new Error(
                'vue-style-loader cannot be used in a non-browser environment. ' +
                  "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
              );
            }
          }

          /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

          var stylesInDom = {
            /*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/
          };

          var head =
            hasDocument &&
            (document.head || document.getElementsByTagName('head')[0]);
          var singletonElement = null;
          var singletonCounter = 0;
          var isProduction = false;
          var noop = function () {};
          var options = null;
          var ssrIdKey = 'data-vue-ssr-id';

          // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page
          var isOldIE =
            typeof navigator !== 'undefined' &&
            /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

          function addStylesClient(parentId, list, _isProduction, _options) {
            isProduction = _isProduction;

            options = _options || {};

            var styles = (0,
            _listToStyles__WEBPACK_IMPORTED_MODULE_0__['default'])(
              parentId,
              list,
            );
            addStylesToDom(styles);

            return function update(newList) {
              var mayRemove = [];
              for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                domStyle.refs--;
                mayRemove.push(domStyle);
              }
              if (newList) {
                styles = (0,
                _listToStyles__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  parentId,
                  newList,
                );
                addStylesToDom(styles);
              } else {
                styles = [];
              }
              for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (domStyle.refs === 0) {
                  for (var j = 0; j < domStyle.parts.length; j++) {
                    domStyle.parts[j]();
                  }
                  delete stylesInDom[domStyle.id];
                }
              }
            };
          }

          function addStylesToDom(styles /* Array<StyleObject> */) {
            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];
              if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j](item.parts[j]);
                }
                for (; j < item.parts.length; j++) {
                  domStyle.parts.push(addStyle(item.parts[j]));
                }
                if (domStyle.parts.length > item.parts.length) {
                  domStyle.parts.length = item.parts.length;
                }
              } else {
                var parts = [];
                for (var j = 0; j < item.parts.length; j++) {
                  parts.push(addStyle(item.parts[j]));
                }
                stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
              }
            }
          }

          function createStyleElement() {
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            head.appendChild(styleElement);
            return styleElement;
          }

          function addStyle(obj /* StyleObjectPart */) {
            var update, remove;
            var styleElement = document.querySelector(
              'style[' + ssrIdKey + '~="' + obj.id + '"]',
            );

            if (styleElement) {
              if (isProduction) {
                // has SSR styles and in production mode.
                // simply do nothing.
                return noop;
              } else {
                // has SSR styles but in dev mode.
                // for some reason Chrome can't handle source map in server-rendered
                // style tags - source maps in <style> only works if the style tag is
                // created and inserted dynamically. So we remove the server rendered
                // styles and inject new ones.
                styleElement.parentNode.removeChild(styleElement);
              }
            }

            if (isOldIE) {
              // use singleton mode for IE9.
              var styleIndex = singletonCounter++;
              styleElement =
                singletonElement || (singletonElement = createStyleElement());
              update = applyToSingletonTag.bind(
                null,
                styleElement,
                styleIndex,
                false,
              );
              remove = applyToSingletonTag.bind(
                null,
                styleElement,
                styleIndex,
                true,
              );
            } else {
              // use multi-style-tag mode in all other cases
              styleElement = createStyleElement();
              update = applyToTag.bind(null, styleElement);
              remove = function () {
                styleElement.parentNode.removeChild(styleElement);
              };
            }

            update(obj);

            return function updateStyle(newObj /* StyleObjectPart */) {
              if (newObj) {
                if (
                  newObj.css === obj.css &&
                  newObj.media === obj.media &&
                  newObj.sourceMap === obj.sourceMap
                ) {
                  return;
                }
                update((obj = newObj));
              } else {
                remove();
              }
            };
          }

          var replaceText = (function () {
            var textStore = [];

            return function (index, replacement) {
              textStore[index] = replacement;
              return textStore.filter(Boolean).join('\n');
            };
          })();

          function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? '' : obj.css;

            if (styleElement.styleSheet) {
              styleElement.styleSheet.cssText = replaceText(index, css);
            } else {
              var cssNode = document.createTextNode(css);
              var childNodes = styleElement.childNodes;
              if (childNodes[index])
                styleElement.removeChild(childNodes[index]);
              if (childNodes.length) {
                styleElement.insertBefore(cssNode, childNodes[index]);
              } else {
                styleElement.appendChild(cssNode);
              }
            }
          }

          function applyToTag(styleElement, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;

            if (media) {
              styleElement.setAttribute('media', media);
            }
            if (options.ssrId) {
              styleElement.setAttribute(ssrIdKey, obj.id);
            }

            if (sourceMap) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              css +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) +
                ' */';
            }

            if (styleElement.styleSheet) {
              styleElement.styleSheet.cssText = css;
            } else {
              while (styleElement.firstChild) {
                styleElement.removeChild(styleElement.firstChild);
              }
              styleElement.appendChild(document.createTextNode(css));
            }
          }

          /***/
        },

      /***/ '../../node_modules/vue-style-loader/lib/listToStyles.js':
        /*!***************************************************************!*\
  !*** ../../node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***************************************************************/
        /***/ function (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__,
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: function () {
              return /* binding */ listToStyles;
            },
            /* harmony export */
          });
          /**
           * Translates the list format produced by css-loader into something
           * easier to manipulate.
           */
          function listToStyles(parentId, list) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
              var item = list[i];
              var id = item[0];
              var css = item[1];
              var media = item[2];
              var sourceMap = item[3];
              var part = {
                id: parentId + ':' + i,
                css: css,
                media: media,
                sourceMap: sourceMap,
              };
              if (!newStyles[id]) {
                styles.push((newStyles[id] = { id: id, parts: [part] }));
              } else {
                newStyles[id].parts.push(part);
              }
            }
            return styles;
          }

          /***/
        },

      /***/ '@ant-design/icons':
        /*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@ant-design/icons');

          /***/
        },

      /***/ '@babel/runtime/helpers/applyDecoratedDescriptor':
        /*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/applyDecoratedDescriptor" ***!
  \******************************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@babel/runtime/helpers/applyDecoratedDescriptor');

          /***/
        },

      /***/ '@babel/runtime/helpers/createClass':
        /*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@babel/runtime/helpers/createClass');

          /***/
        },

      /***/ '@babel/runtime/helpers/extends':
        /*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@babel/runtime/helpers/extends');

          /***/
        },

      /***/ '@babel/runtime/helpers/inheritsLoose':
        /*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/inheritsLoose" ***!
  \*******************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@babel/runtime/helpers/inheritsLoose');

          /***/
        },

      /***/ '@babel/runtime/helpers/initializerDefineProperty':
        /*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/initializerDefineProperty" ***!
  \*******************************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@babel/runtime/helpers/initializerDefineProperty');

          /***/
        },

      /***/ '@babel/runtime/helpers/initializerWarningHelper':
        /*!******************************************************************!*\
  !*** external "@babel/runtime/helpers/initializerWarningHelper" ***!
  \******************************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@babel/runtime/helpers/initializerWarningHelper');

          /***/
        },

      /***/ '@wibetter/json-utils':
        /*!***************************************!*\
  !*** external "@wibetter/json-utils" ***!
  \***************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('@wibetter/json-utils');

          /***/
        },

      /***/ 'ace-builds/src-noconflict/mode-html':
        /*!******************************************************!*\
  !*** external "ace-builds/src-noconflict/mode-html" ***!
  \******************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('ace-builds/src-noconflict/mode-html');

          /***/
        },

      /***/ 'ace-builds/src-noconflict/mode-javascript':
        /*!************************************************************!*\
  !*** external "ace-builds/src-noconflict/mode-javascript" ***!
  \************************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('ace-builds/src-noconflict/mode-javascript');

          /***/
        },

      /***/ 'ace-builds/src-noconflict/mode-json':
        /*!******************************************************!*\
  !*** external "ace-builds/src-noconflict/mode-json" ***!
  \******************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('ace-builds/src-noconflict/mode-json');

          /***/
        },

      /***/ 'ace-builds/src-noconflict/theme-monokai':
        /*!**********************************************************!*\
  !*** external "ace-builds/src-noconflict/theme-monokai" ***!
  \**********************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('ace-builds/src-noconflict/theme-monokai');

          /***/
        },

      /***/ 'ace-builds/src-noconflict/theme-solarized_light':
        /*!******************************************************************!*\
  !*** external "ace-builds/src-noconflict/theme-solarized_light" ***!
  \******************************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('ace-builds/src-noconflict/theme-solarized_light');

          /***/
        },

      /***/ antd:
        /*!***********************!*\
  !*** external "antd" ***!
  \***********************/
        /***/ function (module) {
          'use strict';
          module.exports = require('antd');

          /***/
        },

      /***/ 'braft-editor':
        /*!*******************************!*\
  !*** external "braft-editor" ***!
  \*******************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('braft-editor');

          /***/
        },

      /***/ 'braft-editor/dist/index.css':
        /*!**********************************************!*\
  !*** external "braft-editor/dist/index.css" ***!
  \**********************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('braft-editor/dist/index.css');

          /***/
        },

      /***/ 'braft-extensions/dist/color-picker':
        /*!*****************************************************!*\
  !*** external "braft-extensions/dist/color-picker" ***!
  \*****************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('braft-extensions/dist/color-picker');

          /***/
        },

      /***/ 'braft-extensions/dist/color-picker.css':
        /*!*********************************************************!*\
  !*** external "braft-extensions/dist/color-picker.css" ***!
  \*********************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('braft-extensions/dist/color-picker.css');

          /***/
        },

      /***/ 'braft-extensions/dist/table':
        /*!**********************************************!*\
  !*** external "braft-extensions/dist/table" ***!
  \**********************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('braft-extensions/dist/table');

          /***/
        },

      /***/ 'braft-extensions/dist/table.css':
        /*!**************************************************!*\
  !*** external "braft-extensions/dist/table.css" ***!
  \**************************************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('braft-extensions/dist/table.css');

          /***/
        },

      /***/ 'lodash/camelCase':
        /*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('lodash/camelCase');

          /***/
        },

      /***/ mobx:
        /*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
        /***/ function (module) {
          'use strict';
          module.exports = require('mobx');

          /***/
        },

      /***/ 'mobx-react':
        /*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('mobx-react');

          /***/
        },

      /***/ moment:
        /*!*************************!*\
  !*** external "moment" ***!
  \*************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('moment');

          /***/
        },

      /***/ 'prop-types':
        /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('prop-types');

          /***/
        },

      /***/ react:
        /*!************************!*\
  !*** external "react" ***!
  \************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('react');

          /***/
        },

      /***/ 'react-ace':
        /*!****************************!*\
  !*** external "react-ace" ***!
  \****************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('react-ace');

          /***/
        },

      /***/ 'react-color':
        /*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('react-color');

          /***/
        },

      /***/ 'react-dom':
        /*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
        /***/ function (module) {
          'use strict';
          module.exports = require('react-dom');

          /***/
        },

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ id: moduleId,
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__,
      );
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ !(function () {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function () {
                return module['default'];
              }
            : /******/ function () {
                return module;
              };
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ !(function () {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = function (exports, definition) {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ !(function () {
      /******/ __webpack_require__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ !(function () {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module',
          });
          /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
    !(function () {
      'use strict';
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: function () {
          return /* binding */ JSONEditor;
        },
        /* harmony export */
      });
      /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @babel/runtime/helpers/inheritsLoose */ '@babel/runtime/helpers/inheritsLoose',
        );
      /* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__,
        );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! react */ 'react');
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! react-dom */ 'react-dom');
      /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_2__,
        );
      /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! mobx-react */ 'mobx-react');
      /* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          mobx_react__WEBPACK_IMPORTED_MODULE_3__,
        );
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! prop-types */ 'prop-types');
      /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__,
        );
      /* harmony import */ var $store_index__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(/*! $store/index */ './src/store/index.js');
      /* harmony import */ var $components_JSONDataEditor_index__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! $components/JSONDataEditor/index */ './src/components/JSONDataEditor/index.js',
        );
      /* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_7__ =
        __webpack_require__(/*! ./main.scss */ './src/main.scss');
      /* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_7___default =
        /*#__PURE__*/ __webpack_require__.n(
          _main_scss__WEBPACK_IMPORTED_MODULE_7__,
        );

      /**
       * JSONEditor功能组件
       * @param props
       * @constructor
       */
      var JSONEditor = /*#__PURE__*/ (function (_React$PureComponent) {
        function JSONEditor(props) {
          var _this;
          _this = _React$PureComponent.call(this, props) || this;
          _this.state = {
            rootJSONStore: new $store_index__WEBPACK_IMPORTED_MODULE_5__[
              'default'
            ](), // 初始化一份rootJSONStore
          };
          return _this;
        }
        _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(
          JSONEditor,
          _React$PureComponent,
        );
        var _proto = JSONEditor.prototype;
        _proto.render = function render() {
          var element = this.props.element;
          var rootJSONStore = this.state.rootJSONStore;
          var renderContent =
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
              mobx_react__WEBPACK_IMPORTED_MODULE_3__.Provider,
              {
                JSONSchemaStore: rootJSONStore.JSONSchemaStore,
                JSONEditorStore: rootJSONStore.JSONEditorStore,
              },
              /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
                $components_JSONDataEditor_index__WEBPACK_IMPORTED_MODULE_6__[
                  'default'
                ],
                this.props,
              ),
            );
          if (element) {
            react_dom__WEBPACK_IMPORTED_MODULE_2___default().render(
              renderContent,
              element,
            ); // 挂载到指定位置
            return '';
          }
          return renderContent; // 直接输出dom元素
        };
        return JSONEditor;
      })(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent);
      JSONEditor.propTypes = {
        viewStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
        wideScreen: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
        onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,
        jsonView: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
        schemaData: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
        jsonData: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
        element: prop_types__WEBPACK_IMPORTED_MODULE_4___default().any,
      };
    })();
    /******/ return __webpack_exports__;
    /******/
  })();
});
