import { isObject } from '$utils/typeof';
import withStore from '$components/withStore';

// 存放 json-editor 渲染器
export const renderersMap = {};

export function Renderer(widgetConfig) {
  return function (component) {
    const renderer = registerRenderer({
      ...widgetConfig,
      component: component,
    });
    return renderer.component;
  };
}

// 注册渲染器
export function registerRenderer(widgetConfig) {
  if (!widgetConfig.type) {
    console.warn('[json-editor]：注册渲染器失败，请设置渲染器对应的 type。');
    return;
  } else if (!widgetConfig.component) {
    console.warn(
      '[json-editor]：注册渲染器失败，请设置渲染器对应的 component。',
    );
    return;
  }

  if (widgetConfig.type && typeof widgetConfig.type === 'string') {
    widgetConfig.type = widgetConfig.type.toLowerCase();
  }

  if (renderersMap[widgetConfig.type]) {
    console.warn(
      `[json-editor]：注册渲染器失败，当前存在重名渲染器（${widgetConfig.type}），请尝试换一个 type。`,
    );
    return;
  }

  // 注入 store
  const witchStoreRenderer = withStore(widgetConfig.component);

  renderersMap[widgetConfig.type] = witchStoreRenderer;
  return widgetConfig;
}

// 注销渲染器
export function unRegisterRenderer(widgetConfig) {
  const widgetType = isObject(widgetConfig) ? widgetConfig.type : widgetConfig;
  delete renderersMap[widgetType];
}

export function loadRenderer(widgetSchema, path) {
  return (
    <div className="RuntimeError">
      <p>Error: 找不到对应的渲染器</p>
      <p>Path: {path}</p>
      <pre>
        <code>{JSON.stringify(widgetSchema, null, 2)}</code>
      </pre>
    </div>
  );
}
