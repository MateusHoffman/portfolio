/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações para produção
  output: 'standalone',
  
  // Configurações de imagem
  images: {
    unoptimized: true,
  },
  
  // Configurações de build
  experimental: {
    optimizeCss: true,
  },
  
  // Configurações de compressão
  compress: true,
  
  // Configurações de cache
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
