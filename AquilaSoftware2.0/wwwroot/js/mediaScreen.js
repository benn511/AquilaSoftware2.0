const data = {
    message: '',
    messages: [],
    ready: false
};

//Build a hub connection with the url /mediascreen
const connection = new SignalR.HubConnectionBuilder().withUrl('/MediaScreen').build();

//Wires function to listen to the new message event evoked by server
connection.on('newMessage', (sender, text) => {
    const message = {sender,text};
})

console.log('connecting...');
connection.start().then( ()=> data.ready = true).catch(console.error);
