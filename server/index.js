const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const axios = require('axios')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT"],
  credentials: true,
}))

//Database connection//

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Dhanji010293!",
    database: "halalfood"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.listen(3001, () => {
    console.log("running on port 3001");
});

app.get('/sign_in', (req, res) => {
    res.send('sign_in')
  })

// app.get('/restaurant/:id', (req, res) => {
//   const id = req.params.id
//   con.query('SELECT * from restaurants where restaurant_id=?', [id], (err,result) => {
//     if(err){
//       console.log(err)
//     }else{
//       res.send(result)
//       console.log("This is a restaurant", id)
//     }
//   })
// })

app.get('/restaurants', (req, res) => {
  const id = req.params.id
  con.query('SELECT * from restaurants', (err,result) => {
    if(err){
      console.log(err)
    }else{
      res.send(result)
      console.log("This is a list of restaurant")
    }
  })
})