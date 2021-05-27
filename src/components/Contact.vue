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
	  <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="24" style="font-family: Microsoft YaHei;font-size: 30px;margin: 30px;margin-bottom:5px"><span>欢迎联系我们</span></el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="24" style="font-family: Microsoft YaHei;font-size: 15px; margin: 30px;margin-top: 0;margin-bottom:5px"><span>如果您在使用系统的过程中遇到任何问题，请及时联系我们，我们非常乐于帮你及时解答。</span></el-col>
		</el-row>

	  <el-divider></el-divider>
	  <el-main >
	  	<el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="24">
			  	<el-card class="box-card">
				  	<div slot="header" class="clearfix" >
					  </div>
					  <h3>系统一</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统二</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统三</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统四</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统五</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统六</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统七</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统八</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>系统九</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>陈先生： 13333333333</li>
						  <li>工作时间：xxxx</li>
					  </ul>
					  <el-divider></el-divider>
					</el-card>
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
	.el-header, .el-footer {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>