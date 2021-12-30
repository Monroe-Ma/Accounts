import styled  from 'styled-components';
import React, { useState } from 'react';
const Wrapper = styled.section`
>ul{
  display: flex;
  >li{
    width: 50%;
    text-align: center;
    background: #c4c4c4;
    padding: 10px 0;
    position: relative;
    &.selected::after{
      content: "";
      width: 100%;
      height: 3px;
      background: #333;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}
`;
const CategorySection: React.FC = () => { 
  const  categoryMap = { "-": "支出", "+": "收入" };
  const [category, setCategory] = useState("-");
  const [categoryList] = useState<("-" | "+")[]>([ "-", "+"]);
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c => 
          <li  key={c}
            className={category === c ? "selected" : ""}
            onClick={() => { setCategory(c) }}
          >{categoryMap[c]}</li>
        )}</ul>
    </Wrapper>
    )
  }
export default CategorySection