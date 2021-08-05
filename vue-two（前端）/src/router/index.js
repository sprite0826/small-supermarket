import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopCar from '@/components/ShopCar'


Vue.use(VueRouter)

const routes = [
  {
    path: '/ShopCar',
    name: 'ShopCar',
    component: () => import( '../components/ShopCar.vue')
  },
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',//登录以不同部分身份进入不同界面
    name: 'login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/index',
    // meta:{title:'首页'},
    component: () => import( '../views/Home/index.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        meta:{title:'首页'},
        component: () => import( '../views/Home/index/index.vue')
      },
      {
        path: '/stats',
        name: 'stats',
        meta:{title:'销售情况'},
        component: () => import( '../views/Home/stats/index.vue'), 
      },
      {
        path: '/check',
        name: 'check',
        meta:{title:'收银台'},
        component: () => import( '../views/Home/check/index.vue')
      },
      {
        path: '/buy',
        name: 'buy',
        meta:{title:'采购管理'},
        component: () => import( '../views/Home/buy/index.vue')
      },
      {
        path: '/store',
        name: 'store',
        meta:{title:'库存管理'},
        component: () => import( '../views/Home/store/index.vue')
      },
      {
        path: '/evaluate',
        name: 'evaluate',
        meta:{title:'反馈管理'},
        component: () => import( '../views/Home/evaluate/index.vue')
      },
      {
        path: '/role',
        name: 'role',
        meta:{title:'权限管理'},
        component: () => import( '../views/Home/role/index.vue')
      },
      {
            path: '/user/list',
            name: 'list',
        meta:{title:'用户管理'},
        component: () => import( '../views/Home/user/list.vue'),
        // children:[
        //   {
        //     path: '/user/list',
        //     name: 'list',
        //     meta:{title:'员工信息'},
        // component: () => import( '../views/Home/user/list.vue')
        //   }, 
        // ]
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

//路由拦截
router.beforeEach(function(to,from,next){
  if(!sessionStorage.getItem('username')){
    if(to.path !== '/login'){
      next('/login')
    }
  };
  next();
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
