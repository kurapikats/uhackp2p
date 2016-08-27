import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import apiModule from './modules/api';
import templatesModule from './modules/templates';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(apiModule);
app.loadModule(templatesModule);
app.init();

// fix for material-ui touch-tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
