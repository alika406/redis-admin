import React, {Component} from 'react';

export default class DataSets extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>fieldName</th>
						<th>value</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.data.map((data, i) => {
							return (
								<tr key = {'key-'+i}>
									<td>{data.score}</td>
									<td>{data.value}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	}
}