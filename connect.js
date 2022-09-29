//module will give access to db connection to other programs
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
var con = mysql.createConnection({
        //should be a hidden env var
        host: process.env.REMOTE_ENDPOINT,
        user: process.env.MYSQLUSERNAME,
        password: process.env.MYSQLPASSWORD,
        database: process.env.DATABASE,
        multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.runsql = con;
