/**
 * getSchemaByKeyRoute: 根据key值路径获取对应的schema数据
 * 【方法参数说明】
 * keyRoute: key值路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
export declare function getSchemaByKeyRoute(
  keyRoute: string,
  targetJsonSchemaObj: any,
  useObjClone: boolean,
): any;
