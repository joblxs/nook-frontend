import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css';
import 'animate.css';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(Layui);
app.mount('#app');