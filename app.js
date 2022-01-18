const express = require("express");
const path = require("path");

const app = express();
const db_config = require(__dirname + '/mysql.js');
const conn = db_config.init();

db_config.connect(conn);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname+"/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
})

app.get("/getInfo", (req, res) => {
    conn.query('SELECT * FROM post', (err,rows) => {
      if(err) throw err;
      res.json({data:rows})
    });
})

app.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("server running on port 3000");
})