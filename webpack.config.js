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
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  'targets': {
                      'ie': '11',
                      'esmodules': true
                  },
                  // makes usage of @babel/polyfill because of IE11
                  // there is at least async functions and for...of
                  useBuiltIns: 'usage',
                  corejs: '3.0.0'
                }]
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js']
    }
  }]
}