<template>
  <div class="all">
    <div class="message">   
      <!-- <el-button class="exit" type="primary" plain @click="getData()">刷新</el-button> -->
      <el-button class="exit" type="success" plain icon="el-icon-plus"  @click="innerDrawer2 = true">新增员工</el-button>
      <div> <p class="beizhu">说明：列表中职位显示的1,2,3的分别表示为超市管理员，店员和供应商</p>
        <el-drawer title="用户信息注册界面" :append-to-body="true" :visible.sync="innerDrawer2" size="30%" :direction="direction" :before-close="handleClose">
          <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="员工姓名">
                <el-input v-model="form.name" clearable></el-input>
              </el-form-item>
              <el-form-item label="账号密码">
                <el-input v-model="form.password" clearable></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="职位">
                <el-select v-model="form.job" placeholder="请选择职位">
                  <el-option label="超市管理员" value="1"></el-option>
                  <el-option label="店员" value="2"></el-option>
                  <el-option label="供货商" value="3"></el-option>
                   
                </el-select>
              </el-form-item>
              <el-form-item label="入职日期">
                <el-col :span="10">
                  <el-date-picker
                    v-model="form.data"
                    type="date"
                    placeholder="选择日期"
                    style="width: 140%;"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model="form.age" clearable></el-input>
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="form.email" clearable></el-input>
              </el-form-item>
              <el-form-item label="电话号码">
                <el-input v-model="form.phone" clearable></el-input>
              </el-form-item>
              <el-form-item label="家庭地址">
                <el-input v-model="form.address" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="register();innerDrawer2 = false">立即提交</el-button>
                <el-button @click="innerDrawer2 = false">取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-drawer>
      </div>
      <div class="biao">
        <el-table
          ref="form"
          :model="editForm"
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="id" type="index" label="编号" width="60" v-model="editForm.id"></el-table-column>
          <el-table-column prop="name" label="姓名" width="90" v-model="editForm.name"></el-table-column>
          <!-- <el-table-column prop="password" label="mima" width="90" v-model="editForm.password"></el-table-column> -->
          <el-table-column prop="sex" label="性别" width="70" v-model="editForm.sex"></el-table-column>
          <el-table-column prop="age" label="年龄" width="70" v-model="editForm.age"></el-table-column>
          <el-table-column prop="job" label="职位" width="100" v-model="editForm.job"></el-table-column>
          <el-table-column prop="email" label="邮箱" width="180" v-model="editForm.email"></el-table-column>
          <el-table-column prop="phone" label="电话号码" width="143" v-model="editForm.phone"></el-table-column>
          <el-table-column prop="address" label="家庭地址" width="133" v-model="editForm.address"></el-table-column>
          <el-table-column prop="data" label="入职日期" sortable width="130" v-model="editForm.data"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="innerDrawer = true;editusers(scope.$index, scope.row)"
              ></el-button>&nbsp;
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="deleteusers(scope.$index,scope.row)"
              ></el-button>
            </template>
            <el-drawer
              title="用户信息编辑界面"
              :append-to-body="true"
              :visible.sync="innerDrawer"
              size="30%"
              :direction="direction"
              :before-close="handleClose"
            >
              <div>
                <div class="form">
                  <el-form ref="editForm" :model="editForm" label-width="80px">
                    <el-form-item label="员工姓名">
                      <el-input v-model="editForm.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="账号密码">
                      <el-input v-model="editForm.password" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                      <el-radio-group v-model="editForm.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="职位">
                      <el-select placeholder="请选择职位" v-model="editForm.job">
                        <el-option label="超市管理员" value="1"></el-option>
                        <el-option label="店员" value="2"></el-option>
                        <el-option label="供货商" value="3"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="入职日期">
                      <el-col :span="10">
                        <el-date-picker
                          type="date"
                          placeholder="选择日期"
                          style="width: 140%;"
                          v-model="editForm.data"
                          format="yyyy 年 MM 月 dd 日"
                          value-format="yyyy-MM-dd"
                        ></el-date-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="年龄">
                      <el-input v-model="editForm.age" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                      <el-input v-model="editForm.email" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="电话号码">
                      <el-input v-model="editForm.phone" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="家庭地址">
                      <el-input v-model="editForm.address" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="sumbitEditRow();innerDrawer = false">立即提交</el-button>
                      <el-button @click="innerDrawer = false">取消</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-drawer>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script>
var _index;
export default {
  name: "addUser",
  data() {
    return {
      form: {
        name: "",
        sex: "",
        password: "",
        job: "",
        data: "",
        age: "",
        email: "",
        phone: "",
        address: ""
      },
      editForm: [], //修改
      value: new Date(),
      direction: "rtl",
      drawer: false,
      innerDrawer: false,
      innerDrawer2: false,
      tableData: [],
      table: false
    };
  },
  mounted() {
    this.getData();
  },
  components: {},
  methods: {
    register() {
      let {
        name,
        pasword,
        sex,
        job,
        data,
        age,
        email,
        phone,
        address
      } = this.form;
      
      axios.post("http://127.0.0.1:3333/api/v1/register", this.form).then(
        res => {
          //res返回的数据
          console.log(res.data);
          this.getData();
          this.$message.success("添加用户成功！");
        },
        error => {
          console.log(error);
          this.$message.success("添加用户失败！");
        }
      );
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //查询
    getData() {
      //发送请求获取数据
      axios.get("http://127.0.0.1:3333/api/v1/test").then(
        res => {
          console.log(res);
          this.tableData = res.data;
          // this.$message.success("刷新信息成功！");
        },
        error => {
          console.log(error);
        }
      );
    },
    //删除
    deleteusers(index, row) {
      //this.tableData.splice(index, 1)
      console.log("员工编号：", row.id);
      this.$confirm("确定删除该用户数据?", "提示", {
        type: "warning"
      }).then(() => {
        var params = new URLSearchParams();
        params.append("id", row.id);
        axios
          .post("http://127.0.0.1:3333/api/v1/deleteUser", params)
          .then(res => {
            console.log("删除的结果：", res);
            if (res.data.code == 200) {
              // alert(res.data.message)
              this.$message.success("删除用户成功！");
              this.tableData.splice(index, 1);
              this.getData();
            } else {
              alert("删除失败的原因：" + res.data.message);
            }
          })
          .catch(error => {
            console.log("删除失败的原因：", error);
          });
      });
    },
    //编辑id,name,sex,age,email,address, phone, data, job
    editusers(index, row) {
      this.editForm = Object.assign({}, row); //重置对象
      _index = index;
      //console.log("index的值：" + index)
      //	console.log("_index的值：" + _index)
      console.log("row的值是：", this.editForm); //代表选择的这一行的数据
    },
    sumbitEditRow() {
      var editData = _index;
      console.log("editData的值" + this.editForm);
      var paras = new URLSearchParams();
      paras.append("id", this.editForm.id);
      paras.append("name", this.editForm.name);
      paras.append("password", this.editForm.password);
      paras.append("sex", this.editForm.sex);
      paras.append("age", this.editForm.age);
      paras.append("email", this.editForm.email);
      paras.append("address", this.editForm.address);
      paras.append("phone", this.editForm.phone);
      paras.append("data", this.editForm.data);
      paras.append("job", this.editForm.job);
      axios
        .post("http://127.0.0.1:3333/api/v1/editusers", paras)
        .then(response => {
          console.log("修改结果：", response.data.code);
          if (response.data.code == 0) {
            alert(response.data.message);
            this.tableData[editData].id = response.data.data.id;
            this.tableData[editData].name = response.data.data.name;
            this.tableData[editData].password = response.data.data.password;
            this.tableData[editData].sex = response.data.data.sex;
            this.tableData[editData].age = response.data.data.age;
            this.tableData[editData].address = response.data.data.address;
            this.tableData[editData].phone = response.data.data.phone;
            this.tableData[editData].data = response.data.data.data;
            this.tableData[editData].job = response.data.data.job;
          } else {
            this.$message.success("修改用户信息成功！");
            this.getData();
          }
        })
        .catch(error => {
          console.log("失败的原因：" + error);
        });
    }
  }
};
</script>

<style>
.beizhu{
  font-size: 10px;
  color:#2585a6;
}
</style>


