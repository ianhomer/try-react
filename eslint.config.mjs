import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { ignores: [ "build/" ]},
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: {...globals.browser, ...globals.jest } } },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
