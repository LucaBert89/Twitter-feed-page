const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry:"./src/js/script.js",
    module: {
        rules: [
            {
                test: /.*\.js$/,
                use: ["babel-loader"]
            },  
            {
                test: /test\.js$/,
                use: 'mocha-loader',
              },
            {
                test: /\.scss$/,
                use: [
                    // MINICSSPLUGIN: generate a style.css file inside dist folder with better performance (not through js). I added the public path because of an error
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options : {
                            publicPath:"./"
                        },
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    }
                ],
            }
        ]
    },
    
    
    output:{
        filename:"main.js",
        path :path.resolve(__dirname,"dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
          }),
        new Dotenv({
            systemvars: true
        })
      ]
  };