var webpack = require('webpack')
var path    = require("path");

module.exports = {
    entry: {
	   app: ["main.js" ]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/assets/js/",
		filename: "app.js"
	},
    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
};
