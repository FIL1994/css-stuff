const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    contentBase: "./"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin("styles.css")
    ]
};
