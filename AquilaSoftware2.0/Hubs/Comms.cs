using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using System;
using System.IO.Ports;
using System.Threading;
//Hub is the middle man communication from the server to the client side code
namespace AquilaSoftware2._0.Hubs
{

    public class Comms : Hub
    {
        private SerialPort mySerialPort = new SerialPort("COM3");
        private IDictionary<string, int> dict = new Dictionary<string, int>();


        public Comms()
         {
            mySerialPort.BaudRate = 115200;
            mySerialPort.Parity = Parity.None;
            mySerialPort.StopBits = StopBits.One;
            mySerialPort.DataBits = 8;
            mySerialPort.Handshake = Handshake.None;
            mySerialPort.RtsEnable = true;
            mySerialPort.DtrEnable = true;
            try
            {
                mySerialPort.Open();
            }
            catch (Exception ex)
            {
                // Handle exception
                dict.Add("exeption", 4);
            }
        }

      

        public async Task Request()
        {
            await Clients.All.SendAsync("Request",getValues());
        }


        public string getValues()
        {
           

            if (mySerialPort.IsOpen)
            {
                dict.Add("rpm", 2);
            }
            else
            {
                dict.Add("speed", 30);

            }


            var json = JsonConvert.SerializeObject(dict);
            return json;
        }

    }
}
