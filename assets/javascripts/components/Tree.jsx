import React, {Component} from 'react'

import KeyNode from './KeyNode.jsx'

export default class Tree extends Component {
	render() {
		return (
			<div id = "tree">
				{
					this.props.keyTree.map((node, i) => {
						return (
							<KeyNode 
								{...node} 
								showData = {this.props.showData} 
								keyName = {node.subKeyName} 
								key = {`key-${i}`} 
							/>
						)
					})
				}
			</div>
		)
	}
}