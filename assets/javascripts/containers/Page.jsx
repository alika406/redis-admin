import React, {Component} from 'react'
import {connect} from 'react-redux'
import {initial, changeServer, showKeyData} from '../actions.jsx'
import $ from 'jquery'

import Tree from '../components/Tree.jsx'
import DataPage from '../components/DataPage.jsx'
import ServerInfo from '../components/ServerInfo.jsx'

class Page extends Component {
	componentDidMount() {
		this.props.dispatch(initial(this.props.currentServerId))
	}
	changeServer(serverId) {
		this.props.dispatch(changeServer(serverId))
	}
	showData(key) {
		this.props.dispatch(showKeyData(this.props.currentServerId, key))
	}
	render() {
		return (
			<div id = "page">
				<div id = "sidebar" className = "col-md-3">
					<div id = "info">
						<span id = "logo">Redis</span>
						<span id = "lead">Redis Admin</span>
					</div>
					<ServerInfo 
						changeServer = {this.changeServer.bind(this)}
						serverList = {this.props.serverList}
						currentServerId = {this.props.currentServerId}
						serverKeyNum = {this.props.serverKeyNum}
					/>
					<Tree 
						key = {'key'+this.props.currentServerId}
						keyTree = {this.props.keyTree}
						showData = {this.showData.bind(this)}
					/>
				</div>
				<div id = "data_page" className = "col-md-9">
					<DataPage 
						keyName = {this.props.dataPageKey}
						type = {this.props.dataPageType}
						data = {this.props.dataPageData}
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