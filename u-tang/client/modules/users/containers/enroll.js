import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Enroll from '../components/enroll.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  enroll: actions.enroll.enroll,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Enroll);
