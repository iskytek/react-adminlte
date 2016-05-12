import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import LessCleanCSS from 'less-plugin-clean-css';
import path from 'path';
import webpack from 'webpack';

/* eslint no-console: 0 */

/**
 * Get the build environment. Expected values are "production", "test", and
 * "development". The default is "production".
 */
const ENV = process.env.NODE_ENV || 'production';
if (ENV !== 'production' && ENV !== 'test' && ENV !== 'development') {
    console.error(ENV + ' is not a valid environment type');
    process.exit(1);
}

/**
 * Config
 * Reference: http://webpack.github.io/docs/configuration.html
 * This is the object where all configurations live
 */
let config = {};

/**
 * Context
 * Reference: http://webpack.github.io/docs/configuration.html#context
 * This is the base directory that everything uses as a reference
 */
config.context = __dirname;

const srcDir = path.resolve(__dirname, 'src');
const examplesDir = path.join(srcDir, 'examples');
const nodeDir = path.resolve(__dirname, 'node_modules');
const skinsDir = path.join(nodeDir, 'admin-lte', 'build', 'less', 'skins');
const skinColors = ['black', 'blue', 'green', 'purple', 'red', 'yellow'];

function getSkinStylesheets(color) {
    const sourceBase = path.join(skinsDir, `skin-${color}`);
    const outputBase = `react-adminlte-skin-${color}`;

    let stylesheets = {};
    stylesheets[outputBase] = `${sourceBase}.less`;
    stylesheets[`${outputBase}-light`] = `${sourceBase}-light.less`;

    return stylesheets;
}

/**
 * Entry
 * Reference: http://webpack.github.io/docs/configuration.html#entry
 * This is where all entry points live
 */
config.entry = Object.assign({
    'react-adminlte': [
        path.join(srcDir, 'index.js'),
        path.join(nodeDir, 'bootstrap', 'dist', 'css', 'bootstrap.css'),
        path.join(nodeDir, 'admin-lte', 'dist', 'css', 'AdminLTE.css')
    ],
    'react-adminlte-skin-all': path.join(skinsDir, '_all-skins.less'),
    'examples-buttons': path.join(examplesDir, 'buttons.jsx')
}, skinColors.reduce((skins, color) => {
    return Object.assign(skins, getSkinStylesheets(color));
}, {}));

/**
 * Output
 * Reference: http://webpack.github.io/docs/configuration.html#output
 * This is how we configure the output for webpack
 */
config.output = {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'react-adminlte',
    libraryTarget: 'umd',
    umdNamedDefine: true
};

/**
 * Module
 * Reference: http://webpack.github.io/docs/configuration.html#module
 * Configuration how modules are loaded
 */
config.module = {
    /**
     * Preloaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
     * Configures how we pre-process/post-process modules
     */
    preLoaders: [
        /**
         * ESLint Loader
         * Reference: https://github.com/MoOx/eslint-loader
         * Checks JS code for common JS problems
         */
        {
            test:    /\.jsx?$/,
            exclude: /node_modules/,
            loader:  'eslint',
            query:   {
                emitError:     true,
                failOnWarning: true
            }
        },

        /**
         * JSCS Loader
         * Reference: https://github.com/unindented/jscs-loader
         * Checks that the JS code matches the style guide
         */
        {
            test:    /\.jsx?$/,
            exclude: /node_modules/,
            loader:  'jscs'
        }
    ],

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * Configures how modules are loaded and processed
     */
    loaders: [
        /**
         * Babel Loader
         * Reference: https://github.com/babel/babel-loader
         * Transpiles Javascript files from ES6/ES7/React to ES5
         */
        {
            test:    /\.jsx?$/,
            loader:  'babel',
            exclude: /node_modules/
        },

        /**
         * Less Loader
         * Reference: https://github.com/webpack/less-loader
         * Reference: https://github.com/webpack/css-loader
         * Reference: https://github.com/webpack/style-loader
         * Transpiles Less files to CSS
         */
        {
            test:    /\.less$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css!postcss!less'
            )
        },

        /**
         * CSS Loader
         * Reference: https://github.com/webpack/css-loader
         * Reference: https://github.com/webpack/style-loader
         * Loads CSS modules
         */
        {
            test:    /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'css!postcss'
            )
        },

        /**
         * Asset Loader
         * Reference: https://github.com/webpack/file-loader
         * Allow loading of file assets via JavaScript
         */
        {
            test:   /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
        }
    ],

    noParse: [
        'react',
        'react-dom'
    ]
};

/**
 * Resolve
 * Reference: http://webpack.github.io/docs/configuration.html#resolve
 * Configuration for how modules are resolved
 */
config.resolve = {
    /**
     * Root
     * Reference: http://webpack.github.io/docs/configuration.html#resolve-root
     * Root absolute directory of project modules
     */
    root: path.resolve('.', 'src'),

    /**
     * Modules Directories
     * Reference: http://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
     * Directories to search through for modules
     */
    modulesDirectories: [
        'web_modules',
        'node_modules',
        'src'
    ],

    /**
     * Extensions
     * Reference: http://webpack.github.io/docs/configuration.html#resolve-extensions
     * The extensions for JavaScript modules to load
     */
    extensions: ['', '.js', '.jsx']
};

/**
 * Externals
 * Reference: http://webpack.github.io/docs/configuration.html#externals
 * Mark external dependencies that should not be resolved by webpack
 */
config.externals = {
    react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
    },
    'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
    }
};

/**
 * Less Plugins
 * Reference: https://github.com/webpack/less-loader#less-plugins
 * Plugins for the Less compiler
 */
config.lessLoader = {
    lessPlugins: [
        /**
         * Reference: https://github.com/less/less-plugin-clean-css
         * Applies simple optimizations to Less files
         */
        new LessCleanCSS({advanced: true})
    ]
};

/**
 * PostCSS
 * Reference: https://github.com/postcss/autoprefixer-core
 * Add vendor prefixes to CSS
 */
config.postcss = [
    autoprefixer({
        browsers: ['last 2 versions']
    })
];

/**
 * JSCS
 * Reference: https://github.com/jscs-dev/node-jscs
 * Configures how JSCS checks the Javascript code
 */
config.jscs = {
    disallowKeywordsOnNewLine: [],
    emitErrors:                true,
    failOnHint:                true,
    fileExtensions:            ['.js', '.jsx'],
    preset:                    'google',
    validateIndentation:       4,
    validateQuoteMarks:        {
        escape:    true,
        mark:      '\'',
        ignoreJSX: true
    }
};

/**
 * Plugins
 * Reference: http://webpack.github.io/docs/configuration.html#plugins
 * Webpack plugins (see http://webpack.github.io/docs/list-of-plugins.html)
 */
config.plugins = [
    /**
     * Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
     * Only emit files when there are no errors
     */
    new webpack.NoErrorsPlugin(),

    /**
     * Reference: http://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
     * Orders chunk by how often they are requested in modules
     */
    new webpack.optimize.OccurrenceOrderPlugin(),

    /**
     * Reference: https://github.com/webpack/extract-text-webpack-plugin
     * Extracts stylesheets into seperate files
     */
    new ExtractTextPlugin('[name].css')
];

if (ENV === 'production') {
    config.plugins.push(
        /**
         * Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         * Minify all JavaScript that is emitted
         */
        new webpack.optimize.UglifyJsPlugin()
    );
}

export default config;

