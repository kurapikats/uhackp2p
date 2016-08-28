import {Request} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Enroll} from '/lib/collections';

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
		},

		'user.enroll'(data){
			let id = Enroll.insert({
				accountNo: data.accountNo,
				date: new Date()
			});
			return id;
		},

		'user.request'(data,userId,status){
			let id = Request.insert({
				userId: userId,
				targetId: data.buddy,
				message: data.message,
				amount: data.amount,
				status: status
			});
			return id
		}
	});
}
