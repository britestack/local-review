const path = require('path');

const ENTRYDIR = path.join(__dirname, 'client');
const OUTDIR = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  watch: true,
  entry: `${ENTRYDIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: OUTDIR
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: ENTRYDIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}