const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ],
    resolve: {
      alias: {
        "assets": "@/assets",
        "components": "@/components",
        "views": "@/views",
        "utils": '@/utils',
        "api": "@/api",
        "router": "@/router",
        "store": '@/store'
      }
    }
  }
}