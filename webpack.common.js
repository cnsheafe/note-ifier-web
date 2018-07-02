const path = require('path')

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

}