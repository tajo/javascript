'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NotifyPlugin = require('./notifyplugin');
var path = require('path');
var webpack = require('webpack');

var lessLoaders = 'css-loader!autoprefixer-loader?browsers=last 2 version!less-loader';

module.exports = function(isDevelopment) {

  var config = {
    cache: isDevelopment,
    debug: isDevelopment,
    devtool: isDevelopment ? 'eval-source-map' : '',
    entry: isDevelopment ?
      [
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server',
        './src/client/index.js'
      ] : [
        './src/client/index.js'
      ],
    module: {
      loaders: [{
        loader: 'url-loader?limit=8192',
        test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/
      }, {
        loaders: isDevelopment ? [
          'react-hot', 'babel-loader'
        ] : [
          'babel-loader'
        ],
        exclude: /node_modules/,
        test: /\.js$/
      },
      {
        loader: isDevelopment ?
          'style-loader!' + lessLoaders
          : ExtractTextPlugin.extract('style-loader', lessLoaders),
        test: /\.(less)$/
      }]
    },
    output: isDevelopment ? {
      path: path.join(__dirname, '/build/'),
      filename: 'app.js',
      publicPath: 'http://localhost:8888/build/'
    } : {
      path: 'build/',
      filename: 'app.js',
      publicPath: 'build/'
    },
    plugins: (function() {
      var plugins = [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV':
            JSON.stringify(isDevelopment ? 'development' : 'production')
        })
      ];
      if (isDevelopment)
        plugins.push(
          NotifyPlugin,
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin()
        );
      else
        plugins.push(
          new ExtractTextPlugin('app.css', {allChunks: true}),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
        );
      return plugins;
    })(),
    resolve: {
      extensions: ['', '.js', '.json']
    }
  };
  return config;

};
