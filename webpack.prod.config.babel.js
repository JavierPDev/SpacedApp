import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import config from './webpack.config.babel';
import { production as env } from './environments.json';

config.output = {
  path: './dist/',
  filename: 'bundle.js'
};

// Minify css
config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?minimize!autoprefixer-loader'
  )
});
config.module.loaders.push({
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?minimize!autoprefixer-loader!sass-loader'
  )
});

// Strip debug code from js in addition to usual DI and, babel, and linting
config.module.loaders.push({
  test: /(\.js$)|(\.jsx$)/,
  loader: 'strip-loader?strip[]=debug,strip[]=console.log!babel-loader'
});

// Minify js without mangling globals
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  },
  mangle: {
    except: ['$super', '$', 'exports', 'require']
  }
}));

// Set environment variables for google calendar oauth api
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'GOOGLE_OAUTH_CLIENT_ID': JSON.stringify(env.GOOGLE_OAUTH_CLIENT_ID),
    'NODE_ENV': JSON.stringify('production')
  }
}));

export default config;
