import { describe, expect, it } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';
// https://github.com/nuxt/framework/blob/main/test/basic.test.ts - see example there
describe('example', async () => {
	await setup({
		dev: true,
	});

	it('Test index page redirect', async () => {
		const html = await $fetch('/');
		expect(html).toContain('Sign In');
	});

	it('Test render login page', async () => {
		const html = await $fetch('/auth/login');
		expect(html).toContain('Sign In');
	});

	it('Test render signup page', async () => {
		const html = await $fetch('/auth/signup');
		expect(html).toContain('Sign Up');
	});
});
