/**
 * Created by evilQueen on 8/27/16.
 */
import {updateAccounts} from '/lib/methods/accountInfo';
const url = 'https://api.us.apiconnect.ibmcloud.com/ubpapi-dev/sb/api/RESTs';
const headers = {
	'accept': 'application/json',
	'content-type': 'application/json',
	'x-ibm-client-secret': 'cW0iC1rW3kO3jE6mU3kR3eJ1uB6lA6uN0bH7qX3bX2bE1mG0pA',
	'x-ibm-client-id': '30ad9aa7-9621-46d5-9614-5ac6519fc24f'
	
};

const getAccounts = (accountNo = '000000014850')=> {
	console.log('Getting account');
	const options = {
		headers: headers,
		query: 'account_no=' + accountNo,
	}
	console.log(options);
	HTTP.get(url + '/getAccount', options, (err, res)=> {
		(res) ? (res.data) ? updateAccounts(res.data) : '' : '';
	});
};
const transfer = (source = '000000014850', target = '000000014849', amount = 1000)=> {
		console.log('Starting Transfer');
		console.log(Random.id());
		const options = {
			headers: headers,
			data: {
				channel_id: 'UHACK_0078',
				transaction_id: Random.id(),
				source_account: source,
				source_currency: 'php',
				target_account: target,
				target_currency: 'php',
				amount: amount
			}
		}
		console.log(options);
		HTTP.post(url + '/transfer', options, (err, res)=> {
			console.log(res);
			return (res) ?
				(res.data) ?
					(res.data.status) ?
						(res.data.status == 'S') ?
							res.data.status
							
							: ''
						: ''
					: ''
				:
				'';
		});
	}
	;
const payment = ()=> {
};
const getBranches = ()=> {
};
const getBranch = ()=> {
};
const getATMs = ()=> {
};
const getATM = ()=> {
};
const loanCompute = ()=> {
};
const UnionBankAPI = {
	getAccounts: ()=>getAccounts(),
	transfer: ()=>transfer(),
	payment: ()=>payment(),
};
export {UnionBankAPI};