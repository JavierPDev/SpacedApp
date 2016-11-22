import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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

  render() {
    return (
      <Link to="/events/new" style={style}>
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </Link>
    );
  }
}

export default connect()(AddEventButton);
