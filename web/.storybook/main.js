const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: [
        path.resolve(__dirname, "../"),
        ...require("backline-mixins").includePaths,
        ...require("backline-normalize").includePaths,
        path.join(__dirname, "../src/assets/scss/setting"),
      ],
    });

    // Add support for creating icons using inline SVGs
    config.module.rules.unshift({
      test: /\.svg$/,
      include: [path.resolve(__dirname, "../src/asset/svg/icon")],
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: { dimensions: false },
        },
      ],
    });

    // Resolve alias
    config.resolve.alias["Primitive"] = path.join(
      __dirname,
      "../src/components/Primitive"
    );
    config.resolve.alias["Common"] = path.join(
      __dirname,
      "../src/components/Common"
    );
    config.resolve.alias["lib"] = path.join(__dirname, "../src/lib");
    config.resolve.alias["Section"] = path.join(
      __dirname,
      "../src/components/Section"
    );

    // Return the altered config
    return config;
  },
};
