import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
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
      &.selected{
        background: #FFCB05;
      }
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
const TagsSection: React.FC = () => {
  const [Tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  const [selectedTags,setSelectedTags] =useState<string[]>([])
  const onAddTag = () => { 
    const tagName = window.prompt("新标签的名称为")
    if (tagName !== null) { 
      setTags([...Tags,tagName])
    }
  }
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag])
    };
  };
  const getClass = (tag: string) => {
    return selectedTags.indexOf(tag) >= 0 ? "selected" : ""
    }
  return (
    <Wrapper>
      <ol>
       {Tags.map(tag=>
         <li key={tag}
           onClick={() => {
             onToggleTag(tag);
           }}
          className={getClass(tag)}>{tag}</li>
        )} 
        </ol>
        <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );

}


export { TagsSection}