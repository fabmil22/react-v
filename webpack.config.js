const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluin = require('mini-css-extract-plugin');



module.exports = {
    entry : './src/index.js',
   output:{
       path: path.resolve(__dirname,'dist'),
       filename: 'bundle.js'
   },
   resolve:{
       extensions: [ '.js','.jsx']
   },
   module: {
       rules: [{
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: {
               loader: "babel-loader"
                }
            },
           {
            test: /\.html$/, 
            use : [
                {
                loader : 'html-loader'
                }
        ]
           },
           {
            test: /\.(s*)css$/, 
            use : [
                {
                loader : MiniCssExtractPluin.loader,
                },
                'css-loader',
                'sass-loader',
                {
                    loader: "resolve-url-loader",
                    options: {}
                  }
        ]
           },
           {
            test: /\.(png|gif|jpg)$/,
            use: [
              {
                loader: 'file-loader',
                options: { name: 'assets/[hash].[ext]' },
              }
            ],
          },
       
    ]
   },
   devServer:{
       historyApiFallback: true
   },
   plugins: [
       new HtmlWebPackPlugin({
           template: './public/index.html',
           filename: './index.html'
       }),
       new MiniCssExtractPluin({
           filename: 'assets/[name].css'
       })
   ]



}