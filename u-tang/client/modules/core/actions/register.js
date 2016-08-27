export default {
  registerUser({Meteor,LocalState},data){
	  console.log(data);
		Meteor.call('users.add', data, (error, data)=>{
			if(error){
				LocalState.set('REGISTER_ERROR', error.reason)
			} else {
				console.log(data);
				FlowRouter.go('/dashboard');
			}
		})
  }
}
