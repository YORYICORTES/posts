using Microsoft.AspNetCore.Mvc;
using PreVideoElasticCache.Models;
using PreVideoElasticCache.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PreVideoElasticCache.Controllers
{
    public class VideosController : Controller
    {
        private ServiceCacheRedis service;
        public VideosController(ServiceCacheRedis service)
        {
            this.service = service;
        }
        public IActionResult CreatePreVideo()
        {
            return View();
        }

        [HttpPost]
        public IActionResult CreatePreVideo(preVideo preVideo)
        {
            this.service.AgregarPreVideo(preVideo);
            List<preVideo> lista = this.service.GetListaPreVideosCache();
            return View(lista);
        }
    }
}
