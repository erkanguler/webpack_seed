var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true,
        hot: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
};