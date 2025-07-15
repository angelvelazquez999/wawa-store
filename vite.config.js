import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    build: {
        manifest: true,
        outDir: 'public/build',
        emptyOutDir: true,
        rollupOptions: {
            input: 'resources/js/app.jsx'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@src': path.resolve(__dirname, 'resources/js/src'),
        },
    },
});
