<template>
  <div class="main-container">
    <div class="desc">GBA图书管理系统</div>
    <div class="bottom">
      <el-tooltip class="item" content="退出登录" placement="bottom-end">
        <i class="el-icon-switch-button" v-on:click="alert()"></i>
      </el-tooltip>
    </div>
    <div class="navigator-container">
      <div class="item">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }"
            ><el-link class="item-class"
              ><i class="el-icon-s-home"></i>首页</el-link
            ></el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/UserPage' }"
            ><el-link class="item-class"
              ><i class="el-icon-s-custom"></i>个人主页</el-link
            ></el-breadcrumb-item
          >
          <el-breadcrumb-item class="item-class"
            ><i class="el-icon-ship"></i>个人信息</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="operation-container">
      <div class="myinfo" v-on:click="MyInfo()">
        <el-image
          :src="require('../assets/img/updateinfo.png')"
          class="myinfo-img"
        ></el-image>
        <div class="desc">信息修改</div>
      </div>
      <div class="bookroom" v-on:click="BookRoom()">
        <el-image
          :src="require('../assets/img/history.png')"
          class="bookroom-img"
        ></el-image>
        <div class="desc">借阅历史</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  name: "MyInfo",
  methods: {
    MyInfo() {},

    MyBook() {},

    BookRoom() {},

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
    getInfo() {
      this.msg = this.$route.query.key;
      console.log(this.msg);
    },
  },

  created() {
    this.getInfo();
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

.navigator-container {
  display: flex;
  height: 50px;
  margin-top: 60px;
  align-items: center;
}

.navigator-container .item {
  margin-left: 50px;
}

.item-class {
  font-size: 20px;
  color: black;
}

.el-breadcrumb__separator {
  margin: 0 9px;
  font-weight: 700;
  color: #031436;
}

.operation-container {
  display: flex;
  margin-top: 10%;
  height: 350px;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: center; */
}

.myinfo {
  width: 400px;
  height: 350px;
  transition: all 0.6s ease;
}

.myinfo:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.bookroom {
  width: 400px;
  height: 350px;
  margin-top: -30px;
  transition: all 0.6s ease;
}

.bookroom:hover {
  transform: scale(1.2);
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
  margin-left: 150px;
  margin-top: 0px;
  font-weight: bold;
  margin-top: 0px;
}

.myinfo .desc {
  font-family: "FZZhaoMFXSJF";
  font-size: 40px;
  color: black;
  font-weight: bold;
  margin-left: 100px;
  margin-top: 30px;
}

.myinfo-img {
  max-width: 100%;
  max-height: 100%;
}

.bookroom-img {
  max-width: 100%;
  max-height: 100%;
  margin-top: 20px;
}
</style>