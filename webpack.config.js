var path = require( 'path' )

module.exports = {
    mode : 'development',
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
            }
        ]
    }
} 
