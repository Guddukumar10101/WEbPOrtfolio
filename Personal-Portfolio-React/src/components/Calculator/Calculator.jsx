import React, { useState } from 'react'
import './Calculator.css'
export const Calculator = () => {
const [display,setdisplay]=useState('')
let ButtonKeys=["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/","C"," Back","="]
let calculate=(e)=>{ let v=e.target.innerText

if(v!=="Back" || v!="=" || v!="C"){
    setdisplay(display.concat(v))
}   


if(v=="C"){
    setdisplay('')

}

 if(v==="="){
        let value=display.toString()
        let finsalvalue=eval(value)
        setdisplay(finsalvalue)

        
    }
}





  return(
<div className='calculator'>
<input type=" text" placeholder='Display' value={display}  readOnly />
<div className="buttons">
    {
     
ButtonKeys.map((x)=><div className="botton" onClick={calculate}>{x}</div> )
  
    }


</div>

</div>


  )
}
