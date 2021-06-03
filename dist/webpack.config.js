var path = require('path');
module.exports = {
    mode: 'production',
    entry: './Client/index.ts',
    devtool: 'inline-source-map',
    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    // file resolutions
    resolve: {
        extensions: ['.ts', '.js'],
    },
    // loaders
    module: {
        rules: [
            {
                test: /.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
