<template>
	<div>
		<TheHeader />
		<section>
			<slot />
		</section>
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '~/components/shared/TheHeader.vue';
import TheFooter from '~/components/shared/TheFooter.vue';

export default {
	name: 'DefaultLayout',
	components: { TheFooter, TheHeader },
};
</script>

<style lang="scss" scoped>
section {
	height: calc(100vh - 100px - 59px); // remove header + footer height
	max-width: 1200px;
	margin: 0 auto;
}
</style>
