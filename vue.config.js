const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === "production" ? "/autohoangson/" : "/",
    pages: {
        home: {
            entry: 'src/pages/home/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'AUTO HOÀNG SƠN',
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        contact: {
            entry: 'src/pages/contact/main.js',
            template: 'public/index.html',
            filename: 'contact.html',
            title: 'Liên hệ',
            chunks: ['chunk-vendors', 'chunk-common', 'contact']
        },
    },
})
