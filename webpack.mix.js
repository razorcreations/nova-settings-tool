const mix = require('laravel-mix');

mix.extend('nova', new require('laravel-nova-devtool'));

mix.setPublicPath('dist').disableNotifications();

mix.vue({ version: 3 })
    .js('resources/js/tool.js', 'js')
    .css('resources/css/tool.css', 'css', [require('tailwindcss'), require('autoprefixer')])
    .nova('bakerkretzmar/nova-settings-tool');
