/** @type {import('next').NextConfig} */
// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

// module.exports = (phase) => {
//   // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER
//   // when `next build` or `npm run build` is used
//   const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
//   if (isDev) {
//     // development config
//     return {
//       env: {
        
//       },
//     }
//   }
//   if (isProd) {
//     // production config
//     return xxx
//   }
// }

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
