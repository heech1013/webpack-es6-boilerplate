const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        /** loader executed sequentially from end of array.
         * ts-loader should executed first, then babel-loader.
         */
        use: ["babel-loader", "ts-loader"],
        include: /src/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // webpack-dev-server setting
  devServer: {
    contentBase: "./",
    publicPath: "/dist",
  },
};
