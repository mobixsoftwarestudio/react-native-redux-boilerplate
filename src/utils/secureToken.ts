import RNSecureStore, { ACCESSIBLE } from 'rn-secure-storage';

const StorageKey = 'AUTH0_USER_TOKENS';

export interface AppAuthTokens {
	expirationDate?: number;
	token?: string;
}

export async function secureSetTokens(tokens: AppAuthTokens) {
	try {
		// Can only store as string.. stringify
		await RNSecureStore.set(StorageKey, JSON.stringify(tokens), {
			accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
		});
	} catch (err) {
		throw Error('Could not set secure tokens');
	}
}

export async function secureGetTokens() {
	try {
		if (!(await RNSecureStore.exists(StorageKey))) {
			return {};
		}

		const tokensJsonString = await RNSecureStore.get(StorageKey);

		if (!tokensJsonString) {
			return {} as AppAuthTokens;
		}
		const tokens = JSON.parse(tokensJsonString) as AppAuthTokens;

		return tokens;
	} catch (err) {
		// console.log(err);
		throw Error('Could not get secure tokens');
	}
}

export async function secureRemoveTokens() {
	try {
		if (await RNSecureStore.exists(StorageKey)) {
			await RNSecureStore.remove(StorageKey);
		}
	} catch (err) {
		throw Error('Could not remove secure tokens');
	}
}
