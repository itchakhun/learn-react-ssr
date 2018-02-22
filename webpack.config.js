module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
  output: {
    filename: './bundle.js',
    path: `${__dirname}/public`,
  },
};
