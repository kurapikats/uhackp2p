import {Enroll} from '/lib/collections';
import {TransactionRequest} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('get.enroll', function (usersId) {
    return Enroll.find(usersId);
  });

  Meteor.publish('get.request', (userId)=>{
    return TransactionRequest.find({targetId: userId});
  })
}
