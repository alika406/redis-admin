import React, {Component} from 'react';
import DataSingle from './DataSingle.jsx';
import DataSets from './DataSets.jsx';
import DataHash from './DataHash.jsx';
import $ from 'jquery';

export default class DataPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
			data: [],
		};
		var getDataDetail = this.getDataDetail.bind(this);
		getDataDetail(this.props.keyName);
	}
	getDataDetail(keyName) {
		var url = '/data';
		$.ajax({
	      url: url+'?keyName='+keyName,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({
	        	type: data.type,
	        	data: data.data
	        });
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(url, status, err.toString());
	      }.bind(this)
	    });
	}
	render() {
		var dataBlock = '';
		switch (this.state.type) {
			case 'string':
			case 'list':
				dataBlock = <DataSingle data = {this.state.data}/>
				break;
			case 'sortedSets':
				dataBlock = <DataSets data = {this.state.data}/>
				break;
			case 'hash':
				dataBlock = <DataHash data = {this.state.data}/>
				break;
			default:
				dataBlock = <span>node data</span>
				break;
		}

		return (
			<div>
				<h1>key:</h1>
					<span>{this.props.keyName}</span>
				<h1>type:</h1>
					<span>{this.state.type}</span>
				<h1>data:</h1>
					{dataBlock}
			</div>
		)
	}
}
