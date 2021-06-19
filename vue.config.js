module.exports = {
  devServer: {
    port: 888,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/abstracts/_abstracts.scss";
          @import "@/assets/scss/app.scss";
        `,
      },
    },
  },
};
