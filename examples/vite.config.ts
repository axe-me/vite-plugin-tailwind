import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import tailwind from "vite-plugin-tailwind";

export default defineConfig({
  plugins: [
    vue(),
    tailwind(),
  ],
});
