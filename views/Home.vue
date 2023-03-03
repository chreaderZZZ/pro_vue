<template>
  <div>
    <!-- 引用自适应布局 span表示内容的比例，总共有24 -->
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img class="img" src="../assets/陈状.jpg" alt="" srcset="" />
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="logininfo">
            <p>上次登陆时间：<span>2022-9-8</span></p>
            <p>上次登陆地点：<span>重庆</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px">
          <!-- 下方表格 -->
          <el-table :data="tableData" border style="width: 100%">
            <!-- <el-table-column prop="date" label="日期" > </el-table-column>
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column> -->
            <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <!-- 插入地图组件 -->
        <MapMapbox />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MapMapbox from "../components/MapMapbox.vue";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      //   表格遍历优化
      tableLabel: {
        name: "姓名",
        date: "日期",
        address: "地址",
      },
    };
  },
  //   引入组件
  components: {
    MapMapbox,
  },
};
</script>

<style lang="less" scoped>
.user {
  // 向下的内边距
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;

  display: flex;
  // 纵轴垂直居中
  align-items: center;
  .img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999;
    }
  }
}

.logininfo {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999;
    // span标签在p标签内部
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
</style>
