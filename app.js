const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passport');

const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+"/public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "index.html");
})

require("./routes/api.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("Listening on port %s.", PORT, PORT);
    });
  });