let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  console.log('opened');

  ws.on('message', function (message) {
    //console.log('received: %s', message)
    message = JSON.parse(message);
    console.log(message)
    if (message["type"] == "init"){
      message["msg"] = message["userName"] +" has joined the room."
      message["userName"] = "Server"
    }

    wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(message));
    });
    
  });

  ws.on('close', function () {
    console.log('closed');
  });

})
