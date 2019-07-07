const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'main': path.resolve(__dirname, './src/main.js'),
        'app': path.resolve(__dirname, './src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            publicPath: '../assets/',
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[id].css',
        }),
    ],
}