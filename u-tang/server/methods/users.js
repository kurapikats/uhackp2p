import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
	Meteor.methods({
		'users.add'(data) {
			console.log(data);
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
