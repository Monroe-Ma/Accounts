import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from './Icon';

const NavWrapper = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 list-style: 24px;
>ul{
   display: flex;
   >li{
      width: 33.333%;
      text-align: center;
      padding:16px;
      display: flex;
      flex-direction: column;
    align-items: center;
    padding: 4px 0;
    .icon{
      width: 32px;
      height: 32px;
    }
      }
   }
`;
const Nav = () => { 
  return(
    <NavWrapper>
    <ul>
        <li>
          <Icon name='biaoqian' />
              <Link to="/tag">标签</Link>
            </li>
        <li>
            <Icon name='jizhangben' />
              <Link to="/money">记一笔</Link>
            </li>
        <li>
              <Icon name='tongji' />
              <Link to="/statistics">统计</Link>
            </li>
            
    </ul>
    </NavWrapper>
 )
} 
export default Nav