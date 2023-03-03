// 组件化（将单一的 不变的组件进行封装） // 点击菜单，进行路由跳转
<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ?'系统' : '基础地理数据管理系统'}}</h3>

    <!-- 遍历第一层 -->
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
    >
      <!-- 拼接icon、：动态拼接、ef6模板字符串语法 -->
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 遍历第二层 -->
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <!-- 子菜单渲染 -->
      <el-menu-item-group v-for="subitem in item.children" :key="subitem.path">
        <el-menu-item @click="clickSubmenu(subitem)" :index="subitem.path">{{
          subitem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

// scope属性：仅作用于当前的页面
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
//   边框有白边
  border-right:none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      //   格式化侧边栏
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "地图管理",
          icon: "position",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //   点击菜单
    clickMenu(item) {
      // console.log(item)
      // 通过router实现跳转
      // this为vue实例

      // 解决  Avoided redundant navigation to current location 报错问题
      // 当页面的路由与跳转的路由不一致时，才允许跳转
      // $route表示当前路由，$router表示全局,"==="严格相同，相同类型 相同值
      if (this.$route.path !== item.path && !(this.$route.path ==='/home' && (item.path === '/'))) {
        this.$router.push(item.path);
      }
    },
    // 点击子菜单
    clickSubmenu(subitem) {
      // console.log(subitem)
      if (this.$route.path !== subitem.path) this.$router.push(subitem.path);
    },
  },

  //   对数据过滤
  computed: {
    // 无子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    // 定义字段名称
    isCollapse(){
        return this.$store.state.tab.isCollapse
    }
  },
};
</script>
