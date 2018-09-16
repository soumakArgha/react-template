const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
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
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/'
                    }
                }]
            }
        ]
    },
    devServer: {
        open: false,
        inline: true,
        port: 5000,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}