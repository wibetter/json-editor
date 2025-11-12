/**
 * json2treeData: 根据当前的json数据，转换成treeData（供antd的TreeSelect使用）
 * 【方法参数说明】
 * mockData: json数据，必填项。
 * 【返回数据格式说明】
 * [
 {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
 {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
 ];
 */
import { isObject, isArray } from '$utils/typeof';

/**
 *  DataRoute转真实数据路径
 * */
export function dataRoute2dataPath(dataRoute: string, baseDataPath: string) {
  let dataPath = baseDataPath || 'data'; // 默认数据根路径值为data
  const dataRouteArr = dataRoute.split('-');
  dataRouteArr.map((path) => {
    if (/^\d+$/.test(path)) {
      dataPath = `${dataPath}[${path}]`;
    } else {
      dataPath = `${dataPath}.${path}`;
    }
  });
  return dataPath;
}

/**
 *  mockData转treeData（供antd的TreeSelect使用）
 * */
export function json2treeData(mockData: any, parentDataRoute: string) {
  let treeData: any[] = [];
  if (isObject(mockData)) {
    const mockDataProps = Object.keys(mockData);
    mockDataProps.map((propKey) => {
      const mockDataItem = mockData[propKey];
      const curDataRoute = parentDataRoute
        ? `${parentDataRoute}-${propKey}`
        : propKey;
      if (isObject(mockDataItem) || isArray(mockDataItem)) {
        treeData.push({
          title: propKey,
          value: curDataRoute,
          key: curDataRoute,
          children: json2treeData(mockDataItem, curDataRoute),
        });
      } else {
        treeData.push({
          title: propKey,
          value: curDataRoute,
          key: curDataRoute,
        });
      }
    });
  } else if (isArray(mockData)) {
    mockData.map((mockDataItem: any, index: number) => {
      const indexStr = index.toString();
      const curDataRoute = parentDataRoute
        ? `${parentDataRoute}-${index}`
        : indexStr;
      if (isObject(mockDataItem) || isArray(mockDataItem)) {
        treeData.push({
          title: indexStr,
          value: curDataRoute,
          key: curDataRoute,
          children: json2treeData(mockDataItem, curDataRoute),
        });
      } else {
        treeData.push({
          title: indexStr,
          value: curDataRoute,
          key: curDataRoute,
        });
      }
    });
  }
  return treeData;
}
