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
        n: function (t) {
          var r =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return e.d(r, { a: r }), r;
        },
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
          return S;
        },
        EventTypeDataList: function () {
          return x;
        },
        KeyWordList: function () {
          return ve;
        },
        TypeDataList: function () {
          return C;
        },
        dataRoute2dataPath: function () {
          return se;
        },
        dynamicDataAnalyzer: function () {
          return ce;
        },
        expressionOn: function () {
          return s;
        },
        getCurPosition: function () {
          return Q;
        },
        getDefaultOptionVal: function () {
          return ie;
        },
        getExpectType: function () {
          return U;
        },
        getJsonDataByKeyRoute: function () {
          return d;
        },
        getNextIndexRoute: function () {
          return ee;
        },
        getParentIndexRoute: function () {
          return G;
        },
        getParentIndexRoute_CurIndex: function () {
          return te;
        },
        getParentKeyRoute: function () {
          return fe;
        },
        getParentKeyRoute_CurKey: function () {
          return be;
        },
        getSchemaByIndexRoute: function () {
          return y;
        },
        getSchemaByKeyRoute: function () {
          return f;
        },
        hasProperties: function () {
          return p;
        },
        indexRoute2keyRoute: function () {
          return b;
        },
        isArray: function () {
          return k;
        },
        isBoolean: function () {
          return w;
        },
        isColor: function () {
          return M;
        },
        isContainerSchema: function () {
          return Z;
        },
        isDateStr: function () {
          return R;
        },
        isDateTimeStr: function () {
          return q;
        },
        isEmptySchema: function () {
          return Y;
        },
        isEqual: function () {
          return u;
        },
        isFunction: function () {
          return _;
        },
        isNewSchemaData: function () {
          return W;
        },
        isNumber: function () {
          return N;
        },
        isObject: function () {
          return P;
        },
        isQuantity: function () {
          return I;
        },
        isSameParent: function () {
          return H;
        },
        isSelect: function () {
          return F;
        },
        isString: function () {
          return D;
        },
        isStructuredSchema: function () {
          return z;
        },
        isTimeStr: function () {
          return E;
        },
        isURL: function () {
          return T;
        },
        json2schema: function () {
          return A;
        },
        json2treeData: function () {
          return de;
        },
        keyRoute2indexRoute: function () {
          return v;
        },
        metaElemAnalyzer: function () {
          return B;
        },
        moveBackward: function () {
          return ae;
        },
        moveForward: function () {
          return re;
        },
        objClone: function () {
          return o;
        },
        oldSchemaToNewSchema: function () {
          return V;
        },
        oldSchemaToNewSchemaV1: function () {
          return L;
        },
        registerExpectType: function () {
          return X;
        },
        schema2conditionValue: function () {
          return ye;
        },
        schema2json: function () {
          return ue;
        },
        schemaMetaList: function () {
          return pe;
        },
        truncate: function () {
          return c;
        },
        urlParse: function () {
          return l;
        },
        urlStringify: function () {
          return n;
        },
      });
    var r = require('lodash'),
      a = require('query-string'),
      i = e.n(a);
    function l() {
      var e = {};
      return location.search && (e = i().parse(location.search)), e;
    }
    function n(e) {
      var t = '';
      return url && (t = i().stringify(e)), t;
    }
    function o(e) {
      return (0, r.cloneDeep)(e);
    }
    function u(e, t) {
      return (0, r.isEqual)(e, t);
    }
    function p(e) {
      var t = !1;
      return null != e && (t = !0), t;
    }
    function c(e, t) {
      return (0, r.truncate)(e, t);
    }
    function s(e, t) {
      var r = t || {};
      if (!e) return !1;
      var a = new Function('data', 'with(data) { return (' + e + ');}'),
        i = '';
      try {
        i = a(r);
      } catch (t) {
        return console.warn('表达式运算出错: ' + e + '，报错信息：', t), i;
      }
      return i;
    }
    function d(e, t, r) {
      var a = t;
      if ((r && (a = o(t)), e))
        for (var i = e.split('-'), l = 0, n = i.length; l < n; l++) {
          var u = i[l];
          u && (a = a && a[u]);
        }
      return a;
    }
    function y(e, t, r) {
      var a = t;
      if ((r && (a = o(t)), e))
        for (var i = e.split('-'), l = 0, n = i.length; l < n; l++) {
          var u = i[l];
          if (
            '0' !== u ||
            ('array' !== a.type &&
              'radio' !== a.type &&
              'select' !== a.type &&
              'checkboxes' !== a.type) ||
            (!a.options && !a.items)
          ) {
            if (u) {
              var p = '0';
              a.propertyOrder
                ? (p = a.propertyOrder[u])
                : a.properties && (p = Object.keys(a.properties)[u]),
                (a = a.properties[p]);
            }
          } else a = a.options || a.items;
        }
      return a;
    }
    function f(e, t, r) {
      var a = t;
      if ((r && (a = o(t)), e && a))
        for (var i = e.split('-'), l = 0, n = i.length; l < n; l++) {
          var u = i[l];
          u && a.properties && (a = a.properties[u]);
        }
      return a;
    }
    function b(e, t) {
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
          var u = '0';
          r.propertyOrder
            ? (u = r.propertyOrder[o])
            : r.properties && (u = Object.keys(r.properties)[o]),
            (r = r.properties[u]),
            (a = a ? a + '-' + u : u);
        }
      }
      return a;
    }
    function v(e, t) {
      for (
        var r = t, a = '', i = e.split('-'), l = 0, n = i.length;
        l < n;
        l++
      ) {
        var o = i[l];
        if (o) {
          var u = -1;
          r.propertyOrder
            ? ((u = r.propertyOrder.indexOf(o)), (r = r.properties[o]))
            : r.properties
              ? ((u = Object.keys(r.properties).indexOf(o)),
                (r = r.properties[o]))
              : r.items
                ? ((u = 0), (r = r.items))
                : r.options && ((u = 0), (r = r.options)),
            (a = a ? a + '-' + u : u.toString());
        }
      }
      return a;
    }
    var m,
      g = {
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
      h = {
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
      O =
        (((m = { type: 'object' }).type = 'datasource'),
        (m.title = '数据源'),
        (m.isContainer = !1),
        (m.properties = {
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
        (m.propertyOrder = ['type', 'data', 'filter']),
        m),
      j = {
        type: 'local',
        config: { dataName: '', body: {}, filter: 'return data;' },
        data: '{}',
        localFilter: 'return data;',
      },
      C = {
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
        datasource: h,
        event: g,
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
                  type: 'number',
                  default: '',
                  description: '',
                  placeholder: '',
                },
                rule: {
                  type: 'radio',
                  title: '规则类型',
                  isConditionProp: !0,
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
                  default: [1],
                  description: '',
                  multiple: !0,
                  onShow: 'rule === 1 || rule === 3',
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
                  onShow: 'rule === 2 || rule === 3',
                },
                turn: {
                  type: 'number',
                  title: '间隔/隔',
                  default: 1,
                  minimum: '1',
                  maximum: '50',
                  description: '',
                  onShow: 'rule === 2 || rule === 3',
                },
                number: {
                  type: 'number',
                  title: '间隔/出',
                  default: 1,
                  minimum: '1',
                  maximum: '50',
                  description: '',
                  onShow: 'rule === 2 || rule === 3',
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
                  rule: {
                    type: 'radio',
                    title: '规则类型',
                    isConditionProp: !0,
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
                    default: [1],
                    description: '',
                    onShow: 'rule === 1 || rule === 3',
                    multiple: !0,
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
                    onShow: 'rule === 2 || rule === 3',
                  },
                  turn: {
                    type: 'number',
                    title: '间隔/隔',
                    default: 1,
                    minimum: '1',
                    maximum: '50',
                    description: '',
                    onShow: 'rule === 2 || rule === 3',
                  },
                  number: {
                    type: 'number',
                    title: '间隔/出',
                    default: 1,
                    minimum: '1',
                    maximum: '50',
                    description: '',
                    onShow: 'rule === 2 || rule === 3',
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
      x = {
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
        emit: g,
      },
      S = { local: h, remote: O };
    function T(e) {
      return /^http[s]?:\/\/.*/.test(e);
    }
    function D(e) {
      return 'String' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function N(e) {
      return (
        'number' == typeof e ||
        '[object Number]' === Object.prototype.toString.call(e)
      );
    }
    function w(e) {
      return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
    }
    function R(e) {
      return /^\d{4}-\d{2}-\d{2}$/.test(e);
    }
    function q(e) {
      return (
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
        /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
      );
    }
    function E(e) {
      return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
    }
    function k(e) {
      var t = !1;
      return (
        'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function F(e) {
      if (!k(e)) return !1;
      for (var t = 0, r = e.length; t < r; t++) if (!D(e[t])) return !1;
      return !0;
    }
    function P(e) {
      var t = !1;
      return (
        'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
        t
      );
    }
    function I(e) {
      var t = !1;
      return C.quantity.properties.quantity.enum.indexOf(e) >= 0 && (t = !0), t;
    }
    function M(e) {
      return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
    }
    function _(e) {
      var t = !1;
      return (
        'Function' === Object.prototype.toString.call(e).slice(8, -1) &&
          (t = !0),
        t
      );
    }
    function A(e) {
      var t;
      return (
        (t =
          e && P(e)
            ? (function (e) {
                var t;
                if (P(e)) {
                  var r = Object.keys(e);
                  e.data && e.filter && 2 === r.length
                    ? (t = k(e.data) || P(e.data) ? o(S.local) : o(S.remote))
                    : e.trigger && e.eventData && 2 === r.length
                      ? (t = o(x.emit))
                      : e.register && e.actionFunc && 2 === r.length
                        ? (t = o(x.on))
                        : e.quantity && I(e.quantity) && 2 === r.length
                          ? (t = o(C.quantity))
                          : ((t = o(C['empty-object'])),
                            Object.keys(e).map(function (r) {
                              var a = e[r];
                              t.properties[r] = A(a);
                            }));
                }
                return t;
              })(e)
            : e && k(e)
              ? (function (e) {
                  var t;
                  if (e && k(e))
                    if (F(e)) {
                      (t = o(C.select)).items.enum = e;
                      var r = t.items.enumextra.length,
                        a = e.length;
                      if (a > r)
                        for (var i = r, l = a; i < l; i++)
                          t.items.enumextra.push('选项' + e(i));
                    } else {
                      t = o(C['empty-array']);
                      var n = A(e[0]);
                      t.items.properties = n.properties;
                    }
                  return t;
                })(e)
              : (function (e) {
                  var t = '';
                  if (w(e)) t = o(C.boolean);
                  else if (N(e)) t = o(C.number);
                  else if (T(e)) t = o(C.url);
                  else if (R(e)) t = o(C.date);
                  else if (q(e)) t = o(C['date-time']);
                  else if (E(e)) t = o(C.time);
                  else if (M(e)) t = o(C.color);
                  else
                    try {
                      t = N(JSON.parse(e)) ? o(C.input) : o(C.json);
                    } catch (r) {
                      t = e && e.length > 30 ? o(C.textarea) : o(C.input);
                    }
                  return t;
                })(e)),
        t
      );
    }
    function $(e, t) {
      var r = t || {};
      return (
        P(e) &&
          'object' === getExpectType(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (t) {
              var a = e.properties[t];
              r = B(a, r);
            },
          ),
        r
      );
    }
    function B(e, t) {
      var r = !t,
        a = t || {};
      if (e && '{}' !== JSON.stringify(e)) {
        var i = e.type;
        'object' === i || 'func' === i || 'style' === i || 'data' === i
          ? (!r && a.object ? (a.object += 1) : r || (a.object = 1),
            (a = $(e, a)))
          : 'array' === i
            ? (!r && a.array ? (a.array += 1) : r || (a.array = 1),
              (a = $((e = e.items), a)))
            : !r && a[i]
              ? (a[i] += 1)
              : r || (a[i] = 1);
      }
      return a;
    }
    function L(e) {
      var t = o(e);
      if (
        (!t.title && t.description && (t.title = t.description),
        t.type || (t.type = t.format),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !p(t.default) ||
          delete t.default,
        'radio' === t.type &&
          ((t.type = 'string'),
          t.enum &&
            t.enumextra &&
            ((t.items = {
              type: 'string',
              enum: o(t.enum),
              enumextra: o(t.enumextra),
            }),
            delete t.enum,
            delete t.enumextra)),
        'quantity' === t.type)
      ) {
        var r = t.properties,
          a = o(C.quantity);
        if (r.quantity && P(r.quantity) && r.quantity.default) {
          var i = r.quantity.default;
          a.properties.quantity.default = 'percent' === i ? '%' : i;
        }
        t = a;
      }
      if ('datasource' === t.type) {
        var l = t.properties,
          n = l.type && l.type.default,
          u = l.data && l.data.default,
          c = l.filter && l.filter.default;
        'local' === n
          ? ((t = o(S.local)).properties.data.default = u ? o(u) : '{}')
          : ((t = o(S.remote)).properties.data.default = u
              ? o(u)
              : 'http://xxx'),
          (t.properties.filter.default = c ? o(c) : '() => {}');
      }
      if ('event' === t.type) {
        var s = t.properties,
          d = s.type && s.type.default;
        if ('in' === d || 'on' === d) {
          var y = (s.filter && s.filter.default) || '() => {}';
          (t = o(x.on)),
            s.actionFunc &&
              P(s.actionFunc) &&
              (t.properties.actionFunc.default = s.actionFunc.default || o(y));
        } else {
          var f = (s.filter && s.filter.default) || '{}';
          (t = o(x.emit)),
            s.eventData &&
              P(s.eventData) &&
              (t.properties.eventData.default = s.eventData.default || o(f));
        }
      }
      return (
        t.properties &&
          (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
          t.propertyOrder.map(function (e) {
            t.properties[e] = V(t.properties[e]);
          })),
        t.items && (t.items = V(t.items)),
        t
      );
    }
    function V(e) {
      var t = o(e);
      return (
        t.required || delete t.required,
        t.type && t.type && (t.type = t.type),
        ('quantity' !== t.type &&
          'array' !== t.type &&
          'datasource' !== t.type &&
          'event' !== t.type &&
          'object' !== t.type) ||
          !p(t.default) ||
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
            t.properties[e] = V(t.properties[e]);
          })),
        'array' === t.type && t.items && (t.items = V(t.items)),
        t
      );
    }
    require('mobx');
    var J,
      K =
        (((J = {
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
        (J.textarea = 'string'),
        (J['text-editor'] = 'string'),
        (J.time = 'string'),
        (J.url = 'string'),
        (J['dynamic-config'] = 'object'),
        (J['sohu-source'] = 'object'),
        (J['sohu-event'] = 'object'),
        J);
    function U(e) {
      return K[e] || e;
    }
    function X(e, t) {
      K[e]
        ? console.warn('当前已经存在' + e + '(' + K[e] + ')，暂时不支持覆盖。')
        : (K[e] = t);
    }
    function Y(e) {
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
    function W(e) {
      var t = !1,
        r = e.lastUpdateTime,
        a = new Date('2024-10-05T00:01:00.691Z').getTime();
      return r && new Date(r).getTime() >= a && (t = !0), t;
    }
    function Z(e) {
      var t = !1,
        r = U(e.type),
        a = void 0 === e.isContainer || e.isContainer;
      return 'object' === r && a && (t = !0), t;
    }
    function z(e) {
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
    function H(e, t) {
      var r = e.split('-'),
        a = t.split('-');
      return r.pop(), a.pop(), r.join('-') === a.join('-');
    }
    function Q(e, t) {
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
    function G(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function ee(e) {
      var t = e.split('-'),
        r = t.pop(),
        a = Number(r) + 1;
      return t.push('' + a), t.join('-');
    }
    function te(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    function re(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) - 1), t.join('-');
    }
    function ae(e) {
      var t = e.split('-'),
        r = t.pop();
      return t.push(Number(r) + 1), t.join('-');
    }
    function ie(e, t) {
      var r = '',
        a = !1;
      return (
        e.options && e.options[0] && ((r = e.options[0].value), (a = !0)),
        (t || e.multiple) && (r = a ? [r] : []),
        r
      );
    }
    function le(e, t) {
      var r = '',
        a = t;
      p(a) && p(e.default) && typeof a != typeof e.default && (a = void 0);
      var i = p(a) ? a : e.default;
      switch (e.type) {
        case 'select':
        case 'radio':
          r = i || ie(e);
          break;
        case 'checkboxes':
          r = i || ie(e, !0);
          break;
        case 'color':
          ('#fff' !== i && '#FFF' !== i) || (i = '#ffffff'),
            (r = p(i) ? i : '#ffffff');
          break;
        case 'boolean':
          r = !!p(i) && i;
          break;
        case 'number':
          r = p(i) ? i : void 0;
          break;
        case 'json':
          var l = '';
          if (P(i) || k(i)) l = i;
          else if (_(i) || '' === i) l = {};
          else
            try {
              l = JSON.parse(i);
            } catch (e) {
              l = {};
            }
          r = l;
          break;
        default:
          r =
            'input' === e.type && '0' === e.default
              ? i || e.default
              : p(i)
                ? i
                : void 0;
      }
      return r;
    }
    function ne(e, t) {
      var r = {},
        a = e.type;
      if (P(e) && 'object' === U(e.type)) {
        var i = e,
          l = t;
        p(l) &&
          ((p(i.default) && typeof l != typeof e.default) || !P(l)) &&
          (l = void 0);
        var n = p(l) ? l : i.default;
        'dynamic-data' === a
          ? ((r = o(j)),
            n &&
              P(n) &&
              '{}' !== JSON.stringify(n) &&
              (r = Object.assign(r, n)))
          : 'datasource' === a
            ? i.properties &&
              i.properties.type &&
              i.properties.type.default &&
              'local' === i.properties.type.default
              ? ((r = { data: '{}', filter: '() => {}' }),
                n && n.data && (r.data = n.data),
                n && n.filter && (r.filter = n.filter),
                'http://xxx' === r.data && (r.data = '{}'))
              : ((r = { data: 'http://xxx', filter: '() => {}' }),
                n && n.data && (r.data = n.data),
                n && n.filter && (r.filter = n.filter),
                '{}' === r.data && (r.data = 'http://xxx'))
            : 'event' === a
              ? i.properties &&
                i.properties.type &&
                i.properties.type.default &&
                'emit' === i.properties.type.default
                ? n && 'out' === n.type
                  ? (r = {
                      trigger: (n && n.filter) || 'eventName',
                      eventData: '{}',
                    })
                  : ((r = { trigger: 'eventName', eventData: '{}' }),
                    n && n.trigger && (r.trigger = n.trigger),
                    n && n.eventData && (r.eventData = n.eventData))
                : n && 'in' === n.type
                  ? (r = {
                      register: 'eventName',
                      actionFunc: (n && n.filter) || '() => {}',
                    })
                  : ((r = { register: 'eventName', actionFunc: '() => {}' }),
                    n && n.register && (r.register = n.register),
                    n && n.actionFunc && (r.actionFunc = n.actionFunc))
              : !1 === e.isContainer && n && P(n) && '{}' !== JSON.stringify(n)
                ? (r = Object.assign(r, n))
                : e.properties &&
                  (e.propertyOrder
                    ? e.propertyOrder
                    : Object.keys(e.properties)
                  ).map(function (a) {
                    var i = e.properties[a],
                      l = t && t[a];
                    switch (U(i.type)) {
                      case 'array':
                        r[a] = oe(i, l);
                        break;
                      case 'object':
                        r[a] = ne(i, l);
                        break;
                      default:
                        r[a] = le(i, l);
                    }
                  });
      }
      return r;
    }
    function oe(e, t) {
      var r = [];
      if (e && 'array' === U(e.type)) {
        var a = t;
        p(a) &&
          ((p(e.default) && typeof a != typeof e.default) || !k(a)) &&
          (a = void 0);
        var i = p(a) ? a : e.default;
        if ('array' === U(e.type))
          if (k(i))
            i.map(function (t) {
              r.push(ne(e.items, t));
            });
          else if (i) r = i;
          else {
            var l = ne(e.items, i);
            r.push(l);
          }
        else r = p(i) ? i : [];
      }
      return r;
    }
    function ue(e, t) {
      return 'object' === U(e.type)
        ? ne(e, t)
        : 'array' === U(e.type)
          ? oe(e, t)
          : le(e, t);
    }
    var pe = C;
    function ce(e, t) {
      var r = t || [];
      if (e && '{}' !== JSON.stringify(e))
        if (P(e))
          if (
            e.type &&
            'remote' === e.type &&
            e.config &&
            P(e.config) &&
            e.config.dataName &&
            p(e.localFilter) &&
            p(e.data)
          ) {
            var a = e.config.body;
            if (a && !P(a))
              try {
                a = JSON.parse(a);
              } catch (e) {
                a = {};
              }
            r.push({ id: e.config.id, dataName: e.config.dataName, body: a });
          } else
            Object.keys(e).map(function (t) {
              ce(e[t], r);
            });
        else
          k(e) &&
            e.map(function (e) {
              ce(e, r);
            });
      return r;
    }
    function se(e, t) {
      var r = t || 'data';
      return (
        e.split('-').map(function (e) {
          r = /^\d+$/.test(e) ? r + '[' + e + ']' : r + '.' + e;
        }),
        r
      );
    }
    function de(e, t) {
      var r = [];
      return (
        P(e)
          ? Object.keys(e).map(function (a) {
              var i = e[a],
                l = t ? t + '-' + a : a;
              P(i) || k(i)
                ? r.push({ title: a, value: l, key: l, children: de(i, l) })
                : r.push({ title: a, value: l, key: l });
            })
          : k(e) &&
            e.map(function (e, a) {
              var i = a.toString(),
                l = t ? t + '-' + a : i;
              P(e) || k(e)
                ? r.push({ title: i, value: l, key: l, children: de(e, l) })
                : r.push({ title: i, value: l, key: l });
            }),
        r
      );
    }
    function ye(e, t) {
      var r = '';
      return (
        'object' === U(e.type) &&
          e.properties &&
          (e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)).map(
            function (a) {
              var i = e.properties[a],
                l = t[a];
              ('array' === U(i.type) && 'object' === U(i.type)) ||
                (l &&
                  i.isConditionProp &&
                  (r.indexOf('-') > 0 ? (r += '-' + l) : (r = l)));
            },
          ),
        r
      );
    }
    function fe(e) {
      var t = e.split('-');
      return t.pop(), t.join('-');
    }
    function be(e) {
      var t = e.split('-'),
        r = t.pop();
      return [t.join('-'), r];
    }
    var ve = [
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
