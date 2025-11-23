/**
 * JSONSchema(json格式)对象的通用操作方法【非响应式数据操作方法集合】
 */
/** 判断是否为空的Schema
 * 包括 通用schema和组件配置专用的schema
 * */
export declare function isEmptySchema(targetJsonSchema: any): boolean;
/**
 *  判断是否是最新版的schema数据
 *  备注：确保当前schema数据是通过@wibetter/json-schema-editor生成的
 * */
export declare function isNewSchemaData(schemaData: any): boolean;
/** 判断是否是容器类型元素
 *  容器类型字段：object数值类型
 *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
 *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
 * */
export declare function isContainerSchema(curSchema: any): boolean;
/** 判断是否是结构化的schema数据，
 *  判定条件：一级schema为object类型，其所有二级schema也为object类型
 * */
export declare function isStructuredSchema(jsonSchema: any): boolean;
/**
 * 判断是否是同一个父元素
 * 备注：用于判断两个元素是否在同一个父级容器中
 */
export declare function isSameParent(
  curIndex: string,
  targetIndex: string,
): boolean;
/**
 * 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
 */
export declare function getCurPosition(
  curIndex: string,
  targetIndex: string,
): string;
/**
 * 获取父元素的路径值
 */
export declare function getParentIndexRoute(
  curIndexRoute: string | number,
): string;
/**
 * 获取下一个兄弟元素的路径值
 */
export declare function getNextIndexRoute(
  curIndexRoute: string | number,
): string;
/**
 * 获取父元素的路径值和当前index
 */
export declare function getParentIndexRoute_CurIndex(
  curIndexRoute: string | number,
): string[];
/**
 * 将当前路径值向前移动一位
 */
export declare function moveForward(curIndexRoute: string | number): any;
/**
 * 将当前路径值向后移动一位
 */
export declare function moveBackward(curIndexRoute: string | number): any;
/**
 * 获取第一个选项值
 */
export declare function getDefaultOptionVal(
  jsonSchema: any,
  multiple?: boolean,
): any;
