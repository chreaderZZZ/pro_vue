<template>
  <div class="header-container">
    <!-- 分左右两个部分 -->
    <div class="l-content">
      <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/陈状.jpg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 点击触发
    handleMenu() {
      // 在main挂载后，vue才有$store属性
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  // 上、下填充0，左、右填充20
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  // 将flex作为显示容器
  display: flex;

  // 分配弹性元素方式 (space-between：均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点)
  justify-content: space-between;
  // 纵轴垂直居中
  align-items: center;
  .text {
    color: #fff;
    font-size: 14px;
    //
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
