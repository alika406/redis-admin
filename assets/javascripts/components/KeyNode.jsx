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
		var childCount = Object.keys(this.props.child).length;
		var nodeIconlasses = ['icon', 'node', 'glyphicon'];

		if (childCount === 0) {
			nodeIconlasses = nodeIconlasses.concat(['none', 'glyphicon-file']);
		} else {
			nodeIconlasses = (this.state.isOpen) ? nodeIconlasses.concat(['open', 'glyphicon-folder-open']) : nodeIconlasses.concat(['isclose', 'glyphicon-folder-close']);
		}
		nodeIconlasses = nodeIconlasses.join(' ');

		var nodeElement = [];
		var nodeIconElemnt = (childCount === 0) ? <span className = {nodeIconlasses}></span> : <span className = {nodeIconlasses} onClick = {this.handleSwitch.bind(this)}></span>;
		var keyNameElement = (this.props.hasData) ? <span className = "leafLink" onClick = {this.handleClickLeaf.bind(this)}>{this.props.subKeyName}</span> : <span>{this.props.subKeyName}</span>;
		var reloadElement =  (childCount === 0) ? '' : <span className = "icon reload" onClick = {this.handleReload.bind(this)}></span>;

		nodeElement.push(nodeIconElemnt);
		nodeElement.push(keyNameElement);
		nodeElement.push(reloadElement);
		
		var childWrapClass = (this.state.isOpen) ? 'childWrap abc' : 'childWrap none';
		var child = this.props.child.map((node, i) => {
			var keyName = this.props.keyName+':'+node.subKeyName;
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
				{nodeElement}
				<div className = {childWrapClass}>
					{child}
				</div>
			</div>
		)
	}
}