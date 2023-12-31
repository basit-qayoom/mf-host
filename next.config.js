const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'MFHost',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          // nothing to expose from host app
        },
        remotes: {
          MFRemote: `MFRemote@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
