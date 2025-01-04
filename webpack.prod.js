// webpack.prod.js
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  // devtool: "source-map",  Better debugging for production
  // performance: {
  //     hints: false, // Suppress performance hints
  // },
});
