import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
  },
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'out',
      assets: 'out',
      fallback: '404.html',
      precompress: false,
      strict: true,
    }),
    paths: {
      // サブディレクトリ化する場合に使用
      // base: process.env.NODE_ENV === 'production' ? '/2026' : '',
      base: '',
    },
  },
};

export default config;
