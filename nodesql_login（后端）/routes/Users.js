//接口
const express = require("express");
const users = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mysql = require('mysql');
const User = require("../models/User");
const url = require('url')


process.env.SECRET_KEY = "secret";

const db = mysql.createConnection({
    host:"localhost",
    database:"nodesql_login",
    user:"root",
    password:"root"
})
db.connect((err) =>{
    if(err) throw err;
    console.log('连接成功');
})

var svgCaptcha = require('svg-captcha');
 
var captcha = svgCaptcha.create();
console.log(captcha);
// {data: '<svg.../svg>', text: 'abcd'}


//查询用户信息
users.get("/test",(req,res) =>{
    let sql = "SELECT * FROM usermessage";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

// 增加员工 name,sex,age,email,address, phone, data, job
users.post('/addUser', (req, res) => {
    console.log(req.body);
    const name = req.body.name; 
    const password = req.body.password;
    const age = req.body.age;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;
    const data = req.body.data;
    const job = req.body.job;  
     const sex = req.body.sex;
    console.log("name:" + name,"password:" + password,"age:" + age,"email:" + email,"address:" + address,"phone:" + phone,"data:" + data,"job:" + job,"sex:" + sex);
    const sqlStr = "insert into usermessage (name,password,age,email,address, phone, data, job,sex) values ('" + name + "','" + password + "','" + age + "','" + email + "','"+address + "','" + phone + "','" + data + "','" + job + "','" + sex + "')";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '添加成功',
            affectedRows: results.affectedRows
        });
    })
});

//删除员工
users.post("/deleteUser",(req,res) => {
    // console.log('params:' + req.params);
    console.log(req.body);
    const id  = req.body.id;
    console.log("id:" + id);
    const sqlStr ="delete from usermessage where id='" + id + "'";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err,result) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '删除员工成功',
            affectedRows: result.affectedRows
        });
    })
})


//修改id,name,sex,age,email,address, phone, data, job
users.post('/editusers', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name; 
    const password = req.body.password; 
    const sex = req.body.sex;
    const age = req.body.age;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;
    const data = req.body.data;
    const job = req.body.job;
    const sqlStr = "update usermessage set name='" + name + "',password='" + password + "',sex='" + sex + "',age='" + age + "',email='" + email + "',address='" + address + "',phone='" + phone + "',data='" + data + "',job='" + job + "'where id=" + id;
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

//查看库存
users.get("/getku",(req,res) =>{
    let sql = "SELECT * FROM store";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//库存商品搜索
users.post("/goku",(req,res) =>{
    console.log(req.body);  
    const name = req.body.name; 
    let sql = "SELECT id,data,name,number,much,price,classes FROM store where name= '" +name+ " '";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//采购上架为库存
users.get("/addku",(req,res) =>{
    let sql = "INSERT INTO store(id,data,name,number,much,price,classes) SELECT id,data,name,number,much,price,classes FROM buy";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//清空采购列表
users.post("/deleteku",(req,res) =>{
    let sql = "DELETE FROM buy";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//删除采购商品
users.post("/deleteData",(req,res) => {
    // console.log('params:' + req.params);
    console.log(req.body);
    const id  = req.body.id;
    console.log("id:" + id);
    const sqlStr ="delete from buy where id='" + id + "'";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err,result) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '删除商品成功',
            affectedRows: result.affectedRows
        });
    })
})

//删除库存商品
users.post("/deleteDate",(req,res) => {
    // console.log('params:' + req.params);
    console.log(req.body);
    const id  = req.body.id;
    console.log("id:" + id);
    const sqlStr ="delete from store where id='" + id + "'";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err,result) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '删除商品成功',
            affectedRows: result.affectedRows
        });
    })
})

// 商品采购入库id,data,name,number,much,price,brand,supplier,classes
users.post('/addgoods', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const data = req.body.data;
    const name = req.body.name; 
    const number = req.body.number;
    const much = req.body.much;
    const price = req.body.price;
    const brand = req.body.brand;
    const supplier = req.body.supplier;
    const classes = req.body.classes;
    console.log("id:" + id,"data:" + data,"name:" + name,"number:" + number,"much:" + much,"price:" + price,"brand:" + brand,"supplier:" + supplier,"classes:" + classes);
    const sqlStr = "insert into buy (data,name,number,much,price,brand,supplier,classes) values ('" + data + "','" + name + "','" + number + "','"+much + "','" + price+ "','" + brand + "','" + supplier + "','"+  classes + "')";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '添加成功',
            affectedRows: results.affectedRows
        });
    })
});

// 商品上架
users.post('/insert', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const data = req.body.data;
    const name = req.body.name; 
    const number = req.body.number;
    const much = req.body.much;
    const price = req.body.price;
    const classes = req.body.classes;
    console.log("id:" + id,"data:" + data,"name:" + name,"number:" + number,"much:" + much,"price:" + price,"classes:" + classes);
    const sqlStr = "INSERT INTO store( data,name,number,much,price,classes) SELECT data,name,number,much,price,classes FROM buy where id=" +id;
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '上架成功',
            affectedRows: results.affectedRows
        });
    })
});


//编辑采购商品id,data,name,number,much,price,brand,supplier,classes
users.post('/editgoods', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const data = req.body.data;
    const name = req.body.name; 
    const number = req.body.number;
    const much = req.body.much;
    const price = req.body.price;
    const brand = req.body.brand;
    const supplier = req.body.supplier;
    const classes = req.body.classes;
    const sqlStr = "update buy set id='" + id + "',data='" + data + "',name='" + name + "',number='" + number + "',much='" + much + "',price='" + price + "',brand='" + brand + "',supplier='" + supplier + "',classes='" + classes + "'where id=" + id;
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

//编辑库存商品id,data,name,number,much,price,classes
users.post('/editgood', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const data = req.body.data;
    const name = req.body.name; 
    const number = req.body.number;
    const much = req.body.much;
    const price = req.body.price;
    const classes = req.body.classes;
    const sqlStr = "update store set data='" + data + "',name='" + name + "',number='" + number + "',much='" + much + "',price='" + price + "',classes='" + classes + "'where id=" + id;
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

//收银台商品查询
users.get("/go",(req,res) =>{
    let sql = "SELECT * FROM store";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//收银台商品搜索
users.post("/getselect",(req,res) =>{
    console.log(req.body);  
    const name = req.body.name;
    let sql = "SELECT id,name,much,price,number FROM store where name= '" +name+ " '";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});


//查询销售记录
users.get("/saleslook",(req,res) =>{
    let sql = "SELECT * FROM sales";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//查询采购记录
users.get("/buy",(req,res) =>{
    let sql = "SELECT * FROM buy";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//采购商品搜索
users.post("/gocai",(req,res) =>{
    console.log(req.body);  
    const name = req.body.name; 
    let sql  = "SELECT id,data,name,number,much,price,classes,supplier,brand FROM buy where name= '" +name+ " '";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
   
            res.json(result)
        }
    }) 
    })
 

//查询购物车
users.get("/shop",(req,res) =>{
    let sql = "SELECT * FROM shopcar";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

// 加入购物车
users.post('/insertshopcar', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name; 
    const much = req.body.much;
    const price = req.body.price;
    // const number = req.body.number;
    // const data = req.body.data;
    const classes = req.body.classes;
    console.log("id:" + id,"name:" + name,"much:" + much,"price:" + price,"classes" + classes);
    const sqlStr = "INSERT INTO shopcar(name,much,price,classes) SELECT name,much,price,classes FROM store where id=" +id;
    
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '加入购物车成功',
            affectedRows: results.affectedRows
        });
    })
});

//库存商品减1
users.post('/kujian', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const sqlStr = "update store set number=number-1 where id=" + id;
    // update test set age=age+1 where id=1
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

// 商品结算，入销售报表
users.get('/suan', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name; 
    const much = req.body.much;
    const price = req.body.price;
    const classes = req.body.classes;
    const number = req.body.number;
    console.log("id:" + id,"name:" + name,"much:" + much,"price:" + price,"number:" + number,"classes:" + classes);
    const sqlStr = "INSERT INTO sales(name,much,price,number,classes) SELECT name,much,price,number,classes FROM shopcar";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '结算成功',
            affectedRows: results.affectedRows
        });
    })
});

//销售报表零食类
users.get("/chide",(req,res) =>{
    let sql = "select * from sales where classes='零食类'";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//销售报表饮料类
users.get("/hede",(req,res) =>{
    let sql = "select * from sales where classes='饮料类'";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//销售报表生活用品类
users.get("/yongde",(req,res) =>{
    let sql = "select * from sales where classes='生活用品类'";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//购物车商品加1
users.post('/jia', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const sqlStr = "update shopcar set number=number+1 where id=" + id;
    // update test set age=age+1 where id=1
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

//购物车商品减1
users.post('/jian', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const sqlStr = "update shopcar set number=number-1 where id=" + id;
    // update test set age=age+1 where id=1
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

//从购物车删除
users.post("/yichu",(req,res) => {
    // console.log('params:' + req.params);
    console.log(req.body);
    const id  = req.body.id;
    console.log("id:" + id);
    const sqlStr ="delete from shopcar where id='" + id + "'";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err,result) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '移除成功',
            affectedRows: result.affectedRows
        });
    })
})


//清空购物车
users.post("/shan",(req,res) => {
    // console.log('params:' + req.params);
    console.log(req.body);
    const id  = req.body.id;
    console.log("id:" + id);
    const sqlStr ="delete from shopcar ";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err,result) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '移除成功',
            affectedRows: result.affectedRows
        });
    })
})

//查询评价
users.get("/getevaluate",(req,res) =>{
    let sql = "SELECT * FROM evaluate";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//评价搜索
users.post("/goping",(req,res) =>{
    console.log(req.body);  
    const supplier = req.body.supplier; 
    let sql = "SELECT id,name,supplier,pingjia,content,main FROM evaluate where supplier= '" +supplier+ " '";
    db.query(sql,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//新增评价  
users.post('/addevaluate', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name; 
    const supplier = req.body.supplier;
    const pingjia = req.body.pingjia;
    const content = req.body.content;
    const main = req.body.main
    console.log("id:" + id,"name:" + name,"supplier:" + supplier,"pingjia:" + pingjia,"content:" + content,"main:" + main);
    const sqlStr = "insert into evaluate (name,supplier,pingjia,content,main) values ('" + name + "','" + supplier + "','"+  pingjia + "','"+  content + "','"+  main + "')";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '添加成功',
            affectedRows: results.affectedRows
        });
    })
});

//删除评价
users.post("/deletepingjia",(req,res) => {
    // console.log('params:' + req.params);
    console.log(req.body);
    const id  = req.body.id;
    console.log("id:" + id);
    const sqlStr ="delete from evaluate where id='" + id + "'";
    console.log(sqlStr);
    db.query(sqlStr, req.body, (err,result) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '删除商品成功',
            affectedRows: result.affectedRows
        });
    })
})

//编辑评价
users.post('/editpingjia', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name; 
    const supplier = req.body.supplier;
    const pingjia = req.body.pingjia;
    const content = req.body.content;
    const main = req.body.main
    const sqlStr = "update evaluate set name='" + name + "',supplier='" + supplier + "',pingjia='" + pingjia + "',content='" + content + "',main='" + main + "'where id=" + id;
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '修改成功',
            affectedRows: results.affectedRows
        });
    })
});

//注册
users.post("/register",(req,res) =>{
   const userData = {
       name:req.body.name,
       password:req.body.password,   
       age:req.body.age,
       email:req.body.email,
       phone:req.body.phone,
       address:req.body.address,
       data:req.body.data,
       job:req.body.job,
      sex:req.body.sex, 
   };
   console.log(userData)
   //存之前，先找！！
User.findOne({where:{name:req.body.name}}).then((user) =>{
    if(!user){//数据库不存在
        User.create(userData).then((user) =>{
            res.json({ status: user.name + " registered"});
        });
    } else{
        //数据库存在
        res.json({error: "User already exists"});
    }  
   }).catch((err) =>{
    res.send("error:" + err);
   });
});

//登录
users.post("/login",(req,res) =>{  
    // 得到数据，去表中查
    console.log(req.body)
    User.findOne({ where:{name:req.body.name}})
    .then((user) =>{
        console.log(user)
        //查到用户
      if(user){     
        //进行密码匹配

        //if(bcrypt.compareSync(req.body.password,user.password)){
       if(req.body.password==user.password){ 
        //   res.send("登陆成功");
        //生成token
        let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
            expiresIn:1440,  //过期时间
        });
        res.send({code:200,message:"成功！",data:token,user:user});
        } 
          
      }else{
          res.send({code:201,message:"User does not exist"});
      }
    })
    .catch((err) =>{
        res.status(400).json({ error: err});
    });
});

 //验证码
users.get("/getCaptcha", (req, res) => {
    //字母和数字随机验证码
    // var captcha = svgCaptcha.create({  
        // 数字随机验证码
        var captcha = svgCaptcha.createMathExpr({ 
        inverse: false,    // 翻转颜色          
        fontSize:42 ,   // 字体大小   
        noise: 2,   // 噪声线条数 
        width: 80,  // 宽度 
        height: 32, // 高度 
        color: true ,// 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
        background:'#5F9EA0' // 验证码图片背景颜色 
      });  
      // 保存到session,忽略大小写  
      req.session = captcha.text.toLowerCase(); 
      console.log(req.session); //0xtg 生成的验证码
      //保存到cookie 方便前端调用验证
      res.cookie('captcha', req.session); 
      res.setHeader('Content-Type', 'image/svg+xml');
      res.send(String(captcha.data));
      res.end();
})


//查询菜单(当roleId为1,查询所有菜单,不为1时查询部分菜单)
users.post('/getMenuList', function (req, res) {
    console.log(req.body);
    const roleId = req.body.roleId;
    let sqlStr=null;
    if(roleId==='1'){
         sqlStr = "select cd.id,cd.name,cd.url from daohang cd";
    }else{
         sqlStr = "select cd.id,cd.name,cd.url from daohang cd,role_menu_rel rr where cd.id=rr.menu_id  and rr.role_id="+roleId;
    }
    console.log(sqlStr);
    db.query(sqlStr,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});


//查询菜单树,获取所有职位关联的菜单 
users.post('/getRoleMenuList', function (req, res) {
    console.log(req.body);
    const roleId = req.body.roleId;
    let  sqlStr = "select menu_id as menuId from role_menu_rel where role_id="+roleId;
    console.log(sqlStr);
    db.query(sqlStr,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
});

//查询所有职位
users.post('/getJobList', function (req, res) {
    console.log(req.body);
    const sqlStr = "select u.remark,u.role_id as roleId,u.role_name as roleName from user_role u";
    console.log(sqlStr);
    db.query(sqlStr,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            console.log(result);
        //    res.send({code:200,message:"查询成功！"});
        // 返回数据
            res.json(result)
        }
    })  
   
});

//保存修改职位,授权
/**
 * {"roleId":2,"roleName":"店员","remark":"备注"},
 */
users.post('/saveJob', function (req, res) {
    console.log(req.body);
    const param=req.body;
    // let sqlStr = "";
    if(param.id){
         sqlStr = "update user_role set role_name='"+param.roleName+"',remark='"+param.remark+"' wehre role_id= "+param.roleId;
    }
    // else{
    //     sqlStr = "insert into user_role(role_name,remark) VALUES ('"+param.roleName+"','"+param.remark+"')";
    // }
    console.log(sqlStr);
    db.query(sqlStr, (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        res.json({
            code: 200,
            message: '保存成功',
            affectedRows: results.affectedRows
        });
    })
});

//保存菜单和职位的关系
/**
 * [{"roleId":2,"menuId":2},{"roleId":2,"menuId":2}]
 */
users.post('/saveJobMenu', function (req, res) {
    console.log(req.body);
    const menuList=req.body;
    let values=[];
    let index=0;
    menuList.data.forEach(el => {
        let roleMenu=[];
        roleMenu[0]=el.roleId;
        roleMenu[1]=el.menuId;
        values[index]=roleMenu;
        index++;
    });
    db.query("delete from role_menu_rel where role_id=?",[menuList.roleId], (err, results) => {
        if (err) return res.json({
            code: 404,
            message: err,
            affectedRows: 0
        });
        const sqlStr = "insert into role_menu_rel(role_id,menu_id) VALUES ?";
        console.log(sqlStr);
        db.query(sqlStr,[values], (err, results) => {
            if (err) return res.json({
                code: 404,
                message: err,
                affectedRows: 0
            });
            res.json({
                code: 200,
                message: '保存成功',
                affectedRows: results.affectedRows
            });
        })

    })
});

module.exports = users;
