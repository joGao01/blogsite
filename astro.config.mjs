// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { unified } from "@astrojs/markdown-remark";
import rehypeBlogImages from './src/markdown-plugins/rehype-blog-images.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({
			rehypePlugins: [rehypeBlogImages],
		}),
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'IM FELL DW Pica SC',
			cssVariable: '--font-im-fell-dw',
			fallbacks: ['serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/IMFellDWPicaSC-Regular.ttf'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'Cuprum',
			cssVariable: '--font-cuprum',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/Cuprum-VariableFont_wght.ttf'],
						weight: '400 700',
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
