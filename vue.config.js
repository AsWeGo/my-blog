module.exports = {
  configureWebpack: {
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