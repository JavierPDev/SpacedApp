import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import { setAppbarTitle } from 'appbarTitleActions';

const divStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  marginLeft: '-30px',
  marginTop: '-30px'
};

class LoadingIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    if (this.props.loadingIcon) {
      return (
        <div style={divStyle}>
          <CircularProgress size={60} thickness={7} />
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
