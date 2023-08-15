const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log("running on port 3001");
});

app.get('/', (req, res) =>{
    res.send('hello, world')
  })