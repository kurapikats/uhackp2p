import React from 'react';
import {UnionBankAPI} from '/lib/methods/union-bank-api';
import {updateAccounts} from '/lib/methods/accountInfo';

class ApiView extends React.Component {
	constructor(props) {
		super(props);
	}
	
	getAccounts() {
		
		
	}
	
	transfer() {
		UnionBankAPI.transfer();
		UnionBankAPI.getAccounts();
		
	}
	
	componentDidMount() {
		UnionBankAPI.getAccounts();
	}
	
	render() {
		const accountInfo =this.props.accountInfo;
		console.log(accountInfo);
		
		return (
			<div>
				ApiView
				<button onClick={this.getAccounts.bind(this)}>Get Accounts</button>
				<button onClick={this.transfer.bind(this)}>Transfer</button>
			
			</div>
		);
	}
}

export default ApiView;
