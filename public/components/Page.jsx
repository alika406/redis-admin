import React, {Component} from 'react';
import $ from 'jquery';

import Tree from '../components/Tree.jsx';
import DataPage from '../components/DataPage.jsx';

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataPageKey: '',
			dataPageType: '',
			dataPageData: []
		};
	}
	showData(key) {
		this.setState({
			dataPageKey: key
		});
		var getDataDetail = this.getDataDetail.bind(this);
		getDataDetail(key)
	}
	getDataDetail(keyName) {
		var url = '/data';
		$.ajax({
	      url: url+'?keyName='+keyName,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({
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
			<div>
				<div id = {'tree'} className = {'col-md-3'}>
					<Tree showData = {this.showData.bind(this)}/>
				</div>
				<div id = {'data_page'}	className = {'col-md-9 col-md-offset-3'}>
					<DataPage keyName = {this.state.dataPageKey} type = {this.state.dataPageType} data = {this.state.dataPageData} />
				</div>
			</div>
		)
	}
}