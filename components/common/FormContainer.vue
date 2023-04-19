<template>
	<div class="flex-center form-container">
		<div class="form">
			<ElText class="form-label">{{ title }}</ElText>
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	name: 'FormContainer',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.form-container {
	height: 100%;
	@media screen and (max-width: 568px) {
		padding: 1rem;
	}
}

.form-label {
	display: block;
	text-align: center;
	font-size: 1.5rem;
}

.form {
	min-width: 350px;
	border-radius: 5px;
	padding: 2rem;
	box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
	@media screen and (max-width: 568px) {
		min-width: 85%;
	}
}
</style>
