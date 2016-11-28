import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card } from 'material-ui/Card';

import { setAppbarTitle } from 'appbarTitleActions';
import { startEventCreation } from 'eventActions';
import { startEventsRetrieval } from 'eventsActions';
import BackButton from 'BackButton';
import InformationTab from 'InformationTab';
import DatesTab from 'DatesTab';
import RemindersTab from 'RemindersTab';

const styles = {
  tabDiv: {
    minHeight: '25vh',
    paddingLeft: '40px',
    paddingBottom: '40px'
  }
};

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('New Event'));
  }

  handleSubmit(event) {
    event.preventDefault()

    const {dates} = this.props.event;
    const {remindersEnabled} = this.props.event;
    const data = {
      summary: this.props.event.summary,
      description: this.props.event.description
    };
    const reminder = remindersEnabled ? {
      method: this.props.event.reminderMethod,
      minutes: this.props.event.reminderMinutes
    } : null;

    this.props.dispatch(startEventCreation(data, dates, reminder))
      .then((res) => {
        this.props.dispatch(startEventsRetrieval());
        browserHistory.push('/events');
      });
  }

  render() {
    return (
      <div>
        <BackButton />
        <form onSubmit={this.handleSubmit}>
          <Card>
            <Tabs>
              <Tab label="Information">
                <InformationTab style={styles.tabDiv} />
              </Tab>
              <Tab label="Dates">
                <DatesTab style={styles.tabDiv} />
              </Tab>
              <Tab label="Reminders">
                <RemindersTab style={styles.tabDiv} />
              </Tab>
            </Tabs>
          </Card>
          <FlatButton
            label="Add Event"
            primary={true}
            type="submit"
            style={{marginTop: '15px', float: 'right'}}
          />
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    event: state.event
  };
})(NewEventForm);
