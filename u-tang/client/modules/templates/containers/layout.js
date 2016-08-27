/**
 * Material-UI Theme Layout Container
 *
 * @author Jesus B. Nana <09178816360>
 *
 */
import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Layout from '../components/layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Layout);
