import styled  from 'styled-components';
const TagsSection = styled.section`
background-color: #ffffff;
padding: 12px 16px;
flex-grow: 1;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
>ol{
  margin-left: -12px;
    >li{
      background: #eee;
      border-radius:10px;
      display: inline-block;
      padding: 3px 16px;
      font-size: 14px;
      margin: 8px 12px;
   }
}
button{
  margin-top: 10px;
  background: none;
  border:none ;
  padding: 0 4px;
  border-bottom: 1px solid #333;
  color: #666;
}
`;
export default TagsSection