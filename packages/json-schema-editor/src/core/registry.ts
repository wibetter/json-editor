import { SchemaDescriptor } from './types';

/**
 * 元素注册表（SchemaRegistry）
 * 管理所有已注册的元素类型描述文件
 */
class SchemaRegistry {
  private static instance: SchemaRegistry;
  private descriptors: Map<string, SchemaDescriptor> = new Map();

  private constructor() {}

  static getInstance(): SchemaRegistry {
    if (!SchemaRegistry.instance) {
      SchemaRegistry.instance = new SchemaRegistry();
    }
    return SchemaRegistry.instance;
  }

  /**
   * 注册单个元素描述
   * 如果同类型已注册，则覆盖原有描述
   */
  register(descriptor: SchemaDescriptor): void {
    this.descriptors.set(descriptor.type, descriptor);
  }

  /**
   * 批量注册元素描述
   */
  registerAll(descriptors: SchemaDescriptor[]): void {
    descriptors.forEach((d) => this.register(d));
  }

  /**
   * 根据 type 获取描述
   */
  get(type: string): SchemaDescriptor | undefined {
    return this.descriptors.get(type);
  }

  /**
   * 获取所有已注册的类型名称列表
   */
  getAllTypes(): string[] {
    return Array.from(this.descriptors.keys());
  }

  /**
   * 获取所有已注册的描述
   */
  getAll(): SchemaDescriptor[] {
    return Array.from(this.descriptors.values());
  }

  /**
   * 判断指定类型是否已注册
   */
  has(type: string): boolean {
    return this.descriptors.has(type);
  }

  /**
   * 获取指定类型的 defaultSchema
   */
  getDefaultSchema(type: string): Record<string, any> | undefined {
    return this.descriptors.get(type)?.defaultSchema;
  }
}

export const schemaRegistry = SchemaRegistry.getInstance();

// 简版注册方法
export const registerSchema = (
  descriptor: SchemaDescriptor,
  force: boolean = false,
): void => {
  if (schemaRegistry.has(descriptor.type) && !force) {
    console.warn(
      `[JSONSchemaEditor] 已存在 ${descriptor.type} 类型的描述:`,
      descriptor,
    );
    return;
  }
  schemaRegistry.register(descriptor);
};

export default schemaRegistry;
