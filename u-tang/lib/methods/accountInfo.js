/**
 * Created by evilQueen on 8/27/16.
 */
import {UnionBankAPI} from '/lib/methods/union-bank-api';
import {AccountInfo} from '/lib/collections';
const getData = (accountId)=> {
	try {
		return UnionBankAPI.getAccounts(accountId);
	} catch (error) {
		console.log(error);
	}
}
const updateAccounts = (accountInfo)=> {
	if (accountInfo) {
		if (accountInfo.data) {
			_.each(accountInfo.data, function (info) {
				const existingAccount = AccountInfo.findOne({account_no: accountId});
				console.log(existingAccount);
				if (existingAccount) {
					console.log('already exist updating anyway');
					AccountInfo.update(existingAccount._id, info);
				} else {
					AccountInfo.insert(info);
				}
			});
		}
	}
};
export {updateAccounts};