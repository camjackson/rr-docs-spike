import React, { Component } from 'react';
import { FlexRow } from 'layabout';
import EventList from './EventList';
import Diagram from './Diagram';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: null,
    };
  }

  selectEvent = (event) => {
    this.setState({ selectedEvent: event });
  }

  render() {
    return (
      <div>
        <h2>Rabble Rouser Event Docs</h2>
        <FlexRow>
          <EventList selectEvent={this.selectEvent} />
          <Diagram selectedEvent={this.state.selectedEvent} />
        </FlexRow>
      </div>
    );
  }
}

export default App;
