// import { defineNuxtConfig } from 'nuxt/config';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// devtools: { enabled: true },
	$production: {
		routeRules: {
			'/**': { isr: true },
		},
	},
	$development: {
		//
	},
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-icon',
		'@nuxt/content',
		'@nuxtjs/apollo',
	],
	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'OOYOO: DESIGN + DEVELOPMENT',
			meta: [
				{
					name: 'description',
					content: 'Digital brands, products and services.',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
	content: {
		// https://content.nuxtjs.org/api/configuration
		highlight: {
			theme: 'nord',
			preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue'],
		},
	},
	// typescript: {
	//   tsConfig: {
	//     "extends": "../../../tsconfig.base.json"
	//   }
	// },
	apollo: {
		clients: {
			default: {
				tokenName: 'github-token',
				httpEndpoint: 'https://api.github.com/graphql',
			},
		},
	},
});
