import React, {Component} from 'react';
import {connect} from 'react-redux'
import {initial, changeServer, showKeyData} from '../actions'
import $ from 'jquery';

import Tree from '../components/Tree.jsx';
import DataPage from '../components/DataPage.jsx';
import ServerInfo from '../components/ServerInfo.jsx';

class Page extends Component {
	componentDidMount() {
		// this.initialData();
		this.props.dispatch(initial(this.props.currentServerId))
	}
	changeServer(serverId) {
		
		// let getKeysAndNumber = this.getKeysAndNumber.bind(this);
		// getKeysAndNumber(serverId);
		this.props.dispatch(changeServer(serverId))
	}
	initialData() {
		// var url = '/server';
		// $.ajax({
		// 	url: url,
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: function(serverList) {
		// 		this.getKeys(serverList)
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.error(url, status, err.toString());
		// 	}.bind(this)
	    // });
	}
	getKeys(serverList) {
		// var url = '/keys';
		// $.ajax({
		// 	url: url+'?serverId='+this.props.currentServerId,
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: function(keys) {
		// 		this.props.dispatch(initial(serverList, keys))
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.error(url, status, err.toString());
		// 	}.bind(this)
		// });
	}
	getKeysAndNumber(serverId) {
		// var url = '/keys';
		// $.ajax({
		// 	url: url+'?serverId='+serverId,
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: function(data) {
		// 		this.props.dispatch(changeServer(serverId, data))
		// 	}.bind(this),
		// 	error: function(xhr, status, err) {
		// 		console.error(url, status, err.toString());
		// 	}.bind(this)
	    // });
	}
	showData(key) {
		this.props.dispatch(showKeyData(this.props.currentServerId, key))
		// var url = '/data';
		// $.ajax({
	    //   url: url+'?serverId='+this.props.currentServerId+'&keyName='+key,
	    //   dataType: 'json',
	    //   cache: false,
	    //   success: function(data) {
		// 	  this.props.dispatch(showKeyData(key, data))
	    //   }.bind(this),
	    //   error: function(xhr, status, err) {
	    //     console.error(url, status, err.toString());
	    //   }.bind(this)
	    // });
	}
	render() {
		return (
			<div id = "page">
				<div id = "sidebar" className = "col-md-3">
					<div id = "info">
						<span id = "logo">Redis</span>
						<span id = "lead">Redis Admin</span>
					</div>
					<ServerInfo changeServer = {this.changeServer.bind(this)} serverList = {this.props.serverList} currentServerId = {this.props.currentServerId} serverKeyNum = {this.props.serverKeyNum} />
					<Tree key = {'key'+this.props.currentServerId} keyTree = {this.props.keyTree} showData = {this.showData.bind(this)}/>
				</div>
				<div id = "data_page"	className = "col-md-9">
					<DataPage keyName = {this.props.dataPageKey} type = {this.props.dataPageType} data = {this.props.dataPageData} />
				</div>
			</div>
		)
	}
}

function selector(state) {
	return state;
}

export default connect(selector)(Page)