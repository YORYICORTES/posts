using Newtonsoft.Json;
using PreVideoElasticCache.Helpers;
using PreVideoElasticCache.Models;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PreVideoElasticCache.Services
{
    public class ServiceCacheRedis
    {
        private IDatabase cache;

        public ServiceCacheRedis()
        {
            this.cache = CacheRedisHelper.Connection.GetDatabase();
        }

        public void AgregarPreVideo(preVideo preVideo)
        {
            List<preVideo> listaPreVideos;
            //obtenemos los datos del cacheRedis
            string json = this.cache.StringGet("prevideoscache");
            //comprobamos si existe o si hay que crear la lista de prevideos
            if (json == null)
            {
                listaPreVideos = new List<preVideo>();
            }
            else
            {
                listaPreVideos =
                JsonConvert.DeserializeObject<List<preVideo>>(json);
            }
            //añadimos el prevideo a la lista
            listaPreVideos.Add(preVideo);
            //Lo serializamos para poder guardarlo en el cache
            json = JsonConvert.SerializeObject(listaPreVideos);
            //despues lo cargamos en el cache redis
            this.cache.StringSet("prevideoscache", json, TimeSpan.FromMinutes(30));
        }

        public List<preVideo> GetListaPreVideosCache()
        {
            string json = this.cache.StringGet("prevideoscache");
            if (json == null)
            {
                return null;
            }
            else
            {
                List<preVideo> listaPreVideos =
                JsonConvert.DeserializeObject<List<preVideo>>(json);
                return listaPreVideos;
            }
        }

    }
}
