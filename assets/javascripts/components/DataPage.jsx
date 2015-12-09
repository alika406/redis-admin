import React, {Component} from 'react'
import DataSingle from './DataSingle.jsx'
import DataZset from './DataZset.jsx'
import DataHash from './DataHash.jsx'

export default class DataPage extends Component {
	render() {
		const {keyName, type, data} = this.props
		let dataBlock = ''
		switch (type) {
			case 'string':
			case 'list':
			case 'set':
				dataBlock = <DataSingle data = {data}/>
				break
			case 'zset':
				dataBlock = <DataZset data = {data}/>
				break
			case 'hash':
				dataBlock = <DataHash data = {data}/>
				break
			default:
				dataBlock = <span>node data</span>
				break
		}

		return (
			<div>
				<div className = "infoBlock">
					<div>
						<span className = "title">key:</span><span>{keyName}</span>
					</div>
					<div>
						<span className = "title">type:</span><span>{type}</span>
					</div>
					<div>
						<span className = "title">data:</span>
					</div>
				</div>
				<div className = "dataBlock">
					{dataBlock}
				</div>
			</div>
		)
	}
}
