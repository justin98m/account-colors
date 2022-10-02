const sqlString = require('sqlstring');
const start = require('./connect.js');

function verifyCredential(credentials,callback) =>{
  sql = sqlString.format("select ID from Users where username='?' and " +
  " password='?' ",credentials.username,credentials.password;
  start.query(sql,(err,result)=>{
    if(err){
      return {
        error: true,
        message : 
      }
    }
  })
}
