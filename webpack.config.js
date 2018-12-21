var path = require( 'path' )

module.exports = {
    mode : 'production',
    entry : './src/index.js',
    output : {
        filename : 'app.js',
        path : path.resolve( __dirname, 'dist/assets/js' )
    },
    module : {
        rules : [
            {
                test : /(\.jsx|\.js)$/,
                loader : 'babel-loader',
                options : {
                    babelrc: false,
                    presets : [ '@babel/env', '@babel/react' ]
                }
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options : {
                    outputPath : function( url, resourcePath, context ) {
                        if( /\.(png|jpg|gif)/.test( resourcePath ) ) 
                            return '../images/' + url
                        else if( /\.(svg|eot|ttf|woff|woff2)$/.test( resourcePath ) ) 
                            return '../fonts/' + url
                        else 
                            return './'
                    },
                    publicPath : function( url, resourcePath, context ) {
                        if( /\.(png|jpg|gif)/.test( resourcePath ) ) 
                            return './assets/images/' + url
                        else if( /\.(svg|eot|ttf|woff|woff2)/.test( resourcePath ) ) 
                            return './assets/fonts/' + url
                        else
                            return './assets'
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
} 
