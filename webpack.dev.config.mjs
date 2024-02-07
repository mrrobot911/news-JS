import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(import.meta.url);

const dev = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(path.dirname(__dirname), '../dist'),
    },
};
export default dev;
