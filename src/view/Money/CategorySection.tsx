import styled  from 'styled-components';
const CategorySection = styled.section`
>ul{
  display: flex;
  >li{
    width: 50%;
    text-align: center;
    background: #c4c4c4;
    padding: 10px 0;
    position: relative;
    &.selected::after{
      content: "";
      width: 100%;
      height: 3px;
      background: #333;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
`;
export default CategorySection