const nextConfig = {
  reactStrictMode: true,
  
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ajoutez un nouveau loader pour les fichiers PDF
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files/',
            outputPath: 'static/files/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    // Important : renvoyer la configuration modifiée
    return config;
  },
};

module.exports = nextConfig;