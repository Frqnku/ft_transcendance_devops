import Fastify from 'fastify';
import fastifyFormbody from '@fastify/formbody';
import cors from '@fastify/cors'
import fastifyMetrics from 'fastify-metrics';
import jwtPlugin from './jwt';
import twoFARoutes from './routes/2fa';
import authRoutes from './routes/auth';
import dbServiceClient from './plugins/dbServiceClient';

import net from 'net';

const logstashClient = net.createConnection({ port: 5000, host: 'logstash' });

const fastify = Fastify({
  logger: {
    stream: logstashClient,
    level: 'info',
    timestamp: () => `,"@timestamp":"${new Date().toISOString()}"`,
    formatters: {
      level(label) {
        return { level: label };
      }
    }
  }
});

fastify.register(cors, {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    
    console.log(`CORS request from origin: ${origin}`);

    callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: '*'
});

fastify.register(dbServiceClient, {
	baseURL: process.env.DATABASE_URL as string || "http://localhost:3001/",
	tokenHeader: 'authorization'
})

fastify.register(fastifyMetrics, {
  endpoint: '/metrics',
  routeMetrics: {}
});

fastify.register(fastifyFormbody);
fastify.register(jwtPlugin);

fastify.register(authRoutes, { prefix: '/auth' });
fastify.register(twoFARoutes, { prefix: '/2fa' });

// Démarrer serveur
fastify.listen({ port: 3000 , host: '0.0.0.0'}, (err: any, address: any) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Auth service running on ${address}`);
});
