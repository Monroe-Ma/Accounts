import styled from 'styled-components';
import {Link} from 'react-router-dom';
const NavWrapper = styled.nav`
 box-shadow: 0 0 3px rgba(0,0,0,0.25);
 list-style: 24px;
>ul{
   display: flex;
   >li{
      width: 33.333%;
      text-align: center;
      padding:16px;
      }
   }
`;
const Nav = () => { 
  return(
    <NavWrapper>
          <ul>
            <li>
              <Link to="/tag">标签</Link>
            </li>
            <li>
              <Link to="/money">记一笔</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
            
      </ul>
    </NavWrapper>
 )
}
export default Nav