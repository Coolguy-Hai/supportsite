<template>
	<el-container style="margin: 0px">
	  <el-main>
		  <el-row type="flex" class="row-bg" justify="center">
			  <el-col :span="23">
			  	<el-card class="box-card">
				  	<div slot="header" class="clearfix" >
					    <span style="font-family: Microsoft YaHei;font-size: 30px">{{ title1 }}</span><br/>
					    <span style="font-size: 18px">{{ description1 }}</span>
					</div>
					<el-collapse v-model="activeNames" @change="handleChange" class="step">
					  	<el-collapse-item v-for="step in steps1" :title="step.intro" :name="step.intro" >
                            <br/>
					  		<img v-for="img in step.imgs" width="70%" height="100%" :src=img>{{i}}</img>
						</el-collapse-item>
					</el-collapse>
				</el-card>
			  </el-col>
		  </el-row>
          <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="23">
                <el-card class="box-card">
                    <div slot="header" class="clearfix" >
                        <span style="font-family: Microsoft YaHei;font-size: 30px">{{ title2 }}</span><br/>
                        <span style="font-size: 18px">{{ description2 }}</span>
                    </div>
                    <el-collapse v-model="activeNames" @change="handleChange" class="step">
                        <el-collapse-item v-for="step in steps2" :title="step.intro" :name="step.intro" >
                            <br/>
                            <img v-for="img in step.imgs" width="70%" height="100%" :src=img>{{i}}</img>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
              </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="23">
                <el-card class="box-card">
                    <div slot="header" class="clearfix" >
                        <span style="font-family: Microsoft YaHei;font-size: 30px">{{ title3 }}</span><br/>
                        <span style="font-size: 18px">{{ description3 }}</span>
                    </div>
                    <el-collapse v-model="activeNames" @change="handleChange" class="step">
                        <el-collapse-item v-for="step in steps3" :title="step.intro" :name="step.intro" >
                            <br/>
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
        title1: "一、PC端选委会如何进行选民登记？",
        title2: "二、PC端选区用户如何进行选民登记？",
        title3: "三、移动端如何进行选民登记？",
        description1: "请参照用户操作手册8-9页。",
        description2: "参照用户操作手册23-24页",
        description3: "",
        video: "",
        steps1: [
        	{
        		intro: "1、登陆系统后，点击左侧菜单【选民信息登记】下拉框。",
        		imgs: []
        	},
        	{
        		intro: "2、点击【登记选民】，先点击左侧选民需要登记的选区，再对选民信息进行单个录入操作，最后点击【提交】，右上角弹出登记成功提示，即完成此操作。",
        		imgs: ["./static/solutions/solution5/img1.png"]
        	},
        	{
        		intro: "3、或点击【选民批量导入】，先点击左侧选民需要登记的选区，再对选民信息进行批量导入操作，如下图（注：红色箭头为下载选民登记Excel模板，用户下载此模板后，按此模板Excel整理已有选民信息，再进行批量导入，绿色箭头为选择模板文件。）",
        		imgs: ["./static/solutions/solution5/img2.png"]
        	}
        ],
        steps2: [
            {
                intro: "1、登陆系统后，点击左侧菜单【选民信息登记】下拉框。",
                imgs: []
            },
            {
                intro: "2、点击【登记选民】，再对选民信息进行单个录入操作，最后点击【提交】，右上角弹出登记成功提示，即完成此操作。",
                imgs: ["./static/solutions/solution5/img3.png"]
            },
            {
                intro: "3、或点击【选民批量导入】，对选民信息进行批量导入操作，如下图：（注：红色箭头为下载选民登记Excel模板，用户下载此模板后，按此模板Excel整理已有选民信息，再进行批量导入，绿色箭头为选择模板文件。）",
                imgs: ["./static/solutions/solution5/img4.png"]
            }
        ],
        steps3: [
            {
                intro: "1、扫描二维码进入以下界面，我是选民不需要账号密码登录直接点击【我是选民】即可，选委会和选区用户需要输入账号和密码点击登录，则可以进行后续操作。",
                imgs: ["./static/solutions/solution5/img5.png"]
            },
            {
                intro: "2、选委会登陆账号后进入以下界面，输入选民信息后，选择登记的城区，点击【提交】即可登记选民。",
                imgs: ["./static/solutions/solution5/img6.png"]
            },
            {
                intro: "3、选区用户登陆账号后进入界面后，输入选民信息后，点击【提交】即可登记选民。",
                imgs: []
            },
            {
                intro: "4、选民进入以下界面后选择【选民在线登记】，再选择【参选地类型】，然后填入自己的信息，最后点击【提交】即可。",
                imgs: []
            }
        ]
      };
    },
    created: function(){
    	for(var i = 0;i < this.steps1.length;i++){
    		this.activeNames.push(this.steps1[i].intro);
    	}
        for(var i = 0;i < this.steps2.length;i++){
            this.activeNames.push(this.steps2[i].intro);
        }
        for(var i = 0;i < this.steps3.length;i++){
            this.activeNames.push(this.steps3[i].intro);
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