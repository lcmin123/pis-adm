import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PIS-ADM API',
      version: '1.0.0',
      description: 'API 명세서입니다.',
    },
    servers: [
      {
        url: '/',
        description: 'Vite Proxy Server',
      },
      {
        url: process.env.VITE_API_BASE_URL || 'http://localhost:4000',
        description: 'Direct Backend Server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./server/swagger/docs/*.swagger.yml'],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
