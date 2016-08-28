import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Transactionlist from '../transactionlist.jsx';

storiesOf('transactions.Transactionlist', module)
  .add('default view', () => {
    return (
      <Transactionlist />
    );
  })
