import { renderersMap, registerRenderer } from './factory';

declare global {
  interface Window {
    JSONEditorCustomRenderers?: Record<string, any>;
  }
}

/**
 * 提供两种特殊的注册渲染器的方式
 * 1、自动加载预先注册的自定义渲染器：自动加载并注册 window.JSONEditorCustomRenderers 中的渲染器
 * 2、通过 postMessage 告知 json-editor 注册一个新的渲染器：间接注册渲染器，无需直接依赖 json-editor。
 */

// 自动加载预先注册的自定义渲染器
export function autoPreRegisterJSONEditorCustomRenderers() {
  if (window.JSONEditorCustomRenderers) {
    Object.keys(window.JSONEditorCustomRenderers).forEach(
      (rendererType: string) => {
        if (renderersMap[rendererType]) {
          console.warn(
            `[json-editor]：预注册渲染器失败，当前存在重名渲染器（${rendererType}）。`,
          );
        } else {
          const curRenderer = window.JSONEditorCustomRenderers?.[rendererType];
          if (curRenderer) {
            registerRenderer({
              type: rendererType,
              component: curRenderer,
            });
          }
        }
      },
    );
  }
}

// 自动加载并注册 window.JSONEditorCustomRenderers 中的渲染器
autoPreRegisterJSONEditorCustomRenderers();

/**
 * postMessage 渲染器动态注册机制
 动态注册示例：
 AddJSONCustomRenderer('new-type', {
   type: 'new-type',
   weight: 0,
   framework: 'react',
   component: newJsonRenderer,
   config: {xx配置},
 });

 window.postMessage(
   {
    type: 'json-editor-renderer-register-event',
    eventMsg: '[json-editor]: 注册一个自定义渲染器',
    jsonRenderer: {
      type: 'new-type',
      // component: newJsonRenderer,
    },
   },
  '*',
 );
*/
window.addEventListener(
  'message',
  (event: MessageEvent) => {
    if (!event.data) {
      return;
    }
    if (
      event.data.type === 'json-editor-renderer-register-event' &&
      event.data.jsonRenderer &&
      event.data.jsonRenderer.type
    ) {
      const curType = event.data.jsonRenderer.type;
      if (renderersMap[curType]) {
        console.warn(
          `[json-editor]: 动态注册渲染器失败，当前存在重名渲染器（${curType}）。`,
        );
      } else {
        console.info('[json-editor]: 响应动态注册渲染器事件：', curType);
        const curRenderer = getJSONCustomRenderer(curType);
        if (curRenderer) {
          registerRenderer({
            type: curType,
            component: curRenderer,
          });
        }
      }
    }
  },
  false,
);

export function AddJSONCustomRenderer(
  componentType: string,
  rendererComponent: any,
) {
  if (window && !window.JSONEditorCustomRenderers) {
    window.JSONEditorCustomRenderers = {};
  }
  if (
    window.JSONEditorCustomRenderers &&
    !window.JSONEditorCustomRenderers[componentType]
  ) {
    window.JSONEditorCustomRenderers[componentType] = rendererComponent;
    return componentType;
  } else {
    console.error(
      `[json-editor]：注册渲染器失败，存在重名渲染器(${componentType})。`,
    );
  }
  return undefined;
}

export function getJSONCustomRenderer(componentType: string) {
  if (
    window &&
    window.JSONEditorCustomRenderers &&
    window.JSONEditorCustomRenderers[componentType]
  ) {
    return window.JSONEditorCustomRenderers[componentType].component;
  }
  return undefined;
}
