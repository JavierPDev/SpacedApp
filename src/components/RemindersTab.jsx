import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

import { updateNewEvent } from 'eventActions';
import HelpBlock from 'HelpBlock';

class RemindersTab extends React.Component {
  constructor(props) {
    super(props);
    this.handleReminderMethodChange = this.handleReminderMethodChange.bind(this);
    this.handleReminderMinutesChange = this.handleReminderMinutesChange.bind(this);
    this.handleReminderToggle = this.handleReminderToggle.bind(this);
  }

  handleReminderMethodChange(event, index, value) {
    const newEventState = {
      ...this.props.event,
      reminderMethod: value
    };
    this.props.dispatch(updateNewEvent(newEventState));
  } 

  handleReminderMinutesChange(event, index, value) {
    const newEventState = {
      ...this.props.event,
      reminderMinutes: value
    };
    this.props.dispatch(updateNewEvent(newEventState));
  } 

  handleReminderToggle(event) {
    const newEventState = {
      ...this.props.event,
      remindersEnabled: !this.props.event.remindersEnabled
    };
    this.props.dispatch(updateNewEvent(newEventState));
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 push-sm-6">
            <HelpBlock style={{marginTop: 30, marginBottom: 20}}>
              Change how (and if) you would like to be reminded to review your knowledge.
            </HelpBlock>
          </div>
          <div className="col-xs-12 col-sm-6 pull-sm-6">
            <br className="hidden-xs-down" />
            <div style={{maxWidth: 250}}>
              <Toggle
                label="Enable reminders?"
                toggled={this.props.event.remindersEnabled}
                onToggle={this.handleReminderToggle}
              />
            </div>
            <SelectField
              floatingLabelText="Reminder Method"
              value={this.props.event.reminderMethod}
              onChange={this.handleReminderMethodChange}
              disabled={!this.props.event.remindersEnabled}
            >
              <MenuItem value={'email'} primaryText="Email" />
              <MenuItem value={'popup'} primaryText="Notification" />
            </SelectField>
            <br />
            <SelectField
              floatingLabelText="Time"
              value={this.props.event.reminderMinutes}
              onChange={this.handleReminderMinutesChange}
              disabled={!this.props.event.remindersEnabled}
            >
              <MenuItem value={15 * 60} primaryText="9am" />
              <MenuItem value={12 * 60} primaryText="12pm" />
              <MenuItem value={7 * 60} primaryText="5pm" />
              <MenuItem value={3 * 60} primaryText="9pm" />
              <MenuItem value={0} primaryText="12am" />
            </SelectField>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    event: state.event
  };
})(RemindersTab);
