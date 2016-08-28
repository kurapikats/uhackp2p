import {Transactions} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('transactions', function (transactionsId) {
    return Transactions.find(transactionsId);
  });
}
