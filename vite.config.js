import { defineConfig } from 'vite';
import { resolve } from 'path';

// Sitio multipágina. Cada HTML es un punto de entrada y Vite
// genera los CSS/JS con un hash en el nombre (cache busting automático).
export default defineConfig({
  // Rutas relativas para que funcione bajo https://usuario.github.io/REPO/
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        caracteristicas: resolve(__dirname, 'caracteristicas.html'),
        precios: resolve(__dirname, 'precios.html'),
        contacto: resolve(__dirname, 'contacto.html'),
      },
    },
  },
});
