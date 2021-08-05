<template>
  <div>
    <!-- 轮播图 -->
      <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="item in items" :key="item">
     <img :src="item"/>
    </el-carousel-item>
  </el-carousel>
 <div class="img_one">
   <hr>
   <h1 class="text">零食热卖专区</h1><br>
   <div class="demo-image__preview" style="margin:8px"> 
<el-row :gutter="20">
 <el-col :span="4.5" ><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
     <el-image style="margin:5px; width: 200px; height: 200px" :src="require('@/assets/img/小米锅巴.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi" > <span>小米锅巴（25g）</span><br>
          <span class="lizi">￥&nbsp;1.50元</span></div>
        <div class="bottom clearfix">
          <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/士力架.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>士力架（15g）</span><br>
          <span class="lizi">￥&nbsp;4.00元</span></div>
        <div class="bottom clearfix">   
              <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
            <ShopCar /> 
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/不二家棒棒糖.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>不二家棒棒糖</span><br>
          <span class="lizi">￥&nbsp;12.90元</span></div>
        <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/抹茶曲奇.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>抹茶曲奇（102g）</span><br>
          <span class="lizi">￥&nbsp;6.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/玉米味香肠.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>玉米味香肠（32g）</span><br>
          <span class="lizi">￥&nbsp;1.50元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div><br></el-col>
   <el-col :span="4.5" ><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
     <el-image style="margin:5px; width: 200px; height: 200px" :src="require('@/assets/img/薯片.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi" > <span>大波浪薯片（115g）</span><br>
          <span class="lizi">￥&nbsp;6.50元</span></div>
        <div class="bottom clearfix">
          <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/大辣片.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>大辣片（105g）</span><br>
          <span class="lizi">￥&nbsp;4.00元</span></div>
        <div class="bottom clearfix">   
              <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
            <ShopCar /> 
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/牛肉干.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>牛肉干（80g）</span><br>
          <span class="lizi">￥&nbsp;10.50元</span></div>
        <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/米花糖.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>米花糖（830g）</span><br>
          <span class="lizi">￥&nbsp;12.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/巧克力奶味糖.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>奶味糖（107g）</span><br>
          <span class="lizi">￥&nbsp;5.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
</el-row>
</div>
</div>
 <div class="img_two">
    <hr>
   <h1 class="text">饮品热卖专区</h1><br>
   <div class="demo-image__preview" style="margin:8px"> 
<el-row :gutter="20">
  <el-col :span="4.5" ><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
     <el-image style="margin:5px; width: 200px; height: 200px" :src="require('@/assets/img/草莓汁.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi" > <span>草莓汁（350g）</span><br>
          <span class="lizi">￥&nbsp;6.50元</span></div>
        <div class="bottom clearfix">
          <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/北冰洋.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>北冰洋（450g）</span><br>
          <span class="lizi">￥&nbsp;3.00元</span></div>
        <div class="bottom clearfix">   
              <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
            <ShopCar /> 
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/鲜橙多.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>鲜橙多（1.25L）</span><br>
          <span class="lizi">￥&nbsp;10.50元</span></div>
        <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/冰糖雪梨.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>冰糖雪梨（900ml）</span><br>
          <span class="lizi">￥&nbsp;5.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/大麦茶.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>大麦茶（450ml）</span><br>
          <span class="lizi">￥&nbsp;3.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div><br></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
     <el-image style="margin:5px; width: 200px; height: 200px" :src="require('@/assets/img/大雪碧.png')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>雪碧（1.25L）</span><br>
          <span class="lizi">￥&nbsp;9.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/康师傅冰红茶.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>冰红茶（500g）</span><br>
          <span class="lizi">￥&nbsp;3.50元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/美汁源果粒橙.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>果粒橙（1.25L)</span><br>
          <span class="lizi">￥&nbsp;10.00元</span></div>
         <div class="bottom clearfix">
          <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/茉莉绿茶.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>茉莉绿茶（900ml）</span><br>
          <span class="lizi">￥&nbsp;5.00元</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/维他柠檬茶.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>维他柠檬茶(550ml)</span><br>
          <span class="lizi">￥&nbsp;15.50元</span></div>
          <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
</el-row>
</div>
</div>
 <div class="img_three">
    <hr>
   <h1 class="text">生活用品热卖专区</h1><br>
   <div class="demo-image__preview" style="margin:8px"> 
<el-row :gutter="20">
  <el-col :span="4.5" ><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
     <el-image style="margin:5px; width: 200px; height: 200px" :src="require('@/assets/img/宝宝洗护套装.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi" > <span>宝宝洗护套装</span><br>
          <span class="lizi">￥&nbsp;15.50元/套</span></div>
        <div class="bottom clearfix">
          <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/婴儿柔湿巾.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>婴儿柔湿巾</span><br>
          <span class="lizi">￥&nbsp;21.00元/提</span></div>
        <div class="bottom clearfix">   
              <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
            <ShopCar /> 
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/强生保湿霜.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>强生保湿霜</span><br>
          <span class="lizi">￥&nbsp;2.50元/袋</span></div>
        <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div> 
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/洗衣皂.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>洗衣皂</span><br>
          <span class="lizi">￥&nbsp;4.00元/块</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/防皲霜.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>防皲霜</span><br>
          <span class="lizi">￥&nbsp;12.50元/盒</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div><br></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
     <el-image style="margin:5px; width: 200px; height: 200px" :src="require('@/assets/img/佳洁士牙膏.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>佳洁士牙膏</span><br>
          <span class="lizi">￥&nbsp;8.50元/盒</span></div>
          <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/力士洗发乳.jpg')"></el-image>
      <div style="padding: 1px;">
         <div class="wenzi"><span>力士洗发乳</span><br>
          <span class="lizi">￥&nbsp;26.00元/瓶</span></div>
          <div class="bottom clearfix">
           <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
 <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/强生婴儿洗发精.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>强生婴儿洗发精</span><br>
          <span class="lizi">￥&nbsp;12.00元/瓶</span></div>
          <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/夏士莲洗发露.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>夏士莲洗发露</span><br>
          <span class="lizi">￥&nbsp;14.00元/瓶</span></div>
          <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
   <el-col :span="4.5"><div class="grid-content bg-purple" style="margin:2px">
    <el-card :body-style="{ padding: '0px' }">
      <el-image style="margin:5px; width: 200px; height: 200px " :src="require('@/assets/img/小浣熊湿纸巾.jpg')"></el-image>
      <div style="padding: 1px;">
        <div class="wenzi"> <span>小浣熊湿纸巾</span><br>
          <span class="lizi">￥&nbsp;9.00元/包</span></div>
          <div class="bottom clearfix">
            <img src="@/assets/img/hot.png" class="button" @click="table = true" style="width:60px;"> 
         <!-- <div class="gouwuche">
        <el-drawer title="我的购物车!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="66%" >
          <div>
             <ShopCar />  
</div>
         </el-drawer>
    </div> -->
        </div>
      </div>
    </el-card>
   </div></el-col>
</el-row>
</div>
</div>
</div>
</template>

<script>

import ShopCar from '@/components/ShopCar'
// import gooddetails from '@/components/gooddetails'
// import pingjia from '@/components/pingjia'
// import otherpingjia from '@/components/otherpingjia'
export default {
  data(){
    return{ 
       direction: 'rtl',
       num: 0,
      table: false,
      outerVisible: false,
        innerVisible: false,
       currentDate: new Date(),
      items:
      [
       require('@/assets/img/2.jpg'),
      require('@/assets/img/3.jpg'),
       require('@/assets/img/4.jpg'),
      ],
      //  drawer: false,
      //   innerDrawer: false, 
      };
  },
  mounted(){

  },
  components:{
    // gooddetails,
    ShopCar
    // pingjia ,
    // otherpingjia
  },
  methods:{
    //加入购物车
//    insert(){
//      let {pro_id,pro_name,pro_purity,pro_number,pro_price,pro_img} = this.form;
//       this.$http({
//         method:'post',
//         url:'/api/v1/insert',
//         header: { "Content-Type": "application/x-www-form-urlencoded"},
//          data:{pro_id:pro_id,pro_name:pro_name,pro_purity:pro_purity,pro_number:pro_number,pro_price:pro_price,pro_img:pro_img}
//       }).then(res=>{   //res返回的数据
//             alert("添加成功"); 
//       })
//  },
    handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style>
.wenzi{
  color: rgb(24, 27, 27);
  font-size: 15px;
  font-style:italic;
  font-weight:bold;
  float: left;
}
.lizi{
   color: rgb(253, 5, 5);
   font-weight:bold;
}
.img_one{
  margin-top: 40px;
  margin-bottom: 62px;
}
.img_two{
  margin-top: 40px;
  margin-bottom: 62px;
}
.img_three{
  margin-top: 40px;
  margin-bottom: 40px;
}
.text{
  text-align: center;
  font-size: 22px;
  color: #77787b;
}
 .el-row {
 margin-bottom: 20px;
 }
 .el-col {
 border-radius: 14px;
 }
 .bg-purple {
 background: #d3dce6;
 }
 .grid-content {
 border-radius: 14px;
 min-height: 36px;
 }
  .button {
    padding: 0;
    float: right;
   
  }
</style>