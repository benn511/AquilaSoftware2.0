using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AquilaSoftware2._0.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AquilaSoftware2._0.Pages
{
    public class MediaScreenModel : PageModel
    {
        public void OnGet()
        {
            
        }
        private readonly IHubContext<Comms> serialComms;
        public MediaScreenModel(IHubContext<Comms>comms)
        {
            //Invoke method
            //Using class event to subscribe to event raised from backend
            serialComms = comms;
        }

        public async void RecieveMessage(string message1,string message2)
        {
            //Using hubcontext to send runtime data to the page via the signalR hub
            await serialComms.Clients.All.SendAsync("ReceiveMessage", message1, message2);
        }
    }
}