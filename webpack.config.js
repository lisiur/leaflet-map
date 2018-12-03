const webpack = require('webpack')
const path = require('path')

function config(_, argv) {
  const PROD_MODE = argv.mode === 'production'
  /**
   * @type {webpack.Configuration}
   */
  const config = {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: PROD_MODE ? 'leaflet-layer.min.js' : 'leaflet-layer.js',
      library: 'leafletMap',
      libraryTarget: 'umd',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
      leaflet: {
        commonjs: 'leaflet',
        commonjs2: 'leaflet',
        amd: 'leaflet',
        root: 'L',
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      publicPath: path.resolve(__dirname, './dist'),
      port: 9001,
    }
  }
  return config
}

module.exports = config
