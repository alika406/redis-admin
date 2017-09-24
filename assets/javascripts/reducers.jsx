import {INITIAL, CHANGE_SERVER, SHOW_KEY_DATA} from './actions.jsx'

let initState = {
	dataPageKey: '',
	dataPageType: '',
	dataPageData: [],
	serverList: [],
	currentServerId: 0,
	serverKeyNum: 0,
	keyTree:[],
}

export default function app (state = initState, action) {
	switch (action.type) {
		case INITIAL:
			return Object.assign({}, state, {
				serverList: action.serverList,
				serverKeyNum: action.keys.keyNum,
				keyTree: action.keys.keyTree
			})
		case CHANGE_SERVER:
			return Object.assign({}, state, {
				currentServerId: action.serverId,
				serverKeyNum: action.keys.keyNum,
				keyTree: action.keys.keyTree
			})
		case SHOW_KEY_DATA:
			return Object.assign({}, state, {
				dataPageKey: action.key,
				dataPageType: action.keyData.type,
				dataPageData: action.keyData.data,
			})
		default:
			return state
	}
}
