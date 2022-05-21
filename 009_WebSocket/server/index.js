const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8082});

wss.on("connection", ws => {
    console.log("New client connected!"); 

    // get message from client
    ws.on("message", data => {
        console.log("Client has send us: " + data);

        ws.send(data.toString().toUpperCase());
    });

    ws.on("close",() => {
        console.log("Client has disconnected!");
    })
});