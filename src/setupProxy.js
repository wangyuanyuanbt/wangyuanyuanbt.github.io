

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/user/botuLogin', {
        target: 'https://mall-uat.botu.com/',
        changeOrigin: true
    }));
};
