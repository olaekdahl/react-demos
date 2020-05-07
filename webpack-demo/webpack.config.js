module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

// const config = {
//     target: 'web',
//     // entry: './index.js',
//     output: {
//       filename: '[name].bundle.js',
//       path: __dirname + '/build',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           loader: 'babel-loader',
//           exclude: /node_modules/,
//         },
//       ],
//     },
//   };
//   module.exports = config;