import { defineStore } from 'pinia';
import { CounterState } from '~/store/counter/counter.types';

const initialState: CounterState = {
	count: 0,
};

export const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({
		...initialState,
	}),
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
	},
	getters: {
		getCount: (state) => state.count,
	},
});
