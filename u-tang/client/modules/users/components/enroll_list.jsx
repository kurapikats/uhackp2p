import React from 'react';

class EnrollList extends React.Component {
	constructor(props) {
		super(props);
	}

	generate(data,index){
		console.log("data 2", data);
		let month= data.date.getMonth()+1;
		let time = data.date.getFullYear()+"-"+((month < 10)? "0"+month: month)+"-"+data.date.getDate();

		return(
			<tr key={index}>
				<th>{data.userId}</th>
				<th>{data.cardId}</th>
				<th>{time}</th>
			</tr>
		)
	}

	render() {
		let {data} = this.props;
		return (
			<section className="enroll-list">
				<table id="enrollTableAll">
					<thead>
					<tr>
						<th>User ID</th>
						<th>Card ID</th>
						<th>Date</th>
					</tr>
					</thead>
					<tbody>
					{data.map((enroll , index)=>(
						this.generate(enroll, index)
					))}
					</tbody>
				</table>
			</section>
		);
	}
}

export default EnrollList;
