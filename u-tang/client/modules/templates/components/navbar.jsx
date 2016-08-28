/**
 * Material-UI Theme NavBar Component
 *
 * @author Jesus B. Nana <09178816360>
 */
import React from 'react';
import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';
import NavBarRight from '../containers/navbar_right_content.js';

export default React.createClass({
  handleClick() {
    FlowRouter.go('/dashboard');
  },

  render() {
    const {title} = this.props;
    return (
      <AppBar
        title={title}
        style={{position: 'relative'}}
        iconElementLeft={<IconButton onTouchTap={this.handleClick}><Home /></IconButton>}
        iconElementRight={<NavBarRight />}
      />
    );
  }
});
