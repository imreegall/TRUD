const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
              @import "/src/assets/styles/_mixins.sass"
              @import "/src/assets/styles/_variables.sass"
            `,
      },
    },
  },
})
