import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import "./components/Nav"
import Nav from './components/Nav';
const Wrapper = styled.div`
border: 1px solid red;
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
      <Wrapper> 
        <Main>
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
       </Main>
       <Nav/>
      </Wrapper>
     </Router>
  );
}
function NoMatch() {
  return(
    <div>页面不存在，好像是输错了</div>
  )
}
function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}
export default App;
