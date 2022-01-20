require('dotenv').config();

var mysql      = require('mysql2');

var db_info = {
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PW,
  port     : process.env.DB_PORT,
  database : process.env.DB_NAME,
  insecureAuth: true,
};

module.exports = {
  init: function () {
      return mysql.createConnection(db_info);
  },
  connect: function(conn) {
      conn.connect(function(err) {
          if(err) console.error('mysql connection error : ' + err);
          else console.log('mysql is connected successfully!');
      });
  }
}