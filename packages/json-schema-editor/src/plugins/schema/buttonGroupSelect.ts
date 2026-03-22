import { SchemaDescriptor } from '$core/types';
import { schemaRegistry } from '$core/registry';
import { buildPropsSchema, EDITABLE_PROPS } from '$core/schema';
import SelectSchema from '$schemaRenderer/SelectSchema/index';

/**
 * button-group-select 元素描述文件
 * 按钮组单选类型，schema 结构与单选类型一致，渲染时使用按钮切换形式进行单击选中
 */
const buttonGroupSelectDescriptor: SchemaDescriptor = {
  type: 'button-group-select',
  label: '按钮组单选',
  isContainer: false,

  defaultSchema: {
    type: 'button-group-select',
    title: '按钮组单选',
    options: [
      { label: '选项a', value: 'a' },
      { label: '选项b', value: 'b' },
      { label: '选项c', value: 'c' },
    ],
    default: '',
    description: '',
  },

  renderer: SelectSchema,

  propsSchema: buildPropsSchema({
    readOnly: EDITABLE_PROPS.readOnly,
    isRequired: EDITABLE_PROPS.isRequired,
    vertical: {
      type: 'boolean',
      title: '垂直模式',
      description: '开启后，按钮组以垂直方向排列展示（默认为平铺/水平模式）',
    },
    defaultActiveFirstOption: {
      type: 'boolean',
      title: '选中第一项',
      description: '是否默认高亮第一个选项',
    },
    default: {
      type: 'input',
      title: '默认值',
      placeholder: '请输入默认选中项的 value 值',
    },
  }),
};

schemaRegistry.register(buttonGroupSelectDescriptor);

export default buttonGroupSelectDescriptor;
