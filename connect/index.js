
// 通过sequelize连接数据库
const SequeLize = require('sequelize')

const sequelize = new SequeLize('uiadmin','root','xdw054013',{
    host:'localhost',
    dialect:'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize
