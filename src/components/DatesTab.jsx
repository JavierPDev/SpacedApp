import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Close from 'material-ui/svg-icons/navigation/close';

import { updateNewEvent } from 'eventActions';
import { displayAlert } from 'alertActions';
import HelpBlock from 'HelpBlock';

class DatesTab extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddDate = this.handleAddDate.bind(this);
  }

  handleAddDate(event) {
    event.preventDefault();

    if (this.props.event.dates.length > 10) {
      const alertMessage = 'Too many dates. Only up to ten are allowed.';
      this.props.dispatch(displayAlert(alertMessage));
      return;
    }

    const latestDate = this.props.event.dates
      .map((date) => date.valueOf())
      .sort()
      .reverse()[0];
    const dates = [
      ...this.props.event.dates,
      moment(latestDate).add(3, 'days').toDate()
    ];
    const newEventState = {...this.props.event, dates: [...dates]};

    this.props.dispatch(updateNewEvent(newEventState));
  }

  renderDatePickers() {
    const minDate = new Date();

    return this.props.event.dates.map((date, index) => {
      return (
        <div key={Math.floor(Math.random() * 1000).toString()}>
          <DatePicker
            hintText="Enter date"
            className="d-inline-block"
            value={this.props.event.dates[index]}
            minDate={minDate}
            onChange={
              (event, newDate) => {
                let dates = [...this.props.event.dates];
                dates[index] = newDate;

                const newEventState = {...this.props.event, dates: [...dates]};
                this.props.dispatch(updateNewEvent(newEventState));
              }
            }
          />
          <Close 
            className="d-inline-block"
            onClick={
              () => {
                const dates = this.props.event
                  .dates.filter((filterDate) => filterDate !== date);

                const newEventState = {...this.props.event, dates: [...dates]};
                this.props.dispatch(updateNewEvent(newEventState));
              }
            }
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 push-sm-6">
            <HelpBlock style={{marginTop: 30, marginBottom: 20}}>
              Choose the dates on which you want to review what you have learned. <a href="https://en.wikipedia.org/wiki/Spaced_repetition" target="_blank">Spaced repition</a> helps keep information in long-term memory. 
            </HelpBlock>
          </div>
          <div className="col-xs-12 col-sm-6 pull-sm-6">
            <br className="hidden-xs-down" />
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
    );
  }
}

export default connect((state) => {
  return {
    event: state.event
  };
})(DatesTab);
