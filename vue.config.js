const { defineConfig } = require('@vue/cli-service');
const { DefinePlugin } = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    extract:false
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:3000'
      }
    }
  },
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
  },
})


