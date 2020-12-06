const withLess = require('@zeit/next-less')

module.exports = withLess({
    // assetPrefix: '/landing-page/',
    // basePath: '/landing-page',

    lessLoaderOptions: {
        javascriptEnabled: true,
    },
});
