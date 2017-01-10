var path    = require('path');
var webpack = require('webpack')

module.exports = {
    entry:  './assets/js/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		publicPath: '/build/',
		filename: 'app.js'
	},
    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
};
