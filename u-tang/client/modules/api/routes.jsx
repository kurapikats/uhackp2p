import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import ApiView from './containers/api_view';
export default function (injectDeps, {FlowRouter}) {
	const MainLayoutCtx = injectDeps(MainLayout);
	
/*	FlowRouter.route('/api', {
		name: '',
		action() {
			mount(MainLayoutCtx, {
				content: () => (<ApiView />)
			});
		}
	});*/
}
