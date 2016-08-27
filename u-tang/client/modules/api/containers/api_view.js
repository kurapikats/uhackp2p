import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ApiView from '../components/api_view.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
	const subscriptionReady = [Meteor.subscribe('accountInfo').ready];
	if(subscriptionReady){
		console.log(Collections.AccountInfo.find().fetch());
		
		onData(null, {});
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
