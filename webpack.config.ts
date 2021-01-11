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
    // alias: { "@": path.resolve(__dirname, "src") },
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        use: ["babel-loader", "ts-loader"],
        include: /src/,
        exclude: /node_modules/,
      },
    ],
  },
  // webpack-dev-server setting
  devServer: {
    contentBase: "./",
    publicPath: "/dist",
  },
};
