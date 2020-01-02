const {VueLoaderPlugin} = require('vue-loader');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let path = require('path');
module.exports = {
    mode: 'development',

    entry: [
        './src/main.js'
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'public'),
    //     compress: true,
    //     port: 9000
    // },
    output: {
        filename: './js/app.js',
        path: path.resolve(__dirname, 'public/assets/')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|webp)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `[name].[ext]`,
                        // Output into parent folder's directory
                        outputPath: "./img",
                    }
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './app.css',
            //path: path.resolve(__dirname, 'public/assets/css/')
        }),
        new VueLoaderPlugin()
    ]
}