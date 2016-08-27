import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NotFound from '../not_found.jsx';

storiesOf('templates.NotFound', module)
  .add('default view', () => {
    return (
      <NotFound />
    );
  })
