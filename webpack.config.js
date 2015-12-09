var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    // addVendor: function (type, name, path) {
    //     var vendors = [];
    //     this.resolve.alias[name] = path;
    //     this.module.noParse.push(new RegExp('^' + name + '$'));
    //     if (type === 'js'){
    //         vendors.push(name);
    //         this.entry.vendors = vendors;
    //     }
    // },
    entry: {
	   index:"./assets/javascripts/index.jsx",
       style:"./assets/stylesheets/style.js",
       // vendors: "./assets/stylesheets/vendors.js",
    },
    output: {
        filename: "./public/javascripts/[name]-bundle.js"
    },
    resolve: {
        alias: {}
    },
    module: {
        noParse:[
            // new RegExp("./assets/stylesheets/vendors.js"),
            // new RegExp("./assets/stylesheets/scss/reset.css"),
            // new RegExp("./assets/stylesheets/scss/bootstrap.min.css"),
        ],
        loaders: [
            // { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", 'css-loader') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", 'css-loader!sass-loader!autoprefixer-loader?{browsers:["> 5%", "ie >= 8", "Firefox < 20"]}') },
            { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|bower_components)/ }
        ]
    },
    plugins : [
        new ExtractTextPlugin('./public/stylesheets/[name].css')
    ]
};

module.exports = config;
