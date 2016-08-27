/**
 * Created by roland on 8/27/16.
 */
import {Meteor} from 'meteor/meteor';

export default ()=> {
	console.log('test',  Meteor.users.find().count());
	for ( let a = Meteor.users.find().count(), card = 14841; a < 10 ; a++ ,card ++) {
		Accounts.createUser({
			email: faker.internet.email(),
			password: "admin",
			profile: {
				cardId: "0000000" + card
			}
		});
		console.log('run', a)
	}

}