<template>
	<el-container style="margin: 0px">
	  <el-main>
		  <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="23">
			  	<el-card class="box-card">
				  	<div slot="header" class="clearfix" >
					    <span style="font-family: Microsoft YaHei;font-size: 30px">{{ title }}</span><br/>
					    <span style="font-size: 18px">{{ description }}</span>
					    <br/><br/>
				    	<iframe height=400 width=510 :src=video frameborder=0 allowfullscreen='true'></iframe>
					  </div>
					  <el-collapse v-model="activeNames" @change="handleChange" class="step">
					  	<el-collapse-item v-for="step in steps" :title="step.intro" :name="step.intro" >
					  		<img v-for="img in step.imgs" width="55%" height="100%" :src=img>{{i}}</img>
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
        title: "如何进行选民资格转移？",
        description: "对本选区登记的选民进行资格转移申请，以实现迁出。",
        video: "https://player.youku.com/embed/XNTE2MTIwOTgyMA==",
        steps: [
        	{
        		intro: "1、进入管理选民界面",
        		imgs: ["./static/solutions/solution1/img1.png"]
        	},
        	{
        		intro: "2、选中待资格转移选民",
        		imgs: ["./static/solutions/solution1/img2.png"]
        	},
        	{
        		intro: "3、点击选民信息后操作选项，点击资格转移进入资格转移操作界面",
        		imgs: ["./static/solutions/solution1/img1.png"]
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