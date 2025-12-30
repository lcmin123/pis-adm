import js from '@eslint/js';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ['dist', 'node_modules', 'build'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ...globals.es2022 },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      import: importPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      '@tanstack/query': tanstackQuery,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
      'import/resolver': {
        alias: {
          // 중요: path.resolve를 사용해 프로젝트 루트부터 ui 폴더까지 정확히 매핑
          map: [
            ['@app', path.resolve(__dirname, 'src/app')],
            ['@pages', path.resolve(__dirname, 'src/pages')],
            ['@widgets', path.resolve(__dirname, 'src/widgets')],
            ['@features', path.resolve(__dirname, 'src/features')],
            ['@entities', path.resolve(__dirname, 'src/entities')],
            ['@shared', path.resolve(__dirname, 'src/shared')],
            ['@', path.resolve(__dirname, 'ui')],
          ],
          extensions: ['.js', '.jsx', '.json'],
        },
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
      // FSD 플러그인이 레이어 구조를 파악하도록 돕는 힌트
      'import/internal-regex': '^@/',
    },
  },
  eslintConfigPrettier,
];
