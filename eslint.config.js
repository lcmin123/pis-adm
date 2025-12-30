import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactCompiler from "eslint-plugin-react-compiler"; // import 사용
import tanstackQuery from "@tanstack/eslint-plugin-query"; // 패키지명 확인 필요
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // globalIgnores는 별도 객체로 분리하는 것이 Flat Config의 표준입니다.
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    // Flat Config에서는 'extends'가 아닌 객체 전개를 사용하거나 
    // 직접 설정을 배열에 추가해야 합니다.
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-compiler": reactCompiler,
      "@tanstack/query": tanstackQuery,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // TanStack Query 규칙
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/stable-query-client": "error",
      "@tanstack/query/no-rest-destructuring": "warn",
    },
  },
  eslintConfigPrettier,
];