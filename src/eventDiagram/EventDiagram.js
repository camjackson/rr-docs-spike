import React from 'react';
import { SpacedRow } from 'layabout';
import Consumers from './Consumers';
import Publishers from './Publishers';
import Kinesis from './Kinesis';

const EventDiagram = ({ match }) => (
  <div>
    <h2>{match.params.eventType}</h2>
    <SpacedRow alignCrossAxis="begin" spacing="around">
      <Publishers eventType={match.params.eventType} />
      <Kinesis />
      <Consumers eventType={match.params.eventType} />
    </SpacedRow>
  </div>
);

export default EventDiagram;
