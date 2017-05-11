import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FlexRow } from 'layabout';
import EventList from './EventList';
import Home from './Home';
import PickAnEvent from './PickAnEvent';
import EventDiagram from './eventDiagram/EventDiagram';

const Div = styled.div`
  height: 100%;
`;

const Main = styled.main`
  text-align: center;
`;

//TODO: Wtf is going on with the flex basis?

const App = () => (
  <Router>
    <FlexRow container={Div} sizes={[1, 4, 0.2]}>
      <EventList />
      <Main>
        <Route path="/" exact component={Home} />
        <Route path="/events" exact component={PickAnEvent}/>
        <Route path="/events/:eventType" component={EventDiagram} />
      </Main>
    </FlexRow>
  </Router>
);

export default App;
