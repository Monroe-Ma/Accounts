import React from 'react';
import Layout from 'components/Layout';
import useTags from './useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

function Tags() {
  const { tags, setTags } = useTags();
  const Tagslist = styled.ol`
      background-color: #fff;
    >li{
      font-size: 18px;
      border-bottom: 1px solid #eee;
      line-height: 40px;
      padding: 10px 0;
      margin: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
  const Spance = styled.div`
  height: 16px;
  `
return (
    <Layout>
      
      <Tagslist>
        {tags.map(tag => 
          <li key={tag} >
           <span className='oneLine'>{tag}</span> 
            <Icon name="arrow-right" /> 
          </li>
        )}

    </Tagslist>
    <Center>
      <Spance/>
      <Spance/>
      <Spance/>
      <Button>新建标签</Button>
    </Center>
    </Layout>
  )
}
export default Tags