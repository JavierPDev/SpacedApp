import React from 'react';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';

export default function Home() {
  const date = moment().format('MMM DD YYYY');
  return (
    <div>
      <h1>Home</h1>
      <DatePicker hintText={date} />
      <p>Welcome!</p>
    </div>
  );
}
