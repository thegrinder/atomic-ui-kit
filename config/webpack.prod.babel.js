const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const PATHS = require('./paths');

const extractSass = new ExtractTextPlugin({
  filename: 'basic-styled-uikit.css',
  disable: process.env.NODE_ENV === 'development',
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
    library: 'basicStyledUiKit',
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
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [autoprefixer()],
              },
            },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [extractSass],
  externals: [
    'react',
    'react-dom',
    'webpack',
    'styled-components',
    'react-router-dom',
  ],
};

module.exports = prodConfig;
