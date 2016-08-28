import React from 'react';

class Transactionlist extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const transactions = this.props.transactions;
		console.log(transactions);
		return (
			<div>
				Transaction list
			</div>
		);
	};
}

export default Transactionlist;
