import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import BuddyList from '../components/buddy_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
	const buddyList = Meteor.users.find({_id: {$ne:Meteor.userId()}}).fetch();
	console.log(buddyList);
  onData(null, {buddyList});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(BuddyList);
