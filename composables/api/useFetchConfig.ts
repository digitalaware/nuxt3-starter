import { UseFetchOptions } from '#app';
import { FetchContext, FetchResponse } from 'ofetch';

export const baseFetchConfig: UseFetchOptions<any> = {
	onRequestError(context: FetchContext & { error: Error }): Promise<void> | void {
		return Promise.reject(context.error);
	},
	onResponseError(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> | void {
		console.log(context);
		return Promise.reject(context.error);
	},
};
