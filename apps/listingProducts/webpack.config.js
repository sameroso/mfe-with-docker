const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

ENTRY_PATH = path.resolve(__dirname, "./index")
DIST_PATH = path.resolve(__dirname, "dist")

module.exports = {
    mode: 'production',
    output: {
        path: DIST_PATH,
        filename: "[name].[contenthash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new MiniCssExtractPlugin()
    ],
    devtool: "inline-source-map",

}