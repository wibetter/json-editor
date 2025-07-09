import React from 'react';
export const themes = {
  light: {
    foreground: '#000',
    background: '#eee',
  },
  dark: {
    foreground: '#fff',
    background: '#222',
  },
};
// Step1： 创建一个装上下文的容器
export const ThemeContext = React.createContext(
  themes.dark, // defaultValue 默认值
);

export function updateDark(newVal) {
  themes.dark.background = newVal;
  console.log(themes);
}
