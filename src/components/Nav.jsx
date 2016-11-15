import React from 'react';
import {Link, IndexLink} from 'react-router';


export default function Nav() {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      &nbsp;|&nbsp;
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
}

