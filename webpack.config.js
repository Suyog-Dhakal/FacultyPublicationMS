const path = require("path");

module.exports = {
  entry: ["regenerator-runtime/runtime.js", "index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000/",
      },
    },
    liveReload: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2016",
        },
      },
    ],
  },
};
