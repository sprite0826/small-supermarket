<template>
  <div id="categoryEdit">
     <div style="width:400px;"> 
 <el-input class="form-input" v-model="inputcha" :placeholder="placeholder"  :changeValue="changeValue" type="search"  @click="goku()" />
     </div>
<!-- <el-button class="exit" type="primary" plain @click="getku()">刷新</el-button> -->
   <div>
<br>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="max-width:100%"  :header-cell-style="{background:'#eef1f6',color:'#606266'}">  
<!-- <el-table-column prop="id"  label="商品编号" width="80"></el-table-column> -->
      <el-table-column  prop="name" label="商品名称" width="160"></el-table-column>
      <el-table-column prop="number" label="数量" width="140"></el-table-column>
      <el-table-column prop="classes"  label="商品类别" width="160"></el-table-column>
      <el-table-column prop="price"  label="价格（元）" width="100"></el-table-column>
      <el-table-column prop="much"  label="商品规格" width="180"></el-table-column>
      <el-table-column prop="data"  label="入库日期" sortable width="180"></el-table-column>
<el-table-column label="操作">
<template slot-scope="scope">
      <el-button type="primary" icon="el-icon-edit" circle @click="drawer = true;editgood(scope.$index, scope.row)"></el-button>
      <el-button type="danger" icon="el-icon-delete" circle @click="deleteDate(scope.$index,scope.row)"></el-button>
      </template>
       <el-drawer title="商品信息修改界面" :append-to-body="true" :visible.sync="drawer" :direction="direction"
  :before-close="handleClose" size="30%" >  
       <div>
         <!-- <bianji /> -->
           <div class="form">
  <el-form ref="editForm" :model="editForm"  label-width="80px">
 <el-form-item label="商品编号">
      <el-input v-model="editForm.id" clearable></el-input>
</el-form-item>
<el-form-item label="商品名称">
      <el-input v-model="editForm.name" clearable></el-input>
</el-form-item>
<el-form-item label="数量">
      <el-input clearable v-model="editForm.number"></el-input>
</el-form-item>
<el-form-item label="类别">
  <el-select v-model="editForm.classes" placeholder="请选择商品类别">
      <el-option label="零食类" value="零食类"></el-option>
      <el-option label="饮料类" value="饮料类"></el-option>
      <el-option label="生活用品类" value="生活用品类"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="价格"><el-input v-model="editForm.price" clearable></el-input></el-form-item>
  <el-form-item label="商品规格"><el-input v-model="editForm.much" clearable></el-input></el-form-item>
  <el-form-item label="入库日期">
    <el-col :span="10">
      <el-date-picker type="date" placeholder="选择日期" v-model="editForm.data" style="width: 140%;" format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"></el-date-picker>
    </el-col>
  </el-form-item>

    

  <el-form-item><el-button type="primary"  @click="sumbitEditRow();drawer = false">立即提交</el-button ><el-button @click="drawer = false">取消</el-button></el-form-item>
</el-form> 
   </div>
          </div> 
         </el-drawer>
      </el-table-column>
    </el-table>
   </div>
    
    
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
</template>
<script>
// import bianji from '@/components/bianji'
// import VSearch from '@/components/v-search'
 var _index;

export default {
  // name: 'VSearch',
 components: {
    // bianji,
    // VSearch
  },
      data() {
        return {
            placeholder:'请输入商品名称进行查询',
           inputcha:'',//模糊查询输入的值
           editForm: [], //修改
          direction: 'rtl',
          drawer: false,
           options: [],
      labelValue: '',
      inputValue: '' ,
       currentPage:1, //初始页
         pagesize:5,    //    每页的数据     
      tableData: [],//数据集
      showVd: false,
      showVdMsg: {
        id: '',
        name: '',
        number:'',
        class:'',
        price:'',
        much:'',
        data:''
      },
    }
  },
  mounted(){
     this.getku();
    
      },
  computed: {
      changeValue: function(e) {
        let value = this.inputcha
        this.goku(this.inputcha)
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
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
        getku(){  //发送请求获取数据
       axios.get('http://127.0.0.1:3333/api/v1/getku').then(res =>{
         console.log(res)
         this.tableData = res.data;
        //  this.$message.success('商品信息刷新成功！')
            },error=>{
         console.log(error)
})
 }, 
 //删除
   deleteDate(index, row) {
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
		this.$confirm('确定删除该商品数据?','提示',{
			type:'warning'
		}).then(()=>{
       var params = new URLSearchParams()
       params.append("id", row.id) 
       //  插入一个指定的键/值对作为新的搜索参数
			axios.post('http://127.0.0.1:3333/api/v1/deleteDate',params).then(res => {
				console.log("删除的结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)//删除项目，然后返回被删除的项目
          this.getku();
				} else {
					alert("删除失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("删除失败的原因：", error)
				})
		 })			
},
//编辑id,data,name,number,much,price,brand,supplier,classes
editgood(index, row) {
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
          paras.append("classes", this.editForm.classes)
					axios.post('http://127.0.0.1:3333/api/v1/editgood', paras).then((response) => {
						console.log("修改结果：", response.data.code)
						if (response.data.code == 0) {
							alert(response.data.message)
              this.tableData[editData].id = response.data.data.id
              this.tableData[editData].data = response.data.data.data
							this.tableData[editData].name = response.data.data.name
							this.tableData[editData].number = response.data.data.number
							this.tableData[editData].much = response.data.data.much
              this.tableData[editData].price = response.data.data.price
              this.tableData[editData].classes = response.data.data.classes
						} else {
           this.$message.success('修改商品信息成功！') 
           this.getku()
						}
					}).catch((error) => {
						console.log("失败的原因：" + error)
					})	
			},
 //条件搜索
 async goku (value){
  const res = await axios.post('http://127.0.0.1:3333/api/v1/goku', {
    name: this.inputcha
  })
  console.log(res);
  if(res.status !== 200) return
  this.tableData = res.data  
},
 }
}
</script>


<style>
.form{
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
}
</style>