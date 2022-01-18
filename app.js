const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const url = require('url');
const querystring = require('querystring');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));  // 한글 공백 포함되면 제대로 인식되지 않는 문제 해결.
app.use(express.json());

app.get("/*", (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
})

app.listen(3000, () => {
    console.log("Server ON");
})