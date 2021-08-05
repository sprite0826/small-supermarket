<template>
  <div id="module">
    <!-- 左侧导航 -->
    <el-container>
      <Nav />
     <!-- 左侧导航 end -->
     <el-container>
        <!-- 头部 -->
        <el-header>
         <!-- <el-button class="youtop"><img  style="width:30px" src="@/icons/svg/shopcar.png"></el-button> -->
        <el-popover placement="top-start" title="退出" width="200"  trigger="hover" 
        content="点击此处，确认后即可退出系统！">
       <img slot="reference" src="@/icons/svg/tou.png" class="tou" @click="goBack()">
       </el-popover> 
   
  
        <!-- <el-button class="exit" type="info" plain > 退出</el-button> -->
          <!-- 面包屑 -->
          <Breadcumb /> 
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from './Nav'; //导入
import Breadcumb from './Breadcumb'; //面包屑

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    Nav,
    Breadcumb
  },

  methods: {
    goBack(){
     this.$confirm('此操作将退出系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$router.push('/login');
      sessionStorage.removeItem('username');
           this.$message({
            type: 'success',
            message: '成功退出系统'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出系统'
          });          
        });
      // this.$router.push('/login');
      // sessionStorage.removeItem('username');
    },
  },
  created() {

  }

}
	// this.$confirm('确定删除该用户数据?','提示',{
	// 		type:'warning'
	// 	}).then(()=>{
	//  this.$router.push('/login');
  //     sessionStorage.removeItem('username');
	// 	 })
</script>

<style>
.tou{
  width: 40px;
  float: right;
    margin:10px;
    padding: 2px 10px;
    border: none;}
   
    
</style>

