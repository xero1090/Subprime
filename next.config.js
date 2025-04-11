// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Fallback for 'process' in the client bundle
        config.resolve.fallback = {
          ...config.resolve.fallback,
          process: require.resolve("process/browser"),
        };
      }
      return config;
    },
  };
  