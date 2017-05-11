import React from 'react';
import { eventTypes } from './services';

const EventList = ({ selectEvent }) => (
  <nav>
    <ul>
      {eventTypes.map(eventType => (
        <li key={eventType} onClick={() => selectEvent(eventType)}>{eventType}</li>
      ))}
    </ul>
  </nav>
);

export default EventList;
