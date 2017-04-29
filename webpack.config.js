var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = function (env){
  let isProd = env && env.production;

  const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: !isProd
});

  let entryDev = [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js',
    // the entry point of our app
  ];

  let entryProd = './src/index.js';

  let outputDev = {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  };

  let outputProd = {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  };

  let plugins = [];
  if(isProd){
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }));
  }else{
    plugins.push(new webpack.HotModuleReplacementPlugin()); // enable HMR globally
    plugins.push(new webpack.NamedModulesPlugin()); // prints more readable module names in the browser console on HMR updates
    plugins.push(new webpack.NoEmitOnErrorsPlugin()); // do not emit compiled assets that include errors
  }

  plugins.push(new HtmlWebpackPlugin({
    template: './index.html',
    inject: true
  }));

  plugins.push(extractSass);

  return {
  entry: isProd ? entryProd : entryDev,

  output: isProd ? outputProd : outputDev,

  devtool: isProd ? 'source-map' : 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            'babelrc': false, // prevent conflicts with .babelrc used by Jest tests
            'presets': [
              ['es2015', {'modules': false}],
              'stage-2',
              'react'
            ],
            'plugins': [
              'react-hot-loader/babel'
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
          use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: ['css-loader']
          })
      },
      {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader", options: {
                    sourceMap: true
                  }
                }, {
                    loader: "sass-loader", options: {
                    sourceMap: true
                  }
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
      },
      { test: /\.(ttf.*|eot.*|woff.*|ogg|mp3)$/, loader: 'file-loader'},
      { test: /.(png|jpe?g|gif|svg.*)$/, loader: 'file-loader!img-loader?optimizationLevel=7&progressive=true'}
    ]
  },

  plugins: plugins,

  devServer: {
    contentBase: 'assets',
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
};
