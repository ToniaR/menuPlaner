'use strict'
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  devServer: {
    hot: true,
    watchOptions: {
        poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
          test: /\.js$/,
          use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
            loader: 'file-loader',
            options: {}
        }]
      },    
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: '../src/font/[hash].[ext]',
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
    }),
    new BrowserSyncPlugin(
        // BrowserSync options
        {
          host: 'localhost',
          port: 3000,
          proxy: 'http://localhost:3100/'
        },
        {
          reload: false
        }
    ),
    new CopyWebpackPlugin([{
      from: resolve('src/img'),
      to: resolve('dist/img'),
      toType: 'dir'
    }])
  ]
}