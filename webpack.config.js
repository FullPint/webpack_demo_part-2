const path = require('path')
const webpack = require('webpack')

const PATHS = {
  build: path.join(__dirname, 'build'),
  src: path.join(__dirname, 'src')
}

module.exports = {
  entry: {
    src: PATHS.src
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css' }
    ]
  }
}
