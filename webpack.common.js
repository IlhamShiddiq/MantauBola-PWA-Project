const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

module.exports = {
    entry: "./src/script/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: "./index.html",
                filename: "index.html"
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/image'),
                    to: path.resolve(__dirname, 'public/src/image')
                },
                {
                    from: path.resolve(__dirname, './pages'),
                    to: path.resolve(__dirname, 'public/pages')
                },
                {
                    from: path.resolve(__dirname, './nav.html'),
                    to: path.resolve(__dirname, './public/')
                },
                {
                    from: path.resolve(__dirname, './fav-icon.jpg'),
                    to: path.resolve(__dirname, './public/')
                },
                {
                    from: path.resolve(__dirname, './manifest.json'),
                    to: path.resolve(__dirname, './public/')
                },
                {
                    from: path.resolve(__dirname, './images/icons'),
                    to: path.resolve(__dirname, './public/images/icons')
                },
            ],
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, '/sw.js')
        }),
    ],
};