import React from 'react';
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
function Money() {
  return (
    <MyLayout>
      <TagsSection>
     </TagsSection>
    <NoteSection>
       
      </NoteSection> 
    <CategorySection>
       
    </CategorySection>  
    <NumberSection>
      
    </NumberSection>
</MyLayout>
  );
}
export default Money