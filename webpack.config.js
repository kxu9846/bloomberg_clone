const path = require( 'path' );

module.exports = {
    mode: 'production',
    entry: './Client/index.ts',
    devtool: 'inline-source-map',
    // output bundles (location)
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },

    // file resolutions
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },

    // loaders
    module: {
        rules: [
            {
                test: [/.tsx?/, /\.css$/i],
                use: ['ts-loader', 'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  },],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
};
