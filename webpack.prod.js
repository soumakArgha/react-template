const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'production',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCssExtractPlugin({
            filename: './css/style.css'
        })
    ]
}