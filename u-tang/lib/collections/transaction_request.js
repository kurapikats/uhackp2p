import {Mongo} from 'meteor/mongo';

const TransactionRequest = new Mongo.Collection('transaction_request');

export default TransactionRequest;
