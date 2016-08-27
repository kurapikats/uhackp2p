import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {UnionBankAPI} from '/lib/methods/union-bank-api';
import {updateAccounts} from '/lib/methods/accountInfo';

export default function () {
	Meteor.methods({
		'api.getAccounts'() {
			updateAccounts()
		},
		'api.transfer'(){
			const responce = UnionBankAPI.transfer();
			console.log(responce);
			return responce;
			
		},
		'api.payment'(){
		},
		'api.getBranches'(){
		},
		'api.getBranch'(){
		},
		'api.getATMs'(){
		},
		'api.getATM'(){
		},
		'api.Loans.compute'(){
		},
	});
}
