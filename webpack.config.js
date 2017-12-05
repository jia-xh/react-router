module.exports = {
    entry: './main.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [//loader: 'style-loader!css-loader'
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules!postcss-loader"
            },
        ]
    }
}
