import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// 1. 경로 관련 모듈 추가
import path from 'path';
import { fileURLToPath } from 'url';

// 2. __dirname 생성 (ESM 환경 대응)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '내 프로젝트 API',
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
  },
  // 3. apis 경로를 절대 경로로 수정
  // __dirname은 현재 이 파일(swagger.mjs)이 있는 위치(server 폴더)입니다.
  // 따라서 server 폴더 안의 routes 폴더를 가리키도록 설정합니다.
  apis: [
    path.join(__dirname, '../routes/*.mjs'),
    path.join(__dirname, '../swagger/*.mjs'), // 필요한 경우 유지
  ],
};

const specs = swaggerJsdoc(options);

export { specs, swaggerUi };
