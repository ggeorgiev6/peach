const mix = require('laravel-mix');

require('laravel-mix-polyfill');
const TargetsPlugin = require('targets-webpack-plugin');

require('laravel-mix-svg-vue');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.webpackConfig({
    plugins: [
        new TargetsPlugin({
          browsers: ['last 2 versions', 'chrome >= 41', 'IE 11'],
        }),
      ]});

mix.js('resources/js/app.js', 'public/js').vue().svgVue()
    .sass('resources/sass/app.scss', 'public/css')
    .polyfill({
        enabled: true,
        useBuiltIns: "usage",
        targets: {"ie": 11},
        debug: true,
        corejs: 3, 
     });
