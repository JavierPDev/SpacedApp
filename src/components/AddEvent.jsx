import React from 'react';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'fixed',
  bottom: '8%',
  right: '8%'
};

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddEvent() {
    console.log('ADD EVENT');
  }

  render() {
    return (
      <FloatingActionButton style={style} onClick={this.onAddEvent}>
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

export default connect()(AddEvent);
