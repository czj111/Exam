<template>
    <div class="function">
        <input id="search" placeholder="请输入搜索内容">
        <span id="btnSearch" class="el-icon-search"></span>
        <el-table :data="tableData" style="width: 900px" class="loadFile" :stripe="stripe">
            <el-table-column label="文件名" width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleDelete(scope.$index, scope.row)" size="mini">下载<i class="el-icon-download el-icon--right"></i></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="mypage">
            <el-pagination 
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="pageSize"
                            background 
                            layout="total, prev, pager, next, jumper" 
                            :total="total">
            </el-pagination>
        </div>
        <!--测试数据-->
        <!--<a href='javascript:void(0)' onclick="downLoad('李四1231587398725615报名表.docx')">下载</a>-->
    </div>
</template>
<script>
import Vue from "vue"
export default Vue.extend({
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    data() {
      return {
        currentPage: 5,
        pageSize:10,
        total:100,
        stripe:true,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
})
</script>
<style>
.function #btnSearch {
	position: absolute;
	font-size: 45px;
	color: #ffffff;
	top: 22px;
	left: 693px;
	width: 88px;
	height: 70px;
	line-height: 66px;
	text-align: center;
	border-radius: 0px 20px 20px 0px;
	background-color: black;
	cursor: pointer;
}
.function #search {
	position: absolute;
	top: 22px;
	left: 242px;
	width: 451px;
	height: 66px;
	border-radius: 20px 0px 0px 20px;
	font-size: 20px;
	padding: 0 11px 0 14px;
}
.loadFile {
    position: absolute;
    top: 148px;
    left: 100px;
}
#fileContent .fileName-load{
	width: 670px;
}
.function .mypage {
    position: absolute;
    top: 525px;
    left: 100px;
}
</style>