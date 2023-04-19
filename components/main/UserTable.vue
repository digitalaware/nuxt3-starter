<template>
	<div class="table-container flex-center flex-center--column">
		<ClientOnly>
			<ElTable
				:border="true"
				:data="users"
			>
				<ElTableColumn
					v-for="column in columns"
					:key="column.prop"
					:prop="column.prop"
					:label="column.label"
					:width="column.width"
				/>
			</ElTable>
			<ElPagination
				layout="prev, pager, next"
				:background="true"
				:page-size="1"
				:total="count"
				@update:current-page="changePage($event)"
			/>
		</ClientOnly>
	</div>
</template>

<script lang="ts">
import { User } from '~/models/User';

export default defineComponent({
	name: 'UserTable',
	props: {
		users: {
			type: Array as () => Array<User>,
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
	},
	emits: ['change-page'],
	setup(props, { emit }) {
		const columns = [
			{
				prop: '_id',
				label: 'id',
				width: '200',
			},
			{
				prop: 'username',
				label: 'User',
				width: '200',
			},
			{
				prop: 'createdAt',
				label: 'Registered Date',
				width: 'auto',
			},
		];

		const changePage = (page: number): void => {
			emit('change-page', page);
		};
		return {
			columns,
			changePage,
		};
	},
});
</script>

<style lang="scss" scoped>
.table-container {
	width: 100%;
	height: 100%;
	gap: 1rem;
}
</style>
