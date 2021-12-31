
import React ,{useState} from 'react';
import { Warrper } from './NumberSection/Warrper';
import calculateOutput from "./NumberSection/calculateOutput"

const NumberSection: React.FC = () => { 
  const [output, _setOutput] = useState("0")
  const setOutput=( output:string ) => {
    if (output.length > 16) {
      output=output.slice(0, 16)
    } else if (output.length === 0) { 
      output="0"
    }
 _setOutput(output)
  }
  const addNumber = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) { return };
    if (text === "OK") { return };
    console.log(text, output);
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