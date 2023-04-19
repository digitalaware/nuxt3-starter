// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: [
		'@pinia/nuxt',
		'@nuxt/devtools',
		'@vite-pwa/nuxt',
		'@element-plus/nuxt',
		'@nuxtjs/eslint-module',
		'@sidebase/nuxt-auth',
	],
	css: ['@/assets/styles/global.scss', '@/assets/styles/normalize.css'],
	runtimeConfig: {
		mongoDbUrl: process.env.MONGO_DB_URL,
		jwtSecret: process.env.JWT_SECRET,
		publicRoutes: ['/api/auth/login', '/api/auth/register'],
	},
	typescript: {
		strict: true,
		typeCheck: false,
	},
	vite: {
		optimizeDeps: {
			include: ['jsonwebtoken'],
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/styles/variables.scss";',
				},
			},
		},
		ssr: {},
		build: {
			reportCompressedSize: true,
			watch: {},
			commonjsOptions: {
				include: [/jsonwebtoken/, /node_modules/],
			},
		},
	},
	nitro: {
		plugins: ['~/server/index.ts'],
	},
	devtools: {},
	pwa: {
		registerType: 'autoUpdate',
		devOptions: {
			enabled: false,
		},
		includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.png'],
		manifest: {
			name: 'Nuxt 3 starter app',
			short_name: 'NUXT APP',
			description: 'Awesome fullstack application built with Nuxt3 + MongoDB',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'icon-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
	},
	auth: {
		// @ts-ignore This layer will show a runtime-error when the other layer is loaded, as then type === 'local' is selected
		origin: 'http://localhost:3000',
		provider: {
			type: 'local',
			pages: {
				login: '/auth/login',
			},
			token: {
				signInResponseTokenPointer: '/token/accessToken',
			},
		},
		globalAppMiddleware: {
			isEnabled: true,
		},
	},
	eslint: {
		failOnError: true,
	},
});
