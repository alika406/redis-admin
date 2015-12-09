// action types
export const INITIAL = 'INITIAL'
export const CHANGE_SERVER = 'CHANGE_SERVER'
export const SHOW_KEY_DATA = 'SHOW_KEY_DATA'

export function initial(serverList, keys) {
	return {
		type: INITIAL,
		serverList: serverList,
		keys: keys
	}
}

export function changeServer(serverId, keys) {
	return {
		type: CHANGE_SERVER,
		serverId: serverId,
		keys: keys
	}
}

export function showKeyData(key, keyData) {
	return {
		type: SHOW_KEY_DATA,
		key: key,
		keyData: keyData
	}
}