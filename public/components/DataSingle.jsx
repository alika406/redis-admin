import React, {Component} from 'react';

export default class DataSingle extends Component {
	render() {
		return (
			<table>
				<tbody>
					{
						this.props.data.map((value, i) => {
							return (
								<tr key = {'key-'+i}>
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