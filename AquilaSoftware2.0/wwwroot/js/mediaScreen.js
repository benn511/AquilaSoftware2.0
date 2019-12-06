"use strict";

//Not neccessary but variables we could use
const data = {
    message: '',
    messages: [],
    ready: false
};

//Build a hub connection with the url /mediascreen
const connection = new SignalR.HubConnectionBuilder()
    .withUrl('/MediaScreen')
    .build();

//Wires function to listen to the new message event evoked by server
connection.on('ReceiveMessage', function (msg1,msg2) {
    //const message = {sender,text};
    document.getElementById("time").value = msg1;
    document.getElementById("msg2").value = msg2;
})

console.log('connecting...');
connection
    .start()
    .then(() => data.ready = true)
    .catch(console.error);
