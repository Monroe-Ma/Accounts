import React from 'react';
import 'App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

import Money from 'view/Money';
import NoMatch from 'view/NoMatch';
import Statistics from 'view/Statistics';
import Tags from 'view/Tags';
const Wrapper = styled.div`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   font-family: -apple-system, "Helvetica Neue", "PingFang SC", sans-serif;
`;
const Main = styled.div`

flex-grow: 1;
overflow: auto;
`;

function App() {
  return (
<Router>
        <Switch>
          <Route path="/tag">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
         <Redirect exact from='/' to='/money' />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
       
     
     </Router>
  );
}
export default App;
