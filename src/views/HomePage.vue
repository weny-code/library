<template>
  <div class="main-container">
    <div class="theme-container">
      <div class="inner-img">
        <el-image
          :src="require('../assets/img/main.png')"
          class="theme-img"
        ></el-image>
      </div>
      <div class="desc">图书管理系统</div>
    </div>

    <div class="operation-container">
      <div class="login-item" v-on:click="loginSuccess()">
        <el-image
          :src="require('../assets/img/login.png')"
          class="login-img"
        ></el-image>
        <div class="desc">登录</div>
      </div>
      <div class="register-item">
        <el-image
          :src="require('../assets/img/register.png')"
          class="login-img"
        ></el-image>
        <div class="desc">注册</div>
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
  name: "HomePage",
  props: {},
  methods: {
    loginSuccess() {
      this.$router.push("/UserPage");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #C6DDFF;
}
.box-card {
  background-color: #C7FAFF;
}

.theme-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 100%;
}

.notice-container {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.inner-img {
  display: inline-flex;
  width: 400px;
  height: 300px;
  align-items: center;
}

.operation-container {
  display: flex;
  margin-top: 5%;
  width: 100%;
  height: 260px;
  justify-content: space-between;
}

.login-item {
  width: 350px;
  height: 200px;
  margin-left: 20%;
  transition: all 0.6s ease;
}

.login-item:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.register-item {
  width: 280px;
  height: 280px;
  margin-right: 20%;
  margin-top: -30px;
  transition: all 0.6s ease;
}

.register-item:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.theme-img {
  width: auto;
  height: auto;
}

.login-img {
  width: 80%;
  height: 80%;
}

@font-face {
  font-family: "FZZhaoMFXSJF";
  src: url("../assets/font/FZZhaoMFXSJF.TTF");
}

@font-face {
  font-family: "FZQuSJW";
  src: url("../assets/font/FZQuSJW.TTF");
}

.theme-container .desc {
  display: inline-flex;
  font-family: "FZQuSJW";
  font-size: 40px;
  left: 0;
  font-weight: bold;
  letter-spacing: 10px;
  text-align: center;
  cursor: default;
}

.login-item .desc {
  font-family: "FZZhaoMFXSJF";
  font-size: 50px;
  font-weight: bold;
}

.register-item .desc {
  font-family: "FZZhaoMFXSJF";
  font-size: 50px;
  font-weight: bold;
  margin-top: -30px;
}

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
  text-align: center;
}

.box-card {
  width: 1000px;
  cursor: default;
}
</style>