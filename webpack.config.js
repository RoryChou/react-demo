/**
 * Created by Administrator on 2017/1/17.
 */
var webpack = require('webpack');
module.exports = {
    entry: {
        bundle: './build/main.js',
        vendor: ['react','react-dom','react-router','n-zepto']
    },
    output:{
        filename:'./build/bundle.js',
        chunkFilename: "[vendor].js"
    },
    module:{
        loaders:[
            {   test:/\.jsx?$/,
                exclude: /node_modules/,
                loader:'jsx-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
    ]
}