const sqlString = require('sqlstring');
const start = require('./connect.js');

//adds username and password to Users table
function addAccount(credentials,callback){

  let sql = sqlString.format('insert into Users(username,password)' +
  'values(?,?)',[credentials.username,credentials.password]);

  start.query(sql,(err,result)=>{
    if(err){
      return callback({
        error : true ,
        errMessage: err})
    }
    return callback(result)
  })
}
//each user starts with the same settings that they can update later
function addDefaultProfile(userid,callback){
  let sql = sqlString.format('insert into Profile(backgroundColor,message,'
  +' textColor,ID) values(?,?,?,?)',[
    '#32CD32',
    'Hello There',
    '#f8f5fc',
    userid
  ]);
  console.log(sql);
  start.query(sql,(err,result) => {
    if(err){
      return callback({
        error: true,
        errMessage: err
      })
    return callback(result);
    }
  })
}

//updates background and text color settings of profile
function updateProfile(profile,callback){
  let sql = sqlString.format('update Profile set backgroundColor=?,message=? '
   +', textColor=? where ID = ?',
   [
     profile.color,
     profile.message,
     profile.textColor,
     profile.id
   ]);

   start.query(sql,(err,result) =>{
    if(err){
      return callback({
        error: true,
        errMessage : err
      })
    return callback(result);
    }
   })
}
