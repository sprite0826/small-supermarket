<template>
    <div class="biao">
   <el-button @click="getData()" class="youtop">刷新</el-button>
  <el-table :data="tableData" show-summary border style="width: 100%"  :header-cell-style="{background:'#eef1f6',color:'#606266'}">
    <el-table-column label="销售信息">
      <el-table-column  type="index" prop="id" label="序号" width="60px;">  
      </el-table-column>
    <el-table-column prop="name" label="商品名称" ></el-table-column>  
    <el-table-column label="商品信息">
      
      <el-table-column prop="number" label="卖出数量" ></el-table-column>
      <el-table-column prop="much" label="商品规格" ></el-table-column>
        <el-table-column prop="price" label="商品单价（元）" ></el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
    <p>共{{tableData.length}}条数据</p>
<div class="heji">

<strong id="total-amount">销售总额<em id="total-amount-em">{{totalPrice | priceFilter}}</em>元</strong>
  </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
        
        ]
      };
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
    methods: {
        getData(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/saleslook').then(res =>{
         console.log(res)
         this.tableData = res.data;
            },error=>{
         console.log(error)
})
 },
    }
  };
</script>
<style>
.biao{
    padding-right: 50px;
    padding-left: 50px;
}
.heji{
  background-color: lightslategrey;
  height: 40px;
text-align: right;
color: red;
font-size: 25px;
padding-right: 60px;
}
</style>