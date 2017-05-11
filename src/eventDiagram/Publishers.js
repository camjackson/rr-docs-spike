import React from 'react';
import { services } from '../data';

const publishersOf = eventType => (
  Object.keys(services).reduce((publishers, serviceName) => (
    services[serviceName].publishes.includes(eventType) ? publishers.concat(serviceName) : publishers
  ), [])
);

const Publishers = ({ eventType }) => (
  <div>
    <h3>Publishers:</h3>
    <ul>
      {publishersOf(eventType).map(publisher => (
        <li key={publisher}>{publisher}</li>
      ))}
    </ul>
  </div>
);

export default Publishers;
