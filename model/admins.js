// 管理员模型
const SequeLizess = require('../connect/index')
const SequeLize = require('sequelize');
const adminModel = SequeLizess.define('admin',{
  id:{
      type:SequeLize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey: true
  },
  username:{
     type:SequeLize.STRING,
     allowNull:false
  },
  password:{
    type:SequeLize.STRING,
    allowNull:false

  },
  avatar:{
     type:SequeLize.STRING,
     defaultVlaue:'https://avatars2.githubusercontent.com/u/333530?s=40&v=4'
  },
  authority:{
    type:SequeLize.STRING,
    defaultVlaue:null
  },
  createdAt:{
   type:SequeLize.DATE
  }, 
  updatedAt:{
    type:SequeLize.DATE
  }

})

module.exports =adminModel