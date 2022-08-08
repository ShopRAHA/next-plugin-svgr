const svgRegExp = /\.svg$/

const svgrLoaders = ({ nextConfig, isServer }) => {
  const { svgrOptions, assetPrefix, inlineImageLimit, esModule } = nextConfig

  const svgrLoader = {
    loader: require.resolve('@svgr/webpack'),
    options: svgrOptions
  }

  return [{ test: svgRegExp, use: [svgrLoader] }]
}

module.exports =
  (nextConfig = {}) =>
  (config, options) => {
    config.module.rules.push(...svgrLoaders({ nextConfig, ...options }))

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  }
