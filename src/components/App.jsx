import React from 'react';

import Nav from 'Nav';
import Alert from 'Alert';
import LoadingIcon from 'LoadingIcon';

export default function App(props) {
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
      <LoadingIcon />
      </div>
    </div>
  );
}
