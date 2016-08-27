import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
	Meteor.methods({
		'users.add'(data) {
			let id = Accounts.createUser({
				email: data.email, password: data.password,
				profile: {
					cardId: data.cardId
				},
				dateCreated: new Date()
			});
			return id;
		}
	});
}
