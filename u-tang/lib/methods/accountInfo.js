/**
 * Created by evilQueen on 8/27/16.
 */
import {UnionBankAPI} from '/lib/methods/union-bank-api';
import {AccountInfo} from '/lib/collections';
const updateAccounts = (accountInfo, accountId = '000000014850')=> {
	if (accountInfo) {
		console.log('going thru length');
		_.each(accountInfo, function (info) {
			let existingAccount = AccountInfo.findOne({account_no: accountId});
			console.log(existingAccount, 'account exist');
			if (existingAccount) {
				console.log('already exist updating anyway');
				AccountInfo.update(existingAccount._id, info);
			} else {
				AccountInfo.insert(info);
			}
		});
	}
};
export {updateAccounts};