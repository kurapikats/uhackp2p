import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ApiView from '../api_view.jsx';

storiesOf('api.ApiView', module)
  .add('default view', () => {
    return (
      <ApiView />
    );
  })
