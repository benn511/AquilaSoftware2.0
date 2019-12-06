//Build a hub connection with the url /mediascreen
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/Hubs/Comms")
    .build();

$('#test').click(function (func) {
    func.preventDefault();
    console.log("Clicked");
    connection.invoke("ReceiveMessage", "Testing string 1", "Testing string 2")
        .catch(err => console.error(err.toString()));
});
    
//Wires function to listen to the new message event evoked by server
connection.on('ReceiveMessage', function (msg1,msg2) {
    console.log(msg1,msg2);
})

console.log('connecting...');
connection.start()