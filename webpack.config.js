module.exports = {
    mode: "development",
  
    entry: "./src/index.tsx",
  
    output: {
      filename: "main.js",
      path: __dirname + "/dist",
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
      ],
    },

    include: [
      "./src/**/*"
    ],
    exclude: [
      "./node_modules/**/*"
    ],

    // webpack-dev-server setting
    devServer: {
      contentBase: './',
      publicPath: '/dist',
    },
  }
  