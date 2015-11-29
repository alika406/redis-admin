import React, {Component} from 'react';
import Tree from '../components/Tree.jsx';
import DataPage from '../components/DataPage.jsx';

export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataPageKey: ''
		};
	}
	showData(key) {
		console.log(key);
		this.setState({
			dataPageKey: key
		});
	}
	render() {
		return (
			<div>
				<div id = {'tree'} className = {'col-md-3'}>
					<Tree showData = {this.showData.bind(this)}/>
				</div>
				<div id = {'data_page'}	className = {'col-md-9 col-md-offset-3'}>
					<DataPage keyName = {this.state.dataPageKey}/>
				</div>
			</div>
		)
	}
}