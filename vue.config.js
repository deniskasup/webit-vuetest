module.exports = {
    // runtimeCompiler: true,
    // devServer: {
    //     proxy: {
    //         "^/api/": {
    //             target: "https://shop.anyprinter.ru/api/",
    //             changeOrigin: true,
    //             pathRewrite: {'^/api/': ''}
    //         },
    //     },
    // },
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "~@/assets/sass/base/_utils.sass"',
            },
        },
    },

    configureWebpack: {
        devtool: "source-map",
    },
}
