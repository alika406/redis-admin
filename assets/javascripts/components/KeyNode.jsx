import React, {Component} from 'react'

export default class KeyNode extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
		this.handleSwitch = this.handleSwitch.bind(this)
		this.handleClickLeaf = this.handleClickLeaf.bind(this)
		this.handlereload = this.handleReload.bind(this)  
	}
	handleSwitch() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	handleClickLeaf() {
		this.props.showData(this.props.keyName)
	}
	handleReload() {
		console.log('reload')
	}
	render() {
		const {keyName, hasData, subKeyName, child, showData} = this.props
		let childCount = Object.keys(child).length
		let nodeIconlasses = ['icon', 'node', 'glyphicon']

		if (childCount === 0) {
			nodeIconlasses = nodeIconlasses.concat(['none', 'glyphicon-file'])
		} else {
			nodeIconlasses = (this.state.isOpen) 
				? nodeIconlasses.concat(['open', 'glyphicon-folder-open'])
				: nodeIconlasses.concat(['isclose', 'glyphicon-folder-close'])
		}
		nodeIconlasses = nodeIconlasses.join(' ')

		let nodeIconElemnt = (childCount === 0) 
			? <span className = {nodeIconlasses}></span>
			: <span className = {nodeIconlasses} onClick = {this.handleSwitch}></span>

		let keyNameElement = (hasData) 
			? <span className = "leafLink" onClick = {this.handleClickLeaf}>{subKeyName}</span>
			: <span>{subKeyName}</span>

		let reloadElement = (childCount === 0) 
			? ''
			: <span className = "icon reload" onClick = {this.handleReload}></span>
		
		let childWrapClass = (this.state.isOpen) ? 'childWrap abc' : 'childWrap none'
		let children = child.map((node, i) => {
			let childKeyName = `${keyName}:${node.subKeyName}`
			return (
				<KeyNode
					{...node}
					showData = {showData}
					keyName = {childKeyName}
					key = {`key-${i}`}
				/>
			)
		})

		return (
			<div className = "nodeWrap">
				{nodeIconElemnt}{keyNameElement}{reloadElement}
				<div className = {childWrapClass}>
					{children}
				</div>
			</div>
		)
	}
}