const path = require('path');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const {version} = require('./package.json');

const minimize = true;

module.exports = {
  mode: 'production',
  performance: {
    maxEntrypointSize: 1e10,
    maxAssetSize: 1e10,
  },
  optimization: {
    minimize: minimize,
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  module: {
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['typescript']
    }),
  ],
  entry: {
  },
  output: {
    hashFunction: 'xxhash64',
    chunkFormat: 'array-push',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
