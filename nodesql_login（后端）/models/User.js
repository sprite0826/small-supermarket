const Sequelize = require("sequelize");
const db = require("../database/db");



module.exports = db.sequelize.define(
  'usermessage',
  {
    //  员工编号
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // 姓名
    name: {
      type: Sequelize.STRING
    },
    //   账号密码
    password: {
      type: Sequelize.STRING
    },
    //   年龄
    age: {
      type: Sequelize.STRING
    },
    //   邮箱地址
    email: {
      type: Sequelize.STRING
    },
    //   电话号码
    phone: {
      type: Sequelize.STRING
    },
    //   家庭地址
    address: {
      type: Sequelize.STRING
    },
    //   入职日期
    data: {
      type: Sequelize.STRING
    },
    // 职位
    job: {
      type: Sequelize.STRING
    },
    // 性别
    sex: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,//不加上createdAt和updatedAt
    freezeTableName: true
  });