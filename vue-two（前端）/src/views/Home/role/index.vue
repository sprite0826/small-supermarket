<template>
  <div>
    <el-table :data="tableData" border  style="width: 100%" :header-cell-style="{background:'#eef1f6',color:'#606266'}">
      <el-table-column prop="roleId" label="ID" width="180"></el-table-column>
      <el-table-column prop="roleName" label="职位名称" width="180"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <!-- <el-button @click="edit(scope.row)" type="text" icon="el-icon-thumb" size="small">查看</el-button> -->
          <el-button @click="authorization(scope.row)" type="info" icon="el-icon-edit" size="small">授权</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog  title="授予权限" width="30%" :destroy-on-close="destroyOnClose" :visible.sync="dialogVisible" @close="closeDialog">
      <el-tree ref="menuList" :data="menuData" show-checkbox node-key="id"  :default-checked-keys="checkedKeys"  
      @node-click="handleNodeClick" :props="defaultProps"></el-tree>
      <el-button size="small" @click="saveRole()" type="primary">确定</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      menuData: [],
      checkedKeys: [],
      defaultProps: {
        label: "name"
      },
      editRoleId: "",
      dialogVisible: false,
      destroyOnClose: true,
      selectJob: ""
    };
  },
  mounted() {
    this.getRoleData();
    this.getMenuData();
  },
  methods: {
    getRoleData() {
      //查询职位列表
      axios.post("http://127.0.0.1:3333/api/v1/getJobList").then(
        res => {
          console.log(res.data);
          this.tableData = res.data;
        },
        error => {
          console.log(error);
        }
      );
    },
    getMenuData() {
      //查询全部菜单列表
      axios.post("http://127.0.0.1:3333/api/v1/getMenuList", { roleId: "1" })
        .then(
          res => {
            console.log(res.data);
            this.menuData = res.data;
          },
          error => {
            console.log(error);
          }
        );
    },
    //点击授权
    authorization(row) {
      this.editRoleId = row.roleId; //查询职位关联的菜单ID
      this.getRoleMenuList(row.roleId); //调用接口，根据roleId获取不同的菜单
      this.dialogVisible = true;
      console.log(this.editRoleId);//将授权的菜单id返回
    },
    getRoleMenuList(roleId) {
      //查询每个职位关联的不同的菜单列表
      axios .post("http://127.0.0.1:3333/api/v1/getRoleMenuList", {
          roleId: roleId
        })
        .then(
          res => {
            console.log(res.data);
            let data = res.data;
            let selectMenuId = [];
            let index = 0;
            data.forEach(function(ele) {
              selectMenuId[index] = ele.menuId;
              index++;
            });
            this.checkedKeys = selectMenuId;//将选择的菜单id返回然后输出
            console.log(this.checkedKeys);
          },
          error => {
            console.log(error);
          }
        );
    },
       //点击确定，保存关联数据
    saveRole() {
      console.log(this.selectJob);
      let roleId = this.editRoleId;
      let selectMenuList = this.$refs.menuList.getCheckedNodes();
      let data = [];
      let index = 0;
      selectMenuList.forEach(function(element) {
        let roleMenu = {};
        roleMenu["roleId"] = roleId;
        roleMenu["menuId"] = element.id;
        data[index] = roleMenu;
        index++;
      });
      let param = { roleId: roleId, data: data };
      console.log(param); //保存关系数据
      this.saveRoleMenu(param);
    },
       saveRoleMenu(data) {
      //保存所有职位关联的菜单列表
      console.log("request:" + data);
      axios.post("http://127.0.0.1:3333/api/v1/saveJobMenu", data).then(
        res => {
          console.log(res.data);
          if (res.data.code==200) {
            this.dialogVisible=false
            this.checkedKeys = [];
            this.editRoleId = ""
             this.$message.success("保存职位菜单成功！");
          } else {
            console.log("保存职位菜单失败");
            this.$message.success("保存职位菜单失败！");
          }
        },
        error => {
          console.log(error);
        }
      );
    },
    closeDialog() {
      this.checkedKeys = [];
      this.editRoleId = "";
    },
    handleNodeClick(data) {
      console.log(data);
      console.log(this.$refs.menuList.getCheckedNodes());
      console.log("checkedKeys:" + this.checkedKeys);
    },
    getCheckedNodes(data) {
      console.log(data);
    },
  }
};
</script>