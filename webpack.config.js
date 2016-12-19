module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		path: "./app/temp/scripts",
		filename: "app.js"
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