import {Users} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'users.add'(data) {
      console.log(data);
/*      if(Meteor.users.find({'emails.address': data.email}).length > 0){
        console.log("user already exist")
        return "user already exist";
      } else {*/
        let id = Accounts.createUser({email: data.email, password: data.password,
          profile:{
            cardId: data.cardId
          },
          dateCreated: new Date()});
        return id;
      }
    //}
  });
}
