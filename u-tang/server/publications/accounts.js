import {AccountInfo} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
export default function () {
	Meteor.publish('accountInfo', function (accountId = '000000014850') {
		let self = this;
			self.ready();
	});
}
