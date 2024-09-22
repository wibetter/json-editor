// 请求时会提供pageDataId
export const postDynamicAnalyzer = {
  pageDataId: 'xxx',
  widgets: {
    widget1: [
      // 区块id
      {
        id: 11, // 动态数据源id
        dataName: 'api1',
        body: {
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
          param4: {
            title: '参数名称',
            // 动态参数
            scope: 'hash', // url hash值
            name: 'pageId',
            value: '111',
          },
          param5: {
            title: '参数名称',
            scope: 'url', // url 参数值
            name: 'pageId',
            value: '111',
          },
          param6: {
            title: '参数名称',
            scope: 'window', // 环境变量
            name: 'pageId',
            value: '111',
          },
          param7: {
            title: '参数名称',
            scope: 'dynamic', // 接口下发
            dataName: 'api3',
            body: {
              param2: {
                title: '参数名称',
                scope: 'static',
                value: '222',
              },
              param3: {
                title: '参数名称',
                scope: 'static',
                value: '333',
              },
            },
          },
        },
      },
      {
        id: 11, // 动态数据源id
        dataName: 'api1',
        body: {
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
      },
    ],
    widget2: [
      {
        id: 11, // 动态数据源id
        dataName: 'api1',
        body: {
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
          param4: {
            title: '参数名称',
            // 动态参数
            scope: 'hash', // url hash值
            name: 'pageId',
            value: '111',
          },
          param5: {
            title: '参数名称',
            scope: 'url', // url 参数值
            name: 'pageId',
            value: '111',
          },
          param6: {
            title: '参数名称',
            scope: 'window', // 环境变量
            name: 'pageId',
            value: '111',
          },
        },
      },
    ],
  },
};
