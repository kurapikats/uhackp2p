import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Login from './containers/login';
import Register from './containers/register';
//import {publicRoutes,authenticatedRoutes} from '../../configs/auth/authentication';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  function checkUserLoggedIn( ctx, redirect) {
    let route = FlowRouter.current();
    console.log(route.route.name);
    if (Meteor.userId) {
      console.log("user exist!");
      if(route.route.name !== 'test'){
        FlowRouter.go('/test');
      } else {

      }
    } else {
      console.log("user does not exist!");
      if(route.route.name == 'login' || route.route.name == 'register' ) {
        console.log('test');
      } else {
        FlowRouter.go('/login');
      }
    }
  }

  FlowRouter.route('/', {
    name: 'home',
    action() {
      FlowRouter.go('/login');
    }
  });

  FlowRouter.route('/login', {
    name: 'login',
    triggersEnter: [checkUserLoggedIn],
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });


  FlowRouter.route('/register', {
    name: 'register',
    triggersEnter: [checkUserLoggedIn],
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/test',{
    name: 'test',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<div>test</div>)
      })
    }
  })
}
