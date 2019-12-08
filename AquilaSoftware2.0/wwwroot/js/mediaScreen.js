'use strict';


//Build a hub connection with the url /mediascreen
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/Hubs/Comms")
    .build();

$('#bt').click(function (func) {
    func.preventDefault();
    console.log("Activating BT...");
    connection.invoke("ActivateBT")
        .catch(err => console.error(err.toString()));
});

connection.on('MusicData', function (music) {
    //Change song title,album,artist,...
    // var carValues = jQuery.parseJSON(valueFromServ);
    console.log(music);
    // setSpeed(40);
})

console.log('connecting...');
connection.start()

var pingServer = setInterval(myTimer, 500);

function myTimer() {
    connection.invoke("Request").catch(err => console.error(err.toString()));
}