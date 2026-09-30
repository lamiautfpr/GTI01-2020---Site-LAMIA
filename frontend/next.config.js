/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['github.com'],
  },
  // Landing estatica do evento (Idei.a) servida a partir de public/evento/.
  // Garante que /evento resolva o index.html em dev e em producao.
  async rewrites() {
    return [
      { source: '/evento', destination: '/evento/index.html' },
      { source: '/evento/', destination: '/evento/index.html' },
      { source: '/patrocinio', destination: '/patrocinio/index.html' },
      { source: '/patrocinio/', destination: '/patrocinio/index.html' },
    ]
  },
}


module.exports = nextConfig
