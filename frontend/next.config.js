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
  // Evento Idei.a LAMIA 2026 ja ocorreu (10/11/2026): a landing /evento foi
  // ocultada. Os arquivos continuam em public/evento/ (basta reverter para
  // reativar). As rotas /evento* redirecionam para a home.
  async redirects() {
    return [
      { source: '/evento', destination: '/', permanent: false },
      { source: '/evento/', destination: '/', permanent: false },
      { source: '/evento/index.html', destination: '/', permanent: false },
    ]
  },
  // Landing estatica servida a partir de public/.
  async rewrites() {
    return [
      // Reativar o evento: descomente as duas linhas abaixo e remova os redirects acima.
      // { source: '/evento', destination: '/evento/index.html' },
      // { source: '/evento/', destination: '/evento/index.html' },
      { source: '/investidor', destination: '/investidor/index.html' },
      { source: '/investidor/', destination: '/investidor/index.html' },
    ]
  },
}


module.exports = nextConfig
