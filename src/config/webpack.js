const webpack = require('webpack')

module.exports = {
	entry: './src/react/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node-modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: `${__dirname}/../../build/public/assets`,
		filename: 'react-bundle.js'
	},
	devServer: {
		contentBase: './src/view',
		publicPath: '/assets'
	}
}
