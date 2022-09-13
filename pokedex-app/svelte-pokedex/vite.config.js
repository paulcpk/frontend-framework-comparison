import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'~': path.resolve(__dirname, 'node_modules'),
		}
	},
	server: {
		port: 3000,
		hot: true
	}
};

export default config;
