using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogicAppObjetcAExcel.Models
{
    public class Ordenador
    {
        public int IdOrdenador { get; set; }
        public string Gabinete { get; set; }
        public string PlacaBase { get; set; }
        public string CPU { get; set; }
        public string RAM { get; set; }
        public string TarjetaGrafica { get; set; }
        public string Alimentacion { get; set; }
    }

    /*
        {
            "IdOrdenador" : 0,
            "Gabinete" : "dato",
            "PlacaBase" : "dato",
            "CPU" : "dato",
            "RAM" : "dato",
            "TarjetaGrafica" : "dato",
            "Alimentacion" : "dato"
        }
     
     */

}
