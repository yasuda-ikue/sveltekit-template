import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	preprocess: vitePreprocess(),
	kit: {
		// adapter-static only supports static site generation, see https://svelte.dev/docs/kit/adapter-static for more information.
		// If your environment requires server-side rendering, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
      pages: 'out',
      assets: 'out',
      fallback: '404.html', // SPAモードを併用する場合に推奨
      precompress: false,
      strict: true,
    })
	}
};

export default config;
