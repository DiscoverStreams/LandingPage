const path = require('path');
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://interactiveviz.ku.edu/DiscoverStreams/PHP-API-DEV/get.php',
        changeOrigin: true
      },
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', path.join(__dirname, 'node_modules/vue'));
    config.resolve.alias.set('highcharts$', path.join(__dirname, 'node_modules/highcharts'));
  },
}