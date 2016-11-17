import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';

import { hideAlert } from 'alertActions';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.props.dispatch(hideAlert());
  }

  render() {
    // Alert state store maps to Snackbar's attributes except for onRequestClose
    return (
      <Snackbar
        {...this.props.alert}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}

export default connect((state) => {
  return {
    alert: state.alert
  };
})(Alert);
