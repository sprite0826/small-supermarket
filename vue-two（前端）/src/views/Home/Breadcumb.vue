<template>
  <!-- 面包屑 -->
  <div class="breadcumb">
     <el-breadcrumb separator="/">
      <el-breadcrumb-item  v-for="(v,i) in breadList" :key="i">
        <router-link :to="v.path">
          {{v.meta.title}}
        </router-link >
      </el-breadcrumb-item>
    </el-breadcrumb>  
  </div>
</template>

<script>

export default {
  data(){
    return {
       breadList: []
    }
  },
  created(){
    console.log(this.$route.matched);
    this.breadList = this.$route.matched;
  },
  watch:{  //监听
    $route(to,from){
      this.breadList = to.matched;
    }
  }
}
</script>

<style>

</style>
