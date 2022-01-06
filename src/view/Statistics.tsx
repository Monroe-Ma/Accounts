import React from 'react';
import Layout from 'components/Layout';
import CategorySection from './Money/CategorySection';
import { useState } from 'react';
import styled from 'styled-components';
import { useRecords } from 'hooks/useRecords';
import useTags from 'hooks/useTags';
import day from "dayjs";

const CategorySectionWrapper = styled.div`
background: #fff;
`;
const Item = styled.div`
background: #fff;
display: flex;
justify-content: space-between;
border-bottom:1px solid #eee;
padding: 10px 10px;
   >ul{
  >li{

  .textContent{
      font-size: 13px;
      margin-right:6px;
      color: #999;
      margin-top: 6px;
    }
    
  }
}
  >div{
    font-weight: 600;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<"+" | "-">("-")
  const { records } = useRecords()
  const {getTagName} =useTags()
  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)} />
      </CategorySectionWrapper>
      <div >
        {records.map(r => { 
          return <Item >
       
            <ul >
             <li> {r.tagIds.map(tagId => { return <span >{getTagName(tagId)}</span> })}</li>
              
              <li>
                <span className='textContent'> {day(r.createdAt).format("YYYY年MM月DD日")}</span>
                <span className='textContent'>{r.note} </span>
              </li>
              </ul>
    
              <div>￥{r.amount}</div>
              
      
          </Item>
           })}
     </div>
            
    </Layout>
  );
}
export default Statistics


