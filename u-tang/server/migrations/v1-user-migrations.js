/**
 * Created by evilQueen on 8/27/16.
 */
Migrations.add({
		version: 1,
		name: 'Adds pants to some people in the db.',
		up: function () {
			loadUsers();
		},
		down: function () {
			removeUsers();
		},
	}
);

const loadUsers = ()=> {
	console.log('test', Meteor.users.find().count());
	for (let a = Meteor.users.find().count(), card = 14841; a < 10; a++ , card++) {
		Accounts.createUser({
			email: faker.internet.email(),
			password: "password",
			profile: {
				cardId: "0000000" + card
			}
		});
		console.log('run', a)
	}
}
const removeUsers = ()=> {
	for (let a = Meteor.users.find().count(), card = 14841; a < 10; a++ , card++) {
		const existingUser = Meteor.users.findOne({cardId: "0000000" + card});
		if (existingUser) {
			Meteor.users.remove(existingUser);
		}
	}
	
	
}