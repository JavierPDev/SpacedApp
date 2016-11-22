import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default function EventListItem(props) {
  const {summary, created, realDescription, spacedId} = props;
  const url = `/events/${spacedId}`;

  return (
    <Link to={url} style={{textDecoration: 'none'}}>
      <Card>
        <CardTitle title={summary} subtitle={created} />
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
