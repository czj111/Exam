<template>
    <div class="function">
        <span class="project">考试项目</span>
        <select id="chooseProblem">
        </select>
        <button id="chooseProblemBtn">开始测试</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.function .project {
	position: absolute;
	left: 87px;
	top: 104px;
	width: 144px;
	height: 54px;
	color: rgba(49, 50, 53, 1);
	font-size: 36px;
	text-align: left;
	font-family: SourceHanSansSC-regular;

}
#chooseProblem {
	position: absolute;
	box-sizing: border-box;
	padding-left: 30px;
	left: 294px;
	top: 99px;
	width: 500px;
	height: 89px;
	color: rgba(49, 50, 53, 1);
	font-size: 28px;
	font-family: Microsoft Yahei;
	border: 1px solid rgba(187, 187, 187, 1);
}

#chooseProblemBtn {
	position: absolute;
	left: 397px;
	top: 292px;
	width: 324px;
	height: 100px;
	line-height: 20px;
	border-radius: 20px 20px 20px 20px;
	background-color: rgba(146, 149, 148, 1);
	color: rgba(67, 70, 74, 1);
	font-size: 36px;
	color: #313235;
	text-align: center;
	font-family: SourceHanSansSC-bold;
	border: 1px solid rgba(187, 187, 187, 1);
}
.function {
	font-size: 36px;
}
.function .single , .function .multiply{
	margin: 11px 0 0 9px;
}
.function .subject-content .subject-question {
	width: 943px;
	word-break: break-all;
	margin-left: 36px;
}
.function .subject-content .subject-options {
	margin-left: 94px;
}
.function .subject-content .subject-options .control-content{
	width: 700px;
	display: inline-block;
	word-break: break-all;
	vertical-align:top;
}
.function .subject-content .subject-options input {
	width: 20px;
	height: 20px;
	vertical-align: 4px;
}
#examBtn {
	width: 278px;
	height: 76px;
	margin: 20px 0 20px 314px;
	line-height: 20px;
	border-radius: 20px 20px 20px 20px;
	background-color: rgba(146, 149, 148, 1);
	color: #313235;
	font-size: 36px;
	text-align: center;
	font-family: SourceHanSansSC-bold;
	border: 1px solid rgba(187, 187, 187, 1);
}
</style>