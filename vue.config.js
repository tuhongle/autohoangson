const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: process.env.NODE_ENV === "production" ? "/autohoangson/" : "/",
    pages: {
        home: {
            entry: 'src/pages/home/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'AUTO HOÀNG SƠN',
            chunks: ['chunk-vendors', 'chunk-common', 'home']
        },
        intro: {
            entry: 'src/pages/intro/main.js',
            template: 'public/index.html',
            filename: 'auto-hoang-son-trung-tam-cham-soc-oto-chuyen-nghiep.html',
            title: 'AUTO Hoàng Sơn - Chăm sóc ÔTÔ chuyên nghiệp',
            chunks: ['chunk-vendors', 'chunk-common', 'intro']
        },
        service: {
            entry: 'src/pages/service/main.js',
            template: 'public/index.html',
            filename: 'dich-vu.html',
            title: 'Dịch vụ',
            chunks: ['chunk-vendors', 'chunk-common', 'service']
        },
        dongson: {
            entry: 'src/pages/service/dongson/main.js',
            template: 'public/index.html',
            filename: 'dich-vu/dong-son-oto.html',
            title: 'Auto Hoàng Sơn - Đồng sơn',
            chunks: ['chunk-vendors', 'chunk-common', 'dongson']
        },
        detailing: {
            entry: 'src/pages/service/detailing/main.js',
            template: 'public/index.html',
            filename: 'dich-vu/detailing-oto.html',
            title: 'Auto Hoàng Sơn - Detailing',
            chunks: ['chunk-vendors', 'chunk-common', 'detailing']
        },
        maygamdien: {
            entry: 'src/pages/service/maygamdien/main.js',
            template: 'public/index.html',
            filename: 'dich-vu/may-gam-dien-oto.html',
            title: 'Auto Hoàng Sơn - Máy gầm điện',
            chunks: ['chunk-vendors', 'chunk-common', 'maygamdien']
        },
        dochoi: {
            entry: 'src/pages/service/dochoi/main.js',
            template: 'public/index.html',
            filename: 'dich-vu/do-choi-oto.html',
            title: 'Auto Hoàng Sơn - Đồ chơi',
            chunks: ['chunk-vendors', 'chunk-common', 'dochoi']
        }, 
        insurance: {
            entry: 'src/pages/insurance/main.js',
            template: 'public/index.html',
            filename: 'bao-hiem.html',
            title: 'Bảo hiểm',
            chunks: ['chunk-vendors', 'chunk-common', 'insurance']
        },
        recruit: {
            entry: 'src/pages/recruit/main.js',
            template: 'public/index.html',
            filename: 'tuyen-dung.html',
            title: 'Tuyển dụng',
            chunks: ['chunk-vendors', 'chunk-common', 'recruit']
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
