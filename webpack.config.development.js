/* eslint strict: 0 */
'use strict';

const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = {
  index: [
    './app/index',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&overlay=true'
  ]
};

config.output.publicPath = 'http://localhost:3000/dist/';

config.module.loaders.push(
  {
    test: /\.s[a|c]ss$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'resolve-url',
      'sass?sourceMap'
    ]
  },
  {
    test: /\.less$/,
    loaders: [
      'style?sourceMap',
      'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
      'resolve-url',
      'less?sourceMap'
    ]
  },
  {
    test: /\.global\.css$/,
    loaders: [
      'style-loader',
      'css-loader?sourceMap'
    ]
  });

config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: true,
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
