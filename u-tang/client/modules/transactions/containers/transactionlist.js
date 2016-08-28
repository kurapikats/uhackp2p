import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Transactionlist from '../components/transactionlist.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
	const selector = {};
	const transactions = Collections.Transactions.find(selector).fetch();
	console.log(transactions);
  onData(null, {transactions});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Transactionlist);
