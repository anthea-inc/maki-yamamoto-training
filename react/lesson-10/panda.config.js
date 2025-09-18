// panda.config.js
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"], // ←これもOK
  exclude: [],
  theme: {
    extend: {},
  },
  outdir: "src/styled-system",
  jsxFramework: "react",
});
