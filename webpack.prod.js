const path = require('path'); // nodejs path
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// Entry and output
const paths = {
  SRC:  path.resolve(__dirname, 'src/app.js'),
  DIST: path.resolve(__dirname, 'dist')
};

// nodejs module
module.exports = {
  // ENTRY point //
  entry: paths.SRC,


  // DEV-SERVER //
  mode: 'production',
  output: { filename: 'bundle.js' },


  // OUTPUT (where save compiled data) //
  output: {
    path: paths.DIST,
    publicPath: '' // src="publicPath/bundle.js"
  },


  // common configs + aliases
  resolve: {
    extensions: ['.js', '.jsx'], // for React
    alias: {
      Routes: path.resolve(__dirname, 'src', 'js/routes'),
      Images: path.resolve(__dirname, 'src', 'static/img'),
      Styles: path.resolve(__dirname, 'src', 'static/scss'),
      Fonts:  path.resolve(__dirname, 'src', 'static/fonts'),
    }
  },


  // CONFIGS //
  module: {
    rules:  [
      // JS //
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader' },

      // CSS //
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'img/[name]-[hash:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true }
          }
        ]
      },

      // FONTS //
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' }
          }
        ]
      },
    ]
  },


  // prod configs
  optimization: {
    minimizer: [
      new WebpackBar(),
      new CleanWebpackPlugin(),                                      // remove dist/
      new CompressionPlugin({ algorithm: 'gzip' }),                  // gzip compress
      new OptimizeCSSAssetsPlugin({}),                               // min css
      new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }), // css bundle
      new UglifyJsPlugin({                                           // min js
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
      new CopyWebpackPlugin(
        [
          { from: './src/static/robots.txt', to: '' },
        ], {})
    ]
  },

  // plugins configs
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: 'src/static/img/icons/favicon.png',
      template: __dirname + '/src/static/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),

    new FaviconsWebpackPlugin({
      logo: './src/static/img/icons/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
  ]
};
