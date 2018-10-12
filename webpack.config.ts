import * as path from 'path';

import * as webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(?:jpg|png)$/,
        use: ['url-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'pixi-playground',
    }),
  ],
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
  devServer: {
    noInfo: true,
    stats: 'errors-only',
    open: true,
  },
};

export default config;
