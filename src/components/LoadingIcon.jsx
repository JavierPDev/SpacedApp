import React from 'react';
import { connect } from 'react-redux';

import { setAppbarTitle } from 'appbarTitleActions';

const divStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  width: '75px',
  height: '75px',
  marginLeft: '-75xpx',
  marginTop: '-75px'
};

const imgUrl = require('../../assets/loading.gif');
const imgStyle = { width: '100%' };

class LoadingIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    if (this.props.loadingIcon) {
      return (
        <div style={divStyle}>
          <img src={imgUrl} style={imgStyle} />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return <div>{this.renderIcon()}</div>;
  }
}

export default connect((state) => {
  return {
    loadingIcon: state.loadingIcon
  };
})(LoadingIcon);
