const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type:
          process.env.NODE_ENV === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  mode: process.env.NODE_ENV || 'development',
  target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web',

  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    // Plugin for aliases
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })],
  },

  // For detecting errors in code not in the bundle
  devtool: 'source-map',

  devServer: {
    hot: true,
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
