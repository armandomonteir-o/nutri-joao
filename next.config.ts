import { withNextVideo } from "next-video/process"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}

// Configuração otimizada do next-video
export default withNextVideo({
  ...nextConfig,
  nextVideo: {
    formats: ['mp4', 'webm'],
    poster: 'thumbnail', // Gera thumbnails automaticamente
    defaultOptions: {
      preload: 'metadata', // Ao invés de 'auto'
      autoPlay: false
    }
  }
})
