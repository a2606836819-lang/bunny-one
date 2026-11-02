// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro 使用 Vite 插件在构建时生成 Tailwind CSS，不再依赖浏览器 CDN。
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
