import React, {Component} from 'react';

export default class KeyNode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			hasData: this.props.hasData,
			child: this.props.child
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
		var childCount = Object.keys(this.state.child).length;
		const keyNameElement = (this.state.hasData) ? <span className = {'leafLink'} onClick = {this.handleClickLeaf.bind(this)}>{this.props.subKeyName}</span> : <span>{this.props.subKeyName}</span>;
		var nodeElement = [];
		if (childCount !== 0) {
			nodeElement.push(<span className = {'icon node isclose'} onClick = {this.handleSwich.bind(this)}>▾</span>);
		}
		nodeElement.push(keyNameElement);
		if (childCount !== 0) {
			nodeElement.push(<span className = {'icon reload'} onClick = {this.handleReload.bind(this)}>o</span>);
		}
		var childBlock = '';
		if (this.state.isOpen) {
			childBlock = (
				<div className = {'childWrap'}>
				{
					this.state.child.map((node, i) => {
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