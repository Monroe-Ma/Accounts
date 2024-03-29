
import React, {useState } from 'react';
import { Warrper } from './NumberSection/Warrper';
import calculateOutput from "./NumberSection/calculateOutput"
type Props = {
  value: number
  onChange: (value: number) => void
  onOk?:()=>void
}
const NumberSection: React.FC<Props> = (props) => { 
  const [output, _setOutput]=useState(props.value.toString())
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput=output.slice(0, 16)
    } else if (output.length === 0) { 
      newOutput="0"
    } else {
      newOutput = output
    }
    _setOutput(newOutput)
    props.onChange(parseFloat(newOutput))
  }
  const addNumber = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) { return };
    if (text === "OK") {
    if(props.onOk){ props.onOk()}
      return
    };
    if ("0123456789.".split("").concat(["删除","清空"]).indexOf(text)>=0 ){
      setOutput(calculateOutput(text,output) ||"")
    } 
  }
  return (
  <Warrper>
    <div className='output'>
        { output }
        </div>  
      <div className='pad clearfix' onClick={addNumber}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
           <button className='ok'>OK</button>
          <button className='zero'>0</button>
          <button>.</button>
        </div>
</Warrper>
)
}
export default NumberSection 