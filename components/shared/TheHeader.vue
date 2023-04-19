<template>
	<ElMenu
		class="menu"
		mode="horizontal"
		active-text-color="#ffd04b"
	>
		<template v-if="!userData">
			<ElMenuItem>
				<NuxtLink to="/auth/login">Login</NuxtLink>
			</ElMenuItem>
			<ElMenuItem>
				<NuxtLink to="/auth/signup">Register</NuxtLink>
			</ElMenuItem>
		</template>
		<template v-else>
			<ElMenuItem @click="logout()"><ElText>Logout</ElText></ElMenuItem>
		</template>
	</ElMenu>
</template>

<script lang="ts">
export default defineComponent({
	name: 'TheHeader',
	setup() {
		const { data: userData, signOut } = useAuth();

		const logout = (): void => {
			signOut({ callbackUrl: '/auth/login' });
		};

		return {
			userData,
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
