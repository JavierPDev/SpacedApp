import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import config from './webpack.config.babel';
import { development as env } from './environments.json';

config.output = {
  path: './dist/',
  publicPath: '/',
  filename: 'bundle.js'
};

config.devServer = {
  contentBase: 'dist',
  historyApiFallback: true
};

// Output sourcemaps
config.devtool = 'source-map';
config.module.loaders.push({
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?sourceMap!autoprefixer-loader!sass-loader?sourceMap'
  )
});

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader!autoprefixer-loader'
  )
});

config.module.loaders.push({
  test: /(\.js)|(\.jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

// Set environment variables for google calendar oauth api
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'GOOGLE_OAUTH_CLIENT_ID': JSON.stringify(
      process.env.GOOGLE_OAUTH_CLIENT_ID || env.GOOGLE_OAUTH_CLIENT_ID
    )
  }
}));

module.exports = config;
