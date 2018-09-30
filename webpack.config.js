const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin('stylesheets/styles.css');

module.exports = {
  entry: [
    path.join(__dirname, './src/index.js'),
    path.join(__dirname, './src/scss/main.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ])
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [ 
    new ExtractTextPlugin({
      filename: 'css/styles.css'
    })
  ]
}