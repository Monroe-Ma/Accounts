import React from 'react';
import 'App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Tag from 'view/Tag';
import Money from 'view/Money';
import NoMatch from 'view/NoMatch';
import Statistics from 'view/Statistics';
import Tags from 'view/Tags';
const AppWrapper = styled.div`
color: #333;
`;
function App() {
  return (
<AppWrapper>
  <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
            <Route exact path="/tags/:id">
            <Tag/>
          </Route>
          <Route exact  path="/money">
            <Money />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
         <Redirect exact from='/' to='/money' />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
  </Router>
</AppWrapper>
  );
}
export default App;
