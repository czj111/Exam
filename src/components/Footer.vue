<template>
     <footer id="footer">
        <div class="why_select">
            <dl>
                <dt class="fl">
                    <img src="images/icon_1.jpg" alt="">
                </dt>
                <dd>
                    <h1>产品齐全</h1>
                    <h2>产品全自主选，随心买</h2>
                </dd>
            </dl>
            <dl>
                <dt class="fl">
                    <img src="images/icon_2.jpg" alt="">
                </dt>
                <dd>
                    <h1>便利快捷</h1>
                    <h2>24小时不打烊，随时买</h2>
                </dd>
            </dl>
            <dl>
                <dt class="fl">
                    <img src="images/icon_3.jpg" alt="">
                </dt>
                <dd>
                    <h1>安全支付</h1>
                    <h2>知名支付工具，放心买</h2>
                </dd>
            </dl>
            <dl>
                <dt class="fl">
                    <img src="images/icon_4.jpg" alt="">
                </dt>
                <dd style="margin-right:0px;">
                    <h1>贴心服务</h1>
                    <h2>客服全年无休，安心买</h2>
                </dd>
            </dl>
        </div>
        <div class="company">
            <p>江苏传智播客教育科技股份有限公司 版权所有Copyright 2006-2018, All Rights Reserved 苏ICP备16007882</p>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style>
.fl {
    float: left;
}
#footer {
    width: 100%;
    background: #3d3d3f;
}

.why_select {    
    overflow: hidden;
    margin: 0 auto;
    border-bottom: solid 1px #666;
    padding: 10px 85px;
    font-family: '微软雅黑';
}

.why_select dl {
    float: left;
    margin-bottom: 0;
}

.why_select dd {
    margin: 4px 100px 0 60px;
}

.why_select h1 {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    margin: 0;
}

.why_select h1.title {
    line-height: 50px;
    padding-right: 25px;
}

.why_select h2 {
    font-size: 12px;
    color: #8d8d8e;
    line-height: 26px;
}

.why_select .icon {
    width: 50px;
    height: 50px;
}
.company {
    width: 100%;
    height: 38px;
    line-height: 38px;
    background: #ffc900;
    color: #3d3d3f;
    text-align: center;
    font-size: 12px;
}
</style>