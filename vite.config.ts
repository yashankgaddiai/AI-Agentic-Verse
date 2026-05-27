import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    root: path.resolve(__dirname, 'src'),
    publicDir: path.resolve(__dirname, 'public'),
    plugins: [react(), tailwindcss()],
    base: '/',
    define: {},
    optimizeDeps: {
      exclude: ['firebase'],
    },
    esbuild: {
      legalComments: 'none' as const,
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      assetsDir: 'assets',
      emptyOutDir: true,
      manifest: false,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            motion: ['motion'],
            firebase: ['firebase/app', 'firebase/firestore'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
