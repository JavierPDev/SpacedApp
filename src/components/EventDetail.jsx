import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { setAppbarTitle } from 'appbarTitleActions';
import BackButton from 'BackButton';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    const eventId = props.params.eventId;
    this.state = {
      event: props.events.find((event) => event.id === eventId)
    };
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle(this.state.event.summary));
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
            <Link to={`/events/${id}`}>
              <FlatButton label="View Event" />
            </Link>
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
