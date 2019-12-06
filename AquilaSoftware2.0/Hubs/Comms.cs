using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

//Hub is the middle man communication from the server to the client side code
namespace AquilaSoftware2._0.Hubs
{
    public class Comms : Hub
    {
        public async Task ReceiveMessage(string user,string message)
        {
            await Clients.All.SendAsync("ReceiveMessage",user,message);
        }
    }
}
