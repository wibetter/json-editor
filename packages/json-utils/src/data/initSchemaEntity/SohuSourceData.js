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
        },
        CONTENTTYPE: {
          type: 'select',
          title: '数据源类型',
          options: [
            {
              label: 'channle',
              value: 'channle',
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
          description: '',
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
