const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: { main: './src/index.js'},
    output: {
        path: path.resolve(__dirname, 'content'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use:  (ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {loader: 'css-loader'},
                            {
                                loader: 'postcss-loader',
                            },
                            {loader: 'less-loader'}
                            ]
                    }))
            },
            {
                test: /\.(svg|png|otf|ttf|woff|woff2|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },


    devServer: {
        contentBase: './content'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"}),
        new ExtractTextPlugin({filename: 'style.css'})
    ]
};