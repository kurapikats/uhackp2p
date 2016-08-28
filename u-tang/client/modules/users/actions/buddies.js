export default {
	sendRequest({Meteor, LocalState},data){
		let id = Meteor.userId();
		let status = 'request';
		console.log(data, id);
		Meteor.call('user.request',data,id,status,(error, returnArg)=>{
			error? LocalState.set('ERROR_MESSAGE', error) : FlowRouter.go('/borrowers')
		})
	}
}
