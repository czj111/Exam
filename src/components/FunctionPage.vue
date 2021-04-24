<template>
<div>
    <div id="content_left">
		<div class="function_banner">
		<ul id="function_content">
			<li>
				<span class="el-icon-download" aria-hidden="true"></span>
				<router-link to="/User/downLoad">试卷库</router-link>
			</li>
			<li>
				<span class="el-icon-document"></span>
				<router-link to="/User/exam">考试</router-link>
			</li>
			<li>
				<span class="el-icon-data-line"></span>
				<router-link to="/User/showScore">成绩</router-link>
				<!-- <a href="javascript:void(0)">成绩</a> -->
			</li>
			<li>
				<span class="el-icon-s-comment"></span>
				<router-link to="/User/exam">论坛</router-link>
				<!-- <a href="javascript:void(0)">论坛</a> -->
			</li>
			<li>
				<span class="el-icon-star-off"></span>
				<router-link to="/User/exam">错题集</router-link>
				<!-- <a href="javascript:void(0)">错题集</a> -->
			</li>
		</ul>
		</div>
	</div>
    <div class="content_right">
		<router-view></router-view>
	</div>
</div>
</template>
<script>
import Vue from "vue"

export default Vue.extend({
	data(){
		return {
			func:{
				DownLoad:1,
				Exam:2,
				ShowScore:3
			},
			nowFunc:"",
		}
	},
	created(){
		console.log("created")
		this.nowFunc=this.$router.history.current.name
	},
	mounted(){
		console.log("mounted");
	},
	updated(){
	},
	watch: {
		$route: {
			handler(newName, oldName) {
				console.log('$route has changed');
				this.nowFunc=this.$route.name;
			},
			deep: true
		},
		nowFunc(){
			var delActive = document.querySelector("#function_content").getElementsByClassName("active")[0];
			if (delActive != null) {
				delActive.className = "";
			}
			// 实现相应功能激活
			var nodes = document.querySelector("#function_content").getElementsByTagName("li");
			let cid = this.func[this.nowFunc];
			nodes[cid - 1].className = "active";
		}
	}
})
</script>
<style scoped>
#content {
	background-color: black;
	width: 100%;
}
#content_left {
	position: relative;
	float: left;
	width: 304px;
	margin-right: -304px;
	border-right: 2px solid rgba(187, 187, 187, 1);
}
#content_left .function_banner {
	width: 210px;
	/*background-color: #a6a6a6;*/
	margin: 10px 0 0 0px;
}
#function_content > li {
	position: relative;
	width: 304px;
	height: 129px;
	/* margin-top: 31px; */
}
#function_content > li a,#function_content > li span {
	position: absolute;
}
#function_content > li span {
	font-size: 65px;
	width: 70px;
	height: 70px;
	/*background-color: black;*/
	top: 26px;
	left: 29px;
	z-index: 2;

}
#function_content a {
	display: block;
	box-sizing: border-box;
	width: 100%;
	height: 129px;
	line-height: 129px;
	text-decoration: none;
	color: rgba(49, 50, 53, 1);
	font-size: 48px;
	padding-left: 141px;
	font-family: SourceHanSansSC-regular;
}
#function_content a:hover{
	background-color: rgba(133, 139, 121, 0.5);
}
#function_content .active >a {
	background-color: rgba(146, 149, 148, 1);
}

/*右侧功能显示*/
#content_right {
	float: right;
	width: 100%;
	background-color: #eee;
}
.function{
	margin-left: 306px;
	height: 599px;
	overflow-y: scroll;
	position: relative;
    overflow-x: hidden;
}
</style>