import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Profile from '../components/profile.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let data = Meteor.user();
  console.log(data);
  if(data){
    onData(null, {data});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);
