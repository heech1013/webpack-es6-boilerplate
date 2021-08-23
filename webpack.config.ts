const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["./src", "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "" }],
    }),
  ],
  devServer: {
    contentBase: "./",
    publicPath: "/dist",
    writeToDisk: true,
  },
};
