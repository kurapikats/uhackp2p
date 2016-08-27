import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  let error = LocalState.get("ERROR_MESSAGE");

  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  login: actions.login.login,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
