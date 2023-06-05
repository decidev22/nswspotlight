/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles']
  },
  distDir: 'build',
}

module.exports = nextConfig
