import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import esLintPlugin from 'vite-plugin-eslint'
const productionPlugin = [

]

export default defineConfig((command: string) => {
  if (command.mode !== 'dev'){
    productionPlugin.push(
      // viteExternalsPlugin({
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      //   // lazy: ['React', 'lazy']
      // })
    )
  }
  return {
    base: './',
    build: {
      // minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, //移除所有console
        }
  
      },
      rollupOptions: {
        output: {
          // compact: true,
          // assetFileNames(chunkInfo) {
          //   const imageReg = /\.png|.jpeg|.svg/ 
          //   const JavaScriptReg = /\.js/
          //   console.log('imageReg.test(chunkInfo.name)', chunkInfo.name);1
          //   if (imageReg.test(chunkInfo.name)){
          //     return `assets/[name]-[hash][extname]`
          //   } else if (JavaScriptReg.test(chunkInfo.name)) {
          //     return `js/[name]-[hash][extname]`
          //   } else {
          //     return "assets/[name]-[hash][extname]"
          //   }
          // },
        }
      }
    },
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
      }),
      ...productionPlugin
      
    ]
  }
})
