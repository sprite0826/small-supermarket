<template>
    <div>
 <div class="big">
        <el-row>
         <div style="width:400px;"> 
<el-input class="form-input" v-model="inputcha" :placeholder="placeholder"  :changeValue="changeValue" type="search"  @click="goping()" />
       </div> <div style="float:right;">   <!--<el-button @click="getevaluate()">刷新列表</el-button>  -->
			   <el-button type="danger" icon="el-icon-chat-line-round" plain @click="dialogFormVisible1 = true">评价商品</el-button></div>
<el-dialog title="添加商品评价" :visible.sync="dialogFormVisible1">
  <el-form  ref="form" :model="form">
    <el-form-item label="商品名称：" :label-width="formLabelWidth">
      <el-input v-model="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="供货商：" :label-width="formLabelWidth">
     <el-select v-model="form.supplier">
         <el-option  label="瓦窑商品批发市场" value="瓦窑商品批发市场"></el-option>
			   <el-option  label="旅游商品批发城" value="旅游商品批发城"></el-option> 
       <el-option  label="商品批发市场" value="商品批发市场"></el-option>
			   </el-select>
    </el-form-item>
	<el-form-item label="评价态度：" :label-width="formLabelWidth">
      <el-select v-model="form.pingjia" placeholder="请对商品进行评价">
        <el-option label="非常满意" value="非常满意"></el-option>
        <el-option label="满意" value="满意"></el-option>
		 <el-option label="还可以" value="还可以"></el-option>
        <el-option label="不满意" value="不满意"></el-option>
		<el-option label="非常不满意" value="非常不满意"></el-option>
      </el-select>
    </el-form-item>
	<el-form-item label="评价方向：" :label-width="formLabelWidth">
      <el-select v-model="form.main" placeholder="请对商品评价方向进行选择">
        <el-option label="运输方向" value="运输方向"></el-option>
        <el-option label="包装方向" value="包装方向"></el-option>
		 <el-option label="生产日期或保质期方面" value="生产日期或保质期方面"></el-option>
        <el-option label="质量方面" value="质量方面"></el-option>
		<el-option label="其他方面" value="其他方面"></el-option>
      </el-select>
    </el-form-item>
	<el-form-item  label="评价内容：" :label-width="formLabelWidth">
		<textarea v-model="form.content" class="wen" clearable>请在这儿输入你对该商品的评价内容</textarea>
	</el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible1 = false;insert();">确 定</el-button>
  </div>
</el-dialog>                          
        </el-row>   
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%" border :header-cell-style="{background:'#eef1f6',color:'#606266'}" >
          <!-- <el-table-column label="序号" prop="id" width="60px;"></el-table-column> -->
          <el-table-column label="供货商" prop="supplier" width="140px;"></el-table-column>
            <el-table-column label="商品名称" prop="name" width="140px;"></el-table-column>
            
            <el-table-column label="商品评价">
				<el-table-column label="评价方向" prop="main"  width="180px;"></el-table-column>
				<el-table-column label="评价态度" prop="pingjia"  width="120px;">	</el-table-column>
               <el-table-column label="评价内容" prop="content"></el-table-column>
            </el-table-column>
			  <el-table-column label="操作" width="120px;">
				<template slot-scope="scope">
      <el-button type="primary" icon="el-icon-edit" circle @click="dialogFormVisible2 = true;editpingjia(scope.$index, scope.row)"></el-button>
	  <el-dialog title="添加商品评价" :visible.sync="dialogFormVisible2">
  <el-form  ref="form" :model="form">
    <el-form-item label="商品名称：" :label-width="formLabelWidth">
      <el-input v-model="form.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="供货商：" :label-width="formLabelWidth">
     <el-select v-model="form.supplier">
             <el-option  label="瓦窑商品批发市场" value="瓦窑商品批发市场"></el-option>
			   <el-option  label="旅游商品批发城" value="旅游商品批发城"></el-option> 
			   </el-select>
    </el-form-item>
	<el-form-item label="评价态度：" :label-width="formLabelWidth">
      <el-select v-model="form.pingjia" placeholder="请对商品进行评价">
        <el-option label="非常满意" value="非常满意"></el-option>
        <el-option label="满意" value="满意"></el-option>
		 <el-option label="还可以" value="还可以"></el-option>
        <el-option label="不满意" value="不满意"></el-option>
		<el-option label="非常不满意" value="非常不满意"></el-option>
      </el-select>
    </el-form-item>
	<el-form-item label="评价方向：" :label-width="formLabelWidth">
      <el-select v-model="form.main" placeholder="请对商品评价方向进行选择">
        <el-option label="运输方向" value="运输方向"></el-option>
        <el-option label="包装方向" value="包装方向"></el-option>
		 <el-option label="生产日期或保质期方面" value="生产日期或保质期方面"></el-option>
        <el-option label="质量方面" value="质量方面"></el-option>
		<el-option label="其他方面" value="其他方面"></el-option>
      </el-select>
    </el-form-item>
	<el-form-item  label="评价内容：" :label-width="formLabelWidth">
		<textarea v-model="form.content" class="wen" clearable>请在这儿输入你对该商品的评价内容</textarea>
	</el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible2 = false2;sumbitEditRow()">提交</el-button>
  </div>
</el-dialog>
      <el-button type="danger" icon="el-icon-delete" circle @click="deletepingjia(scope.$index,scope.row)"></el-button>
      </template>
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
        <div>	
		</div>
    </div>

    </div>
</template>

<script>
 var _index;
	export default {
		data() {
			return {
          placeholder:'请输入供应商名称进行查询',
       inputcha:'',//模糊查询输入的值
						dialogFormVisible1: false,
						dialogFormVisible2: false,
        form: {
          id: '',
          name: '',
          supplier: '',
	    	  pingjia: '',
          content: '',
           main: ''
        },
        formLabelWidth: '120px',
			 tableData: [],
				  currentPage:1, //初始页
                  pagesize:5,    //    每页的数据     
                  activeNames: ['1'],
			}
    },
     mounted(){
     this.getevaluate();
      },
computed: {
      changeValue: function(e) {
        let value = this.inputcha
        this.goping(this.inputcha)
        return this.inputcha
      },
},
		methods: {
       //搜索
async goping (value){
  const res = await axios.post('http://127.0.0.1:3333/api/v1/goping', {
    supplier: this.inputcha
  })
  console.log(res);
  if(res.status !== 200) return
  this.tableData = res.data  
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
getevaluate(){  //发送请求获取数据
             axios.get('http://127.0.0.1:3333/api/v1/getevaluate').then(res =>{
              console.log(res)
              this.tableData = res.data;
                // this.$message.success('列表刷新成功！') 
             },error=>{
             console.log(error)
})
 },
 //添加评论
 insert(){
     let {id,name,supplier,pingjia,content,main} = this.form;
      this.$http({
        method:'post',
        url:'/api/v1/addevaluate',
        header: { "Content-Type": "application/x-www-form-urlencoded"},
        data:{id:id,name:name,supplier:supplier,pingjia:pingjia,content:content,main:main}
      }).then(res=>{   //res返回的数据
            this.$message.success(' 添加评论成功！') 
            this.getevaluate()
      })
 },
    deletepingjia(index, row) {
		//this.tableData.splice(index, 1)
		console.log("商品编号：", row.id)
		this.$confirm('确定删除该商品数据?','提示',{
			type:'warning'
		}).then(()=>{
			 var params = new URLSearchParams()
			 params.append("id", row.id)
			axios.post('http://127.0.0.1:3333/api/v1/deletepingjia',params).then(res => {
				console.log("删除的结果：", res)
				if (res.data.code == 200) {
					// alert(res.data.message)
          this.tableData.splice(index, 1)
           this.$message.success(' 评论删除成功！') 
         this.getevaluate()
				} else {
					alert("删除失败的原因：" + res.data.message)
				}
				}).catch((error) => {
					console.log("删除失败的原因：", error)
				})
		 })			
},
//编辑
editpingjia(index, row) {
				this.form = Object.assign({}, row); //重置对象
				_index = index;
				//console.log("index的值：" + index)
				//	console.log("_index的值：" + _index)
				console.log("row的值是：", this.form) //代表选择的这一行的数据
			},
sumbitEditRow() {
				var editData = _index;
				console.log("editpingjia的值" + this.form)
					var paras = new URLSearchParams()
          paras.append("id", this.form.id)
					paras.append("name", this.form.name)
					paras.append("supplier", this.form.supplier)
					paras.append("content", this.form.content)
					paras.append("pingjia", this.form.pingjia)
					paras.append("main", this.form.main)
					axios.post('http://127.0.0.1:3333/api/v1/editpingjia', paras).then((response) => {
						console.log("修改结果：", response.data.code)
						if (response.data.code == 0) {
							alert(response.data.message)
							this.tableData[editData].id = response.data.data.id
							this.tableData[editData].name = response.data.data.name
							this.tableData[editData].supplier = response.data.data.supplier
							this.tableData[editData].content = response.data.data.content   
              this.tableData[editData].pingjia = response.data.data.pingjia
							this.tableData[editData].main = response.data.data.main
						} else {
           this.$message.success('修改评价内容成功！') 
        this.getevaluate()
						}
					}).catch((error) => {
						console.log("失败的原因：" + error)
					})	
			},
 }
	}
</script>


<style>
.wen{
	border: 1px solid #d3d7d4;
	outline: none;
	font-size: 20px;
	width: 500px;
	height: 80px;
}
</style>


