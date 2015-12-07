import React, {Component} from 'react';

export default class KeyNode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	handleSwitch() {
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
		let childCount = Object.keys(this.props.child).length;
		let nodeIconlasses = ['icon', 'node', 'glyphicon'];

		if (childCount === 0) {
			nodeIconlasses = nodeIconlasses.concat(['none', 'glyphicon-file']);
		} else {
			nodeIconlasses = (this.state.isOpen) ? nodeIconlasses.concat(['open', 'glyphicon-folder-open']) : nodeIconlasses.concat(['isclose', 'glyphicon-folder-close']);
		}
		nodeIconlasses = nodeIconlasses.join(' ');

		let nodeIconElemnt = (childCount === 0) ? <span className = {nodeIconlasses}></span> : <span className = {nodeIconlasses} onClick = {this.handleSwitch.bind(this)}></span>;
		let keyNameElement = (this.props.hasData) ? <span className = "leafLink" onClick = {this.handleClickLeaf.bind(this)}>{this.props.subKeyName}</span> : <span>{this.props.subKeyName}</span>;
		let reloadElement =  (childCount === 0) ? '' : <span className = "icon reload" onClick = {this.handleReload.bind(this)}></span>;
		
		let childWrapClass = (this.state.isOpen) ? 'childWrap abc' : 'childWrap none';
		let child = this.props.child.map((node, i) => {
			let keyName = this.props.keyName+':'+node.subKeyName;
			return (
				<KeyNode
					{...node}
					showData = {this.props.showData}
					keyName = {keyName}
					key = {'key-'+i}
				/>
			)
		});

		return (
			<div className = "nodeWrap">
				{nodeIconElemnt}{keyNameElement}{reloadElement}
				<div className = {childWrapClass}>
					{child}
				</div>
			</div>
		)
	}
}