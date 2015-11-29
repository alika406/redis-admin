import React, {Component} from 'react';
import KeyNode from './KeyNode.jsx';
import $ from 'jquery';

export default class Tree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			child: []
		};
		this.getKeys('');
	}
	getKeys(keyPrefix) {
		var url = '/keys';
		$.ajax({
	      url: url+'?keyPrefix='+keyPrefix,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({child: data.child});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(url, status, err.toString());
	      }.bind(this)
	    });
	}
	render() {
		return (
			<div>
				{
					this.state.child.map((node, i) => {
						return (
							<KeyNode 
								{...node} 
								showData = {this.props.showData} 
								keyName = {node.subKeyName} 
								key = {'key-'+i} 
							/>
						)
					})
				}
			</div>
		)
	}
}