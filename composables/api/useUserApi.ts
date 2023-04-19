import { SearchParams } from 'ohmyfetch';
import { useFetch } from '#imports';
import { baseFetchConfig } from '~/composables/api/useFetchConfig';

const getAllUsers = (query: SearchParams) => useFetch('/api/user', { ...baseFetchConfig, method: 'GET', query });

export const useUserApi = {
	getAllUsers,
};
