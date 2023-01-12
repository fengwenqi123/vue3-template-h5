import vue from '@vitejs/plugin-vue'

// rollup打包分析插件
import visualizer from 'rollup-plugin-visualizer'
// 压缩
import viteCompression from 'vite-plugin-compression'

import { configHtmlPlugin } from './html'
// import unplugin from './unplugin'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [vue(), configHtmlPlugin(viteEnv, isBuild)]


  if (viteEnv.VITE_USE_COMPRESS) {
    plugins.push(viteCompression({ algorithm: viteEnv.VITE_COMPRESS_TYPE || 'gzip' }))
  }

  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }

  return plugins
}
