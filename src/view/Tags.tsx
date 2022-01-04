import React from 'react';
import Layout from 'components/Layout';
import useTags from './useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from "react-router-dom";
import Button from 'components/Button';
import Center from 'components/Center';
import Space from "components/Space"
function Tags() {
  const { tags} = useTags();
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
return (
    <Layout>
      
      <TagsList>
        {tags.map(tag => 
          <li key={tag.id} >
            <Link to={ "/tags/"+tag.id }>
              <span className='oneLine'>{tag.name}</span> 
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