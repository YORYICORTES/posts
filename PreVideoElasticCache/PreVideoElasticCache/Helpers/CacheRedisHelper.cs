using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PreVideoElasticCache.Helpers
{
    public class CacheRedisHelper
    {
        private static Lazy<ConnectionMultiplexer> GenerarConexion = new Lazy<ConnectionMultiplexer>(() =>
        {

        return ConnectionMultiplexer.Connect("redis-exp-re-avq4sc.serverless.use1.cache.amazonaws.com:6379");
        });

        public static ConnectionMultiplexer Connection
        {
            get { return GenerarConexion.Value; }
        }
    }
}
