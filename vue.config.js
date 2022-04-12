const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Gyru App',
    shortName: 'Gyru',
    themeColor: '#000000',
    msTileColor: '#f7c434'
  }
})
