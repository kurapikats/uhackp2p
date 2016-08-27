import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Login from './containers/login';
import Register from './containers/register';
import {publicRoutes,authenticatedRoutes} from '../../configs/auth/authentication';
export default function (injectDeps, {FlowRouter}) {
  console.log(publicRoutes, authenticatedRoutes);
  const MainLayoutCtx = injectDeps(MainLayout);

  publicRoutes.route('/', {
    name: 'home',
    action() {
      FlowRouter.go('/login');
    }
  });

  publicRoutes.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });


  publicRoutes.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });

  authenticatedRoutes.route('/test',{
    name: 'test',
    action(){
      mount(MainLayoutCtx, {

      })
    },
    triggersEnter: [function(context, redirect) {
      console.log('running /admin trigger');
    }]
  })
}
