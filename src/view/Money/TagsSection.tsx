import React from 'react';
import styled from 'styled-components';
import useTags from 'view/useTags';
import createdId from "lib/createdId"
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
type Props = {
  value: number[];
  onChange: (selected:number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags }=useTags()
  // const [Tags, setTags] = useState<string[]>(["衣", "食", "住", "行"])
  // const [selectedTags,setSelectedTags] =useState<string[]>([])
  const selectedTagIds = props.value;
  const onAddTag = () => { 
    const tagName = window.prompt("新标签的名称为")
    if (tagName !== null) { 
      setTags([...tags, {id:createdId(),name:tagName}])
    }
  }
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
     props.onChange([...selectedTagIds, tagId])
    };
  };
  const getClass = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? "selected" : ""
    }
  return (
    <Wrapper>
      <ol>
       {tags.map(tag=>
         <li key={tag.id}
           onClick={() => {
             onToggleTag(tag.id);
           }}
          className={getClass(tag.id)}>{tag.name}</li>
        )} 
        </ol>
        <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
}
export { TagsSection}