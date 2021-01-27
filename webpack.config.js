const path = require("path");
const webpack = require("webpack");

const pluginSyntaxClassProprties = require("@babel/plugin-syntax-class-properties")
  .default;

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  stats: {
    colors: true,
  },
  devtool: "source-map",
};
