import path from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'node:url';
import DotenvWebpackPlugin from 'dotenv-webpack';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseConfig = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new DotenvWebpackPlugin({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      favicon: 'favicon.ico',
    }),
    new CleanWebpackPlugin(),
  ],
};

const mergeConfigs = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? import('./webpack.prod.config.mjs') : import('./webpack.dev.config.mjs');

  return merge(baseConfig, envConfig);
};
export default mergeConfigs;
