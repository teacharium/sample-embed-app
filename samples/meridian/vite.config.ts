import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Serve from a sub-path with BASE_PATH=/some/path/ (used for the docs site).
  base: process.env.BASE_PATH ?? "/",
  plugins: [react()],
  server: { port: 5177 },
});
