import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ApiView from '../components/api_view.jsx';

export const composer = ({context,accountNo='000000014850'}, onData) => {
  const {Meteor, Collections} = context();
	const subscriptionReady = [Meteor.subscribe('accountInfo').ready];
	if(subscriptionReady){
		const selector ={account_no:accountNo};
		const accountInfo = Collections.AccountInfo.findOne(selector);
		onData(null, {accountInfo});
	}else {
		onData()
	}

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ApiView);
