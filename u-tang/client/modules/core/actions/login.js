export default {
  login({Meteor, LocalState, FlowRouter}, email,pass){
	  if(email && pass){
			Meteor.loginWithPassword(email, pass, (error)=>{
				error? LocalState.set("ERROR_MESSAGE","please input the data needed") : FlowRouter.go('/dashboard');
			})
	  } else {
		  LocalState.set("ERROR_MESSAGE","please input the data needed");
	  }
  }
}
