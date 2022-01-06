const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      createProxyMiddleware(['/item','/account','/category'],{
        target: 'http://localhost:3010',
        changeOrigin: true,
      })
    );
  };