const express = require("express");
const db_config = require(__dirname + '/mysql.js');
const router = express.Router();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(cookieParser());
router.use(passport.initialize());
router.use(passport.session());

const path = require("path");

const app = express();
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