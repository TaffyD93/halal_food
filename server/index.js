const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(express.json());

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
    password: "", //enter password when you begin
    database: "halalfood"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

/* Register new user */

app.post('/register', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  con.query(
    "INSERT INTO users (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => {
      console.log("The error is...", err);
    }
  );
});

/* Log in */

app.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  con.query(
    "SELECT * FROM users WHERE username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
      if (err) {
        console.log({err: err});
      }

      if (result.length > 0) {
        res.send(result);
      }else{
        res.send({message: "Invalid Username or Password"});
      }
    }
  );
});


app.listen(3001, () => {
    console.log("Running on port 3001");
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

/* Restaurant page */

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

/* Suggestion page */

app.post('/suggestion', (req, res) => {
  const choiceOne = req.body.choiceOne;
  const choiceTwo = req.body.choiceTwo;
  const choiceThree = req.body.choiceThree;

  console.log('Received data in the request body:', req.body.choiceOne, req.body.choiceTwo, req.body.choiceThree,);
  con.query(
    "SELECT * FROM restaurants WHERE restaurant_cuisine = ? AND restaurant_halal = ? AND restaurant_location = ?",
    [choiceOne,choiceTwo,choiceThree], (err,result)=>{
      if(err){
        console.log(err);
      }else{
        console.log(req.body.locationChoice)
        res.send(result)
      }
    })
}) 