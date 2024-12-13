/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define([], t)
      : 'object' == typeof exports
        ? (exports.JSONUtils = t())
        : (e.JSONUtils = t());
})(this, function () {
  return (function () {
    'use strict';
    var e = {
        d: function (t, r) {
          for (var i in r)
            e.o(r, i) &&
              !e.o(t, i) &&
              Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
        },
        o: function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        },
        r: function (e) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        },
      },
      t = {};
    e.r(t),
      e.d(t, {
        DataSourceTypeList: function () {
          return O;
        },
        EventTypeDataList: function () {
          return h;
        },
        KeyWordList: function () {
          return ce;
        },
        TypeDataList: function () {
          return g;
        },
        dataRoute2dataPath: function () {
          return oe;
        },
        dynamicDataAnalyzer: function () {
          return ne;
        },
        getCurPosition: function () {
          return Y;
        },
        getDefaultOptionVal: function () {
          return G;
        },
        getExpectType: function () {
          return A;
        },
        getJsonDataByKeyRoute: function () {
          return l;
        },
        getNextIndexRoute: function () {
          return Z;
        },
        getParentIndexRoute: function () {
          return W;
        },
        getParentIndexRoute_CurIndex: function () {
          return z;
        },
        getParentKeyRoute: function () {
          return pe;
        },
        getParentKeyRoute_CurKey: function () {
          return ue;
        },
        getSchemaByIndexRoute: function () {
          return p;
        },
        getSchemaByKeyRoute: function () {
          return u;
        },
        hasProperties: function () {
          return n;
        },
        indexRoute2keyRoute: function () {
          return c;
        },
        isArray: function () {
          return R;
        },
        isBoolean: function () {
          return T;
        },
        isColor: function () {
          return F;
        },
        isContainerSchema: function () {
          return K;
        },
        isDateStr: function () {
          return S;
        },
        isDateTimeStr: function () {
          return N;
        },
        isEmptySchema: function () {
          return J;
        },
        isEqual: function () {
          return a;
        },
        isFunction: function () {
          return I;
        },
        isNewSchemaData: function () {
          return V;
        },
        isNumber: function () {
          return x;
        },
        isObject: function () {
          return E;
        },
        isQuantity: function () {
          return q;
        },
        isSameParent: function () {
          return X;
        },
        isSelect: function () {
          return k;
        },
        isString: function () {
          return C;
        },
        isStructuredSchema: function () {
          return U;
        },
        isTimeStr: function () {
          return D;
        },
        isURL: function () {
          return j;
        },
        json2schema: function () {
          return P;
        },
        json2treeData: function () {
          return le;
        },
        keyRoute2indexRoute: function () {
          return s;
        },
        metaElemAnalyzer: function () {
          return M;
        },
        moveBackward: function () {
          return Q;
        },
        moveForward: function () {
          return H;
        },
        objClone: function () {
          return i;
        },
        oldSchemaToNewSchema: function () {
          return $;
        },
        oldSchemaToNewSchemaV1: function () {
          return _;
        },
        registerExpectType: function () {
          return B;
        },
        schema2json: function () {
          return ie;
        },
        schemaMetaList: function () {
          return ae;
        },
        truncate: function () {
          return o;
        },
      });
    var r = require('lodash');
    function i(e) {
      return (0, r.cloneDeep)(e);
    }
    function a(e, t) {
      return (0, r.isEqual)(e, t);
    }
    function n(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function o(e, t) {
      return (0, r.truncate)(e, t);
    }
    function l(e, t, r) {
      var a = t;
      if ((r && (a = i(t)), e))
        for (var n = e.split('-'), o = 0, l = n.length; o < l; o++) {
          var p = n[o];
          p && (a = a && a[p]);
        }
      return a;
    }
    function p(e, t, r) {
      var a = t;
      if ((r && (a = i(t)), e))
        for (var n = e.split('-'), o = 0, l = n.length; o < l; o++) {
          var p = n[o];
          if (
            '0' !== p ||
            ('array' !== a.type &&
              'radio' !== a.type &&
              'select' !== a.type &&
              'checkboxes' !== a.type) ||
            (!a.options && !a.items)
          ) {
            if (p) {
              var u = '0';
              a.propertyOrder
                ? (u = a.propertyOrder[p])
                : a.properties && (u = Object.keys(a.properties)[p]),
                (a = a.properties[u]);
            }
          } else a = a.options || a.items;
        }
      return a;
    }
    function u(e, t, r) {
      var a = t;
      if ((r && (a = i(t)), e && a))
        for (var n = e.split('-'), o = 0, l = n.length; o < l; o++) {
          var p = n[o];
          p && a.properties && (a = a.properties[p]);
        }
      return a;
    }
    function c(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), n = 0, o = a.length;
        n < o;
        n++
      ) {
        var l = a[n];
        if ('0' === l && r.items)
          (r = r.items), (i = i ? i + '-items' : 'items');
        else if ('0' === l && r.options)
          (r = r.options), (i = i ? i + '-options' : 'options');
        else if (l) {
          var p = '0';
          r.propertyOrder
            ? (p = r.propertyOrder[l])
            : r.properties && (p = Object.keys(r.properties)[l]),
            (r = r.properties[p]),
            (i = i ? i + '-' + p : p);
        }
      }
      return i;
    }
    function s(e, t) {
      for (
        var r = t, i = '', a = e.split('-'), n = 0, o = a.length;
        n < o;
        n++
      ) {
        var l = a[n];
        if (l) {
          var p = -1;
          r.propertyOrder
            ? ((p = r.propertyOrder.indexOf(l)), (r = r.properties[l]))
            : r.properties
              ? ((p = Object.keys(r.properties).indexOf(l)),
                (r = r.properties[l]))
              : r.items
                ? ((p = 0), (r = r.items))
                : r.options && ((p = 0), (r = r.options)),
            (i = i ? i + '-' + p : p.toString());
        }
      }
      return i;
    }
    var d,
      f,
      y = {
        type: 'event',
        title: '事件',
        isContainer: !1,
        properties: {
          type: {
            default: 'emit',
            type: 'select',
            options: [
              { label: 'on', value: 'on' },
              { label: 'emit', value: 'emit' },
            ],
            title: '事件类型',
          },
          trigger: {
            type: 'input',
            default: 'eventName',
            title: '触发事件',
            description: '用于输入触发事件的名称',
            placeholder: '请输入触发事件的名称',
          },
          eventData: {
            title: '事件数据',
            type: 'json',
            default: '{}',
            description: '传递给触发事件的数据对象',
          },
        },
        propertyOrder: ['type', 'trigger', 'eventData'],
      },
      m = {
        type: 'datasource',
        title: '数据源',
        isContainer: !1,
        properties: {
          type: {
            default: 'local',
            type: 'select',
            options: [
              { label: '本地数据', value: 'local' },
              { label: '接口数据', value: 'remote' },
            ],
            title: '数据源类型',
          },
          data: {
            title: '本地json数据',
            placeholder: '请输入静态json数据',
            type: 'json',
            default: '{}',
            description: '用于设置本地的静态json数据',
            isRequired: !0,
          },
          filter: {
            title: '过滤器',
            type: 'codearea',
            default: '() => {}',
            description: '用于定义过滤当前数据的函数',
            isRequired: !0,
          },
        },
        propertyOrder: ['type', 'data', 'filter'],
      },
      b =
        (((d = { type: 'object' }).type = 'datasource'),
        (d.title = '数据源'),
        (d.isContainer = !1),
        (d.properties = {
          type: {
            type: 'select',
            default: 'remote',
            options: [
              { label: '本地数据', value: 'local' },
              { label: '接口数据', value: 'remote' },
            ],
            title: '数据源类型',
          },
          data: {
            type: 'url',
            title: '远程json数据',
            placeholder: '请输入远程json数据源地址',
            default: 'http://xxx',
            isRequired: !0,
            description: '用于设置获取元素数据的请求地址',
          },
          filter: {
            type: 'codearea',
            title: '过滤器',
            default: '() => {}',
            description: '用于定义过滤当前数据的函数',
            isRequired: !0,
          },
        }),
        (d.propertyOrder = ['type', 'data', 'filter']),
        d),
      v = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      g = {
        jsonschema: {
          type: 'object',
          title: 'jsonSchemaObject',
          properties: {
            func: {
              type: 'object',
              title: '功能设置',
              isContainer: !1,
              properties: {
                a: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                },
              },
              propertyOrder: ['a'],
            },
            style: {
              type: 'object',
              title: '样式设置',
              isContainer: !1,
              properties: {
                b: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
              },
              propertyOrder: ['b'],
            },
            data: {
              type: 'data',
              title: '数据设置',
              isContainer: !1,
              properties: {
                c: {
                  title: '单文本框',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                  isRequired: !1,
                },
              },
              propertyOrder: ['c'],
            },
          },
          propertyOrder: ['func', 'style', 'data'],
        },
        input: {
          title: '单文本框',
          type: 'input',
          default: '',
          description: '',
          placeholder: '',
        },
        boolean: {
          type: 'boolean',
          title: '布尔值',
          default: !1,
          description: '',
        },
        object: {
          type: 'object',
          title: '对象Object',
          description: '',
          properties: {
            a: {
              type: 'input',
              title: '单文本框',
              default: '',
              description: '',
              placeholder: '',
            },
          },
          propertyOrder: ['a'],
        },
        array: {
          type: 'array',
          title: '数组Array',
          description: '',
          items: {
            type: 'object',
            title: '数组项',
            description: '',
            properties: {
              name: {
                type: 'input',
                title: '名字',
                default: '',
                description: '',
                placeholder: '',
              },
            },
            propertyOrder: ['name'],
          },
        },
        'empty-array': {
          type: 'array',
          title: '数组Array',
          description: '',
          items: {
            type: 'object',
            title: '数组项',
            description: '',
            properties: {},
          },
        },
        'empty-object': {
          type: 'object',
          title: '对象Object',
          description: '',
          properties: {},
        },
        url: {
          type: 'url',
          title: '链接地址url',
          default: '',
          description: '',
          placeholder: '',
        },
        textarea: {
          type: 'textarea',
          title: '多行文本框',
          default: '',
          description: '',
          placeholder: '',
        },
        color: {
          type: 'color',
          title: '颜色color',
          default: '#ffffff',
          description: '',
        },
        image: {
          title: '图片',
          type: 'image',
          default: '',
          description: '上传图片',
          imgWidth: 200,
          imgHeight: 200,
          imgRatioReadOnly: !0,
        },
        number: {
          type: 'number',
          title: '数量number',
          default: 1,
          minimum: 0,
          maximum: 1e3,
          description: '',
        },
        json: {
          title: 'json数据',
          type: 'json',
          default: '{}',
          description: '',
        },
        codearea: {
          type: 'codearea',
          title: '函数类型',
          placeholder: '请输入函数方法',
          default: 'function func() { console.log("hello, world!"); }',
          description: '用于定义函数方法',
        },
        htmlarea: {
          title: '富文本',
          type: 'htmlarea',
          placeholder: '请输入html代码片段',
          default: '<p>hello,world!</p>',
          description: '用于放置html代码片段',
        },
        'text-editor': {
          type: 'text-editor',
          title: '富文本',
          default: '',
          description: '',
          placeholder: '',
        },
        date: {
          type: 'date',
          title: '日期Date',
          default: '',
          description: '',
          placeholder: '',
        },
        'date-time': {
          type: 'date-time',
          title: '日期时间',
          default: '',
          description: '',
          placeholder: '',
        },
        time: {
          type: 'time',
          title: '时间Time',
          default: '',
          description: '',
          placeholder: '',
        },
        quantity: {
          type: 'quantity',
          title: '单位计量',
          isContainer: !1,
          properties: {
            unit: {
              type: 'number',
              title: '单位数值',
              default: 50,
              minimum: 0,
              maximum: 1e3,
              description: '',
            },
            quantity: {
              type: 'select',
              default: 'px',
              options: [
                { label: 'px', value: 'px' },
                { label: 'rem', value: 'rem' },
                { label: 'em', value: 'em' },
                { label: '%', value: '%' },
              ],
              title: '单位类型',
            },
          },
          propertyOrder: ['unit', 'quantity'],
        },
        'box-style': {
          type: 'box-style',
          title: '盒子模型',
          isContainer: !1,
          properties: {
            unit: {
              title: '单位数值',
              type: 'input',
              default: '0',
              description: '',
            },
            quantity: {
              type: 'select',
              default: 'px',
              options: [
                { label: 'px', value: 'px' },
                { label: 'rem', value: 'rem' },
                { label: 'em', value: 'em' },
                { label: '%', value: '%' },
              ],
              title: '单位类型',
            },
          },
          propertyOrder: ['unit', 'quantity'],
        },
        radio: {
          type: 'radio',
          title: '单选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: 'a',
          description: '',
        },
        select: {
          type: 'select',
          title: '下拉选择',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: 'a',
          description: '',
        },
        checkboxes: {
          type: 'checkboxes',
          title: '多选',
          options: [
            { label: '选项a', value: 'a' },
            { label: '选项b', value: 'b' },
            { label: '选项c', value: 'c' },
          ],
          default: ['a'],
          description: '',
        },
        'dynamic-data': {
          type: 'dynamic-data',
          title: '动态数据源',
          isContainer: !1,
          properties: {
            type: {
              default: 'local',
              type: 'select',
              options: [
                { label: '本地数据', value: 'local' },
                { label: '接口数据', value: 'remote' },
              ],
              title: '数据类型',
            },
            config: {
              title: '接口配置',
              type: 'object',
              description: '用于存放接口的配置数据(url、请求参数等)',
              isRequired: !0,
              properties: {
                dataName: {
                  default: 'local',
                  type: 'select',
                  options: [
                    { label: '本地数据', value: 'local' },
                    { label: '接口数据', value: 'remote' },
                  ],
                  title: '数据类型',
                },
                body: {
                  type: 'object',
                  title: '请求参数配置',
                  description: '用于配置当前接口的请求参数数值',
                  isRequired: !0,
                },
                filter: {
                  title: '过滤器函数体',
                  type: 'codearea',
                  default: 'return data;',
                  description: '用于定义过滤接口数据',
                  isRequired: !0,
                },
              },
              propertyOrder: ['dataName', 'body', 'filter'],
            },
            data: {
              title: '数据内容',
              type: 'json',
              default: '{}',
              description: '用于存放DynamicData的数据内容',
              isRequired: !0,
            },
            localFilter: {
              title: '过滤器',
              type: 'codearea',
              default: 'return data;',
              description: '用于定义过滤本地数据',
              isRequired: !0,
            },
          },
          propertyOrder: ['type', 'config', 'data', 'localFilter'],
        },
        datasource: m,
        event: y,
        'dynamic-config': {
          type: 'dynamic-config',
          title: '动态配置',
          description: '',
          isContainer: !1,
          properties: {
            type: {
              type: 'select',
              title: '数据来源',
              options: [
                { label: '模板直接设置', value: 'DevDefaults' },
                { label: 'mp后台配置', value: 'ContentStaticConfig' },
                { label: '内容Meta数据', value: 'Content' },
                { label: '全局配置数据', value: 'RuntimeConst' },
                { label: '资源中心配置', value: 'ResourceCenter' },
              ],
              default: 'DevDefaults',
              isConditionProp: !0,
              description:
                '目前支持的数据来源包括： 1)模版直接设置:在模版配置直接生效，支持直接输入或图片上传。 2)mp后台配置:选择mp后台配置后，属性会出现在mp后台中，支持属性描述的输入。 3)内容meta数据:支持内容meta数据的获取，页面meta数据。 4)全局配置数据:目前支持的全局配置包括：全局Tab配置及主题包配置。相关属性会挂载至：window.globalConst',
            },
            value: {
              title: '数据值',
              type: 'input',
              default: '',
              description: '',
              placeholder: '',
            },
            description: {
              title: '属性名称',
              type: 'input',
              default: '',
              description: '',
              placeholder: '',
            },
            valueType: {
              type: 'radio',
              title: '配置方式',
              options: [
                { label: '填写', value: 'string' },
                { label: '选择', value: 'select' },
              ],
              default: 'string',
              isConditionProp: !0,
              description: '',
            },
            range: {
              type: 'select',
              title: '可选项',
              multiple: !0,
              options: [],
              description: '这里会使用value中的配置选项作为options',
            },
          },
          propertyOrder: ['type', 'value', 'description', 'valueType', 'range'],
          showCodeViewBtn: !1,
        },
        'sohu-source': {
          type: 'sohu-source',
          title: '组件动态数据',
          description: '',
          isContainer: !1,
          properties: {
            mainConfig: {
              type: 'object',
              title: '主要配置',
              description: '',
              isContainer: !1,
              properties: {
                type: {
                  type: 'select',
                  title: '数据来源',
                  isConditionProp: !0,
                  options: [
                    { label: '模板直接配置', value: 'RuntimeDataSelfDefine' },
                    { label: 'mp后台配置', value: 'ContentStaticConfig' },
                    {
                      label: '请求当前页面数据',
                      value: 'RuntimeDataSelfContent',
                    },
                    { label: '资源中心配置', value: 'ResourceCenter' },
                  ],
                  default: 'ContentStaticConfig',
                  description: '',
                },
                description: {
                  title: '数据源名称',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
                dataType: {
                  type: 'radio',
                  title: '请求方式',
                  options: [
                    { label: '批量请求', value: 'FROMCIS' },
                    { label: '组件内部请求', value: 'FROMCOMPCIS' },
                    { label: '不请求', value: 'false' },
                  ],
                  description: '',
                },
                CONTENTID: {
                  title: '数据源ID',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
                CONTENTTYPE: {
                  type: 'select',
                  title: '数据源类型',
                  options: [
                    { label: 'channle', value: 'channle' },
                    { label: 'topic', value: 'topic' },
                    { label: 'block', value: 'block' },
                  ],
                  description: '',
                },
              },
              propertyOrder: [
                'type',
                'description',
                'dataType',
                'CONTENTID',
                'CONTENTTYPE',
              ],
              showCodeViewBtn: !1,
            },
            outConfig: {
              type: 'object',
              title: '出流配置',
              description: '',
              isContainer: !1,
              properties: {
                PRO: {
                  type: 'select',
                  title: '内容类型',
                  options: [
                    { label: '置顶+加精', value: '4' },
                    { label: '长效置顶', value: '5' },
                  ],
                  description: '',
                },
                FEEDTYPE: {
                  type: 'select',
                  title: '排序类型',
                  options: [
                    { label: '综合', value: 'XTOPIC_SYNTHETICAL' },
                    { label: '最新', value: 'XTOPIC_LATEST' },
                    { label: '相关', value: 'XTOPIC_RELATED' },
                  ],
                  description: '',
                },
                VIEW: {
                  type: 'select',
                  title: '数据裁剪',
                  options: [
                    { label: '相关推荐模式', value: 'articleFeedMode' },
                    { label: '文字链裁剪方式', value: 'textMode' },
                    { label: '短内容摘录方式', value: 'excerptMode' },
                    {
                      label: '互动（点赞/评论）裁剪方式',
                      value: 'interactMode',
                    },
                    { label: '评论文字链裁剪方式', value: 'commentTextMode' },
                    {
                      label: '摘录方式（无点赞）',
                      value: 'excerptCommentMode',
                    },
                    { label: '无限流卡片模式', value: 'dynamicFeedMode' },
                    { label: '时间线模式', value: 'timeLineMode' },
                    { label: '复合内容流模式', value: 'multiFeedMode' },
                    { label: '搜狐号推荐模式', value: 'recommendFeedMode' },
                    { label: '作者页内容流模式', value: 'operateFeedMode' },
                    { label: '标签内容流模式', value: 'tagsFeedMode' },
                    { label: '评论链裁剪方式', value: 'commentMode' },
                    { label: '标签摘录方式', value: 'excerptTagsMode' },
                    { label: '内容流模式', value: 'feedMode' },
                  ],
                  description: '',
                },
                CONTENTCONTEXT: {
                  type: 'select',
                  title: 'mKey参数',
                  options: [
                    {
                      label: '作者ID+栏目ID',
                      value: 'authorColumnId_${#authorColumnId}',
                    },
                    {
                      label: '账号ID',
                      value: 'accountId_${#contentData_account_id}',
                    },
                    { label: 'mkeyID', value: 'mid_${#mkeyConst_mid}' },
                    { label: 'mkey名称', value: 'mname_${#mkeyConst_mname}' },
                    {
                      label: '城市Code码',
                      value: 'cityCode_${#cityInfo_cityCode}',
                    },
                    {
                      label: '城市名称',
                      value: 'cityName_${#cityInfo_cityName}',
                    },
                    {
                      label: '焦点城市Code码',
                      value: 'focusCityCode_${#focusCityInfo_cityCode}',
                    },
                  ],
                  description: '',
                },
                CONTENTPARAMS: {
                  title: '动态参数',
                  type: 'json',
                  default: '{}',
                  description: '请填写JSON格式的参数',
                  placeholder: '',
                },
              },
              propertyOrder: [
                'PRO',
                'FEEDTYPE',
                'VIEW',
                'CONTENTCONTEXT',
                'CONTENTPARAMS',
              ],
              showCodeViewBtn: !1,
            },
            otherConfig: {
              type: 'object',
              title: '选配内容',
              description: '',
              isContainer: !1,
              properties: {
                SIZE: {
                  type: 'number',
                  title: '容量',
                  default: 1,
                  minimum: 0,
                  maximum: 1e3,
                  description: '',
                },
                TITLE: {
                  title: '标题',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
                CODE: {
                  title: 'Code参数',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
                URL: {
                  type: 'url',
                  title: '跳转链接',
                  default: '',
                  description: '',
                  placeholder: '',
                },
              },
              propertyOrder: ['SIZE', 'TITLE', 'URL', 'CODE'],
              showCodeViewBtn: !1,
            },
          },
          propertyOrder: ['mainConfig', 'otherConfig', 'outConfig'],
          showCodeViewBtn: !1,
        },
      },
      h = {
        on: {
          type: 'event',
          title: '事件',
          isContainer: !1,
          properties: {
            type: {
              default: 'on',
              type: 'select',
              options: [
                { label: 'on', value: 'on' },
                { label: 'emit', value: 'emit' },
              ],
              title: '事件类型',
            },
            register: {
              type: 'input',
              default: 'eventName',
              title: '注册事件',
              description: '用于输入注册事件的名称',
              placeholder: '请输入注册事件的名称',
            },
            actionFunc: {
              title: '执行函数',
              type: 'codearea',
              default: '() => {}',
              description: '',
            },
          },
          propertyOrder: ['type', 'register', 'actionFunc'],
        },
        emit: y,
      },
      O = { local: m, remote: b };
    function j(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function C(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function x(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function T(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function S(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function N(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function D(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function R(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function k(e) {
      if (!R(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!C(e[t])) return !1;
      return !0;
    }
    function E(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function q(e) {
      var t = !1;
      return g.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function F(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function I(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function P(e) {
      var t;
      return (
        (t =
          e && E(e)
            ? (function (e) {
                var t;
                if (E(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = R(e.data) || E(e.data) ? i(O.local) : i(O.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = i(h.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = i(h.on))
                        : e.quantity && q(e.quantity) && 2 === r.length
                          ? (t = i(g.quantity))
                          : ((t = i(g['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var i = e[r];
                              t.properties[r] = P(i);
                            }));
                }
                return t;
              })(e)
            : e && R(e)
              ? (function (e) {
                  var t;
                  if (e && R(e))
                    if (k(e)) {
                      (t = i(g.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        a = e.length;
                      if (a > r)
                        for (var n = r, o = a; n < o; n++)
                          t.items.enumextra.push('选项' + e(n));
                    } else {
                      t = i(g['empty-array']);
                      var l = P(e[0]);
                      t.items.properties = l.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (T(e)) t = i(g.boolean);
                  else if (x(e)) t = i(g.number);
                  else if (j(e)) t = i(g.url);
                  else if (S(e)) t = i(g.date);
                  else if (N(e)) t = i(g['date-time']);
                  else if (D(e)) t = i(g.time);
                  else if (F(e)) t = i(g.color);
                  else
                    try {
                      t = x(JSON.parse(e)) ? i(g.input) : i(g.json);
                    } catch (r) {
                      t = e && e.length > 30 ? i(g.textarea) : i(g.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function w(e, t) {
      var r = t || {};
      return (
        E(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var i = e.properties[t];
              r = M(i, r);
            },
          ),
        r
      );
    }
    function M(e, t) {
      var r = !t,
        i = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var a = e.type;
        'object' === a || 'func' === a || 'style' === a || 'data' === a
          ? (!r && i.object ? (i.object += 1) : r || (i.object = 1),
            (i = w(e, i)))
          : 'array' === a
            ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
              (i = w((e = e.items), i)))
            : !r && i[a]
              ? (i[a] += 1)
              : r || (i[a] = 1);
      }
      return i;
    }
    function _(e) {
      var t = i(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !n(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: i(t.enum),
              enumextra: i(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          a = i(g.quantity);
        if (r.quantity && E(r.quantity) && r.quantity.default) {
          var o = r.quantity.default;
          a.properties.quantity.default = 'percent' === o ? '%' : o;
        }
        t = a;
      }
      if ('datasource' === t.type) {
        var l = t.properties,
          p = l.type && l.type.default,
          u = l.data && l.data.default,
          c = l.filter && l.filter.default;
        'local' === p
          ? ((t = i(O.local)).properties.data.default = u ? i(u) : '{}')
          : ((t = i(O.remote)).properties.data.default = u
              ? i(u)
              : 'http://xxx'),
          (t.properties.filter.default = c ? i(c) : '() => {}');
      }
      if ('event' === t.type) {
        var s = t.properties,
          d = s.type && s.type.default;
        if ('in' === d || 'on' === d) {
          var f = (s.filter && s.filter.default) || '() => {}';
          (t = i(h.on)),
            s.actionFunc &&
              E(s.actionFunc) &&
              (t.properties.actionFunc.default = s.actionFunc.default || i(f));
        } else {
          var y = (s.filter && s.filter.default) || '{}';
          (t = i(h.emit)),
            s.eventData &&
              E(s.eventData) &&
              (t.properties.eventData.default = s.eventData.default || i(y));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = $(t.properties[e]);
          })),
        t.items && (t.items = $(t.items)),
        t
      );
    }
    function $(e) {
      var t = i(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !n(t.default) ||
          delete t.default,
        ('radio' !== t.type &&
          'checkboxes' !== t.type &&
          'select' !== t.type) ||
          (t.items &&
            t.items.enum &&
            t.items.enumextra &&
            ((t.options = []),
            t.items.enum.forEach(function (e, r) {
              t.options.push({ label: t.items.enumextra[r] || e, value: e });
            }),
            delete t.items)),
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = $(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = $(t.items)),
        t
      );
    }
    var L =
      (((f = {
        array: 'array',
        boolean: 'boolean',
        'box-style': 'object',
        codearea: 'string',
        color: 'string',
        datasource: 'object',
        date: 'string',
        'date-time': 'string',
        'dynamic-data': 'object',
        event: 'object',
        'func-body': 'string',
        htmlarea: 'string',
        image: 'string',
        input: 'string',
        json: 'string',
        number: 'number',
        object: 'object',
        quantity: 'object',
        radio: 'string',
        select: 'array',
      }).select = 'string'),
      (f.textarea = 'string'),
      (f['text-editor'] = 'string'),
      (f.time = 'string'),
      (f.url = 'string'),
      (f['dynamic-config'] = 'object'),
      (f['sohu-source'] = 'object'),
      f);
    function A(e) {
      return L[e] || e;
    }
    function B(e, t) {
      L[e]
        ? console.warn('当前已经存在' + e + '(' + L[e] + ')，暂时不支持覆盖。')
        : (L[e] = t);
    }
    function J(e) {
      var t = !0;
      if (!e) return t;
      var r = e.type;
      return (
        (('object' === r &&
          e.properties &&
          e.propertyOrder &&
          e.propertyOrder.length > 0) ||
          ('array' === r &&
            e.items &&
            e.items.properties &&
            e.items.propertyOrder &&
            e.items.propertyOrder.length > 0) ||
          (e.type && 'array' !== e.type && 'object' !== e.type) ||
          e.type) &&
          (t = !1),
        t
      );
    }
    function V(e) {
      var t = !1,
        r = e.lastUpdateTime,
        i = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= i && (t = !0), t;
    }
    function K(e) {
      var t = !1,
        r = A(e.type),
        i = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && i && (t = !0), t;
    }
    function U(e) {
      var t = !0;
      return (
        'object' === e.type && e.propertyOrder && e.properties
          ? e.propertyOrder.map(function (r) {
              var i = e.properties[r];
              ('object' === e.type && i.propertyOrder && i.properties) ||
                (t = !1);
            })
          : (t = !1),
        t
      );
    }
    function X(e, t) {
      var r = e.split('-'),
        i = t.split('-');
      return r.pop(), i.pop(), r.join('-') === i.join('-');
    }
    function Y(e, t) {
      for (
        var r = e.split('-'),
          i = t.split('-'),
          a = 'before',
          n = 0,
          o = (r.length > i.length ? i : r).length;
        n < o;
        n += 1
      )
        Number(r[n]) > Number(i[n]) && (a = 'after');
      return a;
    }
    function W(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function Z(e) {
      var t = e.split('-'),
        r = t.pop(),
        i = Number(r) + 1;
      return t.push('' + i), t.join('-');
    }
    function z(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function H(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function Q(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function G(e, t) {
      var r = '',
        i = !1;
      return (
        e.options && e.options[0] && ((r = e.options[0].value), (i = !0)),
        (t || e.multiple) && (r = i ? [r] : []),
        r
      );
    }
    function ee(e, t) {
      var r = '',
        i = t;
      n(i) && n(e.default) && typeof i != typeof e.default && (i = void 0);
      var a = n(i) ? i : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          r = a || G(e);
          break;
        case 'checkboxes':
          r = a || G(e, !0);
          break;
        case 'color':
          ('#fff' !== a && '#FFF' !== a) || (a = '#ffffff'),
            (r = n(a) ? a : '#ffffff');
          break;
        case 'boolean':
          r = !!n(a) && a;
          break;
        case 'number':
          r = n(a) ? a : 1;
          break;
        case 'json':
          var o = '';
          if (E(a) || R(a)) o = a;
          else if (I(a) || '' === a) o = {};
          else
            try {
              o = JSON.parse(a);
            } catch (e) {
              o = {};
            }
          r = o;
          break;
        default:
          r =
            'input' === e.type && '0' === e.default
              ? a || e.default
              : n(a)
                ? a
                : '';
      }
      return r;
    }
    function te(e, t) {
      var r = {},
        a = e.type;
      if (E(e) && 'object' === A(e.type)) {
        var o = e,
          l = t;
        n(l) && n(o.default) && typeof l != typeof o.default && (l = void 0);
        var p = n(l) ? l : o.default;
        'dynamic-data' === a
          ? ((r = i(v)),
            p &&
              E(p) &&
              '{}' !== JSON.stringify(p) &&
              (r = Object.assign(r, p)))
          : 'datasource' === a
            ? o.properties &&
              o.properties.type &&
              o.properties.type.default &&
              'local' === o.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                p && p.data && (r.data = p.data),
                p && p.filter && (r.filter = p.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                p && p.data && (r.data = p.data),
                p && p.filter && (r.filter = p.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === a
              ? o.properties &&
                o.properties.type &&
                o.properties.type.default &&
                'emit' === o.properties.type.default
                ? p && 'out' === p.type
                  ? (r = {
                      trigger: (p && p.filter) || 'eventName',
                      eventData: '{}',
                    })
                  : ((r = { trigger: 'eventName', eventData: '{}' }),
                    p && p.trigger && (r.trigger = p.trigger),
                    p && p.eventData && (r.eventData = p.eventData))
                : p && 'in' === p.type
                  ? (r = {
                      register: 'eventName',
                      actionFunc: (p && p.filter) || '() => {}',
                    })
                  : ((r = { register: 'eventName', actionFunc: '() => {}' }),
                    p && p.register && (r.register = p.register),
                    p && p.actionFunc && (r.actionFunc = p.actionFunc))
              : e.properties &&
                (e.propertyOrder
                  ? e.propertyOrder
                  : Object.keys(e.properties)
                ).map(function (i) {
                  var a = e.properties[i],
                    n = t && t[i];
                  switch (A(a.type)) {
                    case 'array':
                      r[i] = re(a, n);
                      break;
                    case 'object':
                      r[i] = te(a, n);
                      break;
                    default:
                      r[i] = ee(a, n);
                  }
                });
      }
      return r;
    }
    function re(e, t) {
      var r = [];
      if (e && 'array' === A(e.type)) {
        var i = t;
        n(i) && n(e.default) && typeof i != typeof e.default && (i = void 0);
        var a = n(i) ? i : e.default;
        if ('array' === A(e.type))
          if (R(a))
            a.map(function (t) {
              r.push(te(e.items, t));
            });
          else {
            var o = te(e.items, a);
            r.push(o);
          }
        else r = n(a) ? a : [];
      }
      return r;
    }
    function ie(e, t) {
      return 'object' === A(e.type)
        ? te(e, t)
        : 'array' === A(e.type)
          ? re(e, t)
          : ee(e, t);
    }
    var ae = g;
    function ne(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (E(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            E(e.config) &&
            e.config.dataName &&
            n(e.localFilter) &&
            n(e.data)
          ) {
            var i = e.config.body;
            if (i && !E(i))
              try {
                i = JSON.parse(i);
              } catch (e) {
                i = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: i });
          } else
            Object.keys(e).map(function (t) {
              ne(e[t], r);
            });
        else
          R(e) &&
            e.map(function (e) {
              ne(e, r);
            });
      return r;
    }
    function oe(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function le(e, t) {
      var r = [];
      return (
        E(e)
          ? Object.keys(e).map(function (i) {
              var a = e[i],
                n = t ? t + '-' + i : i;
              E(a) || R(a)
                ? r.push({ title: i, value: n, key: n, children: le(a, n) })
                : r.push({ title: i, value: n, key: n });
            })
          : R(e) &&
            e.map(function (e, i) {
              var a = i.toString(),
                n = t ? t + '-' + i : a;
              E(e) || R(e)
                ? r.push({ title: a, value: n, key: n, children: le(e, n) })
                : r.push({ title: a, value: n, key: n });
            }),
        r
      );
    }
    function pe(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ue(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var ce = [
      'key',
      'enum',
      'enumextra',
      'items',
      'input',
      'boolean',
      'number',
      'color',
      'url',
      'textarea',
      'text-editor',
      'radio',
      'select',
      'checkboxes',
      'date',
      'date-time',
      'time',
      'json',
      'codearea',
      'htmlarea',
      'quantity',
      'box-style',
      'dynamic-data',
      'datasource',
      'event',
      'array',
      'object',
    ];
    return t;
  })();
});
