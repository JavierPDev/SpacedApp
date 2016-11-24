import React from 'react';
import moment from 'moment';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { setAppbarTitle } from 'appbarTitleActions';
import { startEventDeletion } from 'eventActions';
import { startEventsRetrieval } from 'eventsActions';
import BackButton from 'BackButton';

class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    const {eventId} = props.params;
    this.state = {
      event: props.events.find((event) => event.spacedId === eventId)
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle(this.state.event.summary));
  }

  handleDeleteClick(e) {
    this.props.dispatch(startEventDeletion(this.state.event))
      .then(() => {
        this.props.dispatch(startEventsRetrieval());
        browserHistory.push('/events');
      });
  }

  render() {
    const {summary, dates, created, realDescription} = this.state.event;
    const creator = this.state.event.creator.displayName;
    const createdDate = moment(created).format('dddd MM-DD-YYYY');
    const createdTime = moment(created).format('h:mm:ss a');
    const datesSubtitle = dates.map((date) => moment(date).format('MMM DD'))
                            .join(' | ');

    return (
      <div>
        <BackButton />
        <Card>
          <CardTitle title={summary} subtitle={datesSubtitle} />
          <CardText>
            <div>
              {realDescription}
            </div>
            <small style={{position: 'relative', top: '20px'}}>
              Created on {createdDate} at {createdTime} by {creator}
            </small>
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
