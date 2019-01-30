const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {            
        open: true
      },
      module: {
        rules: [
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'less-loader'],
              publicPath: '../'
            }),
          },
          {
            test: /\.(svg|png|woff|ttf|eot|woff2)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[folder]/[name].[ext]',                  
                },
              },
            ],
          },
        ],
      },
    
      plugins: [
        new ExtractTextPlugin('style/main.css'),
        new HtmlWebpackPlugin({
          template: './src/index.html',      
        }),        
      ]
};