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

connection.on('Request',function (valueFromServ){
    console.log(valueFromServ);
})

console.log('connecting...');
connection.start()

var pingServer = setInterval(myTimer,500);

function myTimer()
{
    connection.invoke("Request").catch(err=>console.error(err.toString()));
}