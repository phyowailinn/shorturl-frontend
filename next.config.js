const withCss = require("@zeit/next-css");
const withScss = require("@zeit/next-sass");

module.exports = withCss(
  withScss({
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            publicPath: "./",
            outputPath: "static/css/",
            name: "[name].[ext]",
          },
        },
      });
      return config;
    },
    env: {
      APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
  })
);

