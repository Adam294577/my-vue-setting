import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
// import Layouts from 'vite-plugin-vue-layouts';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

import Pages from 'vite-plugin-pages';

import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Pages(),
    UnoCSS({
      configFile: '/uno.config.ts',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dirs: ['./src/composables'],
      dts: 'src/auto-imports.ts',
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/auto-components.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
