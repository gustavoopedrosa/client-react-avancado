const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd //Desabilita o PWA em dev para evitar problemas
})

/** @type {import('next').NextConfig} */
const NextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true
})

module.exports = NextConfig
