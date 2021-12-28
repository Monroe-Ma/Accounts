import React, { Children } from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav';
import { type } from 'os';
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

const Layout = (props:any) => { 
 return (
    < div>
     <Wrapper> 
        <Main>
         { props.children}
        </Main>
        <Nav /> 
     </Wrapper>
   </div>)
}

export default Layout