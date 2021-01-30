<template>
    <div class="rg_layout">
        <div class="rg_form clearfix">
            <div class="rg_form_left">
                <p>新用户注册</p>
                <p>USER REGISTER</p>
            </div>
            <div class="rg_form_center">

                <!--注册表单-->
                <form id="registerForm">
                    <!--提交处理请求的标识符-->
                    <input type="hidden" name="action" value="register" >
                    <table style="margin-top: 25px;">
                        <tr>
                            <td class="td_left">
                                <label for="username">用户名</label>
                            </td>
                            <td class="td_right">
                                <input type="text" id="username" name="username" placeholder="请输入账号" v-model="username" @blur="funUserName" >
                            </td>
                            <td class="username-errormsg red">{{usernameErrormsg}}</td>
                        </tr>
                        <tr>
                            <td class="td_left">
                                <label for="password">密码</label>
                            </td>
                            <td class="td_right">
                                <input type="text" id="password" name="password" placeholder="请输入密码" v-model="password" @blur="funPassword">
                            </td>
                            <td class="password-errormsg red">{{passwordErrormsg}}</td>
                        </tr>
                        <tr>
                            <td class="td_left">
                                <label for="email">Email</label>
                            </td>
                            <td class="td_right">
                                <input type="text" id="email" name="email" placeholder="请输入Email" v-model="email" @blur="funEmail">
                            </td>
                            <td class="email-errormsg red">{{emailErrormsg}}</td>
                        </tr>
                        <tr>
                            <td class="td_left">
                                <label for="sex">性别</label>
                            </td>
                            <td class="td_right gender">
                                <input type="radio" id="sex" name="sex" value="0" v-model="sex"> 男
                                <input type="radio" name="sex" value="1" v-model="sex"> 女
                            </td>
                            <td class="sex-errormsg"></td>
                        </tr>
                        <tr>
                            <td class="td_left">
                                <label for="birthday">出生日期</label>
                            </td>
                            <td class="td_right">
                                <input type="date" id="birthday" name="birthday" placeholder="年/月/日" v-model="birthday">
                            </td>
                            <td class="birthday-errormsg red"></td>
                        </tr>
                        <tr>
                            <td class="td_left">
                                <label for="check">验证码</label>
                            </td>
                            <td class="td_right check">
                                <input type="text" id="check" name="check" class="check" v-model="check" >
                                <img src="checkCode" height="32px" alt="" id="checkCode">
                            </td>
                            <td class="check-errormsg red"></td>
                        </tr>
                        <tr>
                            <td class="td_left">
                            </td>
                            <td class="td_right check">
                                <input type="submit" class="submit" value="注册">
                                <span id="msg" style="color: red;"></span>
                            </td>
                            <td class="submit-errormsg"></td>
                        </tr>
                    </table>
                </form>
            </div>
            <div class="rg_form_right">
                <p>
                    已有账号？
                    <router-link to="/Login">立即登录</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
    data(){
        return {
            username:'',
            password:'',
            email:'',
            sex:'0',
            birthday:'',
            check:'',
            usernameErrormsg:'',
            passwordErrormsg:'',
            emailErrormsg:''
        }
    },
    methods: {
        funUserName: function () {
            var username = encodeURI(encodeURI(this.username));
            if (username == null || username == "") {
                this.usernameErrormsg = "请输入用户名";
                return false;
            } else {
                var flag;
                // $.ajax({
                //     type:"POST",
                //     async:false,
                //     url:"user/rgUserName",
                //     data:"username="+username,
                //     dataType:"json",
                //     success:function(data){
                //         if(data.code=="0")
                //         {
                //             $(".username-errormsg").html("");
                //             flag= true;
                //         }
                //         else
                //         {
                //             $(".username-errormsg").html(data.error);
                //             flag= false;
                //         }
                //     }
                // });
                return flag;
            }
        },
        funPassword: function () {
            var password = this.password;
            if (password == null || password == "") {
               this.passwordErrormsg="请输入密码";
                return false;
            } else {
                if (password.length < 8 || password.length > 20) {
                   this.passwordErrormsg="密码由8-20位字符组成";
                    return false;
                }

            }
        },
        funEmail: function () {
            var email = this.email;
            if (email == null || email == "") {
               this.emailErrormsg="请输入邮箱";
                return false;
            } else {
                var reg = /^\w+@\w+\.\w+$/;
                var flag = reg.test(email);
                if (flag) {
                   this.emailErrormsg="";
                } else {
                    this.emailErrormsg="请输入正确的邮箱格式";
                }
            }
            return flag;
        }

    },
    watch:{
       username:function(value){
           this.usernameErrormsg='';
       },
       password:function(){
           this.passwordErrormsg='';
       },
       email:function(){
           this.emailErrormsg='';
       }

    }
})
</script>
<style scoped>
.red {
	color:red;
}
.rg_layout{
	width: 100%;
	height: 700px;
	background: url(../assets/login_background.png) no-repeat right center;
	background-size: 100% 780px;
	overflow: hidden;
}
.rg_layout .rg_form{
	position: relative;
	width: 681px;
	height: 534px;
	background-color: #EBEDF0;
	margin:24px auto;
	box-sizing: border-box;
}

.rg_layout .rg_form > .rg_form_left{
	position: absolute;
	width:256px;
	padding-top:20px;
	padding-left: 20px;
	box-sizing: border-box;
}
.rg_layout .rg_form > .rg_form_center{
	width:600px;
	position: absolute;
	top: 50px;
	left: 100px;
	padding-top:10px;
	box-sizing: border-box;
	font-size: 14px;
}
.rg_layout .rg_form > .rg_form_right{
	width:256px;
	float: right;
}

.rg_form > .rg_form_left > p:first-child{
	font-size: 20px;
	color:#43464A;
	
}
.rg_form > .rg_form_left > p:last-child{
	font-size: 20px;
	color: #a6a6a6;
}
.rg_form > .rg_form_center .td_left{
	width: 65px;
	text-align: right;
}
.rg_form > .rg_form_center table{
	vertical-align: top;
}
.rg_form > .rg_form_center table tr{
	height: 50px;
}
.rg_form > .rg_form_center .td_right{
	width: 293px;
}
.rg_form_center .td_right > input[type="text"],.rg_form_center .td_right > input[type="date"]{
	width: 256px;
	height: 32px;
	line-height: 32px;
	box-sizing: border-box;
	padding: 6px 12px;
	border-radius: 4px;
	border:1px solid #a6a6a6;
	float: right;
}
.rg_form > .rg_form_center .td_right.gender{
	padding-left: 40px;
	box-sizing: border-box;
}
.rg_form > .rg_form_center .td_right.check{
	padding-left: 36px;
	box-sizing: border-box;
}
.rg_form > .rg_form_center .td_right > .check{
	width: 118px;
	float: left;
	margin-right:14px;
}
.rg_form > .rg_form_center .td_right > .submit{
	width: 120px;
	height: 36px;
	line-height: 36px;
	background-color: #43464A;
	font-size: 14px;
	color: #ffffff;
}
.rg_form > .rg_form_right >p{
	float: right;
	font-size: 14px;
	padding: 20px 12px 0 0;
	box-sizing: border-box;
}
.rg_form > .rg_form_right >p >a{
	color: #fc8989;
}

#register-ok {
	width: 600px;
	margin: 100px auto 0;
	font-size: 28px;

}
</style>