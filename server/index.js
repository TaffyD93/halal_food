const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const axios = require('axios')

const app = express()

//Database connection//

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Dhanji010293!"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.listen(3001, () => {
    console.log("running on port 3001");
});

app.get('/', (req, res) =>{
    res.send('Dokay')
  })