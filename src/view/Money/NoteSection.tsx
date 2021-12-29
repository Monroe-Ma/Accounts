import styled  from 'styled-components';
import React, {useRef, useState} from 'react';
const Wrapper = styled.section`
background: #f6f6f6;
padding: 0 16px;
font-size: 14px;
>label{
  span{ margin-right:16px};
  input{border:none; background:none;line-height:72px};
}
`;
const NoteSection: React.FC = () => {
  const [note, setNote] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const onBlur=( ) => {
    if (inputRef.current !== null) {
      setNote(inputRef.current.value);
    }
  };
    
  return (
  
<Wrapper>
     <label>
          <span>备注</span>
        <input type="text"
          placeholder='在这里添加备注'
          ref={inputRef}
          defaultValue={note}
          onBlur={onBlur}

        />
      </label>
      </Wrapper>
  )
}
export default NoteSection