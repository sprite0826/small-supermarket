<template>
   <div id="main">
	<div> 
      <el-button type="primary" plain class="youtop" @click="deleteall()">清空</el-button>
   &nbsp; <el-button type="warning" plain class="youtop" @click="shop()">刷新</el-button>
    <div class="shopcartable"><el-table :data="tableData"  border>
 <el-table-column type="index" prop="id"  label="编号" v-model="tableData.id" width="60px"></el-table-column>
 <el-table-column prop="name"  label="商品名称" v-model="tableData.name" width="150px"></el-table-column>
 <el-table-column prop="much"  label="商品规格" v-model="tableData.much" width="150px"></el-table-column> 
 <el-table-column prop="price"  label="商品价格" v-model="tableData.price" width="150px"></el-table-column>  
 <el-table-column prop="number"  label="已选数量"   v-model="tableData.number" width="120px">                    
    </el-table-column>     
     <el-table-column  label="操作" width="140px">                      
 <template slot-scope="scope">
   <img src="@/icons/svg/jia.png" @click="jia(scope.$index,scope.row)" style="width:32px" >
 <!-- <input type="text" v-model="tableData.number" /> -->
  <img src="@/icons/svg/jian.png" @click="jian(scope.$index,scope.row)" style="width:32px" >
  <img src="@/icons/svg/delete.png" @click="yichu(scope.$index,scope.row)" style="width:32px" >
     </template>
     </el-table-column>
    </el-table></div>
        <span class="yangshi">此位顾客一共购买{{tableData.length}}样商品，消费金额总计{{totalPrice | priceFilter}}元</span>
      <el-button type="danger" plain class="anniu" @click="drawer = true">立即结算</el-button>
        <!-- 立即结算就把销售记录放进销售报表，支付成功就把购物车删除 -->  <!-- suan（）立即结算，一键添加到销售记录并且清空列表 -->
     <el-drawer title="我是标题" :visible.sync="drawer" :direction="direction" :before-close="handleClose" :append-to-body="true" size="48%">
 <div class="tu"> <img class="tu1" src="@/icons/svg/zhifubao.jpg" style="width:260px;" ><img class="tu2" src="@/icons/svg/weixin.jpg" style="width:260px;" ></div> 
    <!-- <template scope="scope">-->
    <div class="jie"><el-button @click="drawer =  false">取消支付</el-button>
    <el-button type="primary" @click="drawer =  false;suan()">支付成功</el-button></div>
 <!-- </template>   -->
</el-drawer>
        <div class="kong" v-show="tableData.length===0">购物车还是空的哦!!</div>
	</div>
   
</div> 
</template>

<script>


  export default {
    data(){
       return{
        drawer: false,
        direction: 'rtl',
        num: 1,
           tableData:[],	   
      }
	 },
	   mounted(){
  this.shop();
      },
      filters:{  //过滤器，将文本格式化，金额保留小数点后两位 
priceFilter:function(d){
return '￥' + d.toFixed(2)
}
  },
      computed:{
totalCount:function(){ //总的商品数量
    // var n = 0;
    // this.tableData.forEach(function(item,index){
    //     n+=item.number
    // });
    // return n;
    return this.tableData.reduce((total,cur)=>total+cur.number,0);//累加器 reduce()
},
totalPrice:function(){ //总的商品金额
    return this.tableData.reduce((total,cur)=>total+cur.number*cur.price,0);//累加器 reduce()
},
      },

    
    methods:{
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
         handleChange(value) {//计数器
        console.log(value);
      },
		shop(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/shop').then(res =>{
         console.log(res)
         this.tableData = res.data;
       
            },error=>{
         console.log(error)
})

 },
 yichu(index, row){
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
		this.$confirm('确定将商品移出购物车?','提示',{
			type:'warning'
		}).then(()=>{
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/yichu',params).then(res => {
				console.log("删除的结果：", res)
				if (res.data.code == 200) {
           this.$message.success('将商品从购物车移出成功！') 
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          this.shop()
				} else {
					alert("删除失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("删除失败的原因：", error)
				})
		 })
 },
//结算
      suan(){  
       axios.get('http://127.0.0.1:3333/api/v1/suan').then(res =>{
         console.log(res)
          this.$message.success('商品结算成功！') 
        //  this.tableData = res.data;
      axios.post('http://127.0.0.1:3333/api/v1/shan').then(res =>{
         console.log(res)
          this.tableData = res.data;
           this.shop()
            },error=>{
         console.log(error)
})
            },error=>{
         console.log(error)
});
 },
//清空购物车
    deleteall() {
      	this.$confirm('确定清空购物车?','提示',{
			type:'warning'
		}).then(()=>{
           axios.post('http://127.0.0.1:3333/api/v1/shan').then(res =>{
         console.log(res)
          this.tableData = res.data;
           this.shop()
            },error=>{
         console.log(error)
    })     
})			
},
jia(index, row){
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/jia',params).then(res => {
				console.log("的结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          this.shop()
				} else {
					alert("失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("失败的原因：", error)
				})
},
kujian(index, row){
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/kujian',params).then(res => {
				console.log("的结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          // this.shop()
				} else {
					alert("失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("失败的原因：", error)
				})
	
},
 
jian(index, row){
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/jian',params).then(res => {
				console.log("的结果：", res)
				if (res.data.code == 200) { 
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          this.shop()
				} else {
					alert("失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("失败的原因：", error)
				})
	
},
kujia(index, row){
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/kujia',params).then(res => {
				console.log("的结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          // this.shop()
				} else {
					alert("失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("失败的原因：", error)
				})
		
},
			},
   
    }
</script>

<style>
.shopcartable{
  margin-left: 40px;
}
.trtr{
    background-color: rgb(216, 230, 241);
}
.gouwuche{
     font-family: verdana,arial,sans-serif;
     font-size:22px;
    text-align: center;
     border-width: 1px;
   
     border-collapse: collapse;
    width: 800px;
    border-color: rgb(149, 167, 185);
    margin-left: 10px;
}
.anniu {
  float: right;
    position: relative;
    background-color: rgb(173, 175, 76);
    border: none;
    font-size: 18px;
    color: #FFFFFF;
    padding: 20px;
    width: 120px;
  
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
}
.anniu:after {
    content: "";
    background: rgb(210, 238, 144);
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
}

.anniu:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
}
.tu{
  margin-left:50px;
}
.tu1{
  margin-right: 55px;
}
.kong{
  font-size: 18px;
  color: forestgreen;
}
.yangshi{
  color: chocolate;
  
  text-align: center;
}
.jie{
  float: right;
  margin-top:100px;
  margin-right: 220px;
}
</style>

