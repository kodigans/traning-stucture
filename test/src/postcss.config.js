module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
    plugins: {
        'postcss-cssnext': {},
        'autoprefixer': {browsers:['ie >= 8', 'last 2 version']},
        'cssnano':  env === 'production'  ? {} : false
    }
});