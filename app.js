const express = require("express");
const mysql = require(__dirname + '/mysql.js');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const path = require("path");
const app = express();
const conn = mysql.init();

mysql.connect(conn);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());
router.use(passport.initialize());
router.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));

passport.deserializeUser(function(id, done) {
    console.log("deserializeUser id", id);
    var userinfo;
    var sql = 'SELECT * FROM USER WHERE ID=?';
    mysql.query(sql, [id], function(err, result){
        if(err) console.log('mysql error');
        console.log("deserializeUser mysql result: ", result);
        var json = JSON.stringify(resutl[0]);
        userinfo = JSON.parse(json);
        done(null, userinfo);
    })
})

app.get("/log-in", function(req, res, next){
    var userId = "";
    if(req.cookies['loginId'] !== undefined){
        console.log(req.cookies['loginId']);
        userId = req.cookies['rememberId'];
    }
    res.render('log-in', {userId: userId});
})



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