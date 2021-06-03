<template>
  <div id="app">
  	<el-header style="padding: 0px">
		  <div class="header-wrapper">
		    <div class="header-title">
			    <i class="logo"></i>
				<span class="header-home">{{system}}选民登记系统</span>
		    </div>
		  </div>
	  </el-header>
  	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">在线查询</el-menu-item>
			<el-menu-item index="2">客户支持</el-menu-item>
			<el-menu-item index="3">资料下载</a></el-menu-item>
		</el-menu>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        //1. 涪城区，2. 游仙区，3. 安州区，4. 三台县，5. 梓桐区，6. 盐亭县，7. 平武县，8. 北川羌族自治县，9. 江油市
        system: '绵阳市',
      };
    },
    created: function(){
    	this.system = typeof(this.$route.query.system)=="undefined"?"绵阳市":this.$route.query.system;
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, this.system);
        if(key == '1'){
        	this.$router.push('/questions');
        }
        else if(key == '2'){
        	if(this.system == "涪城区"){
	        	this.$router.push('/contacts/system1');
        	}
        	else if(this.system == "游仙区"){
	        	this.$router.push('/contacts/system2');
        	}
        	else if(this.system == "安州区"){
	        	this.$router.push('/contacts/system3');
        	}
        	else if(this.system == "三台县"){
	        	this.$router.push('/contacts/system4');
        	}
        	else if(this.system == "梓桐区"){
	        	this.$router.push('/contacts/system5');
        	}
        	else if(this.system == "盐亭县"){
	        	this.$router.push('/contacts/system6');
        	}
        	else if(this.system == "平武县"){
	        	this.$router.push('/contacts/system7');
        	}
        	else if(this.system == "北川羌族自治县"){
	        	this.$router.push('/contacts/system8');
        	}
        	else if(this.system == "江油市"){
	        	this.$router.push('/contacts/system9');
        	}
        	else{
	        	this.$router.push('/contact');
        	}
        }
        else if(key == '3'){
        	this.$router.push('/download');
        }
      }
    }
  }
</script>

<style>
	#app {
	}
	body{
		margin: 0px;
	}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
	.header-title {
	  display: flex;
	  align-items: center;
	}
	.header-wrapper {
	  width: 100%;
	  height: 60px;
	  padding: 0px 0px 0 px;
	  background: url("./assets/imgs/header.jpg") center center no-repeat;
	  background-size: 100% 100%;
	  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.22);
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  color: #06d3d3;
	}
	.logo {
	  background: url("./assets/imgs/logo.png") center center no-repeat;
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
