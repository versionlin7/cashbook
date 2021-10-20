import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Tags from 'views/tags';
import Money from 'views/money';
import Statistics from 'views/statistics';
import NoMatch from 'views/noMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
