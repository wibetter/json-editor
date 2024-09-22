export const jsonSchemaData = {
  func: {
    field_1: 'text1',
    field_2: true,
    field_3: '2020-08-08',
    field_4: '2020-08-22 10:57',
    field_5: '00:05:00',
    field_6: {
      type: 'remote',
      config: {
        dataName: 'data-12', // 动态数据源名称
        title: 'xxx数据源', // 数据源中文名称
        desc: 'xxx数据源描述', //  数据源中文描述
        url: 'https://api.thecatapi.com/v1/images/search', // 动态数据源请求地址
        method: 'get',
        option: {},
        header: {}, // 请求头
        body: {
          // 请求参数相关
          param1: {
            title: '参数名称',
            scope: 'static', // 固定参数
            value: '111', // 固定值
          },
          param2: {
            title: '参数名称',
            scope: 'window',
            name: 'PARAM1',
            value: '111', // 默认值
          },
          pageId: {
            title: '页面id',
            scope: 'hash',
            name: 'pId',
            value: '111', // 默认值
          },
        },
        mock: '{}',
      },
      filter: `(resp) => { return resp.data; }`,
      data: '{}', // 用于存储结果数据
    },
    field_7: 'hello.world!',
    field_8: 51,
    field_9: 'a',
    field_10: ['a', 'b'],
    field_11: [
      {
        name: 'name',
        field_1: 'lisi',
      },
    ],
    field_12: {
      a: 'text1',
      field_2: 'text2',
      field_3: 'text13',
    },
  },
  style: {
    field_18: '#9c2b2b',
    field_23: {
      unit: 501,
      quantity: 'px',
    },
    field_1: '<p>hello,world!</p>\n<p>hello,world!</p>',
  },
  data: {
    field_28: {
      test: 123,
    },
    field_2: {
      type: 'remote',
      config: {
        dataName: 'data-12', // 动态数据源名称
        title: 'xxx数据源', // 数据源中文名称
        desc: 'xxx数据源描述', //  数据源中文描述
        url: 'https://api.thecatapi.com/v1/images/search', // 动态数据源请求地址
        method: 'get',
        option: {},
        header: {}, // 请求头
        body: {
          // 请求参数相关
          param1: {
            title: '参数名称',
            scope: 'static', // 固定参数
            value: '111', // 固定值
          },
          param2: {
            title: '参数名称',
            scope: 'window',
            name: 'PARAM1',
            value: '111', // 默认值
          },
          pageId: {
            title: '页面id',
            scope: 'hash',
            name: 'pId',
            value: '111', // 默认值
          },
        },
        mock: '{}',
      },
      filter: `(resp) => { return resp.data; }`,
      data: '{}', // 用于存储结果数据
    },
    field_29: {
      data: {
        test: 123,
      },
      filter: '() => {}',
    },
    field_29_2: {
      type: 'remote',
      config: {
        dataName: 'data-12', // 动态数据源名称
        title: 'xxx数据源', // 数据源中文名称
        desc: 'xxx数据源描述', //  数据源中文描述
        url: 'https://api.thecatapi.com/v1/images/search', // 动态数据源请求地址
        method: 'get',
        option: {},
        header: {}, // 请求头
        body: {
          // 请求参数相关
          param1: {
            title: '参数名称',
            scope: 'static', // 固定参数
            value: '111', // 固定值
          },
          param2: {
            title: '参数名称',
            scope: 'window',
            name: 'PARAM1',
            value: '111', // 默认值
          },
          pageId: {
            title: '页面id',
            scope: 'hash',
            name: 'pId',
            value: '111', // 默认值
          },
        },
        mock: '{}',
      },
      filter: `(resp) => { return resp.data; }`,
      data: '{}', // 用于存储结果数据
    },
    field_30: {
      trigger: 'click',
      eventData: {
        test: 123,
      },
    },
    field_30_1: {
      register: 'click',
      actionFunc: '() => {}',
    },
  },
};
