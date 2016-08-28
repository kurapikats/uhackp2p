/**
 * Users Module Routes
 *
 * @author Jesus B. Nana <09178816360>
 */
import React from 'react';
import {mount} from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Dashboard from './containers/dashboard';
import Profile from './containers/profile';
import Enroll from './containers/enroll';
import BuddyList from './containers/buddy_list';
import Borrowers from './containers/borrowers';
export default function (injectDeps, {FlowRouter}) {
	const MainLayoutCtx = injectDeps(MainLayout);
	
	function checkUserLoggedIn(ctx, redirect) {
		let route = FlowRouter.current();
		console.log(route.route.name);
		if (Meteor.userId()) {
			
		} else {
			console.log("user does not exist!");
			if (route.route.name == 'login' || route.route.name == 'register') {
				console.log('test');
			} else {
				FlowRouter.go('/login');
			}
		}
	}
	
	FlowRouter.route('/dashboard', {
		name: 'dashboard',
		triggersEnter: [checkUserLoggedIn],
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<Dashboard />)
			})
		}
	});
	FlowRouter.route('/profile', {
		name: 'profile',
		triggersEnter: [checkUserLoggedIn],
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<Profile />)
			})
		}
	});
	FlowRouter.route('/enroll', {
		name: 'enroll',
		triggersEnter: [checkUserLoggedIn],
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<Enroll />)
			})
		}
	});
	FlowRouter.route('/enroll-list', {
		name: 'enroll',
		triggersEnter: [checkUserLoggedIn],
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<EnrollList />)
			})
		}
	});
	FlowRouter.route('/users', {
		name: 'viewUsers',
		action() {
			mount(LayoutDefault, {
				LayoutDefault, content: () => (<ViewDomain domainId={domainId}/>)
			});
		}
	});
	FlowRouter.route('/buddies', {
		name: 'myBuddies',
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<BuddyList />)
			})
		}
	});
	FlowRouter.route('/pending', {
		name: 'pending',
		triggersEnter: [checkUserLoggedIn],
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<Pending />)
			})
		}
	});
	FlowRouter.route('/borrowers', {
		name: 'borrowers',
		triggersEnter: [checkUserLoggedIn],
		action(){
			mount(MainLayoutCtx, {
				content: ()=> (<Borrowers />)
			})
		}
	});
}
