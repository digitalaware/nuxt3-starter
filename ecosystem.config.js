module.exports = {
	apps: [
		{
			name: 'nuxt3-app',
			port: 3000,
			exec_mode: 'cluster',
			instances: 'max',
			autorestart: true,
			script: './.output/server/index.mjs',
			max_memory_restart: '512M',
		},
	],
};
