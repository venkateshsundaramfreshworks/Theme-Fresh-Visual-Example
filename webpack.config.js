const path = require('path');

const config = {
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       historyApiFallback: true,
       port: 8082
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
    },
    module: {
       loaders: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
             }
          },
          {
            test: /\.s?css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
       ]
    }
 }
 module.exports = config;