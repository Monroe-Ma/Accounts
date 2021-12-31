import React, { useState} from 'react';
import Layout from 'components/Layout';
import styled  from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberSection from './Money/NumberSection';


const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type Category = "-" | "+";
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as Category ,
    amount:0
  })
  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={(tags)=>setSelected({
                     ...selected,
                     tags:tags
                   })}>
     </TagsSection>
      <NoteSection value={selected.note}
        onChange={(note) => setSelected({
          ...selected,
          note:note
                   })}>
      </NoteSection> 
      <CategorySection value={selected.category}
        onChange={(category) => setSelected({
          ...selected,
          category:category
        })}
      >
     </CategorySection>  
      <NumberSection value={selected.amount}
        onChange={(amount) => setSelected({
          ...selected,
          amount: amount
        })}
        onOk={()=>{ }}>
      </NumberSection>
    </MyLayout>
)}
export default Money