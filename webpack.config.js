module.exports = {
	entry: {
		App: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: "./app/temp/scripts",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, /*tells webpack we only want babel plugin to be applied to js files*/
				exclude: /node_modules/ /*not all our js files need to be converted by babel*/
			}
		]
	}
}