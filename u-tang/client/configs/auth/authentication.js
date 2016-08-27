/**
 * Created by roland on 8/27/16.
 */
const publicRoutes = FlowRouter.group('/', {
	name: 'public',
	trggersEnter: [console.log('publicROute')]
});
const authenticatedRoutes = FlowRouter.group('/dashboard', {
	name: 'authenticated',
	trggersEnter: [(context, redirect)=>{
		if(Meteor.userId() || Meteor.user()){
			console.log('authenticatedRoutes');
			let route = FlowRouter.current();
				route.route.name == 'login' ? console.log("go") : console.log("error")
		} else {
			FlowRouter.go('/');
		}
}]});
export {publicRoutes,authenticatedRoutes};