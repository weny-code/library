<template>
  <div class="main-container">
    <div class="desc">GBA图书管理系统</div>
    <div class="bottom">
      <el-tooltip class="item" content="退出登录" placement="bottom-end">
        <i class="el-icon-switch-button" v-on:click="alert()"></i>
      </el-tooltip>
    </div>
    <div class="operation-container">
      <div class="myinfo" v-on:click="MyInfo()">
        <el-image
          :src="require('../assets/img/myinfo.png')"
          class="myinfo-img"
        ></el-image>
        <div class="desc">个人信息</div>
      </div>
      <div class="myinfo" v-on:click="MyBook()">
        <el-image
          :src="require('../assets/img/mybook.png')"
          class="myinfo-img"
        ></el-image>
        <div class="desc">个人书架</div>
      </div>
      <div class="bookroom" v-on:click="BookRoom()">
        <el-image
          :src="require('../assets/img/bookroom.png')"
          class="bookroom-img"
        ></el-image>
        <div class="desc">图书库</div>
      </div>
    </div>
    <div class="notice-container">
      <el-card class="box-card">
        <div class="text item">IBM实训项目-图书管理系统</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "666",
    };
  },
  name: "UserPage",
  methods: {
    MyInfo() {
      this.$router.push({ path: "/MyInfo", query: { key: this.msg } });
    },

    MyBook() {},

    BookRoom() {
      this.$router.push({ path: "/Bookroom", query: { key: this.msg } });
    },

    alert() {
      this.$confirm("正在选择退出当前用户, 是否继续?", "退出登录......", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出操作",
          });
        });
    },
  },
};
</script>

<style scoped>
.main-container {
  position: absolute;
  width: 100%;
}

@font-face {
  font-family: "FZQuSJW";
  src: url("../assets/font/FZQuSJW.TTF");
}

.main-container .desc {
  font-family: "FZQuSJW";
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5px;
  color: cadetblue;
  margin-top: 10px;
  float: left;
  margin-left: 10px;
  cursor: default;
}

.main-container .bottom {
  float: right;
  font-size: 40px;
  margin-right: 50px;
  margin-top: 10px;
  cursor: pointer;
  text-align: center;
}

.main-container .item {
  margin: 4px;
}

.operation-container {
  display: flex;
  margin-top: 15%;
  height: 350px;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
}

.myinfo {
  width: 280px;
  height: 280px;
  transition: all 0.6s ease;
}

.myinfo:hover {
  transform: scale(1.4);
  cursor: pointer;
}

.bookroom {
  width: 330px;
  height: 280px;
  transition: all 0.6s ease;
}

.bookroom:hover {
  transform: scale(1.4);
  cursor: pointer;
}

@font-face {
  font-family: "FZZhaoMFXSJF";
  src: url("../assets/font/FZZhaoMFXSJF.TTF");
}

.bookroom .desc {
  font-family: "FZZhaoMFXSJF";
  font-size: 40px;
  color: black;
  margin-left: 70px;
  margin-top: 0px;
  font-weight: bold;
  margin-top: 0px;
}

.myinfo .desc {
  font-family: "FZZhaoMFXSJF";
  font-size: 40px;
  color: black;
  margin-left: 70px;
  font-weight: bold;
  margin-top: -20px;
}

.myinfo-img {
  max-width: 80%;
  max-height: 80%;
}

.bookroom-img {
  max-width: 100%;
  max-height: 100%;
  margin-top: 20px;
}

.box-card {
  background-color: #c7faff;
}

.notice-container {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.notice-container .text {
  font-size: 14px;
}

.notice-container .item {
  padding: 18px 0;
  text-align: center;
}

.notice-container .box-card {
  width: 1000px;
  cursor: default;
}
</style>