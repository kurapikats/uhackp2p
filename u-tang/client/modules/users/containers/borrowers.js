import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Borrowers from '../components/borrowers.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let userId = Meteor.userId();
  let data = [];
  if(Meteor.subscribe('get.request',userId).ready()){
    Collections.Transactions.find({targetId: userId}).forEach((temp)=>{
      data.push(temp);
    });

    console.log(data);

    onData(null, {data});
  }


};
export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Borrowers);
