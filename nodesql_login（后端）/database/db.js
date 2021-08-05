const Sequelize = require("sequelize");
const db = {};
var mysql = require('mysql')

const sequelize = new Sequelize("nodesql_login","root","root",{
    host:"localhost",
    dialect:"mysql",
    pool:{
        max:5,  //连接池，最大连接5个数据库
        min:0,
        acquire:30000,  //等待的时间？？
        idle:10000,
    },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
 