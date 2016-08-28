import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EnrollList from '../components/enroll_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let data = [];

  if(Meteor.subscribe('get.enroll').ready()){
    Collections.Enroll.find().forEach((enroll)=>{
      data.push(enroll);
    });
    //console.log(data);
    onData(null, {data});
  }
};

export const depsMapper = (context, actions) => ({
  context:() => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EnrollList);
