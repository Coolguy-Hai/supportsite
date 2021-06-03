<template>
	<el-container style="margin: 0px">
	  <el-main>
			 <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="3" style="font-family: Microsoft YaHei;font-size: 30px;margin: 30px;"><div><span>相关资料下载</span></div></el-col>
			</el-row>

		  <el-divider></el-divider>
			<el-row type="flex" class="row-bg" justify="space-around">
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '0px' }">
			      <img src="../assets/imgs/browser.png" class="image">
			      <div style="padding: 14px;">
			        <span>浏览器安装包</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="#/downloadbrowser" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '0px' }">
			      <img src="../assets/imgs/manual.png" class="image">
			      <div style="padding: 14px;">
			        <span>用户手册</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="../../static/manual.docx" download="选民登记系统用户手册.docx" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '0px' }">
			      <img src="../assets/imgs/video.png" class="image">
			      <div style="padding: 14px;">
			        <span>演示视频</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="../../static/video.mp4" download="演示视频.mp4" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '0px' }">
			      <img src="../assets/imgs/help.png" class="image">
			      <div style="padding: 14px;">
			        <span>远程协助软件</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="#/downloadassisting" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			</el-row>
	  </el-main>
	</el-container>
</template>
<script>
  export default {
    data() {
      return {
        system: ''
      };
    },
    created: function(){
    	this.system = this.$route.query.system;
    }
  }
</script>

<style>
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
	.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-header, .el-footer {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>