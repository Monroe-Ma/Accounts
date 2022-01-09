import React, { useState} from 'react';
import Layout from 'components/Layout';
import styled  from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberSection from './Money/NumberSection';
import {useRecords} from "hooks/useRecords"
const CategorySectionWrapper = styled.div`
background: #c4c4c4;
`;

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type Category = "-" | "+";
const defaultFormData = {
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0
  }

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const { addRecord } = useRecords();
  const submit = () => {
    if(addRecord(selected)){
      alert("保存成功了")
      setSelected(defaultFormData)
      }
  }
  return (
    <MyLayout scrollTop={999999}>
      <TagsSection value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}>
     </TagsSection>
      <NoteSection value={selected.note}
        onChange={(note) => onChange({ note })}>
      </NoteSection> 
      <CategorySectionWrapper>
      <CategorySection value={selected.category}
        onChange={(category) => onChange({ category })}
      >
        </CategorySection>  
      </CategorySectionWrapper>
      <NumberSection
        value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={submit}
      >
      </NumberSection>
    </MyLayout>
)}
export default Money