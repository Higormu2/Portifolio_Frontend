import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { resolve } from 'path'

export default defineConfig({
    base: '/Portifolio_Frontend/',

    plugins: [
        react(),
        babel({
            presets: [reactCompilerPreset()]
        })
    ],

    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                success: resolve(__dirname, 'success.html')
            }
        }
    }
})