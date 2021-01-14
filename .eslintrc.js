module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  /** prefix of plugin "eslint-plugin-" can be omitted. */
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "jsx-a11y",
    "import",
  ],
  rules: {
    /** "note you must disable the base rule as it can report incorrect errors" */
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    /** prevent eslint error: "Missing file extension "tsx" for ...
     * it throw error if imported file has extension(.js, .jsx, ...).
     * airbnb ESLint has config about throwing error if js, jsx, ts, tsx file don't have extension.
     */
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
