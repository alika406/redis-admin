import React, {Component} from 'react';
import DataSingle from './DataSingle.jsx';
import DataZset from './DataZset.jsx';
import DataHash from './DataHash.jsx';

export default class DataPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var dataBlock = '';
		switch (this.props.type) {
			case 'string':
			case 'list':
			case 'set':
				dataBlock = <DataSingle data = {this.props.data}/>
				break;
			case 'zset':
				dataBlock = <DataZset data = {this.props.data}/>
				break;
			case 'hash':
				dataBlock = <DataHash data = {this.props.data}/>
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
					<span>{this.props.type}</span>
				<h1>data:</h1>
					{dataBlock}
			</div>
		)
	}
}
