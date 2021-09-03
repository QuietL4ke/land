const colors = require('./config/colors')
const vars   = require('postcss-simple-vars')

module.exports = {
  plugins: [
    require('postcss-simple-vars')({ variables: colors })
  ]
}
