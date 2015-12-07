import React, {Component} from 'react';

export default class ServerInfo extends Component {
	render() {
		let serverOption = [];
		this.props.serverList.map((data, i) => { 
			serverOption.push(<option value={data.serverId}>{data.displayName}</option>);
		});
		return (
			<div id="serverInfo">
				<span>SERVER:</span>
				<select value = {this.props.currentServerId}>
					{serverOption}
				</select><br />
				<span>KEY NUMBER:</span><span>{this.props.serverKeyNum}</span>
			</div>
		);
	}
}