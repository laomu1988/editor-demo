/**
 * @file 前端文件打包配置
 */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV || 'dev'
const isProd = env === 'prod'
const hash = env === 'prod' ? '.[hash]' : ''
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css.css')
const extractLESS = new ExtractTextPlugin('stylesheets/[name].less.css')
 
const editors = [
    'simditor',
    'summernote',
    'tinymce',
]


const plugins = [
    extractCSS,
    extractLESS, 
    new CopyWebpackPlugin([{
        from: __dirname + '/node_modules/tinymce/',
        ignore: ['*.json','*.txt','*.md']
    }]),
].concat(editors.map(editor => {
    return new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: editor + '.html',
        chunks: [editor]
    })
}))

let entrys = {}
editors.forEach(v => {
    entrys[v] = './src/' + v + '/index.js'
})

if (isProd) {
    plugins.unshift(new UglifyJSPlugin())
}

module.exports = {
    devtool: 'inline-source-map',
    entry: entrys,
    output: {
        path: path.join(__dirname, 'docs'),
        filename: '[name]' + hash + '.js',
        chunkFilename: '[id]' + hash + '.chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: extractLESS.extract([ 'css-loader', 'less-loader' ])
            },
            {
                test: /\.css$/,
                use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
            },
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.vue$/, loader: 'vue-loader'},
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'url-loader?limit=8192&name=assets/img/[name].[ext]' + hash
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]'
            },
        ]
    },
    plugins: plugins,
    devServer: {
        port: 8099
    }
}
