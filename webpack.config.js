const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/script/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
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
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
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
                    to: path.resolve(__dirname, 'dist/src/image')
                },
                {
                    from: path.resolve(__dirname, './pages'),
                    to: path.resolve(__dirname, 'dist/pages')
                },
                {
                    from: path.resolve(__dirname, './sw.js'),
                    to: path.resolve(__dirname, './dist/')
                },
                {
                    from: path.resolve(__dirname, './nav.html'),
                    to: path.resolve(__dirname, './dist/')
                },
                {
                    from: path.resolve(__dirname, './fav-icon.jpg'),
                    to: path.resolve(__dirname, './dist/')
                },
                {
                    from: path.resolve(__dirname, './manifest.json'),
                    to: path.resolve(__dirname, './dist/')
                },
                {
                    from: path.resolve(__dirname, './images/icons'),
                    to: path.resolve(__dirname, './dist/images/icons')
                },
            ],
        }),
    ],
};