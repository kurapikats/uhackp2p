import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import BuddyItem from '../buddy_item.jsx';

storiesOf('users.BuddyItem', module)
  .add('default view', () => {
    return (
      <BuddyItem />
    );
  })
