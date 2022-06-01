const WebSocket = require('ws')
let PORT = 5000;

const wsServer = new WebSocket.Server ({
    port: PORT
});

wsServer.on('connection', function(socket){
    //Attach behavior to the incoming socket

    socket.on('message', function(msg){
        console.log(`Recieved msg from client: ${msg}` )
        socket.send(`Take this back: ${msg}`)
    })

    // Some feedback to client
    console.log('A client connected')
})

console.log(`${new Date()} server is listening on ${PORT}`);