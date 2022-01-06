import React, { useState} from 'react';
import Layout from 'components/Layout';
import styled  from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberSection from './Money/NumberSection';
import { useRecords } from "hooks/useRecords"

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type Category = "-" | "+";
function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: "",
    category: "-" as Category,
    amount: 0
  });

  const onChange = (obj:Partial<typeof selected>) => {
    setSelected({
                     ...selected,
                     ...obj
                   })
  }
  const { records, addRecord } = useRecords();
  const submit = () => {
     addRecord(selected)

   }
  return (
    <MyLayout>
      {JSON.stringify(selected)}
      <hr/>
      <TagsSection value={selected.tagIds}
        onChange={(tagIds) => onChange({ tagIds })}>
     </TagsSection>
      <NoteSection value={selected.note}
        onChange={(note) => onChange({ note })}>
      </NoteSection> 
      <CategorySection value={selected.category}
        onChange={(category) => onChange({ category })}
      >
     </CategorySection>  
      <NumberSection value={selected.amount}
        onChange={(amount) => onChange({ amount })}
        onOk={ submit }>
      </NumberSection>
    </MyLayout>
)}
export default Money