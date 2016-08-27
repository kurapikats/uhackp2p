export default {
  register({Meteor,LocalState,FlowRouter},data){
		Meteor.call('users.add', data, (error, data)=>{
			if(error){
				LocalState.set('REGISTER_ERROR', error)
			} else {
				//FlowRouter.go('')
				console.log(data)
			}
		})
  }
}
