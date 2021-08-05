<template>
  <div class="block">
    <div>
      <div>
           <div style="width:400px;"> 
       <el-input class="form-input" v-model="inputcha" :placeholder="placeholder"  :changeValue="changeValue" type="search"  @click="gocai()"/>
     </div>
      <!-- <el-button  @click="getDate()" class="exit">刷新</el-button> -->
  <el-button @click="drawer1 = true" type="primary" icon="el-icon-upload" style="margin-left: 16px;" class="exit">商品采购</el-button>
<el-drawer title="入库界面（商品入库在这里操作）" :visible.sync="drawer1" :direction="direction" :before-close="handleClose" size="50%" >
<div>
  <!-- <ruku /> -->
  <div class="form">
  <el-form ref="form" :model="form" label-width="80px">
       <!-- <el-form-item label="商品编号"><el-input v-model="form.id" clearable></el-input>
  </el-form-item> -->
 <el-form-item label="入库时间">
    <el-col :span="10">
      <el-date-picker v-model="form.data" type="date" placeholder="选择日期"  style="width: 140%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="商品名称"><el-input v-model="form.name" clearable></el-input>
  </el-form-item>
  <el-form-item label="商品类别">
  <el-select v-model="form.classes" placeholder="请选择商品类别">
      <el-option label="零食类" value="零食类"></el-option>
      <el-option label="饮料类" value="饮料类"></el-option>
      <el-option label="生活用品类" value="生活用品类"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="数量"><el-input v-model="form.number" clearable></el-input></el-form-item>
  <el-form-item label="规格"><el-input v-model="form.much" clearable></el-input></el-form-item>
  <el-form-item label="单价￥"><el-input v-model="form.price" clearable></el-input></el-form-item>
  <el-form-item label="品牌"><el-input v-model="form.brand" clearable></el-input></el-form-item>
  <el-form-item label="供应商"><el-input v-model="form.supplier" clearable></el-input></el-form-item>
  <el-form-item><el-button type="primary" @click="addgoods();drawer1 = false">立即入库</el-button>
  <el-button @click="drawer1 = false">取消</el-button></el-form-item>   
</el-form>
   </div>  
</div>
</el-drawer> 
  
  </div>
  <br> 
   <div>
    
       <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%"  :header-cell-style="{background:'#eef1f6',color:'#606266'}">
         <!-- <el-table-column prop="id" label="商品编号" width="80px;"></el-table-column> -->
      <el-table-column prop="data" sortable label="入库时间" width="100px;"></el-table-column>
    <el-table-column prop="name" label="商品名称"></el-table-column>
     <el-table-column prop="classes" label="商品类别"></el-table-column>
    <el-table-column prop="number" label="数量" width="80px;"></el-table-column>
   <el-table-column prop="much" label="规格"></el-table-column>
   <el-table-column prop="price" label="单价（元）"></el-table-column>
    <el-table-column prop="brand" label="品牌"></el-table-column>
    <el-table-column prop="supplier" label="供应商"></el-table-column>
    <el-table-column label="操作" width="180px;">
<template slot-scope="scope">
      <el-button type="primary" icon="el-icon-edit" circle @click="drawer2 = true;editgoods(scope.$index, scope.row)"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click="deleteData(scope.$index,scope.row)"></el-button>
     <el-button type="warning" circle  @click="insert(scope.$index,scope.row)">上架</el-button>
      </template>
      <el-drawer title="修改入库界面（修改商品入库在这里操作）" :append-to-body="true" :visible.sync="drawer2" :direction="direction"
  :before-close="handleClose" size="50%">
<div>

<div class="form">
  <el-form ref="editForm" :model="editForm"  label-width="80px">
       <!-- <el-form-item label="商品编号"><el-input v-model="editForm.id" clearable></el-input>
  </el-form-item> -->
        <el-form-item label="入库时间">
    <el-col :span="10">
      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.data" style="width: 100%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="商品名称"><el-input v-model="editForm.name" clearable></el-input>
  </el-form-item>
  <el-form-item label="商品类别">
  <el-select v-model="editForm.classes" placeholder="请选择商品类别">
      <el-option label="零食类" value="零食类"></el-option>
      <el-option label="饮料类" value="饮料类"></el-option>
      <el-option label="生活用品类" value="生活用品类"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="数量"><el-input v-model="editForm.number" clearable></el-input></el-form-item>
  <el-form-item label="规格"><el-input v-model="editForm.much" clearable></el-input></el-form-item>
  <el-form-item label="单价￥"><el-input v-model="editForm.price" clearable></el-input></el-form-item>
  <el-form-item label="品牌"><el-input v-model="editForm.brand" clearable></el-input></el-form-item>
  <el-form-item label="供应商"><el-input v-model="editForm.supplier" clearable></el-input></el-form-item>
  <el-form-item><el-button type="primary" @click="sumbitEditRow();drawer2 = false">立即提交</el-button><el-button @click="drawer2 = false">取消</el-button></el-form-item>
      
</el-form>
   </div>  
</div>
</el-drawer> 
      </el-table-column>
  </el-table>
   <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 40]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            
                            :total="tableData.length">   
                    </el-pagination>
   </div>
    </div>     
    <div>
</div>
  </div>

</template>

<script>
// import ruku from '@/components/ruku'
// import updateruku from '@/components/updateruku'
 var _index;

  export default {
    name:'addgoods',
    data() {
      return {     
        placeholder:'请输入商品名称进行查询',
       inputcha:'',//模糊查询输入的值
         editForm: [], //修改 
        direction: 'rtl',
      // table:[],
        form: {
         id:'',
          name: '',
          classes: '',
          data: '',
          number: '',
          much: '',
          price: '',
          brand: '',
          supplier: ''
        },
        currentPage:1, //初始页
         pagesize:5,    //    每页的数据     
         tableData: [],
         activeNames: ['1'],
         drawer1: false,
          drawer2: false,
        innerDrawer: false,
        pickerOptions: {
          
        },
   
      }; 
    },
     components:{
    // ruku,
    // updateruku
  },
     mounted(){
     this.getDate();
  
      },
      computed: {
      changeValue: function(e) {
        let value = this.inputcha
        this.gocai(this.inputcha)
        return this.inputcha
      },
},
    methods: {
            getDate(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/buy').then(res =>{
         console.log(res)
         this.tableData = res.data;
          // this.$message.success('商品信息查询成功！') 
            },error=>{
         console.log(error)
})
 },
//根据name搜索
    async gocai (value){  
      //async用于声明一个函数是异步的，await用于等待异步完成。
  const res = await axios.post('http://127.0.0.1:3333/api/v1/gocai', {
    name: this.inputcha
  })
  console.log(res);
  if(res.status !== 200) return
  this.tableData = res.data 
    
},
 
         addgoods(){  //商品入库
     let {id,name,classes,data,number,much,price,brand,supplier} = this.form;
      this.$http({
        method:'post',
        url:'/api/v1/addgoods',
        header: { "Content-Type": "application/x-www-form-urlencoded"},
        data:{id:id,name:name,classes:classes,data:data,number:number,much:much,price:price,brand:brand,supplier:supplier}
      }).then(res=>{   //res返回的数据
           this.$message.success('商品信息入库成功！') 
           this.getDate();
      })
 },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },


 //上架
   insert(index, row) {
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
		this.$confirm('确定上架该商品数据?','提示',{
			type:'warning'
		}).then(()=>{
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/insert',params).then(res => {
				console.log("上架的结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          this.$message.success('商品信息上架成功！') 
           this.getDate()
				} else {
					alert("上架失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("上架失败的原因：", error)
				})
		 })			
},

 //删除
   deleteData(index, row) {
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
		this.$confirm('确定删除该商品数据?','提示',{
			type:'warning'
		}).then(()=>{
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/deleteData',params).then(res => {
				console.log("删除的结果：", res)
				if (res.data.code == 200) {
           this.$message.success('删除商品信息成功！') 
					// alert(res.data.message)
          this.tableData.splice(index, 1)
          this.getDate()

				} else {
					alert("删除失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("删除失败的原因：", error)
				})
		 })			
},
//编辑id,data,name,number,much,price,brand,supplier,classes
editgoods(index, row) {
				this.editForm = Object.assign({}, row); //重置对象
				_index = index;
				//console.log("index的值：" + index)
				//	console.log("_index的值：" + _index)
				console.log("row的值是：", this.editForm) //代表选择的这一行的数据
			},
sumbitEditRow() {
				var editData = _index;
				console.log("editData的值" + this.editForm)
					var paras = new URLSearchParams()
          paras.append("id", this.editForm.id)
          paras.append("data", this.editForm.data)
					paras.append("name", this.editForm.name)
					paras.append("number", this.editForm.number)
					paras.append("much", this.editForm.much)
          paras.append("price", this.editForm.price)
          paras.append("brand", this.editForm.brand)
					paras.append("supplier", this.editForm.supplier)
          paras.append("classes", this.editForm.classes)
					axios.post('http://127.0.0.1:3333/api/v1/editgoods', paras).then((response) => {
						console.log("修改结果：", response.data.code)
						if (response.data.code == 0) {
							alert(response.data.message)
              this.tableData[editData].id = response.data.data.id
              this.tableData[editData].data = response.data.data.data
							this.tableData[editData].name = response.data.data.name
							this.tableData[editData].number = response.data.data.number
							this.tableData[editData].much = response.data.data.much
              this.tableData[editData].price = response.data.data.price
              this.tableData[editData].brand = response.data.data.brand
              this.tableData[editData].supplier = response.data.data.supplier
              this.tableData[editData].classes = response.data.data.classes
						} else {
           this.$message.success('修改商品信息成功！') 
           this.getDate()
						}
					}).catch((error) => {
						console.log("失败的原因：" + error)
					})	
			},
  }
  };
</script>


<style>
.form{
    padding-left: 20px;
    padding-right: 20px;
}
</style>