const WebSocket = require('ws');
const express = require('express');
const path =require('path');

const ws = new WebSocket('ws://localhost:40510');
const app = express();
const PORT = 3001;

//client
app.use(express.static(path.join(__dirname, 'views'))); // set directory to views

app.get('/',(req,res)=>{
  res.render('index.html')
})

app.post('/',function(req,res){
  console.log("message (!)")
})


/*ws.on('open', function open() {
  ws.send('something');
});*/

/*ws.on('message', function incoming(data) {
  console.log(data);
});*/

app.listen(PORT, function () {
  console.log('CLIENT app listening on port 3001!')
})

