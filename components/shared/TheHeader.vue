<template>
	<ClientOnly>
		<ElMenu
			class="menu"
			mode="horizontal"
			active-text-color="#ffd04b"
		>
			<template v-if="status !== 'authenticated'">
				<ElMenuItem route="/auth/login">
					<NuxtLink to="/auth/login">Login</NuxtLink>
				</ElMenuItem>
				<ElMenuItem route="/auth/signup">
					<NuxtLink to="/auth/signup">Register</NuxtLink>
				</ElMenuItem>
			</template>
			<template v-else>
				<ElMenuItem @click="logout()"><ElText>Logout</ElText></ElMenuItem>
			</template>
		</ElMenu>
	</ClientOnly>
</template>

<script lang="ts">
export default defineComponent({
	name: 'TheHeader',
	setup() {
		const { status, signOut } = useAuth();

		const logout = (): void => {
			signOut({ callbackUrl: '/auth/login' });
		};

		return {
			status,
			logout,
		};
	},
});
</script>

<style lang="scss" scoped>
.menu {
	background: $color-primary;
	justify-content: flex-end;
}
</style>
