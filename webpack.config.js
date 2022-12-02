"use strict";

const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: [{file:"dist/index.d.ts", format:"esm"}],
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