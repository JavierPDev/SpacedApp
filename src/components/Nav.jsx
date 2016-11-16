import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Event from 'material-ui/svg-icons/action/event';
import Info from 'material-ui/svg-icons/action/info';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';

import { toggleNavOpen } from 'navActions';
import { logout } from 'authActions';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  toggleNav() {
    this.props.dispatch(toggleNavOpen());
  }

  handleLogout() {
    this.props.dispatch(logout());
    this.toggleNav();
  }

  render() {
    const renderLogout = () => {
      if (!this.props.auth) return null;
      return <MenuItem
        primaryText="Logout"
        leftIcon={<PersonOutline />}
        onTouchTap={this.handleLogout}
      />;
    };

    return (
      <div>
        <AppBar
          title="Spaced"
          onLeftIconButtonTouchTap={this.toggleNav}
        />
        <Drawer
          open={this.props.nav.open}
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
          {renderLogout()}
          <div className="full-height"></div>
        </Drawer>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth,
    nav: state.nav
  };
})(Nav);
