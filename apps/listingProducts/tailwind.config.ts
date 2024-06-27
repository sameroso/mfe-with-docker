// module.exports = {
//     content: ['./dist/*.html'],
//     theme: {
//       extend: {},
//     },
//     variants: {
//       extend: {},
//     },
//     plugins: [],
//   }

  // tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.{ts,html}"] ,
  presets: [sharedConfig],
};

export default config;
