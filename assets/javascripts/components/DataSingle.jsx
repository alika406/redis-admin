import React, {Component} from 'react'

export default class DataSingle extends Component {
	render() {
		return (
			<table className = "table-bordered table-condensed table-striped">
				<tbody>
					{
						this.props.data.map((value, i) => {
							return (
								<tr key = {'key-'+i}>
									<td>{i}</td>
									<td>{value}</td>
								</tr>
							)
						})	
					}
				</tbody>
			</table>
		)
	}
}