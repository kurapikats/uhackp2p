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
	console.log('finding users', Meteor.users.find().count());
	for (let a = Meteor.users.find().count(), card = 14841; a < 10; a++ , card++) {
		Accounts.createUser({
			email: faker.internet.email(),
			password: "password",
			profile: {
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				displayPhoto: faker.image.avatar(),
				cardId: "0000000" + card,
			}
		});
		console.log('run', a)
	}
}
const removeUsers = ()=> {
	for (let a = Meteor.users.find().count(), card = 14841; a < 10; a++ , card++) {
		const existingUser = Meteor.users.findOne({'profile.cardId': "0000000" + card});
		if (existingUser) {
			Meteor.users.remove(existingUser);
		}
	}
	
	
}