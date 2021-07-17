const path = require("path");

module.exports = {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    SECRET_KEY: "56c0dab7-c0eb-4247-a230-0ca8280c7b59",
    MONGODB_CONNECTION_STRING:
      "mongodb+srv://jchable:bF04GsBXbK7HUF7G@cluster0.xxalf.mongodb.net/jk-infinity",
  },
};
