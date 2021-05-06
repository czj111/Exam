<template>
    <div id="ucLogin">
        <div id="ucLoginBody">
            <div id="errorMsg">{{errorMsg}}</div>
            <div class="item username">
                <input type="text" name="username" placeholder="请输入用户名" id="username" v-model="info.username"
                    @blur="checkEmpty" @focus="focus">
                <span class="username_logo"></span>
            </div>
            <div class="item password">
                <input type="password" name="password" placeholder="请输入密码" id="password" v-model="info.password"
                    @blur="checkEmpty" @focus="focus">
                <span class="password_logo"></span>
            </div>
            <div class="item identify">
                <input name="checkCode" id="check" v-model="info.check" @blur="checkEmpty" @focus="focus">
                <img src="checkCode" id="checkCode">
                <span class="checkCode_logo"></span>
                <span class="refresh" id="checkRefresh"></span>
            </div>
            <div class="btn_box">
                <input type="submit" value="登录" id="submit" @click="login">
            </div>
        </div>
        <span id="close" class="el-icon-circle-close" @click="close"></span>
    </div>
</template>


<script>
    import Vue from "vue";
    import $ from "../axios"
    import Qs from 'qs'
    export default Vue.extend({
        name: "Login",
        props:[],
        methods:{
            close:function(){
                this.$emit("closeLogin",false);
            },
            checkEmpty:function(e){
                let element=e.target;
                if(isEmpty(element.value)){
                    element.className='error';
                }
            },
            focus:function(e){
                let element=e.target;
                element.className='';
            },
            login:function(){
                    let data=Qs.stringify({
                    username: this.info.username,
                    password: this.info.password,
                    code: this.info.check
                    });
                
                $.ajax.post("user/login",data,{ 
                    headers: {
                        'Access-Control-Allow-Origin':'*',  //解决cors头问题
                        'Access-Control-Allow-Credentials':'true', //解决session问题
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' //将表单数据传递转化为form-data类型
                    }}).then(res=>{
                    if(res.code){
                        this.$store.commit("SET_TOKEN",res.token);
                        this.$router.push("/User/downLoad");
                    }
                    this.errorMsg=res.message;
                    
                })
            }
        },
        data(){
            return {
                info:{
                    username:'',
                    password:'',
                    check:''
                },
                errorMsg:''
            }
        },
    });
    function isEmpty(information){
        if(information===""){
            return true;
        }
        return false;
    }
</script>

<style>
#ucLogin .error {
    border: 1px solid red;
}
 #ucLogin {
    position: fixed;
    width: 758px;
    height: 410px;
    background: #EBEDF0;
    padding: 72px 182px 12px 151px;
    box-sizing: border-box;
    top: 157px;
}

#ucLogin:after {
    content: "用户登录";
    position: absolute;
    top: 34px;
    left: 30px;
    color: #43464A;
    font: 100 36px '方正准圆-标准';
}

#ucLoginBody {
    width: 100%;
    height: 100%;
    position: relative;
}

#errorMsg {
    position: absolute;
    width: 100%;
    top: 0;
    padding-left: 60px;
    color: #FD0000;
    font-size: 14px;
    height: 20px;
}

#ucLoginBody .item {
    position: relative;
}

#ucLoginBody .username {
    top: 20px;
}

#ucLoginBody .password {
    top: 91px;
}

#ucLoginBody .identify {
    top: 172px;
}

#ucLoginBody #check {
    width: 145px;
}

#checkCode {
    position: absolute;
    left: 235px;
    width: 141px;
    height: 56px;
}

#ucLoginBody input,
#ucLoginBody .item>span {
    position: absolute;
}

#ucLoginBody input {
    box-sizing: border-box;
    width: 366px;
    height: 56px;
    margin-left: 60px;
    border: 1px solid rgba(187, 187, 187, 1);
    font-size: 28px;
    text-align: left;
    font-family: Microsoft Yahei;
    color: #43464A;
    padding-left: 5px;
}

#ucLoginBody .item>span {
    top: 11px;
    width: 30px;
    height: 30px;
    /*background-color: black;*/
    font-size: 30px;
}

#ucLoginBody .item .refresh {
    right: 0;
}

#ucLoginBody #submit {
    left: 73px;
    bottom: 0px;
    width: 285px;
    height: 56px;
    border-radius: 4px;
    background-color: rgba(67, 70, 74, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 28px;
    text-align: center;
    font-family: Microsoft Yahei;
    border: 1px solid rgba(187, 187, 187, 1);
}

#close {
    position: absolute;
    font-size: 50px;
    top: -20px;
    right: -69px;
    transform: translateX(-100%);
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 25px;
}

</style>