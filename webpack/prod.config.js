const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const YAML = require('yamljs');
const APP_CONFIG = YAML.load(__dirname + '/../config.yml').production;
const HTML_CONFIG = {
  inject: false,
  APP_CONFIG: APP_CONFIG,
  buildTime: new Date() 
}

module.exports = {
  devtool: 'source-map',

  entry: ['./src/index'],

  output: {
    publicPath: APP_CONFIG.assetOrigin + '/'
  },

  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      use: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: ["css-loader", "postcss-loader", "sass-loader"]
      }),
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
      APP_CONFIG: JSON.stringify(APP_CONFIG)
    }),
    new HtmlWebpackPlugin(Object.assign({}, HTML_CONFIG, {
      template: 'index.ejs',
      filename: 'index.html',
    })),
    new HtmlWebpackPlugin(Object.assign({}, HTML_CONFIG, {
      template: 'index.ejs',
      filename: '404.html',
    })),
    new ExtractTextPlugin({
      filename: 'bundle.css'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
      },
    })
  ],
};
