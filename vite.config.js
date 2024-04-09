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
                marioKart: resolve('pages/marioKart.html'),
                mortalKombat: resolve('pages/mortalKombat.html'),
                pagoExitoso: resolve('pages/pagoExitoso.html'),
               
            }
        }
    }
}