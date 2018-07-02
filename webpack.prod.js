const path = require('path')
const merge = require('webpack-merge')
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
            }
        ]
    },
})