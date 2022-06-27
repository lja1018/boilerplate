const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
    },
    devServer: {
      compress: true,
      open: true,
      hot: true,
      static: {
        directory: path.join(__dirname, 'example'),
      },
    },
  };
};
