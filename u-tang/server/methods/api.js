import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {UnionBankAPI} from '/lib/methods/union-bank-api';

export default function () {
	Meteor.methods({
		'api.getAccounts'() {
		},
		'api.transfer'(){
			UnionBankAPI.transfer();
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
