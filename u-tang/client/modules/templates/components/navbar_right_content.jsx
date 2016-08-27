/**
 * Material-UI Theme NavBar Right Content Component
 *
 * @author Jesus B. Nana <09178816360>
 */
import React from 'react';
import { IconButton, IconMenu, MenuItem } from 'material-ui';
import { NavigationExpandMore, SocialPerson, ActionInput }
  from 'material-ui/svg-icons';
import ActionPower from 'material-ui/svg-icons/action/power-settings-new';

export default class NavbarRightContent extends React.Component {

  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { user } = this.props;
    const signInLink = <MenuItem primaryText='Sign In' href='/login' leftIcon={<ActionInput/>} />;
    const profileLink = `${this.ucFirst(user ? user.username : ' ')}'s Profile`;
    const userLink =
      <div>
        <MenuItem primaryText={profileLink} leftIcon={<SocialPerson/>} href='/profile' />
        <MenuItem primaryText='Sign Out' leftIcon={<ActionPower/>} href='/logout' />
      </div>;
    return (
      <div>
        <IconMenu
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          iconButtonElement={
            <IconButton iconStyle={{color: '#ffffff', fill: '#ffffff'}}>
              <NavigationExpandMore />
            </IconButton>
          }
        >
          {user ? userLink : signInLink}
        </IconMenu>
      </div>
    );
  }
}
