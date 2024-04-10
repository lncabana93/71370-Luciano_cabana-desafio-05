import { resolve } from 'node:path'

// vite.config.js
export default {
    server: {
        port: 5555
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve('index.html'),
                mariokart: resolve('pages/mariokart.html'),
                mortalkombat: resolve('pages/mortalkombat.html'),
                pagoexitoso: resolve('pages/pagoexitoso.html'),
               
            }
        }
    }
}