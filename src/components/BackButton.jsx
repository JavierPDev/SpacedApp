import React from 'react';
import { browserHistory } from 'react-router';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

export default function BackButton(props) {
  return (
      <ArrowBack style={{cursor: 'pointer'}} onClick={browserHistory.goBack} />
  );
}
