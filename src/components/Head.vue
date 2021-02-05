<template>
    <header id="header">
        <div class="logo"></div>
        <div class="time">
            <span class="time-logo"></span>
            <span class="nowTime">
                <i id="time-ym">{{"星期"+time[date.getDay()]+date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日"}}</i>
                <i id="time-ms">{{times}}</i>
            </span>
        </div>
        <div class="login">
            <div id="hover-login" @mouseenter="enter" @mouseleave="leave">
                <span id="username_login">{{username}}</span>
                <div id="dropdown-login" v-show="show">
                    <span class=""></span>
                    <a href="javascript:exit();">退出</a>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
    data() {
        return {
            date:new Date(),
            time: ["天", "一", "二", "三", "四", "五", "六"],
            times: "",
            username:"czj",
            show:false
        }
    },
    methods: {
        exit: function () {},
        getTime: function (date) {
            var h = date.getHours();
            h = h < 10 ? "0" + h : h;
            var m = date.getMinutes();
            m = m < 10 ? "0" + m : m;
            var s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            return h + ":" + m + ":" + s;
        },
        enter:function(){
            this.show=true;
        },
        leave:function(){
            this.show=false;
        }
    },
    mounted:function(){
         setInterval(()=>{
            this.date=new Date();
            this.times=this.getTime(this.date);
    },1000);
    }
})
</script>
<style scoped>
#header {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid rgba(187, 187, 187, 1);
    height: 100px;
    position: relative;
    background-color: #EBEDF0;
}
#header .logo {
    position: absolute;
    width: 319px;
    height: 81px;
    background-color: black;
    top: 3px;
}
#header .time{
    position: relative;
    display: inline-block;
    height: 100px;
    width: 467px;
    margin-left: 445px;
    vertical-align: top;
}
#header .time >span {
    position: absolute;
}
#header .time .time-logo {
    top: 26px;
    width: 41px;
    height: 41px;
    font-size: 41px;
    /*background-color: black;*/
}

#header .time .nowTime {
    width: 413px;
    height: 44px;
    line-height: 44px;
    font-size: 0px;
    top: 23px;
    right: 0;
}
#header .time .nowTime >i {
    font-size: 28px;
}
#header .time .nowTime #time-ms {
    padding-left: 20px;
}
#header .login {
    position: relative;
    height: 100px;
    width: 400px;
    display: inline-block;
    font-size: 28px;
    margin-left: 32px;
}
#username_login {
    position: absolute;
    top: 21px;
    right: 9px;
    cursor: pointer;
}
#dropdown-login
{
    position: absolute;
    top: 61px;
    right: 9px;
    width: 219px;
    height: 39px;
    border: 1px solid #a6a6a6;
    background-color: #ffffff;
}
#dropdown-login span {
    width: 39px;
    height: 39px;
    /*background-color: black;*/
    font-size: 39px;
    display: inline-block;
    margin-left: 39px;
}
#dropdown-login a {
    vertical-align: top;
    margin-left: 30px;
}
#hover-login {
    display: inline-block;
}

</style>