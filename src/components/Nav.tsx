import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';

const NavWrapper = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 list-style: 24px;
 >ul{
   display: flex;
   >li{
      
      text-align: center;
      width: 33.333%;
      padding: 4px 0;
      >a{
       padding:16px;
       display: flex;
       flex-direction: column;
       align-items: center;
        .icon{
          width: 32px;
          height: 32px;
         }  
       }
    }
  }
`;
const Nav = () => { 
  return(
    <NavWrapper>
    <ul>
        <li>
          <NavLink to="/tag" className="selection">
             <Icon name='biaoqian' />
            标签
          </NavLink>
        </li>
        
        <li>  
          <NavLink to="/money" className="selection">
             <Icon name='jizhangben' />
            记一笔
          </NavLink>
        </li>
        
        <li>     
          <NavLink to="/statistics" className="selection">
             <Icon name='tongji' />
            统计
          </NavLink>
        </li>
        
    </ul>
    </NavWrapper>
 )
} 
export default Nav