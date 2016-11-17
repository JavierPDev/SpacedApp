import React from 'react';

import Nav from 'Nav';
import Alert from 'Alert';

export default function Main(props) {
  return (
    <div>
      <Nav />
      <div className="container">
      <div className="row" style={{marginTop: '30px'}}>
        <div className="col-sm-12 col-md-8">
          {props.children}
        </div>
      </div>
      <Alert />
      </div>
    </div>
  );
}
