<template>
	<LoginForm />
</template>

<script lang="ts">
import LoginForm from '~/components/auth/LoginForm.vue';
definePageMeta({
	auth: {
		unauthenticatedOnly: true,
		navigateAuthenticatedTo: '/',
	},
});
export default defineNuxtComponent({
	name: 'LoginPage',
	components: { LoginForm },
});
</script>

<style scoped></style>
