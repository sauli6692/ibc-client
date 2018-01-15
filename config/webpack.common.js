var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const extractLess = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: {
                        configFileName: helpers.root('src', 'tsconfig.json')
                    }
                }, 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    // use style-loader in development
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }]
                }),
                exclude: helpers.root('src', 'app')
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    fallback: 'raw-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }]
                }),
                include: helpers.root('src', 'app')
            }
        ]
    },

    plugins: [
        extractLess,
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
