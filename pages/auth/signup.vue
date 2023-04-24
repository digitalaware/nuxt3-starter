<template>
	<SignupForm />
</template>

<script lang="ts">
import SignupForm from '~/components/auth/SignupForm.vue';
definePageMeta({
	auth: {
		unauthenticatedOnly: true,
		navigateAuthenticatedTo: '/',
	},
});
export default defineNuxtComponent({
	name: 'SignupPage',
	components: { SignupForm },
});
</script>

<style scoped></style>
