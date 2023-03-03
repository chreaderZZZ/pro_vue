// 程序的主入口
import Vue from 'vue'
import App from './App.vue'
// import { Row,Button } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router,如果有index文件，则会默认读取index文件，不需要再细化下一层
import router from './router';

// 挂载
import store from './store';


Vue.config.productionTip = false

// 组件的全局注入
Vue.use(ElementUI);

// 按需引入
// Vue.use(Row)
// Vue.use(Button)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
