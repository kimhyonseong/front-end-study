const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  name: 'like-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client.jsx', './EndToEnd.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR','last 2 chrome versions'],
            },
            debug:true,
          }],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel'
        ]
      }
    }]
  },
  plugins: [
    //new webpack.LoaderOptionsPlugin({debug:true}),
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    devMiddleware: {
      publicPath: '/dist/',
    },
    static:{directory: path.resolve(__dirname)}, //설정 안하면 public
    hot:true
  }
};