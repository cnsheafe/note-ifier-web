const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')

const srcPath = path.resolve(__dirname, 'src')

module.exports = merge(common, {
    mode: 'production',
    entry: path.join(srcPath, 'index.tsx'),
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: srcPath
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader?modules',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:7]',
                        }
                    }, 
                    'sass-loader?modules',
                ],
                include: srcPath
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
        })
    ]
})