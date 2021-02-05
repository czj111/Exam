<template>
  <div class="home">
    <div id="loginForm">
      <div id="top">
        <div>
          <div class="topLine">
            <div class="logo"></div>
            <div class="logoTitle"></div>
          </div>
          <div class="btmLine">
            <div class="btnLogin" id="btnLogin" @click="loginFace">登录</div>
            <div class="btnRegist" id="btnRegist" @click="registerFace">注册</div>
          </div>
          <div id="ucShadow" v-show="loginShow"></div>
          <Login v-show="loginShow" @closeLogin="closeLogin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Login from "@/components/Login.vue"; // @ is an alias to /src

  export default Vue.extend({
    name: "Home",
    data() {
      return {
        loginShow: false,
      }
    },
    methods: {
      loginFace: function () {
        this.loginShow = true;
      },
      closeLogin:function(close:boolean){
        this.loginShow=close;
      },
      registerFace:function(){
        this.$router.push("/Register");
      }
    },
    components: {
      Login
    }
  });
</script>

<style>
  #top {
    width: 100%;
    height: 700px;
    /* right center是设置图片的初始位置，right是在水平方向上贴容器或浏览器页面的右侧，center是在垂直方向上居中，这两个的顺序是先定义水平位置，再定义垂直位置； */
    background: url(../assets/login_background.png) no-repeat right center;
  }

  /* webkit-scrollbar 滚动条整体部分，可以设置宽度 */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* ::-webkit-scrollbar-corner, 边角
::-webkit-scrollbar-track  外层轨道 */
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track {
    background-color: #e2e2e2;
  }

  /* ::-webkit-scrollbar-thumb 滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: rgba(0, 0, 0, .3);
  }

  #top>div {
    position: relative;
    width: 900px;
    margin: 0 auto;
    /* background-color: pink; */
    height: 100%;
  }

  #top .topLine {
    position: absolute;
    width: 402px;
    height: 4px;
    background-color: #fff;
    top: 218px;
  }

  #top .logo,
  #top .logoTitle,
  #top .btmLine,
  #top .btmLine>div,
  #ucLogin,
  #top .topLine {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
  }

  #top .logo {
    width: 414px;
    height: 138px;
    background: url(../assets/考无忧.png) no-repeat;
    background-size: 414px 138px;
    top: -158px;
  }

  #top .logoTitle {
    width: 211px;
    height: 33px;
    background: url(../assets/无需烦恼2.png) no-repeat;
    background-size: 211px 33px;
    top: 16px;
  }

  #top .btmLine {
    width: 235px;
    height: 3px;
    background-color: #EBEDF0;
    top: 531px;
  }

  #top .btmLine>div {
    position: absolute;
    font-size: 36px;
    width: 168px;
    height: 71px;
    border-radius: 4px;
    border: 1px solid #43464A;
    background-color: #EBEDF0;
    color: #43464A;
    text-align: center;
    line-height: 71px;
  }

  #top .btmLine>div:hover {
    cursor: pointer;
  }

  #top .btnLogin {
    top: -105px;
  }

  #top .btnRegist {
    top: 34px;
  }

  #ucShadow {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    background: #000;
    opacity: 0.5;
  }
</style>