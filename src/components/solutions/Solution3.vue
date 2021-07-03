<template>
	<el-container style="margin: 0px">
	  <el-main>
		  <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="23">
			  	<el-card class="box-card">
				  	<div slot="header" class="clearfix" >
					    <span style="font-family: Microsoft YaHei;font-size: 30px">{{ title }}</span><br/>
					    <span style="font-size: 18px">{{ description }}</span>
					  </div>
					  <el-collapse v-model="activeNames" @change="handleChange" class="step">
					  	<el-collapse-item v-for="step in steps" :title="step.intro" :name="step.intro" >
					  		<img v-for="img in step.imgs" width="70%" height="100%" :src=img>{{i}}</img>
						  </el-collapse-item>
						</el-collapse>
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
      	system: '',
        activeNames: [],
        title: "如何新增选区账号？",
        description: "",
        video: "",
        steps: [
        	{
        		intro: "1、进入权限管理界面",
        		imgs: ["./static/solutions/solution3/img1.png"]
        	},
        	{
        		intro: "2、在管理选民界面，左上方菜单栏中选择需要增加账号的选区",
        		imgs: ["./static/solutions/solution3/img2.png"]
        	},
        	{
        		intro: "3、点击新增",
        		imgs: ["./static/solutions/solution3/img3.png"]
        	},
            {
                intro: "4、输入相关信息，即可新增成功",
                imgs: ["./static/solutions/solution3/img4.png"]
            }
        ]
      };
    },
    created: function(){
    	for(var i = 0;i < this.steps.length;i++){
    		this.activeNames.push(this.steps[i].intro);
    	}
    	this.system = this.$route.query.system;
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style>
	.el-collapse-item__header{
		font-size: 18px;
	}
</style>