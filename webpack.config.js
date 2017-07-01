var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'nhs-bootstrap': './src/index.js'
  },
  output: {
    filename: '[name].js',
    path:  path.resolve(__dirname, 'dist'),
  },
  module: {
    // configuration regarding modules
    rules: [
      // rule
      { 
        test: /.(scss)$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // inject CSS to page 
          use: [
            { 
              loader: 'css-loader', // translates CSS into CommonJS modules 
            }, { 
              loader: 'postcss-loader', // Run post css actions
            }, { 
              loader: 'sass-loader' // compiles SASS to CSS 
            }
          ] 
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
};