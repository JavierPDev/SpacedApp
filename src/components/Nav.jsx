import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Event from 'material-ui/svg-icons/action/event';
import Info from 'material-ui/svg-icons/action/info';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import PeopleOutline from 'material-ui/svg-icons/social/people-outline';

import { logout } from 'authActions';
import { displayAlert } from 'alertActions';
import { startAuthFlow } from 'authActions';
import { startEventsRetrieval } from 'eventsActions';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.handleChangeUserTouch = this.handleChangeUserTouch.bind(this);
    this.handleLogoutTouch = this.handleLogoutTouch.bind(this);
  }

  toggleNav() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  handleChangeUserTouch() {
    this.toggleNav();
    this.props.dispatch(startAuthFlow())
      .then(() => {
        this.props.dispatch(displayAlert('Changed user account'));
        this.props.dispatch(startEventsRetrieval());
      });
  }

  handleLogoutTouch() {
    this.props.dispatch(logout());
    this.props.dispatch(displayAlert('Logged out'));
    this.toggleNav();
  }

  render() {
    const renderUserControls = () => {
      if (!this.props.auth) return null;

      return (
        <div>
          <MenuItem
            primaryText="Change User Account"
            leftIcon={<PeopleOutline />}
            onTouchTap={this.handleChangeUserTouch}
          />
          <MenuItem
            primaryText="Logout"
            leftIcon={<PersonOutline />}
            onTouchTap={this.handleLogoutTouch}
          />
        </div>
      );
    };

    return (
      <div>
        <AppBar
          title={this.props.appbarTitle}
          onLeftIconButtonTouchTap={this.toggleNav}
          style={{position: 'fixed', top: 0}}
        />
        <Drawer
          open={this.state.navOpen}
          docked={false}
          onRequestChange={this.toggleNav}
        >
          <AppBar
            title="Navigation"
            onLeftIconButtonTouchTap={this.toggleNav}
          />
          <Link to="/events" activeClassName="active">
            <MenuItem
              primaryText="Events"
              leftIcon={<Event />}
              onTouchTap={this.toggleNav}
            />
          </Link>
          <Link to="/about" activeClassName="active">
            <MenuItem
              primaryText="About"
              leftIcon={<Info />}
              onTouchTap={this.toggleNav}
            />
          </Link>
          <Link to="/test" activeClassName="active">
            <MenuItem
              primaryText="Test"
              onTouchTap={this.toggleNav}
            />
          </Link>
          {renderUserControls()}
          <div className="full-height"></div>
        </Drawer>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth,
    appbarTitle: state.appbarTitle
  };
})(Nav);
