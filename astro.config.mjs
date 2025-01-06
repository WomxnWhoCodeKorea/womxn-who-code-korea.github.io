import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'WWC Korea',
			social: {
				github: 'https://github.com/wwc-korea',
				twitter: 'https://x.com/WWCKorea',
				instagram: 'https://instagram.com/wwckorea',
				facebook: 'https://www.facebook.com/wwcodeseoul',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
