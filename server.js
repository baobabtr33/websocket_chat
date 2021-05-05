var express = require('express');
var ws = require('./ws');
const path =require('path');
const http = require('http');
const socketio = require('socket.io');

var app = express();
const server = http.createServer(app); 
const io = socketio(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

