const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/index.tsx', './src/sass/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', 'jsx', 'js']
    },

    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //     presets: ['@babel/preset-env']
        //     }
        //   }
        // },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader'
          },
          include: [path.join(__dirname, 'src')],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader', 'css-loader', 'sass-loader' 
          ]
        }, {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        }, {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]

    // plugins: [
    //   new CleanWebpackPlugin(),
    //   new HtmlWebpackPlugin({
    //     template: 'index.html'
    //   }),
    //   new MiniCssExtractPlugin({
    //     filename: 'style.css'
    //   })
    // ]
  }

  return config;
}