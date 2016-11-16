import React from 'react';

import Nav from 'Nav';

export default function Main(props) {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns small-12 medium-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}
