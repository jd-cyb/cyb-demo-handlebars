export default {
  webpack: {
    config: {
      externals: {
        jquery: 'jQuery'
      }
    }
  },
  merge: {
    vendor: {
      js: [{
        target: 'jquery.js',
        contain: ['**/jquery.js']
      }]
    }
  },
  proxy: {
    context: '/api',
    options: {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  }
}
