import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Person from 'material-ui/svg-icons/social/person';

import { startAuthFlow } from 'authActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    this.props.dispatch(startAuthFlow());
  }

  render() {
    return (
      <div className="callout text-center">
        <h2>Login</h2>
        <button className="button" onClick={this.handleLoginClick}>
          <Person /> Login with Google
        </button>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth
  };
})(Login);
