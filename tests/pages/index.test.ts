import { describe, expect, it } from 'vitest';
import { setup, $fetch, url } from '@nuxt/test-utils';

describe('example', async () => {
	await setup({});

	it('Renders Nuxt 3 Awesome Starter', async () => {
		const pageUrl = url('/');
		console.log(pageUrl);
	});
});
