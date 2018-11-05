const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const autoprefixer = require('autoprefixer');
const PATHS = require('./paths');

const extractSass = new MiniCssExtractPlugin({
  filename: 'atomic-ui-kit.min.css',
});

const prodConfig = {
  mode: 'production',
  entry: [
    PATHS.src,
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
    library: 'AtomicUiKit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer()],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [extractSass],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  externals: [
    'react',
    'react-dom',
    'webpack',
    'styled-components',
    'react-router-dom',
  ],
};

module.exports = prodConfig;
