using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PreVideoElasticCache.Models
{
    public class Video
    {
        public int idVideo { get; set; }
        //Dato necesario
        public int idPublicacion { get; set; }
        //datos del usuario
        public string Titulo { get; set; }
        public string Link { get; set; }
        public DateTime Fecha_creacion { get; set; }
        public DateTime Fecha_modificacion { get; set; }
    }
}
