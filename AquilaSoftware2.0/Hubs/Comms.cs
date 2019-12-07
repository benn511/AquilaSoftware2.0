using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

//Hub is the middle man communication from the server to the client side code
namespace AquilaSoftware2._0.Hubs
{

    public class Comms : Hub
    {
        private IDictionary<string, int> dict = new Dictionary<string, int>();
        public async Task Request()
        {
            await Clients.All.SendAsync("Request",getValues());
        }


        public string getValues()
        {
            
            dict.Add("rpm", 2);
            dict.Add("speed",30);
                
            var json = JsonConvert.SerializeObject(dict);
            return json;
        }

    }
}
