"use strict";

const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    // path: path.resolve("build"),
    filename: "index.ts",
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
    extensions: [".ts", ".tsx", ".js"]
  }
};