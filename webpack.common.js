const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
    output: {
        filename: '[name].bundle.js',
        path: distPath,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [new CleanWebpackPlugin(['dist'])]
}