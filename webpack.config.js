const merge = require('webpack-merge');
const common = require('./webpack-config/webpack.common');
const build = require('./webpack-config/webpack.development');
const prod = require('./webpack-config/webpack.production');

console.log(process.env.qwe);
module.exports = env => { 
  console.log(env.production);
  return merge(common, build) };

// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {    
//   entry: { main: './src/index.js'},
//   output: {        
//     path: path.resolve(__dirname, 'build'),
//     filename: 'main.js'
//   }, 
//   devServer: {            
//     open: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.less$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: ['css-loader', 'less-loader'],
//         }),
//       },
//       {
//         test: /\.(svg|png|woff|ttf|eot|woff2)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[folder]/[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },

//   plugins: [
//     new ExtractTextPlugin('style/main.css'),
//     new HtmlWebpackPlugin({
//       template: './src/index.html',      
//     }),        
//   ]
// }