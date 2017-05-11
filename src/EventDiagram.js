import React from 'react';

const EventDiagram = ({ match }) => (
  <h3>{match.params.eventType}</h3>
);

export default EventDiagram;
