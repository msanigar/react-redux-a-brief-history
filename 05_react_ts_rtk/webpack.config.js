/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 9000
  }
};
