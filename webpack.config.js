const merge = require('webpack-merge');
const common = require('./webpack-config/webpack.common');
const build = require('./webpack-config/webpack.development');
const prod = require('./webpack-config/webpack.production');

module.exports = env => {
  if (env.production === 'build') {
    console.log(true);
    return merge(common, build);
  }
  return merge(common, prod);
};
