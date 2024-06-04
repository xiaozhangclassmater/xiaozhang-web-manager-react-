import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import esLintPlugin from 'vite-plugin-eslint'
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8805,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 腾讯接口 代理
      '/yangziwangApi': {
        target: 'http://yangstudy.cn:18088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/yangziwangApi/, '') 
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {}
    }
  },
  plugins: [
    react(),
    esLintPlugin({
      fix: true,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.jsx', 'src/**/*.js']
    })
  ]
})
