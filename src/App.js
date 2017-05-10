import React, { Component } from 'react';
import { eventTypes } from './services';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Rabble Rouser Event Docs</h2>
        <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
        <ol>
          {eventTypes.map(eventType => (
            <li key={eventType}>{eventType}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
