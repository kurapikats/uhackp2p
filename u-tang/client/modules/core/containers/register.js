import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Register from '../components/register.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  let error = LocalState.get('REGISTER_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  register: actions.register.registerUser,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Register);
