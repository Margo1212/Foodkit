const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    plugins: [new MiniCssExtractPlugin(),// constructor
        
    ], 

    module: {
    rules :[
        {
            test: /\.(s[ac]|c)ss$/i, //scss or css!! start with "s" if error ==> start with "c"
            use: [MiniCssExtractPlugin.loader, 
                  "css-loader", 
                  "sass-loader", 
                  "postcss-loader",   
            ],

        },
    ],
},

devtool: 'source-map',

};