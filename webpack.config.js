var path = require('path');
module.exports = {
    watch: true,
    entry: './js/index.js',
    devtool: "source-map",
    output: {
        filename: 'bundle.js'
      }
}