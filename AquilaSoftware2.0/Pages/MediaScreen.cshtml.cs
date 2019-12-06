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
            serialComms = comms;
        }
    }
}