<template>
      <div>
          <!-- 无子级 -->
          <el-menu-item :index="basePath" @click="handleRoute(item)" v-if="!item.child">
            <i :class="'el-icon-'+item.ico"></i> 
            <span slot="title">{{item.name}}</span>
          </el-menu-item>

          <!-- 有子级 -->
          <el-submenu v-else :index="basePath">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>{{item.name}}</span>
              </template>
              <NavItem v-for="child in item.child" :key="child.url" 
                    :item="child" :basePath = "child.url"/>
          </el-submenu>
          
      </div>
</template>

<script>

export default {
  name:'NavItem',
  data(){
     return {
    }
  },
    methods: {
    handleRoute (menu) {
       let path = menu.url
      if(!path) {
        path = menu.url
      }
      // 通过菜单URL跳转至指定路由
      this.$router.push(path)
    }
  },
  props:['item','basePath']
  

}
</script>

<style>

</style>
