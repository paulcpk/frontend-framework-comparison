import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'bulma': path.resolve(__dirname, 'node_modules/bulma')
		}
	},
	server: {
		port: 3000,
		hot: true
	}
};

export default config;
