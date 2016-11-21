import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { setAppbarTitle } from 'appbarTitleActions';
import { startEventDeletion } from 'eventActions';
import BackButton from 'BackButton';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    const eventId = props.params.eventId;
    this.state = {
      event: props.events.find((event) => event.id === eventId)
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle(this.state.event.summary));
  }

  handleDeleteClick(e) {
    this.props.dispatch(startEventDeletion(this.state.event.id))
      .then(() => {
        browserHistory.push('/events');
      });
  }

  render() {
    const {summary, created, description, id} = this.state.event;

    return (
      <div>
        <BackButton />
        <Card>
          <CardTitle title={summary} subtitle={created} />
          <CardText>
            {description}
          </CardText>
          <CardActions>
            <FlatButton
              label="Delete Event"
              onClick={this.handleDeleteClick}
            />
          </CardActions>
        </Card>
        <br />
      </div>
    );
  }
}

export default connect((state) => {
  return {
    events: state.events
  };
})(EventDetail);
