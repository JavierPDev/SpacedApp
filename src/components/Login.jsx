import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Person from 'material-ui/svg-icons/social/person';

import { startAuthFlow } from 'authActions';
import { setAppbarTitle } from 'appbarTitleActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Login'));
  }

  handleLoginClick() {
    this.props.dispatch(startAuthFlow());
  }

  render() {
    return (
      <div className="callout text-center">
        <h2>Login</h2>
        <RaisedButton
          label="Login with google"
          primary={true}
          onClick={this.handleLoginClick}
          icon={<Person />}
        />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth
  };
})(Login);
