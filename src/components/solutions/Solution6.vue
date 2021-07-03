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
        title: "如何导出失败数据？",
        description: "",
        video: "",
        steps: [
        	{
        		intro: "1、当批量导入选民数据时，如果数据出现错误，会提示有导入失败的数据，点击导出失败数据",
        		imgs: ["./static/solutions/solution6/img1.png"]
        	},
        	{
        		intro: "2、根据导出的的失败数据，如图，最后一栏为失败原因，根据要求更改相关内容并重新导入",
        		imgs: ["./static/solutions/solution6/img2.png"]
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