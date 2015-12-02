import React, {Component} from 'react';

export default class DataZset extends Component {
	render() {
		return (
			<table className = "table-bordered table-condensed table-striped">
				<thead>
					<tr>
						<th></th>
						<th>score</th>
						<th>value</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.data.map((data, i) => {
							return (
								<tr key = {'key-'+i}>
									<td>{i}</td>
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