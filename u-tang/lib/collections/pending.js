import {Mongo} from 'meteor/mongo';

const Pending = new Mongo.Collection('pending');

export default Pending;
