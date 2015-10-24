/* eslint-env node */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default {
  context: path.join(__dirname, '../src'),
  entry: ['.'],
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
    filename: 'js/app.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      __DEVTOOLS__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/[name].css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json' },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.(svg|png|jpe?g)$/, loader: 'file?name=images/[hash].[ext]' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') }, //eslint-disable-line
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style', 'css?modules!postcss!stylus') } //eslint-disable-line
    ]
  },
  postcss: () => {
    return [

      autoprefixer({ browsers: ['last 4 versions'] })

    ];
  }
};