using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace AquilaSoftware2._0.Pages
{
   
    public class DrivingScreenModel : PageModel
    {
        private readonly ILogger<PrivacyModel> _logger;
        private int test;

        public DrivingScreenModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}