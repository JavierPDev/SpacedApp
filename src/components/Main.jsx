import React from 'react';

import Nav from 'Nav';

export default function Main(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

