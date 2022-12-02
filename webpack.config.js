"use strict";

const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "ui-lib"
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
    "@": path.resolve(__dirname, "src/"),
   }
  },
  externals: {
      react: "react"
  }
};