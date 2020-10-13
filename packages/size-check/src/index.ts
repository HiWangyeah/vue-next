import { h, createApp } from '@vue/runtime-dom'
// 实现 vue 渲染功能的最小代码量
// The bare minimum code required for rendering something to the screen
createApp({
  render: () => h('div', 'hello world!')
}).mount('#app')
