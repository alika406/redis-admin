import React, {Component} from 'react';
import $ from 'jquery';

import Tree from '../components/Tree.jsx';
import DataPage from '../components/DataPage.jsx';
import ServerInfo from '../components/ServerInfo.jsx';

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataPageKey: '',
			dataPageType: '',
			dataPageData: [],
			serverList: [],
			currentServerId: 0,
			serverKeyNum: 0,
			keyTree:[],
		};
	}
	componentDidMount() {
		this.getServerList();
	}
	changeServer(serverId) {
		this.setState({
			currentServerId: serverId
		});
		let getKeysAndNumber = this.getKeysAndNumber.bind(this);
		getKeysAndNumber(serverId);
	}
	getServerList() {
		var url = '/server';
		$.ajax({
			url: url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					serverList: data,
				});

				var getKeysAndNumber = this.getKeysAndNumber.bind(this);
				getKeysAndNumber(this.state.currentServerId);

			}.bind(this),
			error: function(xhr, status, err) {
				console.error(url, status, err.toString());
			}.bind(this)
	    });
	}
	getKeysAndNumber(serverId) {
		var url = '/keys';
		$.ajax({
			url: url+'?serverId='+serverId,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					serverKeyNum: data.keyNum,
					keyTree: data.keyTree,
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(url, status, err.toString());
			}.bind(this)
	    });
	}
	showData(key) {
		var url = '/data';
		$.ajax({
	      url: url+'?serverId='+this.state.currentServerId+'&keyName='+key,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({
				dataPageKey: key,
	        	dataPageType: data.type,
	        	dataPageData: data.data
	        });
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(url, status, err.toString());
	      }.bind(this)
	    });
	}
	render() {
		return (
			<div id = "page">
				<div id = "sidebar" className = "col-md-3">
					<div id = "info">
						<span id = "logo">Redis</span>
						<span id = "lead">Redis Admin</span>
					</div>
					<ServerInfo changeServer = {this.changeServer.bind(this)} serverList = {this.state.serverList} currentServerId = {this.state.currentServerId} serverKeyNum = {this.state.serverKeyNum} />
					<Tree keyTree = {this.state.keyTree} showData = {this.showData.bind(this)}/>
				</div>
				<div id = "data_page"	className = "col-md-9">
					<DataPage keyName = {this.state.dataPageKey} type = {this.state.dataPageType} data = {this.state.dataPageData} />
				</div>
			</div>
		)
	}
}