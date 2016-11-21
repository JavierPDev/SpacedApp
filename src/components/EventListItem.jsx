import React from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default function EventListItem(props) {
  const {summary, created, description, id} = props;

  return (
    <div>
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
