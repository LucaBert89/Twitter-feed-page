const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    entry:".js/script.js",
    mode:"production",
    output:{
        filename:"main.js",
        path :path.resolve(__dirname,"dist")
    },
    plugins: [
        new Dotenv({
            systemvars: true
        })
      ]
  };