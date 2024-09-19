import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Layui from '@layui/layui-vue'
import ElementPlus from 'element-plus'
import 'animate.css';
import '@layui/layui-vue/lib/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(Layui);
app.mount('#app');