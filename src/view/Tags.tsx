import React from 'react';
import Layout from 'components/Layout';
import useTags from './useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link} from "react-router-dom";
function Tags() {
  const { tags, setTags } = useTags();
  const TagsList = styled.ol`
      background-color: #fff;
    >li{
      font-size: 18px;
      border-bottom: 1px solid #eee;
      line-height: 40px;
     
      margin: 0 16px;
    
     
      >a{
  display: flex;
      justify-content: space-between;
       align-items: center;
        padding: 10px 0;
      }
}
  `
  const Button = styled.button`
    border: none;
    background-color: #FFCB05;
    padding: 10px;
    border-radius: 10px;
    font-size: 18px;
  `
  const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `
  const Space = styled.div`
    height: 16px;
  `
return (
    <Layout>
      
      <TagsList>
        {tags.map(tag => 
          <li key={tag} >
            <Link to={ "/tags/"+tag }>
              <span className='oneLine'>{tag}</span> 
              <Icon name="arrow-right" /> 
            </Link>
          </li>
        )}

    </TagsList>
    <Center>
      <Space/>
      <Space/>
      <Space/>
      <Button>新建标签</Button>
    </Center>
    </Layout>
  )
}
export default Tags