import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initial, changeServer, showKeyData} from '../actions.jsx'

import Tree from '../components/Tree.jsx'
import DataPage from '../components/DataPage.jsx'
import ServerInfo from '../components/ServerInfo.jsx'

class Page extends Component {
	constructor(props) {
		super(props)
		this.changeServer = this.changeServer.bind(this)
		this.showData = this.showData.bind(this)
	}
	componentDidMount() {
		const {dispatch, currentServerId} = this.props
		dispatch(initial(currentServerId))
	}
	changeServer(serverId) {
		const {dispatch} = this.props
		dispatch(changeServer(serverId))
	}
	showData(key) {
		const {dispatch, currentServerId} = this.props
		dispatch(showKeyData(currentServerId, key))
	}
	render() {
		const {currentServerId, serverList, serverKeyNum, keyTree, dataPageKey, dataPageType, dataPageData} = this.props
		return (
			<div id = "page">
				<div id = "sidebar" className = "col-md-3">
					<div id = "info">
						<span id = "logo">Redis</span>
						<span id = "lead">Redis Admin</span>
					</div>
					<ServerInfo 
						changeServer = {this.changeServer}
						serverList = {serverList}
						currentServerId = {currentServerId}
						serverKeyNum = {serverKeyNum}
					/>
					<Tree 
						key = {`key-${currentServerId}`}
						keyTree = {keyTree}
						showData = {this.showData}
					/>
				</div>
				<div id = "data_page" className = "col-md-9">
					<DataPage 
						keyName = {dataPageKey}
						type = {dataPageType}
						data = {dataPageData}
					/>
				</div>
			</div>
		)
	}
}

function selector(state) {
	return state
}

export default connect(selector)(Page)