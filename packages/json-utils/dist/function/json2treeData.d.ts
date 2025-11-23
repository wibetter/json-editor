/**
 *  DataRoute转真实数据路径
 * */
export declare function dataRoute2dataPath(
  dataRoute: string,
  baseDataPath: string,
): string;
/**
 *  mockData转treeData（供antd的TreeSelect使用）
 * */
export declare function json2treeData(
  mockData: any,
  parentDataRoute: string,
): any[];
