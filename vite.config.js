import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        routesDirectory: path.resolve(__dirname, 'src/pages'),
        generatedRouteTree: path.resolve(__dirname, 'src/routeTree.gen.js'),
        disableTypes: true,
      }),
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      tailwindcss(),
    ],
    root: 'src',
    envDir: '../',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    server: {
      // 프록시 설정
      proxy: {
        // 1. Swagger UI HTML 및 관련 자산 연결
        '/api-docs': {
          target: env.VITE_API_URL || 'http://localhost:4000', // 백엔드 주소
          changeOrigin: true,
          secure: false,
        },
        // 2. Swagger UI 내부에서 API 테스트를 위해 호출하는 경로도 Proxy가 필요할 수 있음
        // (만약 API 호출이 '/api'로 시작한다면 아래 설정 추가)
        '/api': {
          target: env.VITE_API_URL || 'http://localhost:4000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        '@root': path.resolve(__dirname),
        '@': path.resolve(__dirname),
        '@src': path.resolve(__dirname, 'src'),
        '@server': path.resolve(__dirname, 'server'),
        '@shared': path.resolve(__dirname, 'shared'),
      },
    },
  };
});
