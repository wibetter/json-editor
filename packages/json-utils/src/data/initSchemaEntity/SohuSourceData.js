export const initSohuSourceData = {
  type: 'sohu-source',
  title: '组件动态数据',
  description: '',
  isContainer: false,
  properties: {
    mainConfig: {
      type: 'object',
      title: '主要配置',
      description: '',
      isContainer: false,
      properties: {
        type: {
          type: 'select',
          title: '数据来源',
          isConditionProp: true,
          options: [
            {
              label: '模板直接配置',
              // value: "DevDefaults",
              value: 'RuntimeDataSelfDefine',
            },
            {
              label: 'mp后台配置',
              value: 'ContentStaticConfig',
            },
            {
              label: '请求当前页面数据',
              value: 'RuntimeDataSelfContent',
            },
            {
              label: '资源中心配置',
              value: 'ResourceCenter',
            },
          ],
          default: 'ContentStaticConfig',
          description: '',
        },
        description: {
          title: '数据源名称',
          type: 'input',
          default: '',
          description: '',
          placeholder: '',
          onShow: 'type === "ContentStaticConfig"',
        },
        dataType: {
          type: 'radio',
          title: '请求方式',
          options: [
            {
              label: '批量请求',
              value: 'FROMCIS',
            },
            {
              label: '组件内部请求',
              value: 'FROMCOMPCIS',
            },
            {
              label: '不请求',
              value: 'false',
            },
          ],
          description: '',
        },
        CONTENTID: {
          title: '数据源ID',
          type: 'input',
          default: '',
          description: '',
          placeholder: '',
          onShow: 'type === "RuntimeDataSelfDefine"',
        },
        CONTENTTYPE: {
          type: 'select',
          title: '数据源类型',
          options: [
            {
              label: 'channel',
              value: 'channel',
            },
            {
              label: 'topic',
              value: 'topic',
            },
            {
              label: 'block',
              value: 'block',
            },
          ],
          description: '',
          onShow: 'type === "RuntimeDataSelfDefine"',
        },
      },
      propertyOrder: [
        'type',
        'description',
        'dataType',
        'CONTENTID',
        'CONTENTTYPE',
      ],
      showCodeViewBtn: false,
    },
    outConfig: {
      type: 'object',
      title: '出流配置',
      description: '',
      isContainer: false,
      properties: {
        PRO: {
          type: 'select',
          title: '内容类型',
          options: [
            { label: '置顶+加精', value: '4' },
            { label: '长效置顶', value: '5' },
          ],
          description: '',
        },
        FEEDTYPE: {
          type: 'select',
          title: '排序类型',
          options: [
            { label: '综合', value: 'XTOPIC_SYNTHETICAL' },
            { label: '最新', value: 'XTOPIC_LATEST' },
            { label: '相关', value: 'XTOPIC_RELATED' },
          ],
          description: '',
        },
        VIEW: {
          type: 'select',
          title: '数据裁剪',
          options: [
            { label: '相关推荐模式', value: 'articleFeedMode' },
            { label: '文字链裁剪方式', value: 'textMode' },
            { label: '短内容摘录方式', value: 'excerptMode' },
            {
              label: '互动（点赞/评论）裁剪方式',
              value: 'interactMode',
            },
            {
              label: '评论文字链裁剪方式',
              value: 'commentTextMode',
            },
            {
              label: '摘录方式（无点赞）',
              value: 'excerptCommentMode',
            },
            { label: '无限流卡片模式', value: 'dynamicFeedMode' },
            { label: '时间线模式', value: 'timeLineMode' },
            { label: '复合内容流模式', value: 'multiFeedMode' },
            {
              label: '搜狐号推荐模式',
              value: 'recommendFeedMode',
            },
            {
              label: '作者页内容流模式',
              value: 'operateFeedMode',
            },
            { label: '标签内容流模式', value: 'tagsFeedMode' },
            { label: '评论链裁剪方式', value: 'commentMode' },
            { label: '标签摘录方式', value: 'excerptTagsMode' },
            { label: '内容流模式', value: 'feedMode' },
          ],
          description: '',
        },
        CONTENTCONTEXT: {
          type: 'select',
          title: 'mKey参数',
          options: [
            {
              label: '作者ID+栏目ID',
              value: 'authorColumnId_${#authorColumnId}',
            },
            {
              label: '账号ID',
              value: 'accountId_${#contentData_account_id}',
            },
            {
              label: 'mkeyID',
              value: 'mid_${#mkeyConst_mid}',
            },
            {
              label: 'mkey名称',
              value: 'mname_${#mkeyConst_mname}',
            },
            {
              label: '城市Code码',
              value: 'cityCode_${#cityInfo_cityCode}',
            },
            {
              label: '城市名称',
              value: 'cityName_${#cityInfo_cityName}',
            },
            {
              label: '焦点城市Code码',
              value: 'focusCityCode_${#focusCityInfo_cityCode}',
            },
          ],
          description: '',
        },
        CONTENTPARAMS: {
          title: '动态参数',
          type: 'json',
          default: '{}',
          description: '请填写JSON格式的参数',
          placeholder: '',
        },
      },
      propertyOrder: [
        'PRO',
        'FEEDTYPE',
        'VIEW',
        'CONTENTCONTEXT',
        'CONTENTPARAMS',
      ],
      showCodeViewBtn: false,
    },
    otherConfig: {
      type: 'object',
      title: '选配内容',
      description: '',
      isContainer: false,
      properties: {
        SIZE: {
          type: 'number',
          title: '容量',
          default: 1,
          minimum: 0,
          maximum: 1000,
          description: '该位置区块需要的内容条数',
        },
        TITLE: {
          title: '标题',
          type: 'input',
          default: '',
          description: '',
          placeholder: '',
        },
        CODE: {
          title: 'Code参数',
          type: 'input',
          default: '',
          description: '',
          placeholder: '',
        },
        URL: {
          type: 'url',
          title: '跳转链接',
          default: '',
          description: '',
          placeholder: '',
        },
      },
      propertyOrder: ['SIZE', 'TITLE', 'URL', 'CODE'],
      showCodeViewBtn: false,
    },
  },
  propertyOrder: ['mainConfig', 'otherConfig', 'outConfig'],
  showCodeViewBtn: false,
};

export const initAdConfigSchema = {
  type: 'object',
  title: '广告配置',
  description: '',
  properties: {
    type: {
      type: 'select',
      title: '数据源类型',
      isConditionProp: true,
      options: [
        {
          label: '模板直接设置',
          value: 'DevDefaults',
        },
        {
          label: '资源中心配置',
          value: 'ResourceCenter',
        },
      ],
      description: '',
    },
    value: {
      type: 'object',
      title: '广告规则',
      description: '',
      onShow: 'type === "DevDefaults"',
      properties: {
        id: {
          title: '广告ID',
          type: 'number',
          default: '',
          description: '',
          placeholder: '',
        },
        rule: {
          type: 'radio',
          title: '规则类型',
          isConditionProp: true,
          options: [
            {
              label: '固定位置',
              value: 1,
            },
            {
              label: '隔几出几',
              value: 2,
            },
            {
              label: '固定位置隔几出几',
              value: 3,
            },
          ],
          default: 1,
          description: '',
        },
        fixArray: {
          type: 'select',
          title: '固定位置',
          default: [1],
          description: '',
          multiple: true,
          onShow: 'rule === 1 || rule === 3',
          options: [
            {
              label: '1',
              value: 1,
            },
            {
              label: '2',
              value: 2,
            },
            {
              label: '3',
              value: 3,
            },
            {
              label: '4',
              value: 4,
            },
            {
              label: '5',
              value: 5,
            },
            {
              label: '6',
              value: 6,
            },
            {
              label: '7',
              value: 7,
            },
            {
              label: '8',
              value: 8,
            },
            {
              label: '9',
              value: 9,
            },
            {
              label: '10',
              value: 10,
            },
            {
              label: '11',
              value: 11,
            },
            {
              label: '12',
              value: 12,
            },
            {
              label: '13',
              value: 13,
            },
            {
              label: '14',
              value: 14,
            },
            {
              label: '15',
              value: 15,
            },
            {
              label: '16',
              value: 16,
            },
            {
              label: '17',
              value: 17,
            },
            {
              label: '18',
              value: 18,
            },
            {
              label: '19',
              value: 19,
            },
            {
              label: '20',
              value: 20,
            },
            {
              label: '21',
              value: 21,
            },
            {
              label: '22',
              value: 22,
            },
            {
              label: '23',
              value: 23,
            },
            {
              label: '24',
              value: 24,
            },
            {
              label: '25',
              value: 25,
            },
            {
              label: '26',
              value: 26,
            },
            {
              label: '27',
              value: 27,
            },
            {
              label: '28',
              value: 28,
            },
            {
              label: '29',
              value: 29,
            },
            {
              label: '30',
              value: 30,
            },
            {
              label: '31',
              value: 31,
            },
            {
              label: '32',
              value: 32,
            },
            {
              label: '33',
              value: 33,
            },
            {
              label: '34',
              value: 34,
            },
            {
              label: '35',
              value: 35,
            },
            {
              label: '36',
              value: 36,
            },
            {
              label: '37',
              value: 37,
            },
            {
              label: '38',
              value: 38,
            },
            {
              label: '39',
              value: 39,
            },
            {
              label: '40',
              value: 40,
            },
            {
              label: '41',
              value: 41,
            },
            {
              label: '42',
              value: 42,
            },
            {
              label: '43',
              value: 43,
            },
            {
              label: '44',
              value: 44,
            },
            {
              label: '45',
              value: 45,
            },
            {
              label: '46',
              value: 46,
            },
            {
              label: '47',
              value: 47,
            },
            {
              label: '48',
              value: 48,
            },
            {
              label: '49',
              value: 49,
            },
            {
              label: '50',
              value: 50,
            },
          ],
        },
        begin: {
          type: 'number',
          title: '开始位置',
          default: 1,
          minimum: '1',
          maximum: '50',
          description: '',
          onShow: 'rule === 2 || rule === 3',
        },
        turn: {
          type: 'number',
          title: '间隔/隔',
          default: 1,
          minimum: '1',
          maximum: '50',
          description: '',
          onShow: 'rule === 2 || rule === 3',
        },
        number: {
          type: 'number',
          title: '间隔/出',
          default: 1,
          minimum: '1',
          maximum: '50',
          description: '',
          onShow: 'rule === 2 || rule === 3',
        },
        mergeType: {
          type: 'radio',
          title: '插入规则',
          options: [
            {
              label: '覆盖',
              value: 0,
            },
            {
              label: '插入',
              value: 1,
            },
          ],
          default: 0,
          description: '',
        },
      },
      propertyOrder: [
        'id',
        'rule',
        'fixArray',
        'begin',
        'turn',
        'number',
        'mergeType',
      ],
    },
    range: {
      type: 'array',
      title: '广告规则列表',
      description: '',
      onShow: 'type === "ResourceCenter"',
      items: {
        type: 'object',
        title: '数组项',
        description: '',
        properties: {
          rule: {
            type: 'radio',
            title: '规则类型',
            isConditionProp: true,
            options: [
              {
                label: '固定位置',
                value: 1,
              },
              {
                label: '隔几出几',
                value: 2,
              },
              {
                label: '固定位置隔几出几',
                value: 3,
              },
            ],
            default: 1,
            description: '',
          },
          fixArray: {
            type: 'select',
            title: '固定位置',
            default: [1],
            description: '',
            onShow: 'rule === 1 || rule === 3',
            multiple: true,
            options: [
              {
                label: '1',
                value: 1,
              },
              {
                label: '2',
                value: 2,
              },
              {
                label: '3',
                value: 3,
              },
              {
                label: '4',
                value: 4,
              },
              {
                label: '5',
                value: 5,
              },
              {
                label: '6',
                value: 6,
              },
              {
                label: '7',
                value: 7,
              },
              {
                label: '8',
                value: 8,
              },
              {
                label: '9',
                value: 9,
              },
              {
                label: '10',
                value: 10,
              },
              {
                label: '11',
                value: 11,
              },
              {
                label: '12',
                value: 12,
              },
              {
                label: '13',
                value: 13,
              },
              {
                label: '14',
                value: 14,
              },
              {
                label: '15',
                value: 15,
              },
              {
                label: '16',
                value: 16,
              },
              {
                label: '17',
                value: 17,
              },
              {
                label: '18',
                value: 18,
              },
              {
                label: '19',
                value: 19,
              },
              {
                label: '20',
                value: 20,
              },
              {
                label: '21',
                value: 21,
              },
              {
                label: '22',
                value: 22,
              },
              {
                label: '23',
                value: 23,
              },
              {
                label: '24',
                value: 24,
              },
              {
                label: '25',
                value: 25,
              },
              {
                label: '26',
                value: 26,
              },
              {
                label: '27',
                value: 27,
              },
              {
                label: '28',
                value: 28,
              },
              {
                label: '29',
                value: 29,
              },
              {
                label: '30',
                value: 30,
              },
              {
                label: '31',
                value: 31,
              },
              {
                label: '32',
                value: 32,
              },
              {
                label: '33',
                value: 33,
              },
              {
                label: '34',
                value: 34,
              },
              {
                label: '35',
                value: 35,
              },
              {
                label: '36',
                value: 36,
              },
              {
                label: '37',
                value: 37,
              },
              {
                label: '38',
                value: 38,
              },
              {
                label: '39',
                value: 39,
              },
              {
                label: '40',
                value: 40,
              },
              {
                label: '41',
                value: 41,
              },
              {
                label: '42',
                value: 42,
              },
              {
                label: '43',
                value: 43,
              },
              {
                label: '44',
                value: 44,
              },
              {
                label: '45',
                value: 45,
              },
              {
                label: '46',
                value: 46,
              },
              {
                label: '47',
                value: 47,
              },
              {
                label: '48',
                value: 48,
              },
              {
                label: '49',
                value: 49,
              },
              {
                label: '50',
                value: 50,
              },
            ],
          },
          begin: {
            type: 'number',
            title: '开始位置',
            default: 1,
            minimum: '1',
            maximum: '50',
            description: '',
            onShow: 'rule === 2 || rule === 3',
          },
          turn: {
            type: 'number',
            title: '间隔/隔',
            default: 1,
            minimum: '1',
            maximum: '50',
            description: '',
            onShow: 'rule === 2 || rule === 3',
          },
          number: {
            type: 'number',
            title: '间隔/出',
            default: 1,
            minimum: '1',
            maximum: '50',
            description: '',
            onShow: 'rule === 2 || rule === 3',
          },
          mergeType: {
            type: 'radio',
            title: '插入规则',
            options: [
              {
                label: '覆盖',
                value: 0,
              },
              {
                label: '插入',
                value: 1,
              },
            ],
            default: 0,
            description: '',
          },
        },
        propertyOrder: [
          'rule',
          'fixArray',
          'begin',
          'turn',
          'number',
          'mergeType',
        ],
      },
    },
  },
  propertyOrder: ['type', 'value', 'range'],
};
