export default {
  enroll({Meteor, LocalState, FlowRouter},data){
		console.log(data);
	  Meteor.call('user.enroll',data,(error, id)=>{
		  console.log(id);
			error? LocalState.set('ERROR_MESSAGE',error) : null
	  })
  }

}
