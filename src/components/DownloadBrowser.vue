<template>
	<el-container style="margin: 0px">
	  <el-main>
			 <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="3" style="font-family: Microsoft YaHei;font-size: 30px;margin: 30px;"><div><span>浏览器下载</span></div></el-col>
			</el-row>

		  <el-divider></el-divider>
			<el-row type="flex" class="row-bg" justify="space-around">
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '5px' }">
			      <img src="../assets/imgs/chrome.png" class="image">
			      <div style="padding: 14px;">
			        <span>Chrome</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="../../static/browser/Chrome/谷歌浏览器稳定版 64位_90.0.4430.93.exe" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '5px' }">
			      <img src="../assets/imgs/edge.png" class="image">
			      <div style="padding: 14px;">
			        <span>Edge</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="../../static/browser/Edge/Microsoft Edge_85.0.564.44.exe" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '5px' }">
			      <img src="../assets/imgs/firefox.png" class="image">
			      <div style="padding: 14px;">
			        <span>Firefox</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="../../static/browser/Firefox/Firefox火狐浏览器 64位_88.0.1.7794.exe" style="float: right">下载</el-link>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			  <el-col :span="2">
			  	<el-card :body-style="{ padding: '5px' }">
			      <img src="../assets/imgs/ie.png" class="image">
			      <div style="padding: 14px;">
			        <span>IE</span>
			        <div class="bottom clearfix">
			          <el-link type="primary" href="../../static/browser/IE/EIE11_64.EXE" style="float: right">下载</el-link>
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