import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import { env } from 'process';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    eslintPlugin({
      cache: false, // Отключить кеширование, если нужно
      include: ['src/**/*.ts', 'src/**/*.tsx'],
    }),
  ],
  base: env.NODE_ENV === 'production' ? '/opinion/' : '/',
});
