import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',

        includeAssets: [
          'favicon.ico',
          'apple-touch-icon.png',
          'masked-icon.svg',
        ],
        manifest: {
          name: 'Fidelion Empresa CheckIn',
          short_name: 'Fidelion CheckIn',
          description:
            'Aplicativo Fidelion Empresa CheckIn, responsável por adicionar clientes na promoção.',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512-maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3001,
      host: true,
    },
  };
});
