<template>
	<UserTable
		:users="users"
		:count="count"
		@change-page="changePage"
	/>
</template>

<script lang="ts">
import { useUserApi } from '~/composables/api/useUserApi';
import UserTable from '~/components/main/UserTable.vue';

export default defineNuxtComponent({
	name: 'MainPage',
	components: { UserTable },
	async setup() {
		const { getAllUsers } = useUserApi();
		const skip = ref(0);
		const { data } = await getAllUsers({ skip });

		const changePage = (page: number): void => {
			skip.value = page - 1;
		};

		const userList = computed(() => data.value.users);

		return { users: userList, count: data.value.count as number, changePage };
	},
});
</script>

<style scoped></style>
