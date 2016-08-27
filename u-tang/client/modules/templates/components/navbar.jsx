/**
 * Material-UI Theme NavBar Component
 *
 * @author Jesus B. Nana <09178816360>
 */
import React from 'react';
import { AppBar } from 'material-ui';
import NavBarRight from '../containers/navbar_right_content.js';

export default React.createClass({
  render() {
    const {title} = this.props;
    return (
      <AppBar
        title={title}
        style={{position: 'fixed'}}
        iconElementRight={<NavBarRight />}
      />
    );
  }
});
