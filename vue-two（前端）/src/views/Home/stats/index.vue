<template>
  <div class="about">

<!-- <img src="@/icons/svg/biao.png" @click="table = true" style="width:60px;margin-left:60px;" > 
<br><span class="baobiao" @click="table = true">销售报表</span> -->
     <div class="biao">
      <!-- <el-drawer title="销售报表单!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="57%" >
               <div>
            <biaodan />
</div>
</el-drawer> --><div><img src="@/assets/img/xiao.jpg" width="180px;" > 
 <div class="totalPrice">
  
<strong id="total-amount">销售总额:<br><em id="total-amount-em">{{totalPrice | priceFilter}}</em>元</strong>
  </div></div>
</div>  
<!-- <Chart /> -->
<!-- <Chartt />  -->
 <div class="biao">
    <el-button  type="info" plain icon="el-icon-s-goods" @click="chide()">零食类</el-button>
    <el-button  type="info" plain icon="el-icon-s-goods" @click="hede()">饮料类</el-button>
    <el-button  type="info" plain icon="el-icon-s-goods" @click="yongde()">生活用品类</el-button>
    <el-button type="info" plain icon="el-icon-s-data" @click="getData()" class="youtop">全部</el-button>
    <!-- 将show-summary设置为true就会在表格尾部展示合计行 -->
  <el-table :data="tableData" border show-summary style="width: 100%"  :header-cell-style="{background:'#eef1f6',color:'#606266'}">
    <el-table-column label="销售信息">
      <el-table-column prop="id" type="index" label="序号" width="60px;"></el-table-column>
    <el-table-column prop="name" label="商品名称" ></el-table-column>  
    <el-table-column label="商品信息">
      <el-table-column prop="number" label="卖出数量" ></el-table-column>
      <el-table-column prop="much" label="商品规格" ></el-table-column>
        <el-table-column prop="price" label="商品单价（元）" ></el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
  <p>共{{tableData.length}}条数据</p>
  <!-- <div class="heji">
<strong id="total-amount">销售总额<em id="total-amount-em">{{totalPrice | priceFilter}}</em>元</strong>
  </div> -->
    </div>
  </div>
</template>
<script>

import Chart from './chart'
import Chartt from './chartt'
import biaodan from '@/components/biaodan'

export default {
  data(){
    return{
     direction: 'rtl',
     table: false,  
     tableData:[],
    }
  },
  mounted(){
   this.getData(); 
  },
   filters:{  //过滤器，将文本格式化，金额保留小数点后两位 
priceFilter:function(d){
return '￥' + d.toFixed(2)
}
  },
   computed:{
      //合计总额
totalPrice:function(){
                    var totalPrice=0;
                    for(let i=0;i<this.tableData.length;i++)
                    { totalPrice += this.tableData[i].price * this.tableData[i].number;}
                    return totalPrice;
                     },

},
  components:{
     Chart,
     Chartt,
     biaodan
  },
  methods:{
        chide(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/chide').then(res =>{
         console.log(res)
         this.tableData = res.data;
         this.$message.success('查询零食类销售情况，列表显示成功！') 
            },error=>{
         console.log(error)
})
 },
   hede(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/hede').then(res =>{
         console.log(res)
         this.tableData = res.data;
          this.$message.success('查询饮料类销售情况，列表显示成功！') 
            },error=>{
         console.log(error)
})
 },
   yongde(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/yongde').then(res =>{
         console.log(res)
         this.tableData = res.data;
          this.$message.success('查询生活用品类销售情况，列表显示成功！') 
            },error=>{
         console.log(error)
})
 },
     getData(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/saleslook').then(res =>{
         console.log(res)
         this.tableData = res.data;
            },error=>{
         console.log(error)
})
 },
  
 handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
  }
}
</script>

<style>
 .el-drawer {
        overflow: scroll
    }
    .baobiao{
      font-size: 20px;
      color: orange;
      margin-left: 50px;
    }
    .biao{
    padding-right: 50px;
    padding-left: 50px;
}
.totalPrice{
  font-size: 25px;
  color: red;
  width: 140px;
  height: 100px;
margin-left: 22px;
margin-top: -90px;
}
</style>