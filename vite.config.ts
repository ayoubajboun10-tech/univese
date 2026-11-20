
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  base: "/univese/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
});
