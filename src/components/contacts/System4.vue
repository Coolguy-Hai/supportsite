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
					  <ul style="list-style-type:none;padding: 0">
						  <li>钟宇琴： 18224476721</li>
						  <li>徐志豪： 17751781770</li>
					  </ul>
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