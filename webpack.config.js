const path = require('path');
const webpack = require('webpack');
let copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutputDir = './dist';

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  return [{
    entry: './src/index.js',
    output: {
      filename: 'widget.js',
      path: path.resolve(bundleOutputDir)
    },
    devServer: {
      static: bundleOutputDir
    },
    plugins: isDevBuild
      ? [new webpack.SourceMapDevToolPlugin(), new copyWebpackPlugin({ patterns: [{ from: 'dev/'}] })]
      : [],
    optimization: {
      minimize: !isDevBuild
    },
    mode: isDevBuild ? 'development' : 'production',
    resolve: {
      extensions: ['*', '.js']
    }
  }]
}