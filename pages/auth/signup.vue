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
export default {
	name: 'SignupPage',
	components: { SignupForm },
};
</script>

<style scoped></style>
