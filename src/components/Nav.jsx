import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { toggleNavOpen } from 'navActions';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.props.dispatch(toggleNavOpen());
  }

  render() {
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
          <IndexLink to="/" activeClassName="active">
            <MenuItem primaryText="Home" onTouchTap={this.toggleNav} />
          </IndexLink>
          <Link to="/about" activeClassName="active">
            <MenuItem primaryText="About" onTouchTap={this.toggleNav} />
          </Link>
          <div className="full-height"></div>
        </Drawer>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    nav: state.nav
  };
})(Nav);
