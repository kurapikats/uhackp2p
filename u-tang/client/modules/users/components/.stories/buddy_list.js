import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import BuddyList from '../buddy_list.jsx';

storiesOf('users.BuddyList', module)
  .add('default view', () => {
    return (
      <BuddyList />
    );
  })
