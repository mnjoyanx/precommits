// for react.js
// import react from "eslint-plugin-react";
// import typescriptEslint from "@typescript-eslint/eslint-plugin";
// import tsParser from "@typescript-eslint/parser";
// import path from "node:path";
// import { fileURLToPath } from "node:url";
// import js from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";
// import prettierPlugin from "eslint-plugin-prettier";
// import globals from "globals";

/** @type {import('eslint').Linter.Config} */
// export default [
//   {
//     plugins: {
//       react,
//       "@typescript-eslint": typescriptEslint,
//       prettier: prettierPlugin,
//     },
//   },
//   {
//     files: ["*.{ts,tsx}"],
//     parser: tsParser,
//     parserOptions: {
//       ecmaVersion: 2020,
//       sourceType: "module",
//       ecmaFeatures: {
//         jsx: true,
//       },
//     },
//   },
//   {
//     ignores: ["node_modules", "dist"],
//   },
//   js.configs.recommended,
//   {
//     languageOptions: {
//       globals: {
//         ...globals.node,
//         ...globals.browser,
//         ...globals.es2021,
//       },
//     },
//   },
//   {
//     rules: {
//       "react/react-in-jsx-scope": "off",
//       "react/prop-types": "off",
//       "no-unused-vars": "warn",
//       "@typescript-eslint/no-unused-vars": "warn",
//       "@typescript-eslint/no-explicit-any": "warn",
//       "@typescript-eslint/explicit-module-boundary-types": "off",
//       "prefer-const": "error",
//       "prettier/prettier": "error",
//     },
//   },
// ];

// for react/ts
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["dist", "node_modules", "coverage", "eslint.config.js"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      //   parserOptions: {
      //     project: "./tsconfig.json",
      //   },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-const": "error",
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "max-lines": ["warn", { max: 124 }],
      "max-params": ["error", 3],
      "no-unused-vars": "off",
    },
  },
);
