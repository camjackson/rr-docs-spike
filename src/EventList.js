import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { eventTypes } from './services';

const Nav = styled.nav`
  height: 100%;
  padding: 0 20px;
  border-right: 1px solid grey;
`;

const EventList = ({ style }) => (
  <Nav style={style}>
    <Link to="/"><h1>Rabble Rouser Docs</h1></Link>
    <h2>Events</h2>
    <ul>
      {eventTypes.map(eventType => (
        <li key={eventType}>
          <Link to={`/events/${eventType}`}>{eventType}</Link>
        </li>
      ))}
    </ul>
  </Nav>
);

export default EventList;
