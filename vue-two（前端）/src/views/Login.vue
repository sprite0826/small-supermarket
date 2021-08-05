<template>
  <div class="login">
      <div class="login-content">
        <div class="login-main">
        <div class="login-container">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
            <el-form-item label="姓 名:" prop="name">
              <el-input v-model="ruleForm.name" ></el-input>
            </el-form-item> 
            <el-form-item label="密 码:" prop="password">
              <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <div>  <el-form-item label="验证码:" prop="ma">
              <el-input type="ma" v-model="ruleForm.ma"></el-input>
             <span class="test"> <img width="80" style="background:#EEE9E9;margin-left:30px;" ref="captcha" height="32" src="http://localhost:3333/api/v1/getCaptcha" @click="refreshCaptcha"></span>
            </el-form-item>
            </div>
            <el-form-item>
              <el-button type="primary" @click="login()">登录</el-button>
            </el-form-item>
          </el-form>
          </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
   name:'register',
  name:'Login',
  data(){
    return {
        dialogFormVisible: false,
        form: {
          name: 'admin',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      ruleForm:{
        name:'',
        password:'',
        ma:''
      },
      rules:{
        name:[
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
          password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
          ],
          ma:[
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 3, max: 18,message: '长度不得少于0个字符', trigger: 'blur' }
          ],
      }
    }
  },
 methods:{
    login(){
      let {name,password,ma} = this.ruleForm;
      this.$http({
        method:'post',
        url:'/api/v1/login',
        header: { "Content-Type": "application/x-www-form-urlencoded"},
         data:{name:name,password:password,ma:ma}
      }).then(res=>{   //res返回的数据
          console.log(res);
          let {code,msg,user} = res.data;
          if(code == '200' ){
             if( ma.length ==0 ){
           alert("请输入验证码进行登录验证！！");
          }else {
            sessionStorage.setItem('username',name);
            console.log(user);
            this.$store.commit("setUser",user);
            sessionStorage.setItem('roleId',user.job);
            this.$router.push('/home');
          } 
          }else{
            alert("输入的信息有误，请输入正确的姓名，密码和验证码进行登录");
          }
      })
    },
    // 获取验证码cookie
     getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++){
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
    },
     // 刷新验证码
       refreshCaptcha(){
    this.$refs.captcha.src = "http://localhost:3333/api/v1/getCaptcha?d=" + Math.random();
},

  }
}
</script>


<style>
.zhuce{
 
  width: 60%;
  left: 320px;
 
}
/* 验证码放入input框 */
.test{
  position: absolute;
  display: block;
  width: 130px;
  height: 35px;
  right: 0px;
  top: 4px;
  line-height: 34px;
}

</style>

