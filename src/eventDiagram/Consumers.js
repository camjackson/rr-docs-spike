import React from 'react';
import { services } from '../data';

const consumersOf = eventType => (
  Object.keys(services).reduce((consumers, serviceName) => (
    services[serviceName].consumes.includes(eventType) ? consumers.concat(serviceName) : consumers
  ), [])
);

const Consumers = ({ eventType }) => (
  <div>
    <h3>Consumers:</h3>
    <ul>
      {consumersOf(eventType).map(consumer => (
        <li key={consumer}>{consumer}</li>
      ))}
    </ul>
  </div>
);

export default Consumers;
