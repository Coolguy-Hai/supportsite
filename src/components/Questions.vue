<template>
	<el-container style="margin: 0px">
	  <el-header style="padding: 0px">
		  <div class="header-wrapper">
		    <div class="header-title">
			    <i class="logo"></i>
				<span class="header-home">涪城区选民登记系统</span>
		    </div>
		  </div>
	  </el-header>
	  <el-main>
		  <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="6" style="font-family: Microsoft YaHei;font-size: 30px;margin: 30px;"><div><span>您有什么需要帮助的？</span></div></el-col>
			</el-row>
	    <el-table height="390px"
	      :data="tableData"
	      style="width: 100%">
	      <el-table-column
		      label="常见问题"
		      width="700px">
		      <template slot-scope="scope">
		        <span style="font-weight: bold;">{{ scope.row.question }}</span>
		        <br/>
		        <span style="">{{ scope.row.description }}</span>
		      </template>
		    </el-table-column>
	      <el-table-column
		      align="right"
		      prob="id">
		      <template slot="header" slot-scope="scope">
		        <el-input
		          v-model="search"
		          size="mini"
		          placeholder="请您输入关键词获取帮助"/>
		      </template>
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
		          @click="handleLink(scope.row.id)">查看详情</el-button>
		      </template>
		    </el-table-column>
	    </el-table>
	    <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="6">
			  	<el-pagination
					  background
					  layout="prev, pager, next, total"
					  :hide-on-single-page="true"
					  :page-size="pagesize"
					  :total="total"
					  @current-change="findPage">
					</el-pagination>
			  </el-col>
			</el-row>	    
	  </el-main>
	  <el-divider></el-divider>
	  <el-footer>
	  	<el-row :gutter="20">
			  <el-col :span="2" style="margin-left: 20px;font-family: STHeiti Light"><div class="grid-content bg-purple">帮助和支持</div></el-col>
			  <el-col :span="2"><div class="grid-content bg-purple"><el-link href="#/contact" type="primary">联系我们</el-link></div></el-col>
			  <el-col :span="2"><div class="grid-content bg-purple"><el-link href="#/download" type="primary">资料下载</el-link></div></el-col>
			  <el-col :span="2"><div class="grid-content bg-purple"><el-link href="#/questions" type="primary">常见问题</el-link></div></el-col>
			</el-row>
		</el-footer>
	</el-container>
</template>

<script>
  export default {
    data() {
      return {
      	allData: [{
          question: '如何进行选民资格转移？',
          description: '对本选区登记的选民进行资格转移申请，以实现迁出。',
          id: 1
        }],
        tableData: [],
        search: '',
        total: 0,
        pagesize: 5
      }
    },
    created: function(){
    	this.total = this.allData.length;
    	this.filteredData = this.allData;
    	var end = this.pagesize > this.total ? this.total : this.pagesize;
    	var start = 0;
    	this.tableData = this.filteredData.slice(start, end);
    },
    computed: {
		},
		watch: {
	    // 如果 `search` 发生改变，这个函数就会运行
	    search: function (newSearch, oldSearch) {
	      this.filteredData = this.allData.filter(data => !newSearch || data.question.toLowerCase().includes(newSearch.toLowerCase()));
	      this.total = this.filteredData.length;
	      var end = this.pagesize > this.total ? this.total : this.pagesize;
	    	var start = 0;
	    	this.tableData = this.filteredData.slice(start, end);
	    }
	  },
    methods: {
    	// 跳转详情页
      handleLink(id) {
      	this.$router.push("/solution"+id);
        console.log("/solution"+id);
      },
      findPage(page){
      	var end = page*this.pagesize > this.total ? this.total : page*this.pagesize;
      	var start = (page-1)*this.pagesize;
      	this.tableData = this.allData.slice(start, end);
      	console.log(start, end, this.tableData);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
	.header-title {
	  display: flex;
	  align-items: center;
	}
	.header-wrapper {
	  width: 100%;
	  height: 60px;
	  padding: 0px 0px 0 px;
	  background: url("../assets/imgs/header.jpg") center center no-repeat;
	  background-size: 100% 100%;
	  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.22);
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  color: #06d3d3;
	}
	.logo {
	  background: url("../assets/imgs/logo.png") center center no-repeat;
	  background-size: 100% 100%;
	  width: 48px;
	  height: 51px;
	  display: inline-block;
	  margin-right: 16px;
	  margin-left: 10px;
	}
	.header-home {
	  font-size: 24px;
	  font-family: STXihei;
	  color: #ffcf42;
	  font-weight: 500;
	}
	.el-header, .el-footer {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
