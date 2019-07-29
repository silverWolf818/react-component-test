import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';

const external = ['react', 'prop-types'];
const outputTypes = [
    {file: './dist/es/index.js', format: 'es'},
];

const tasks = outputTypes.map(output => ({
    input: './src/index.js',
    external,
    output,
    name: 'my-library',
    plugins: [
        resolve(),
        filesize(),
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        })
    ],
}));

export default tasks;
