import React from 'react';
import {mount} from 'react-mounter';
import Transactionlist from './containers/transactionlist';
import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/transactions', {
    name: 'transactions.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Transactionlist/>)
      });
    }
  });
}
