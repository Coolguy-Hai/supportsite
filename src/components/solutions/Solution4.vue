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
        title: "如何批量录入？",
        description: "",
        video: "",
        steps: [
        	{
        		intro: "1、进入选民信息登记-选民批量录入界面",
        		imgs: ["./static/solutions/solution4/img1.png"]
        	},
        	{
        		intro: "2、单击选民登记蓝色文字，下载批量录入选民模板",
        		imgs: ["./static/solutions/solution4/img2.png"]
        	},
        	{
        		intro: "3、下载完成后，打开模板进行信息填写",
        		imgs: ["./static/solutions/solution4/img3.png"]
        	},
            {
                intro: "4、进入模板后，需要先把四个工作表内的示例清空",
                imgs: ["./static/solutions/solution4/img4.png"]
            },
            {
                intro: "5、表格左下角的四个工作表和表格标题（第一、二行不能删除或修改）",
                imgs: ["./static/solutions/solution4/img5.png"]
            },
            {
                intro: "6、红色文字项为必填项，黑色问题项为选填项）",
                imgs: ["./static/solutions/solution4/img6.png"]
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