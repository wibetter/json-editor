/** dynamicConfig: 动态配置
 * 【字段属性说明】
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  type：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
export const initSohuEventConfig = {
  type: 'sohu-event',
  title: 'sohu组件事件',
  showCodeViewBtn: false,
  isContainer: false,
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
          readOnly: true,
        },
      },
      propertyOrder: ['eventCode'],
      showCodeViewBtn: false,
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
      showCodeViewBtn: false,
    },
  },
  propertyOrder: ['globalEventMap', 'event'],
};
