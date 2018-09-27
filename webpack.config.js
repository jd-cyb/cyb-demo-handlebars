module.exports = {
  module: {
    rules: [{
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }]
  },
  externals: {
    jquery: 'jQuery'
  }
}
