/* eslint-env node */
import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';

const env = process.env.NODE_ENV || 'development';

export default {
  debug: true,
  devtool:  '#eval-source-map',
  context: path.join(__dirname, '../src'),
  entry: ['.'],

  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
    filename: 'js/app.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) },
      __DEVTOOLS__: process.env.DEVTOOLS === 'true' ? true : false // eslint-disable-line
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.(svg|png|jpe?g)$/, loader: 'file?name=images/[hash].[ext]' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style!css?modules&localIdentName=[local]___[hash:base64:10]' }, //eslint-disable-line
      { test: /\.styl$/, loaders: ['postcss', 'stylus'] }
    ]
  },
  postcss: () => {
    return [
      autoprefixer({ browsers: ['last 4 versions'] })
    ];
  }
};