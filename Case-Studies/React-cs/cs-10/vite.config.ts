import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // generates stats.html in project root after build — open it to see bundle treemap
    visualizer({
      filename: "stats.html",
      open: true,       // auto-opens browser after build
      gzipSize: true,   // shows gzip-compressed sizes
      brotliSize: true, // shows brotli-compressed sizes
    }),
  ],
  build: {
    // show per-chunk sizes in terminal output
    reportCompressedSize: true,
  },
});