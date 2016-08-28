/**
 * Users Module Routes
 *
 * @author Jesus B. Nana <09178816360>
 */
import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Dashboard from './containers/dashboard';
import Profile from './containers/profile';
//import { LayoutDefault, NotFound } from '/client/configs/components.js';
import Enroll from './containers/enroll';
import EnrollList from './containers/enroll_list';
import Pending from './containers/pendings';
import Borrowers from './containers/borrowers';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  function checkUserLoggedIn(ctx, redirect) {
    let route = FlowRouter.current();
    console.log(route.route.name);
    if (Meteor.userId()) {

    } else {
      console.log("user does not exist!");
      if(route.route.name == 'login' || route.route.name == 'register' ) {
        console.log('test');
      } else {
        FlowRouter.go('/login');
      }
    }
  }

  FlowRouter.route('/dashboard',{
    name: 'dashboard',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<Dashboard />)
      })
    }
  });

  FlowRouter.route('/profile',{
    name: 'profile',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<Profile />)
      })
    }
  });

  FlowRouter.route('/enroll',{
    name: 'enroll',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<Enroll />)
      })
    }
  });

  FlowRouter.route('/enroll-list',{
    name: 'enroll',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<EnrollList />)
      })
    }
  });

  FlowRouter.route('/pending',{
    name: 'pending',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<Pending />)
      })
    }
  });

  FlowRouter.route('/borrowers',{
    name: 'borrowers',
    triggersEnter: [checkUserLoggedIn],
    action(){
      mount(MainLayoutCtx, {
        content: ()=> (<Borrowers />)
      })
    }
  });



  // FlowRouter.route('', {
  //   name: '',
  //   action() {
  //     mount(MainLayoutCtx, {
  //       content: () => (< />)
  //     });
  //   }
  // });

  //FlowRouter.route('/users', {
  //  name: 'viewUsers',
  //  action() {
  //    mount(LayoutDefault, {
  //      LayoutDefault, content: () => (<ViewDomain domainId={domainId} />)
  //    });
  //  }
  //});

}

/////
//
//
// import ListDomains from './containers/listDomains';
// import ViewDomain from './containers/viewDomain';
// import NewDomain from './containers/newDomain';
// import EditDomain from './containers/editDomain';
//
// import {adminGroupRoute} from '../core/routes';
//
// export default function (injectDeps, {FlowRouter}) {
//   const AuthCheckCtx = injectDeps(AuthCheck);
//
//   adminGroupRoute.route('/domain/new', {
//     name: 'newDomain',
//     action() {
//       mount(AuthCheckCtx, {
//         LayoutDefault, content: () => (<NewDomain />)
//       });
//     }
//   });
//
//   adminGroupRoute.route('/domain/:domainId', {
//     name: 'viewDomain',
//     action({domainId}) {
//       mount(AuthCheckCtx, {
//         LayoutDefault, content: () => (<ViewDomain domainId={domainId} />)
//       });
//     }
//   });
//
//   adminGroupRoute.route('/domain/edit/:domainId', {
//     name: 'editDomain',
//     action({domainId}) {
//       mount(AuthCheckCtx, {
//         LayoutDefault, content: () => (<EditDomain domainId={domainId} />)
//       });
//     }
//   });
//
//   adminGroupRoute.route('/domains', {
//     name: 'listDomains',
//     action() {
//       mount(AuthCheckCtx, {
//         LayoutDefault, content: () => (<ListDomains />)
//       });
//     }
//   });
// }
