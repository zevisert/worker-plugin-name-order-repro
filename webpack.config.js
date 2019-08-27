const path = require('path');
const WorkerPlugin = require('worker-plugin');

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }, 
  plugins: [
    new WorkerPlugin({
      globalObject: 'self'
    })
  ]
};
