const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPLugin = require("@pmmmwh/react-refresh-webpack-plugin")

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports= {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? "eval-source-map" : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'), 
  output: { 
    path: path.resolve (__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot:true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins:[
    isDevelopment && new ReactRefreshWebpackPLugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ].filter(Boolean),
  module: { 
    rules:[ 
      {
        test: /\.(j|t)sx$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        } 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },   
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use:['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}