/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: "standalone",
  webpack(config, { isServer }) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };

    config.resolve.alias["~"] = path.join(__dirname, "src");
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "sass")],
  },
};

module.exports = nextConfig;
