export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"] ,
    ignores: ["**/node_modules/**", "**/.next/**"],
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")).default,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  }
];