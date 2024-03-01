using LogicAppObjetcAExcel.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace LogicAppObjetcAExcel.Services
{
    public class ObjetoService
    {
        private MediaTypeWithQualityHeaderValue Header;

        public ObjetoService()
        {
            this.Header = new MediaTypeWithQualityHeaderValue("application/json");
        }

        public async Task SendObjectAsync(Ordenador objetoOrdenador)
        {
            string urlObjetoAExcel = "https://prod-243.westeurope.logic.azure.com:443/workflows/de2404d9d7b74c5a9c0714c88447aa1f/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=2g8GBhX-aBwnlrgfxK6sZAwi81298U69sGL_WCX4thA";
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(this.Header);
                
                //Convertimos a JSON el OBJETO
                string jsonObjeto = JsonConvert.SerializeObject(objetoOrdenador);

                //La peticion es POST y recibe la informacion en JSON mediante STRINGCONTENT
                StringContent content = new StringContent(jsonObjeto, Encoding.UTF8, "application/json");

                HttpResponseMessage respose = await client.PostAsync(urlObjetoAExcel, content);

            }
        }
    }
}
