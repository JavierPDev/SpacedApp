import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default function EventListItem(props) {
  const {summary, dates, realDescription, spacedId} = props;
  const url = `/events/${spacedId}`;
  const datesSubtitle = dates.map((date) => moment(date).format('MMM DD'))
                          .join(' | ');

  return (
    <Link to={url} style={{textDecoration: 'none'}}>
      <Card>
        <CardTitle title={summary} subtitle={datesSubtitle} />
        <CardText>
          {realDescription}
        </CardText>
        <CardActions>
          <FlatButton label="View Event" />
        </CardActions>
      </Card>
      <br />
    </Link>
  );
}
