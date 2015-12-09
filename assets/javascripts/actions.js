import axios from 'axios'
 
// action types
export const INITIAL = 'INITIAL'
export const CHANGE_SERVER = 'CHANGE_SERVER'
export const SHOW_KEY_DATA = 'SHOW_KEY_DATA'

function initialActionCreator(serverList, keys) {
	return {
		type: INITIAL,
		serverList: serverList,
		keys: keys
	}
}

function changeServerActionCreator(serverId, keys) {
	return {
		type: CHANGE_SERVER,
		serverId: serverId,
		keys: keys
	}
}

function showKeyDataActionCreator(key, keyData) {
	return {
		type: SHOW_KEY_DATA,
		key: key,
		keyData: keyData
	}
}

function getServerList() {
	return axios.get('/server')
}

function getKeys(serverId) {
	return axios.get('/keys', {
		params:{
			serverId: serverId
		}
	})
}

function getKeyData(serverId, key) {
	return axios.get('/data', {
		params: {
			serverId: serverId,
			keyName: key	
		}
	})
}

export function initial(defaultServerId) {
	return dispatch => {
		return axios.all([getServerList(), getKeys(defaultServerId)])
			.then(axios.spread((serverResponse, keyResponse) => {
				dispatch(initialActionCreator(serverResponse.data, keyResponse.data))
			}))	
	}
}

export function changeServer(serverId) {
	return dispatch => {
		return getKeys(serverId)
			.then(response => {
				dispatch(changeServerActionCreator(serverId, response.data))
			})
	}
}

export function showKeyData(serverId, key) {
	return dispatch => {
		return getKeyData(serverId, key)
			.then(response => {
				dispatch(showKeyDataActionCreator(key, response.data))
			})
	}
}
