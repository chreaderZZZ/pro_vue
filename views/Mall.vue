<template>
  <div>
    <el-col :span="8">
      <div class="left-col">
        <!-- 右侧显示地图 -->
        <MapMapbox />
      </div>
    </el-col>
    <el-col class="center-col" :span="8"><MapMapbox /> </el-col>
    <el-col class="right-col" :span="8"><MapMapbox /> </el-col>
  </div>
</template>

<script>
import MapMapbox from "../components/MapMapbox.vue";
export default {
  //   引入组件
  components: {
    MapMapbox,
  },
};
</script>

<style lang="less" scoped>
.left-col {
  display: flex;
  flex-direction: column;
  .left-title {
    font-size: 20px;
    color: red;
    background-color: #f2ede7;
    margin-bottom: 5px;
  }
}
</style>
