var mysql      = require('mysql');

var db_info = {
  host     : '127.0.0.1',
  user     : 'kwon',
  password : 'inter7477',
  port     : '3306',
  database : 'test'
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