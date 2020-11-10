const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: "development",
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                  /node_modules/,
                ],
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'React Demo',
            template: path.resolve(__dirname,'index.html'),
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        open: false,
        compress: true,
        hot: true,
        port: 8080,
    },
}