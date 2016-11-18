import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink, browserHistory } from 'react-router';
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

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      browserHistory.push('/events');
    }
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('Login'));
  }

  handleLoginClick() {
    this.props.dispatch(startAuthFlow());
  }

  render() {
    return (
        <RaisedButton
          label="Login with google"
          primary={true}
          onClick={this.handleLoginClick}
          icon={<Person />}
        />
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth
  };
})(Login);
