import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Collect/",
  build: {
    outDir:
      "C:\\Users\\HYAD-03641\\.node-red\\projects\\Interface\\uibuilder\\Collect\\src",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
