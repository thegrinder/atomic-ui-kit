const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(`${__dirname}/../demo/index.html`),
  filename: 'index.html',
  inject: 'body',
});
const hmrePlugin = new webpack.HotModuleReplacementPlugin();
const namedModulesPlugin = new webpack.NamedModulesPlugin();

const devConfig = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    PATHS.demo,
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  context: PATHS.demo,
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'awesome-typescript-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, namedModulesPlugin, hmrePlugin],
};

module.exports = devConfig;
