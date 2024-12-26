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
          for (var a in r)
            e.o(r, a) &&
              !e.o(t, a) &&
              Object.defineProperty(t, a, { enumerable: !0, get: r[a] });
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
          return de;
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
        expressionOn: function () {
          return o;
        },
        getCurPosition: function () {
          return W;
        },
        getDefaultOptionVal: function () {
          return ee;
        },
        getExpectType: function () {
          return L;
        },
        getJsonDataByKeyRoute: function () {
          return p;
        },
        getNextIndexRoute: function () {
          return z;
        },
        getParentIndexRoute: function () {
          return Z;
        },
        getParentIndexRoute_CurIndex: function () {
          return H;
        },
        getParentKeyRoute: function () {
          return ce;
        },
        getParentKeyRoute_CurKey: function () {
          return se;
        },
        getSchemaByIndexRoute: function () {
          return u;
        },
        getSchemaByKeyRoute: function () {
          return c;
        },
        hasProperties: function () {
          return l;
        },
        indexRoute2keyRoute: function () {
          return s;
        },
        isArray: function () {
          return R;
        },
        isBoolean: function () {
          return S;
        },
        isColor: function () {
          return q;
        },
        isContainerSchema: function () {
          return U;
        },
        isDateStr: function () {
          return T;
        },
        isDateTimeStr: function () {
          return D;
        },
        isEmptySchema: function () {
          return J;
        },
        isEqual: function () {
          return i;
        },
        isFunction: function () {
          return F;
        },
        isNewSchemaData: function () {
          return K;
        },
        isNumber: function () {
          return x;
        },
        isObject: function () {
          return E;
        },
        isQuantity: function () {
          return k;
        },
        isSameParent: function () {
          return Y;
        },
        isSelect: function () {
          return w;
        },
        isString: function () {
          return C;
        },
        isStructuredSchema: function () {
          return X;
        },
        isTimeStr: function () {
          return N;
        },
        isURL: function () {
          return j;
        },
        json2schema: function () {
          return I;
        },
        json2treeData: function () {
          return pe;
        },
        keyRoute2indexRoute: function () {
          return d;
        },
        metaElemAnalyzer: function () {
          return M;
        },
        moveBackward: function () {
          return G;
        },
        moveForward: function () {
          return Q;
        },
        objClone: function () {
          return a;
        },
        oldSchemaToNewSchema: function () {
          return A;
        },
        oldSchemaToNewSchemaV1: function () {
          return _;
        },
        registerExpectType: function () {
          return V;
        },
        schema2conditionValue: function () {
          return ue;
        },
        schema2json: function () {
          return ie;
        },
        schemaMetaList: function () {
          return le;
        },
        truncate: function () {
          return n;
        },
      });
    var r = require('lodash');
    function a(e) {
      return (0, r.cloneDeep)(e);
    }
    function i(e, t) {
      return (0, r.isEqual)(e, t);
    }
    function l(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function n(e, t) {
      return (0, r.truncate)(e, t);
    }
    function o(e, t) {
      return new Function('data', 'with(data) { return (' + e + ');}')(t);
    }
    function p(e, t, r) {
      var i = t;
      if ((r && (i = a(t)), e))
        for (var l = e.split('-'), n = 0, o = l.length; n < o; n++) {
          var p = l[n];
          p && (i = i && i[p]);
        }
      return i;
    }
    function u(e, t, r) {
      var i = t;
      if ((r && (i = a(t)), e))
        for (var l = e.split('-'), n = 0, o = l.length; n < o; n++) {
          var p = l[n];
          if (
            '0' !== p ||
            ('array' !== i.type &&
              'radio' !== i.type &&
              'select' !== i.type &&
              'checkboxes' !== i.type) ||
            (!i.options && !i.items)
          ) {
            if (p) {
              var u = '0';
              i.propertyOrder
                ? (u = i.propertyOrder[p])
                : i.properties && (u = Object.keys(i.properties)[p]),
                (i = i.properties[u]);
            }
          } else i = i.options || i.items;
        }
      return i;
    }
    function c(e, t, r) {
      var i = t;
      if ((r && (i = a(t)), e && i))
        for (var l = e.split('-'), n = 0, o = l.length; n < o; n++) {
          var p = l[n];
          p && i.properties && (i = i.properties[p]);
        }
      return i;
    }
    function s(e, t) {
      for (
        var r = t, a = '', i = e.split('-'), l = 0, n = i.length;
        l < n;
        l++
      ) {
        var o = i[l];
        if ('0' === o && r.items)
          (r = r.items), (a = a ? a + '-items' : 'items');
        else if ('0' === o && r.options)
          (r = r.options), (a = a ? a + '-options' : 'options');
        else if (o) {
          var p = '0';
          r.propertyOrder
            ? (p = r.propertyOrder[o])
            : r.properties && (p = Object.keys(r.properties)[o]),
            (r = r.properties[p]),
            (a = a ? a + '-' + p : p);
        }
      }
      return a;
    }
    function d(e, t) {
      for (
        var r = t, a = '', i = e.split('-'), l = 0, n = i.length;
        l < n;
        l++
      ) {
        var o = i[l];
        if (o) {
          var p = -1;
          r.propertyOrder
            ? ((p = r.propertyOrder.indexOf(o)), (r = r.properties[o]))
            : r.properties
              ? ((p = Object.keys(r.properties).indexOf(o)),
                (r = r.properties[o]))
              : r.items
                ? ((p = 0), (r = r.items))
                : r.options && ((p = 0), (r = r.options)),
            (a = a ? a + '-' + p : p.toString());
        }
      }
      return a;
    }
    var y,
      f = {
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
      b = {
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
      v =
        (((y = { type: 'object' }).type = 'datasource'),
        (y.title = '数据源'),
        (y.isContainer = !1),
        (y.properties = {
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
        (y.propertyOrder = ['type', 'data', 'filter']),
        y),
      m = {
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
          default: [],
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
        'input-image': {
          title: '图片地址',
          type: 'input-image',
          description: '',
          accept: '.jpeg,.jpg,.png',
          multiple: !0,
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
        datasource: b,
        event: f,
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
              onShow:
                'type === "DevDefaults" || type === "Content" || type === "RuntimeConst"',
            },
            description: {
              title: '属性名称',
              type: 'input',
              default: '',
              description: '',
              placeholder: '',
              onShow:
                'type === "ContentStaticConfig" || type === "ResourceCenter"',
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
              onShow:
                'type === "ContentStaticConfig" || type === "ResourceCenter"',
            },
            range: {
              type: 'select',
              title: '可选项',
              multiple: !0,
              options: [],
              onShow:
                '(type === "ContentStaticConfig" || type === "ResourceCenter") && valueType === "select"',
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
                  onShow: 'type === "ContentStaticConfig"',
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
                  onShow: 'type === "RuntimeDataSelfDefine"',
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
                  onShow: 'type === "RuntimeDataSelfDefine"',
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
        'sohu-event': {
          type: 'sohu-event',
          title: 'sohu组件事件',
          showCodeViewBtn: !1,
          isContainer: !1,
          properties: {
            globalEventMap: {
              type: 'object',
              title: '全局事件Map',
              description: '',
              properties: {
                eventCode: {
                  type: 'input',
                  title: '事件名称',
                  default: '',
                  description: '',
                  placeholder: '',
                  readOnly: !0,
                },
              },
              propertyOrder: ['eventCode'],
              showCodeViewBtn: !1,
            },
            event: {
              type: 'array',
              title: '监听事件',
              description: '当前组件监听事件列表',
              default: [],
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  name: {
                    type: 'input',
                    title: '事件',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  code: {
                    title: '事件code',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  listenName: {
                    title: '事件名称',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  desc: {
                    title: '事件描述',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                },
                propertyOrder: ['name', 'code', 'listenName', 'desc'],
              },
              showCodeViewBtn: !1,
            },
          },
          propertyOrder: ['globalEventMap', 'event'],
        },
        'sohu-ad': {
          type: 'object',
          title: '广告配置',
          description: '',
          properties: {
            type: {
              type: 'select',
              title: '数据源类型',
              isConditionProp: !0,
              options: [
                { label: '模板直接设置', value: 'DevDefaults' },
                { label: '资源中心配置', value: 'ResourceCenter' },
              ],
              description: '',
            },
            value: {
              type: 'object',
              title: '广告规则',
              description: '',
              onShow: 'type === "DevDefaults"',
              properties: {
                id: {
                  title: '广告ID',
                  type: 'input',
                  default: '',
                  description: '',
                  placeholder: '',
                },
                rule: {
                  type: 'radio',
                  title: '规则类型',
                  options: [
                    { label: '固定位置', value: 1 },
                    { label: '隔几出几', value: 2 },
                    { label: '固定位置隔几出几', value: 3 },
                  ],
                  default: 1,
                  description: '',
                },
                fixArray: {
                  type: 'select',
                  title: '固定位置',
                  default: 1,
                  description: '',
                  options: [
                    { label: '1', value: 1 },
                    { label: '2', value: 2 },
                    { label: '3', value: 3 },
                    { label: '4', value: 4 },
                    { label: '5', value: 5 },
                    { label: '6', value: 6 },
                    { label: '7', value: 7 },
                    { label: '8', value: 8 },
                    { label: '9', value: 9 },
                    { label: '10', value: 10 },
                    { label: '11', value: 11 },
                    { label: '12', value: 12 },
                    { label: '13', value: 13 },
                    { label: '14', value: 14 },
                    { label: '15', value: 15 },
                    { label: '16', value: 16 },
                    { label: '17', value: 17 },
                    { label: '18', value: 18 },
                    { label: '19', value: 19 },
                    { label: '20', value: 20 },
                    { label: '21', value: 21 },
                    { label: '22', value: 22 },
                    { label: '23', value: 23 },
                    { label: '24', value: 24 },
                    { label: '25', value: 25 },
                    { label: '26', value: 26 },
                    { label: '27', value: 27 },
                    { label: '28', value: 28 },
                    { label: '29', value: 29 },
                    { label: '30', value: 30 },
                    { label: '31', value: 31 },
                    { label: '32', value: 32 },
                    { label: '33', value: 33 },
                    { label: '34', value: 34 },
                    { label: '35', value: 35 },
                    { label: '36', value: 36 },
                    { label: '37', value: 37 },
                    { label: '38', value: 38 },
                    { label: '39', value: 39 },
                    { label: '40', value: 40 },
                    { label: '41', value: 41 },
                    { label: '42', value: 42 },
                    { label: '43', value: 43 },
                    { label: '44', value: 44 },
                    { label: '45', value: 45 },
                    { label: '46', value: 46 },
                    { label: '47', value: 47 },
                    { label: '48', value: 48 },
                    { label: '49', value: 49 },
                    { label: '50', value: 50 },
                  ],
                },
                begin: {
                  type: 'number',
                  title: '开始位置',
                  default: 1,
                  minimum: '1',
                  maximum: '50',
                  description: '',
                },
                turn: {
                  type: 'number',
                  title: '间隔/隔',
                  default: 1,
                  minimum: '1',
                  maximum: '50',
                  description: '',
                },
                number: {
                  type: 'number',
                  title: '间隔/出',
                  default: 1,
                  minimum: '1',
                  maximum: '50',
                  description: '',
                },
                mergeType: {
                  type: 'radio',
                  title: '插入规则',
                  options: [
                    { label: '覆盖', value: 0 },
                    { label: '插入', value: 1 },
                  ],
                  default: 0,
                  description: '',
                },
              },
              propertyOrder: [
                'id',
                'rule',
                'fixArray',
                'begin',
                'turn',
                'number',
                'mergeType',
              ],
            },
            range: {
              type: 'array',
              title: '广告规则列表',
              description: '',
              onShow: 'type === "ResourceCenter"',
              items: {
                type: 'object',
                title: '数组项',
                description: '',
                properties: {
                  id: {
                    title: '广告ID',
                    type: 'input',
                    default: '',
                    description: '',
                    placeholder: '',
                  },
                  rule: {
                    type: 'radio',
                    title: '规则类型',
                    options: [
                      { label: '固定位置', value: 1 },
                      { label: '隔几出几', value: 2 },
                      { label: '固定位置隔几出几', value: 3 },
                    ],
                    default: 1,
                    description: '',
                  },
                  fixArray: {
                    type: 'select',
                    title: '固定位置',
                    default: 1,
                    description: '',
                    options: [
                      { label: '1', value: 1 },
                      { label: '2', value: 2 },
                      { label: '3', value: 3 },
                      { label: '4', value: 4 },
                      { label: '5', value: 5 },
                      { label: '6', value: 6 },
                      { label: '7', value: 7 },
                      { label: '8', value: 8 },
                      { label: '9', value: 9 },
                      { label: '10', value: 10 },
                      { label: '11', value: 11 },
                      { label: '12', value: 12 },
                      { label: '13', value: 13 },
                      { label: '14', value: 14 },
                      { label: '15', value: 15 },
                      { label: '16', value: 16 },
                      { label: '17', value: 17 },
                      { label: '18', value: 18 },
                      { label: '19', value: 19 },
                      { label: '20', value: 20 },
                      { label: '21', value: 21 },
                      { label: '22', value: 22 },
                      { label: '23', value: 23 },
                      { label: '24', value: 24 },
                      { label: '25', value: 25 },
                      { label: '26', value: 26 },
                      { label: '27', value: 27 },
                      { label: '28', value: 28 },
                      { label: '29', value: 29 },
                      { label: '30', value: 30 },
                      { label: '31', value: 31 },
                      { label: '32', value: 32 },
                      { label: '33', value: 33 },
                      { label: '34', value: 34 },
                      { label: '35', value: 35 },
                      { label: '36', value: 36 },
                      { label: '37', value: 37 },
                      { label: '38', value: 38 },
                      { label: '39', value: 39 },
                      { label: '40', value: 40 },
                      { label: '41', value: 41 },
                      { label: '42', value: 42 },
                      { label: '43', value: 43 },
                      { label: '44', value: 44 },
                      { label: '45', value: 45 },
                      { label: '46', value: 46 },
                      { label: '47', value: 47 },
                      { label: '48', value: 48 },
                      { label: '49', value: 49 },
                      { label: '50', value: 50 },
                    ],
                  },
                  begin: {
                    type: 'number',
                    title: '开始位置',
                    default: 1,
                    minimum: '1',
                    maximum: '50',
                    description: '',
                  },
                  turn: {
                    type: 'number',
                    title: '间隔/隔',
                    default: 1,
                    minimum: '1',
                    maximum: '50',
                    description: '',
                  },
                  number: {
                    type: 'number',
                    title: '间隔/出',
                    default: 1,
                    minimum: '1',
                    maximum: '50',
                    description: '',
                  },
                  mergeType: {
                    type: 'radio',
                    title: '插入规则',
                    options: [
                      { label: '覆盖', value: 0 },
                      { label: '插入', value: 1 },
                    ],
                    default: 0,
                    description: '',
                  },
                },
                propertyOrder: [
                  'id',
                  'rule',
                  'fixArray',
                  'begin',
                  'turn',
                  'number',
                  'mergeType',
                ],
              },
            },
          },
          propertyOrder: ['type', 'value', 'range'],
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
        emit: f,
      },
      O = { local: b, remote: v };
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
    function S(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function T(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function D(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function N(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function R(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function w(e) {
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
    function k(e) {
      var t = !1;
      return g.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function q(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function F(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function I(e) {
      var t;
      return (
        (t =
          e && E(e)
            ? (function (e) {
                var t;
                if (E(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = R(e.data) || E(e.data) ? a(O.local) : a(O.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = a(h.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = a(h.on))
                        : e.quantity && k(e.quantity) && 2 === r.length
                          ? (t = a(g.quantity))
                          : ((t = a(g['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var a = e[r];
                              t.properties[r] = I(a);
                            }));
                }
                return t;
              })(e)
            : e && R(e)
              ? (function (e) {
                  var t;
                  if (e && R(e))
                    if (w(e)) {
                      (t = a(g.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        i = e.length;
                      if (i > r)
                        for (var l = r, n = i; l < n; l++)
                          t.items.enumextra.push('选项' + e(l));
                    } else {
                      t = a(g['empty-array']);
                      var o = I(e[0]);
                      t.items.properties = o.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (S(e)) t = a(g.boolean);
                  else if (x(e)) t = a(g.number);
                  else if (j(e)) t = a(g.url);
                  else if (T(e)) t = a(g.date);
                  else if (D(e)) t = a(g['date-time']);
                  else if (N(e)) t = a(g.time);
                  else if (q(e)) t = a(g.color);
                  else
                    try {
                      t = x(JSON.parse(e)) ? a(g.input) : a(g.json);
                    } catch (r) {
                      t = e && e.length > 30 ? a(g.textarea) : a(g.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function P(e, t) {
      var r = t || {};
      return (
        E(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var a = e.properties[t];
              r = M(a, r);
            },
          ),
        r
      );
    }
    function M(e, t) {
      var r = !t,
        a = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var i = e.type;
        'object' === i || 'func' === i || 'style' === i || 'data' === i
          ? (!r && a.object ? (a.object += 1) : r || (a.object = 1),
            (a = P(e, a)))
          : 'array' === i
            ? (!r && a.array ? (a.array += 1) : r || (a.array = 1),
              (a = P((e = e.items), a)))
            : !r && a[i]
              ? (a[i] += 1)
              : r || (a[i] = 1);
      }
      return a;
    }
    function _(e) {
      var t = a(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !l(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: a(t.enum),
              enumextra: a(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          i = a(g.quantity);
        if (r.quantity && E(r.quantity) && r.quantity.default) {
          var n = r.quantity.default;
          i.properties.quantity.default = 'percent' === n ? '%' : n;
        }
        t = i;
      }
      if ('datasource' === t.type) {
        var o = t.properties,
          p = o.type && o.type.default,
          u = o.data && o.data.default,
          c = o.filter && o.filter.default;
        'local' === p
          ? ((t = a(O.local)).properties.data.default = u ? a(u) : '{}')
          : ((t = a(O.remote)).properties.data.default = u
              ? a(u)
              : 'http://xxx'),
          (t.properties.filter.default = c ? a(c) : '() => {}');
      }
      if ('event' === t.type) {
        var s = t.properties,
          d = s.type && s.type.default;
        if ('in' === d || 'on' === d) {
          var y = (s.filter && s.filter.default) || '() => {}';
          (t = a(h.on)),
            s.actionFunc &&
              E(s.actionFunc) &&
              (t.properties.actionFunc.default = s.actionFunc.default || a(y));
        } else {
          var f = (s.filter && s.filter.default) || '{}';
          (t = a(h.emit)),
            s.eventData &&
              E(s.eventData) &&
              (t.properties.eventData.default = s.eventData.default || a(f));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = A(t.properties[e]);
          })),
        t.items && (t.items = A(t.items)),
        t
      );
    }
    function A(e) {
      var t = a(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !l(t.default) ||
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
            t.properties[e] = A(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = A(t.items)),
        t
      );
    }
    require('mobx');
    var $,
      B =
        ((($ = {
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
          'input-image': 'string',
          object: 'object',
          quantity: 'object',
          radio: 'string',
          select: 'array',
        }).select = 'string'),
        ($.textarea = 'string'),
        ($['text-editor'] = 'string'),
        ($.time = 'string'),
        ($.url = 'string'),
        ($['dynamic-config'] = 'object'),
        ($['sohu-source'] = 'object'),
        ($['sohu-event'] = 'object'),
        $);
    function L(e) {
      return B[e] || e;
    }
    function V(e, t) {
      B[e]
        ? console.warn('当前已经存在' + e + '(' + B[e] + ')，暂时不支持覆盖。')
        : (B[e] = t);
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
    function K(e) {
      var t = !1,
        r = e.lastUpdateTime,
        a = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= a && (t = !0), t;
    }
    function U(e) {
      var t = !1,
        r = L(e.type),
        a = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && a && (t = !0), t;
    }
    function X(e) {
      var t = !0;
      return (
        'object' === e.type && e.propertyOrder && e.properties
          ? e.propertyOrder.map(function (r) {
              var a = e.properties[r];
              ('object' === e.type && a.propertyOrder && a.properties) ||
                (t = !1);
            })
          : (t = !1),
        t
      );
    }
    function Y(e, t) {
      var r = e.split('-'),
        a = t.split('-');
      return r.pop(), a.pop(), r.join('-') === a.join('-');
    }
    function W(e, t) {
      for (
        var r = e.split('-'),
          a = t.split('-'),
          i = 'before',
          l = 0,
          n = (r.length > a.length ? a : r).length;
        l < n;
        l += 1
      )
        Number(r[l]) > Number(a[l]) && (i = 'after');
      return i;
    }
    function Z(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function z(e) {
      var t = e.split('-'),
        r = t.pop(),
        a = Number(r) + 1;
      return t.push('' + a), t.join('-');
    }
    function H(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function Q(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function G(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function ee(e, t) {
      var r = '',
        a = !1;
      return (
        e.options && e.options[0] && ((r = e.options[0].value), (a = !0)),
        (t || e.multiple) && (r = a ? [r] : []),
        r
      );
    }
    function te(e, t) {
      var r = '',
        a = t;
      l(a) && l(e.default) && typeof a != typeof e.default && (a = void 0);
      var i = l(a) ? a : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          r = i || ee(e);
          break;
        case 'checkboxes':
          r = i || ee(e, !0);
          break;
        case 'color':
          ('#fff' !== i && '#FFF' !== i) || (i = '#ffffff'),
            (r = l(i) ? i : '#ffffff');
          break;
        case 'boolean':
          r = !!l(i) && i;
          break;
        case 'number':
          r = l(i) ? i : void 0;
          break;
        case 'json':
          var n = '';
          if (E(i) || R(i)) n = i;
          else if (F(i) || '' === i) n = {};
          else
            try {
              n = JSON.parse(i);
            } catch (e) {
              n = {};
            }
          r = n;
          break;
        default:
          r =
            'input' === e.type && '0' === e.default
              ? i || e.default
              : l(i)
                ? i
                : void 0;
      }
      return r;
    }
    function re(e, t) {
      var r = {},
        i = e.type;
      if (E(e) && 'object' === L(e.type)) {
        var n = e,
          o = t;
        l(o) &&
          ((l(n.default) && typeof o != typeof e.default) || !E(o)) &&
          (o = void 0);
        var p = l(o) ? o : n.default;
        'dynamic-data' === i
          ? ((r = a(m)),
            p &&
              E(p) &&
              '{}' !== JSON.stringify(p) &&
              (r = Object.assign(r, p)))
          : 'datasource' === i
            ? n.properties &&
              n.properties.type &&
              n.properties.type.default &&
              'local' === n.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                p && p.data && (r.data = p.data),
                p && p.filter && (r.filter = p.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                p && p.data && (r.data = p.data),
                p && p.filter && (r.filter = p.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === i
              ? n.properties &&
                n.properties.type &&
                n.properties.type.default &&
                'emit' === n.properties.type.default
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
              : !1 === e.isContainer && p && E(p) && '{}' !== JSON.stringify(p)
                ? (r = Object.assign(r, p))
                : e.properties &&
                  (e.propertyOrder
                    ? e.propertyOrder
                    : Object.keys(e.properties)
                  ).map(function (a) {
                    var i = e.properties[a],
                      l = t && t[a];
                    switch (L(i.type)) {
                      case 'array':
                        r[a] = ae(i, l);
                        break;
                      case 'object':
                        r[a] = re(i, l);
                        break;
                      default:
                        r[a] = te(i, l);
                    }
                  });
      }
      return r;
    }
    function ae(e, t) {
      var r = [];
      if (e && 'array' === L(e.type)) {
        var a = t;
        l(a) &&
          ((l(e.default) && typeof a != typeof e.default) || !R(a)) &&
          (a = void 0);
        var i = l(a) ? a : e.default;
        if ('array' === L(e.type))
          if (R(i))
            i.map(function (t) {
              r.push(re(e.items, t));
            });
          else if (i) r = i;
          else {
            var n = re(e.items, i);
            r.push(n);
          }
        else r = l(i) ? i : [];
      }
      return r;
    }
    function ie(e, t) {
      return 'object' === L(e.type)
        ? re(e, t)
        : 'array' === L(e.type)
          ? ae(e, t)
          : te(e, t);
    }
    var le = g;
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
            l(e.localFilter) &&
            l(e.data)
          ) {
            var a = e.config.body;
            if (a && !E(a))
              try {
                a = JSON.parse(a);
              } catch (e) {
                a = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: a });
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
    function pe(e, t) {
      var r = [];
      return (
        E(e)
          ? Object.keys(e).map(function (a) {
              var i = e[a],
                l = t ? t + '-' + a : a;
              E(i) || R(i)
                ? r.push({ title: a, value: l, key: l, children: pe(i, l) })
                : r.push({ title: a, value: l, key: l });
            })
          : R(e) &&
            e.map(function (e, a) {
              var i = a.toString(),
                l = t ? t + '-' + a : i;
              E(e) || R(e)
                ? r.push({ title: i, value: l, key: l, children: pe(e, l) })
                : r.push({ title: i, value: l, key: l });
            }),
        r
      );
    }
    function ue(e, t) {
      var r = '';
      return (
        'object' === L(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (a) {
              var i = e.properties[a],
                l = t[a];
              ('array' === L(i.type) && 'object' === L(i.type)) ||
                (l &&
                  i.isConditionProp &&
                  (r.indexOf('-') > 0 ? (r += '-' + l) : (r = l)));
            },
          ),
        r
      );
    }
    function ce(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function se(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var de = [
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
