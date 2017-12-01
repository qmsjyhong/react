const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PROT = process.env.PROT || 8000
// 多线程
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

// 提取公共文件
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      path.resolve(__dirname, '../src/main.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      loader: [ 'happypack/loader?id=js' ]
    }, {
      test: /\.less$/,
      loader: [ 'happypack/loader?id=less' ]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192&name=img/[name].[ext]?[hash]'
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      loader: 'url-loader?importLoaders=1&limit=1000&name=fonts/[name].[ext]'
    }, {
      test: /\.(xlsx|xls)(\?.*$|$)/,
      loader: 'url-loader?importLoaders=1&limit=8192&name=files/[name].[ext]'
    }]
  },
  // 自动补全识别后缀
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      commonjsx: path.resolve(__dirname, '../src/commonjsx'),
      common: path.resolve(__dirname, '../src/assets/common'),
      pages: path.resolve(__dirname, '../src/pages')
    }
  },
  plugins: [
    new HappyPack({
      id: 'js',
      threadPool: happyThreadPool,
      loaders: [{
        loader: 'babel-loader',
        options: {
          presets: [ 'env', 'react'],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }),
    // sass 编译多线程 
    new HappyPack({
      id: 'less',
      threadPool: happyThreadPool,
      loaders: [ 'style-loader', 'css-loader', 'less-loader' ]
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      template: path.resolve(__dirname, '../src/templates/index.html'),
      inject: true,
      hash: true,
      cache: true,
      chunks: ['main', 'vendors']
    // favicon: path.resolve(__dirname, '../favicon.ico')
    }),
    new ExtractTextPlugin('styles.css'),
    new CommonsChunkPlugin({
      name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
      chunks: ['main'],
      minChunks: 1 // 提取所有entry共同依赖的模块
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
