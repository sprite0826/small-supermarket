<template>
  <div class="about">
    <!-- 头部 -->
  	<div class="panel-body">
     <div style="width:400px;"> 
<el-input class="form-input" v-model="inputcha" :placeholder="placeholder"  :changeValue="changeValue" type="search"  @click="getselect()" />
     </div>
<!-- <el-button class="exit" type="primary" plain @click="getData()">刷新数据</el-button> -->
  <img src="@/icons/svg/shopcar.png" @click="table = true" class="gou"> 

    <div class="gouwuche">
        <el-drawer title="添加顾客选购的商品，在此页面合计并结算!" :visible.sync="table" :direction="direction"
  :before-close="handleClose" size="60%" >
          <div>
             <ShopCar /> 
</div>
         </el-drawer>
    </div>
    </div>
  <br><!-- 内容 -->
  <div class="mai">
<!-- <el-table  :data="tableData" style="width: 100%"> -->
  <el-table  :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%"  :header-cell-style="{background:'#eef1f6',color:'#606266'}">
<el-table-column prop="id"  label="商品编号" width="120" v-model="tableData.id"></el-table-column>
      <el-table-column prop="name" label="商品名称" width="160" v-model="tableData.name"></el-table-column>
      <el-table-column prop="number" label="剩余库存" width="160" v-model="tableData.number"></el-table-column>
      <el-table-column prop="much"  label="商品规格" width="160" v-model="tableData.much"></el-table-column>
      <el-table-column prop="price"  label="商品单价￥（元）" width="160" v-model="tableData.price"></el-table-column>
<el-table-column label="操作">
   <template slot-scope="scope">
     <img src="@/icons/svg/gouwuche.png" @click="insertshopcar(scope.$index,scope.row);kujian(scope.$index,scope.row)" style="width:38px" >
 </template>    
      </el-table-column>
    </el-table>
     <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[6, 10, 20, 40]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper" 
                            :total="tableData.length">   
                    </el-pagination>
  </div>
  </div>
</template>
<script>

import ShopCar from '@/components/ShopCar'
var _index;

export default {
  data() {
    return {
      placeholder:'请输入商品名称进行查询',
       inputcha:'',//模糊查询输入的值
      dialogFormVisible: false,
        form: {},
        formLabelWidth: '80px',
       direction: 'rtl',
      number:'1',
       currentPage:1, //初始页
        pagesize:6,    //    每页的数据     
       tableData: [],
      currentDate: new Date(),
       table: false,
      dialog: false,
      loading: false,
       gridData: [
        //  表格里面的数据
       ],
      form: {
      //  表单里的数据库里的字段
      },
      formLabelWidth: '80px',
      timer: null,
    };
  },
  components:{
    ShopCar
  },
   mounted(){
     this.getData();  
      },
computed: {
      changeValue: function(e) {
        let value = this.inputcha
        this.getselect(this.inputcha)
        return this.inputcha
      },
},
   methods: {  
       // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
 //搜索
async getselect (value){
  const res = await axios.post('http://127.0.0.1:3333/api/v1/getselect', {
    name: this.inputcha
  })
  console.log(res);
  if(res.status !== 200) return
  this.tableData = res.data  
},
//加入购物车
   insertshopcar(index, row) {
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
		this.$confirm('确定把该商品加入购物车？','提示',{
			type:'warning'
		}).then(()=>{
			 var params = new URLSearchParams()
       params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/insertshopcar',params).then(res => {
				console.log("结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          this.$message.success('商品加入购物车成功！') 
          this.getData()
				} else {
					alert("失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("失败的原因：", error)
				})
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
          // this.getData()
				} else {
					alert("失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("失败的原因：", error)
				})
	
},
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      open2() {
        this.$message({
          message: '列表刷新成功！',
          type: 'success'
        });
      },
    //   handleChange(value) {
    //     console.log(value);
    //   },
         getData(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/go').then(res =>{
         console.log(res)
         this.tableData = res.data;

            },error=>{
         console.log(error)
})
 },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>
<style>
.mai{
  width: 900px;
 /* margin-left: 150px; */
}
 .el-drawer {
        overflow: scroll
    }
.form-input{
height: 40px;
width: 400px;
border-radius: 10px;
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .combo .combo-minus,
.combo .combo-value,
.combo .combo-plus{
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    color: #333333;
    float: left;
    font-weight: bold;
    margin: 0px;
    outline: none;
    text-align: center;
}

.combo .combo-minus,
.combo .combo-plus{
    font-size: 16px;
    height: 26px;
    line-height: 26px;
    padding: 0px;
    width: 24px;
}
.combo .combo-value{
    border-left: none;
    border-right: none;
    height: 20px;
    line-height: 20px;
    padding: 2px;
    width: 40px;
}
.gou{
  float: right;

  height: 120px;
}

</style>
