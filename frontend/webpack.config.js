const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {

    const config = {};
    config.plugins = [];
    config.entry = path.resolve(__dirname, 'src/main/resources/js/app.js');
    config.output = {
        filename: 'src/main/resources/static/build.js'
    };
    config.devtool = 'source-map';

    config.devServer = {
        port: 7000,
        hot: true,
        contentBase: path.join(__dirname, 'src/main/resources/static/'),
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
                loaders: [ 'babel-loader', 'eslint-loader' ]
            }, {
                test: /\.(css|scss)$/,
                use: [ 'css-loader' ]
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192
            //             }
            //         }
            //     ]
            // }
            {
                test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/png'
                    }
                }
            }
        ]
    };

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: __dirname + '/src/main/resources/static/index.html',
        })
    );

    return config;
};