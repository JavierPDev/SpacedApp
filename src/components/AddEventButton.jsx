import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'fixed',
  bottom: '8%',
  right: '8%'
};

class AddEventButton extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddEvent() {
    browserHistory.push('/events/new');
  }

  render() {
    return (
      <FloatingActionButton style={style} onClick={this.onAddEvent}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

export default connect()(AddEventButton);
