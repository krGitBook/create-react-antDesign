const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
  app.use(
    proxy(
      '/crmWeb', 
       { 
         target: 'http://admin.aixuexi.com',
         "changeOrigin": true 
        }
    ))
  app.use(
    proxy(
      '/zeus', 
      { 
        target: 'http://admin.aixuexi.com' ,
        "changeOrigin": true
      }
    ))
}