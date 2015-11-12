module.exports = {
    entry: {
	index:"./javascripts/index.js"
    },
    output: {
        filename: "./bundle/[name].js"
    },
module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!sass!autoprefixer?{browsers:["> 5%", "ie >= 8", "Firefox < 20"]}' },
            { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ }
        ]
    }
};
