import React from 'react';
import { useParams } from 'react-router-dom';
import useTags from './useTags';
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import Button from 'components/Button';
import styled from 'styled-components';
import Input from 'components/Input';
import  Center from 'components/Center';
import Space from 'components/Space'
type Params = {
  id:string
}
const Topnav = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
font-size: 18px;
line-height: 44px;
padding: 0 10px;
`
const InputWrapper = styled.div`
  padding: 0 16px;
  background-color: #fff;
  margin-top:8px;
  line-height: 68px;
`
const Tag : React.FC<any> = (props) => {
  const { findTag ,upDateTag} = useTags()
  let { id:idString } = useParams<Params>()
  
const tag=findTag(parseInt(idString ))
  return (
    <Layout>
      <Topnav>
        <Icon name="arrow-left" />
        <span>编辑标签</span>
         <Icon/>
      </Topnav>
     <InputWrapper>
        <Input label='标签名' placeholder="标签名" value={tag.name}
          onChange={(e) => { upDateTag(tag.id, { name: e.target.value }) }} />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        
        <Button>删除标签</Button>
        </Center>
    
    </Layout>
    
  )
}
export default Tag