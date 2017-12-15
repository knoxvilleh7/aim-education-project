const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {

    const config = {};
    config.plugins = [];
    config.entry = path.resolve(__dirname, 'src/main/app/js/app.js');
    config.output = {
        path: __dirname + '/../backend/src/main/resources/public/',
        filename: 'build.js'
    };
    config.devtool = 'source-map';

    config.devServer = {
        port: 7000,
        hot: true,
        contentBase: path.join(__dirname, '/../backend/src/main/resources/public/'),
        inline: true,
        stats: 'errors-only',
        proxy: {
            '/**': {
                target: 'http://localhost:8080/',
                changeOrigin: true,
                secure: false
            }
        },
        watchOptions: {
            aggregateTimeout: 100,
            ignored: /node_modules/,
            poll: 500
        }
    };

    config.module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ 'babel-loader',
                    'eslint-loader'
                ]
            }, {
                test: /\.(css|scss)$/,
                use: [ 'css-loader' ]
            },
            {
                test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
                loaders: ['url-loader?limit=10000&mimetype=image/png']

            },
            {
                test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/,
                loaders: ['url-loader?limit=10000&mimetype=image/png']

            }
        ]
    };

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     template: __dirname + '/../src/main/resources/public/index.html',
        // })
    );

    return config;
};