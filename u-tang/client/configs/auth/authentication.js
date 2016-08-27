/*
/!**
 * Created by roland on 8/27/16.
 *!/

function checkUserLoggedIn() {
	if (Meteor.userId) {
		console.log("user exist!");
		FlowRouter.go('/test')
	} else {
		console.log("user does not exist!");
		FlowRouter.go('/login')
	}
}


const publicRoutes = FlowRouter.group('/', {
	name: 'public',
	triggersEnter: checkUserLoggedIn.bind(this)
});
const authenticatedRoutes = FlowRouter.group('/dashboard', {
		name: 'authenticated',
		triggersEnter: checkUserLoggedIn.bind(this)/!*,
		triggersEnter: [checkUserLoggedIn(Meteor.userId, (temp)=>{
			temp ? null : FlowRouter.go('/login');
		})]*!/
	}
);
export {publicRoutes,authenticatedRoutes};*/
