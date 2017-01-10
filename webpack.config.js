var path    = require('path');
var webpack = require('webpack')

module.exports = {
    entry:  './assets/js/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'app.js'
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/bower_components/, /node_modules/]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
};
