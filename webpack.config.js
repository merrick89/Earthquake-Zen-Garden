const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {   
   mode: "development",
   entry: "./src/index.js",
   devServer: {
      hot:true,
      port:3000,
      compress: true,
      open: true,
      historyApiFallback: true //fallback to index.html on 404. Also allows for full page reloads to correct pages.
   },
   output: {
      path: path.resolve( __dirname,"dist"),
      filename: "bundle.js",
      publicPath: "/",
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: "./public/index.html",
         filename: "./index.html",
         favicon: "./public/favicon.ico",
         title: "Earthquake Zen Garden"
      })
   ],
   devtool: "source-map",
   module: {
      rules: [
        {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        {
            test: /\.css$/i,
            use: ["style-loader","css-loader"],
        }
      ]
   },
};