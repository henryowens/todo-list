const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/posts": {
        target: "https://jsonplaceholder.typicode.com",
        changeOrigin: true,
      },
    },
  },
});
