import Vue from 'vue'
import Vuex from 'vuex'
import tab from '../store/tab.js'


// 全局注入
Vue.use(Vuex)

// 创建vuex的实例
// 将store实例对外暴露
export default new Vuex.Store({
    modules:{
        tab
    }
})