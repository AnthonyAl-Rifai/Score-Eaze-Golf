const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //should this be dashed not dotted

module.exports = {
  entry: './client/index.js', // can be an object with keys, index and another
  output: { path: path.join(__dirname, '/dist'), filename: 'index.bundle.js' }, // properties can be switched, can use path.resolve
  mode: process.env.NODE_ENV, //webpack uglifies the code if you set this to production
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    //allows us to have live reloading, in dev one server is wepback-dev-server, typically on 8080. 3000 typically handles our api backend routes
    port: '8080',
    open: true,
    hot: true,
    liveReload: true,
    static: {
      directory: path.join(__dirname, '/dist'),
      publicPath: '/',
    },
    proxy: {
      '/**': 'http://localhost:8080',
    },
  },
};
