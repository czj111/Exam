<template>
<div class="project">
  <el-select v-model="value" filterable placeholder="请选择" v-on:change="handleChoose">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
	<div class="choose-item">
	<span> 调整难度系数：</span>
	<span title="请点击选择分数" class="star-all star-3" @mousemove="handleStart($event)" :style="star"></span>
	</div>
	<div class="choose-item">
	<span> 选择单次题目数量：</span>
	<el-radio v-model="radio" label="1">5题</el-radio>
	<el-radio v-model="radio" label="2">10题</el-radio>
	<el-radio v-model="radio" label="3">15题</el-radio>
	<el-radio v-model="radio" label="4">20题</el-radio>
	</div>
	<el-button type="primary" :disabled="start" @click="startExam">开始测试</el-button>
</div>
</template>
<script>
import $ from "../axios" 
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
		radio:'1',
		start:true,
		difficult:1,
		star:{
			"--bkgPos":"0 -54px"
		}
      }
    },
	methods:{
		handleChoose(){//是否选择考试项目
			if(this.start) this.start=false;
		},
		handleStart(e){//选择困难程度
			this.difficult=Math.ceil(e.offsetX/23);
			this.difficult=this.difficult ? this.difficult:1;
			this.star["--bkgPos"]=`0 ${-54*this.difficult}px`;
		},
		startExam(){
			$.ajax.get("user/exam",{
				params:{
					examId:this.value,
					questionCount:parseInt(this.radio)*5,
					difficulty:this.difficult
				}
			})
		}
	}
}
</script>
<style>
.project {
	position:absolute;
	left: 260px;
	top: 104px;
	width: 100%;
	color: rgba(49, 50, 53, 1);
	font-size: 20px;
	text-align: left;
	font-family: SourceHanSansSC-regular;

}
.star-all {
	display: inline-block;
    vertical-align: middle;
    width: 115px;
    height: 17px;
	background:url("../assets/stars.png"),no-repeat;
}
.star-all:hover{
	cursor:pointer;
}
.star-3 {
	background-position: var(--bkgPos);
}
.choose-item {
	margin:10px 0;
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