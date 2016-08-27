export default {
	registerUser({Meteor,LocalState}, data){
		console.log(data);
		Meteor.call('users.add', data, (error, temp)=> {
			if (error) {
				LocalState.set('REGISTER_ERROR', error.reason)
			} else {
				console.log(data.email,data.password);
				Meteor.loginWithPassword(data.email, data.password, (error)=> {
					error ? LocalState.set("REGISTER_ERROR", "please input the data needed") : FlowRouter.go('/dashboard');
				})
			}
		})
	}
}
