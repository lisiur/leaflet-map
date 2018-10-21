const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

function config(_, __) {
  /**
   * @type {webpack.Configuration}
   */
  const config = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin([path.resolve(__dirname, './dist')]),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/static'),
          to: path.resolve(__dirname, 'dist/static'),
          cache: true,
        },
      ]),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './src/index.html'),
      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
      publicPath: path.resolve(__dirname, './src/static'),
      port: 9000,
    },
  }
  return config
}

module.exports = config
