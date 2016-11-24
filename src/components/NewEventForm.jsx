import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import moment from 'moment';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Card } from 'material-ui/Card';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import Close from 'material-ui/svg-icons/navigation/close';

import { setAppbarTitle } from 'appbarTitleActions';
import { startEventCreation } from 'eventActions';
import BackButton from 'BackButton';
import HelpBlock from 'HelpBlock';

const styles = {
  cardDiv: {
    minHeight: '25vh',
    paddingLeft: '40px',
    paddingBottom: '40px'
  }
};

class NewEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddDate = this.handleAddDate.bind(this);
    this.handleReminderMethodChange = this.handleReminderMethodChange.bind(this);
    this.handleReminderMinutesChange = this.handleReminderMinutesChange.bind(this);
    this.handleReminderToggle = this.handleReminderToggle.bind(this);
    this.state = {
      reminderMethod: 'popup',
      reminderMinutes: 3 * 60,
      remindersEnabled: true,
      dates: [
        moment().add(24*3, 'hours').toDate(),
        moment().add(24*7, 'hours').toDate(),
        moment().add(24*14, 'hours').toDate()
      ]
    };
  }

  componentDidMount() {
    this.props.dispatch(setAppbarTitle('New Event'));
  }

  handleSubmit(event) {
    event.preventDefault()

    const data = {
      summary: this.refs.title.input.value,
      description: this.refs.description.input.value,
    };

    const {remindersEnabled} = this.state;

    const reminder = remindersEnabled ? {
      method: this.state.reminderMethod,
      minutes: this.state.reminderMinutes
    } : null;

    this.props.dispatch(startEventCreation(data, this.state.dates, reminder))
      .then((res) => browserHistory.push('/events'));
  }

  handleAddDate() {
    const dates = [
      ...this.state.dates,
      new Date()
    ];
    this.setState({dates});
  }

  handleReminderMethodChange(event, index, value) {
    this.setState({reminderMethod: value});
  } 

  handleReminderMinutesChange(event, index, value) {
    this.setState({reminderMinutes: value});
  } 

  handleReminderToggle(event) {
    this.setState({remindersEnabled: !this.state.remindersEnabled})
  }

  renderDatePickers() {
    let el = [];
    const minDate = new Date();

    this.state.dates.forEach((date, index) => {
      el.push(
        <div>
          <DatePicker
            hintText="Enter date"
            className="d-inline-block"
            key={index}
            value={this.state.dates[index]}
            minDate={minDate}
            onChange={
              (event, newDate) => {
                let dates = [...this.state.dates];
                dates[index] = newDate;
                this.setState({dates});
              }
            }
          />
          <Close 
            className="d-inline-block"
            onClick={
              () => {
                const newDates = this.state
                  .dates.filter((filterDate) => filterDate !== date);
                this.setState({dates: newDates});
              }
            }
          />
        </div>
      );
    })

    return el;
  }

  render() {
    return (
      <div>
        <BackButton />
        <form onSubmit={this.handleSubmit}>
          <Card>
            <Tabs>
              <Tab label="Information">
                <div style={styles.cardDiv}>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 push-sm-6">
                      <HelpBlock style={{marginTop: 30}}>
                        Enter your information here.
                      </HelpBlock>
                    </div>
                    <div className="col-xs-12 col-sm-6 pull-sm-6">
                      <TextField
                        hintText="Enter title here"
                        floatingLabelText="Title"
                        name="title"
                        ref="title"
                      />
                      <br />
                      <TextField
                        hintText="Enter description here"
                        floatingLabelText="Description"
                        name="description"
                        ref="description"
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Dates">
                <div style={styles.cardDiv}>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 push-sm-6">
                      <HelpBlock style={{marginTop: 30, marginBottom: 20}}>
                        Enter your information here.
                      </HelpBlock>
                    </div>
                    <div className="col-xs-12 col-sm-6 pull-sm-6">
                      {this.renderDatePickers()}
                      <br />
                      <FlatButton
                        secondary={true}
                        label="Add date"
                        onClick={this.handleAddDate}
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab label="Reminders">
                <div style={styles.cardDiv}>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 push-sm-6">
                      <HelpBlock style={{marginTop: 30, marginBottom: 20}}>
                        Enter your information here.
                      </HelpBlock>
                    </div>
                    <div className="col-xs-12 col-sm-6 pull-sm-6">
                      <div style={{maxWidth: 250}}>
                        <Toggle
                          label="Enable reminders?"
                          toggled={this.state.remindersEnabled}
                          onToggle={this.handleReminderToggle}
                        />
                      </div>
                      <SelectField
                        floatingLabelText="Reminder Method"
                        value={this.state.reminderMethod}
                        onChange={this.handleReminderMethodChange}
                        disabled={!this.state.remindersEnabled}
                      >
                        <MenuItem value={'email'} primaryText="Email" />
                        <MenuItem value={'popup'} primaryText="Notification" />
                      </SelectField>
                      <br />
                      <SelectField
                        floatingLabelText="Time"
                        value={this.state.reminderMinutes}
                        onChange={this.handleReminderMinutesChange}
                        disabled={!this.state.remindersEnabled}
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
