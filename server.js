const WebSocket = require('ws')
let PORT = 5000;

const wsServer = new WebSocket.Server ({
    port: PORT
});

console.log(`${new Date()} server is listening on ${PORT}`);