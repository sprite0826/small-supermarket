<template>
      <el-aside class="aside" width="200px">
        <el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
            <!-- <el-menu-item index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
         <el-menu-item index="stats">
         <i class="el-icon-document"></i>
        <span slot="title">销售管理</span>
      </el-menu-item>
      <el-menu-item index="check">
         <i class="el-icon-shopping-cart-full"></i>
        <span slot="title">收银台</span>
      </el-menu-item>
      <el-menu-item index="buy">
         <i class="el-icon-edit"></i>
        <span slot="title">采购管理</span>
      </el-menu-item>
      <el-menu-item index="store">
         <i class="el-icon-goods"></i>
        <span slot="title">库存管理</span>
      </el-menu-item>
       <el-menu-item index="evaluate">
         <i class="el-icon-star-off"></i>
        <span slot="title">反馈管理</span>
      </el-menu-item>
        <el-menu-item index="user">
         <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item> -->
  <NavItem   v-for="v in items" :key="v.url" :item="v" :basePath = "v.url"  />  
        </el-menu>
      </el-aside> 
</template>

<script>
import NavItem from './NavItem'

export default {
  data(){
     return {
       items:[],
      id:0,  
      // items:[
      //   {
      //     name:'首页',
      //     url:'/index'
      //   },
      //   {
      //     name:'销售管理',
      //     url:'/stats',
      //   },
      //    {
      //     name:'收银台',
      //     url:'/check'
      //   },
      //   {
      //     name:'采购管理',
      //     url:'/buy'
      //   },
      //   {
      //     name:'库存管理',
      //     url:'/store'
      //   },
      //    {
      //     name:'反馈管理',
      //     url:'/evaluate',
      //   },
      //   {
      //     name:'用户管理',
      //     url:'/user',
      //     child:[
      //       {
      //         name:'员工组成',
      //         url:'/user/list'
      //       },  
      //       // {
      //       //   name:'资料编辑',
      //       //   url:'/user/index'
      //       // },  
      //     ]
      //   },
        
      // ] 
    }
  },
  mounted(){
     this.getData();
  },
  methods:{
     getData(){  //发送请求获取数据
       let user=this.$store.state.user;
       console.log("userState user:"+user);
       console.log("sessionStorage getdat :"+sessionStorage.getItem('roleId'));
       let roleId='';
      // if(!user){
          roleId=sessionStorage.getItem('roleId');
      //  }else{
      //    roleId=user.job;
      //  }
      // roleId="1";
       console.log(user.job);
       axios.post('http://127.0.0.1:3333/api/v1/getMenuList',{roleId:roleId})
       .then(res =>{
         console.log(res)
         this.items = res.data;
         this.items.forEach(element => {
           element["ico"]=this.getIco(element.url);
         });
       },error=>{
         console.log(error)
       })
     },
     getIco(url){
        let ico="";
        switch(url){
           case "/index":
            ico+="menu";
            break;
             case "/stats":
            ico+="document";
            break;
             case "/check":
            ico+="shopping-cart-full";
            break;
             case "/buy":
            ico+="edit";
            break;
             case "/store":
            ico+="goods";
            break;
              case "/evaluate":
            ico+="star-off";
            break;
              case "/user/list":
            ico+="user";
            break;
              case "/role":
            ico+="lock";
            break;
        }
        return ico;
     }
  },
  components:{NavItem}

}
</script>

<style>

</style>