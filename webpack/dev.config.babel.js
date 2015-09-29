/* eslint-env node */
import webpack from 'webpack';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

module.exports = {
  debug: true,
  devtool:  '#eval-source-map',
  context: path.join(__dirname, '../'),
  entry: [
    './src/index.js',
    'webpack-hot-middleware/client'
  ],

  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: 'js/app.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) },
      __DEVTOOLS__: process.env.DEVTOOLS === 'true' ? true : false // eslint-disable-line
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: 'html!markdown'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style!css?modules&localIdentName=[local]___[hash:base64:10]!stylus' // eslint-disable-line
      }
    ]
  }
};