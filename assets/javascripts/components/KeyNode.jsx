import React, {Component} from 'react';

export default class KeyNode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	handleSwich() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	handleClickLeaf() {
		this.props.showData(this.props.keyName);
	}
	handleReload() {
		console.log('reload');
	}
	render() {
		var nodeIconClass = '';
		var nodeIconElemnt = '';
		var childCount = Object.keys(this.props.child).length;

		if (childCount === 0) {
			nodeIconElemnt = <span className = {'icon node none glyphicon glyphicon-file'}></span>;
		} else {
			nodeIconClass = (this.state.isOpen) ? 'open glyphicon glyphicon-folder-open' : 'isclose glyphicon glyphicon-folder-close';
			nodeIconElemnt = <span className = {'icon node ' + nodeIconClass} onClick = {this.handleSwich.bind(this)}></span>
		}

		var keyNameElement = (this.props.hasData) ? <span className = {'leafLink'} onClick = {this.handleClickLeaf.bind(this)}>{this.props.subKeyName}</span> : <span>{this.props.subKeyName}</span>;
		var nodeElement = [];

		nodeElement.push(nodeIconElemnt);
		nodeElement.push(keyNameElement);
		if (childCount !== 0) {
			nodeElement.push(<span className = {'icon reload'} onClick = {this.handleReload.bind(this)}>o</span>);
		}
		
		var childBlock = '';
		if (this.state.isOpen) {
			childBlock = (
				<div className = {'childWrap'}>
				{
					this.props.child.map((node, i) => {
						var keyName = this.props.keyName+':'+node.subKeyName;
						return (
							<KeyNode 
								{...node} 
								showData = {this.props.showData} 
								keyName = {keyName} 
								key = {'key-'+i} 
							/>
						)
					})
				}
				</div>
			);
		}
		return (
			<div className = {'nodeWrap'}>
				{
					nodeElement.map((elemnet) => {
						return elemnet;
					})
				}
				{childBlock}
			</div>
		)
	}
}