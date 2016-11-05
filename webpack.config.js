var path = require("path");
var webpack = require("webpack");
var staticRoot = path.join(__dirname, './src');


module.exports = {
    entry: {
        client: [
            staticRoot + '/static/client'
        ]
    },
    output: {
        path: path.join(staticRoot,"../","build/static"),  //输出目录
        publicPath: staticRoot,        //引用目录  本地物理路径
        filename: '[name].min.js',   //输出名称
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: ['babel'],
                query: {
                    presets: [
                        "es2015",
                        "react",
                        "stage-2"
                    ],
                    plugins: [
                        'transform-runtime'
                    ]
                }
            },
            { test: /\.css|\.less$/, loader: 'style!css!less' },
            { test: /\.json$/,loader: 'json' }
        ]
    },
    resolve: {
        root: [
            staticRoot
        ],
        //配置别名
        alias: [],
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.jsx','.es6','.es'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
        })
    ]
};
