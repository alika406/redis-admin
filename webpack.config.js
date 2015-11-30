module.exports = {
    entry: {
	   index:"./assets/javascripts/index.js"
    },
    output: {
        filename: "./public/javascripts/[name]-bundle.js"
    },
module: {
        loaders: [
            { test: /\.scss$/, loader: 'style!css!sass!autoprefixer?{browsers:["> 5%", "ie >= 8", "Firefox < 20"]}' },
            { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ }
        ]
    }
};
