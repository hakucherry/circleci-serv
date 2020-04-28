const ws = require('ws');
 
const wss = new ws.Server({ port: 8787 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
 
});