export default {
  register({Meteor,LocalState,FlowRouter},data){
		Meteor.call('users.add', data, (error)=>{
			if(error){
				LocalState.set('REGISTER_ERROR', error)
			} else {
				//FlowRouter.go('')
			}
		})
  }
}
