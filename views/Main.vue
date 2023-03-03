<template>
  <div>
    <el-container>
    <!-- 实现折叠与展开页面的铺满效果 -->
      <el-aside width="auto">
      <!-- 将组件放入对应位置 -->
        <common-aside />
      </el-aside>
      <el-container>
        <el-header class="el-header">
        <CommonHeader />
        </el-header>
        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <!-- 主路由指向到此处 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入简单的组件
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
export default {
  data() {
    return {};
  },

  //   引入组件
  components: {
    CommonAside,
    CommonHeader
  },
};
</script>

<style>
.el-header{
    padding: 0;
}
</style>
