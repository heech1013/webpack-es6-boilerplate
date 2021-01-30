const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    /** path: a place where bundle files are saved. */
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
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
         * ts-loader should executed first, then babel-loader. */
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
      /** webpack 5 - "Asset Modules"
       * type "asset/resource": emits a seperate file ans exports the URL. Previously achievable by using 'file-loader'.
       * type "asset/inline": exports a data URL of the asset. Previously achievable by using 'url-loader'.
       * type "asset": automatically chooses btwn exporting a data URL and emmitting a separate file.
         Previously achievable by using 'url-loader' with asset size limit. */
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    /** Copies individual files or entire directories, which already exist, to the build directory.
     * Because webpack doesn't parse HTML, it won't pick up images in <img> tag. */
    new CopyPlugin({
      patterns: [{ from: "src/assets", to: "" }],
    }),
  ],
  // webpack-dev-server setting
  devServer: {
    contentBase: "./",
    publicPath: "/dist",
    /** writeToDisk: let webpack-dev-server to write files to the output directory during development. */
    writeToDisk: true,
  },
};
