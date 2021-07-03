<template>
	<el-container style="margin: 0px">
	  <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="24" style="font-family: Microsoft YaHei;font-size: 30px;margin: 30px;margin-bottom:5px"><span>欢迎联系我们</span></el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="24" style="font-family: Microsoft YaHei;font-size: 17px; margin: 30px;margin-top: 0;margin-bottom:5px"><span>如果您在使用系统的过程中遇到任何问题，请及时联系我们，我们非常乐于帮你及时解答。</span></el-col>
		</el-row>
	  <el-main >
	  	<el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="24">
			  	<el-card class="box-card">
					  <h3>三台县</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>钟宇琴： 18224476721</li>
						  <li>徐志豪： 17751781770</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>游仙区</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>姚思棋： 15609032209</li>
						  <li>徐志豪： 17751781770</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>安州区</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>刘平： 18228582257</li>
						  <li>徐志豪： 17751781770</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>江油市</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>刘平： 18228582257</li>
						  <li>徐志豪： 17751781770</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>北川羌族自治县</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>胡韵佳： 15928859932</li>
						  <li>杨进： 15608230086</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>涪城区</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>胡韵佳： 15928859932</li>
						  <li>杨进： 15608230086</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>平武县</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>牟思衡： 19953888394</li>
						  <li>杨进： 15608230086</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>盐亭县</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>伍思玉： 18382605349</li>
						  <li>杨进： 15608230086</li>
					  </ul>
					  <el-divider></el-divider>
					  <h3>梓桐区</h3>
					  <ul style="list-style-type:none;padding: 0">
						  <li>伍思玉： 18382605349</li>
						  <li>杨进： 15608230086</li>
					  </ul>
					  <el-divider></el-divider>
					</el-card>
			  </el-col>
			</el-row>
	  </el-main>	
	  <el-footer>
		</el-footer>
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
	li{
		font-size: 18px;
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