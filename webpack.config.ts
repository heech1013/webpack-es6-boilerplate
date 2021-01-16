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
    /** enable to resolve file without extension. */
    extensions: [".ts", ".tsx", ".js"],
    /** search modules from beginning of array. */
    modules: ["./src", "node_modules"],
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  // webpack-dev-server setting
  devServer: {
    contentBase: "./",
    publicPath: "/dist",
  },
};
