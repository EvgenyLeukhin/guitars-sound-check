const path = require('path'); // nodejs path
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  mode: 'development',
  watch: true,
  devServer: {
    port: 8000,
    overlay: { warnings: false, errors: true }
  },
  watchOptions: { ignored: /node_modules/ },
  output: { filename: 'bundle.js' },
  devtool: 'cheap-module-source-map',


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

      // CSS // with style-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader" }
        ]
      },

      // IMAGES //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]'
          }
        }]
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

  // plugins configs
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/static/img/icons/favicon.png',
      template: __dirname + '/src/static/index.html'
    })
  ]
};
