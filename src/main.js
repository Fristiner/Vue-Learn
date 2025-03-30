import { createApp } from 'vue';
import '@/assets/less/index.less';
import App from './App.vue';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

import router from './router/index.js';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '@/api/mock.js';
import { createPinia } from 'pinia';
const pinia = createPinia();
import api from './api/api.js';
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component);
}
// 注册api数据
app.config.globalProperties.$api = api;
app.use(router);
app.use(pinia);
app.mount('#app');

// createApp(App).mount('#app')
