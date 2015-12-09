import React, {Component} from 'react'

export default class ServerInfo extends Component {
	constructor(props) {
		super(props)
		this.handleChangeServer = this.handleChangeServer.bind(this)
	}
	handleChangeServer() {
		this.props.changeServer(this.refs.server.value)
	}
	render() {
		const {currentServerId, serverList, serverKeyNum} = this.props
		let serverOption = []
		serverList.map((data, i) => { 
			serverOption.push(<option key = {`key-${i}`} value={data.serverId}>{data.displayName}</option>)
		})
		return (
			<div id="serverInfo">
				<span>SERVER:</span>
				<select value = {currentServerId} ref = "server" onChange = {this.handleChangeServer}>
					{serverOption}
				</select><br />
				<span>KEY NUMBER:</span><span>{serverKeyNum}</span>
			</div>
		)
	}
}