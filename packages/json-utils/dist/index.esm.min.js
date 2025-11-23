import { cloneDeep as e, isEqual as t, truncate as r } from 'lodash';
import i from 'qs';
const a = {
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
  l = {
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
  o = {
    type: 'local',
    config: { url: '', method: 'get', headers: {}, data: {}, dataType: 'json' },
    data: '{}',
    localFilter: 'return data;',
  },
  n = {
    jsonschema: {
      type: 'object',
      title: 'jsonSchemaObject',
      properties: {
        func: {
          type: 'object',
          title: '功能设置',
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
    boolean: { type: 'boolean', title: '布尔值', default: !1, description: '' },
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
    json: { title: 'json数据', type: 'json', default: '{}', description: '' },
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
    'padding-margin': {
      type: 'padding-margin',
      title: '边距设置',
      isContainer: !1,
      properties: {
        margin: {
          title: '外边距',
          type: 'input',
          default: '0',
          description: '',
        },
        padding: {
          title: '内边距',
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
      propertyOrder: ['margin', 'padding', 'quantity'],
    },
    radio: {
      type: 'radio',
      title: '单选',
      options: [
        { label: '选项a', value: 'a' },
        { label: '选项b', value: 'b' },
        { label: '选项c', value: 'c' },
      ],
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
      description: '',
    },
    cascader: {
      type: 'cascader',
      title: '级联选择',
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [{ value: 'xihu', label: 'West Lake' }],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
            },
          ],
        },
      ],
      default: 'a',
      description: '',
      showSearch: !0,
      allowClear: !0,
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
          type: 'api',
          description: '用于存放接口的配置数据(url、请求参数等)',
          isRequired: !0,
          properties: {
            url: {
              type: 'url',
              title: '请求地址',
              default: '',
              description: 'API 的 URL',
              isRequired: !0,
            },
            method: {
              type: 'select',
              title: '请求方式',
              default: 'get',
              options: [
                { label: 'GET', value: 'get' },
                { label: 'POST', value: 'post' },
                { label: 'PUT', value: 'put' },
                { label: 'PATCH', value: 'patch' },
                { label: 'DELETE', value: 'delete' },
              ],
              isRequired: !0,
            },
            headers: {
              type: 'json',
              title: '请求头',
              default: '{}',
              description: '请求头对象',
            },
            data: {
              type: 'json',
              title: '请求参数',
              default: '{}',
              description: '请求体或查询参数',
            },
            dataType: {
              type: 'select',
              title: '数据格式',
              default: 'json',
              options: [
                { label: 'JSON', value: 'json' },
                { label: 'FormData', value: 'form-data' },
                { label: 'Form', value: 'form' },
              ],
            },
            cache: {
              type: 'number',
              title: '缓存时间',
              default: void 0,
              description: '缓存时间（ms），不设置则不缓存',
            },
          },
          propertyOrder: [
            'url',
            'method',
            'headers',
            'data',
            'dataType',
            'cache',
          ],
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
    datasource: l,
    event: a,
    api: {
      type: 'api',
      title: 'API 配置',
      isContainer: !1,
      properties: {
        url: {
          type: 'url',
          title: '请求地址',
          default: '',
          description: 'API 的 URL',
          isRequired: !0,
        },
        method: {
          type: 'select',
          title: '请求方式',
          default: 'get',
          options: [
            { label: 'GET', value: 'get' },
            { label: 'POST', value: 'post' },
            { label: 'PUT', value: 'put' },
            { label: 'DELETE', value: 'delete' },
          ],
          isRequired: !0,
        },
        headers: {
          type: 'json',
          title: '请求头',
          default: '{}',
          description: '请求头对象',
        },
        data: {
          type: 'json',
          title: '请求参数',
          default: '{}',
          description: '请求体或查询参数',
        },
      },
      propertyOrder: ['url', 'method', 'headers', 'data'],
    },
  },
  p = {
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
    emit: a,
  },
  s = {
    local: l,
    remote: {
      type: 'datasource',
      title: '数据源',
      isContainer: !1,
      properties: {
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
      },
      propertyOrder: ['type', 'data', 'filter'],
    },
  };
function u(e) {
  return /^http[s]?:\/\/.*/.test(e);
}
function c(e) {
  return 'String' === Object.prototype.toString.call(e).slice(8, -1);
}
function d(e) {
  return (
    'number' == typeof e ||
    '[object Number]' === Object.prototype.toString.call(e)
  );
}
function y(e) {
  return 'Boolean' === Object.prototype.toString.call(e).slice(8, -1);
}
function f(e) {
  return /^\d{4}-\d{2}-\d{2}$/.test(e);
}
function m(e) {
  return (
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e) ||
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)
  );
}
function b(e) {
  return /^\d{2}:\d{2}:\d{2}$/.test(e) || /^\d{2}:\d{2}$/.test(e);
}
function g(e) {
  let t = !1;
  return (
    'Array' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
    t
  );
}
function h(e) {
  if (!g(e)) return !1;
  for (let t = 0, r = e.length; t < r; t++) {
    if (!c(e[t])) return !1;
  }
  return !0;
}
function j(e) {
  let t = !1;
  return (
    'Object' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
    t
  );
}
function v(e) {
  let t = !1;
  return (
    (n.quantity.properties.quantity?.enum || []).indexOf(e) >= 0 && (t = !0),
    t
  );
}
function O(e) {
  return /^#[0-9a-f]{6}$/.test(e) || /^#[0-9a-f]{3}$/.test(e);
}
function x(e) {
  let t = !1;
  return (
    'Function' === Object.prototype.toString.call(e).slice(8, -1) && (t = !0),
    t
  );
}
function q() {
  let e = {};
  return (location.search && (e = i.parse(location.search.substring(1))), e);
}
function T(e) {
  let t = '';
  return (e && (t = i.stringify(e)), t);
}
function $(t) {
  return e(t);
}
function k(e, r) {
  if ((F(e) && !F(r)) || (!F(e) && F(r)) || typeof e != typeof r) return !1;
  if (j(e) && (e.id !== r.id || e.lastUpdateTime !== r.lastUpdateTime))
    return !1;
  const i = new Date().getTime();
  return (
    !!(
      j(e) &&
      e.lastUpdateTime &&
      e.lastUpdateTime === r.lastUpdateTime &&
      i - e.lastUpdateTime < 500
    ) || t(e, r)
  );
}
function S(e, r) {
  if ((F(e) && !F(r)) || (!F(e) && F(r)) || typeof e != typeof r) return !1;
  if (j(e) && (e.id !== r.id || e.lastUpdateTime !== r.lastUpdateTime))
    return !1;
  const i = new Date().getTime();
  return (
    !!(
      j(e) &&
      e.lastUpdateTime &&
      e.lastUpdateTime === r.lastUpdateTime &&
      i - e.lastUpdateTime < 500
    ) ||
    !(
      !j(e) ||
      !(
        (F(e.id) && e.id === r.id) ||
        (F(e.lastUpdateTime) && e.lastUpdateTime === r.lastUpdateTime)
      )
    ) ||
    t(e, r)
  );
}
function F(e) {
  let t = !1;
  return (null != e && (t = !0), t);
}
function D(e, t) {
  return r(e, t);
}
function N(e, t) {
  const r = t || {};
  if (!e) return !1;
  const i = new Function('data', `with(data) { return (${e});}`);
  let a = '';
  try {
    a = i(r);
  } catch (t) {
    return (console.warn(`表达式运算出错: ${e}，报错信息：`, t), a);
  }
  return a;
}
function U(e, t, r) {
  let i = t;
  if ((r && (i = $(t)), e)) {
    const t = e.split('-');
    for (let e = 0, r = t.length; e < r; e++) {
      const r = t[e];
      r && (i = i && i[r]);
    }
  }
  return i;
}
function R(e, t, r) {
  let i = t;
  if ((r && (i = $(t)), e)) {
    const t = 'string' == typeof e ? e.split('-') : [e.toString()];
    for (let e = 0, r = t.length; e < r; e++) {
      const r = t[e];
      if (
        '0' !== r ||
        ('array' !== i.type &&
          'radio' !== i.type &&
          'select' !== i.type &&
          'checkboxes' !== i.type) ||
        (!i.options && !i.items)
      ) {
        if (r) {
          let e = '0';
          if (i.propertyOrder) e = i.propertyOrder[r];
          else if (i.properties) {
            e = Object.keys(i.properties)[Number(r)];
          }
          i = i.properties[e];
        }
      } else i = i.options || i.items;
    }
  }
  return i;
}
function C(e, t, r) {
  let i = t;
  if ((r && (i = $(t)), e && i)) {
    const t = e.split('-');
    for (let e = 0, r = t.length; e < r; e++) {
      const r = t[e];
      r && i.properties && (i = i.properties[r]);
    }
  }
  return i;
}
function w(e, t) {
  let r = t,
    i = '';
  const a = 'string' == typeof e ? e.split('-') : [e.toString()];
  for (let e = 0, t = a.length; e < t; e++) {
    const t = a[e];
    if ('0' === t && r.items) ((r = r.items), (i = i ? `${i}-items` : 'items'));
    else if ('0' === t && r.options)
      ((r = r.options), (i = i ? `${i}-options` : 'options'));
    else if (t) {
      let e = '0';
      if (r.propertyOrder) e = r.propertyOrder[t];
      else if (r.properties) {
        e = Object.keys(r.properties)[Number(t)];
      }
      ((r = r.properties[e]), (i = i ? `${i}-${e}` : e));
    }
  }
  return i;
}
function E(e, t) {
  let r = t,
    i = '';
  const a = e.split('-');
  for (let e = 0, t = a.length; e < t; e++) {
    const t = a[e];
    if (t) {
      let e = -1;
      if (r.propertyOrder)
        ((e = r.propertyOrder.indexOf(t)), (r = r.properties[t]));
      else if (r.properties) {
        ((e = Object.keys(r.properties).indexOf(t)), (r = r.properties[t]));
      } else
        r.items
          ? ((e = 0), (r = r.items))
          : r.options && ((e = 0), (r = r.options));
      i = i ? `${i}-${e}` : e.toString();
    }
  }
  return i;
}
function A(e) {
  let t = {};
  return (
    (t =
      e && j(e)
        ? (function (e) {
            let t = {};
            if (j(e)) {
              const r = Object.keys(e);
              e.data && e.filter && 2 === r.length
                ? (t = g(e.data) || j(e.data) ? $(s.local) : $(s.remote))
                : e.trigger && e.eventData && 2 === r.length
                  ? (t = $(p.emit))
                  : e.register && e.actionFunc && 2 === r.length
                    ? (t = $(p.on))
                    : e.quantity && v(e.quantity) && 2 === r.length
                      ? (t = $(n.quantity))
                      : ((t = $(n['empty-object'])),
                        Object.keys(e).map((r) => {
                          const i = e[r];
                          t.properties[r] = A(i);
                        }));
            }
            return t;
          })(e)
        : e && g(e)
          ? (function (e) {
              let t;
              if (e && g(e))
                if (h(e)) {
                  ((t = $(n.select)), (t.items.enum = e));
                  const r = t.items.enumextra.length,
                    i = e.length;
                  if (i > r)
                    for (let a = r, l = i; a < l; a++)
                      t.items.enumextra.push(`选项${e(a)}`);
                } else {
                  t = $(n['empty-array']);
                  const r = A(e[0]);
                  t.items.properties = r.properties;
                }
              return t;
            })(e)
          : (function (e) {
              let t = '';
              if (y(e)) t = $(n.boolean);
              else if (d(e)) t = $(n.number);
              else if (u(e)) t = $(n.url);
              else if (f(e)) t = $(n.date);
              else if (m(e)) t = $(n['date-time']);
              else if (b(e)) t = $(n.time);
              else if (O(e)) t = $(n.color);
              else
                try {
                  t = d(JSON.parse(e)) ? $(n.input) : $(n.json);
                } catch (r) {
                  t = e && e.length > 30 ? $(n.textarea) : $(n.input);
                }
              return t;
            })(e)),
    t
  );
}
const P = {
  array: 'array',
  boolean: 'boolean',
  'box-style': 'object',
  'padding-margin': 'object',
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
  select: 'string',
  textarea: 'string',
  'text-editor': 'string',
  time: 'string',
  url: 'string',
};
function J(e) {
  return P[e] || e;
}
function L(e, t) {
  P[e]
    ? console.warn(`当前已经存在${e}(${P[e]})，暂时不支持覆盖。`)
    : (P[e] = t);
}
function z(e, t) {
  let r = t || {};
  if (j(e) && 'object' === J(e.type) && e.properties) {
    let t = [];
    ((t = e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)),
      t.map((t) => {
        const i = e.properties[t];
        r = H(i, r);
      }));
  }
  return r;
}
function H(e, t) {
  const r = !t;
  let i = t || {};
  if (e && '{}' !== JSON.stringify(e)) {
    const t = e.type;
    'object' === t || 'func' === t || 'style' === t || 'data' === t
      ? (!r && i.object ? (i.object += 1) : r || (i.object = 1), (i = z(e, i)))
      : 'array' === t
        ? (!r && i.array ? (i.array += 1) : r || (i.array = 1),
          (i = z((e = e.items), i)))
        : !r && i[t]
          ? (i[t] += 1)
          : r || (i[t] = 1);
  }
  return i;
}
function I(e) {
  let t = $(e);
  if (
    (!t.title && t.description && (t.title = t.description),
    t.type || (t.type = t.format),
    ('quantity' !== t.type &&
      'array' !== t.type &&
      'datasource' !== t.type &&
      'event' !== t.type &&
      'object' !== t.type) ||
      !F(t.default) ||
      delete t.default,
    'radio' === t.type &&
      ((t.type = 'string'),
      t.enum &&
        t.enumextra &&
        ((t.items = {
          type: 'string',
          enum: $(t.enum),
          enumextra: $(t.enumextra),
        }),
        delete t.enum,
        delete t.enumextra)),
    'quantity' === t.type)
  ) {
    const e = t.properties,
      r = $(n.quantity);
    if (e.quantity && j(e.quantity) && e.quantity.default) {
      const t = e.quantity.default;
      r.properties.quantity.default = 'percent' === t ? '%' : t;
    }
    t = r;
  }
  if ('datasource' === t.type) {
    const e = t.properties,
      r = e.type && e.type.default,
      i = e.data && e.data.default,
      a = e.filter && e.filter.default;
    ('local' === r
      ? ((t = $(s.local)), (t.properties.data.default = i ? $(i) : '{}'))
      : ((t = $(s.remote)),
        (t.properties.data.default = i ? $(i) : 'http://xxx')),
      (t.properties.filter.default = a ? $(a) : '() => {}'));
  }
  if ('event' === t.type) {
    const e = t.properties,
      r = e.type && e.type.default;
    if ('in' === r || 'on' === r) {
      const r = (e.filter && e.filter.default) || '() => {}';
      ((t = $(p.on)),
        e.actionFunc &&
          j(e.actionFunc) &&
          (t.properties.actionFunc.default = e.actionFunc.default || $(r)));
    } else {
      const r = (e.filter && e.filter.default) || '{}';
      ((t = $(p.emit)),
        e.eventData &&
          j(e.eventData) &&
          (t.properties.eventData.default = e.eventData.default || $(r)));
    }
  }
  return (
    t.properties &&
      (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
      t.propertyOrder.map((e) => {
        t.properties[e] = Z(t.properties[e]);
      })),
    t.items && (t.items = Z(t.items)),
    t
  );
}
function Z(e) {
  let t = $(e);
  return (
    t.required || delete t.required,
    t.type && t.type && (t.type = t.type),
    ('quantity' !== t.type &&
      'array' !== t.type &&
      'datasource' !== t.type &&
      'event' !== t.type &&
      'object' !== t.type) ||
      !F(t.default) ||
      delete t.default,
    ('radio' !== t.type && 'checkboxes' !== t.type && 'select' !== t.type) ||
      (t.items &&
        t.items.enum &&
        t.items.enumextra &&
        ((t.options = []),
        t.items.enum.forEach((e, r) => {
          t.options.push({ label: t.items.enumextra[r] || e, value: e });
        }),
        delete t.items)),
    t.properties &&
      (t.propertyOrder || (t.propertyOrder = Object.keys(t.properties)),
      t.propertyOrder.map((e) => {
        t.properties[e] = Z(t.properties[e]);
      })),
    'array' === t.type && t.items && (t.items = Z(t.items)),
    t
  );
}
function G(e) {
  let t = !0;
  if (!e) return t;
  const r = e.type;
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
  let t = !1;
  const { lastUpdateTime: r } = e,
    i = new Date('2024-10-05T00:01:00.691Z').getTime();
  return (r && new Date(r).getTime() >= i && (t = !0), t);
}
function B(e) {
  let t = !1;
  const r = J(e.type),
    i = void 0 === e.isContainer || e.isContainer;
  return ('object' === r && i && (t = !0), t);
}
function M(e) {
  let t = !0;
  return (
    'object' === e.type && e.propertyOrder && e.properties
      ? e.propertyOrder.map((r) => {
          const i = e.properties[r];
          ('object' === e.type && i.propertyOrder && i.properties) || (t = !1);
        })
      : (t = !1),
    t
  );
}
function K(e, t) {
  const r = e.split('-'),
    i = t.split('-');
  return (r.pop(), i.pop(), r.join('-') === i.join('-'));
}
function Q(e, t) {
  const r = e.split('-'),
    i = t.split('-');
  let a = 'before';
  for (let e = 0, t = (r.length > i.length ? i : r).length; e < t; e += 1) {
    Number(r[e]) > Number(i[e]) && (a = 'after');
  }
  return a;
}
function V(e) {
  const t = 'string' == typeof e ? e.split('-') : [e.toString()];
  return (t.pop(), t.join('-'));
}
function X(e) {
  const t = 'string' == typeof e ? e.split('-') : [e.toString()],
    r = t.pop(),
    i = Number(r) + 1;
  return (t.push(`${i}`), t.join('-'));
}
function Y(e) {
  const t = 'string' == typeof e ? e.split('-') : [e.toString()],
    r = t.pop() || '';
  return [t.join('-'), r];
}
function _(e) {
  const t = 'string' == typeof e ? e.split('-') : [e.toString()],
    r = t.pop();
  return (t.push(Number(r) - 1), t.join('-'));
}
function ee(e) {
  const t = 'string' == typeof e ? e.split('-') : [e.toString()],
    r = t.pop();
  return (t.push(Number(r) + 1), t.join('-'));
}
function te(e, t) {
  let r = '',
    i = !1;
  if (!1 !== e.defaultActiveFirstOption && e.defaultActiveFirstOption)
    return (
      e.options && e.options[0] && ((r = e.options[0].value), (i = !0)),
      (t || e.multiple) && (r = i ? [r] : []),
      r
    );
}
function re(e, t) {
  let r,
    i = t;
  var a, l;
  F(i) &&
    F(e.default) &&
    (typeof i != typeof e.default ||
      ((a = i), (l = e.default), `${j(a)}-${g(a)}` != `${j(l)}-${g(l)}`)) &&
    (i = void 0);
  let o = F(i) ? i : e.default;
  switch (e.type) {
    case 'select':
    case 'radio':
      r = o ?? te(e);
      break;
    case 'checkboxes':
      r = o ?? te(e, !0);
      break;
    case 'color':
      (('#fff' !== o && '#FFF' !== o) || (o = '#ffffff'),
        (r = F(o) ? o : '#ffffff'));
      break;
    case 'boolean':
      r = !!F(o) && o;
      break;
    case 'number':
      r = F(o) ? o : void 0;
      break;
    case 'json':
      let t = '';
      if (j(o) || g(o)) t = o;
      else if (x(o) || '' === o) t = {};
      else
        try {
          t = JSON.parse(o);
        } catch (e) {
          t = {};
        }
      r = t;
      break;
    default:
      r =
        'input' === e.type && '0' === e.default
          ? o || e.default
          : F(o)
            ? o
            : void 0;
  }
  return r;
}
function ie(e, t) {
  let r = {};
  const i = e.type;
  if (j(e) && 'object' === J(e.type)) {
    const a = e;
    let l = t;
    F(l) &&
      ((F(a.default) && typeof l != typeof e.default) || !j(l)) &&
      (l = void 0);
    const n = F(l) ? l : a.default;
    if ('dynamic-data' === i)
      ((r = $(o)),
        n && j(n) && '{}' !== JSON.stringify(n) && (r = Object.assign(r, n)));
    else if ('datasource' === i)
      a.properties &&
      a.properties.type &&
      a.properties.type.default &&
      'local' === a.properties.type.default
        ? ((r = { data: '{}', filter: '() => {}' }),
          n && n.data && (r.data = n.data),
          n && n.filter && (r.filter = n.filter),
          'http://xxx' === r.data && (r.data = '{}'))
        : ((r = { data: 'http://xxx', filter: '() => {}' }),
          n && n.data && (r.data = n.data),
          n && n.filter && (r.filter = n.filter),
          '{}' === r.data && (r.data = 'http://xxx'));
    else if ('event' === i)
      a.properties &&
      a.properties.type &&
      a.properties.type.default &&
      'emit' === a.properties.type.default
        ? n && 'out' === n.type
          ? (r = { trigger: (n && n.filter) || 'eventName', eventData: '{}' })
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
            n && n.actionFunc && (r.actionFunc = n.actionFunc));
    else if (!1 === e.isContainer && n && j(n) && '{}' !== JSON.stringify(n))
      r = Object.assign(r, n);
    else if (void 0 === l && a.default && j(a.default)) r = a.default;
    else if (e.properties) {
      let i = [];
      ((i = e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)),
        i.map((i) => {
          const a = e.properties[i],
            l = t && t[i];
          switch (J(a.type)) {
            case 'array':
              r[i] = ae(a, l);
              break;
            case 'object':
              r[i] = ie(a, l);
              break;
            default:
              r[i] = re(a, l);
          }
        }));
    }
  }
  return r;
}
function ae(e, t) {
  let r = [];
  if (e && 'array' === J(e.type)) {
    let i = t;
    F(i) &&
      ((F(e.default) && typeof i != typeof e.default) || !g(i)) &&
      (i = void 0);
    const a = F(i) ? i : e.default;
    if ('array' === J(e.type))
      if (g(a))
        a.map((t) => {
          r.push(ie(e.items, t));
        });
      else if (a) r = a;
      else {
        const t = ie(e.items, a);
        r.push(t);
      }
    else r = F(a) ? a : [];
  }
  return r;
}
function le(e, t) {
  let r = {};
  return (
    (r =
      'object' === J(e.type)
        ? ie(e, t)
        : 'array' === J(e.type)
          ? ae(e, t)
          : re(e, t)),
    r
  );
}
const oe = n;
function ne(e, t) {
  let r = t || 'data';
  return (
    e.split('-').map((e) => {
      r = /^\d+$/.test(e) ? `${r}[${e}]` : `${r}.${e}`;
    }),
    r
  );
}
function pe(e, t) {
  let r = [];
  if (j(e)) {
    Object.keys(e).map((i) => {
      const a = e[i],
        l = t ? `${t}-${i}` : i;
      j(a) || g(a)
        ? r.push({ title: i, value: l, key: l, children: pe(a, l) })
        : r.push({ title: i, value: l, key: l });
    });
  } else
    g(e) &&
      e.map((e, i) => {
        const a = i.toString(),
          l = t ? `${t}-${i}` : a;
        j(e) || g(e)
          ? r.push({ title: a, value: l, key: l, children: pe(e, l) })
          : r.push({ title: a, value: l, key: l });
      });
  return r;
}
function se(e, t) {
  let r = '';
  if ('object' === J(e.type) && e.properties) {
    let i = [];
    ((i = e.propertyOrder ? e.propertyOrder : Object.keys(e.properties)),
      i.map((i) => {
        const a = e.properties[i];
        let l = t[i];
        ('array' === J(a.type) && 'object' === J(a.type)) ||
          (l &&
            a.isConditionProp &&
            (r.indexOf('-') > 0 ? (r += `-${l}`) : (r = l)));
      }));
  }
  return r;
}
function ue(e) {
  const t = e.split('-');
  return (t.pop(), t.join('-'));
}
function ce(e) {
  const t = e.split('-'),
    r = t.pop() || '';
  return [t.join('-'), r];
}
const de = [
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
export {
  s as DataSourceTypeList,
  p as EventTypeDataList,
  de as KeyWordList,
  n as TypeDataList,
  ne as dataRoute2dataPath,
  N as evalExpression,
  Q as getCurPosition,
  te as getDefaultOptionVal,
  J as getExpectType,
  U as getJsonDataByKeyRoute,
  X as getNextIndexRoute,
  V as getParentIndexRoute,
  Y as getParentIndexRoute_CurIndex,
  ue as getParentKeyRoute,
  ce as getParentKeyRoute_CurKey,
  R as getSchemaByIndexRoute,
  C as getSchemaByKeyRoute,
  F as hasProperties,
  w as indexRoute2keyRoute,
  g as isArray,
  y as isBoolean,
  O as isColor,
  B as isContainerSchema,
  f as isDateStr,
  m as isDateTimeStr,
  G as isEmptySchema,
  k as isEqual,
  S as isEqualByIdT,
  x as isFunction,
  W as isNewSchemaData,
  d as isNumber,
  j as isObject,
  v as isQuantity,
  K as isSameParent,
  h as isSelect,
  c as isString,
  M as isStructuredSchema,
  b as isTimeStr,
  u as isURL,
  A as json2schema,
  pe as json2treeData,
  E as keyRoute2indexRoute,
  H as metaElemAnalyzer,
  ee as moveBackward,
  _ as moveForward,
  $ as objClone,
  Z as oldSchemaToNewSchema,
  I as oldSchemaToNewSchemaV1,
  L as registerExpectType,
  se as schema2conditionValue,
  le as schema2json,
  oe as schemaMetaList,
  D as truncate,
  q as urlParse,
  T as urlStringify,
};
