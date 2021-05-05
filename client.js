const WebSocket = require('ws');
const express = require('express');
const path =require('path');

const ws = new WebSocket('ws://localhost:40510');
const app = express();
const PORT = 3001;

app.use(express.static(path.join(__dirname, 'views'))); // set directory to views

app.get('/',(req,res)=>{
  res.render('index.html')
})

app.post('/',function(req,res){
  console.log("message (!)")
})

app.listen(PORT, function () {
  console.log('CLIENT app listening on port 3001!')
})

