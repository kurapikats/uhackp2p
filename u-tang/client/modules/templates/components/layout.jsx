/**
 * Material-UI Theme Layout Component
 *
 * @author Jesus B. Nana <09178816360>
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Layout extends Component {
  render() {
    const { content } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <div className='middle'>
            <div className='content'>
              { content() }
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
