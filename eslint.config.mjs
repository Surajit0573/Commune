import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with ESLint's modern configuration
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint configuration array
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Core web vitals rules for Next.js
    "next",                // General Next.js rules
    "plugin:@typescript-eslint/recommended", // TypeScript-specific linting rules
    "plugin:react/recommended",             // React-specific rules
    "plugin:react-hooks/recommended"        // React Hooks best practices
  ),
  {
    rules: {
      // Customize specific rules as needed
      "import/no-anonymous-default-export": "warn", // Warn on anonymous default exports
      "react/display-name": "warn",                // Warn if display name is missing
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused variables prefixed with _
      "react/react-in-jsx-scope": "off",           // Not needed in Next.js
    },
  },
];

export default eslintConfig;
