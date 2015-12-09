import React, {Component} from 'react'

export default class ServerInfo extends Component {
	handleChangeServer() {
		this.props.changeServer(this.refs.server.value)
	}
	render() {
		let serverOption = []
		this.props.serverList.map((data, i) => { 
			serverOption.push(<option key = {"key"+i} value={data.serverId}>{data.displayName}</option>)
		})
		return (
			<div id="serverInfo">
				<span>SERVER:</span>
				<select value = {this.props.currentServerId} ref = "server" onChange = {this.handleChangeServer.bind(this)}>
					{serverOption}
				</select><br />
				<span>KEY NUMBER:</span><span>{this.props.serverKeyNum}</span>
			</div>
		)
	}
}