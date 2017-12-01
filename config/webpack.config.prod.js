// 生产环境
var webpack = require('webpack')
var config = require('./webpack.config.base')
var path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

// 项目名字
var projectName = '/'

// 生成生产环境目录
config.output.path = path.resolve(__dirname, '../dist')
config.output.filename = '[name].[hash].js',
config.output.chunkFilename = '[name].[hash].js'

// 插件
config.plugins = (config.plugins || []).concat([
  // 清除上一次生成的文件
  new CleanWebpackPlugin(['production'], {
    root: path.resolve(__dirname, '../dist'),
    verbose: true,
    dry: false
  }),
  // 多线程压缩
  new ParallelUglifyPlugin({
    // 支持es6打包
    uglifyES: {
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin()
])

module.exports = config
