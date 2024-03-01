using LogicAppObjetcAExcel.Models;
using LogicAppObjetcAExcel.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogicAppObjetcAExcel.Controllers
{
    public class ObjetoController : Controller
    {
        private ObjetoService service;

        public ObjetoController(ObjetoService service)
        {
            this.service = service;
        }

        public IActionResult CreateObjeto()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateObjeto(Ordenador objetoOrdenador)
        {
            await service.SendObjectAsync(objetoOrdenador);
            ViewData["MENSAJE"] = "Procesando Objeto";
            return View();
        }
    }
}
