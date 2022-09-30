//module will give access to db connection to other programs
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
var pool = mysql.createPool({
        //should be a hidden env var
        connectionLimit:10,
        host: process.env.REMOTE_ENDPOINT,
        user: process.env.MYSQLUSERNAME,
        password: process.env.MYSQLPASSWORD,
        database: process.env.DATABASE,
        multipleStatements: true
});

module.exports = pool;
