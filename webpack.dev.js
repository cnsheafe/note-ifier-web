const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const common = require('./webpack.common')

const srcPath = path.resolve(__dirname, 'src')

module.exports = merge(common, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(srcPath, 'index.tsx')
    ],
    devtool: 'eval-source-map',
    devServer: {
        host: 'localhost',
        hot: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                }],
                include: srcPath
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/ ]),
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            checkSyntaticErrors: true,
            watch: ['./src']
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
        })
    ]
})