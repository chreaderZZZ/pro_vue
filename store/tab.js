// 管理 菜单相关的数据

// 将当前的对象导出
export default {
    // 定义数据
    state: {
        isCollapse: false//用于控制菜单的展开或收起
    },
    // 定义方法
    mutations: {
        // 修改菜单展开收起方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }

    }
}

// Vuex思路:
// 1.在CommonHeader组件中点击button按钮，点击后出发state的修改——调用mutation的方法，进行state的修改
// 2. state发生变化后，在CommonAside组件中获取这个值