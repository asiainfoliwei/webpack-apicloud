const path = require('path');
const os = require('os');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
function resolve(dir) {
    return path.join(__dirname, dir);
}

const entries = {};
const baseConfig = {
    entry: entries,
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': resolve('../src'),
            '@lib': resolve('../libs'),
            '@build': resolve('../build')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader?minimize',
                    'autoprefixer-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=happybabel',
                exclude: [resolve('../node_modules')]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                // exclude: [resolve('../src/static'), resolve('../dist/static')],
                loader: 'url-loader'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../src/static'),
                to: '../widget/static',
                ignore: ['.*']
            }
        ])
    ]
};

function getEntries() {
    glob.sync('./src/**/*.vue').forEach(item => {
        const path = item.slice(item.lastIndexOf('src/') + 4, item.length - 4);

        entries[path] = item;

        baseConfig.plugins.push(new htmlWebpackPlugin({
                filename: path + '.html',
                template: './index.ejs',
                chunks: [path]
        }));
    });
}
                
getEntries();

module.exports = baseConfig;