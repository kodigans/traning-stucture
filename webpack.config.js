const merge = require('webpack-merge');
const common = require('./webpack-config/webpack.common');
const build = require('./webpack-config/webpack.development');
const prod = require('./webpack-config/webpack.production');

module.exports = env => {
    if (env.production) {
        return merge(common, build);
    } else {
        return merge(common, prod)
    }
};