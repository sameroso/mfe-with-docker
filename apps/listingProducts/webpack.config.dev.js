const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

ENTRY_PATH = path.resolve(__dirname, "./index")
DIST_PATH = path.resolve(__dirname, "dist")

module.exports = {
    mode: 'development',
    target:'web',
    output: {
        path: DIST_PATH,
        filename: "[name].[contenthash].js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
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
    ],
    devtool: "inline-source-map",
    devServer: {
        static: DIST_PATH,
        hot: true,
         allowedHosts: "all"
    },
}