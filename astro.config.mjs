// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

// https://astro.build/config
export default defineConfig({

	  site: 'https://dantehalfeye.github.io',
  	  base: '/PerformativeProject/',



	integrations: [
		starlight({
			plugins: [starlightCatppuccin({dark: { flavor: "mocha", accent: "red" }, light: { flavor: "latte", accent: "flamingo" }, }),],
			logo: {src: './src/assets/Pokemon.png'},
			title: 'Performative',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DanteHalfeye/PerformativeProject' }],
			sidebar: [
				{
					label: 'Logs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Idea 1', link: 'logs/idea1' },
						{ label: 'Idea 2', link: 'logs/idea2' },
						{ label: 'Musical Exploration', link: 'logs/musicalexploration' },
					],
				},
				{
					label: 'References',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'References', link: 'references/references' },
					
					],
				},
				/*{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/test' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},*/
			],
		}),
	],
});
