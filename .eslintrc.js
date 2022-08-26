module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-native", "@typescript-eslint", "react-hooks"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "tsconfig.json",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  env: {
    "react-native/react-native": true,
  },
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
}
