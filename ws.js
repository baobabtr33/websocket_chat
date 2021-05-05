let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({port: 40510})

wss.on('connection', function (ws) {
  console.log('opened');

  ws.on('message', function (message) {
    message = JSON.parse(message);
    console.log(message)
    
    // Broadcast client Username entering room
    if (message["type"] == "init"){
      message["msg"] = message["userName"] +" has joined the room."
      message["userName"] = "Server"
    }

    // Broatcast message to each client
    wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(message));
    });

  });

  ws.on('close', function () {
    console.log('closed');
  });

})
